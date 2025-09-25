
// "use client"

// import { useState, useRef, useEffect } from "react"

// // ---------- Types ----------
// type Role = "user" | "assistant"

// interface Message {
//   id: string
//   content: string
//   role: Role
//   // Store as ISO string to avoid hydration mismatches
//   timestamp: string
// }

// interface Chat {
//   id: string
//   title: string
//   messages: Message[]
//   createdAt: string
//   isActive: boolean
// }

// // ---------- Component ----------
// export default function AIAssistantPage() {
//   // Initial state with fixed timestamps (strings)
//   const [chatHistory, setChatHistory] = useState<Chat[]>([
//     {
//       id: "1",
//       title: "Current Chat",
//       messages: [
//         {
//           id: "1",
//           content:
//             "Hello! I'm your Labour Law Compliance AI Assistant. How can I help you today?",
//           role: "assistant",
//           timestamp: "2025-01-01T10:00:00.000Z",
//         },
//       ],
//       createdAt: "2025-01-01T10:00:00.000Z",
//       isActive: true,
//     },
//   ])

//   const [currentChatId, setCurrentChatId] = useState("1")
//   const [input, setInput] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [sidebarOpen, setSidebarOpen] = useState(true)

//   const messagesEndRef = useRef<HTMLDivElement>(null)
//   const messagesContainerRef = useRef<HTMLDivElement>(null)

//   const currentChat = chatHistory.find((chat) => chat.id === currentChatId)
//   const messages = currentChat?.messages ?? []

//   // ---------- Scroll management ----------
//   const scrollToBottom = () => {
//     const end = messagesEndRef.current
//     const container = messagesContainerRef.current
//     if (!end || !container) return

//     const isNearBottom =
//       container.scrollHeight - container.scrollTop - container.clientHeight < 100

//     if (isNearBottom || messages.length === 1) {
//       end.scrollIntoView({ behavior: "smooth", block: "nearest" })
//     }
//   }

//   useEffect(() => {
//     const timer = setTimeout(scrollToBottom, 100)
//     return () => clearTimeout(timer)
//   }, [messages])

//   // ---------- AI Response Logic (stubbed) ----------
//   const generateResponse = (userInput: string): string => {
//     const lower = userInput.toLowerCase()

//     if (lower.includes("wage") || lower.includes("salary")) {
//       return (
//         "Current minimum wage rates for 2025:\n\n" +
//         "• Maharashtra: ₹395 per day for unskilled\n" +
//         "• Karnataka: ₹458 per day for skilled\n" +
//         "• Delhi: ₹692 per day for skilled\n\n" +
//         "Would you like rates for other states?"
//       )
//     }

//     if (lower.includes("gratuity")) {
//       return (
//         "Gratuity calculation formula:\n\n" +
//         "(Last salary × 15 × Years of service) ÷ 26\n\n" +
//         "Eligibility: 5+ years service\n" +
//         "Maximum: ₹20 lakhs\n\n" +
//         "Need help with calculation?"
//       )
//     }

//     if (lower.includes("pf") || lower.includes("provident")) {
//       return (
//         "PF contribution rates 2025:\n\n" +
//         "• Employee: 12% of basic\n" +
//         "• Employer: 12% of basic\n" +
//         "• Maximum ceiling: ₹15,000\n\n" +
//         "Want specific calculation help?"
//       )
//     }

//     if (lower.includes("esi")) {
//       return (
//         "ESI registration requirements:\n\n" +
//         "• Establishments with 10+ employees\n" +
//         "• Salary limit: ₹25,000 per month\n" +
//         "• Documents: Form 01, PAN, Address proof\n" +
//         "• Online at esic.nic.in\n\n" +
//         "Need registration steps?"
//       )
//     }

//     return (
//       `I can help with labour law queries about "${userInput}":\n\n` +
//       "• Minimum wage rates\n" +
//       "• Gratuity calculations\n" +
//       "• PF/ESI compliance\n" +
//       "• Leave policies\n" +
//       "• Documentation requirements\n\n" +
//       "What specific information do you need?"
//     )
//   }

