"use client";
import Link from "next/link";
import { useState } from "react";

export default function MsmeHero() {
  const [state, setState] = useState("Andhra Pradesh");
  const [hear, setHear] = useState("Google");

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* CONTENT */}
      <div className="mx-auto w-full px-4 py-2 sm:py-4 lg:py-6">
        <div className="grid gap-4 lg:grid-cols-12 lg:items-start lg:gap-5">
          {/* LEFT */}
          <div className="max-w-none lg:col-span-7 pl-3 sm:pl-6 md:pl-10 lg:pl-14 xl:pl-20 2xl:pl-24">
            {/* HEADLINE */}
            <h1 className="w-full text-center text-2xl font-extrabold tracking-tight text-slate-900 lg:whitespace-normal whitespace-nowrap sm:text-2xl xl:text-3xl">
              India’s Trusted{" "}
              <span className="text-orange-500">Trade Licence Registration</span>
              {/* show on laptop/desktop: new line */}
              <span className="text-orange-500 hidden lg:block">Consultant</span>
              {/* keep inline on small screens */}
              <span className="text-orange-500 lg:hidden"> Consultant</span>
            </h1>

            {/* ISO under headline */}
            <p className="mt-1 text-center text-sm font-semibold text-slate-600">
              (An ISO Certified Company)
            </p>

            {/* PROMO LINE */}
            <p className="mt-4 w-full overflow-x-auto whitespace-nowrap text-[15px] leading-7 text-slate-700">
              Get Your Trade Licence Done Quickly and Hassle-Free Starting from Just{" "}
              <span className="font-bold text-slate-900">Rs.4999/-</span> Only
            </p>

            {/* BULLETS */}
            <ul className="mt-6 space-y-2 text-[15px] leading-6 text-slate-800">
              <li className="flex w-full items-start gap-2 overflow-x-auto whitespace-nowrap">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                Apply New Licence in Just 2 Hours
              </li>
              <li className="flex w-full items-start gap-2 overflow-x-auto whitespace-nowrap">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                Free Consultation
              </li>
              <li className="flex w-full items-start gap-2 overflow-x-auto whitespace-nowrap">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                Money Back Guarantee
              </li>
              <li className="flex w-full items-start gap-2 overflow-x-auto whitespace-nowrap">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                100% Online Process
              </li>
            </ul>

            {/* STATS */}
            <div className="mt-5 flex w-full items-center gap-2 overflow-x-auto whitespace-nowrap text-[15px] text-slate-800">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full">⭐</span>
              15 Years experience in Trade Licence Registration PAN India
            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/30">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 12.81 19.79 19.79 0 010 4.18 2 2 0 012 2h3a2 2 0 012 1.72c.12.9.3 1.78.57 2.63a2 2 0 01-.45 2.11L6.1 9.9a16 16 0 006 6l1.44-1.02a2 2 0 012.11-.45c.85.27 1.73.45 2.63.57A2 2 0 0122 16.92z" />
                </svg>
              </span>
              For Expert Advice
            </button>
          </div>

          {/* RIGHT — unchanged form */}
          <div className="w-full lg:col-span-5 lg:ml-auto">
            <div className="mx-auto w-full max-w-[560px] rounded-xl bg-white p-5 shadow-xl ring-1 ring-slate-200/70 sm:p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Submitted!");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                  <input className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-orange-500 focus:border-orange-500 focus:ring-2" required />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Mobile Number</label>
                  <input type="tel" inputMode="numeric" pattern="[0-9]{10}" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-orange-500 focus:border-orange-500 focus:ring-2" required />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">E-mail Id</label>
                  <input type="email" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-orange-500 focus:border-orange-500 focus:ring-2" required />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">State</label>
                  <select value={state} onChange={(e) => setState(e.target.value)} className="w-full appearance-none rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-orange-500 focus:border-orange-500 focus:ring-2">
                    <optgroup label="States">
                      <option>Andhra Pradesh</option>
                      <option>Arunachal Pradesh</option>
                      <option>Assam</option>
                      <option>Bihar</option>
                      <option>Chhattisgarh</option>
                      <option>Goa</option>
                      <option>Gujarat</option>
                      <option>Haryana</option>
                      <option>Himachal Pradesh</option>
                      <option>Jharkhand</option>
                      <option>Karnataka</option>
                      <option>Kerala</option>
                      <option>Madhya Pradesh</option>
                      <option>Maharashtra</option>
                      <option>Manipur</option>
                      <option>Meghalaya</option>
                      <option>Mizoram</option>
                      <option>Nagaland</option>
                      <option>Odisha</option>
                      <option>Punjab</option>
                      <option>Rajasthan</option>
                      <option>Sikkim</option>
                      <option>Tamil Nadu</option>
                      <option>Telangana</option>
                      <option>Tripura</option>
                      <option>Uttar Pradesh</option>
                      <option>Uttarakhand</option>
                      <option>West Bengal</option>
                    </optgroup>
                    <optgroup label="Union Territories">
                      <option>Andaman and Nicobar Islands</option>
                      <option>Chandigarh</option>
                      <option>Dadra and Nagar Haveli and Daman and Diu</option>
                      <option>Delhi</option>
                      <option>Jammu and Kashmir</option>
                      <option>Ladakh</option>
                      <option>Lakshadweep</option>
                      <option>Puducherry</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">How did you hear about us?</label>
                  <div className="relative">
                    <select value={hear} onChange={(e) => setHear(e.target.value)} className="w-full appearance-none rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-orange-500 focus:border-orange-500 focus:ring-2">
                      <option>Google</option>
                      <option>Facebook</option>
                      <option>Instagram</option>
                      <option>Word of Mouth</option>
                      <option>Others</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">▾</span>
                  </div>
                </div>

                <button type="submit" className="mt-2 w-full rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH ORANGE STRIP */}
      <div className="w-full bg-orange-500">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm font-semibold text-white">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <span>
              Support:{" "}
              <Link href="mailto:info@praansconsultech.com" className="hover:underline">
                info@praansconsultech.com
              </Link>
            </span>
            <span>
              Talk to us:{" "}
              <Link href="tel:+919050576838" className="hover:underline">
                +91 9050576838
              </Link>
            </span>
            <span>
              Website:{" "}
              <Link
                href="https://www.praansconsultech.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                www.praansconsultech.com
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
