"use client";
import Link from "next/link";
import React, { useState } from "react";

function PriceHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="relative inline-block align-middle leading-none"
      style={
        {
          "--gapTop": "12px",
          "--gapBottom": "14px",
          "--overTop": "12px",
          "--overBottom": "56px",
          "--thickness": 6,
        } as React.CSSProperties
      }
    >
      <span className="relative z-[1] inline-block font-extrabold text-2xl text-slate-900">
        {children}
      </span>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2"
        viewBox="0 0 100 20"
        style={{
          width: "calc(100% + var(--overTop))",
          height: 14,
          top: "calc(-1 * var(--gapTop))",
        }}
      >
        <path
          d="M1,15 C34,10 66,10 99,15"
          fill="none"
          stroke="#F97316"
          strokeWidth="var(--thickness)"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={100}
          style={{
            strokeDasharray: 100,
            strokeDashoffset: 100,
            animation: "drawLoop 5s ease-in-out infinite",
          }}
          aria-label="Price Highlight"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2"
        viewBox="0 0 100 20"
        style={{
          width: "calc(100% + var(--overBottom))",
          height: 16,
          bottom: "calc(-1 * var(--gapBottom))",
        }}
        aria-label="Price Highlight"
      >
        <path
          d="M1,6 C34,10 66,10 99,6"
          fill="none"
          stroke="#F97316"
          strokeWidth="var(--thickness)"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={100}
          style={{
            strokeDasharray: 100,
            strokeDashoffset: 100,
            animation: "drawLoop 5s ease-in-out infinite 160ms",
          }}
        />
      </svg>

      <style jsx>{`
        @keyframes drawLoop {
          0% {
            stroke-dashoffset: 100;
            opacity: 0.98;
          }
          14% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          86% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 100;
            opacity: 0.98;
          }
        }
      `}</style>
    </span>
  );
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE as string;
const ENQUIRY_ENDPOINT = new URL("/api/enquiry", API_BASE).toString();
const HARDCODED_TITLE = "Professional Tax Registration Consultant";

type FieldErrors = Partial<
  Record<"name" | "phone" | "email" | "state" | "message" | "title", string[]>
>;

