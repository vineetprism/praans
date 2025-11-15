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
  DollarSign,
  Gavel,
  BookOpen,
  MessageCircle,
  FileCheck,
  Settings,
  Laptop,
  UserX,
  Clock,
  BarChart2,
  LogOut,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaFirstAid } from "react-icons/fa";
import React, { useState } from "react";
import ComplianceFormDialog from "@/components/ComplianceFormDialog";

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
    icon: DollarSign,
    title: "Wage and salary structure and the minimum wage",
    description:
      "Making sure that all employees are paid timely and according to the Minimum Wages Act.",
  },
  {
    icon: Users,
    title: "Employee State Insurance (ESI) and the Provident Fund (PF)",
    description:
      "Legal contributions plus benefits that are meant for the employees’ social security.",
  },
  {
    icon: Award,
    title: "Bonus payment and Gratuity",
    description:
      "The computations will be done in a precise and quick manner, and the calculations will be in accordance with the Payment of Bonus Act and Payment of Gratuity Act.",
  },
  {
    icon: FileText,
    title: "Employee Benefits and leave policies",
    description:
      "Compliance with laws such as the Shops and Establishment Act and Maternity Benefit Act.",
  },
  {
    icon: ShieldCheck,
    title: "Workplace Safety and Health",
    description:
      "Adhering to the standards set under the Occupational Safety and the Factories Act.",
  },
];

const ourServices = [
  {
    title: "Labour Law Compliance Audit",
    description:
      "Detailed audit of HR policies, compensation structures, and government records to identify non-compliance areas. Our audit is your organisation's assurance of compliance with applicable labour laws.",
    icon: FileText,
  },
  {
    title: "Drafting Employment Contracts",
    description:
      "Tailored employment contracts that protect both company and employees — covering positions, responsibilities, pay, and termination procedures.",
    icon: File,
  },
  {
    title: "HR Policy Development",
    description:
      "Creation of employee manuals, leave rules, attendance policies, and codes of conduct aligned with labour laws to streamline operations.",
    icon: Settings,
  },
  {
    title: "Resolution Support (Dispute Resolution)",
    description:
      "Legal and mediation support to reach fair outcomes while mitigating legal risks in employee disputes.",
    icon: Users,
  },
  {
    title: "Regulatory Filing Support",
    description:
      "End-to-end handling of returns, registrations and reporting for PF, ESI, Professional Tax and other statutory compliance.",
    icon: FileCheck,
  },
  {
    title: "Employee Grievance Mechanism",
    description:
      "Assistance in establishing official grievance redressal mechanisms and workflows for timely resolution.",
    icon: MessageCircle,
  },
  {
    title: "Training & Workshops on Labour Laws",
    description:
      "Workshops and training for management and HR on law changes, compliance best practices, and policy implementation.",
    icon: BookOpen,
  },
  {
    title: "Legal Advice & Representation",
    description:
      "Legal counsel and representation in labour courts, conciliation proceedings and regulatory matters to protect organisational interests.",
    icon: Gavel,
  },
];

const faqs = [
  {
    q: "Why is labour law compliance important?",
    a: "It prevents legal penalties, protects the company, ensures fair treatment of employees, and helps maintain employee trust and retention.",
  },
  {
    q: "Which HR policies are mandatory?",
    a: "Minimum wages, leave, attendance, PF & ESI, maternity benefits, gratuity, and a code of conduct are mandatory in most cases.",
  },
  {
    q: "How often should HR policies be updated?",
    a: "At least once a year — or immediately when there is a change in labour laws or significant business changes.",
  },
  {
    q: "Can you handle compliance across multiple states?",
    a: "Yes. We provide PAN-India solutions to manage state-specific registrations and statutory compliance.",
  },
  {
    q: "What is included in a labour law compliance audit?",
    a: "Payroll review, PF/ESI checks, gratuity and bonus compliance, leave policies, statutory registers and record accuracy.",
  },
  {
    q: "How do you help with disputes at the workplace?",
    a: "We provide legal support, prepare paperwork, advise on strategy, and facilitate mediation or conciliation to reach fair outcomes.",
  },
  {
    q: "Do you support digital HR compliance systems?",
    a: "Yes — we support implementation and configuration of payroll, leave, and statutory compliance platforms.",
  },
  {
    q: "How early do you start HR policy implementation?",
    a: "Timeline depends on company size and scope; typical implementation completes in 2–3 weeks for standard setups.",
  },
  {
    q: "What types of employment contracts do you draft?",
    a: "We draft permanent, temporary, fixed-term and internship contracts — all compliant with applicable labour laws.",
  },
  {
    q: "Can Praans Consultech help with registration of PF and ESI?",
    a: "Yes — we handle registrations, contribution setup, payroll configuration and filing of returns for PF and ESI.",
  },
  {
    q: "Do you provide training on labour law compliance?",
    a: "Yes — we run workshops and training sessions for HR teams and management on compliance and policy implementation.",
  },
  {
    q: "How is gratuity calculated?",
    a: "Gratuity is calculated based on last drawn salary and tenure of service as per the Payment of Gratuity Act.",
  },
  {
    q: "Can you help with POSH compliance?",
    a: "Yes — we set up POSH complaint mechanisms, conduct awareness training, and assist with reporting and investigations.",
  },
  {
    q: "What support do you offer for retrenchment or termination?",
    a: "We advise on notice periods, settlement calculations and legal compliance under the Industrial Disputes Act and related laws.",
  },
  {
    q: "Do you assist with statutory audits for companies?",
    a: "Yes — we perform labour law audits to identify gaps and recommend corrective actions.",
  },
  {
    q: "Do you help with employee handbooks and HR policies?",
    a: "Yes — we develop comprehensive, legally compliant employee handbooks and policy manuals tailored to your business.",
  },
];