//   // ---------- Actions ----------
//   const handleSend = () => {
//     if (!input.trim() || isLoading) return

//     const userMessage: Message = {
//       id: Date.now().toString(),
//       content: input.trim(),
//       role: "user",
//       timestamp: new Date().toISOString(),
//     }

//     setChatHistory((prev) =>
//       prev.map((chat) =>
//         chat.id === currentChatId
//           ? { ...chat, messages: [...chat.messages, userMessage] }
//           : chat
//       )
//     )

//     const currentInput = input.trim()
//     setInput("")
//     setIsLoading(true)
//     setTimeout(scrollToBottom, 50)

//     setTimeout(() => {
//       const aiMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         content: generateResponse(currentInput),
//         role: "assistant",
//         timestamp: new Date().toISOString(),
//       }

//       setChatHistory((prev) =>
//         prev.map((chat) =>
//           chat.id === currentChatId
//             ? { ...chat, messages: [...chat.messages, aiMessage] }
//             : chat
//         )
//       )

//       setIsLoading(false)
//     }, 1200 + Math.random() * 800)
//   }

//   const createNewChat = () => {
//     const newChatId = Date.now().toString()
//     const newChat: Chat = {
//       id: newChatId,
//       title: "New Chat",
//       messages: [
//         {
//           id: "1",
//           content:
//             "Hello! I'm your Labour Law Compliance AI Assistant. How can I help you today?",
//           role: "assistant",
//           timestamp: new Date().toISOString(),
//         },
//       ],
//       createdAt: new Date().toISOString(),
//       isActive: false,
//     }

//     setChatHistory((prev) => [
//       newChat,
//       ...prev.map((chat) => ({ ...chat, isActive: false })),
//     ])
//     setCurrentChatId(newChatId)
//   }

//   const switchChat = (chatId: string) => {
//     setCurrentChatId(chatId)
//     setChatHistory((prev) =>
//       prev.map((chat) => ({ ...chat, isActive: chat.id === chatId }))
//     )
//   }

//   const deleteChat = (chatId: string) => {
//     if (chatHistory.length === 1) return // Don't delete last chat

//     setChatHistory((prev) => {
//       const filtered = prev.filter((chat) => chat.id !== chatId)
//       if (chatId === currentChatId && filtered.length > 0) {
//         setCurrentChatId(filtered[0].id)
//         filtered[0].isActive = true
//       }
//       return filtered
//     })
//   }

//   const quickActions = [
//     { icon: "💰", text: "Minimum Wage Rates", query: "What are minimum wage rates in Maharashtra?" },
//     { icon: "🎁", text: "Gratuity Calculator", query: "How to calculate gratuity for 10 years service?" },
//     { icon: "🏦", text: "PF Contribution", query: "PF contribution rates for 2025?" },
//     { icon: "🏥", text: "ESI Registration", query: "ESI registration process and documents?" },
//     { icon: "📋", text: "Leave Policies", query: "Leave entitlement under Shops Act?" },
//     { icon: "💳", text: "Professional Tax", query: "Professional Tax rates in Karnataka?" },
//   ]

//   // ---------- UI ----------
//   return (
//     <div className="w-full bg-gray-100 flex overflow-hidden" style={{ height: "calc(100vh - 140px)" }}>
//       {/* Sidebar */}
//       <div
//         className={`bg-white border-r border-gray-200 transition-all duration-300 ${
//           sidebarOpen ? "w-80" : "w-0"
//         } overflow-hidden flex flex-col`}
//       >
//         {/* Sidebar Header */}
//         <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-md">
//                 <span className="text-white text-lg">🤖</span>
//               </div>
//               <div>
//                 <h2 className="font-bold text-gray-900 text-base">Labour Law AI</h2>
//                 <p className="text-xs text-gray-600">Compliance Assistant</p>
//               </div>
//             </div>
//           </div>

//           {/* New Chat Button */}
//           <button
//             onClick={createNewChat}
//             className="w-full flex items-center justify-center gap-2 p-1 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-lg font-medium"
//           >
//             <span className="text-lg">➕</span>
//             <span>New Chat</span>
//           </button>
//         </div>

