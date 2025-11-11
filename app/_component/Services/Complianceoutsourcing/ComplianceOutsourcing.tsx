"use client";

import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Shield,
  Cpu,
  Users,
  FileText,
  Search,
  Phone,
  Zap,
  Monitor,
  Bell,
  Database,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

// 1) Data
const whyReadinessMatters = [
  {
    icon: Users,
    title: "Pan-India Compliance Management",
    description:
      "We provide unified, centrally managed compliance services across all Indian states and union territories, ensuring your organization fully conforms to both state-specific and central labour laws.",
  },
  {
    icon: FileText,
    title: "Timely Statutory Filings & Legal Updates",
    description:
      "Never miss a deadline again. We handle all periodic returns, form submissions, and digital registers while proactively updating you on every regulatory change.",
  },
  {
    icon: Shield,
    title: "Minimized Legal Risk",
    description:
      "Our continuous monitoring and expert legal advisory protect your organization from non-compliance penalties, reputational damage, and operational disruptions.",
  },
  {
    icon: CheckCircle,
    title: "Audit & Inspection Preparedness",
    description:
      "Your records, registers, and documents are always audit-ready. Our dedicated on-ground support ensures smooth coordination during inspections and audits.",
  },
  {
    icon: Cpu,
    title: "Time & Cost Efficiency",
    description:
      "Outsourcing compliance allows your HR and legal teams to focus on strategic priorities, reducing repetitive administrative workload and overall operational costs.",
  },
  {
    icon: Search,
    title: "Industry-Specific Expertise",
    description:
      "Our consultants bring deep sector knowledge to deliver regulation-aware, practical compliance solutions tailored precisely to your business operations.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Real-Time Legal Updates",
    desc: "Get out of the ordinary with the first-hand updates on labour laws, government notifications, and compliance deadlines for all states and jurisdictions.",
  },
  {
    icon: Monitor,
    title: "Centralized Compliance Dashboard",
    desc: "Have a consolidated look to oversee the status and health of compliance at all your business locations from a single secure platform.",
  },
  {
    icon: Bell,
    title: "Auto Alerts & Intelligent Reminders",
    desc: "We provide with the notification for renewal, inspections, payment that should be timely done, and return so that it always done before the deadline.",
  },
  {
    icon: Database,
    title: "Safe Digital Record Management",
    desc: "We keep all the register, receipts and every statutory compliance with audit report and any other documents that will be easily available with all the version control and are traceable.",
  },
  {
    icon: UserCheck,
    title: "HR & Admin-Lovable Interface",
    desc: "Designed with internal teams in mind, easy navigation ensures fast access to reports and efficient tracking of compliance. See, manage, and take down the whole cycle of risks in your firm's rules life while making sure 100% lawful stick.",
  },
];

const icons = [Shield, Users, Cpu, FileText, CheckCircle];

const whyChooseUs = [
  "15+ Years of Experience",
  "Multi-Industry Expertise",
  "AI-Powered Software",
  "Pan-India Presence",
  "Our Way of Working",
  "Complete Solutions",
];

