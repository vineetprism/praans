'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  CheckCircle,
  Shield,
  Cpu,
  Users,
  FileText,
  Phone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const PlayIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    aria-label="Play icon"
    role="img"
  >
    <path d="M8 5v14l11-7z"></path>
  </svg>
);
const MinusIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    aria-label="Minus icon"
    role="img"
  >
    <rect x="5" y="11" width="14" height="2" rx="1"></rect>
  </svg>
);

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        aria-label="Toggle FAQ"
        className="
            w-full flex items-start justify-start gap-3
            rounded-2xl bg-[#f47b20] px-5 py-3
            text-[14px] sm:text-[15px] font-medium text-white shadow-sm
            cursor-pointer text-left focus:outline-none
          "
      >
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/20">
          {isOpen ? <MinusIcon /> : <PlayIcon />}
        </span>

        <span className="text-white text-left flex-1 break-words leading-6">
          {q}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
        <div className="overflow-hidden">
          <div className="bg-white px-6 py-4">
            <p className="text-[15px] leading-7 text-slate-800 font-medium">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const serviceIcons = [Shield, FileText, Users, CheckCircle, Cpu];
const ourServices = [
  {
    title: "Expert Advice",
    description: "To resolve the dispute effectively get specialised knowledge.",
    icon: serviceIcons[2], // Users — human experts / advisors
  },
  {
    title: "Less Risk",
    description: "To mitigate any kind of problem with reputation and finance.",
    icon: serviceIcons[0], // Shield — protection / risk mitigation
  },
  {
    title: "Faster Solutions",
    description: "We can get things resolved quicker, whether through talking it out, mediation, or going to court.",
    icon: serviceIcons[4], // Cpu — speed, efficiency, process automation
  },
  {
    title: "Stay Compliant",
    description: "Regular audits and advice make sure you're following the rules.",
    icon: serviceIcons[1], // FileText — paperwork, records, compliance
  },
  {
    title: "Better Workplace",
    description: "Helps build trust and confidence by handling things fairly and quickly.",
    icon: serviceIcons[2], // Users — people, culture, trust (reused)
  },
  {
    title: "Real-Time Tracking",
    description: "To get the timely update and so that you won’t miss any deadlines or do any mistakes.",
    icon: serviceIcons[3], // CheckCircle — status, completed tasks, tracking ticks
  },
];

const faqs = [
  {
    q: "What does ‘Labour Law Support’ mean?",
    a: "Expert assistance to handle employment-related legal matters — from compliance and documentation to dispute resolution and representation.",
  },
  {
    q: "Why is labour law support important?",
    a: "It keeps your business legally compliant, reduces financial and reputational risk, and prevents avoidable penalties or litigation.",
  },
  {
    q: "What kinds of disputes do you handle?",
    a: "Termination and wrongful dismissal, wage and hour claims, discrimination and harassment, employment contract disputes, and union/collective bargaining issues.",
  },
  {
    q: "How do you help resolve disputes?",
    a: "We provide legal representation, negotiate settlements, manage mediation/arbitration, and litigate when necessary — always aligned to business objectives.",
  },
  {
    q: "Who can benefit from this service?",
    a: "Any organisation — startups, SMEs, and large enterprises — that wants to manage employee risk and stay compliant.",
  },
  {
    q: "How should we prepare for inspections or notices?",
    a: "Maintain accurate records, implement clear HR policies, and keep registers and statutory filings current and accessible.",
  },
  {
    q: "What happens if I don’t follow the law?",
    a: "You risk fines, prosecution, enforcement actions, and damage to your company’s reputation and operations.",
  },
  {
    q: "Why is paperwork so important?",
    a: "Documentation is evidence of compliance — it proves procedures were followed and reduces exposure in disputes or inspections.",
  },
  {
    q: "Can labour law support stop problems from escalating?",
    a: "Yes. Early intervention, proper documentation, and targeted negotiations often prevent issues from turning into major litigation.",
  },
  {
    q: "Do you handle employee complaints?",
    a: "Yes. We investigate, mediate, and implement fair resolutions while ensuring legal protections for the company and employees.",
  },
  {
    q: "How does ongoing legal advice help my business?",
    a: "Continuous advice keeps you informed of regulatory changes, reduces audit risk, and enables proactive compliance decisions.",
  },
  {
    q: "Why provide on-site support during inspections?",
    a: "On-site experts guide your team, liaise with authorities, and ensure the inspection proceeds with minimal disruption and risk.",
  },
  {
    q: "Is this service expensive?",
    a: "Costs vary by scope; however, targeted support and prevention typically save more than they cost by avoiding penalties and litigation.",
  },
  {
    q: "How long do disputes usually take to resolve?",
    a: "Timelines depend on complexity and chosen process — simple matters can close in weeks; complex litigation may take months or longer.",
  },
  {
    q: "Can you help with union negotiations?",
    a: "Yes. We support collective bargaining, represent management, and help craft legally sound, commercially viable agreements.",
  },
  {
    q: "How does your case-tracking software help?",
    a: "It provides real-time status updates, tracks deadlines and documents, and centralises case information so you never miss critical actions.",
  },
];


export default function LitigationSupport() {

  const [openIndex, setOpenIndex] = useState<number | null>();
  const toggle = (idx: number) => setOpenIndex((p) => (p === idx ? null : idx));

  const mid = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, mid);
  const col2 = faqs.slice(mid);

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="py-8 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:gap-0 items-stretch">
            {/* LEFT: Text content */}
            <div className="flex flex-col justify-center pr-0 lg:pr-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="inline-block bg-orange-50 text-orange-500 font-semibold text-sm px-3 py-1 rounded-full">
                  Labour Law Litigation Support Services
                </span>
              </div>

              <h1 className="text-[24px] font-extrabold leading-tight text-[#1C284F]">
                Labour Law Litigation Support Services – PAN India
              </h1>

              <div className="mt-4 text-[15px] text-slate-700 text-justify">
                <p className="mb-4">
                  Dealing with labour law stuff is just a part of running a business, plain and simple. Even when you've
                  got a great HR setup, there's always a chance something might go sideways. Maybe it's about pay,
                  getting fired, benefits, or what's happening at work. When those things come up, you want solid
                  support to make sure you're doing things right. That means staying on the right side of the law,
                  protecting you, and being ready for anything that comes up with labour authorities or in court.
                </p>
                <p className="mb-4">
                  Having good labour law help gives businesses a leg up. It means getting professional advice, smart
                  solutions, and hands-on help to sort out any legal issues that pop up with employees. Whether it's
                  about wages, being fired unfairly, problems at work, or inspections, having experts in your corner
                  means you can handle whatever comes your way. You'll be ready to face it head on.
                </p>
              </div>

              <div className="mt-8 mb-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact-us" aria-label="Book free consultation">
                  <Button
                    size="lg"
                    className="px-6 py-3 sm:py-4 md:py-4 lg:py-6 rounded-lg border border-orange-500 bg-orange-50 text-orange-500 text-lg hover:bg-transparent hover:text-gray-800 font-bold hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)] transition duration-200 cursor-pointer w-full sm:w-auto"
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
              <div className="w-full rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white flex h-full">
                <Image
                  src="/services/litigation.webp"
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

      {/* What is Litigation Readiness / Dispute Resolution */}
      <section className="py-12 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            <article className="relative rounded-lg p-6 bg-blue-50 border border-blue-100 shadow-sm overflow-hidden flex flex-col h-full" aria-labelledby="readiness-title">
              <div className="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-tr-md rounded-br-md" aria-hidden="true" />
              <div className="ml-4 flex-1">
                <h2 id="readiness-title" className="text-[30px] font-bold mb-2 text-[#1C284F]">How Praans Consultech can help?</h2>
                <p className="text-slate-700 mb-5 text-[15px]">
                  Praans Consultech offers full-service support for labour law issues. We're there to help businesses
                  every step of the way. Here's what we do:
                </p>

                <dl className="space-y-3 text-slate-700 text-[15px]">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Paperwork Help</dt>
                      <dd className="text-sm">We help you get all your records organized and checked so you have the right proof for any legal stuff.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Before Things Go to Court</dt>
                      <dd className="text-sm"> We look at the risks, suggest fixes, and explore ways to solve problems without going to court first.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Help with Inspections</dt>
                      <dd className="text-sm">We'll be there during inspections, talk to the authorities for you, and make sure you've got all the right paperwork in order</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Timely Report</dt>
                      <dd className="text-sm">Any legal change will be will timely informed to you and we will give you all the advice so that you can avoid any problem.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Software for timely case tracking</dt>
                      <dd className="text-sm">We track everything from what is status of case, court
                        dates, and all the documents by this software in real-time. So that you don’t miss anything
                        and make a smart choice.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Expert Advice</dt>
                      <dd className="text-sm">You get to talk to pros that know their stuff and can give you solid advice and
                        represent you when things get tough.</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </article>

            <article className="relative rounded-lg p-6 bg-orange-50 border border-orange-100 shadow-sm overflow-hidden flex flex-col h-full" aria-labelledby="dispute-title">
              <div className="absolute inset-y-0 left-0 w-1 bg-orange-400 rounded-tr-md rounded-br-md" aria-hidden="true" />
              <div className="ml-4 flex-1">
                <h2 id="dispute-title" className="text-2xl font-semibold mb-2 text-slate-800">How We Work to Help You?</h2>
                <p className="text-slate-700 mb-5">
                  The practical toolkit — mediation, arbitration, settlement negotiation and litigation — we deploy to resolve disputes while preserving commercial value.
                </p>

                <dl className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Figure Out what’s happening</dt>
                      <dd className="text-sm">We look at the problem, read the notices, and gather the facts.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Get the Documents</dt>
                      <dd className="text-sm">We collect all documents of the register, emails or letter and employees record.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">File and write-up</dt>
                      <dd className="text-sm">We prepare all the affidavits, the responses, or any other paperwork that's needed in the right format.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Coordination and Work with Your Lawyer</dt>
                      <dd className="text-sm"> We aid and help you and your legal team during hearings.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Follow Up and keep tabs</dt>
                      <dd className="text-sm"> We track the records, how things are going, keep records, and report that to you.</dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Wrap Things Up and File</dt>
                      <dd className="text-sm">We help with the final settlement or order, and then figure out what you need to do to fix things.</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-14 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[30px] font-bold text-[#1C284F]">Labour Law Support provides you with</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ourServices.map((service, idx) => {
              const Icon = serviceIcons[idx % serviceIcons.length] || FileText
              return (
                <Card key={idx} className="px-4 py-2 border border-orange-100 shadow-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-md flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#eb8535]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-md text-[#1C284F]">{service.title}</h3>
                      <p className="mt-1 text-sm text-gray-600 text-justify">{service.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Faq */}
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-8">
        <h1 className="text-center text-[30px] font-bold text-[#1C284F]">
          Frequently Asked Questions
        </h1>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {col1?.map((item, idx) => {
              const index = idx;
              return (
                <FaqItem
                  key={`l-${idx}`}
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === index}
                  onToggle={() => toggle(index)}
                />
              );
            })}
          </div>

          <div className="space-y-4">
            {col2?.map((item, idx) => {
              const index = mid + idx;
              return (
                <FaqItem
                  key={`r-${idx}`}
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === index}
                  onToggle={() => toggle(index)}
                />
              );
            })}
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
