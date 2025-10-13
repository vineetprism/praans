
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { marked } from "marked";


// ---- Deterministic formatters ----
const TIME_FMT = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Kolkata",
});

const DATE_FMT = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: "Asia/Kolkata",
});

// ---- Client-only text renderers to avoid hydration diff ----
function TimeText({ iso }: { iso: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <span suppressHydrationWarning>{mounted ? TIME_FMT.format(new Date(iso)) : ""}</span>;
}

function DateText({ iso }: { iso: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <span suppressHydrationWarning>{mounted ? DATE_FMT.format(new Date(iso)) : ""}</span>;
}



marked.setOptions({ gfm: true, breaks: true });

// ---------------- Types ----------------
type Role = "user" | "assistant" | "system";
type ServerMsgType =
  | "conversation_started"
  | "conversation_ended"
  | "message_received"
  | "progress_update"
  | "assistant_stream_output" 
  | "response_complete"
  | "agent_handoff"
  | "tool_call"
  | "error"
  | "pong";

type ServerMessage = { type: ServerMsgType; data: any };

type ChatMsg = {
  id: string;
  role: Role;
  content: string; // assistant/system stored as HTML (markdown parsed)
  ts: string;      // ISO string
  agent?: string;
  streaming?: boolean;
};

// ---------------- Constants ----------------
const WS_FALLBACK_HOST = "100.120.107.80:8000"; // change if needed
const HEARTBEAT_MS = 30_000;

// ---------------- Utils ----------------
const isoNow = () => new Date().toISOString();

const hhmm = (iso: string) => {
  try {
    return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "--:--";
  }
};

// Accept http/https/wss/ws or host:port and normalize to ws(s)://host
function normalizeWsBase(raw?: string | null): string {
  if (!raw) return "";
  const v = raw.trim();
  if (!v) return "";
  try {
    const u = new URL(v);
    if (u.protocol === "http:") u.protocol = "ws:";
    if (u.protocol === "https:") u.protocol = "wss:";
    return `${u.protocol}//${u.host}`.replace(/\/+$/, "");
  } catch {
    if (/^wss?:\/\//i.test(v)) return v.replace(/\/+$/, "");
    return `ws://${v.replace(/\/+$/, "")}`;
  }
}

function buildWsUrl(clientId: string) {
  // Prefer env var
  const fromEnv = normalizeWsBase(process.env.NEXT_PUBLIC_WS_BASE as string);
  if (fromEnv) return `${fromEnv}/ws/${clientId}`;

  // SSR fallback
  if (typeof window === "undefined") return `ws://${WS_FALLBACK_HOST}/ws/${clientId}`;

  // Dev default: same host, port heuristic
  const isHttps = window.location.protocol === "https:";
  const proto = isHttps ? "wss:" : "ws:";
  const host = window.location.hostname || WS_FALLBACK_HOST.split(":")[0];
  const port = window.location.port === "3000" ? "8000" : window.location.port || (isHttps ? "443" : "80");
  return `${proto}//${host}:${port}/ws/${clientId}`;
}

// ---------------- Component ----------------
export default function SocketAssistantPage() {
  // Connection/session
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [connected, setConnected] = useState(false);
  const [conversationActive, setConversationActive] = useState(false);
  const [currentAgent, setCurrentAgent] = useState("System");
  const [isTyping, setIsTyping] = useState(false);

  // UI/Chat state
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMsg[][]>([]);
  const [currentSessionIndex, setCurrentSessionIndex] = useState(-1);
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      id: "sys-welcome",
      role: "system",
      content: marked.parse("Welcome! Click **Start Conversation** to begin chatting with the Labour Code Compliance Advisor."),
      ts: isoNow(),
    },
  ]);

  // Refs (for reliable streaming)
  const clientIdRef = useRef(`client_${Math.random().toString(36).slice(2)}_${Date.now()}`);
  const containerRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const streamingBufferRef = useRef<string>("");
  const streamingMsgIdRef = useRef<string | null>(null); // single ongoing assistant bubble
  const lastErrorAtRef = useRef<number>(0);

  // Auto scroll state - Claude-like behavior
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  // ------------- Scroll mgmt - Improved Claude-like -------------
  const scrollToBottom = (force = false) => {
    const end = endRef.current;
    const cont = containerRef.current;
    if (!end || !cont) return;
    
    if (force || shouldAutoScroll) {
      end.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  // Handle scroll detection for auto-scroll behavior
  const handleScroll = () => {
    const cont = containerRef.current;
    if (!cont) return;
    
    const { scrollTop, scrollHeight, clientHeight } = cont;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
    

    setShouldAutoScroll(distanceFromBottom < 50);
  };

  useEffect(() => {
    const cont = containerRef.current;
    if (cont) {
      cont.addEventListener('scroll', handleScroll);
      return () => cont.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => scrollToBottom(), 100);
    return () => clearTimeout(t);
  }, [messages, isTyping, shouldAutoScroll]);

  // ------------- Connect WS -------------
  const connect = () => {
    const url = buildWsUrl(clientIdRef.current);
    const sock = new WebSocket(url);

    sock.onopen = () => setConnected(true);

    sock.onmessage = (e) => {
      try {
        const msg: ServerMessage = JSON.parse(e.data);
        handleServerMessage(msg);
      } catch {
        pushError("Failed to parse server message");
      }
    };

    sock.onclose = () => {
      setConnected(false);
      setConversationActive(false);
      // finalize any partial stream
      if (streamingMsgIdRef.current) {
        const id = streamingMsgIdRef.current;
        streamingMsgIdRef.current = null;
        streamingBufferRef.current = "";
        setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, streaming: false } : m)));
      }
      setTimeout(connect, 3000);
    };

    sock.onerror = () => {
      const now = Date.now();
      if (now - lastErrorAtRef.current > 4000) {
        pushError("Connection error");
        lastErrorAtRef.current = now;
      }
      // let onclose handle reconnect
    };

    setWs(sock);
  };

  useEffect(() => {
    connect();
    const hb = setInterval(() => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: "ping", data: {} }));
      }
    }, HEARTBEAT_MS);
    return () => clearInterval(hb);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ------------- Send helpers -------------
  const send = (type: string, data: any) => {
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      pushError("Not connected to server");
      return;
    }
    ws.send(JSON.stringify({ type, data }));
  };

  // ------------- Message helpers -------------
  const pushMsg = (
    role: Role,
    htmlOrMd: string,
    opts?: { agent?: string; streaming?: boolean; isMarkdown?: boolean; id?: string }
  ) => {
    const content = opts?.isMarkdown ? marked.parse(htmlOrMd) : htmlOrMd;
    const id = opts?.id ?? `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    setMessages((prev) => [
      ...prev,
      { id, role, content, ts: isoNow(), agent: opts?.agent, streaming: !!opts?.streaming },
    ]);
    return id;
  };

  const pushError = (text: string) => {
    pushMsg("system", `<div class="text-red-600">⚠️ ${text}</div>`);
  };

  const finalizeStreamingNow = () => {
    const targetId = streamingMsgIdRef.current;
    streamingBufferRef.current = "";
    if (targetId) {
      setMessages((prev) => prev.map((m) => (m.id === targetId ? { ...m, streaming: false } : m)));
    }
    streamingMsgIdRef.current = null;
  };

  // ------------- Server event handler - Improved to reduce noise -------------
  const handleServerMessage = (msg: ServerMessage) => {
    const { type, data } = msg;

    switch (type) {
      case "conversation_started":
        setConversationActive(true);
        setCurrentAgent(data?.agent ?? "Assistant");
        // Only show a simple ready message, not the full "conversation started" message
        break;

      case "conversation_ended":
        setConversationActive(false);
        pushMsg("system", data?.message ?? "Conversation ended.", { agent: data?.agent });
        finalizeStreamingNow();
        break;

      case "message_received":
        // Skip showing "message received" notifications
        break;

      case "progress_update":
        setIsTyping(true);
        if (data?.agent) setCurrentAgent(data.agent);
        // Don't show progress updates as messages
        break;

      case "assistant_stream_output": {
        setIsTyping(false);
        const chunk = (data?.message ?? "").replace(/\r\n/g, "\n");

        // FIRST CHUNK => create one streaming message and store its id
        if (!streamingMsgIdRef.current) {
          const newId = pushMsg("assistant", "", {
            agent: data?.agent,
            streaming: true,
            id: `stream-${Date.now()}`,
          });
          streamingMsgIdRef.current = newId;
          streamingBufferRef.current = "";
        }

        // Append + render markdown
        streamingBufferRef.current += chunk;
        const html = marked.parse(streamingBufferRef.current);

        // Update the SAME message by id
        const targetId = streamingMsgIdRef.current;
        if (targetId) {
          setMessages((prev) => {
            const idx = prev.findIndex((m) => m.id === targetId);
            if (idx === -1) return prev;
            const clone = [...prev];
            clone[idx] = { ...clone[idx], content: html, agent: data?.agent };
            return clone;
          });
        }
        break;
      }

      case "response_complete":
        setIsTyping(false);
        finalizeStreamingNow();
        break;

      case "agent_handoff":
        if (data?.agent) setCurrentAgent(data.agent);
        // finalize ongoing bubble on handoff
        finalizeStreamingNow();
        // Only show agent handoff if it's a significant change
        if (data?.agent && data.agent !== currentAgent) {
          pushMsg("system", `Switched to: ${data.agent}`, { agent: data?.agent });
        }
        break;

      case "tool_call":
        // Only show important tool calls, not routine ones
        if (data?.message && !data.message.includes("routine") && !data.message.includes("processing")) {
          pushMsg("system", `🔧 ${data?.message}`, { agent: data?.agent });
        }
        break;

      case "error":
        setIsTyping(false);
        finalizeStreamingNow();
        pushError(data?.message ?? "Server error");
        break;

      case "pong":
      default:
        break;
    }
  };

  // ------------- Actions -------------
  const onStart = () => {
    if (!connected) return pushError("Not connected to server");
    // Create new chat session
    const newSession: ChatMsg[] = [{
      id: "sys-start",
      role: "system", 
      content: marked.parse("**New conversation started** - Ask me anything about Indian Labour Laws!"),
      ts: isoNow()
    }];
    setMessages(newSession);
    setShouldAutoScroll(true);
    send("start_conversation", {});
  };

  const onEnd = () => {
    if (!connected) return pushError("Not connected to server");
    
    // Save current session to history if it has meaningful content
    const meaningfulMessages = messages.filter(m => 
      (m.role === "user") || 
      (m.role === "assistant" && !m.content.includes("Welcome!"))
    );
    
    if (meaningfulMessages.length > 0) {
      setChatHistory(prev => [messages, ...prev].slice(0, 10)); // Keep last 10 sessions
      setCurrentSessionIndex(-1);
    }
    
    send("end_conversation", {});
  };

  const onClear = () => {
    setMessages([
      {
        id: "sys-cleared",
        role: "system",
        content: marked.parse("Chat cleared. Click **Start Conversation** to begin a new session."),
        ts: isoNow(),
      },
    ]);
    finalizeStreamingNow();
    setShouldAutoScroll(true);
  };

  const loadChatSession = (sessionIndex: number) => {
    if (sessionIndex >= 0 && sessionIndex < chatHistory.length) {
      setMessages(chatHistory[sessionIndex]);
      setCurrentSessionIndex(sessionIndex);
      setShouldAutoScroll(true);
      scrollToBottom(true);
    }
  };

  const startNewChat = () => {
    setCurrentSessionIndex(-1);
    onStart();
  };

  const onSend = () => {
    const val = input.trim();
    if (!val) return;
    if (!connected || !conversationActive) return;

    // User bubble (plain text)
    const newUserMsg: ChatMsg = { id: `user-${Date.now()}`, role: "user", content: val, ts: isoNow() };
    setMessages((prev) => [...prev, newUserMsg]);
    setInput("");
    setShouldAutoScroll(true); // Enable auto-scroll when sending message
    
    // Update current session in history if we're viewing an old chat
    if (currentSessionIndex >= 0) {
      setChatHistory(prev => {
        const updated = [...prev];
        updated[currentSessionIndex] = [...updated[currentSessionIndex], newUserMsg];
        return updated;
      });
    }
    
    send("user_message", { message: val });
  };

  // ------------- Quick actions - Moved to bottom -------------
  const quickActions = useMemo(
    () => [
      { icon: "💰", text: "Minimum Wage", query: "What are minimum wage rates in Maharashtra?" },
      { icon: "🎁", text: "Gratuity Calc", query: "How to calculate gratuity for 10 years service?" },
      { icon: "🏦", text: "PF Rates", query: "PF contribution rates for 2025?" },
      { icon: "🏥", text: "ESI Process", query: "ESI registration process and documents?" },
    ],
    []
  );

  const handleQuickAction = (query: string) => {
    if (!connected || !conversationActive) {
      pushError("Start conversation first");
      return;
    }
    setInput(query);
    // Auto-send the query
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: `user-${Date.now()}`, role: "user", content: query, ts: isoNow() }]);
      setShouldAutoScroll(true);
      send("user_message", { message: query });
    }, 100);
  };

  // ---------------- UI ----------------
  return (
    <div className="w-full bg-gray-50 flex overflow-hidden" style={{ height: "calc(100vh - 140px)" }}>
      {/* Sidebar */}
      <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${sidebarOpen ? "w-80" : "w-0"} overflow-hidden flex flex-col`}>
        {/* Header Section */}
        <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white text-lg">🤖</span>
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-base">Labour Law AI</h2>
                <p className="text-xs text-gray-600">WebSocket Assistant</p>
              </div>
            </div>
          </div>

          <button
            onClick={startNewChat}
            disabled={!connected}
            className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-orange-500 to-orange-600 disabled:from-gray-300 disabled:to-gray-400 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-lg font-medium"
          >
            <span className="text-lg">💬</span>
            <span>New Conversation</span>
          </button>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button 
              onClick={onEnd} 
              disabled={!connected || !conversationActive} 
              className="py-2 px-3 rounded-xl bg-gray-700 hover:bg-gray-800 text-white disabled:bg-gray-300 disabled:text-gray-500 text-sm font-medium transition-colors"
            >
              End Chat
            </button>
            <button 
              onClick={onClear} 
              className="py-2 px-3 rounded-xl bg-gray-100 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 text-gray-700 text-sm font-medium transition-colors"
            >
              Clear
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${connected ? "bg-green-500" : "bg-red-500"}`} />
              <span>{connected ? "Connected" : "Disconnected"}</span>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${conversationActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
              {conversationActive ? "Active" : "Idle"}
            </div>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Recent Chats</h3>
          <div className="space-y-2">
            {chatHistory.length === 0 ? (
              <p className="text-xs text-gray-400 italic text-center py-4">No chat history yet</p>
            ) : (
              chatHistory.map((session, index) => {
                const firstUserMsg = session.find(m => m.role === "user");
                const preview = firstUserMsg?.content.slice(0, 50) + (firstUserMsg?.content.length > 50 ? "..." : "") || "New conversation";
                const sessionDate = session[0]?.ts ? new Date(session[0].ts).toLocaleDateString() : "";
                const isActive = currentSessionIndex === index;
                
                return (
                  <button
                    key={`session-${index}`}
                    onClick={() => loadChatSession(index)}
                    className={`w-full p-3 text-left rounded-lg transition-all duration-200 border ${
                      isActive 
                        ? "bg-orange-50 border-orange-200 text-orange-800" 
                        : "bg-gray-50 hover:bg-gray-100 border-gray-200 hover:border-gray-300 text-gray-700"
                    }`}
                  >
                    <div className="text-xs font-medium truncate">{preview}</div>
                    <div className="text-xs text-gray-500 mt-1">{sessionDate}</div>
                    <div className="text-xs text-gray-400 mt-1">{session.length} messages</div>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Quick Actions - Moved to bottom */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, i) => (
              <button
                key={i}
                onClick={() => handleQuickAction(action.query)}
                disabled={!connected || !conversationActive}
                className="flex flex-col items-center gap-2 p-3 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 disabled:from-gray-100 disabled:to-gray-200 rounded-xl transition-all duration-200 text-center shadow-sm hover:shadow-md border border-gray-150 hover:border-orange-200 disabled:border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-200">{action.icon}</span>
                <span className="text-xs text-gray-700 group-hover:text-orange-700 leading-tight font-medium">{action.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4 shadow-sm">
          <button 
            onClick={() => setSidebarOpen((s) => !s)} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors" 
            aria-label={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-gray-600" fill="none" stroke="currentColor" strokeWidth="2">
              {sidebarOpen ? (
                <>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                  <line x1="14" y1="8" x2="18" y2="12" />
                  <line x1="18" y1="12" x2="14" y2="16" />
                </>
              ) : (
                <>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                  <line x1="6" y1="8" x2="10" y2="12" />
                  <line x1="10" y1="12" x2="6" y2="16" />
                </>
              )}
            </svg>
          </button>
          {/* Scroll indicator */}
          {!shouldAutoScroll && (
            <button
              onClick={() => scrollToBottom(true)}
              className="p-2 bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-full transition-colors shadow-sm"
              title="Scroll to bottom"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="7,13 12,18 17,13" />
                <polyline points="7,6 12,11 17,6" />
              </svg>
            </button>
          )}
        </div>

        {/* Messages - Improved styling */}
        <div 
          ref={containerRef} 
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
          style={{ scrollBehavior: 'smooth' }}
        >
          {messages.map((m) => {
            const isUser = m.role === "user";
            const isSystem = m.role === "system";
            
            return (
              <div key={m.id} className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
                {!isUser && (
                  <div className={`w-8 h-8 ${isSystem ? "bg-gray-500" : "bg-gradient-to-br from-orange-500 to-orange-600"} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <span className="text-white text-xs">{isSystem ? "ℹ️" : "🤖"}</span>
                  </div>
                )}
                
                <div className={`max-w-[80%] ${isUser ? "order-first" : ""}`}>
                  <div className={`px-4 py-3 rounded-2xl shadow-sm ${
                    isUser 
                      ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white ml-auto" 
                      : isSystem
                        ? "bg-gray-100 border border-gray-200 text-gray-700"
                        : "bg-white text-gray-900 border border-gray-100"
                  }`}>
                    {isUser ? (
                      <div className="text-sm leading-relaxed whitespace-pre-line break-words">{m.content}</div>
                    ) : (
                      <div className="text-sm leading-relaxed prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-ol:my-1" dangerouslySetInnerHTML={{ __html: m.content }} />
                    )}
                  </div>
                  
                  <div className={`flex items-center gap-2 mt-2 text-xs text-gray-500 ${isUser ? "justify-end" : "justify-start"}`}>
                    {/* <span>{hhmm(m.ts)}</span> */}
                    <TimeText iso={m.ts} />

                    {!isUser && m.agent && !isSystem && <span>• {m.agent}</span>}
                    {m.streaming && <span className="text-orange-500 animate-pulse">• typing…</span>}
                  </div>
                </div>
                
                {isUser && (
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-white text-xs">👤</span>
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white text-xs">🤖</span>
              </div>
              <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl shadow-sm">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </div>
          )}

          <div ref={endRef} className="h-1" />
        </div>

        {/* Input - Improved */}
        <div className="bg-white border-t border-gray-200 p-4 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      onSend();
                    }
                  }}
                  placeholder={
                    connected
                      ? conversationActive
                        ? "Type your labour law question…"
                        : "Click Start Conversation to begin…"
                      : "Connecting to server…"
                  }
                  className="w-full px-5 py-4 pr-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white shadow-sm transition-all duration-200 placeholder-gray-500"
                  disabled={!connected || !conversationActive}
                />
                {input && (
                  <button
                    onClick={() => setInput("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>
              <button
                onClick={onSend}
                disabled={!input.trim() || !connected || !conversationActive}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg font-medium flex items-center gap-2"
              >
                <span>Send</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22,2 15,22 11,13 2,9 22,2" />
                </svg>
              </button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}


