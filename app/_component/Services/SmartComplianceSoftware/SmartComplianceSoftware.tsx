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
    title: "Reduce Financial Exposure",
    description:
      "Early case assessment and defensive preparedness limit fines, awards and surprise liabilities during dispute escalation.",
  },
  {
    icon: Users,
    title: "Protect Reputation & Relationships",
    description:
      "Strategic dispute handling and controlled communications preserve trust with customers, partners and regulators.",
  },
  {
    icon: FileText,
    title: "Preserve Critical Evidence",
    description:
      "Robust evidence retention, chain-of-custody and e-discovery practices ensure admissible, defensible records when it matters.",
  },
  {
    icon: CheckCircle,
    title: "Resolve Faster, Smarter",
    description:
      "Focused negotiation, mediation and targeted enforcement reduce drag on operations and free leadership to focus on growth.",
  },
]

const ourServices = [
  {
    title: "Pre-Litigation Assessment",
    description:
      "Quick risk triage, exposure quantification and an early resolution playbook to avoid or narrow litigation.",
  },
  {
    title: "E-Discovery & Evidence Management",
    description:
      "Secure collection, processing and review of emails, documents and digital assets with defensible audit trails.",
  },
  {
    title: "Case Strategy & Litigation Planning",
    description:
      "Commercially-minded case roadmaps, witness preparation and budgeted timelines aligned to business objectives.",
  },
  {
    title: "Arbitration & Court Representation",
    description:
      "Experienced advocates in arbitration panels and courts — courtroom-ready pleadings and forceful oral advocacy.",
  },
  {
    title: "Mediation & Settlement Negotiation",
    description:
      "Value-preserving negotiation to resolve disputes pragmatically while protecting commercial interests.",
  },
  {
    title: "Enforcement & Recovery",
    description:
      "Execution of judgments, injunctions, asset tracing and recovery actions to close the loop on dispute outcomes.",
  },
]

/* Icons array used in the 'Why Choose Us' grid.
   If you prefer a gavel icon, import it and replace an entry here. */
const icons = [Shield, Users, Cpu, FileText, CheckCircle /* , Gavel */]

const whyChooseUs = [
  "Specialist Litigation & Dispute-Resolution Team",
  "Senior Counsel with Industry-Savvy Case Strategy",
  "Tech-Enabled eDiscovery & CaseOps Platform",
  "Flexible fee models — fixed, cap, or outcome-linked",
  "End-to-end service from triage to recovery",
]

const serviceIcons = [Shield, FileText, Users, CheckCircle, Cpu]

