import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Shield, Cpu, Users, FileText, Phone, GraduationCap, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Labour Law Compliance Outsourcing | Praans Consultech",
  description:
    "Ensure 100% compliance with our end-to-end labour law outsourcing solutions. We manage statutory filings, audits, and legal risks so you can focus on growth.",
  keywords:
    "labour law outsourcing, compliance outsourcing services, statutory compliance outsourcing, payroll compliance services, HR compliance india",
}

const whyOutsource = [
  {
    icon: Shield,
    title: "Pan-India Compliance Management",
    description:
      "We offer consistent, centralized compliance services across all Indian states and union territories, ensuring your business meets both state and central labour law requirements.",
  },
  {
    icon: FileText,
    title: "Timely Statutory Filings",
    description:
      "Never miss a deadline again. From periodic returns to form submissions and digital registers, we ensure every requirement is met on time.",
  },
  {
    icon: Users,
    title: "Minimized Legal Risk",
    description:
      "With continuous monitoring and legal advisory, we protect you from non-compliance penalties, reputational harm, and operational disruptions.",
  },
  {
    icon: CheckCircle,
    title: "Audit & Inspection Preparedness",
    description:
      "We ensure your records, documents, and registers are audit-ready at all times, with dedicated on-ground support from our team.",
  },
  {
    icon: Cpu,
    title: "Time & Cost Efficiency",
    description:
      "Outsourcing frees your HR and legal teams from repetitive administrative work, improving productivity and reducing operational costs.",
  },
  {
    icon: Briefcase,
    title: "Industry-Specific Expertise",
    description:
      "Our consultants understand the compliance landscape for multiple industries and provide practical solutions based on sector-specific regulations.",
  },
]

const industries = [
  "Food & Beverages",
  "Manpower & Staffing",
  "Banking & Financial Services",
  "Education & EdTech",
  "Consulting & Professional Services",
  "Agriculture & Farming",
  "Restaurant & Hospitality",
  "Retail & Pet Care Services",
]

const whyChooseUs = [
  "15+ Years of Legal Experience",
  "Strong Industry Expertise",
  "Centralized, AI-Powered Compliance Software",
  "PAN India Operations & On-Ground Support",
  "Customized, Transparent & Ethical Approach",
  "End-to-End Compliance Outsourcing Services",
]

export default function ComplianceOutsourcingPage() {
  return (
    <div className="bg-white">
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
              <Link href="/services" className="text-orange-500 font-semibold transition-colors">
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

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Your Trusted Partner for Labour Law Compliance Outsourcing
          </h1>
          <p className="text-xl text-orange-600 font-semibold">
            Ensure 100% Compliance. Reduce Risk. Improve Efficiency.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            We simplify compliance by offering end-to-end outsourcing solutions that are accurate, reliable, and fully
            aligned with the latest government rules. We serve as your strategic partner, ensuring your business stays
            compliant, audit-ready, and free from legal risks.
          </p>
        </div>
      </section>

      {/* Why Outsource Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Outsource Labour Law Compliance?</h2>
            <p className="text-xl text-gray-600">
              It's no longer an optional convenience—it's a competitive advantage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyOutsource.map((item, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6">Empowering Compliance Through Smart Technology</h2>
              <p className="text-lg text-gray-300 mb-6">
                We combine traditional legal consulting with smart automation. Our in-house, AI-enabled compliance
                management software ensures full control, clarity, and convenience.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-orange-400" /> Real-Time Legal Updates
                </li>
                <li className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-orange-400" /> Centralized Dashboards for Multi-Location Monitoring
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-orange-400" /> Secure Digital Record-Keeping
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?width=500&height=400"
                alt="Compliance Software Dashboard"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-800">
                Meet Our Founder – Vision Backed by Legal Expertise
              </h2>
              <p className="text-gray-600 mb-4">
                Praans Consultech is led by a seasoned Labour Law Consultant with over 15 years of hands-on experience.
                Formerly the Director – Legal & Compliance at a leading logistics company, our founder oversaw
                compliance for 2,500+ locations and over 50,000 employees.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="w-8 h-8 text-orange-500" />
                <p className="font-semibold">LL.M., PG Diploma in Labour Laws, XLRI Alumnus, Ph.D. (Pursuing)</p>
              </div>
              <Link href="/founder">
                <Button variant="outline" className="bg-transparent">
                  Learn More About Our Founder
                </Button>
              </Link>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Our Expert Team</h2>
              <p className="text-gray-600 mb-4">
                Supporting the founder is a dedicated team of legal professionals, compliance officers, and field
                executives. Each member brings domain-specific knowledge in Indian labour laws, regional rules, and
                sector-specific requirements.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Establishment Compliance",
                  "Factory Compliance",
                  "Payroll Compliance",
                  "Contractor Compliance",
                  "Registrations & Licences",
                  "Audit and Inspection",
                ].map((expertise) => (
                  <span
                    key={expertise}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {expertise}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              We proudly serve a wide range of industries with customized compliance solutions.
            </p>
          </div>
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <span
                key={industry}
                className="bg-white text-gray-700 text-lg font-medium px-4 py-2 rounded-lg shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Praans Consultech?</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500"
              >
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                <span className="text-lg text-gray-800">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Let’s Simplify Your Compliance Journey</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            With Praans Consultech, you receive strategic support, smart software, and a dedicated team that ensures
            every requirement is met accurately and on time.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-orange-600 hover:bg-gray-100"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