//         {/* Chat History */}
//         <div className="flex-1 overflow-y-auto p-3">
//           <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 mb-3">
//             Recent Chats
//           </h3>
//           <div className="space-y-2">
//             {chatHistory.map((chat) => {
//               const preview =
//                 chat.messages[1]?.content?.slice(0, 35) ||
//                 chat.messages[0]?.content?.slice(0, 35) ||
//                 chat.title

//               return (
//                 <div
//                   key={chat.id}
//                   className={`group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
//                     chat.id === currentChatId
//                       ? "bg-orange-100 border border-orange-200 shadow-sm"
//                       : "hover:bg-gray-50 hover:shadow-sm"
//                   }`}
//                   onClick={() => switchChat(chat.id)}
//                 >
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm font-medium text-gray-900 truncate">
//                       {preview}...
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">
//                       {new Date(chat.createdAt).toLocaleDateString()}
//                     </p>
//                   </div>
//                   {chatHistory.length > 1 && (
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         deleteChat(chat.id)
//                       }}
//                       className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-100 text-red-500 rounded-lg transition-all"
//                       title="Delete chat"
//                     >
//                       🗑️
//                     </button>
//                   )}
//                 </div>
//               )
//             })}
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="p-4 border-t border-gray-200 bg-gray-50">
//           <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
//             Quick Actions
//           </h3>
//           <div className="grid grid-cols-2 gap-2">
//             {quickActions.slice(0, 4).map((action, index) => (
//               <button
//                 key={index}
//                 onClick={() => setInput(action.query)}
//                 className="flex flex-col items-center gap-1 p-3 bg-white hover:bg-orange-50 rounded-xl transition-all duration-200 text-center shadow-sm hover:shadow-md border border-gray-100 hover:border-orange-200"
//               >
//                 <span className="text-xl mb-1">{action.icon}</span>
//                 <span className="text-xs text-gray-700 leading-tight font-medium">
//                   {action.text}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Chat Area */}
//       <div className="flex-1 flex flex-col">
//         {/* Top Header */}
//         <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4 shadow-sm">
//           <button
//             onClick={() => setSidebarOpen((s) => !s)}
//             className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//             aria-label={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
//           >
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="text-gray-600"
//             >
//               {sidebarOpen ? (
//                 <>
//                   <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//                   <line x1="9" y1="3" x2="9" y2="21" />
//                   <line x1="14" y1="8" x2="18" y2="12" />
//                   <line x1="18" y1="12" x2="14" y2="16" />
//                 </>
//               ) : (
//                 <>
//                   <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//                   <line x1="9" y1="3" x2="9" y2="21" />
//                   <line x1="6" y1="8" x2="10" y2="12" />
//                   <line x1="10" y1="12" x2="6" y2="16" />
//                 </>
//               )}
//             </svg>
//           </button>

//           <div className="flex-1">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-md">
//                 <span className="text-white">🤖</span>
//               </div>
//               <div>
//                 <h1 className="text-lg font-bold text-gray-900">AI Compliance Assistant</h1>
//                 <p className="text-sm text-gray-600">Specialized in Indian Labour Laws</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Messages Area */}
//         <div
//           ref={messagesContainerRef}
//           className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50"
//         >
//           {messages.map((message) => (
//             <div
//               key={message.id}
//               className={`flex gap-3 ${
//                 message.role === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               {message.role === "assistant" && (
//                 <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
//                   <span className="text-white text-xs">🤖</span>
//                 </div>
//               )}

//               <div className={`max-w-[70%] ${message.role === "user" ? "order-first" : ""}`}>
//                 <div
//                   className={`p-2 rounded-2xl shadow-sm ${
//                     message.role === "user"
//                       ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white ml-auto"
//                       : "bg-white text-gray-900 border border-gray-100"
//                   }`}
//                 >
//                   <div className="text-sm leading-relaxed whitespace-pre-line">
//                     {message.content}
//                   </div>
//                 </div>

