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
  ShieldCheck,
  Award,
  Globe,
  FilePlus,
  UserCheck,
  CreditCard,
  Heart,
  Factory,
  Truck,
  Banknote,
  Store,
  ClipboardCheck,
  Percent,
  Briefcase,
  Zap,
  Coffee,
  Home,
  ShoppingCart,
  Server,
  PenTool,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaFirstAid } from "react-icons/fa";
import { useState } from "react";

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
        className={`grid transition-[grid-template-rows] duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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

const whyReadinessMatters = [
  {
    icon: ShieldCheck,
    title: "You'll build a better relationship with the labour authorities.",
  },
  {
    icon: Users,
    title: "You'll be protected from penalties.",
  },
  {
    icon: FileText,
    title:
      "Your company's reputation will get a boost, and clients will trust you more.",
  },
  {
    icon: Award,
    title: "You can bid on government projects and expand your business.",
  },
  {
    icon: Globe,
    title: "You'll be legally allowed to operate anywhere in India.",
  },
];

const ourServices = [
  {
    title: "Registration for CLRA for Principal Employer",
    description:
      "We handle end-to-end CLRA principal employer registration — forms, documents and submissions across PAN India.",
    icon: FilePlus,
  },
  {
    title: "Licence for CLRA for Contractor Licence",
    description:
      "Assistance for contractors (over threshold workforce) — registration, principal employer certificate, online applications and renewals.",
    icon: UserCheck,
  },
  {
    title: "Professional Tax Registration",
    description:
      "End-to-end Professional Tax registration and monthly compliance support per state-specific rules.",
    icon: CreditCard,
  },
  {
    title: "Registration for LWF (Labour Welfare Fund)",
    description:
      "Register employers, manage contributions and maintain timely records for Labour Welfare Fund across states.",
    icon: Heart,
  },
  {
    title: "Factory Licence Registration",
    description:
      "Factory licensing: plan approval, inspector coordination and licence procurement for factories (power/no-power thresholds).",
    icon: Factory,
  },
  {
    title: "Registration for Motor Transport Workers",
    description:
      "Registration & renewal support for motor transport workers (drivers, loaders) — logistics, courier and fleet businesses PAN India.",
    icon: Truck,
  },
  {
    title: "Registration for Provident Fund (PF)",
    description:
      "EPF code setup, employee enrolment and full compliance under the Employees’ Provident Fund Act for eligible employers.",
    icon: Banknote,
  },
  {
    title: "Registration for Employee State Insurance (ESI)",
    description:
      "ESI code/sub-code setup and payroll configuration to manage monthly ESI contributions and employee benefits.",
    icon: FaFirstAid,
  },
  {
    title: "Shop & Establishment Registration",
    description:
      "Fast online Shop & Establishment registration, updates and renewals tailored for multi-state operations.",
    icon: Store,
  },
  {
    title: "Trade Licence",
    description:
      "Trade Licence applications and renewals — coordinate with local authorities to ensure compliance and smooth approvals.",
    icon: Award,
  },
  {
    title: "Licence and registration for FSSAI",
    description:
      "FSSAI registration & licensing assistance for food businesses — documentation, application and follow-ups.",
    icon: ClipboardCheck,
  },
  {
    title: "Registration for GST",
    description:
      "PAN India GST registration for eligible businesses and guidance on GST return filing and tax management.",
    icon: Percent,
  },
  {
    title: "MSME (Udyam) Registration",
    description:
      "Udyam registration support to access subsidies, loans, tender eligibility and other MSME benefits.",
    icon: Briefcase,
  },
];

const faqs = [
  {
    q: "What do you mean by Labour law registration?",
    a: "A legal requirement for businesses to register and demonstrate compliance with applicable labour laws and regulations.",
  },
  {
    q: "Who needs CLRA registration?",
    a: "Any business that employs contract workers above the state-specified threshold must register under CLRA.",
  },
  {
    q: "What's the difference between CLRA registration and a CLRA licence?",
    a: "Registration is for the principal employer; the CLRA licence is issued to contractors who engage contract workers.",
  },
  {
    q: "Is PF registration required for all companies?",
    a: "No. EPF registration is mandatory when you have 20 or more employees (subject to statutory thresholds).",
  },
  {
    q: "What's ESI registration?",
    a: "ESI provides medical and health benefits to employees. Employers must register if they meet the ESI employee threshold (varies by state; commonly 10+ workers).",
  },
  {
    q: "What documents are required for Shop & Establishment registration?",
    a: "Common requirements: Aadhar, address proof, PAN, business details, employee list and ID proofs — exact list depends on the state authority.",
  },
  {
    q: "What is the applicability of Professional Tax?",
    a: "Professional Tax applies in most states; applicability and rates differ by state and employee salary slabs.",
  },
  {
    q: "Why do I need a Factory Licence?",
    a: "To ensure worker safety, health and statutory compliance in factories — mandatory when thresholds for number of workers/installed power are met.",
  },
  {
    q: "What do you mean by registration under Labour Welfare Fund?",
    a: "It's employer registration and contribution toward state-level welfare funds that provide social/economic benefits to workers.",
  },
  {
    q: "Does every business need a Trade Licence?",
    a: "If you operate within municipal/city limits (or in specific rural jurisdictions where required), you must obtain a Trade Licence from local authorities.",
  },
  {
    q: "Who needs FSSAI Registration?",
    a: "Any business that manufactures, processes, stores or sells food must obtain FSSAI registration or licence as per turnover and activity.",
  },
  {
    q: "What are the benefits of GST registration?",
    a: "Allows you to collect and remit GST, claim input tax credit and operate legally above the statutory turnover threshold.",
  },
  {
    q: "What happens if I don't register?",
    a: "You risk fines, penalties, prosecution and potential business closure — plus reputational and contractual consequences.",
  },
  {
    q: "Can Praans Consultech help with registrations in multiple states?",
    a: "Yes — we provide PAN-India registration and compliance support across states.",
  },
  {
    q: "How long does registration take?",
    a: "Typically 7–15 business days, depending on the department and how quickly required documents are provided; some licences may take longer.",
  },
];

const icons = [Shield, Users, Cpu, FileText, CheckCircle /* , Gavel */];

const whyChooseUs = [
  "We handle all the renewals and registrations in PAN India.",
  "Our professionals are experts they will know your industry inside and out.",
  "We manage each and everything from talking to authorities to all the paperwork’s.",
  "We have transparent pricing system with no hidden fees.",
  "There will be a dedicated dashboard for your compliance, where you can track and get the reminders for all the compliances.",
  "Our Praans consultech is trusted by big companies as we have worked with clients in retails manufacturing, IT and logistics.",
];

const serviceIcons = [Shield, FileText, Users, CheckCircle, Cpu];

export default function PanIndiaRegistrations() {
  const [openIndex, setOpenIndex] = useState<number | null>();
  const toggle = (idx: number) => setOpenIndex((p) => (p === idx ? null : idx));

  const mid = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, mid);
  const col2 = faqs.slice(mid);
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="py-12 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="inline-block bg-orange-50 text-[#eb8535] font-semibold text-sm px-3 py-1 rounded-full">
                  Labour Law Registrations PAN- India
                </span>
              </div>

              <p className="mt-4 text-[15px] text-slate-700 text-justify">
                Assure complete Compliance with expert labour law registration
                support PAN India. We, Praans Consultech, are here to assist
                your business so that they remain compliant with all the
                regulations and rules. We make things simple, smooth handling of
                the tricky stuff like CLRA registrations, PF, ESI, Professional
                tax, Factory Licenses, Shop & Establishment permits, MSME and
                GST registration. To keep your business on right side of law, we
                are here to assist you.
              </p>

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

            <div className="flex items-center justify-center">
              <div className="w-full rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white">
                <Image
                  src="/services/panindia.webp"
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
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-[30px] font-bold text-[#1C284F]">
              Why is it important to register under labour law?
            </h2>

            <p className="mt-1 text-gray-600 max-w-8xl mx-auto text-[15px]">
              So by doing the registration it means that you and your business
              are doing correct thing, being transparent and while protecting
              your employees. As it will mitigate all the risk and also avoid
              you from paying big fines and remove the entire legal burden in
              our path
            </p>
            <p className="mt-2 text-gray-600 max-w-8xl mx-auto text-[15px]">
              Think of labour law registrations as more than just a bunch of
              paperwork. They are not just legal formality but also the most
              important foundation of ethical employment and statutory
              compliance.
            </p>
          </div>

          <div className="w-full">
            <h2 className="text-[20px] text-center font-semibold text-[#1C284F]">
              Here are the reasons why is it important for us to have timely
              registrations:
            </h2>
            <div className="mt-8  grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyReadinessMatters.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-lg overflow-hidden shadow-sm bg-gray-50 border border-orange-50 px-4 py-2 h-full flex flex-col"
                  tabIndex={0}
                  role="button"
                  aria-pressed="false"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="flex items-center gap-2 font-semibold text-md text-[#1C284F]">
                        <item.icon
                          className="w-4 h-4 shrink-0 text-[#eb8535]"
                          aria-hidden="true"
                        />
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-12 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[30px] font-bold text-[#1C284F]">
              Our Nationwide Labour Law Registration Services
            </h2>
            <p className="mt-3 text-gray-600 text-[15px]">
              At Praans Consultech, we have you covered with registration and
              licensing services all over India. Our service is tailor according
              to your company requirements. We ensure smooth approvals, timely
              renewals and accurate paper works.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ourServices.map((service, idx) => {
              const Icon = serviceIcons[idx % serviceIcons.length] || FileText;
              return (
                <Card
                  key={idx}
                  className="px-4 py-2 border border-orange-50 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-md flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#eb8535]" />
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

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[30px] font-bold text-[#1C284F]">
              Why Praans Consultech should be your first choice?
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason, idx) => {
              const Icon = icons[idx] ?? CheckCircle;

              return (
                <div
                  key={idx}
                  className="relative bg-white border border-orange-50 rounded-lg px-4 py-2 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-orange-200 h-full"
                  role="article"
                  aria-label={`Reason ${idx + 1} - ${reason}`}
                >
                  <div className="flex items-start gap-4 h-full flex-col">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-12 bg-gray-50 text-[#1c2752]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[30px] text-center font-bold mb-6">
              Industries We Serve
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 text-slate-700 text-left">
              <li className="flex items-center gap-3">
                <PenTool className="w-5 h-5 text-orange-400" />
                <span>Engineering & Manufacturing</span>
              </li>

              <li className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-orange-400" />
                <span>Warehousing & Logistics</span>
              </li>

              <li className="flex items-center gap-3">
                <Server className="w-5 h-5 text-orange-400" />
                <span>ITES & IT</span>
              </li>

              <li className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-orange-400" />
                <span>E-commerce & Retail</span>
              </li>

              <li className="flex items-center gap-3">
                <Home className="w-5 h-5 text-orange-400" />
                <span>Real Estate & Construction</span>
              </li>

              <li className="flex items-center gap-3">
                <Coffee className="w-5 h-5 text-orange-400" />
                <span>Hospitality & Food</span>
              </li>

              <li className="flex items-center gap-3">
                <FaFirstAid className="w-5 h-5 text-orange-400" />
                <span>Pharma & Healthcare</span>
              </li>

              <li className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-orange-400" />
                <span>Startups & MSMEs and many more</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-8 bg-white">
        <div className="w-full px-6 lg:px-8">
          <div className="rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-[30px] font-bold mb-5 leading-tight text-[#1C284F]">
              For smooth registration Under Labour Law Contact us
            </h2>

            <p className="w-full text-gray-600 text-base leading-relaxed mb-2 text-center text-[15px]">
              Following labour laws doesn't have to be a headache. With Our
              Praans Consultech, you get help with clever software, a team that
              will ensure the smooth and accurate work that will be done on time
              and all the strategy.
            </p>

            <p className="w-full text-gray-600 text-base leading-relaxed mb-4 text-center text-[15px]">
              Let us help you make your compliance process a strong point,
              instead of something stressful. Get in touch for a free chat to
              explore our labour law compliance outsourcing solutions
            </p>

            <p className="w-full text-gray-600 text-base leading-relaxed mb-4 text-center text-[15px]">
              Free Consulations and smooth labour law registration in PAN India
              contact us today
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

      {/* FAQ */}
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-8 bg-gray-50">
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
  );
}
