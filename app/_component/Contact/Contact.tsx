"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Building, X } from "lucide-react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_BASE || "https://prns.prisminfoways.com";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const officeLocations = [
    { city: "Corporate Office - Gurugram", address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana - 122052", icon: Building },
    { city: "Regional Office - Bangalore", address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bangalore – 560054", icon: MapPin },
    { city: "Regional Office - Guwahati", address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam - 781008", icon: MapPin },
];

type FormState = {
    full_name: string;
    email: string;
    phone: string;   // UI field
    subject: string;
    message: string;
};

export default function Contact() {
    const [form, setForm] = useState<FormState>({
        full_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [banner, setBanner] = useState<{ type: "success" | "error"; msg: string } | null>(null);

    const [successOpen, setSuccessOpen] = useState(false);

    const onChange =
        (key: keyof FormState) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setForm((s) => ({ ...s, [key]: e.target.value }));
                setBanner(null);
            };

    const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const isValidPhone = (v: string) => /^[0-9+\-\s()]{7,15}$/.test(v);

    const validate = () => {
        if (!form.full_name.trim()) return "Full Name is required.";
        if (!form.email.trim() || !isValidEmail(form.email)) return "Valid Email is required.";
        if (!form.phone.trim() || !isValidPhone(form.phone)) return "Valid Phone/Mobile is required.";
        if (!form.subject.trim()) return "Subject is required.";
        if (!form.message.trim() || form.message.length < 10) return "Message should be at least 10 characters.";
        return null;
    };

    useEffect(() => {
        if (!successOpen) return;
        const t = setTimeout(() => setSuccessOpen(false), 5000);
        return () => clearTimeout(t);
    }, [successOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const err = validate();
        if (err) {
            setBanner({ type: "error", msg: err });
            return;
        }

        try {
            setLoading(true);
            setBanner(null);

            const res = await fetch(API_URL + "/api/contact/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    full_name: form.full_name,
                    email: form.email,
                    mobile: form.phone,
                    subject: form.subject,
                    message: form.message,
                }),
            });

            let data: any = null;
            try {
                data = await res.json();
            } catch { }

            if (!res.ok) {
                const msg = (data && (data.message || data.error)) || `Submission failed with status ${res.status}.`;
                throw new Error(msg);
            }

            setSuccessOpen(true);
            setForm({ full_name: "", email: "", phone: "", subject: "", message: "" });
        } catch (error: any) {
            setBanner({ type: "error", msg: error?.message || "Something went wrong. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-slate-800">Our Offices</h2>
                                {officeLocations.map((office, index) => (
                                    <Card key={index} className="mb-6 border-l-4 border-[#eb8535]">
                                        <CardHeader className="flex flex-row items-start gap-4 p-5">
                                            <office.icon className="w-8 h-8 text-[#eb8535] mt-1 flex-shrink-0" />
                                            <div>
                                                <CardTitle className="text-xl">{office.city}</CardTitle>
                                                <p className="text-gray-600">{office.address}</p>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4">General Inquiries</h3>
                                <div className="space-y-4">
                                    <Link
                                        href="tel:+919050576838"
                                        className="flex items-center gap-3 text-lg text-gray-700 hover:text-[#eb8535]"
                                        aria-label="Call us"
                                    >
                                        <Phone className="w-6 h-6 text-orange-500" />
                                        <span>+91-9050576838</span>
                                    </Link>
                                    <Link
                                        href="mailto:info@praansconsultech.com"
                                        className="flex items-center gap-3 text-lg text-gray-700 hover:text-[#eb8535]"
                                        aria-label="Send email"
                                    >
                                        <Mail className="w-6 h-6 text-orange-500" />
                                        <span>info@praansconsultech.com</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Card className="p-8 shadow-sm">
                                <h2 className="text-3xl font-bold mb-6 text-slate-800">Send Us a Message</h2>

                                {banner && (
                                    <div
                                        role="alert"
                                        className={`mb-6 rounded-md border px-4 py-3 text-sm ${banner.type === "success"
                                            ? "border-green-300 bg-green-50 text-green-800"
                                            : "border-red-300 bg-red-50 text-red-800"
                                            }`}
                                    >
                                        {banner.msg}
                                    </div>
                                )}

                                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Full Name
                                            </label>
                                            <Input
                                                id="full_name"
                                                placeholder="Enter Your Name"
                                                value={form.full_name}
                                                onChange={onChange("full_name")}
                                                className="focus:bg-orange-50 focus:ring-2 focus:ring-orange-400"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email Address
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="Enter Your Email..."
                                                value={form.email}
                                                onChange={onChange("email")}
                                                className="focus:bg-orange-50 focus:ring-2 focus:ring-orange-400"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        {/* ✅ match htmlFor/id */}
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <Input
                                            id="phone"
                                            placeholder="Enter Your Phone Number"
                                            value={form.phone}
                                            onChange={onChange("phone")}
                                            className="focus:bg-orange-50 focus:ring-2 focus:ring-orange-400"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                            Subject
                                        </label>
                                        <Input
                                            id="subject"
                                            placeholder="Regarding Compliance Outsourcing"
                                            value={form.subject}
                                            onChange={onChange("subject")}
                                            className="focus:bg-orange-50 focus:ring-2 focus:ring-orange-400"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            placeholder="Please describe your requirements..."
                                            rows={10}
                                            value={form.message}
                                            onChange={onChange("message")}
                                            className="focus:bg-orange-50 focus:ring-2 focus:ring-orange-400"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <Button
                                            type="submit"
                                            disabled={loading}
                                            aria-busy={loading}
                                            className="w-full bg-[#eb8535] hover:bg-orange-400 text-lg py-3 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                                            aria-label="Submit inquiry"
                                        >
                                            {loading ? "Submitting…" : "Submit Inquiry"}
                                        </Button>
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
                <DialogContent className="sm:max-w-md rounded-2xl p-6">
                    <button
                        className="absolute right-3 top-3 rounded-md p-1 text-slate-500 hover:text-slate-700"
                        onClick={() => setSuccessOpen(false)}
                        aria-label="Close"
                    >
                    </button>

                    <DialogHeader className="sr-only">
                        <DialogTitle>Thank You!</DialogTitle>
                        <DialogDescription>Your message has been successfully sent.</DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-center text-center gap-3">
                        <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-green-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <path d="M22 4 12 14.01l-3-3" />
                            </svg>
                        </div>

                        <h3 className="mt-1 text-2xl font-semibold text-slate-900">Thank You!</h3>
                        <p className="text-slate-600">Your message has been successfully sent.</p>

                        <Button
                            onClick={() => setSuccessOpen(false)}
                            className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 cursor-pointer"
                            aria-label="Close">
                            OK
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>


        </>
    );
}
