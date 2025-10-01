"use client";

import React, { useState } from "react";
import { Mail, Eye, EyeOff, Sparkles, User2Icon, LogIn } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

// Hard target as requested; override via .env if you like.
const DEFAULT_LOGIN_URL = "http://100.110.147.101:8000/api/auth/login";
const LOGIN_URL =
  process.env.NEXT_PUBLIC_LOGIN_URL?.replace(/\/+$/, "") || DEFAULT_LOGIN_URL;

type ApiErrorBag = Record<string, string[]>;

export default function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ApiErrorBag>({});

  const router = useRouter();
  const params = useSearchParams();
  const justRegistered = params.get("registered") === "1";

  // normalize various backend response shapes to get token
  function extractToken(json: any): string | null {
    if (!json) return null;
    // common cases
    if (typeof json.token === "string") return json.token;
    if (json.data && typeof json.data.token === "string")
      return json.data.token;
    if (json.access_token) return json.access_token;
    if (json?.user?.token) return json.user.token;
    return null;
  }

  // set cookie (non-HttpOnly; for prod, prefer HttpOnly cookie from backend)
  function setAuthToken(token: string, seconds?: number) {
    try {
      localStorage.setItem("auth_token", token);
    } catch {}
    const secure = location.protocol === "https:" ? "; Secure" : "";
    const maxAge = seconds ? `; Max-Age=${seconds}` : "";
    document.cookie = `auth_token=${token}; Path=/; SameSite=Lax${secure}${maxAge}`;
  }

  const validate = () => {
    const errs: ApiErrorBag = {};
    if (!email.trim()) errs.email = ["Email is required"];
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      errs.email = ["Enter a valid email"];
    if (!password) errs.password = ["Password is required"];
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async () => {
    setFormError(null);
    setFieldErrors({});
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      if (res.status === 422) {
        const data = await res.json();
        const eb: ApiErrorBag = data?.errors || {};
        setFieldErrors(eb);
        setFormError(data?.message || "Please fix highlighted errors.");
        return;
      }

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setFormError(
          data?.message || `Login failed (HTTP ${res.status}). Try again.`
        );
        return;
      }

      const data = await res.json().catch(() => ({}));
      const token = extractToken(data);

      if (!token) {
        // If your backend sets HttpOnly cookie instead (no token in body), just navigate:
        // router.push("/");
        // Otherwise, error out clearly:
        setFormError(
          "Login succeeded, but token was not returned in response. Ensure API returns `token`."
        );
        return;
      }

      // If API gives TTL (e.g., expires_in seconds), use it for cookie max-age.
      const ttl =
        typeof data?.expires_in === "number"
          ? Number(data.expires_in)
          : undefined;

      // Important: store the token AS-IS. Don’t strip '1|' etc.
      setAuthToken(token, ttl);

      router.push("/"); // go to dashboard/home
    } catch {
      setFormError("Network error. Check API URL/CORS and retry.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => router.push("/register");

  const fe = (k: "email" | "password") =>
    fieldErrors?.[k]?.length ? fieldErrors[k][0] : "";

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-300/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="relative">
          <div className="backdrop-blur-xl bg-white/70 rounded-3xl border border-white/50 shadow-2xl overflow-hidden">
            <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 px-4 py-4 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-200 rounded-full blur-3xl"></div>
              </div>
              <div className="relative flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-yellow-200 animate-pulse" />
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-tight">
                    Welcome Back
                  </h1>
                  <p className="text-orange-50 mt-1">
                    Sign in to your Praans Consultech
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* success from register */}
              {justRegistered && (
                <div className="mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  Account created successfully. Please log in.
                </div>
              )}

              {/* top-level error */}
              {formError && (
                <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {formError}
                </div>
              )}

              <div className="space-y-5">
                {/* Email */}
                <div className="relative group">
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300 ${
                      focusedField === "email" ? "opacity-30" : ""
                    }`}
                  ></div>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField("")}
                      className={`w-full rounded-xl border-2 ${
                        fe("email") ? "border-red-300" : "border-orange-200/50"
                      } bg-white/80 backdrop-blur-sm px-4 py-4 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-orange-400 focus:bg-white transition-all duration-300`}
                    />
                    <Mail className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-500 transition-transform group-hover:scale-110" />
                  </div>
                  {!!fe("email") && (
                    <p className="mt-1 text-xs text-red-600">{fe("email")}</p>
                  )}
                </div>

                {/* Password */}
                <div className="relative group">
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300 ${
                      focusedField === "password" ? "opacity-30" : ""
                    }`}
                  ></div>
                  <div className="relative">
                    <input
                      required
                      placeholder="Password"
                      type={showPwd ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField("password")}
                      onBlur={() => setFocusedField("")}
                      className={`w-full rounded-xl border-2 ${
                        fe("password")
                          ? "border-red-300"
                          : "border-orange-200/50"
                      } bg-white/80 backdrop-blur-sm px-4 py-4 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-orange-400 focus:bg-white transition-all duration-300`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwd((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-orange-600 hover:bg-orange-100 transition-all duration-200"
                      aria-label="Toggle password"
                    >
                      {showPwd ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {!!fe("password") && (
                    <p className="mt-1 text-xs text-red-600">
                      {fe("password")}
                    </p>
                  )}
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end">
                  <Link
                    href="/forget-password"
                    className="text-sm font-medium text-orange-600 hover:text-orange-700 hover:underline transition-all duration-200"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`relative w-full inline-flex items-center justify-center gap-3 rounded-xl px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer ${
                    !loading
                      ? "bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:shadow-xl hover:shadow-orange-300/50 hover:scale-105"
                      : "bg-gray-300 cursor-not-allowed opacity-60"
                  }`}
                >
                  {!loading && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  )}
                  <LogIn className="h-5 w-5" />
                  <span className="relative">
                    {loading ? "Signing in..." : "Sign In"}
                  </span>
                </button>

                {/* Divider */}
                <div className="relative flex items-center justify-center py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-orange-200"></div>
                  </div>
                  <div className="relative bg-white/70 px-4 text-sm text-slate-500">
                    Don&apos;t have an account?
                  </div>
                </div>

                {/* Create Account */}
                <button
                  onClick={handleRegister}
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-xl border-2 border-orange-300 bg-white px-6 py-3.5 text-sm font-semibold text-orange-700 hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 cursor-pointer group cursor-pointer"
                >
                  <span className="rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 p-2 text-white shadow-lg group-hover:shadow-orange-300 transition-shadow duration-300">
                    <User2Icon />
                  </span>
                  Create New Account
                </button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-rose-400 to-orange-500 rounded-full opacity-20 blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}
