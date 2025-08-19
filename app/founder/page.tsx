import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase, Newspaper, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Meet Our Founder | Praans Consultech",
  description:
    "Learn about the 15+ years of expertise and visionary leadership behind Praans Consultech, led by one of India's top labour law consultants.",
  keywords: "labour law consultant, labour law expert india, compliance expert, founder praans consultech",
}

const education = [
  { degree: "B.Sc.", description: "Cultivated analytical skills to decode complex regulatory issues." },
  { degree: "LL.B. and LL.M.", description: "Comprehensive legal understanding of Indian labour laws." },
  {
    degree: "PG Diploma in Labour Laws & Industrial Relations",
    description: "Built strong foundations in labour laws.",
  },
  { degree: "XLRI Alumnus", description: "Gained advanced leadership and HR management insights." },
  { degree: "Ph.D. (Pursuing)", description: "Researching evolving labour law and compliance frameworks." },
]

const services = [
  "Labour Law Registrations",
  "AI-Powered Compliance Software",
  "Compliance Outsourcing",
  "Labour Law Litigation Support",
  "Advisory Services",
  "Audit and Inspection Handling",
]

export default function FounderPage() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Praans Consultech"
                  width={180}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/services" className="text-gray-600 hover:text-orange-500 transition-colors">
                Services
              </Link>
              <Link href="/acts" className="text-gray-600 hover:text-orange-500 transition-colors">
                Resources
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Meet Our Founder</h1>
              <h2 className="text-2xl text-orange-600 mb-8">
                Your Trusted Labour Law Consultant with Over 15 Years of Expertise
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Praans Consultech, our journey is led by a visionary labour law consultant who brings over 15 years
                of in-depth experience in managing and simplifying labour law compliance for businesses across India.
                Our founder is not only a legal expert but a trusted partner to countless organizations seeking clarity
                and control over their statutory responsibilities.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With a background in managing compliance for over 2,500 locations and more than 50,000 employees PAN
                India, our founder has demonstrated exceptional capability in handling complex labour law operations.
                Formerly the Director of Legal & Compliance at a top logistics and courier company, their leadership in
                large-scale operations laid the foundation for what Praans Consultech stands for today: excellence,
                reliability, and innovation.
              </p>

              {/* Vision Section */}
              <Card className="bg-blue-50 border-l-4 border-blue-500 mb-12">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">
                    Vision: Simplifying Compliance, Empowering Businesses
                  </h3>
                  <blockquote className="text-lg text-gray-700 italic">
                    “To empower businesses across India with accessible, affordable, and intelligent labour law
                    compliance solutions—ensuring legal safety while promoting employee welfare and operational
                    efficiency.”
                  </blockquote>
                </CardContent>
              </Card>

              {/* From Field Expertise to Tech */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6 text-slate-800">
                  From Field Expertise to Tech-Driven Solutions
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Understanding the growing need for automation and real-time compliance tracking, our founder
                  envisioned a smarter way for businesses to manage their statutory obligations. This led to the
                  creation of Praans Consultech’s AI-based Compliance Management Software, launched in 2022.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Designed with real-world challenges in mind, this intelligent platform helps businesses automate
                  compliance tracking, receive deadline alerts, manage registers, and avoid penalties.
                </p>
              </div>

              {/* Media Feature */}
              <Card className="mb-12 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Newspaper className="w-6 h-6 text-orange-500" />
                    <span>Featured Article</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    Praans Consultech: Empowering Businesses with Seamless Compliance Solutions
                  </p>
                  <p className="text-gray-500 mb-4">Read our feature in AsiaConnect Magazine.</p>
                  <a
                    href="https://www.hindustanmetro.com/the-visionary-who-left-corporate-success-to-empower-everyday-entrepreneurs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="bg-transparent">
                      Read Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <aside className="space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?width=400&height=400"
                    alt="Founder of Praans Consultech"
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-center">Our Founder</h3>
                    <p className="text-center text-gray-500">Labour Law & Compliance Expert</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-orange-500" />
                    <span>Educational Foundation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {education.map((edu, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold">{edu.degree}</p>
                          <p className="text-sm text-gray-600">{edu.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-orange-500" />
                    <span>Areas of Expertise</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Looking for a reliable partner to manage your labour law compliance?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch with Praans Consultech — Led by India’s trusted labour law expert.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 text-lg px-8 py-4">
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