export default function ProfessionalTaxHero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("Andhra Pradesh");
  const [message, setMessage] = useState("Google");

  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const whatsappNumber = "919050576838";
  const waMsg = encodeURIComponent(
    "Hi, I need expert advice on Professional Tax registration."
  );
  const waLink = `https://wa.me/${whatsappNumber}?text=${waMsg}`;

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isValidPhone = (v: string) => /^[0-9]{10}$/.test(v);

  const validate = () => {
    if (!name.trim()) return "Name is required.";
    if (!isValidPhone(phone)) return "Enter a valid 10-digit phone number.";
    if (!isValidEmail(email)) return "Enter a valid email address.";
    if (!state.trim()) return "Please select a state.";
    if (!message.trim()) return "Please select how did you hear about us.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBanner(null);
    setFieldErrors({});

    const err = validate();
    if (err) {
      setBanner({ type: "error", msg: err });
      return;
    }

    try {
      setLoading(true);
      const payload = {
        name,
        phone,
        email,
        state,
        message,
        title: HARDCODED_TITLE,
      };

      const res = await fetch(ENQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const raw = await res.text();
      let data: any = null;
      try {
        data = raw ? JSON.parse(raw) : null;
      } catch {}

      if (!res.ok) {
        if (res.status === 404) {
          setBanner({
            type: "error",
            msg: data?.message || "The route /api/enquiry could not be found.",
          });
          return;
        }
        if (res.status === 422 && data?.errors) {
          setFieldErrors(data.errors as FieldErrors);
          setBanner({
            type: "error",
            msg:
              data.message || "Validation failed. Fix the highlighted fields.",
          });
          return;
        }
        const details =
          data?.errors ||
          data?.error ||
          data?.message ||
          raw ||
          `Failed with ${res.status}`;
        const msg =
          typeof details === "object"
            ? (Object.values(details) as any).flat().join(" ")
            : String(details);
        setBanner({ type: "error", msg });
        return;
      }

      setBanner({
        type: "success",
        msg:
          data?.message ??
          "Thanks! Your request has been submitted. Our team will reach out ASAP.",
      });
      setTimeout(() => setBanner(null), 5000);

      setName("");
      setPhone("");
      setEmail("");
      setState("Andhra Pradesh");
      setMessage("");
    } catch (error: any) {
      setBanner({
        type: "error",
        msg: error?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const FieldError = ({ name }: { name: keyof FieldErrors }) =>
    fieldErrors?.[name]?.length ? (
      <p className="mt-1 text-xs font-medium text-red-600">
        {fieldErrors[name]!.join(" ")}
      </p>
    ) : null;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto w-full px-4 py-2 sm:py-4 lg:py-6">
        <div className="grid gap-4 lg:grid-cols-12 lg:items-start lg:gap-5">
          <div className="max-w-none lg:col-span-7 pl-3 sm:pl-6 md:pl-10 lg:pl-14 xl:pl-20 2xl:pl-24">
            <h1 className="w-full text-2xl font-extrabold tracking-tight text-[#1e2751] sm:text-3xl whitespace-normal lg:text-center">
              India’s Trusted{" "}
              <span className="text-orange-500">
                Professional Tax Registration
              </span>
              <span className="text-orange-500 hidden lg:block">
                Consultant
              </span>
              <span className="text-orange-500 lg:hidden"> Consultant</span>
            </h1>

            <p className="mt-1 text-center text-sm font-semibold text-slate-700">
              (An ISO Certified Company)
            </p>

            <p className="mt-4 w-full text-[15px] leading-7 text-slate-800 font-semibold whitespace-normal text-center sm:text-left">
              Get Your Professional Tax Registration Done Quickly and
              Hassle-Free Starting from just{" "}
              <PriceHighlight>Rs.4999/-</PriceHighlight>
            </p>

            <ul className="mt-6 space-y-2 text-[15px] leading-6 text-slate-800 font-semibold">
              <li className="flex w-full items-start gap-2">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                Apply New Licence in Just 2 Hours
              </li>
              <li className="flex w-full items-start gap-2">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                Free Consultation
              </li>
              <li className="flex w-full items-start gap-2">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                Money Back Guarantee
              </li>
              <li className="flex w-full items-start gap-2">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                100% Online Process
              </li>
            </ul>

            <div className="mt-5 flex w-full flex-wrap items-center gap-2 text-[15px] text-slate-800 font-semibold">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full">
                ⭐
              </span>
              15 Years experience in Professional Tax Registration PAN India
            </div>

            <Link
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Chat on WhatsApp for Expert Advice"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/30">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-label="WhatsApp Icon"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 12.81 19.79 19.79 0 010 4.18 2 2 0 012 2h3a2 2 0 012 1.72c.12.9.3 1.78.57 2.63a2 2 0 01-.45 2.11L6.1 9.9a16 16 0 006 6l1.44-1.02a2 2 0 012.11-.45c.85.27 1.73.45 2.63.57A2 2 0 0122 16.92z" />
                </svg>
              </span>
              For Expert Advice
            </Link>
          </div>

          {/* RIGHT — form */}
          <div className="w-full lg:col-span-5 lg:ml-auto">
            <div className="mx-auto w-full max-w-[560px] rounded-xl bg-white p-5 shadow-xl ring-1 ring-slate-200/70 sm:p-6">
              {banner && (
                <div
                  role="alert"
                  className={`mb-4 rounded-md border px-3 py-2 text-sm ${
                    banner.type === "success"
                      ? "border-green-300 bg-green-50 text-green-800"
                      : "border-red-300 bg-red-50 text-red-800"
                  }`}
                >
                  {banner.msg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-600">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setBanner(null);
                    }}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-orange-500 focus:border-orange-500 focus:ring-2"
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors?.name?.length}
                    aria-describedby="name-error"
                  />
                  <FieldError name="name" />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-600">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setBanner(null);
                    }}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-orange-500 focus:border-orange-500 focus:ring-2"
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors?.phone?.length}
                    aria-describedby="phone-error"
                  />
                  <FieldError name="phone" />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-600">
                    E-mail Id
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setBanner(null);
                    }}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-orange-500 focus:border-orange-500 focus:ring-2"
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors?.email?.length}
                    aria-describedby="email-error"
                  />
                  <FieldError name="email" />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-600">
                    State
                  </label>
                  <select
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                      setBanner(null);
                    }}
                    className="w-full appearance-none rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-orange-500 focus:border-orange-500 focus:ring-2"
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors?.state?.length}
                    aria-describedby="state-error"
                  >
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
                  <FieldError name="state" />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-600">
                    How did you hear about us?
                  </label>
                  <div className="relative">
                    <select
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        setBanner(null);
                      }}
                      className="w-full appearance-none rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-orange-500 focus:border-orange-500 focus:ring-2"
                    >
                      <option>Google</option>
                      <option>Facebook</option>
                      <option>Instagram</option>
                      <option>Word of Mouth</option>
                      <option>Others</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                      ▾
                    </span>
                  </div>
                  <FieldError name="message" />
                </div>

                {/* backend title error, if any */}
                {fieldErrors?.title?.length ? (
                  <p className="mt-1 text-xs font-medium text-red-600">
                    {fieldErrors.title.join(" ")}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow 
                  hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-60 cursor-pointer"
                  aria-label="Submit"
                >
                  {loading ? "Submitting…" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ORANGE STRIP */}
      <div className="w-full bg-orange-500">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm font-semibold text-white">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <span>
              Support:{" "}
              <Link
                href="mailto:info@praansconsultech.com"
                className="hover:underline"
                aria-label="Email"
              >
                info@praansconsultech.com
              </Link>
            </span>
            <span>
              Talk to us:{" "}
              <Link
                href="tel:+919050576838"
                className="hover:underline"
                aria-label="Phone"
              >
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
                aria-label="Website"
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
