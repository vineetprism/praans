"use client";
import { AlertCircle } from "lucide-react";

export default function LabourWelfareFundComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        {/* Header Card */}
        <div className="rounded-xl shadow-lg overflow-hidden border border-orange-200 bg-white">
          {/* Top Orange Bar */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-1" />

          {/* Main Content */}
          <div className="p-8 sm:p-12 text-center">
            {/* Icon */}
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100">
              <AlertCircle className="w-8 h-8 text-orange-600" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
              Coming Soon
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-neutral-600 mb-2">
              Labour Welfare Fund Calculator
            </p>
            <p className="text-sm text-neutral-500 mb-8">
              We're building a specialized tool to calculate and manage Labour Welfare Fund contributions across states with automated compliance tracking.
            </p>

            {/* Features List */}
            <div className="bg-orange-50 rounded-lg p-6 mb-8 text-left">
              <h2 className="font-semibold text-neutral-900 mb-4 text-center">
                What's Coming:
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-0.5">✓</span>
                  <span className="text-neutral-700">Multi-state Labour Welfare Fund rate configurations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-0.5">✓</span>
                  <span className="text-neutral-700">Automatic calculation for employee and employer contributions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-0.5">✓</span>
                  <span className="text-neutral-700">Wage ceiling and exemption support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-0.5">✓</span>
                  <span className="text-neutral-700">Monthly and annual contribution reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-0.5">✓</span>
                  <span className="text-neutral-700">Eligibility threshold management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-0.5">✓</span>
                  <span className="text-neutral-700">Pro-rata calculations for partial employment periods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-neutral-600">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-500" />
            <span className="text-sm font-medium">Labour Compliance & Payroll Tools</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
}