const icons = [Shield, Users, Cpu, FileText, CheckCircle /* , Gavel */];

const policies = [
  {
    title: "Benefits & Compensation Policy",
    description:
      "Annual raises, performance bonuses, statutory benefits, allowances and incentives.",
    icon: Banknote,
  },
  {
    title: "Ethics Policy & Code of Conduct",
    description:
      "Workplace behaviour, disciplinary procedures, anti-discrimination rules, anti-corruption measures and anti-harassment guidelines.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Work Policy",
    description:
      "Labour-law-compliant guidelines for remote and hybrid work arrangements.",
    icon: Laptop,
  },
  {
    title: "Retrenchment & Termination Policy",
    description:
      "Procedures compliant with Industrial Disputes Act and Shops & Establishment Act for fair employee separation.",
    icon: UserX,
  },
  {
    title: "Gratuity Policy",
    description:
      "As per Payment of Gratuity Act — eligibility, computation and timely payment.",
    icon: FileText,
  },
  {
    title: "Bonus Policy",
    description:
      "Payment of Bonus Act — governs eligibility, computation and prompt payment of bonuses.",
    icon: Award,
  },
  {
    title: "ESI & PF Policy",
    description:
      "Ensuring mandatory employer and employee contributions for social security (ESI, PF) and correct payroll configuration.",
    icon: Users,
  },
  {
    title: "Safety & Health Policy",
    description:
      "Workplace safety measures and health protocols aligned with applicable labour laws and factory safety standards.",
    icon: Heart,
  },
  {
    title: "Sexual Harassment Prevention Policy (POSH)",
    description:
      "POSH-compliant complaint redressal mechanism, awareness programs and fair investigation processes.",
    icon: Users,
  },
  {
    title: "Learning & Advancement Rules",
    description:
      "Mandatory training, skill-development programs and competency growth plans for employees.",
    icon: BookOpen,
  },
  {
    title: "Working Hours & Overtime Rules",
    description:
      "Hours of work, shift distribution and overtime calculation based on labour code regulations.",
    icon: Clock,
  },
  {
    title: "Travel & Reimbursement Policy",
    description:
      "Reimbursement of travel and work-related expenses on meeting defined legal and organisational criteria.",
    icon: Truck,
  },
  {
    title: "Performance Review & Rewards Policy",
    description:
      "Periodic performance reviews, objective grading and reward mechanisms following defined steps.",
    icon: BarChart2,
  },
  {
    title: "Employee Welfare Scheme",
    description:
      "Initiatives for employee well-being — mental health, recreational activities and support programs.",
    icon: Heart,
  },
  {
    title: "Workplace Diversity & Inclusion Policy",
    description:
      "Non-discrimination in hiring and workplace practices; ensuring equal opportunities and inclusion.",
    icon: Globe,
  },
  {
    title: "Exit & Relieving Policy",
    description:
      "Notice period, final settlement, clearance processes and exit formalities.",
    icon: LogOut,
  },
  {
    title: "Employee Grievance Redressal Policy",
    description:
      "Mechanism to receive, track and resolve employee complaints and workplace grievances effectively.",
    icon: MessageCircle,
  },
  {
    title: "Industrial Relations Policy",
    description:
      "Framework to maintain constructive relationships with trade unions and employee representatives.",
    icon: Users,
  },
  {
    title: "Probation Extension & Confirmation Policy",
    description:
      "Clear procedures for probation extension, evaluation and confirmation of employment.",
    icon: FileCheck,
  },
  {
    title: "Employee Separation & Retirement Policy",
    description:
      "Processes for voluntary or forced separation and retirement, including terminal benefits and documentation.",
    icon: FileText,
  },
];

