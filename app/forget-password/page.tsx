"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Sparkles, Lock, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    // your reset logic here...
    router.push("/login");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 relative overflow-hidden">
      {/* Animated background elements */}
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
            <div className="p-8">
              <div className="space-y-5">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-4">
                  <div className="flex gap-3">
                    <Sparkles className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Please enter your new password. Make sure it's strong and
                      secure.
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300 ${
                      focusedField === "password" ? "opacity-30" : ""
                    }`}
                  ></div>
                  <div className="relative">
                    <input
                      required
                      placeholder="New Password"
                      type={showPwd ? "text" : "password"}
                      onFocus={() => setFocusedField("password")}
                      onBlur={() => setFocusedField("")}
                      className="w-full rounded-xl border-2 border-orange-200/50 bg-white/80 backdrop-blur-sm px-4 py-4 pl-12 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-orange-400 focus:bg-white transition-all duration-300"
                    />
                    <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-500 transition-transform group-hover:scale-110" />
                    <button
                      type="button"
                      onClick={() => setShowPwd((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-orange-600 hover:bg-orange-100 transition-all duration-200"
                      aria-label="Toggle password"
                    >
                      {showPwd ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="relative group">
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300 ${
                      focusedField === "confirm" ? "opacity-30" : ""
                    }`}
                  ></div>
                  <div className="relative">
                    <input
                      required
                      placeholder="Confirm New Password"
                      type={showPwd2 ? "text" : "password"}
                      onFocus={() => setFocusedField("confirm")}
                      onBlur={() => setFocusedField("")}
                      className="w-full rounded-xl border-2 border-orange-200/50 bg-white/80 backdrop-blur-sm px-4 py-4 pl-12 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-orange-400 focus:bg-white transition-all duration-300"
                    />
                    <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-500 transition-transform group-hover:scale-110" />
                    <button
                      type="button"
                      onClick={() => setShowPwd2((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-orange-600 hover:bg-orange-100 transition-all duration-200"
                      aria-label="Toggle confirm password"
                    >
                      {showPwd2 ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="bg-white/50 border border-orange-100 rounded-xl p-4">
                  <h3 className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                    Password Requirements:
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      <span>At least 8 characters long</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      <span>Contains uppercase and lowercase letters</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      <span>Includes at least one number</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      <span>Contains a special character (!@#$%^&*)</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="relative w-full inline-flex items-center justify-center gap-3 rounded-xl px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 overflow-hidden group bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:shadow-xl hover:shadow-orange-300/50 hover:scale-105 mt-2 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <ShieldCheck className="relative w-5 h-5" />
                  <span className="relative">Reset Password</span>
                  <span className="relative text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">
                    ➤
                  </span>
                </button>
                {/* Back to Login link removed as requested */}
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
