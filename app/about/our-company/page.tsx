import { Card, CardContent } from "@/components/ui/card"
import {
  Eye,
  Cpu,
  Globe,
  ShieldCheck,
  UsersRound,
  Headset,
  Scaling,
  Award,
  Building2,
  Calendar,
  Users,
  MapPin,
  ExternalLink,
  Shield,
  Settings,
  Layers,
  CheckCircle,
  Briefcase,
  CheckCircle2,
  BarChart3,
  Rocket,
  Building,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "About Us | Praans Consultech",
  description: "Learn about Praans Consultech's mission to simplify labour law compliance across India with our AI-driven platform and expert legal team.",
  keywords: "about praans consultech, labour law experts, compliance software company, sandeep kumar, nitesh kumar, allisha sharma, AI-driven compliance, labour law solutions, legal experts india"
}


type MediaItem = {
  title: string;
  source: string;
  year: string;
  type: string;
  link?: string;
  image?: string;
};

const media: MediaItem[] = [
  {
    title:
      "Shaping the Future of Labour Law and Business Registration",
    source: "CEO India Magazine",
    year: "2025",
    type: "Feature",
    link: "https://ceoindiamagazine.com/praans-consultech-shaping-the-future-of-labour-law-and-business-registration/",
  },
  {
    title:
      "Empowering India's Businesses Through Compliance: The Success Story of Praans Consultech",
    source: "Success India Magazine",
    year: "2025",
    type: "Success Story",
    link: "https://successmagazine.in/empowering-indias-businesses-through-compliance-the-success-story-of-praans-consultech/",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-10 2xl:py-24 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0" />
        <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-48 md:h-48 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-slate-800 leading-tight">
            About Praans <span className="text-[#eb8535]">Consultech</span>
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-10 md:py-20 lg:py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-6 text-slate-800">
              Our Story
            </h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed">
              <p className="text-base md:text-lg text-justify">
                Founded in 2021, <strong className="text-[#eb8535]">Praans Consultech</strong> has become as one of India’s most trusted labour law consultants, technology-driven solution providers and compliance partners. With the motive to bring the labour law compliance in streamline and simplified it for businesses in India. Together we bring innovations, technology and legal expertise on ground level executions to ensure that organisations of any kind and sizes remain fully compliant with ever-evolving labour laws.
              </p>

              <p className="text-base md:text-lg text-justify">
                At <strong className="text-[#eb8535]">Praans Consultech</strong>, Just filing returns and meeting deadlines is not  about managing compliance, it is much more than that and we understand it. It’s about risk mitigations, ensuring legal accuracy, creating a smooth operational framework that supports growth and protection against penalties for business. Our founders, <strong><em>Mr. Sandeep Kumar, Mr. Nitesh Kumar, and Ms. Allisha Sharma,</em></strong> identified the growing gap in how businesses managed multi-location compliance. The process we were known in past is usually slow, error prone and so we were not able to keeps with whole regulatory landscape. With this understanding, they joined hands to create a single-window solution that would transform the way businesses handle compliance.
              </p>
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center lg:justify-end order-last lg:order-none">
              <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl 
                        h-56 sm:h-72 md:h-[420px] lg:h-[600px]">
                <Image
                  src="/about/about.webp"
                  alt="Praans Consultech Story"
                  fill
                  priority={false}
                  className="rounded-2xl object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1280px) 60vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="relative py-8 md:py-10 lg:py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto space-y-8">

            {/* Heading + Paragraphs */}
            <div className="space-y-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-6 text-slate-800">
                Our Journey
              </h2>
              <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>

              <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed text-justify">
                <p>
                  When Praans Consultech started in <span className="font-semibold text-[#eb8535]">2021</span>, our aim was simple and precise – to become a trusted compliance partner for Indian businesses. Our core team brought together years of industry experience in labour laws, HR operations, and corporate legal advisory. They understood how errors in compliance could lead to heavy penalties, disrupt business operations, and cause reputational damage.
                </p>
                <p>
                  To counter these challenges, our team developed <span className="font-semibold text-[#eb8535]">AI-based Intelligent Compliance Management Software</span> by 2023. It automates filings, generates real-time alerts, simplifies workflows, and monitors deadlines. A breakthrough that reduced the burden of spreadsheets and manual registers, while enabling seamless multi-state compliance.
                </p>
                <p>
                  Since then, we have expanded rapidly, serving clients across all states and union territories of India. Praans Consultech has emerged as a trusted compliance partner for start-ups, SMEs, and large enterprises across industries – a safe and faster way to manage compliance.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative border-l-2 border-orange-500 ml-6">
              {/* 2022 */}
              <div className="mb-8 ml-6 relative">
                <span className="absolute -left-8 top-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></span>
                <h3 className="text-lg font-semibold text-slate-800">2022</h3>
                <p className="text-gray-600">Company Founded</p>
              </div>

              {/* 2023 */}
              <div className="mb-8 ml-6 relative">
                <span className="absolute -left-8 top-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></span>
                <h3 className="text-lg font-semibold text-slate-800">2023</h3>
                <p className="text-gray-600">Recognized as Start-up India and Compliance Software Launched</p>
              </div>

              {/* 2024 */}
              <div className="mb-8 ml-6 relative">
                <span className="absolute -left-8 top-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></span>
                <h3 className="text-lg font-semibold text-slate-800">2024</h3>
                <p className="text-gray-600">PAN India Reach for Labour Law Compliances</p>
              </div>

              {/* 2025 */}
              <div className="ml-6 relative">
                <span className="absolute -left-8 top-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></span>
                <h3 className="text-lg font-semibold text-slate-800">2025</h3>
                <p className="text-gray-600">Awarded as the Best Labour Law Consultant, Certified by ISO, and Launched our AI Chatbot for Labour Law</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 md:py-20 lg:pu-10 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">

          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Our Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At <span className="font-semibold text-[#eb8535]">Praans Consultech</span>, we are honoured to provide
              end-to-end labour law solutions under one portal.
              Our services include comprehensive support designed to
              keep your business fully compliant with ever-evolving regulations.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 border border-gray-100 transition">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                AI-Based Compliance Management Software
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Smart automation for error-free compliance, real-time alerts,
                digital record maintenance, and compliance tracking.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 border border-gray-100 transition">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Labour Law Registrations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complete assistance and support in obtaining registrations
                and licenses under applicable laws across India.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 border border-gray-100 transition">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Compliance Outsourcing Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ease of doing business: you focus on growth, while we manage
                all your compliance requirements.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 border border-gray-100 transition">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Litigation Support & Legal Representation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional support for disputes, complex labour law cases,
                and inspections with expert representation.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 border border-gray-100 transition">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Labour Law Advisory Services
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Risk mitigation and strategic guidance to ensure long-term
                compliance and legal accuracy.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 border border-gray-100 transition">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Audit and Inspection Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated on-ground team for audits and managing labour
                inspections seamlessly.
              </p>
            </div>
          </div>

          {/* Closing Note */}
          <div className="text-center mt-12">
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Considering all the above services, your business is in safe hands
              — ensuring smooth operations, zero compliance gaps, and strong risk
              mitigation across India.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 lg:py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Why Choose Praans Consultech?</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Tech-first. Reliable. Battle-tested expertise. We own the compliance problem so you can focus on growth.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6 rounded-full" />
          </div>

          {/* Value Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <Cpu className="w-10 h-10 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">AI-Driven Compliance</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Zero-error workflows with automated filings, real-time alerts, and digital record tracking.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <Globe className="w-10 h-10 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">PAN-India Coverage</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Seamless compliance ops across states & union territories—one window, nationwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <Layers className="w-10 h-10 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">End-to-End Solutions</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    From registrations to litigation support—we manage the full labour-law lifecycle.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <Users className="w-10 h-10 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Expert Team</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Labour-law specialists, legal advisors, and HR pros on call to de-risk your operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-10 h-10 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Proactive Support</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Timely updates, preventive actions, and regulatory insights—penalties avoided, always.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <Settings className="w-10 h-10 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Custom-Fit for You</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Scalable solutions tailored for startups, SMEs, and enterprises—no one-size-fits-all.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Assurance Note */}
          <div className="text-center mt-12">
            <p className="text-base md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              By all the above mentioned factors, we can assure you that you now don’t have to worry about compliance lapse; our clients never have to worry about it.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-20 lg:py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          {/* Heading */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full" />
          </div>

          {/* Content */}
          <div className="text-gray-600 text-base md:text-lg leading-relaxed text-justify space-y-6">
            <p>
              <span className="font-semibold text-[#eb8535]">Praans Consultech</span> is powered by a dynamic team of legal experts, HR specialists,
              and technology professionals. We strongly believe that legal knowledge is more effective
              when combined with modern tools and practical execution.
            </p>
            <p>
              Our strength lies not just in knowledge, but in the <strong>practical application of the subject</strong>.
              With a team spread across India, our compliance officers ensure local expertise with
              centralized efficiency, helping businesses stay fully compliant and future-ready.
            </p>
          </div>
        </div>
      </section>


      {/* Vision & Mission */}
      <section className="relative overflow-hidden py-16 md:py-20 lg:py-10 bg-gray-50">
        {/* Soft background glows */}
        <div className="pointer-events-none absolute -left-32 top-24 h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-24 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">
              Our Mission and Vision
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-justify">
              Guiding principles that drive our commitment to compliance excellence and
              business wellbeing
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Mission */}
            <Card className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200 pt-10">
              {/* top colored strip */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[#2c3454] rounded-t-2xl" />
              <CardContent className="p-8">
                {/* Icon badge */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#bec8dd]">
                  <Shield className="h-8 w-8 text-[#2c3454]" />
                </div>

                <h3 className="text-center text-2xl font-extrabold tracking-wide text-[#2c3454]">
                  OUR MISSION
                </h3>

                <p className="mt-5 text-center text-gray-600 max-w-xl mx-auto text-justify">
                  To enable companies to concentrate on its growth while we handle the intricacies of regulations by providing them with smart tools, knowledgeable assistance and smooth compliance services.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200 pt-10">
              {/* top colored strip */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[#eb8535] rounded-t-2xl" />
              <CardContent className="p-8">
                {/* Icon badge */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50">
                  <Eye className="h-8 w-8 text-[#eb8535]" />
                </div>

                <h3 className="text-center text-2xl font-extrabold tracking-wide text-[#eb8535]">
                  OUR VISION
                </h3>

                <p className="mt-5 text-center text-gray-600 max-w-xl mx-auto text-justify">
                  To establish ourselves as India’s most reliable and technologically advanced labour aw compliance partner, while simplifying, facilitating and managing the requirements for all kinds of businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 lg:py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Certifications & Recognitions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Recognitions that validate our compliance-first operating model.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {/* ISO Certification */}
              <div className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="p-6 md:p-7 pt-8 text-center">
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200/70">
                    <CheckCircle className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800">ISO Certification</h3>
                  <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
                    Ensures our services maintain the highest quality standards and reliability.
                  </p>
                </div>
              </div>

              {/* Startup India */}
              <div className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="p-6 md:p-7 pt-8 text-center">
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200/70">
                    <Award className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800">Startup India Recognition</h3>
                  <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
                    Certified under the flagship initiative of the Government of India.
                  </p>
                </div>
              </div>

              {/* MSME Certification */}
              <div className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="p-6 md:p-7 pt-8 text-center">
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200/70">
                    <Briefcase className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800">MSME Certification</h3>
                  <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
                    Recognition as a rapidly growing micro, small, and medium enterprise.
                  </p>
                </div>
              </div>

              {/* MCA Registration */}
              <div className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="p-6 md:p-7 pt-8 text-center">
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200/70">
                    <Building2 className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800">MCA Registration</h3>
                  <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
                    Accredited under the Ministry of Corporate Affairs as a reliable compliance partner.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Labour Law Compliance Matters Section */}
      <section className="py-16 md:py-20 lg:10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Why Labour Law Compliance Matters
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full" />
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            <p>
              India has extensive labour laws and rules that are constantly evolving. Businesses must comply with
              numerous central and state-level legislations such as the <strong>Factories Act, Shops & Establishments Act,
                Minimum Wages Act, Provident Fund Act, Employees’ State Insurance Act, CLRA Act, Payment of Bonus Act</strong>,
              and many others.
            </p>

            <p className="font-medium text-slate-800">If compliance is not maintained, it can lead to:</p>

            {/* Bullet List */}
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Heavy financial penalties and fines</li>
              <li>Court battles and prolonged legal disputes</li>
              <li>Damage to business reputation</li>
              <li>Operational disruptions during inspections</li>
            </ul>

            <p>
              This is where <span className="font-semibold text-[#eb8535]">Praans Consultech</span> steps in as a trusted
              compliance partner—ensuring your business remains compliant, safeguards its brand,
              and continues to grow without disruptions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 md:py-20 lg:py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Promise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are more than just consultants, we, Praans Consultech, are partners in your growth journey of your business. We promise you to:
            </p>
          </div>

          {/* Promises */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-orange-600 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                Provide <strong>accurate, reliable, and timely</strong> compliance services.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Cpu className="w-6 h-6 text-orange-600 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                Offer <strong>technology-driven solutions</strong> that streamline your processes.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Layers className="w-6 h-6 text-orange-600 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                Assure <strong>end-to-end support</strong>—from registrations to litigation.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-orange-600 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                Safeguard your business from <strong>fines</strong> and <strong>compliance mismanagement</strong>.
              </p>
            </div>
          </div>

          {/* Closing Note */}
          <div className="text-center mt-10">
            <p className="text-base md:text-lg text-slate-800 max-w-3xl mx-auto leading-relaxed">
              Legal compliance should never be a burden—it should <strong>enable your growth</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Who serve */}
      <section className="py-16 md:py-20 lg:py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Who We Serve</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {/* At <span className="font-semibold text-[#eb8535]">Praans Consultech</span>, we provide tailored compliance solutions for businesses of all sizes—because compliance is critical, no matter the scale. */}
              We provide our services to:
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {/* Startups */}
            <div className="text-center bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition">
              <Rocket className="w-10 h-10 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800">Startups</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                At reasonably priced compliance to guide and assist young businesses to get started its business on right track.
              </p>
            </div>

            {/* SMEs */}
            <div className="text-center bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition">
              <BarChart3 className="w-10 h-10 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800">SMEs</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                With maximum risk mitigations and simplifying the complexity of compliance for the growth of business.
              </p>
            </div>

            {/* Large Enterprises */}
            <div className="text-center bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition">
              <Building className="w-10 h-10 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800">Large Enterprises</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Scalable solutions for operations with multiple locations throughout India.
              </p>
            </div>
          </div>

          {/* Closing Note */}
          <div className="text-center mt-12">
            <p className="text-base md:text-lg text-slate-800 max-w-3xl mx-auto leading-relaxed">
              <strong>Praans Consultech</strong> — the name you can trust on in compliance partner, regardless of the size of the business.
            </p>
          </div>
        </div>
      </section>

      {/* Media & Awards Section */}
      <section className="py-16 md:py-20 lg:py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-8xl">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Media & Awards
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Praans Consultech has quickly earned recognition in the industry for its
              labour law consulting and compliance management services.
            </p>
          </div>

          {/* Highlights List */}
          <div className="max-w-3xl mx-auto mb-12 space-y-3 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>🏆 Acknowledged as the <strong>Best Labour Law Consultant</strong> for offering comprehensive compliance solutions.</p>
            <p>🏆 Awarded for <strong>Excellence in Business Compliance</strong> for helping businesses streamline operations and avoid fines.</p>
            <p>🏆 Recognized as a <strong>technologically advanced pioneer</strong> in the field of labour law compliance at leading business forums.</p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
            {media.map((item, idx) => (
              <Card
                key={idx}
                className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-sm ring-1 ring-black/5"
              >
                {/* top accent bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />

                <CardContent className="p-0 flex flex-col h-full">
                  {/* Header row (CTA) */}
                  <div className="px-6 pt-4 pb-2 flex items-start justify-between">
                    <span className="text-xs font-bold bg-orange-100 text-[#eb8535] px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                    <Link
                      href={item.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="for reading articles"
                      className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-2"
                    >
                      Open article
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Scrollable live preview */}
                  <div className="w-full bg-white border-t">
                    <iframe
                      src={item.link!}
                      className="w-full h-[520px] md:h-[560px] lg:h-[600px] border-0"
                      loading="lazy"
                      sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                      referrerPolicy="no-referrer-when-downgrade"
                      scrolling="yes"
                    />
                  </div>

                  {/* Footer meta (clickable) */}
                  <Link
                    href={item.link!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 block hover:bg-gray-50 transition-colors"
                    aria-label={`Open article: ${item.title}`}
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <span className="text-xs text-orange-400 font-medium">{item.year}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-1 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">{item.source}</p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}