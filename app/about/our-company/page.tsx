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

const whyChooseUs = [
  {
    icon: Cpu,
    title: "AI-Driven Compliance",
    description: "Smart software for error-free filings & real-time alerts",
    highlight: "99.9% Accuracy"
  },
  {
    icon: Globe,
    title: "Pan-India Coverage",
    description: "Local experts in every state for seamless compliance",
    highlight: "All States & UTs"
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Solutions",
    description: "From registrations to litigation, we handle it all",
    highlight: "Complete Service"
  },
  {
    icon: UsersRound,
    title: "Expert Team",
    description: "Labour law specialists & HR professionals on your side",
    highlight: "Expert Support"
  },
  {
    icon: Headset,
    title: "Proactive Support",
    description: "Timely updates & guidance to prevent penalties",
    highlight: "24/7 Available"
  },
  {
    icon: Scaling,
    title: "Customized for You",
    description: "Scalable solutions for startups to enterprises",
    highlight: "All Business Sizes"
  },
]



const stats = [
  {
    icon: Users,
    number: "5000+",
    label: "Happy Clients",
    color: "text-blue-600"
  },
  {
    icon: MapPin,
    number: "36",
    label: "States & UTs Covered",
    color: "text-green-600"
  },
  {
    icon: Calendar,
    number: "2021",
    label: "Established",
    color: "text-purple-600"
  },
  {
    icon: Building2,
    number: "100%",
    label: "Success Rate",
    color: "text-orange-400"
  }
]

const certifications = [
  {
    name: "ISO Certified",
    description: "Quality Management System"
  },
  {
    name: "Startup India",
    description: "Government Recognition Program"
  },
  {
    name: "MSME Registered",
    description: "Micro, Small & Medium Enterprise"
  },
  {
    name: "Ministry of Corporate Affairs",
    description: "Government Approved Entity"
  }
]

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
      <section className="relative py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0" />
        <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-48 md:h-48 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-slate-800 leading-tight">
            About Praans <span className="text-[#eb8535]">Consultech</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simplifying Labour Law Compliance for businesses across India since 2021
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-base md:text-lg">
                Founded in 2021, <strong>Praans Consultech</strong> was born with a
                vision to simplify labour law compliance for businesses across India.
              </p>

              <p className="text-base md:text-lg">
                Our founders combined their expertise to create a
                <strong> tech-driven compliance platform</strong> that replaces
                outdated manual systems with intelligent automation.
              </p>

              <div className="bg-gray-100 p-6 rounded-2xl border-l-4 border-orange-400">
                <p className="text-base md:text-lg font-semibold text-[#eb8535] mb-1">
                  Milestone Achievement
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  In 2022, we launched our{" "}
                  <strong>AI-powered Compliance Management Software</strong>, setting
                  a new benchmark in efficiency and accuracy.
                </p>
              </div>

              <p className="text-base md:text-lg">
                Today, we serve clients nationwide, helping them stay compliant,
                minimize risks, and focus on growth while we handle the complexity.
              </p>
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl aspect-[4/3]">
                <Image
                  src="/about/about.jpg"
                  alt="Praans Consultech Story"
                  fill
                  priority={false}
                  className="rounded-2xl object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">
              Our Impact in Numbers
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted nationwide for delivering reliable compliance solutions and unmatched expertise.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition duration-300"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <stat.icon
                    className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 ${stat.color}`}
                  />
                  <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-white">
        {/* Soft background glows */}
        <div className="pointer-events-none absolute -left-32 top-24 h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-24 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">
              Our Mission and Vision
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
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

                <p className="mt-5 text-center text-gray-600 max-w-xl mx-auto">
                  To empower businesses with intelligent tools and expert support for labour law compliance.
                  Certifications ISO , Startup India, MSME, Ministry of corporate affairs.

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

                <p className="mt-5 text-center text-gray-600 max-w-xl mx-auto">
                  To become India’s most trusted and technology-driven partner in labour law compliance making complex regulations simple, accessible, and manageable for every business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Why Praans Consultech?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We take pride in being a single-window solution for all statutory and regulatory compliance needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg md:text-xl font-semibold text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12 md:mt-16">
            <Card className="bg-gradient-to-r from-orange-50 via-white to-blue-50 border-0 shadow-xl max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg md:text-xl font-semibold text-slate-800 leading-relaxed mb-6">
                  Whether you're a startup, SME, or a large enterprise with operations in multiple states, Praans Consultech is your reliable partner in compliance. Let us manage your compliance so you can manage your business with peace of mind.
                </p>
                <div className="mt-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Recognitions that validate our compliance-first operating model.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert, i) => (
                <Card
                  key={i}
                  className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200"
                >
                  {/* Top accent bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />

                  <CardContent className="p-6 md:p-7 pt-8 text-center">
                    {/* Icon badge */}
                    <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200/70 group-hover:scale-105 transition-transform">
                      <Award className="h-8 w-8 text-orange-600" />
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-slate-800">
                      {cert.name}
                    </h3>

                    <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6 max-w-8xl">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Media & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Third-party coverage and accolades that validate our execution.
            </p>
          </div>

          {/* Cards – scrollable preview, footer clickable */}
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

                  {/* Scrollable live preview (no Link wrapper, no pointer-events-none) */}
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