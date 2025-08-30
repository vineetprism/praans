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
      {/* Top Hero */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-slate-800">
            Our <span className="text-[#eb8535]">Founder</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The leadership behind Praans Consultech — Sandeep Kumar, Nitesh Kumar, and Allisha Sharma — blending deep labour-law expertise with product-first execution to make compliance effortless across India.
          </p>
        </div>
      </section>

      {/* Founder Hero (text + image) */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
            {/* LEFT: Text */}
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">Meet Our Founder</h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#eb8535]">Our reliable Labour Law Consultant with more than 15 years of experience</h3>

              <div className="prose max-w-none text-gray-700">
                <p className="leading-relaxed">
                  At Praans Consultech, our founder — a labour law adviser with over 15 years of experience in managing and streamlining labour law compliance for businesses PAN India — is driving our mission. Our founder is a trusted partner to numerous businesses looking for clarity and control over their statutory responsibilities, in addition to being a legal expert.
                </p>

                <p className="leading-relaxed">
                  They’ve managed compliance across multiple states and industries for 2,500+ locations and 50,000+ people PAN India. Praans Consultech stands for dependability, excellence and innovation in labour law compliance, built on leadership that ran legal & compliance for large logistics and courier firms.
                </p>
              </div>
            </div>

            {/* RIGHT: Image (responsive) */}
            <div className="flex items-start justify-center">
              <div className="relative w-full max-w-[420px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px]">
                <div className="w-full aspect-[1/1] rounded-3xl overflow-hidden shadow-sm">
                  <Image
                    src="/services/MG.png"
                    alt="Sandeep Kumar — Founder, Praans Consultech"
                    width={1200}
                    height={1200}
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* decorative blobs - keep them but non-intrusive on small screens */}
                <div className="hidden md:block absolute -top-4 -left-4 w-24 h-24 bg-orange-200/40 rounded-full blur-2xl" />
                <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl" />
              </div>
            </div>
          </div>

          {/* Education card aligned with content width */}
          <div className="max-w-6xl mx-auto mt-10 md:mt-12">
            <div className="w-full bg-gray-100 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">Education <span className="text-[#eb8535]">&amp; Credentials</span></h4>
              <p className="mt-3 text-gray-700">Grounded in rigorous academics and ongoing research, building the toolkit that powers execution:</p>

              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-gray-800 text-sm md:text-base">
                <li><strong>B.Sc.</strong> — analytical problem-solving to decode complex regulatory issues.</li>
                <li><strong>LL.B. &amp; LL.M.</strong> — deep command of Indian labour laws, employment regulations, and industrial relations.</li>
                <li><strong>PG Diploma in Labour Laws &amp; Industrial Relations</strong> — strong foundations in statutory frameworks and IR.</li>
                <li><strong>XLRI Alumnus</strong> — advanced leadership and HR management insight from a top B-school.</li>
                <li className="md:col-span-2"><strong>Ph.D. (Pursuing)</strong> — active research in labour law and compliance systems to stay ahead of change.</li>
              </ul>

              <p className="mt-4 text-center text-gray-800 font-semibold text-sm md:text-base">Our founder is one of the leading labour law advisors in India — a unique blend of real-world experience, legal knowledge, and academic distinction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* From Field Expertise to Tech-Driven Solutions */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">From Field Expertise to Tech-Driven Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              To meet the growing need for real-time compliance tracking and automation, our founder developed a smart way for businesses to manage their statutory obligations. Praans Consultech launched its AI-based Compliance Management Software in 2022 — designed with real-world challenges in mind. The platform helps organisations automate compliance tracking, receive deadline alerts, maintain registers, and avoid penalties.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Backed by hands-on field experience and a visionary approach, this solution helped Praans Consultech become a leading labour-law consultancy in India, offering focused services that combine legal expertise with technology.
            </p>

            {/* Services grid: responsive 1 → 2 → 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {services.map((svc, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">
                  <h5 className="text-base md:text-lg font-semibold text-slate-800 mb-2">{svc.title}</h5>
                  <p className="text-sm text-gray-600">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Innovation */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Our Vision</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full mt-3"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <Card className="bg-gray-50 border-0 text-gray-700">
                <CardContent className="p-6 md:p-8">
                  <div className="text-center mb-4">
                    <Target className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 text-orange-400" />
                    <h4 className="text-lg md:text-xl font-semibold mb-2">Our founder's vision is both practical and impactful:</h4>
                  </div>
                  <blockquote className="text-sm md:text-base text-gray-600 leading-relaxed italic border-l-4 border-orange-400 pl-4 text-justify">
                    "To empower businesses across India with accessible, affordable, and intelligent labour law compliance solutions—ensuring legal safety while promoting employee welfare and operational efficiency."
                  </blockquote>
                </CardContent>
              </Card>

              <div className="space-y-4 text-gray-700">
                <h4 className="text-xl md:text-2xl font-bold">Simplifying Compliance, Empowering Businesses</h4>
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  They strongly believe that labour law compliance shouldn't be a burden but a well-managed system that promotes fair practices, protects organizations, and upholds employee rights. This belief fuels everything we do at Praans Consultech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Leadership Matters */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-6 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Why Our Founder's Leadership Matters</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto mt-3">
              In a country where labour laws vary by state, enforcement is dynamic, and penalties are costly, having a knowledgeable and proactive labour law compliance consultant makes all the difference.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* strengths grid responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {keyStrengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <Card key={index} className="group hover:shadow-md transition-all duration-300 border-0 shadow-sm">
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <div className="flex flex-col items-start gap-2">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-[#eb8535]" />
                      </div>
                      <h4 className="text-sm md:text-base font-semibold text-slate-700">{strength.title}</h4>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Card className="bg-gray-100 max-w-2xl mx-auto">
              <CardContent className="p-4 md:p-6">
                <p className="text-base md:text-lg font-semibold text-gray-600 leading-relaxed mb-0 text-center">Our founder continues to lead Praans Consultech as one of the most reputable and reliable labour-law consultancies in India, with a fast-growing network and PAN-India presence.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Recognition */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Featured Articles</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-3"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Third-party coverage and accolades that validate our execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {media.map((item, idx) => (
              <Card
                key={idx}
                className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-sm ring-1 ring-black/5"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />

                <CardContent className="p-0 flex flex-col h-full">
                  <div className="px-4 pt-4 pb-2 flex items-start justify-between">
                    <span className="text-xs font-bold bg-orange-100 text-[#eb8535] px-2 py-1 rounded-full">{item.type}</span>
                    <Link href={item.link!} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-2">
                      Open article <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* responsive iframe heights */}
                  <div className="w-full border-t">
                    <iframe
                      src={item.link!}
                      className="w-full h-40 sm:h-56 md:h-[420px] lg:h-[520px] xl:h-[600px] border-0"
                      loading="lazy"
                      sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                      referrerPolicy="no-referrer-when-downgrade"
                      scrolling="yes"
                      title={item.title}
                    />
                  </div>

                  <Link href={item.link!} target="_blank" rel="noopener noreferrer" className="p-4 block hover:bg-gray-50 transition-colors" aria-label={`Open article: ${item.title}`}>
                    <div className="mb-2 flex items-start justify-between">
                      <span className="text-xs text-orange-400 font-medium">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1 leading-tight">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.source}</p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Looking for a reliable partner to manage your labour law compliance?</h3>
          <p className="text-base md:text-lg mb-6 max-w-3xl mx-auto opacity-90">Get in touch with Praans Consultech — Led by India's trusted labour law expert</p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-2xl mx-auto">
            <Button className="bg-[#eb8535] hover:bg-orange-400 text-white text-base md:text-lg px-5 md:px-8 py-3 md:py-4 rounded-2xl w-full sm:w-auto flex items-center justify-center gap-2">
              Get Expert Consultation <ArrowRight className="w-4 h-4" />
            </Button>

            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-800 text-base md:text-lg px-5 md:px-8 py-3 md:py-4 rounded-2xl w-full sm:w-auto">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