export default function SmartComplianceSupport() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="inline-block bg-orange-50 text-[#eb8535] font-semibold text-sm px-3 py-1 rounded-full">
                  Litigation Support & Dispute Resolution
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Strategic Litigation Support for Business-Critical Disputes
              </h1>

              <p className="mt-4 text-lg text-slate-700 max-w-xl">
                When disputes threaten operations or reputation, you need counsel that moves fast and thinks long-term. We combine seasoned
                litigators, pragmatic commercial strategy and a tech-driven caseops stack to protect value and deliver measurable outcomes.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-slate-800 border border-slate-100">
                  <FileText className="w-4 h-4 text-[#eb8535]" />
                  Evidence & eDiscovery
                </span>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-slate-800 border border-slate-100">
                  <Shield className="w-4 h-4 text-[#eb8535]" />
                  Rapid Case Triage
                </span>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-slate-800 border border-slate-100">
                  <Users className="w-4 h-4 text-[#eb8535]" />
                  On-ground & Counsel Support
                </span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="tel:+91-9582200771" aria-label="Call disputes team">
                  <Button
                    size="lg"
                    className="px-6 py-3 sm:py-4 md:py-4 lg:py-6 rounded-lg border border-tertiary bg-[#eb8535] text-white text-lg hover:bg-transparent hover:text-gray-800 font-bold hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)] transition duration-200 cursor-pointer w-full sm:w-auto"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Disputes Team
                  </Button>
                </Link>

                <Link href="/contact" aria-label="Request litigation consultation">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="px-6 py-3 sm:py-4 md:py-4 lg:py-6 rounded-lg border border-[#eb8535] bg-transparent text-[#eb8535] text-lg hover:bg-[#eb8535] hover:text-white hover:border-white font-bold hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)] transition duration-200 cursor-pointer w-full sm:w-auto"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Request Consultation
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-sm text-gray-500 max-w-md">
                Fast intake, defensible evidence, decisive outcomes — litigation support built for operational leaders.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white">
                <Image
                  src="/services/labour-law.jpg"
                  alt="Litigation support"
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

      {/* What is Litigation Readiness / Dispute Resolution */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            <article className="relative rounded-lg p-6 bg-blue-50 border border-blue-100 shadow-sm overflow-hidden flex flex-col h-full" aria-labelledby="readiness-title">
              <div className="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-tr-md rounded-br-md" aria-hidden="true" />
              <div className="ml-4 flex-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-white/60 text-blue-700 border border-blue-100 mb-3">Litigation Readiness</span>
                <h2 id="readiness-title" className="text-2xl font-semibold mb-2 text-slate-800">What is Litigation Readiness?</h2>
                <p className="text-slate-700 mb-5">
                  A structured program to preserve evidence, document decision trails and ensure your team can respond to subpoenas, notices or complaints with confidence.
                </p>

                <dl className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Evidence preservation</dt>
                      <dd className="text-sm">Hold processes, defensible data collection and secure storage for emails, logs and documents.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Legal playbooks</dt>
                      <dd className="text-sm">Prebuilt response templates for notices, injunctions and regulator queries to reduce time-to-response.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Stakeholder coordination</dt>
                      <dd className="text-sm">Internal and external role clarity so counsel, ops and comms act in sync during escalation.</dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="mt-6 pt-4">
                <a href="/services#litigation" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline" aria-label="Learn more about litigation readiness">
                  Learn about Litigation Readiness
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            <article className="relative rounded-lg p-6 bg-orange-50 border border-orange-100 shadow-sm overflow-hidden flex flex-col h-full" aria-labelledby="dispute-title">
              <div className="absolute inset-y-0 left-0 w-1 bg-orange-400 rounded-tr-md rounded-br-md" aria-hidden="true" />
              <div className="ml-4 flex-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-white/60 text-[#eb8535] border border-orange-100 mb-3">Dispute Resolution</span>
                <h2 id="dispute-title" className="text-2xl font-semibold mb-2 text-slate-800">What is Dispute Resolution?</h2>
                <p className="text-slate-700 mb-5">
                  The practical toolkit — mediation, arbitration, settlement negotiation and litigation — we deploy to resolve disputes while preserving commercial value.
                </p>

                <dl className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Mediation & settlement</dt>
                      <dd className="text-sm">Structured negotiation to protect commercial relationships and cashflow.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Arbitration & court advocacy</dt>
                      <dd className="text-sm">Dispute advocacy aligned to the forum that best serves the client’s outcomes and timelines.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-medium">Enforcement & recovery</dt>
                      <dd className="text-sm">Post-judgment execution, asset tracing and recovery actions to realize awards.</dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="mt-6 pt-4">
                <a href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#eb8535] hover:underline" aria-label="Request on-site inspection support">
                  Request Dispute Support
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
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Why Litigation Readiness Matters</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Proactive dispute readiness saves time, reduces spend and protects business continuity when disputes arise.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyReadinessMatters.map((item, idx) => (
              <div key={idx} className="group relative rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-offset-2" tabIndex={0} role="button" aria-pressed="false">
                <div className="surface relative border rounded-md border-orange-100 shadow-md">
                  <div className="relative z-10 p-5 flex flex-col items-center text-center min-h-[220px]">
                    <div className="w-14 h-14 mb-3 rounded-full flex items-center justify-center bg-white border border-orange-100 transition-colors duration-200" aria-hidden="true">
                      <item.icon className="w-6 h-6 text-[#eb8535] group-hover:text-white transition-colors duration-200" />
                    </div>

                    <h3 className="font-semibold text-lg group-hover:text-white transition-colors duration-200">{item.title}</h3>

                    <p className="mt-2 text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .surface::before {
            content: "";
            position: absolute;
            inset: 0;
            background-color: #eb8535;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 320ms;
            z-index: 0;
          }

          .group:hover .surface::before,
          .group:focus-within .surface::before,
          .group:focus .surface::before {
            transform: scaleX(1);
            box-shadow: 0 12px 30px rgba(235, 133, 53, 0.12);
          }

          .surface > .relative {
            z-index: 10;
          }

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
            background-color: rgba(255, 255, 255, 0.08) !important;
          }
        `}</style>
      </section>

      {/* Our Services */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold">Our Litigation Services</h2>
            <p className="mt-3 text-gray-600">
              End-to-end litigation and dispute services—designed to protect value and deliver clear outcomes.
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
            <h2 className="text-3xl font-bold mb-4">Tech-Enabled Case Management</h2>
            <p className="text-gray-200 mb-6">
              Use secure evidence vaults, eDiscovery tooling and case dashboards to make litigation leaner, faster and more transparent.
            </p>

            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-orange-400" />
                <span>eDiscovery & defensible collections</span>
              </li>
              <li className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-orange-400" />
                <span>Secure evidence vault & chain-of-custody</span>
              </li>
              <li className="flex items-center gap-3">
                <Search className="w-5 h-5 text-orange-400" />
                <span>Live case dashboards & outcome tracking</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-lg overflow-hidden bg-white">
              <Image
                src="/services/technology-compliance.jpg"
                alt="eDiscovery and case dashboard"
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
            <h2 className="text-3xl font-bold">Why Choose Our Disputes Team?</h2>
            <p className="text-gray-600 mt-2">A commercial-first approach to litigation with measurable KPIs and clear governance.</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason, idx) => {
              const Icon = icons[idx] ?? CheckCircle;
              const microCopy = [
                "Dedicated litigators and dispute partners with industry experience.",
                "Senior counsel supported by field teams for on-ground evidence collection.",
                "Integrated caseops platform for faster review and smarter decisions.",
                "Flexible engagement models to align fees and incentives to outcomes.",
                "Holistic service from intake to enforcement and recovery.",
              ][idx] ?? "Trusted, enterprise-grade litigation support.";

              return (
                <div key={idx} className="relative bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-orange-200" role="article" aria-label={`Reason ${idx + 1} - ${reason}`}>
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

      {/* CTA / Contact */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="bg-[#2a3154] text-white rounded-lg p-10 shadow-lg text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Triage Your Dispute?</h2>
              <p className="max-w-3xl mx-auto text-gray-300 mb-8">
                Fast intake, defensible evidence handling and senior counsel where it matters. Book a rapid case assessment today.
              </p>

              <div className="flex justify-center gap-6 flex-wrap">
                <Link href="tel:+91-9876543210" aria-label="Call disputes intake" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-tertiary bg-[#eb8535] text-white text-lg hover:bg-transparent hover:text-[#eb8535] font-bold hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)] transition duration-200 cursor-pointer">
                  <span>Book Consultation</span>
                </Link>

                <Link href="mailto:sales@abc.com" aria-label="Email disputes intake" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white bg-transparent text-[#eb8535] text-lg hover:bg-[#eb8535] hover:text-white hover:border-white font-bold hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)] transition duration-200 cursor-pointer">
                  <span>Request a Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile micro-CTA */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <Link href="tel:+91-9582200771" aria-label="Quick consult">
          <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md flex items-center gap-2" aria-label="Quick consult">
            <Phone className="w-4 h-4" />
            Quick Consult
          </button>
        </Link>
      </div>
    </div>
  )
}