const advantages = [
  {
    title: "Professional Advice",
    description:
      "Assistance from knowledgeable labour law consultants and legal practitioners.",
    icon: Gavel,
  },
  {
    title: "Personalized Solutions",
    description:
      "HR policies and consultancy tailored to your organisation’s size, sector and specific needs.",
    icon: Settings,
  },
  {
    title: "Compliance with Regulations",
    description:
      "Strict adherence to labour laws to avoid penalties, sanctions and legal disputes.",
    icon: ShieldCheck,
  },
  {
    title: "Time & Cost Efficiency",
    description:
      "Streamlined compliance processes that reduce administrative burden and operational costs.",
    icon: Clock,
  },
  {
    title: "Risk Mitigation",
    description:
      "Lower legal and financial exposure through timely audits, correct filings and proactive advice.",
    icon: AlertTriangle,
  },
  {
    title: "Updated Legal Insights",
    description:
      "Ongoing updates on labour law changes and statutory requirements so you stay ahead of obligations.",
    icon: BookOpen,
  },
  {
    title: "Workplace Productivity",
    description:
      "Clear policies and compliant practices that boost employee satisfaction and overall productivity.",
    icon: TrendingUp,
  },
];

const serviceIcons = [Shield, FileText, Users, CheckCircle, Cpu];

