import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-12 bg-white w-full">
      <div className="w-full px-4 text-center">
        <h2 className="text-[30px] font-bold mb-2">
          Ready to Join Our Growing Family of Satisfied Clients?
        </h2>
        <p className="text-[15px] mb-4 text-gray-700">
          Let's discuss how we can simplify your labour law compliance and help
          your business grow
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="tel:+91-9050576838">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-400 text-white text-lg px-8 py-2 cursor-pointer"
              aria-label="Get Free Consultation"
            >
              Get Free Consultation
            </Button>
          </Link>

          <Link href="/contact-us">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-100 text-slate-800 hover:text-orange-500 hover:bg-orange-50 bg-gray-50 text-lg px-8 py-2 cursor-pointer"
              aria-label="View Case Studies"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