//                 <div
//                   className={`flex items-center gap-2 mt-2 text-xs text-gray-500 ${
//                     message.role === "user" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   <span>
//                     {new Date(message.timestamp).toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                     })}
//                   </span>
//                   {message.role === "assistant" && (
//                     <div className="flex items-center gap-1">
//                       <button
//                         className="p-1 hover:bg-gray-200 rounded transition-colors"
//                         onClick={() => {
//                           if (navigator.clipboard?.writeText) {
//                             navigator.clipboard.writeText(message.content).catch(() => {})
//                           }
//                         }}
//                         title="Copy message"
//                       >
//                         📋
//                       </button>
//                       <button className="p-1 hover:bg-gray-200 rounded transition-colors" title="Like">
//                         👍
//                       </button>
//                       <button className="p-1 hover:bg-gray-200 rounded transition-colors" title="Dislike">
//                         👎
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {message.role === "user" && (
//                 <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
//                   <span className="text-white text-xs">👤</span>
//                 </div>
//               )}
//             </div>
//           ))}

//           {isLoading && (
//             <div className="flex gap-3 justify-start">
//               <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
//                 <span className="text-white text-xs">🤖</span>
//               </div>
//               <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
//                 <div className="flex items-center gap-1">
//                   <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" />
//                   <div
//                     className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.1s" }}
//                   />
//                   <div
//                     className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.2s" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           )}

//           <div ref={messagesEndRef} className="h-1" />
//         </div>

//         {/* Input Area */}
//         <div className="bg-white border-t border-gray-200 p-6 shadow-lg">
//           <div className="max-w-4xl mx-auto">
//             <div className="flex gap-3">
//               <input
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" && !e.shiftKey) {
//                     e.preventDefault()
//                     handleSend()
//                   }
//                 }}
//                 placeholder="Ask me anything about labour law compliance..."
//                 className="flex-1 px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white shadow-sm transition-all duration-200"
//                 disabled={isLoading}
//               />
//               <button
//                 onClick={handleSend}
//                 disabled={!input.trim() || isLoading}
//                 className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg font-medium"
//               >
//                 {isLoading ? "..." : "Send"}
//               </button>
//             </div>
//             <p className="text-xs text-gray-500 mt-3 text-center flex items-center justify-center gap-2">
//               <span>⌨️</span>
//               <span>Press Enter to send • Shift+Enter for new line</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }







"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

/* ---------------- Types ---------------- */
type Role = "user" | "assistant" | "system";
interface Message {
  id: string;
  content: string;
  role: Role;
  timestamp: string; // ISO
}
interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: string;
  isActive: boolean;
}

/* --------------- Config ---------------- */
// const SOCKET_URL =
//   process.env.NEXT_PUBLIC_SOCKET_URL?.replace(/\/+$/, "") ||
//   "https://100.120.107.80:8000"; // <-- localhost replaced
const SOCKET_URL =
  "https://100.120.107.80:3000"; // <-- localhost replaced

// helpful: create a stable client id for this tab/session
function getClientId(): string {
  if (typeof window === "undefined") return "client_server_" + Date.now();
  const KEY = "__llc_client_id__";
  let cid = sessionStorage.getItem(KEY);
  if (!cid) {
    cid = "client_" + Math.random().toString(36).slice(2) + "_" + Date.now();
    sessionStorage.setItem(KEY, cid);
  }
  return cid;
}

/* ------------- Component --------------- */
export default function AIAssistantPage() {
  const [chatHistory, setChatHistory] = useState<Chat[]>([
    {
      id: "1",
      title: "Current Chat",
      messages: [
        {
          id: "1",
          content:
            "Hello! I'm your Labour Law Compliance AI Assistant. How can I help you today?",
          role: "assistant",
          timestamp: "2025-01-01T10:00:00.000Z",
        },
      ],
      createdAt: "2025-01-01T10:00:00.000Z",
      isActive: true,
    },
  ]);
  const [currentChatId, setCurrentChatId] = useState("1");     
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // connection state
  const [connected, setConnected] = useState(false);
  const [conversationActive, setConversationActive] = useState(false);
  const [currentAgent, setCurrentAgent] = useState<string>("System");
  const [isStreaming, setIsStreaming] = useState(false);

  // streaming buffer
  const streamingMsgIdRef = useRef<string | null>(null);
  const streamingBufferRef = useRef<string>("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);

  const clientId = useMemo(() => getClientId(), []);

  const currentChat = chatHistory.find((c) => c.id === currentChatId);
  const messages = currentChat?.messages ?? [];

  /* ------------- Scroll mgmt ------------- */
  const scrollToBottom = () => {
    const end = messagesEndRef.current;
    const container = messagesContainerRef.current;
    if (!end || !container) return;
    const isNearBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight < 100;
    if (isNearBottom || messages.length === 1) {
      end.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };
  useEffect(() => {
    const t = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(t);
  }, [messages, isStreaming]);

  /* ------------- Socket.IO setup ------------- */
  useEffect(() => {
    const s = io(SOCKET_URL, {
      transports: ["websocket"], // force ws
      path: "/socket.io",
      query: { clientId },
      reconnectionAttempts: Infinity,
      reconnectionDelayMax: 3000,
    });
    socketRef.current = s;

    s.on("connect", () => {
      setConnected(true);
    });

    s.on("disconnect", () => {
      setConnected(false);
      setConversationActive(false);
      setIsLoading(false);
      setIsStreaming(false);
      streamingMsgIdRef.current = null;
      streamingBufferRef.current = "";
    });

    /* ------- SERVER → CLIENT events ------- */
    // These event names mirror your raw WS types. If server uses different
    // names, update only these bindings.

    s.on("conversation_started", (data: { message: string; agent?: string }) => {
      setConversationActive(true);
      if (data?.agent) setCurrentAgent(data.agent);
      pushMessage("system", data?.message || "Conversation started.");
    });

    s.on("conversation_ended", (data: { message: string; agent?: string }) => {
      setConversationActive(false);
      if (data?.agent) setCurrentAgent(data.agent);
      pushMessage("system", data?.message || "Conversation ended.");
    });

    s.on("message_received", (data: { message: string; agent?: string }) => {
      if (data?.agent) setCurrentAgent(data.agent);
      pushMessage("system", data.message);
    });

    s.on("progress_update", (data: { agent?: string }) => {
      if (data?.agent) setCurrentAgent(data.agent);
      // Optional: show typing indicator (we toggle isLoading to show dots)
      setIsLoading(true);
    });

    s.on(
      "assistant_stream_output",
      (data: { message: string; agent?: string }) => {
        setIsLoading(false);
        if (data?.agent) setCurrentAgent(data.agent);
        handleStreamChunk(data.message);
      }
    );

    s.on("response_complete", () => {
      setIsStreaming(false);
      streamingMsgIdRef.current = null;
      streamingBufferRef.current = "";
    });

    s.on(
      "agent_handoff",
      (data: { message?: string; agent: string }) => {
        setCurrentAgent(data.agent);
        if (data?.message) pushMessage("system", data.message);
      }
    );

    s.on("tool_call", (data: { message: string; agent?: string }) => {
      pushMessage("system", `Tool call: ${data.message}`);
    });

    s.on("error_event", (data: { message: string }) => {
      pushMessage("system", `Error: ${data.message}`);
      setIsLoading(false);
    });

    // Keep-alive if your server expects it (Socket.IO already pings internally)
    const pingInt = setInterval(() => {
      if (s.connected) s.emit("ping_event", { ts: Date.now() });
    }, 30000);

    return () => {
      clearInterval(pingInt);
      s.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId]);

  /* ---------- Helpers: push/update messages ---------- */
  function pushMessage(role: Role, content: string) {
    const msg: Message = {
      id: String(Date.now() + Math.random()),
      role,
      content,
      timestamp: new Date().toISOString(),
    };
    setChatHistory((prev) =>
      prev.map((c) =>
        c.id === currentChatId ? { ...c, messages: [...c.messages, msg] } : c
      )
    );
  }

  function updateMessageContent(messageId: string, content: string) {
    setChatHistory((prev) =>
      prev.map((c) => {
        if (c.id !== currentChatId) return c;
        return {
          ...c,
          messages: c.messages.map((m) =>
            m.id === messageId ? { ...m, content } : m
          ),
        };
      })
    );
  }

  // streaming handler: creates/updates last assistant message
  function handleStreamChunk(chunk: string) {
    if (!isStreaming || !streamingMsgIdRef.current) {
      // start new streaming message
      const id = String(Date.now() + Math.random());
      streamingMsgIdRef.current = id;
      streamingBufferRef.current = "";
      setIsStreaming(true);
      const msg: Message = {
        id,
        role: "assistant",
        content: "",
        timestamp: new Date().toISOString(),
      };
      setChatHistory((prev) =>
        prev.map((c) =>
          c.id === currentChatId ? { ...c, messages: [...c.messages, msg] } : c
        )
      );
    }
    streamingBufferRef.current += chunk;
    updateMessageContent(streamingMsgIdRef.current, streamingBufferRef.current);
  }

  /* ---------------- Actions ---------------- */
  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    // Immediately render user message
    pushMessage("user", input.trim());

    // Emit to server
    socketRef.current?.emit("user_message", {
      message: input.trim(),
      clientId,
    });

    setInput("");
    setIsLoading(true);
    setTimeout(scrollToBottom, 50);
  };

  const createNewChat = () => {
    const newChatId = Date.now().toString();
    const newChat: Chat = {
      id: newChatId,
      title: "New Chat",
      messages: [
        {
          id: "1",
          content:
            "Hello! I'm your Labour Law Compliance AI Assistant. How can I help you today?",
          role: "assistant",
          timestamp: new Date().toISOString(),
        },
      ],
      createdAt: new Date().toISOString(),
      isActive: false,
    };
    setChatHistory((prev) => [
      newChat,
      ...prev.map((c) => ({ ...c, isActive: false })),
    ]);
    setCurrentChatId(newChatId);
  };

  const switchChat = (chatId: string) => {
    setCurrentChatId(chatId);
    setChatHistory((prev) =>
      prev.map((c) => ({ ...c, isActive: c.id === chatId }))
    );
  };

  const deleteChat = (chatId: string) => {
    if (chatHistory.length === 1) return;
    setChatHistory((prev) => {
      const filtered = prev.filter((c) => c.id !== chatId);
      if (chatId === currentChatId && filtered.length > 0) {
        setCurrentChatId(filtered[0].id);
        filtered[0].isActive = true;
      }
      return filtered;
    });
  };

  const startConversation = () => {
    if (!connected) {
      pushMessage("system", "Not connected to server.");
      return;
    }
    socketRef.current?.emit("start_conversation", { clientId });
  };

  const endConversation = () => {
    if (!connected) {
      pushMessage("system", "Not connected to server.");
      return;
    }
    socketRef.current?.emit("end_conversation", { clientId });
  };

  const quickActions = [
    { icon: "💰", text: "Minimum Wage Rates", query: "What are minimum wage rates in Maharashtra?" },
    { icon: "🎁", text: "Gratuity Calculator", query: "How to calculate gratuity for 10 years service?" },
    { icon: "🏦", text: "PF Contribution", query: "PF contribution rates for 2025?" },
    { icon: "🏥", text: "ESI Registration", query: "ESI registration process and documents?" },
    { icon: "📋", text: "Leave Policies", query: "Leave entitlement under Shops Act?" },
    { icon: "💳", text: "Professional Tax", query: "Professional Tax rates in Karnataka?" },
  ];

  /* ---------------- UI ---------------- */
  return (
    <div
      className="w-full bg-gray-100 flex overflow-hidden"
      style={{ height: "calc(100vh - 140px)" }}
    >
      {/* Sidebar */}
      <div
        className={`bg-white border-r border-gray-200 transition-all duration-300 ${
          sidebarOpen ? "w-80" : "w-0"
        } overflow-hidden flex flex-col`}
      >
        <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white text-lg">🤖</span>
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-base">Labour Law AI</h2>
                <p className="text-xs text-gray-600">
                  Compliance Assistant
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={createNewChat}
            className="w-full flex items-center justify-center gap-2 p-1 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-lg font-medium"
          >
            <span className="text-lg">➕</span>
            <span>New Chat</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 mb-3">
            Recent Chats
          </h3>
          <div className="space-y-2">
            {chatHistory.map((chat) => {
              const preview =
                chat.messages[1]?.content?.slice(0, 35) ||
                chat.messages[0]?.content?.slice(0, 35) ||
                chat.title;
              return (
                <div
                  key={chat.id}
                  className={`group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                    chat.id === currentChatId
                      ? "bg-orange-100 border border-orange-200 shadow-sm"
                      : "hover:bg-gray-50 hover:shadow-sm"
                  }`}
                  onClick={() => switchChat(chat.id)}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {preview}...
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(chat.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  {chatHistory.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteChat(chat.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-100 text-red-500 rounded-lg transition-all"
                      title="Delete chat"
                    >
                      🗑️
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.slice(0, 4).map((action, index) => (
              <button
                key={index}
                onClick={() => setInput(action.query)}
                className="flex flex-col items-center gap-1 p-3 bg-white hover:bg-orange-50 rounded-xl transition-all duration-200 text-center shadow-sm hover:shadow-md border border-gray-100 hover:border-orange-200"
              >
                <span className="text-xl mb-1">{action.icon}</span>
                <span className="text-xs text-gray-700 leading-tight font-medium">
                  {action.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4 shadow-sm">
          <button
            onClick={() => setSidebarOpen((s) => !s)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
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

          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white">🤖</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">AI Compliance Assistant</h1>
                <p className="text-sm text-gray-600">
                  {connected ? "Connected" : "Disconnected"} • Agent: {currentAgent}
                </p>
              </div>
              <div
                className={`ml-auto h-2 w-2 rounded-full ${
                  connected ? "bg-green-500" : "bg-red-500"
                }`}
                title={connected ? "Connected" : "Disconnected"}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={startConversation}
              disabled={!connected || conversationActive}
              className="px-3 py-2 text-sm rounded-lg bg-gray-900 text-white disabled:opacity-50"
            >
              Start
            </button>
            <button
              onClick={endConversation}
              disabled={!connected || !conversationActive}
              className="px-3 py-2 text-sm rounded-lg bg-gray-200 disabled:opacity-50"
            >
              End
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {m.role !== "user" && (
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">🤖</span>
                </div>
              )}

              <div className={`max-w-[70%] ${m.role === "user" ? "order-first" : ""}`}>
                <div
                  className={`p-2 rounded-2xl shadow-sm ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white ml-auto"
                      : m.role === "system"
                      ? "bg-yellow-50 text-yellow-900 border border-yellow-200"
                      : "bg-white text-gray-900 border border-gray-100"
                  }`}
                >
                  <div className="text-sm leading-relaxed whitespace-pre-line">
                    {m.content}
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 mt-2 text-xs text-gray-500 ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <span>
                    {new Date(m.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  {m.role === "assistant" && (
                    <div className="flex items-center gap-1">
                      <button
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                        onClick={() => {
                          if (navigator.clipboard?.writeText) {
                            navigator.clipboard.writeText(m.content).catch(() => {});
                          }
                        }}
                        title="Copy message"
                      >
                        📋
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded transition-colors" title="Like">
                        👍
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded transition-colors" title="Dislike">
                        👎
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {m.role === "user" && (
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">👤</span>
                </div>
              )}
            </div>
          ))}

          {(isLoading || isStreaming) && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🤖</span>
              </div>
              <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full animate-bounce bg-orange-400" />
                  <div className="w-2 h-2 rounded-full animate-bounce bg-orange-400" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 rounded-full animate-bounce bg-orange-400" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} className="h-1" />
        </div>

        {/* Input */}
        <div className="bg-white border-t border-gray-200 p-6 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={
                  conversationActive
                    ? "Ask me anything about labour law compliance..."
                    : connected
                    ? "Click Start to begin the conversation..."
                    : "Connecting..."
                }
                className="flex-1 px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white shadow-sm transition-all duration-200"
                disabled={isLoading || !connected || !conversationActive}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading || !connected || !conversationActive}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg font-medium"
              >
                {isLoading ? "..." : "Send"}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center flex items-center justify-center gap-2">
              <span>⌨️</span>
              <span>Press Enter to send • Shift+Enter for new line</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
