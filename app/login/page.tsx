"use client";

import React, { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Mail, Eye, EyeOff, Sparkles, LogIn } from "lucide-react";
import { setAuthFromLoginResponse } from "@/lib/auth";

const DEFAULT_LOGIN_URL = "http://100.110.147.101:8000/api/auth/login";
const LOGIN_URL =
  process.env.NEXT_PUBLIC_LOGIN_URL?.replace(/\/+$/, "") || DEFAULT_LOGIN_URL;

/** Wrapper required by Next.js when using useSearchParams */
export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-slate-600">Loading…</div>}>
      <LoginPageInner />
    </Suspense>
  );
}

function LoginPageInner() {
  const router = useRouter();
  const params = useSearchParams();
  const justRegistered = params.get("registered") === "1";
  const nextUrl = params.get("next") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const validate = () => {
    if (!email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return "Enter a valid email";
    if (!password) return "Password is required";
    return null;
  };

  const handleSubmit = async () => {
    const v = validate();
    if (v) {
      setFormError(v);
      return;
    }
    setFormError(null);
    setLoading(true);
    try {
      const res = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const payload = await res.json().catch(() => ({}));

      if (res.status === 422) {
        setFormError(payload?.message || "Please fix the highlighted errors.");
        return;
      }
      if (!res.ok) {
        setFormError(payload?.message || `Login failed (HTTP ${res.status}). Try again.`);
        return;
      }

      const { ok, reason } = setAuthFromLoginResponse(payload);
      if (!ok) {
        setFormError(
          reason === "missing_token"
            ? "Login succeeded, but token was not returned by API."
            : "Unexpected auth error. Try again."
        );
        return;
      }

      // 🚀 Auth set → bounce to `next` (or /)
      router.push(nextUrl);
    } catch {
      setFormError("Network error. Check API URL/CORS and retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 relative overflow-hidden">
      <div className="w-full max-w-md relative z-10">
        <div className="backdrop-blur-xl bg-white/70 rounded-3xl border border-white/50 shadow-2xl overflow-hidden">
          <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 px-4 py-4">
            <div className="relative flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-yellow-200 animate-pulse" />
              <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Login</h1>
                <p className="text-orange-50 mt-1">Welcome back</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {justRegistered && (
              <div className="mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                Account created successfully. Please log in.
              </div>
            )}
            {formError && (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {formError}
              </div>
            )}

            <div className="space-y-4">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border-2 border-orange-200/50 bg-white/80 backdrop-blur-sm px-4 py-4 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-orange-400 focus:bg-white transition-all duration-300"
                />
                <Mail className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-500" />
              </div>

              <div className="relative group">
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border-2 border-orange-200/50 bg-white/80 backdrop-blur-sm px-4 py-4 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-orange-400 focus:bg-white transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-orange-600 hover:bg-orange-100 transition-all duration-200"
                  aria-label="Toggle password"
                >
                  {showPwd ? <EyeOff className="h-5 w-5" /> : <LogIn className="h-5 w-5" />}
                </button>
              </div>

              {/* Forgot Password link (kept as you wrote) */}
              <div className="flex justify-end -mt-2">
                <Link
                  href={`/forget-password?next=${encodeURIComponent(nextUrl)}`}
                  className="text-sm font-medium text-orange-600 hover:text-orange-700 hover:underline transition-all duration-200"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`relative inline-flex w-full items-center justify-center gap-3 rounded-xl px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 overflow-hidden cursor-pointer
                  ${
                    !loading
                      ? "bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:shadow-xl hover:shadow-orange-300/50 hover:scale-105"
                      : "bg-gray-300 cursor-not-allowed opacity-60"
                  }`}
              >
                <LogIn className="h-5 w-5" />
                {loading ? "Logging in..." : "Log In"}
              </button>

              <div className="text-center text-sm text-slate-600">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-orange-600 underline underline-offset-2">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-rose-400 to-orange-500 rounded-full opacity-20 blur-2xl"></div>
      </div>
    </div>
  );
}
