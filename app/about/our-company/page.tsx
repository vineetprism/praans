import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Target,
  Eye,
  Cpu,
  Globe,
  ShieldCheck,
  UsersRound,
  Headset,
  Scaling,
  Award,
  Newspaper,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us | Praans Consultech",
  description: "Learn about Praans Consultech's mission to simplify labour law compliance across India with our AI-driven platform and expert legal team.",
  keywords: "about praans consultech, labour law experts, compliance software company, sandeep kumar, nitesh kumar, allisha sharma",
}

const whyChooseUs = [
  {
    icon: Cpu,
    title: "AI-Driven Compliance",
    description: "Smart software for error-free filings & real-time alerts",
  },
  {
    icon: Globe,
    title: "Pan-India Coverage", 
    description: "Local experts in every state for seamless compliance",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Solutions",
    description: "From registrations to litigation, we handle it all",
  },
  {
    icon: UsersRound,
    title: "Expert Team",
    description: "Labour law specialists & HR professionals on your side",
  },
  {
    icon: Headset,
    title: "Proactive Support",
    description: "Timely updates & guidance to prevent penalties",
  },
  {
    icon: Scaling,
    title: "Customized for You",
    description: "Scalable solutions for startups to enterprises",
  },
]

const services = [
  "Labour Law Registrations",
  "AI-Based Compliance Management Software", 
  "Compliance Outsourcing Solutions",
  "Litigation Support & Legal Representation",
  "Labour Law Advisory Services",
  "Audit and Inspection Support",
]

const founders = [
  "Mr. Sandeep Kumar",
  "Mr. Nitesh Kumar", 
  "Ms. Allisha Sharma"
]

const certifications = [
  "ISO",
  "Startup India",
  "MSME", 
  "Ministry of Corporate Affairs"
]

const media = [
  {
    title: "Best Labour Law Consultant",
    source: "Excellence in Business Compliance"
  },
  {
    title: "Shaping the Future of Labour Law and Business Registration",
    source: "CEO India Magazine",
    link: "https://ceoindiamagazine.com/praans-consultech-shaping-the-future-of-labour-law-and-business-registration/"
  },
  {
    title: "Empowering India's Businesses Through Compliance",
    source: "Success India Magazine", 
    link: "https://successmagazine.in/empowering-indias-businesses-through-compliance-the-success-story-of-praans-consultech/"
  },
]

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-800">About Praans Consultech</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simplifying Labour Law Compliance for businesses across India since 2021
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-8 text-slate-800 text-center">Our Story</h2>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Praans Consultech was founded in 2021 with a clear vision to simplify and streamline labour law compliance for businesses across India. Understanding the increasing complexities HR and legal teams face in keeping pace with evolving labour laws, our founders <strong>Mr. Sandeep Kumar, Mr. Nitesh Kumar, and Ms. Allisha Sharma</strong> joined hands to establish a platform that delivers accurate, efficient, and tech-driven compliance solutions.
            </p>
            
            <p>
              Driven by their collective industry experience and deep understanding of clients' operational challenges, the founders identified a crucial gap most businesses struggled to manage multi-location compliance with traditional, manual systems. Driven by this understanding, we developed our premier compliance platform.
            </p>
            
            <p>
              In 2022, we proudly launched our <strong>AI-based Intelligent Compliance Management Software</strong>, designed to automate, monitor, and simplify complex compliance workflows.
            </p>
            
            <p>
              Since then, Praans Consultech has grown rapidly, expanding its service network to cover all states and union territories in India. With a dedicated team of legal experts, technology professionals, and on-ground compliance officers in every region, we ensure timely execution, localized support, and full legal accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Our Services</h2>
            <p className="text-xl text-gray-600">Today, we are trusted by businesses across sectors for our end-to-end labour law services</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg bg-white">
                <CardContent className="p-6 flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="font-semibold text-gray-800">{service}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 text-center">
            <div>
              <Eye className="w-16 h-16 mx-auto mb-4 text-orange-400" />
              <h3 className="text-3xl font-bold mb-4">🚀 Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To become India's most trusted and technology-driven partner in labour law compliance making complex regulations simple, accessible, and manageable for every business.
              </p>
            </div>
            <div>
              <Target className="w-16 h-16 mx-auto mb-4 text-orange-400" />
              <h3 className="text-3xl font-bold mb-4">🎯 Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To empower businesses with intelligent tools and expert support for labour law compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Praans Consultech?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take pride in being a single-window solution for all statutory and regulatory compliance needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">✅ {item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-orange-100 to-blue-100 p-8 rounded-lg max-w-4xl mx-auto">
              <p className="text-lg font-semibold text-slate-800">
                Whether you're a startup, SME, or a large enterprise with operations in multiple states, Praans Consultech is your reliable partner in compliance. Let us manage your compliance so you can manage your business with peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications & Recognition</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="text-center p-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <p className="font-semibold">{cert}</p>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Media Recognition */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Media & Recognition</h3>
              <div className="space-y-4">
                {media.map((item, index) => (
                  <Card key={index} className="shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Newspaper className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{item.source}</p>
                          {item.link && (
                            <Link href={item.link} target="_blank" className="text-orange-600 hover:underline text-sm">
                              Read Article →
                            </Link>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
