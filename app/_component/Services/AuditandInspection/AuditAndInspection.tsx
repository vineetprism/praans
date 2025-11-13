"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle,
  Shield,
  Cpu,
  Users,
  FileText,
  Search,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const whyReadinessMatters = [
  {
    icon: Shield,
    title: "Avoid Legal Penalties",
    description:
      "Non-compliance can attract financial penalties, suspension of licenses, and even prosecution. Regular audits help identify and rectify gaps before inspections happen.",
  },
  {
    icon: Users,
    title: "Build Trust with Authorities",
    description:
      "A business that maintains proper documentation and follows labour laws diligently earns the trust of regulators, leading to smoother inspections and fewer disruptions.",
  },
  {
    icon: FileText,
    title: "Ensure Operational Continuity",
    description:
      "Audit readiness minimizes the risk of sudden compliance issues that can halt business operations or trigger legal proceedings.",
  },
  {
    icon: CheckCircle,
    title: "Protect Your Reputation",
    description:
      "Timely compliance and transparency not only keep you legally safe but also enhance your reputation with employees, partners, and stakeholders.",
  },
];

const ourServices = [
  {
    title: "Pre-Audit Review",
    description:
      "We conduct a complete internal review to identify potential compliance gaps and risks in your current processes and documentation.",
  },
  {
    title: "Statutory Documentation Management",
    description:
      "Our team ensures all mandatory registers, forms, returns, and filings are properly maintained and updated as per the latest legal norms.",
  },
  {
    title: "On-Site Inspection Support",
    description:
      "We offer on-ground assistance during government inspections. Our experts liaise with visiting officials, provide required documents, and support your internal team in addressing queries professionally.",
  },
  {
    title: "Post-Inspection Compliance",
    description:
      "If any issues are highlighted during an inspection, we assist with corrective actions, response letters, filing backdated forms, and implementing long-term solutions.",
  },
  {
    title: "Ongoing Advisory",
    description:
      "We don’t just offer one-time services. Our team provides continuous guidance to ensure you're always in alignment with legal updates and ready for any inspection.",
  },
];

const icons = [Shield, Users, Cpu, FileText, CheckCircle];

const whyChooseUs = [
  "15+ Years of Labour Law Expertise",
  "Skilled Legal & Field Team for On-Site Support",
  "Real-Time Tracking Through Smart Software",
  "Tailored Solutions Based on Your Operations",
  "End-to-End Service—From Pre-Audit to Closure Reports",
];

const serviceIcons = [Shield, FileText, Users, CheckCircle, Cpu];