export default function LegalAdvisoryHrPolicy() {
  const [success, setSuccess] = React.useState(false);
  React.useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => setSuccess(false), 2000);
    return () => clearTimeout(t);
  }, [success]);
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
                  Legal Advisory & HR Policies for Labour Law Compliance Audit
                </span>
              </div>

              <h1 className="text-[24px] font-extrabold leading-tight text-[#1C284F]">
                Comply Efficiently. Operate with Confidence.
              </h1>

              <p className="mt-4 text-[15px] text-slate-700 text-justify">
                It is necessary for companies of all size, to follow labour
                laws. Non-compliance can lead to penalties, lawsuits, and
                tarnishing of reputation. To keep businesses up-to-date,
                compliant, and friendly to employees, At Praans Consultech, we
                provide complete HR policy frameworks and professional legal
                advisory services. Not only do our solutions meet legal
                requirements but they also create a transparent and systematic
                atmosphere in the workplace.
              </p>
              <p className="mt-1 text-[15px] text-slate-700 text-justify">
                Our labour law professionals work closely with the companies to
                identify their specific operational needs. We offer a full range
                of services that include preparing employment agreements,
                establishing leave and attendance policies, arranging pay and
                benefits, and ensuring compliance with PF, ESI, gratuity, and
                bonus regulations. Each solution is tailor-made to the client’s
                size, industry, and specific requirements thus assuring both
                usability and legality. Moreover, we provide continuous support
                so that companies can make HR adjustments as per the changing
                labour laws. This approach reduces the legal risks, minimizes
                disputes at the workplace, and encourages a friendly and
                creative company culture.
              </p>
              <p className="mt-1 text-[15px] text-slate-700 text-justify">
                By having Praans Consultech as a partner, companies can keep
                their compliance strong while focusing on their growth and
                employee engagement.
              </p>

              <div className="mt-8 mb-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <ComplianceFormDialog onSuccess={() => setSuccess(true)}>
                  <Button
                    size="lg"
                    className="px-6 py-3 sm:py-4 md:py-4 lg:py-6 rounded-lg border border-orange-500 bg-orange-50 text-orange-500 text-lg hover:bg-transparent hover:text-gray-800 font-bold hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)] transition duration-200 cursor-pointer w-full sm:w-auto"
                    aria-label="Book Free Consultation"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Book Free Consultation
                  </Button>
                </ComplianceFormDialog>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full rounded-xl overflow-hidden shadow-md border border-slate-100 bg-white">
                <Image
                  src="/services/hr.webp"
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
              Why Labour Law Compliance is Important?
            </h2>

            <p className="mt-1 text-gray-600 max-w-8xl mx-auto text-[15px] text-justify">
              Labour laws define the rights and obligations of both employers
              and employees. They secure social insurance, guarantee job safety
              and proper treatment. Compliance not only prevents fine but also
              cultivates a good company culture and increases employee loyalty.
            </p>
            <p className="mt-1 text-gray-600 max-w-8xl mx-auto text-[15px]">
              Companies will not only incur financial penalties but also lose
              employees' goodwill, not to talk of legal issues if they do not
              comply.
            </p>
          </div>

          <div className="w-full">
            <h2 className="text-[20px] text-center font-semibold text-[#1C284F]">
              The following main areas require the attention of business owners:
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyReadinessMatters.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group relative rounded-lg overflow-hidden shadow-sm bg-gray-50 border border-orange-50 px-4 py-4 h-full"
                    tabIndex={0}
                    role="button"
                    aria-pressed="false"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 pt-1">
                        <Icon
                          className="w-5 h-5 text-[#eb8535]"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-semibold text-md text-[#1C284F]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 text-justify">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-12 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[30px] font-bold text-[#1C284F]">
              Our Legal Advisory Services
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ourServices.map((service, idx) => {
              const Icon = serviceIcons[idx % serviceIcons.length] || FileText;
              return (
                <Card
                  key={idx}
                  className="px-4 py-2 border border-orange-50 shadow-sm bg-white"
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

      {/* HR Policies We provide */}
      <section className="py-12 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[30px] font-bold text-[#1C284F]">
              HR Policies We provide
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {policies.map((policy, idx) => {
              const Icon = icons[idx] ?? CheckCircle;

              return (
                <div
                  key={idx}
                  className="relative bg-gray-50 border border-orange-50 rounded-lg px-4 py-2 shadow-sm h-full"
                  role="article"
                  aria-label={`Reason ${idx + 1} - ${policy.title}`}
                >
                  <div className="flex items-start gap-2 h-full flex-col">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-md flex items-center justify-center">
                        <Icon className="w-4 h-4 text-orange-500" />
                      </div>

                      <div>
                        <h3 className="text-md font-semibold text-[#1C284F] text-justify">
                          {policy.title}
                        </h3>
                        <p className="text-sm text-gray-600 text-justify">
                          {policy.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages of Engaging Our Services*/}
      <section className="py-12 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[30px] font-bold text-[#1C284F]">
              Advantages of Engaging Our Services
            </h2>
            <p className="mt-1 text-gray-600 max-w-8xl mx-auto text-[15px] text-center">
              By choosing our firm, you are guaranteeing yourself the following
              benefits:
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, idx) => {
              const Icon = icons[idx] ?? CheckCircle;

              return (
                <div
                  key={idx}
                  className="relative bg-white border border-orange-50 rounded-lg px-4 py-2 shadow-sm h-full"
                  role="article"
                  aria-label={`Reason ${idx + 1} - ${advantage.title}`}
                >
                  <div className="flex items-start gap-2 h-full flex-col">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-md flex items-center justify-center">
                        <Icon className="w-4 h-4 text-orange-500" />
                      </div>

                      <div>
                        <h3 className="text-md font-semibold text-[#1C284F] text-justify">
                          {advantage.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 text-justify">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-8 bg-white">
        <div className="w-full px-6 lg:px-8">
          <div className="rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-[30px] font-bold mb-5 leading-tight text-[#1C284F]">
              For smooth registration Under Legal Advisory & HR Policies for
              Labour Law Compliance Audit
            </h2>

            <p className="w-full text-gray-600 text-base leading-relaxed mb-2 text-center text-[15px] text-justify">
              Following labour laws doesn't have to be a headache. With Our
              Praans Consultech, you get help with clever software, a team that
              will ensure the smooth and accurate work that will be done on time
              and all the strategy.
            </p>

            <p className="w-full text-gray-600 text-base leading-relaxed mb-4 text-center text-[15px] text-justify">
              Let us help you make your compliance process a strong point,
              instead of something stressful. Get in touch for a free chat to
              explore our labour law compliance outsourcing solutions
            </p>

            <p className="w-full text-gray-600 text-base leading-relaxed mb-4 text-center text-[15px]">
              Free Consulations and smooth labour law registration in PAN India
              contact us today
            </p>

            <div className="flex justify-center gap-5 sm:gap-6 flex-wrap">
              <ComplianceFormDialog onSuccess={() => setSuccess(true)}>
                <Button
                  size="lg"
                  className="px-6 py-3 sm:py-4 md:py-4 lg:py-6 rounded-lg border border-orange-500 bg-orange-50 text-orange-500 text-lg hover:bg-transparent hover:text-gray-800 font-bold hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)] transition duration-200 cursor-pointer w-full sm:w-auto"
                  aria-label="Book Free Consultation"
                >
                  Get Free Consultation
                </Button>
              </ComplianceFormDialog>

              <Link
                href="/compliance-software"
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
