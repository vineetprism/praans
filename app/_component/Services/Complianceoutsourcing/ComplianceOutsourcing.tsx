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
  Coffee,
  CreditCard,
  BookOpen,
  Briefcase,
  Home,
  ShoppingCart,
  Leaf,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"

// 1) Replace existing whyReadinessMatters with this
const whyReadinessMatters = [
  {
    icon: Users,
    title: "Pan-India Compliance Management",
    description:
      "Consistent, centralized compliance across all states & UTs — we handle both state and central labour law requirements for multi-location businesses.",
  },
  {
    icon: FileText,
    title: "Timely Statutory Filings & Legal Updates",
    description:
      "From periodic returns to digital registers, we manage filings and push proactive legal updates so you never miss a deadline.",
  },
  {
    icon: Shield,
    title: "Minimized Legal Risk",
    description:
      "Continuous monitoring plus expert legal advisory reduce exposure to fines, notices and reputational harm.",
  },
  {
    icon: CheckCircle,
    title: "Audit & Inspection Preparedness",
    description:
      "Records, documents and inspection packs are kept audit-ready with dedicated on-ground support during visits.",
  },
  {
    icon: Cpu,
    title: "Time & Cost Efficiency",
    description:
      "Outsource admin-heavy compliance tasks to free HR/legal bandwidth, cut operating costs and improve productivity.",
  },
  {
    icon: Search,
    title: "Industry-Specific Expertise",
    description:
      "Consultants with sector knowledge deliver regulation-aware, practical solutions tailored to your operations.",
  },
];


const ourServices = [
  {
    title: "Real-Time Legal Updates",
    description:
      "Instantly reflect changes in labour laws, notifications, and deadlines across jurisdictions.",
  },
  {
    title: "Centralized Dashboards",
    description:
      "Monitor compliance health of multiple units from a single view.",
  },
  {
    title: "Automated Alerts & Reminders",
    description:
      "Never miss renewals, submissions, or inspections.",
  },
  {
    title: "Secure Digital Record-Keeping: ",
    description:
      "Digitally maintain all registers and statutory files with proper version control.",
  },
  {
    title: "HR/Admin Friendly Access",
    description:
      "Streamlined and user-friendly for internal teams to track compliance performance.",
  },
];


const icons = [Shield, Users, Cpu, FileText, CheckCircle];

const whyChooseUs = [
  "15+ Years of Legal Experience",
  "Strong Industry Expertise",
  "Centralized, AI-Powered Compliance Software",
  "PAN India Operations & On-Ground Support",
  "Customized, Transparent & Ethical Approach",
  "End-to-End Compliance Outsourcing Services",
];

const serviceIcons = [Shield, FileText, Users, CheckCircle, Cpu]