const faqs = [
  {
    q: "So, what exactly is it when you outsource your labour law stuff?",
    a: "Basically, it means you get pros, like Praans Consultech, to handle all that legal mumbo jumbo for you.",
  },
  {
    q: "Why would a company even do outsourcing?",
    a: "For starters, it makes sure you're always on time with everything. It also cuts down on any fines and lets your HR folks focus on growing the business instead of getting bogged down in legal stuff.",
  },
  {
    q: "How does Praans Consultech actually help with all this?",
    a: "We offer a full package – everything from getting you registered to audits and inspections. They cover all the states in India too.",
  },
  {
    q: "Does Praans Consultech value our money?",
    a: "Indeed, it saves your cash as it cuts down all the admin work and prevents penalties by providing a smooth functioning.",
  },
  {
    q: "What kinds of companies does Praans Consultech work with?",
    a: "Pretty much anyone! Manufacturing, shipping, stores, tech, building, healthcare, you name it.",
  },
  {
    q: "How does Praans Consultech make sure you're 100% compliant?",
    a: "Our experts keep up with every single legal change, handle all the paperwork, and keep everything documented. So, you're covered.",
  },
  {
    q: "What's good about having compliance help all over India?",
    a: "If you've got branches everywhere, it's super convenient to have one central place handling everything the same way in every state.",
  },
  {
    q: "How do Praans Consultech prep you for audits and inspections?",
    a: "We keep all the important stuff – registers, records, filings – up to date, so you're always ready.",
  },
  {
    q: "Does Praans Consultech actually help during inspections too?",
    a: "Yep. We have a team that'll be right there with you during inspections and audits to make sure everything goes smoothly.",
  },
  {
    q: "How does Praans Consultech stay current with all the legal changes?",
    a: "We're constantly checking government websites and notices to make sure our clients are always up to date.",
  },
  {
    q: "Can Praans Consultech handle stuff like contractor licenses?",
    a: "Yes, all the stuff from registration to renewals are taken care of by us.",
  },
  {
    q: "What kind of documents does Praans Consultech keep?",
    a: "They handle all the important stuff: registers, wage records, and all the required documentation, all digital and secure.",
  },
  {
    q: "How does outsourcing Compliance keep you out of trouble?",
    a: "By making sure everything's filed correctly and on time, it helps you avoid fines, lawsuits, and a bad reputation.",
  },
  {
    q: "Is it applicable for small businesses also?",
    a: "Indeed, we provide our service for everyone at affordable prices from start-ups to big MNCs.",
  },
  {
    q: "What makes Praans Consultech different from others?",
    a: "We've got a combination of legal know-how and tech to offer solutions that are on point and tailored to your industry.",
  },
  {
    q: "How do I get started with them?",
    a: "Just get in touch with our team for a quick chat. We will check your needs and requirements and will set a plan that will work for you and be in your best interest.",
  },
];

