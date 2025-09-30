"use client";
import React, { useState } from "react";
import { Mail, Eye, EyeOff, Sparkles, User2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    console.log("Login submitted!");
  };

  const handleRegister = () => {
    router.push("/register");
  };

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
              <div className="space-y-5">
                {/* Email Field */}
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
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField("")}
                      className="w-full rounded-xl border-2 border-orange-200/50 bg-white/80 backdrop-blur-sm px-4 py-4 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-orange-400 focus:bg-white transition-all duration-300"
                    />
                    <Mail className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-500 transition-transform group-hover:scale-110" />
                  </div>
                </div>

                {/* Password Field */}
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
                      onFocus={() => setFocusedField("password")}
                      onBlur={() => setFocusedField("")}
                      className="w-full rounded-xl border-2 border-orange-200/50 bg-white/80 backdrop-blur-sm px-4 py-4 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-orange-400 focus:bg-white transition-all duration-300"
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
                </div>

                {/* Forgot Password Link */}
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
                  className="relative w-full inline-flex items-center justify-center gap-3 rounded-xl px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 overflow-hidden group bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:shadow-xl hover:shadow-orange-300/50 hover:scale-105 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative">Sign In</span>
                  <span className="relative text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">
                    ➤
                  </span>
                </button>

                {/* Divider */}
                <div className="relative flex items-center justify-center py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-orange-200"></div>
                  </div>
                  <div className="relative bg-white/70 px-4 text-sm text-slate-500">
                    Don't have an account?
                  </div>
                </div>

                {/* Create Account Button */}
                <button
                  onClick={handleRegister}
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-xl border-2 border-orange-300 bg-white px-6 py-3.5 text-sm font-semibold text-orange-700 hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 cursor-pointer group"
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