export default function ComplianceOutsourcing() {

  const textRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!textRef.current || !imgRef.current) return

    const sync = () => {
      if (!textRef.current || !imgRef.current) return
      imgRef.current.style.height = 'auto'
      const h = textRef.current.offsetHeight
      imgRef.current.style.height = `${h}px`
    }

    // initial + observers
    sync()
    const ro = new ResizeObserver(sync)
    ro.observe(textRef.current)
    window.addEventListener('resize', sync, { passive: true })

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', sync)
    }
  }, [])
  return (
    <div className="bg-white text-slate-900">
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          {/* stack on md (768px) and go 2-col on lg */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:gap-4 items-stretch">
            {/* LEFT: Text content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="inline-block bg-orange-50 text-orange-500 font-semibold text-sm px-3 py-1 rounded-full">
                  Your Trusted Partner for Labour Law Compliance Outsourcing
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Ensure 100% Compliance, Reduce Risk, Improve Efficiency.
              </h1>

              {/* updated copy */}
              <div className="mt-4 text-lg text-slate-700 max-w-xl text-justify">
                <p>
                  In today's complex regulatory landscape, managing labour law compliance is one of the most critical yet challenging responsibilities for businesses across industries. At Praans Consultech, we simplify this process by offering end-to-end labour law compliance outsourcing solutions that are accurate, reliable, and fully aligned with the latest government rules and industry practices.
                </p>
              </div>

              <div className="mt-8 mb-4 sm:mb-4 md:mb-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact" aria-label="Book free consultation">
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
              <div className="w-full rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-white flex">
                <Image
                  src="/services/compliance.jpg"
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


      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Why Outsource Labour Law Compliance?</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-justify">
              Outsourcing your labour law compliance is no longer an optional convenience, it's a competitive advantage. Here’s why businesses across India are turning to Praans Consultech.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyReadinessMatters.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-offset-2 bg-gray-50"
                tabIndex={0}
                role="button"
                aria-pressed="false"
              >
                {/* removed shadow-md from here */}
                <div className="surface relative border rounded-md border-orange-100">
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

                    <p className="mt-2 text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-200 text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Remove shadow on pseudo-element hover as well */}
        <style jsx>{`
            .surface::before {
              content: "";
              position: absolute;
              inset: 0;
              background-color: #eb8535;
              transform: scaleX(0);
              transform-origin: left;
              transition: transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1);
              z-index: 0;
              box-shadow: none !important; /* ensure no shadow */
            }

            .group:hover .surface::before,
            .group:focus-within .surface::before,
            .group:focus .surface::before {
              transform: scaleX(1);
              box-shadow: none !important; /* explicitly disable hover shadow */
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

      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Equal-height row, no column gap (gap comes from buttons/content only) */}
          <div className="grid md:grid-cols-2 items-stretch">
            {/* RIGHT: Image (height mirrors text) */}
            <div className="order-1 md:order-2 flex items-stretch">
              <div
                ref={imgRef}
                className="relative w-full rounded-2xl overflow-hidden border border-slate-100 bg-white flex items-center justify-center"
              >
                <Image
                  src="/services/adm.webp"
                  alt="Sandeep Kumar — Founder, Praans Consultech"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover object-top md:object-[50%_20%] rounded-2xl"
                />


                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 text-slate-900 px-3 py-1 rounded-full text-sm font-medium border shadow-sm">
                  <Shield className="w-4 h-4 text-orange-500" />
                  Founder &amp; Head — Compliance
                </div>
              </div>
            </div>

            {/* LEFT: Text (the height source) */}
            <div
              ref={textRef}
              className="order-2 md:order-1 flex flex-col justify-start gap-5"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Meet Our Founder — Vision Backed by Legal Expertise
                </h2>
                <p className="mt-3 text-base text-slate-700 max-w-xl text-justify">
                  Sandeep leads Praans Consultech with hands-on experience in large-scale compliance operations,
                  audit handling and regulatory strategy. We translate that operational expertise into practical,
                  audit-ready solutions that reduce risk and keep your business running.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="text-md font-semibold text-gray-900">Key Experience</h4>
                  <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5 marker:text-orange-500">
                    <li>Directed statutory compliance for 2,500+ locations nationwide</li>
                    <li>Managed payroll &amp; contractor compliance for 50,000+ personnel</li>
                    <li>Delivered audit &amp; inspection programs for enterprise clients</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-md font-semibold text-gray-900">Education &amp; Credentials</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-slate-800 text-xs border border-orange-500">B.Sc.</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-slate-800 text-xs border border-orange-500">LL.M.</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-slate-800 text-xs border border-orange-500">PG Diploma — Labour Laws</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-slate-800 text-xs border border-orange-500">XLRI Alumnus</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-slate-800 text-xs border border-orange-500">Ph.D. (Pursuing)</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-orange-500 bg-orange-50 text-orange-500 text-lg hover:bg-transparent hover:text-[#eb8535] font-bold hover:shadow-[4px_4px_0px_0px_rgba(235,133,53,1)] transition duration-200 cursor-pointer"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Expert Team block (unchanged) */}
          <div className="mt-16 bg-gray-50 rounded-2xl border border-slate-100 p-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Expert Team – The Foundation of Our Service Delivery
            </h3>
            <p className="mt-4 text-base text-slate-700 text-justify">
              Supporting the founder is a dedicated team of legal professionals, compliance officers, documentation
              specialists, and field executives. Each member brings domain-specific knowledge in Indian labour laws,
              regional rules, and sector-specific requirements. Our team holds expertise in:
            </p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2 list-disc pl-5 marker:text-orange-500">
              <li>Establishment Compliance</li>
              <li>Factory Compliance</li>
              <li>Payroll Compliance</li>
              <li>Contractor Compliance</li>
              <li>Registration &amp; Licenses</li>
              <li>Audit and Inspection</li>
              <li>And many more</li>
            </ul>
            <p className="mt-4 text-base text-slate-700 text-justify">
              They work closely with HR departments, government authorities, and client management to ensure timely submissions,
              legal clarity, and smooth on-ground execution—making us a trusted compliance partner across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold">Empowering Compliance Through Smart Technology</h2>
            <p className="mt-3 text-gray-600 text-justify">
              We combine traditional legal consulting with smart automation. Our in-house, AI-enabled compliance management software ensures full control, clarity, and convenience over all your compliance activities.
              With our software + service model, your organization stays legally secure, operationally efficient, and always ahead of compliance challenges.
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
        <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 items-stretch">
          {/* LEFT: Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Industries We Serve</h2>

            <p className="text-gray-700 mb-6 max-w-xl">
              We proudly serve a wide range of industries with customized compliance solutions:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Coffee className="w-5 h-5 text-orange-500 mt-1" />
                <span>Food & Beverages</span>
              </li>

              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-orange-500 mt-1" />
                <span>Manpower & Staffing</span>
              </li>

              <li className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-orange-500 mt-1" />
                <span>Banking & Financial Services</span>
              </li>

              <li className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-orange-500 mt-1" />
                <span>Education & EdTech</span>
              </li>

              <li className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-orange-500 mt-1" />
                <span>Consulting & Professional Services</span>
              </li>

              <li className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-orange-500 mt-1" />
                <span>Agriculture & Farming</span>
              </li>

              <li className="flex items-start gap-3">
                <Home className="w-5 h-5 text-orange-500 mt-1" />
                <span>Restaurant & Hospitality</span>
              </li>

              <li className="flex items-start gap-3">
                <ShoppingCart className="w-5 h-5 text-orange-500 mt-1" />
                <span>Retail & Pet Care Services and many more</span>
              </li>
            </ul>

            <p className="text-gray-700 mt-6 max-w-lg text-justify">
              Each industry has its own set of legal requirements, and we ensure full compliance with both central and state-specific labour laws for every sector.
            </p>
          </div>

          {/* RIGHT: Image column */}
          <div className="flex items-stretch">
            <div className="w-full rounded-lg overflow-hidden bg-white flex">
              <Image
                src="/services/industry.jpg"
                alt="Compliance software dashboard"
                width={900}
                height={600}
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

      {/* Cta Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto w-full max-w-[1700px] px-6 lg:px-8">
          <div className="rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-tight">
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
    </div>
  )
}

