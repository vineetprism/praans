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
      "Non-compliance can lead to fines, licence suspension or prosecution. Regular internal audits identify gaps early so you can remediate before an inspection.",
  },
  {
    icon: Users,
    title: "Build Trust with Authorities",
    description:
      "Maintain accurate documentation and follow labour statutes to reduce friction with regulators — smoother inspections, fewer disruptions.",
  },
  {
    icon: FileText,
    title: "Ensure Operational Continuity",
    description:
      "Audit readiness reduces the risk of sudden compliance issues that could halt operations or trigger legal action, keeping the business running.",
  },
  {
    icon: CheckCircle,
    title: "Protect Your Reputation",
    description:
      "Timely compliance and transparent processes protect your employer brand and stakeholder confidence — good compliance = good reputation.",
  },
];


const ourServices = [
  {
    title: "Pre-Audit Review",
    description:
      "We perform a complete internal review to surface compliance gaps and quantify risk across processes, payroll and documentation — with a prioritized remediation plan.",
  },
  {
    title: "Statutory Documentation Management",
    description:
      "End-to-end management of mandatory registers, forms, returns and filings — kept current with the latest central and state rules and accessible for inspections.",
  },
  {
    title: "On-Site Inspection Support",
    description:
      "On-ground support during government inspections: our experts liaise with officials, present required documents and help your team respond professionally and confidently.",
  },
  {
    title: "Post-Inspection Compliance",
    description:
      "If an inspection flags issues, we handle corrective actions, draft response letters, assist with back-dated filings and implement system changes to prevent recurrence.",
  },
  {
    title: "Ongoing Advisory",
    description:
      "Subscription-style advisory that keeps you aligned with legal updates — process tweaks, compliance alerts, and proactive readiness so you’re always inspection-ready.",
  },
];


const icons = [Shield, Users, Cpu, FileText, CheckCircle];

const whyChooseUs = [
  "15+ Years of Labour Law Expertise",
  "Skilled Legal & Field Team for On-Site Support",
  "Real-Time Tracking Through Smart Software",
  "Tailored Solutions Based on Your Operations",
  "End-to-End Service—From Pre-Audit to Closure Reports",
]

const serviceIcons = [Shield, FileText, Users, CheckCircle, Cpu]

