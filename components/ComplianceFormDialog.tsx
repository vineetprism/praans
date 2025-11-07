"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

// Reusable dialog that renders the compliance form.
// Usage:
// <ComplianceFormDialog>
//   <Button>Talk to Our Compliance Experts</Button>
// </ComplianceFormDialog>
export default function ComplianceFormDialog({
  children,
  onSuccess,
}: {
  children: React.ReactNode;
  onSuccess?: () => void;
}) {
  const [submitting, setSubmitting] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const payload = {
        full_name: (formData.get("cf_full_name") as string) || "",
        business_email: (formData.get("cf_business_email") as string) || "",
        mobile_number: (formData.get("cf_mobile") as string) || "",
        organization_name: (formData.get("cf_org") as string) || "",
        source: "cta-section",
      };

      const base = process.env.NEXT_PUBLIC_API_BASE || "";
      const res = await fetch(`${base}/api/compliance-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Request failed");
      }

      form.reset();
      setOpen(false);
      onSuccess?.();
    } catch (err: any) {
      // optionally handle error UI
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-xl p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-b from-orange-400 to-orange-600 opacity-100" />
          <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-orange-300/30 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-red-300/20 blur-3xl" />
          <div className="relative bg-white/95 rounded-2xl p-6 sm:p-8">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight">
                Talk to Our Compliance Experts
              </DialogTitle>
            </DialogHeader>
            <div className="mx-auto mt-1 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-500" />
            <p className="text-center text-gray-500 mt-2 mb-6">Get started in just 60 seconds</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="cf_full_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <Input id="cf_full_name" name="cf_full_name" placeholder="John Doe" required className="h-11 rounded-lg border border-slate-200 focus-visible:ring-2 focus-visible:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="cf_business_email" className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                <Input id="cf_business_email" name="cf_business_email" type="email" placeholder="john@company.com" required className="h-11 rounded-lg border border-slate-200 focus-visible:ring-2 focus-visible:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="cf_mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <Input id="cf_mobile" name="cf_mobile" placeholder="+91 98765 43210" required className="h-11 rounded-lg border border-slate-200 focus-visible:ring-2 focus-visible:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="cf_org" className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                <Input id="cf_org" name="cf_org" placeholder="Your Company Ltd." required className="h-11 rounded-lg border border-slate-200 focus-visible:ring-2 focus-visible:ring-orange-500" />
              </div>
              <Button type="submit" disabled={submitting} className="w-full h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl cursor-pointer shadow-[0_10px_30px_rgba(234,88,12,0.45)] disabled:opacity-70 disabled:cursor-not-allowed">
                {submitting ? "Submitting..." : "REQUEST NOW"} <span className="ml-1">→</span>
              </Button>
              <p className="text-center text-xs text-gray-500">Your information is secure and encrypted</p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
