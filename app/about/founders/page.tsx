import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  Users,
  MapPin,
  Target,
  ArrowRight,
  ExternalLink,
  Clock,
  Gavel,
  Bell,
  Server,
  ClipboardCheck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Meet Our Founder | Praans Consultech",
  description:
    "Meet our visionary founder with over 15 years of expertise in labour law compliance, managing 2,500+ locations and 50,000+ employees across India.",
  keywords:
    "founder praans consultech, labour law expert, compliance consultant, XLRI alumnus, legal expert india, labour law compliance, HR solutions, business leadership, founder profile"
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
      "Praans Consultech: Empowering Businesses with Seamless Compliance Solutions",
    source: "CEO AsiaConnect Magazine",
    year: "2025",
    type: "Latest news",
    link: "https://asiaconnectmagazine.com/praans-consultech-empowering-businesses-with-seamless-compliance-solutions/",
  },
  {
    title:
      "The Visionary Who Left Corporate Success to Empower Everyday Entrepreneurs",
    source: "Hindustan Metro Magazine",
    year: "2025",
    type: "Success Story",
    link: "https://www.hindustanmetro.com/the-visionary-who-left-corporate-success-to-empower-everyday-entrepreneurs/",
  },
];

const achievements = [
  { icon: Clock, number: "15+", label: "Years of Expertise", color: "text-blue-600" },
  { icon: MapPin, number: "2,500+", label: "Locations Managed", color: "text-green-600" },
  { icon: Users, number: "50,000+", label: "Employees Covered", color: "text-purple-600" },
  { icon: Building2, number: "100%", label: "PAN India Coverage", color: "text-orange-400" },
]

const services = [
  { title: "Labour Law Registrations", description: "Shops & Establishments, CLRA, ESIC, EPF, and more" },
  { title: "AI-Powered Compliance Software", description: "Monitor and manage statutory obligations seamlessly" },
  { title: "Compliance Outsourcing", description: "Seamless labour law management from Start to Finish" },
  { title: "Labour Law Litigation Support", description: "Legal representation and case management" },
  { title: "Advisory Services", description: "Expert guidance on labour law strategy, audits, and reforms" },
  { title: "Audit and Inspection Handling", description: "Complete support during statutory audits, inspections, and departmental visits" },
]


const keyStrengths = [
  {
    title: "Local executions with centralized control",
    icon: MapPin,
  },
  {
    title: "Expert handling of notices, legal issues, and inspections",
    icon: Gavel,
  },
  {
    title: "Real-time compliance alerts tailored to your industry",
    icon: Bell,
  },
  {
    title: "Scalable solutions for large businesses, MSMEs and startups",
    icon: Server,
  },
  {
    title: "Smooth readiness for auditing and inspections",
    icon: ClipboardCheck,
  },
];