export default function AuditAndInspection() {
  return (
    <div className="bg-white text-slate-900">
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 items-stretch lg:gap-4">
            {/* LEFT: Text content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="inline-block bg-orange-50 text-orange-500 font-semibold text-sm px-3 py-1 rounded-full">
                  Labour Law Audit & Inspection Services
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Stay Compliant, Stay Prepared, Stay Confident
              </h1>

              <p className="mt-4 text-lg text-slate-700 max-w-xl text-justify">
                Labour-law audits and inspections are more than box-checking — they’re
                critical to operational resilience and risk mitigation. Praans
                Consultech combines field-enabled expertise with tech-backed processes
                to handle documentation review, gap remediation and live inspection
                support, so your statutory compliance is accurate, defensible and
                inspection-ready.
              </p>

              <div className="mt-8 mb-4 sm:mb-4 md:mb-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact" aria-label="Book free consultation">
                  <Button
                    size="lg"
                    className="inline-flex items-center justify-center gap-2 px-6 py-6 rounded-lg border border-orange-500 bg-orange-50 text-orange-500 text-lg font-bold
                         hover:bg-transparent hover:text-orange-500
                         hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)]
                         transition duration-200 cursor-pointer"
                    aria-label="Book free consultation"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Book Free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT: Image column */}
            <div className="flex items-stretch">
              <div className="w-full rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-white flex">
                <Image
                  src="/services/labour-law.webp"
                  alt="Labour law advisory"
                  width={900}
                  height={600}
                  className="object-cover w-full h-auto lg:h-full"
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

                <p className="text-slate-700 mb-5 text-justify">
                  A labour law audit is a detailed examination of your company’s statutory records, processes, and practices
                  to ensure compliance with central and state-specific labour regulations. These audits are often part of
                  internal control systems or preemptive measures to avoid penalties and legal actions.
                </p>

                <p className="text-slate-700 mb-4 font-medium">During an audit, the focus areas typically include:</p>

                <dl className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Statutory registers and returns</dt>
                      <dd className="text-sm">Verify completeness of registers, returns and filing schedules.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Provident Fund (PF) & ESI records</dt>
                      <dd className="text-sm">Confirm contribution accuracy, remittances and reconciliations.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Wages, attendance & contractor documentation</dt>
                      <dd className="text-sm">Review payroll, attendance logs and third-party contractor files.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">License validity & renewals</dt>
                      <dd className="text-sm">Ensure licences are current and renewal schedules are tracked.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Bonus, gratuity & leave records</dt>
                      <dd className="text-sm">Validate statutory benefits, accruals and leave balances.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Employment agreements & applicable Acts</dt>
                      <dd className="text-sm">Check contracts and compliance with relevant labour laws and regulations.</dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="mt-6 pt-4">
                <Link
                  href=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline"
                  aria-label="Learn more about labour law audits"
                >
                  Learn about our Audit Process
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>

            <article
              className="relative rounded-lg p-6 bg-orange-50 border border-orange-100 shadow-sm overflow-hidden flex flex-col h-full"
              aria-labelledby="inspection-title"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-orange-400 rounded-tr-md rounded-br-md" aria-hidden="true" />

              <div className="ml-4 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-white/60 text-orange-500 border border-orange-100">
                    Inspection Essentials
                  </span>
                </div>

                <h2 id="inspection-title" className="text-2xl font-semibold mb-2 text-slate-800">
                  Understanding Labour Law Inspections
                </h2>

                <p className="text-slate-700 mb-4 text-justify">
                  A labour law inspection is a physical verification of compliance by government-authorized officials.
                  It may be scheduled, a surprise visit, or prompted by a complaint or whistleblower. Inspectors review
                  records, premises and processes to confirm statutory compliance.
                </p>

                <p className="text-slate-700 mb-4 font-medium">Inspectors typically check for:</p>

                <dl className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Maintenance of statutory records</dt>
                      <dd className="text-sm">Registers, returns and filing evidence must be complete and up to date.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Proper display of mandatory notices & signage</dt>
                      <dd className="text-sm">Required workplace notices and statutory signage should be visible and compliant.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Validity of labour licences</dt>
                      <dd className="text-sm">Trade, factory and other licences must be current and renewal schedules documented.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Payments & deductions (PF / ESIC)</dt>
                      <dd className="text-sm">Contribution records, remittances and payroll deductions are validated for accuracy.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Working conditions & employee rights</dt>
                      <dd className="text-sm">On-site checks of welfare facilities, working hours, and statutory employee protections.</dd>
                    </div>
                  </div>
                </dl>

                <p className="text-slate-700 mt-4">
                  Inspections can result in penalties or legal notices where violations are found — which is why being inspection-ready
                  at all times is essential.
                </p>
              </div>

              <div className="mt-6 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 hover:underline"
                  aria-label="Request on-site inspection support"
                >
                  Request On-site Support
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>

          </div>
        </div>
      </section>

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
                <div className="surface relative border rounded-md border-orange-100 shadow-md">
                  <div className="relative z-10 p-5 flex flex-col items-center text-center min-h-[220px]">
                    <div
                      className="w-14 h-14 mb-3 rounded-full flex items-center justify-center bg-white border border-orange-100 transition-colors duration-200"
                      aria-hidden="true"
                    >
                      <item.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-200" />
                    </div>

                    <h3 className="font-semibold text-lg group-hover:text-white transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-200 text-justify">
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
            <h2 className="text-3xl font-bold">Our Audit & Inspection Services</h2>
            <p className="mt-3 text-gray-600">
              At Praans Consultech, we offer comprehensive audit and inspection support to help you stay prepared, minimize risks, and ensure full compliance with labour laws.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ourServices.map((service, idx) => {
              const Icon = serviceIcons[idx % serviceIcons.length] || FileText
              return (
                <Card key={idx} className="p-6 border border-slate-100 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-orange-50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">{service.title}</h3>
                      <p className="mt-2 text-sm text-gray-600 text-justify">{service.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 lg:gap-4 grid md:grid-cols-2 items-stretch">
          {/* LEFT: Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Technology-Enabled Compliance</h2>

            <p className="text-gray-600 mb-6 max-w-xl text-justify">
              To enhance accuracy and efficiency, we integrate our AI-powered compliance management software with
              our audit and inspection services. The platform gives you a single pane of glass to track status,
              centralise documents, automate reminders and produce defensible, inspection-ready reports — so your
              compliance program is transparent, auditable and operational.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-orange-500 mt-1" />
                <span>Track compliance status in real-time</span>
              </li>

              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-orange-500 mt-1" />
                <span>Maintain digital records of registers and forms</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1" />
                <span>Receive automated alerts for upcoming deadlines</span>
              </li>

              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-orange-500 mt-1" />
                <span>Centralise documents across locations</span>
              </li>

              <li className="flex items-start gap-3">
                <Search className="w-5 h-5 text-orange-500 mt-1" />
                <span>Generate audit reports and compliance checklists instantly</span>
              </li>
            </ul>

            <p className="text-gray-600 mt-6 max-w-lg">
              With technology on your side, your compliance ecosystem becomes more organised, proactive and inspection-ready—always.
            </p>
          </div>

          {/* RIGHT: Image column */}
          <div className="flex items-stretch">
            <div className="w-full rounded-lg overflow-hidden bg-white flex">
              <Image
                src="/services/technology-compliance.webp"
                alt="Compliance software dashboard"
                width={900}
                height={600}
                priority
                className="object-cover w-full h-auto md:h-full"
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
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{reason}</h3>
                      <p className="mt-2 text-sm text-gray-600 text-justify">{microCopy}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — updated copy */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-6 lg:px-8">
          <div className="rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 text-slate-700 leading-tight">
              Let’s Simplify Your Compliance Journey
            </h2>

            <p className="mx-auto max-w-7xl text-gray-600 text-base sm:text-lg leading-relaxed mb-4 text-justify">
              Labour law compliance doesn’t have to be overwhelming. With Praans Consultech,
              you receive strategic support, smart software, and a dedicated team that ensures
              every requirement is met accurately and on time.
            </p>

            <p className="mx-auto max-w-6xl text-gray-600 text-base sm:text-lg leading-relaxed mb-10 text-justify">
              Let us help you transform your compliance process into a strength, not a stress.
              Book your free consultation to explore our labour law compliance outsourcing solutions.
            </p>

            <div className="flex justify-center gap-5 sm:gap-6 flex-wrap">
              <Link
                href="tel:+91-9050576838"
                aria-label="Call Praans Consultech"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-orange-500 bg-orange-50 text-orange-500 text-lg font-bold
                         hover:bg-transparent hover:text-orange-500
                         hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)]
                         transition duration-200 cursor-pointer"
              >
                <span>Book Consultation</span>
              </Link>

              <Link
                href="mailto:info@praansconsultech.com"
                aria-label="Email Praans Consultech"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-orange-500 bg-transparent text-orange-500 text-lg font-bold
                         hover:bg-orange-50 hover:text-orange-500 hover:border-orange-500
                         hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)]
                         transition duration-200 cursor-pointer"
              >
                <span>Request a Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile micro-CTA (non-intrusive) */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <Link href="tel:+91-9582200771" aria-label="Quick consult" >
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-md flex items-center gap-2"
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

