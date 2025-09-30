"use client";
import React, { useState } from "react";
import {
  Mail,
  User,
  Briefcase,
  Building2,
  Phone,
  Eye,
  EyeOff,
  Sparkles,
  User2Icon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegistrationPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [acceptTC, setAcceptTC] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    if (!acceptTC) return;
  };

  const handleLogin = () => {
    router.push("/login");
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

      <div className="w-full max-w-2xl relative z-10">
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
                    Register Praans Consultech
                  </h1>
                  <p className="text-orange-50 mt-1">Register to get started</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-5">
                {/* Row 1 */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="relative group">
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300 ${
                        focusedField === "name" ? "opacity-30" : ""
                      }`}
                    ></div>
                    <div className="relative">
                      <input
                        required
                        placeholder="Full Name"
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField("")}
                        className="w-full rounded-xl border-2 border-orange-200/50 bg-white/80 backdrop-blur-sm px-4 py-4 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-orange-400 focus:bg-white transition-all duration-300"
                      />
                      <User className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-500 transition-transform group-hover:scale-110" />
                    </div>
                  </div>
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
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="relative group">
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300 ${
                        focusedField === "designation" ? "opacity-30" : ""
                      }`}
                    ></div>
                    <div className="relative">
                      <input
                        required
                        placeholder="Designation"
                        onFocus={() => setFocusedField("designation")}
                        onBlur={() => setFocusedField("")}
                        className="w-full rounded-xl border-2 border-orange-200/50 bg-white/80 backdrop-blur-sm px-4 py-4 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-orange-400 focus:bg-white transition-all duration-300"
                      />
                      <Briefcase className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-500 transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="relative group">
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300 ${
                        focusedField === "company" ? "opacity-30" : ""
                      }`}
                    ></div>
                    <div className="relative">
                      <input
                        required
                        placeholder="Company Name"
                        onFocus={() => setFocusedField("company")}
                        onBlur={() => setFocusedField("")}
                        className="w-full rounded-xl border-2 border-orange-200/50 bg-white/80 backdrop-blur-sm px-4 py-4 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-orange-400 focus:bg-white transition-all duration-300"
                      />
                      <Building2 className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-500 transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                  <div className="relative group">
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300 ${
                        focusedField === "confirm" ? "opacity-30" : ""
                      }`}
                    ></div>
                    <div className="relative">
                      <input
                        required
                        placeholder="Confirm Password"
                        type={showPwd2 ? "text" : "password"}
                        onFocus={() => setFocusedField("confirm")}
                        onBlur={() => setFocusedField("")}
                        className="w-full rounded-xl border-2 border-orange-200/50 bg-white/80 backdrop-blur-sm px-4 py-4 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-orange-400 focus:bg-white transition-all duration-300"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPwd2((s) => !s)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-orange-600 hover:bg-orange-100 transition-all duration-200"
                        aria-label="Toggle confirm password"
                      >
                        {showPwd2 ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="relative group">
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300 ${
                      focusedField === "phone" ? "opacity-30" : ""
                    }`}
                  ></div>
                  <div className="relative">
                    <input
                      required
                      placeholder="Phone"
                      inputMode="tel"
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField("")}
                      className="w-full rounded-xl border-2 border-orange-200/50 bg-white/80 backdrop-blur-sm px-4 py-4 pr-12 text-sm outline-none placeholder:text-slate-400 focus:border-orange-400 focus:bg-white transition-all duration-300"
                    />
                    <Phone className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-500 transition-transform group-hover:scale-110" />
                  </div>
                </div>

                {/* T&C Checkbox */}
                <label className="flex items-start gap-3 text-sm p-4 rounded-xl bg-orange-50/50 border border-orange-100 hover:bg-orange-50 transition-colors duration-200 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-5 w-5 rounded-md border-orange-300 text-orange-600 focus:ring-orange-500 focus:ring-2 cursor-pointer transition-all duration-200"
                    checked={acceptTC}
                    onChange={(e) => setAcceptTC(e.target.checked)}
                  />
                  <span className="text-slate-700 leading-relaxed">
                    I accept the{" "}
                    <Link
                      href="/terms-and-conditions"
                      className="text-orange-600 font-medium underline underline-offset-2 hover:text-orange-700 transition-colors"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-orange-600 font-medium underline underline-offset-2 hover:text-orange-700 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    onClick={handleLogin}
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-orange-300 bg-white px-6 py-3.5 text-sm font-semibold text-orange-700 hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 sm:w-auto cursor-pointer group"
                  >
                    <span className="rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 p-2 text-white shadow-lg group-hover:shadow-orange-300 transition-shadow duration-300">
                      <User2Icon />
                    </span>
                    I already have an account
                  </button>

                  <button
                    type="button"
                    disabled={!acceptTC}
                    aria-disabled={!acceptTC}
                    onClick={handleSubmit}
                    className={`relative inline-flex w-full items-center justify-center gap-3 rounded-xl px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 sm:w-auto overflow-hidden group cursor-pointer
                      ${
                        acceptTC
                          ? "bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:shadow-xl hover:shadow-orange-300/50 hover:scale-105"
                          : "bg-gray-300 cursor-not-allowed opacity-60"
                      }`}
                  >
                    {acceptTC && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    )}
                    <span className="relative">Register Now</span>
                    <span className="relative text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">
                      ➤
                    </span>
                  </button>
                </div>
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