export default function FounderPage() {
  return (
    <div className="bg-gray-50">
      <section className="relative py-16 md:py-20 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0" />
        <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-48 md:h-48 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-slate-800 leading-tight">
            Our <span className="text-[#eb8535]">Founder</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The leadership behind Praans Consultech—Sandeep Kumar, Nitesh Kumar, and Allisha Sharma—blending deep labour-law expertise with product-first execution to make compliance effortless across India.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-20 bg-white">
        <div className="absolute inset-0" />
        <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40" />
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-48 md:h-48" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* LEFT: Text */}
            <div className="space-y-6 md:space-y-8 pl-4 md:pl-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-slate-800 leading-tight">
                Meet Our Founder
              </h1>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#eb8535] mb-4 leading-relaxed">
                Our reliable Labour Law Consultant with more than 15 years of experience
              </h2>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify break-words whitespace-normal">
                At Praans Consultech, our founder — a labour law adviser with over 15 years of experience in managing and streamlining
                labour law compliance for businesses PAN India — is driving our mission. Our founder is a trusted partner to
                numerous businesses looking for clarity and control over their statutory responsibilities, in addition to being a legal expert.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify break-words whitespace-normal">
                They’ve managed compliance across multiple states and industries for 2,500+ locations and 50,000+ people PAN India.
                Praans Consultech stands for dependability, excellence and innovation in labour law compliance, built on leadership
                that ran legal & compliance for large logistics and courier firms.
              </p>
            </div>

            {/* RIGHT: Image - responsive and cannot force horizontal overflow */}
            <div className="flex justify-center items-start">
              <div className="relative flex-shrink-0 w-full max-w-[400px]">
                <div className="w-full aspect-[1/1] rounded-3xl overflow-hidden">
                  <Image
                    src="/services/MG.png"
                    alt="Sandeep Kumar — Founder, Praans Consultech"
                    width={800}
                    height={800}
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-200/50 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200/50 rounded-full blur-xl" />
              </div>
            </div>
          </div>

          {/* EDUCATION: keep inside the same container (no nested .container) */}
          <div className="max-w-6xl mx-auto mt-12 md:mt-16">
            <div
              role="region"
              aria-labelledby="education-heading"
              className="w-full bg-gray-100 rounded-2xl p-6 md:p-8 lg:p-10"
            >
              <h3 id="education-heading" className="text-2xl md:text-3xl font-bold text-slate-800">
                Education <span className="text-[#eb8535]">&amp; Credentials</span>
              </h3>

              <p className="mt-2 text-gray-700">
                Grounded in rigorous academics and ongoing research, building the toolkit that powers execution:
              </p>

              <ul className="mt-4 space-y-3 list-disc pl-6 text-gray-800 text-base md:text-lg">
                <li><strong>B.Sc.</strong> — analytical problem-solving to decode complex regulatory issues.</li>
                <li><strong>LL.B. &amp; LL.M.</strong> — deep command of Indian labour laws, employment regulations, and industrial relations.</li>
                <li><strong>PG Diploma in Labour Laws &amp; Industrial Relations</strong> — strong foundations in statutory frameworks and IR.</li>
                <li><strong>XLRI Alumnus</strong> — advanced leadership and HR management insight from a top B-school.</li>
                <li><strong>Ph.D. (Pursuing)</strong> — active research in labour law and compliance systems to stay ahead of change.</li>
              </ul>

              <p className="mt-4 text-center text-gray-800 font-semibold text-base md:text-lg">
                Our founder is one of the leading labour law advisors in India — a unique blend of real-world experience, legal knowledge, and academic distinction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From Field Expertise to Tech-Driven Solutions */}
      <section className="relative py-16 md:py-20 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto space-y-8 text-center">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              From Field Expertise to Tech-Driven Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>

            {/* Intro Paragraphs — now full width of the parent (same as card grid) */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed w-full mx-auto text-justify">
              To meet the growing need for real-time compliance tracking and automation, our founder developed a smart way for businesses to manage their statutory obligations. Praans Consultech launched its AI-based Compliance Management Software in 2022 — designed with real-world challenges in mind. The platform helps organisations automate compliance tracking, receive deadline alerts, maintain registers, and avoid penalties.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed w-full mx-auto text-justify">
              Backed by hands-on field experience and a visionary approach, this solution helped Praans Consultech become a leading labour-law consultancy in India, offering focused services that combine legal expertise with technology.
            </p>

            {/* Service List */}
            <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
              <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Labour Law Registrations</h3>
                <p className="text-gray-600 text-sm">
                  Shops & Establishments, CLRA, ESIC, EPF and other statutory registrations.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">AI-Powered Compliance Software</h3>
                <p className="text-gray-600 text-sm">
                  Monitor and manage statutory obligations seamlessly with automated alerts and register management.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Compliance Outsourcing</h3>
                <p className="text-gray-600 text-sm">
                  End-to-end labour law management — from registrations to routine compliance execution.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Labour Law Litigation Support</h3>
                <p className="text-gray-600 text-sm">
                  Legal representation and case management for employment and industrial disputes.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Advisory Services</h3>
                <p className="text-gray-600 text-sm">
                  Strategic guidance on labour law policy, audits, process redesign and regulatory reforms.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Audit & Inspection Handling</h3>
                <p className="text-gray-600 text-sm">
                  Complete support during statutory audits, inspections and departmental visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Vision & Innovation */}
      <section className="py-16 md:py-20 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0" />
        <div className="absolute top-20 left-10 w-32 h-32  rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our Vision</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <Card className="bg-gray-50 backdrop-blur-sm border-0 text-gray-700">
                <CardContent className="p-8 md:p-10">
                  <div className="text-center mb-6">
                    <Target className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 text-orange-400" />
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">Our founder's vision is both practical and impactful:</h3>
                  </div>
                  <blockquote className="text-base md:text-lg text-gray-600 leading-relaxed italic border-l-4 border-orange-400 pl-6 text-justify">
                    "To empower businesses across India with accessible, affordable, and intelligent labour law compliance
                    solutions—ensuring legal safety while promoting employee welfare and operational efficiency."
                  </blockquote>
                </CardContent>
              </Card>

              <div className="space-y-6 text-gray-700">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Simplifying Compliance, Empowering Businesses</h2>
                <p className="text-base md:text-lg leading-relaxed text-justify">
                  They strongly believe that labour law compliance shouldn't be a burden but a well-managed system that
                  promotes fair practices, protects organizations, and upholds employee rights. This belief fuels everything
                  we do at Praans Consultech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Leadership Matters */}
      <section className="py-16 md:py-20 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">
              Why Our Founder's Leadership Matters
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto text-justify">
              In a country where labour laws vary by state, enforcement is dynamic, and penalties are costly, having a knowledgeable
              and proactive labour law compliance consultant makes all the difference.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {keyStrengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-md transition-all duration-300 border-0 shadow-sm"
                >
                  <CardContent className="pl-4 pr-4 md:pl-5 md:pr-5">
                    {/* Icon above title (stacked) */}
                    <div className="flex flex-col items-start">
                      <div className="mb-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center shadow-sm">
                          <Icon className="w-5 h-5 text-[#eb8535]" aria-hidden />
                        </div>
                      </div>

                      <h3 className="text-base md:text-lg text-slate-700 font-semibold mb-1 group-hover:text-orange-600 transition-colors duration-300">
                        {strength.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Card className="bg-gray-100 max-w-4xl mx-auto">
              <CardContent className="p-3 md:p-4">
                <p className="text-lg md:text-xl font-semibold text-gray-600 leading-relaxed mb-0 text-center">
                  Our founder continues to lead Praans Consultech as one of the most reputable and reliable labour-law consultancies in India, with a fast-growing network and PAN-India presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Recognition */}
      <section className="py-16 md:py-20 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-8xl">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Featured Articles
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

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Looking for a reliable partner to manage your labour law compliance?
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Get in touch with Praans Consultech — Led by India's trusted labour law expert
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-2xl mx-auto">
            <Button className="bg-[#eb8535] hover:bg-orange-400 text-white text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 shadow-2xl hover:shadow-orange-500/25 rounded-2xl font-bold w-full sm:w-auto cursor-pointer" aria-label="get expert consultation">
              Get Expert Consultation
              <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 bg-transparent rounded-2xl font-bold w-full sm:w-auto cursor-pointer"
              aria-label="schedule a demo"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