// Component
export default function ComplianceOutsourcing() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current || !imgRef.current) return;

    const sync = () => {
      if (!textRef.current || !imgRef.current) return;
      imgRef.current.style.height = "auto";
      const h = textRef.current.offsetHeight;
      imgRef.current.style.height = `${h}px`;
    };

    // initial + observers
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(textRef.current);
    window.addEventListener("resize", sync, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>();
  const toggle = (idx: number) => setOpenIndex((p) => (p === idx ? null : idx));

  const mid = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, mid);
  const col2 = faqs.slice(mid);

  return (
    <div className="bg-white text-slate-900">
      <section className="py-8 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:gap-0 items-stretch">
            {/* LEFT: Text content */}
            <div className="flex flex-col justify-center pr-0 lg:pr-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="inline-block bg-orange-50 text-orange-500 font-semibold text-sm px-3 py-1 rounded-full">
                  Your Trusted Partner for Labour Law Compliance Outsourcing
                </span>
              </div>

              <h1 className="text-[24px] font-extrabold leading-tight text-[#1C284F]">
                Assure complete Compliance. Lower the Risk. Boost Efficiency.
              </h1>

              <div className="mt-4 text-[15px] text-slate-700 text-justify">
                <p className="mb-4">
                  Managing labour law compliance is one of the most important
                  but difficult tasks for companies in all sectors of the
                  economy in the complicated regulatory environment today. By
                  offering accurate, dependable, and completely compliant
                  end-to-end labour law compliance outsourcing solutions that
                  are in with the most recent regulations and industry
                  standards, Praans Consultech streamlines this process.
                </p>
                <p className="mb-4">
                  As your tactical conformity partner, we are with you through
                  all stages of your business life cycle - a start-up, a scaling
                  enterprise, or a large multi-location corporation, thus making
                  sure your business is compliant, audit-ready, and free from
                  legal risks. Our strong legal knowledge, when mixed with
                  powerful technology, is the perfect recipe for hassle-free
                  operations while keeping up with every statutory obligation in
                  due time.
                </p>
                <p>
                  We are not only a service provider to you but a compliance
                  partner who deeply understands the complexities of labour laws
                  and provides customer-centric, anticipative solutions at each
                  stage of your business odyssey.
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
                  src="/services/labour-law-advisory-compliance.webp"
                  alt="Compliance Outsourcing"
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

      {/* WHY OUTSOURCE — uniform equal-height cards */}
      <section className="py-12 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[30px] text-[#1C284F]">
              Why Outsource Labour Law Compliance?
            </h2>
            <p className="mt-2 text-gray-600 max-w-8xl mx-auto text-[15px]">
              It is no longer an option to just outsource the compliance of
              labour law; it is a competitive advantage. Here is the reason why
              companies all over India are opting for Praans Consultech
            </p>
            <p className="mt-1 text-gray-600 max-w-8xl mx-auto text-[15px]">
              We look after everything - from contractor licensing and
              registration to provision of accurate records, payroll related
              documentation, inspection, and compliance audit support enabling
              you to devote your time to business growth instead of paperwork.
            </p>
          </div>

          <div className="w-full">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyReadinessMatters.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-lg overflow-hidden bg-gray-50 border border-orange-50 px-4 py-2 h-full flex flex-col"
                  tabIndex={0}
                  role="button"
                  aria-pressed="false"
                >
                  <div className="flex flex-col h-full">
                    {/* <div className="flex items-center justify-center mb-4">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white border border-orange-100">
                        <item.icon className="w-6 h-6 text-[#eb8535]" />
                      </div>
                    </div> */}

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-slate-900 mb-2 text-[#1C284F]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-2" aria-hidden="true">
                      {/* spacer for consistent height */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="rounded-3xl border-2 border-orange-200 p-6 mt-8">
              <p className="text-base text-slate-700 leading-relaxed text-center max-w-5xl mx-auto">
                We look after everything - from contractor licensing and registration to provision of accurate records, payroll related documentation, inspection, and compliance audit support enabling you to devote your time to business growth instead of paperwork.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* FEATURES grid — uniform cards */}
      <section className="bg-gray-50 py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[30px] text-[#1C284F]">
              Empowering Compliance through Smart Technology
            </h2>
            <p className="mt-3 text-gray-600 max-w-8xl mx-auto text-[15px]">
              We fuse conventional legal advisory with intelligent automation.
              Our local, AI-enabled compliance management software is your way
              to full control, transparency, and ease over all your compliance
              operations.
              <br />
              The combined effect of our software + service model is that your
              organization remains legally safe, operationally effective, and
              always on top of compliance issues.
            </p>
          </div>

          <div className="w-full">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features?.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-lg overflow-hidden bg-white border border-orange-50 px-4 py-2 h-full flex flex-col"
                  tabIndex={0}
                  role="button"
                  aria-pressed="false"
                >
                  <div className="flex flex-col h-full">
                    {/* <div className="flex items-center justify-center mb-4">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white border border-orange-100">
                        <item.icon className="w-6 h-6 text-[#eb8535]" />
                      </div>
                    </div> */}

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-slate-900 mb-2 text-[#1C284F]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-2" aria-hidden="true">
                      {/* spacer for consistent height */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="rounded-3xl border-2 border-orange-200 p-6 mt-8">
              <p className="text-base text-slate-700 leading-relaxed text-center max-w-6xl mx-auto">
                The combined effect of our software + service model is that your
                organization remains legally safe, operationally effective, and
                always on top of compliance issues.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 bg-white">
        <div className="w-full px-6 lg:px-16">
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="w-full flex items-center justify-center">
                <div
                  ref={imgRef}
                  className="relative w-full rounded-3xl overflow-hidden bg-white border-2 border-orange-100 shadow-sm h-full"
                  style={{ minHeight: 220 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/services/adm.webp"
                      alt="Sandeep Kumar — Founder, Praans Consultech"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/98 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-sm font-bold border-2 border-orange-500 shadow-sm sm:top-6 sm:left-6">
                    <Shield className="w-4 h-4 text-orange-500" />
                    Founder &amp; Head — Compliance
                  </div>
                </div>
              </div>

              <div ref={textRef} className="w-full">
                <div>
                  <h2 className="text-[30px] font-bold text-slate-900 leading-tight text-[#1C284F]">
                    Meet Our Founder
                  </h2>
                  <p className="text-md text-orange-500 font-semibold mt-2">
                    Vision Backed by Legal Expertise
                  </p>
                </div>

                <div className="mt-2 space-y-2">
                  <p className="text-base text-slate-700 leading-relaxed text-justify text-[15px]">
                    At Praans Consultech, our founder; labour law adviser with
                    over 15 years of experience in managing and streamlining
                    labour law compliance for the businesses PAN India is
                    driving our adventure. Our founder is trusted partner to
                    numerous businesses looking for clarity and control over
                    their statutory responsibilities, in addition to being a
                    legal expert.
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed text-justify text-[15px]">
                    Our founder has shown to be exceptionally skilled at
                    managing intricate labour aw operations across several
                    states and industries having managed compliance for over{" "}
                    <span className="font-bold text-orange-400">
                      2,500 locations and over 50,000 people PAN India
                    </span>
                    .
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed text-justify text-[15px]">
                    Their strong legal foundation and real-world experience in
                    managing high-volume, multi-location compliance operations
                    provide the strategic edge our clients trust. They lead the
                    organization with a focus on ethical standards, practical
                    execution, and proactive risk management.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-orange-100">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full text-[#1C284F]" />
                      A Strong Educational Foundation in Law and Compliance
                    </h4>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-slate-800 text-[15px] font-semibold border border-orange-300">
                        B.Sc.
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-slate-800 text-[15px] font-semibold border border-orange-300">
                        LL.B.
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-slate-800 text-[15px] font-semibold border border-orange-300">
                        LL.M.
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-slate-800 text-[15px] font-semibold border border-orange-300">
                        PG Diploma — Labour Laws
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-slate-800 text-[15px] font-semibold border border-orange-300">
                        XLRI Alumnus
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-slate-800 text-[15px] font-semibold border border-orange-300">
                        Ph.D. (Pursuing)
                      </span>
                    </div>

                    <ul className="list-disc pl-5 space-y-3 text-sm text-slate-700">
                      <li>
                        <strong>B.Sc.</strong> – Through this degree he has
                        developed analytical abilities that aid in the
                        deciphering of intricate regulatory matters.
                      </li>
                      <li>
                        <strong>LL.B. &amp; LL.M.</strong> – It developed an
                        extensive legal understanding of Indian labour laws, and
                        industrial relations were provided through.
                      </li>
                      <li>
                        <strong>
                          PG Diploma in Labour Laws &amp; Industrial Relations
                        </strong>{" "}
                        – It developed strong foundations in labour law and
                        industrial relations were established through this
                        degree.
                      </li>
                      <li>
                        <strong>XLRI Alumnus</strong> – Acquired advanced
                        leadership and HR management knowledge from one of the
                        most prestigious business school in India.
                      </li>
                      <li>
                        <strong>Ph.D. (Pursuing)</strong> – To be up to date
                        with the all latest legal trends, founder is pursuing a
                        doctorate in labour law and compliance frameworks.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder closing box with responsive vertical margins */}
            {/* <div className="rounded-3xl border-2 border-orange-200 p-6 my-6 md:my-8 lg:my-12">
              <p className="text-base text-slate-700 leading-relaxed text-center max-w-5xl mx-auto">
                Their strong legal foundation and real-world experience in
                managing high-volume, multi-location compliance operations
                provide the strategic edge our clients trust. They lead the
                organization with a focus on ethical standards, practical
                execution, and proactive risk management.
              </p>
            </div> */}
          </div>

          {/* Team Section */}
          <div className="w-full px-6 lg:px-16">
            <div className="max-w-8xl mx-auto text-center mb-12">
              <h3 className="text-[30px] font-bold text-slate-900 mb-3 text-[#1C284F]">
                Meet the team – They Make It All Happen
              </h3>
              <p className="mt-3 text-gray-600 max-w-8xl mx-auto text-[15px]">
                Behind the scenes, there's a solid team helping out the founder.
                We've got legal eagles, folks who know all about staying
                compliant, document wizards, and people on the ground making
                sure things run smoothly. Each person knows their stuff when it
                comes to Indian labour laws, what's up in different regions, and
                what each industry needs to do.
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
                    <h4 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2 text-[#1C284F]">
                      Basically, we're experienced in:
                    </h4>

                    <ul className="space-y-3">
                      <li className="flex gap-3 text-sm text-slate-700">
                        <span className="text-orange-500 font-bold">✓</span>
                        <span>
                          Making sure you're set up right (establishment
                          compliance)
                        </span>
                      </li>
                      <li className="flex gap-3 text-sm text-slate-700">
                        <span className="text-orange-500 font-bold">✓</span>
                        <span>Factory compliance</span>
                      </li>
                      <li className="flex gap-3 text-sm text-slate-700">
                        <span className="text-orange-500 font-bold">✓</span>
                        <span>Payroll stuff</span>
                      </li>
                      <li className="flex gap-3 text-sm text-slate-700">
                        <span className="text-orange-500 font-bold">✓</span>
                        <span>Dealing with contractors</span>
                      </li>
                      <li className="flex gap-3 text-sm text-slate-700">
                        <span className="text-orange-500 font-bold">✓</span>
                        <span>
                          Getting all the necessary registrations and licenses
                        </span>
                      </li>
                      <li className="flex gap-3 text-sm text-slate-700">
                        <span className="text-orange-500 font-bold">✓</span>
                        <span>
                          Audits and inspections, plus a bunch of other things
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 text-[#1C284F]">
                      How we work?
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                      We work hand in hand with HR departments, the government,
                      and our clients to get everything in on time, make sure
                      everything's crystal clear legally, and get things done
                      right. This all result in smooth functioning of our entire
                      compliance partner in every industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Work With Section (no hover effects; heading centered) */}
      <section className="py-12 bg-gray-50">
        <div className="w-full px-6 lg:px-16">
          <div className="mb-16 text-center">
            <h2 className="text-[30px] font-bold text-slate-900 mb-4 text-[#1C284F]">
              Industries We Work With
            </h2>
            <p className="text-[15px] text-slate-700 max-w-8xl mx-auto">
              We're happy to help out all sorts of businesses with tailor-made
              compliance solutions:
            </p>
            <p className="text-[15px] text-slate-700 max-w-8xl mx-auto">
              Each and every industry in India has its own rules and regulations
              that they follow, but our compliance solutions make sure that
              everyone adheres to both state and central labour laws.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-6 border-2 border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🍊</span>
                </div>
                <h3 className="font-bold text-slate-900 text-[#1C284F]">
                  Drinks &amp; Fruits
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">👥</span>
                </div>
                <h3 className="font-bold text-slate-900 text-[#1C284F]">
                  Staffing Companies
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🏦</span>
                </div>
                <h3 className="font-bold text-slate-900 text-[#1C284F]">
                  Financial Services
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">📚</span>
                </div>
                <h3 className="font-bold text-slate-900 text-[#1C284F]">
                  Edtech &amp; Schools
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">💼</span>
                </div>
                <h3 className="font-bold text-slate-900 text-[#1C284F]">
                  Professional Services
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🌾</span>
                </div>
                <h3 className="font-bold text-slate-900 text-[#1C284F]">
                  Agriculture
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🏨</span>
                </div>
                <h3 className="font-bold text-slate-900 text-[#1C284F]">
                  Hotels &amp; Restaurants
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🛍️</span>
                </div>
                <h3 className="font-bold text-slate-900 text-[#1C284F]">
                  Retail &amp; Pet Care
                </h3>
              </div>
            </div>
          </div>

          {/* Compliance Assurance Box */}
          {/* <div className="rounded-3xl border-2 border-orange-200 p-6">
            <p className="text-base text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
              Each and every industry in India has its own rules and regulations
              that they follow, but our compliance solutions make sure that
              everyone adheres to both state and central labour laws.
            </p>
          </div> */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
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
              const microCopy =
                [
                  "We've been at this for over 15 years.",
                  "We know our way around a bunch of different industries.",
                  "We use centralized, AI-powered compliance software.",
                  "We're all over India, with people on the ground.",
                  "We do things our way – customized, honest, and ethical.",
                ][idx] ?? "We handle all your compliance outsourcing needs.";

              return (
                <div
                  key={idx}
                  className="relative bg-white border border-slate-100 rounded-lg px-4 py-2 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-orange-200 h-full"
                  role="article"
                  aria-label={`Reason ${idx + 1} - ${reason}`}
                >
                  <div className="flex items-start gap-4 h-full flex-col">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-md bg-orange-50 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-orange-500" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 text-[#1C284F]">
                          {reason}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 text-justify">
                          {microCopy}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="w-full px-6 lg:px-8">
          <div className="rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-[30px] font-bold mb-5 leading-tight text-[#1C284F]">
              Let's Make Compliance Easier
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
              explore our labour law compliance outsourcing solutions.
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

      {/* Mobile micro-CTA */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <Link href="tel:+91-9582200771" aria-label="Quick consult">
          <button
            className="bg-orange-50 text-orange-500 px-4 py-2 rounded-full shadow-md flex items-center gap-2"
            aria-label="Quick consult"
          >
            <Phone className="w-4 h-4" />
            Quick Consult
          </button>
        </Link>
      </div>

      {/* FAQ Section */}
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
    </div>
  );
}