export default function AuditAndInspection() {
  return (
    <div className="bg-white text-slate-900">
      <section className="py-8 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:gap-0 items-stretch">
            <div className="flex flex-col justify-center pr-0 lg:pr-8 self-stretch">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="inline-block bg-orange-50 text-orange-500 font-semibold text-sm px-3 py-1 rounded-full">
                  Labour Law Audit & Inspection Services
                </span>
              </div>

              <h1 className="text-[24px] font-extrabold leading-tight text-[#1C284F]">
                Stay Compliant. Stay Prepared. Stay Confident.
              </h1>

              <div className="mt-4 text-[15px] text-slate-700 text-justify">
                <p className="mb-4">
                  In the dynamic world of regulatory compliance, labour law
                  audits and inspections are more than procedural—they are
                  essential to protecting your organization from penalties,
                  disputes, and reputational risks. Whether it's a routine
                  inspection by a labour department officer or an internal
                  compliance audit, being prepared is non-negotiable.
                </p>
                <p className="mb-4">
                  Praans Consultech empowers businesses to confidently manage
                  the complexities of labour law audits and inspections. From
                  documentation review to real-time inspection support, our
                  expert team ensures that every aspect of your statutory
                  compliance is accurate, complete, and ready for review.
                </p>
              </div>

              <div className="mt-8 mb-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact-us" aria-label="Book free consultation">
                  <Button
                    size="lg"
                    className="px-6 py-3 sm:py-4 md:py-4 lg:py-6 rounded-lg border border-orange-500 bg-white text-orange-500 text-lg hover:bg-transparent hover:text-gray-800 font-bold hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)] transition duration-200 cursor-pointer w-full sm:w-auto"
                    aria-label="Book free consultation"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Book Free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT: Image column */}
            <div className="flex items-stretch self-stretch">
              <div className="w-full rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white flex h-full">
                <Image
                  src="/services/labour-law.webp"
                  alt="Labour law advisory"
                  width={900}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is an Audit / Inspection */}
      <section className="py-12 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 items-stretch">
            <article
              className="relative rounded-lg p-6 bg-blue-50 border border-blue-100 shadow-sm overflow-hidden flex flex-col h-full"
              aria-labelledby="audit-title"
            >
              <div
                className="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-tr-md rounded-br-md"
                aria-hidden="true"
              />

              <div className="ml-4 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-white/60 text-blue-700 border border-blue-100">
                    Audit Overview
                  </span>
                </div>

                <h2
                  id="audit-title"
                  className="text-[30px] font-bold mb-2 text-[#1C284F]"
                >
                  What is a Labour Law Audit?
                </h2>

                <p className="text-slate-700 mb-5 text-justify text-[15px]">
                  A labour law audit is a detailed examination of your company’s
                  statutory records, processes, and practices to ensure
                  compliance with central and state-specific labour regulations.
                  These audits are often part of internal control systems or
                  preemptive measures to avoid penalties and legal actions.
                </p>

                <p className="text-slate-700 mb-4 font-medium text-[15px]">
                  During an audit, the focus areas typically include:
                </p>

                <dl className="space-y-3 text-slate-700 text-[15px]">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-4 h-4 text-green-500 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-semibold">
                        Registers & Documentation
                      </dt>
                      <dd className="text-sm">
                        Mandatory registers, forms, returns and records
                        maintained and updated.
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-4 h-4 text-green-500 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-medium">
                        Provident Fund (PF) & ESI records
                      </dt>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-medium">
                        Wages, attendance & contractor documentation
                      </dt>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-medium">
                        License validity & renewals
                      </dt>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-medium">
                        Bonus, gratuity & leave records
                      </dt>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-medium">
                        Employment agreements & applicable Acts
                      </dt>
                    </div>
                  </div>
                </dl>
                <p className="text-slate-700 mt-4">
                  Audits can be conducted internally or initiated by an external
                  agency to assess the legal standing of your organization’s HR
                  and labour practices.
                </p>
              </div>
            </article>

            <article
              className="relative rounded-lg p-6 bg-orange-50 border border-orange-100 shadow-sm overflow-hidden flex flex-col h-full"
              aria-labelledby="inspection-title"
            >
              <div
                className="absolute inset-y-0 left-0 w-1 bg-orange-400 rounded-tr-md rounded-br-md"
                aria-hidden="true"
              />

              <div className="ml-4 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-white/60 text-orange-500 border border-orange-100">
                    Inspection Essentials
                  </span>
                </div>

                <h2
                  id="inspection-title"
                  className="text-2xl font-semibold mb-2 text-slate-800"
                >
                  Understanding Labour Law Inspections
                </h2>

                <p className="text-slate-700 mb-4 text-justify">
                  A labour law inspection is a physical verification of
                  compliance conducted by government-authorized officials. It
                  can be a scheduled inspection, a surprise visit, or triggered
                  by an employee complaint or whistleblower action.
                </p>

                <p className="text-slate-700 mb-4 font-medium">
                  Inspectors may visit your premises to check for:
                </p>

                <dl className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-medium">
                        Maintenance of statutory records
                      </dt>
                      {/* <dd className="text-sm">Registers, returns and filing evidence must be complete and up to date.</dd> */}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-medium">
                        Proper display of mandatory notices & signage
                      </dt>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-medium">
                        Validity of labour licences
                      </dt>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-medium">
                        Payments & deductions (PF / ESIC)
                      </dt>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-medium">
                        Working conditions & employee rights
                      </dt>
                    </div>
                  </div>
                </dl>

                <p className="text-slate-700 mt-4">
                  An inspection may lead to penalties or legal notices if
                  violations or irregularities are found. That’s why it's
                  essential to be well-prepared at all times.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Why Audit & Inspection Readiness Matters */}
      <section className="py-12 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">
              Why Audit & Inspection Readiness Matters
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {whyReadinessMatters.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-lg shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-offset-2 bg-white"
                tabIndex={0}
                role="button"
                aria-pressed="false"
              >
                <div className="surface relative border rounded-md border-orange-100 shadow-md h-full">
                  <div className="relative z-10 p-5 flex flex-col items-start text-left">
                    <h3 className="flex items-center gap-2 font-semibold text-md text-[#1C284F] mb-2">
                      <item.icon
                        className="w-4 h-4 shrink-0 text-[#eb8535]"
                        aria-hidden="true"
                      />
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-0 ml-6">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-14 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full mx-auto text-center mb-10">
            <h2 className="text-[30px] font-bold text-[#1C284F]">
              Our Audit & Inspection Services
            </h2>
            <p className="mt-3 text-gray-600 text-[15px]">
              At Praans Consultech, we offer comprehensive audit and inspection
              support to help you stay prepared, minimize risks, and ensure full
              compliance with labour laws.
            </p>
            <p className="mt-1 text-gray-600 text-[15px]">
              We don’t just offer one-time services. Our team provides
              continuous guidance to ensure you're always in alignment with
              legal updates and ready for any inspection.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ourServices.map((service, idx) => {
              const Icon = serviceIcons[idx % serviceIcons.length] || FileText;
              return (
                <Card key={idx} className="p-4 border border-orange-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center">
                      <Icon className="w-4 h-4 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#1C284F]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 text-justify">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Heading + subheading centered */}
          <div className="max-w-8xl mx-auto text-center mb-8">
            <h2 className="text-[30px] font-bold text-[#1C284F] mb-3">
              Technology-Enabled Compliance
            </h2>

            <p className="text-gray-600 text-[15px] leading-relaxed">
              With technology on your side, your compliance ecosystem becomes
              more transparent, organized, and inspection-ready—always.
            </p>

            <p className="text-gray-600 text-[15px] leading-relaxed">
              To enhance accuracy and efficiency, we also integrate our
              AI-powered compliance management software with our audit and
              inspection services. It helps you:
            </p>
          </div>

          {/* Points split into two columns on md+ */}
          <div className="max-w-5xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-600 text-[15px]">
              <li className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span>Track compliance status in real-time</span>
              </li>

              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span>Maintain digital records of registers and forms</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span>Receive automated alerts for upcoming deadlines</span>
              </li>

              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span>Centralise documents across locations</span>
              </li>

              <li className="flex items-start gap-3">
                <Search className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span>
                  Generate audit reports and compliance checklists instantly
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[30px] font-bold text-[#1C284F]">
              Why Choose Praans Consultech?
            </h2>
            <p className="text-gray-600 mt-2 text-[15px]">
              Smart compliance starts with a partner who gets operations and
              law.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason, idx) => {
              const Icon = icons[idx] ?? CheckCircle; // fallback icon

              return (
                <div
                  key={idx}
                  className="relative bg-white border border-orange-100 shadow-sm rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-orange-200 h-full"
                  role="article"
                  aria-label={`Reason ${idx + 1} - ${reason}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-md flex items-center justify-center">
                      <Icon className="w-4 h-4 text-orange-500" />
                    </div>

                    <div>
                      <h3 className="text-md font-semibold text-[#1C284F]">
                        {reason}
                      </h3>
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
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg p-4 sm:p-6 text-center">
            <h2 className="text-[30px] font-bold mb-4 leading-tight text-[#1C284F]">
              Stay Ahead of Every Inspection
            </h2>

            {/* Centered paragraphs with sensible max width and spacing */}
            <div className="mx-auto w-full space-y-2">
              <p className="text-slate-700 text-[15px] leading-7">
                Labour law inspections are becoming increasingly structured,
                tech-driven, and penalty-focused. Being audit-ready is not
                optional — it's essential.
              </p>

              <p className="text-slate-700 text-[15px] leading-7">
                With Praans Consultech, you gain the assurance of compliance,
                the confidence to face inspections, and the backing of a team
                that handles the legal complexities for you.
              </p>

              <p className="text-slate-700 text-[15px] leading-7">
                Book your free consultation today to discover how our labour law
                audit and inspection services can protect your business and
                streamline your operations.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link
                href="tel:+91-9050576838"
                aria-label="Call Praans Consultech"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-orange-500 bg-orange-50 text-orange-500 text-lg font-bold
                     hover:bg-transparent hover:text-orange-500 transition duration-200"
              >
                Book Consultation
              </Link>

              <Link
                href="mailto:info@praansconsultech.com"
                aria-label="Email Praans Consultech"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-orange-500 bg-transparent text-orange-500 text-lg font-bold
                     hover:bg-orange-50 hover:text-orange-500 transition duration-200"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile micro-CTA (non-intrusive) */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <Link href="tel:+91-9582200771" aria-label="Quick consult">
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
  );
}
