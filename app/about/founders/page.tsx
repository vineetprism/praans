import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  Users,
  MapPin,
  Target,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Briefcase,
  Clock,
  Shield,
  TrendingUp,
  Globe,
  Zap,
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
  { icon: Zap, title: "Real-time Compliance Alerts", description: "Designed for your industry with automated notifications" },
  { icon: Globe, title: "Local Execution with Centralized Control", description: "Pan-India operations with unified management" },
  { icon: Shield, title: "Expert Legal Handling", description: "Professional management of inspections, notices, and legal issues" },
  { icon: TrendingUp, title: "Scalable Solutions", description: "Perfect for startups, MSMEs, and large enterprises" },
]


export default function FounderPage() {
  return (
    <div className="bg-gray-50">
      <section className="relative py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0" />
        <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-48 md:h-48 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-slate-800 leading-tight">
            Meet Our <span className="text-[#eb8535]">Founders</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The leadership behind Praans Consultech—Sandeep Kumar, Nitesh Kumar, and Allisha Sharma—blending deep labour-law expertise with product-first execution to make compliance effortless across India.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0" />
        <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40 " />
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-48 md:h-48" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-slate-800 leading-tight">
                  Meet Our Founder
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#eb8535] mb-4 md:mb-6 leading-relaxed">
                  Your Trusted Labour Law Consultant with Over 15 Years of Expertise
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  At Praans Consultech, our journey is led by a visionary labour law consultant who brings over 15 years of in-depth experience in managing and simplifying labour law compliance for businesses across India.
                </p>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {achievements.map((stat, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-4 md:p-6 text-center">
                      <stat.icon className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-1">{stat.number}</div>
                      <div className="text-xs md:text-sm text-gray-600 font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Founder Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-3xl bg-gradient-to-br from-orange-100 to-blue-100 shadow-2xl flex items-center justify-center">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center w-full h-full">
                      <Image
                        src="/services/MG.png"
                        alt="Sandeep Kumar — Founder, Praans Consultech"
                        width={800}
                        height={800}
                        priority
                        className="rounded-3xl object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-200/50 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200/50 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey (Education in text, now FULL WIDTH) */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Professional Journey</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
            </div>

            {/* Row 1: narrative + expertise card */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Narrative */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  Our founder is not only a legal expert but a trusted partner to countless organizations seeking
                  clarity and control over their statutory responsibilities. With a background in managing compliance
                  for over <strong>2,500 locations and more than 50,000 employees PAN India</strong>, our founder has
                  demonstrated exceptional capability in handling complex labour law operations across multiple states and sectors.
                </p>

                <div className="bg-gray-100 p-6 md:p-8 rounded-2xl border-l-4 border-[#eb8535]">
                  <p className="text-base md:text-lg font-semibold text-[#eb8535] mb-2">Previous Leadership Role</p>
                  <p className="text-base md:text-lg text-gray-700">
                    Formerly the <strong>Director of Legal & Compliance</strong> at a top logistics and courier
                    company, their leadership in large-scale operations laid the foundation for what Praans Consultech
                    stands for today—excellence, reliability, and innovation in labour law compliance.
                  </p>
                </div>

                <p className="text-base md:text-lg">
                  This rare combination of practical experience, legal acumen, and academic excellence positions our
                  founder among the <strong>top labour law consultants in India</strong>.
                </p>
              </div>

              {/* Right: Expertise Card */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8 md:p-10">
                  <div className="text-center mb-6">
                    <Briefcase className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 text-[#eb8535]" />
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Professional Expertise</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Multi-state compliance management</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Large-scale operations leadership</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Legal & compliance strategy</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Technology-driven solutions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Row 2: FULL-WIDTH Education */}
            <div className="mt-12 md:mt-16 rounded-2xl bg-gray-100 p-6 md:p-8 lg:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Education <span className="text-[#eb8535]">& Credentials</span></h3>
              <p className="mt-2 text-gray-700 max-w-none">
                Grounded in rigorous academics and ongoing research, building the toolkit that powers execution:
              </p>
              <ul className="mt-4 space-y-3 list-disc pl-5 text-gray-800 text-base md:text-lg max-w-none">
                <li><strong>B.Sc.</strong> — analytical problem-solving to decode complex regulatory issues.</li>
                <li>
                  <strong>LL.B. & LL.M.</strong> — deep command of Indian labour laws, employment regulations, and industrial relations.
                </li>
                <li>
                  <strong>PG Diploma in Labour Laws & Industrial Relations</strong> — strong foundations in statutory frameworks and IR.
                </li>
                <li>
                  <strong>XLRI Alumnus</strong> — advanced leadership and HR management insight from a top B-school.
                </li>
                <li>
                  <strong>Ph.D. (Pursuing)</strong> — active research in labour law and compliance systems to stay ahead of change.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Vision & Innovation */}
      <section className="py-16 md:py-20 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">From Field Expertise to Tech-Driven Solutions</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
                <CardContent className="p-8 md:p-10">
                  <div className="text-center mb-6">
                    <Target className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 text-orange-400" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
                  </div>
                  <blockquote className="text-base md:text-lg text-gray-200 leading-relaxed italic border-l-4 border-orange-400 pl-6">
                    "To empower businesses across India with accessible, affordable, and intelligent labour law compliance
                    solutions—ensuring legal safety while promoting employee welfare and operational efficiency."
                  </blockquote>
                </CardContent>
              </Card>

              <div className="space-y-6 text-gray-200">
                <p className="text-base md:text-lg leading-relaxed">
                  Understanding the growing need for automation and real-time compliance tracking, our founder envisioned a
                  smarter way for businesses to manage their statutory obligations. This led to the creation of{" "}
                  <strong>Praans Consultech's AI-based Compliance Management Software, launched in 2022</strong>.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Designed with real-world challenges in mind, this intelligent platform helps businesses automate compliance
                  tracking, receive deadline alerts, manage registers, and avoid penalties.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  They strongly believe that labour law compliance shouldn't be a burden but a well-managed system that
                  promotes fair practices, protects organizations, and upholds employee rights. This belief fuels everything
                  we do at Praans Consultech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Our Comprehensive Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our founder's hands-on experience and visionary approach have helped us become a leading labour law
              consultancy firm in India
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg bg-white hover:shadow-xl transition-all duration-300 group border-0">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Leadership Matters */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Why Our Founder's Leadership Matters</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              In a country where labour laws vary by state, enforcement is dynamic, and penalties are costly, having a knowledgeable
              and proactive labour law compliance consultant makes all the difference
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {keyStrengths.map((strength, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <strength.icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                        {strength.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{strength.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Card className="bg-[#eb8535] border-0 shadow-xl max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg md:text-xl font-semibold text-gray-200 leading-relaxed mb-6">
                  With a growing client base and PAN India presence, our founder continues to innovate and lead Praans Consultech as one of the most trusted labour law consultants in India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Recognition */}
      <section className="py-16 md:py-20 bg-gray-50">
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
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
