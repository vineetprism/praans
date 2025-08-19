import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, Briefcase, Gavel, ClipboardCheck, Cpu, Landmark, ArrowRight, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Our Services | Praans Consultech",
  description:
    "Explore our end-to-end labour law compliance services, including outsourcing, audits, legal advisory, registrations, and our AI-powered software.",
  keywords:
    "labour law services, compliance outsourcing, legal advisory, pan india registrations, litigation support, compliance software, audit and inspection",
}

const services = [
  {
    icon: Briefcase,
    title: "Compliance Outsourcing",
    description: "End-to-end management of all your statutory labour law obligations.",
    href: "/services/compliance-outsourcing",
  },
  {
    icon: ClipboardList,
    title: "Audit & Inspection Services",
    description: "Stay prepared with pre-audit reviews and on-site inspection support.",
    href: "/services/audit-and-inspection",
  },
  {
    icon: Gavel,
    title: "Legal Advisory",
    description: "Expert guidance for complex labour laws and strategic compliance.",
    href: "/services/legal-advisory",
  },
  {
    icon: ClipboardCheck,
    title: "PAN India Registrations",
    description: "Fast, hassle-free licenses and registrations across all states.",
    href: "/services/registrations",
  },
  {
    icon: Landmark,
    title: "Litigation Support",
    description: "Professional legal representation and dispute resolution services.",
    href: "/services/litigation-support",
  },
  {
    icon: Cpu,
    title: "Smart Compliance Software",
    description: "Automate, monitor, and simplify workflows with our AI-based platform.",
    href: "/services/compliance-software",
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-800">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A single platform for all your labour law compliance needs. We offer end-to-end solutions to keep your
            business safe, compliant, and efficient.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link href={service.href}>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent group-hover:bg-orange-500 group-hover:text-white transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-orange-400" />
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Compliance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't let compliance complexities slow you down. Partner with us for peace of mind and focus on what you do
            best—growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 text-lg px-8 py-4">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800 text-lg px-8 py-4 bg-transparent"
              >
                Why Choose Us?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-orange-400 transition-colors">
              Terms and Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-orange-400 transition-colors">
              Disclaimer
            </Link>
          </div>
          <p>&copy; 2025 Praans Consultech. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  )
}
