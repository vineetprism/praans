'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    CheckCircle,
    Shield,
    Cpu,
    Users,
    FileText,
    Search,
    Phone,
    Mail,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const whyReadinessMatters = [
    {
        icon: Shield,
        title: "Avoid Legal Penalties",
        description:
            "Regular internal audits identify gaps early so you avoid fines, license suspension, and legal escalation.",
    },
    {
        icon: Users,
        title: "Build Trust with Authorities",
        description:
            "Accurate documentation and proactive compliance reduce friction during inspections and strengthen regulator relations.",
    },
    {
        icon: FileText,
        title: "Ensure Operational Continuity",
        description:
            "Audit readiness minimizes disruption — keep operations running even during scrutiny or investigations.",
    },
    {
        icon: CheckCircle,
        title: "Protect Your Reputation",
        description:
            "Transparent record-keeping and timely corrective actions preserve employer brand and stakeholder confidence.",
    },
]

const ourServices = [
    {
        title: "Pre-Audit Review",
        description:
            "Complete internal review of processes and records to identify non-conformance and remedial actions.",
    },
    {
        title: "Statutory Documentation Management",
        description:
            "Maintain registers, returns, forms and filing schedules aligned with latest central and state norms.",
    },
    {
        title: "On-Site Inspection Support",
        description:
            "Field team stands with you during inspections — presents documentation and coordinates with officials.",
    },
    {
        title: "Post-Inspection Compliance",
        description:
            "Corrective responses, back-filings, and system improvements to close gaps permanently.",
    },
    {
        title: "Ongoing Advisory",
        description:
            "Subscription-style advisory so legal updates and process changes are handled proactively.",
    },
]

const icons = [Shield, Users, Cpu, FileText, CheckCircle];

const whyChooseUs = [
    "15+ Years of Labour Law Expertise",
    "Skilled Legal & Field Team for On-Site Support",
    "Real-Time Tracking Through Smart Software",
    "Tailored Solutions Based on Your Operations",
    "End-to-End Service—From Pre-Audit to Closure Reports",
]

const serviceIcons = [Shield, FileText, Users, CheckCircle, Cpu]

export default function LegalAdvisoryHrPolicies() {
    return (
        <div className="bg-white text-slate-900">
            {/* Hero */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    {/* stack on md (768px) and go 2-col on lg */}
                    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 items-center">
                        <div>
                            <div className="inline-flex items-center gap-3 mb-4">
                                <span className="inline-block bg-orange-50 text-[#eb8535] font-semibold text-sm px-3 py-1 rounded-full">
                                    Trusted Legal Advisory & HR Policies Partner
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                                Labour Law Legal Advisory & HR Policies
                            </h1>

                            {/* constrain width for better readability on tablets */}
                            <p className="mt-4 text-lg text-slate-700 max-w-xl">
                                Stay compliant, prepared and confident. Praans Consultech provides full-stack labour law advisory with
                                technology-enabled audit readiness and field support to minimize legal and operational risk.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <Link href="/contact" aria-label="Book free consultation">
                                    <Button
                                        size="lg"
                                        className="px-6 py-3 sm:py-4 md:py-4 lg:py-6 rounded-lg border border-tertiary bg-[#eb8535] text-white text-lg hover:bg-transparent hover:text-gray-800 font-bold hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)] transition duration-200 cursor-pointer w-full sm:w-auto"
                                        aria-label="Book free consultation"
                                    >
                                        <Phone className="w-4 h-4 mr-2" />
                                        Book Free Consultation
                                    </Button>
                                </Link>

                                <Link href="/services" aria-label="See services">
                                    <Button
                                        size="lg"
                                        variant="ghost"
                                        className="px-6 py-3 sm:py-4 md:py-4 lg:py-6 rounded-lg border border-[#eb8535] bg-transparent text-gray-600 text-lg hover:bg-[#eb8535] hover:text-white hover:border-white font-bold hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)] transition duration-200 cursor-pointer w-full sm:w-auto"
                                    >
                                        View Services
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white">
                                <Image
                                    src="/services/labour-law.jpg"
                                    alt="Labour law advisory"
                                    width={900}
                                    height={600}
                                    className="object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* What is an Audit / Inspection */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    {/* make grid items stretch to same height */}
                    <div className="grid gap-8 md:grid-cols-2 items-stretch">
                        {/* Audit Card */}
                        <article
                            className="relative rounded-lg p-6 bg-blue-50 border border-blue-100 shadow-sm overflow-hidden flex flex-col h-full"
                            aria-labelledby="audit-title"
                        >
                            {/* left accent */}
                            <div className="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-tr-md rounded-br-md" aria-hidden="true" />

                            {/* main content area expands */}
                            <div className="ml-4 flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-white/60 text-blue-700 border border-blue-100">
                                        Audit Overview
                                    </span>
                                </div>

                                <h2 id="audit-title" className="text-2xl font-semibold mb-2 text-slate-800">
                                    What is a Labour Law Audit?
                                </h2>

                                <p className="text-slate-700 mb-5">
                                    A focused review of your statutory records, systems and on-ground practices to confirm compliance with central
                                    and state labour statutes — we surface gaps and provide pragmatic remediation.
                                </p>

                                <dl className="space-y-3 text-slate-700">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <dt className="font-medium">Registers & filing checks</dt>
                                            <dd className="text-sm">Verify statutory registers, returns and filing schedules for completeness.</dd>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <dt className="font-medium">PF / ESI / Wages</dt>
                                            <dd className="text-sm">Cross-check payroll compliance, contributions, and contractor documentation.</dd>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <dt className="font-medium">Licenses & leave records</dt>
                                            <dd className="text-sm">Ensure licenses are valid and leave records are maintained per regulation.</dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>

                            {/* CTA stays pinned to bottom so cards align visually */}
                            <div className="mt-6 pt-4">
                                <a
                                    href="/services#audit"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline"
                                    aria-label="Learn more about labour law audits"
                                >
                                    Learn about our Audit Process
                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </article>

                        {/* Inspection Card */}
                        <article
                            className="relative rounded-lg p-6 bg-orange-50 border border-orange-100 shadow-sm overflow-hidden flex flex-col h-full"
                            aria-labelledby="inspection-title"
                        >
                            <div className="absolute inset-y-0 left-0 w-1 bg-orange-400 rounded-tr-md rounded-br-md" aria-hidden="true" />

                            <div className="ml-4 flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-white/60 text-[#eb8535] border border-orange-100">
                                        Inspection Essentials
                                    </span>
                                </div>

                                <h2 id="inspection-title" className="text-2xl font-semibold mb-2 text-slate-800">
                                    Understanding Labour Law Inspections
                                </h2>

                                <p className="text-slate-700 mb-5">
                                    Government officials perform inspections that can be scheduled, surprise, or complaint-triggered. We prepare you
                                    to present documents and evidence confidently on-site.
                                </p>

                                <dl className="space-y-3 text-slate-700">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <dt className="font-medium">Registers & notices</dt>
                                            <dd className="text-sm">Ensure statutory registers are updated and mandatory notices are displayed.</dd>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <dt className="font-medium">On-site verification</dt>
                                            <dd className="text-sm">Field review of working conditions, welfare facilities, and employee rights.</dd>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <dt className="font-medium">Inspection readiness</dt>
                                            <dd className="text-sm">We prepare documentation packs and a response playbook for officers’ queries.</dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>

                            <div className="mt-6 pt-4">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[#eb8535] hover:underline"
                                    aria-label="Request on-site inspection support"
                                >
                                    Request On-site Support
                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>


            {/* Why Readiness Matters */}
            {/* <section className="py-14 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">Why Audit & Inspection Readiness Matters</h2>
                        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                            Protect your operations with a proactive compliance posture — faster remediation, fewer fines, and better
                            regulator relations.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {whyReadinessMatters.map((item, idx) => (
                            <Card key={idx} className="p-5 shadow-sm border border-slate-100">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 mb-3 bg-white border rounded-full flex items-center justify-center shadow-xs">
                                        <item.icon className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section> */}

            <section className="py-14 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">Why Audit & Inspection Readiness Matters</h2>
                        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                            Protect your operations with a proactive compliance posture — faster remediation, fewer fines, and better
                            regulator relations.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {whyReadinessMatters.map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-offset-2"
                                tabIndex={0}
                                role="button"
                                aria-pressed="false"
                            >
                                {/* Surface: we control the fill via ::before so the Card component internals don't cause gradients */}
                                <div className="surface relative border rounded-md border-orange-100 shadow-md">
                                    {/* content layer above the fill */}
                                    <div className="relative z-10 p-5 flex flex-col items-center text-center min-h-[220px]">
                                        <div
                                            className="w-14 h-14 mb-3 rounded-full flex items-center justify-center bg-white border border-orange-100 transition-colors duration-200"
                                            aria-hidden="true"
                                        >
                                            <item.icon className="w-6 h-6 text-[#eb8535] group-hover:text-white transition-colors duration-200" />
                                        </div>

                                        <h3 className="font-semibold text-lg group-hover:text-white transition-colors duration-200">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-200">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* scoped styles to create a right-to-left fill using transform scaleX */}
                <style jsx>{`
    /* the surface pseudo-element is the fill layer */
    .surface::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: #eb8535; /* target color */
      transform: scaleX(0); /* start collapsed */
      transform-origin: left; /* expand from right -> left */
      transition: transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 320ms;
      z-index: 0;
    }

    /* on hover or focus of the parent group, scaleX to 1 to fill */
    .group:hover .surface::before,
    .group:focus-within .surface::before,
    .group:focus .surface::before {
      transform: scaleX(1);
      box-shadow: 0 12px 30px rgba(235, 133, 53, 0.12);
    }

    /* ensure content (z-10) sits above the colored fill */
    .surface > .relative {
      z-index: 10;
    }

    /* make sure the icon / text color flips — Tailwind classes handle most, but force contrast fallback */
    .group:hover h3,
    .group:focus-within h3,
    .group:focus h3 {
      color: #ffffff !important;
    }

    .group:hover p,
    .group:focus-within p,
    .group:focus p {
      color: rgba(255, 255, 255, 0.9) !important;
    }

    .group:hover .w-14,
    .group:focus-within .w-14,
    .group:focus .w-14 {
      background-color: rgba(255, 255, 255, 0.08) !important; /* subtle contrast ring for the icon circle */
    }
  `}</style>
            </section>



            {/* Our Services */}
            <section className="py-14 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-10">
                        <h2 className="text-3xl font-bold">Our Comprehensive Legal Advisory & HR Policies Services</h2>
                        <p className="mt-3 text-gray-600">
                            Practical, auditable processes backed by field teams and software — built for scale and repeatability.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {ourServices.map((service, idx) => {
                            const Icon = serviceIcons[idx % serviceIcons.length] || FileText
                            return (
                                <Card key={idx} className="p-6 border border-slate-100 shadow-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-md bg-orange-50 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-[#eb8535]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-xl">{service.title}</h3>
                                            <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Technology */}
            <section className="py-14 bg-[#1c2752] text-white">
                <div className="container mx-auto px-6 lg:px-8 grid gap-8 md:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Technology-Enabled Compliance</h2>
                        <p className="text-gray-200 mb-6">
                            We pair legal expertise with a secure compliance dashboard to track real-time status, keep digital
                            registers, and generate inspection-ready reports.
                        </p>

                        <ul className="space-y-3 text-gray-200">
                            <li className="flex items-center gap-3">
                                <Cpu className="w-5 h-5 text-orange-400" />
                                <span>Track compliance status in real-time</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-orange-400" />
                                <span>Maintain digital records of registers & forms</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Search className="w-5 h-5 text-orange-400" />
                                <span>Instant audit reports and checklists</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-md rounded-lg overflow-hidden bg-white">
                            <Image
                                src="/services/technology-compliance.jpg"
                                alt="Compliance dashboard preview"
                                width={900}
                                height={600}
                                className="object-cover w-full h-64 sm:h-80"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-14">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold">Why Choose Praans Consultech?</h2>
                        <p className="text-gray-600 mt-2">Smart compliance starts with a partner who gets operations and law.</p>
                    </div>

                    {/* responsive boxes grid */}
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {whyChooseUs.map((reason, idx) => {
                            const Icon = icons[idx] ?? CheckCircle; // fallback icon
                            const microCopy = [
                                "15+ years delivering pragmatic, audit-ready labour law solutions across industries.",
                                "Field-ready legal teams who coordinate onsite during inspections for zero friction.",
                                "Real-time dashboards + logs so compliance is visible and auditable 24/7.",
                                "Custom operating procedures that fit how you actually work — not off-the-shelf templates.",
                                "End-to-end service: pre-audit, remediation, filings and closure reporting with SLAs.",
                            ][idx] ?? "Trusted, enterprise-grade compliance support.";

                            return (
                                <div
                                    key={idx}
                                    className="relative bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-orange-200"
                                    role="article"
                                    aria-label={`Reason ${idx + 1} - ${reason}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-md bg-orange-50 flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-[#eb8535]" />
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900">{reason}</h3>
                                            <p className="mt-2 text-sm text-gray-600">{microCopy}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* Replace existing CTA with this dark card style */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="bg-[#2a3154] text-white rounded-lg p-10 shadow-lg text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Ahead of Every Inspection</h2>
                            <p className="max-w-3xl mx-auto text-gray-300 mb-8">
                                Be inspection-ready 24/7. Combine legal advisory with our software to minimize risk and maintain continuity.
                            </p>

                            <div className="flex justify-center gap-6 flex-wrap">
                                <Link
                                    href="tel:+91-9876543210"
                                    aria-label="Call Praans Consultech"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-tertiary bg-[#eb8535] text-white text-lg hover:bg-transparent hover:text-[#eb8535] font-bold hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)] transition duration-200 cursor-pointer"
                                >
                                    <span>Book Consultation</span>
                                </Link>

                                <Link
                                    href="mailto:sales@abc.com"
                                    aria-label="Email Praans Consultech"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white bg-transparent text-[#eb8535] text-lg hover:bg-[#eb8535] hover:text-white hover:border-white font-bold hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)] transition duration-200 cursor-pointer"
                                >
                                    <span>Request a Demo</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile micro-CTA (non-intrusive) */}
            <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
                <Link href="tel:+91-9582200771" aria-label="Quick consult">
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md flex items-center gap-2"
                        aria-label="Quick consult"
                    >
                        <Phone className="w-4 h-4" />
                        Quick Consult
                    </button>
                </Link>
            </div>

        </div>
    )
}

