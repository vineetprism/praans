import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Shield, Cpu, Users, FileText, Search, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Labour Law Audit & Inspection Services | Praans Consultech",
  description:
    "Stay compliant and prepared with our expert labour law audit and inspection services. We offer pre-audit reviews, on-site support, and technology-enabled compliance.",
  keywords:
    "labour law audit, compliance inspection, statutory audit services, labour law inspection support, compliance audit india",
}

const whyReadinessMatters = [
  {
    icon: Shield,
    title: "Avoid Legal Penalties",
    description:
      "Non-compliance can attract financial penalties, suspension of licenses, and even prosecution. Regular audits help identify and rectify gaps before inspections happen.",
  },
  {
    icon: Users,
    title: "Build Trust with Authorities",
    description:
      "A business that maintains proper documentation and follows labour laws diligently earns the trust of regulators, leading to smoother inspections and fewer disruptions.",
  },
  {
    icon: FileText,
    title: "Ensure Operational Continuity",
    description:
      "Audit readiness minimizes the risk of sudden compliance issues that can halt business operations or trigger legal proceedings.",
  },
  {
    icon: CheckCircle,
    title: "Protect Your Reputation",
    description:
      "Timely compliance and transparency not only keep you legally safe but also enhance your reputation with employees, partners, and stakeholders.",
  },
]

const ourServices = [
  {
    title: "Pre-Audit Review",
    description:
      "We conduct a complete internal review to identify potential compliance gaps and risks in your current processes and documentation.",
  },
  {
    title: "Statutory Documentation Management",
    description:
      "Our team ensures all mandatory registers, forms, returns, and filings are properly maintained and updated as per the latest legal norms.",
  },
  {
    title: "On-Site Inspection Support",
    description:
      "We offer on-ground assistance during government inspections. Our experts liaise with visiting officials, provide required documents, and support your internal team.",
  },
  {
    title: "Post-Inspection Compliance",
    description:
      "If any issues are highlighted, we assist with corrective actions, response letters, filing backdated forms, and implementing long-term solutions.",
  },
  {
    title: "Ongoing Advisory",
    description:
      "We don’t just offer one-time services. Our team provides continuous guidance to ensure you're always in alignment with legal updates.",
  },
]

const whyChooseUs = [
  "15+ Years of Labour Law Expertise",
  "Skilled Legal & Field Team for On-Site Support",
  "Real-Time Tracking Through Smart Software",
  "Tailored Solutions Based on Your Operations",
  "End-to-End Service—From Pre-Audit to Closure Reports",
]

export default function AuditInspectionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Labour Law Audit & Inspection Services</h1>
          <p className="text-xl text-orange-600 font-semibold">Stay Compliant. Stay Prepared. Stay Confident.</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            In the dynamic world of regulatory compliance, labour law audits and inspections are essential to protecting
            your organization from penalties, disputes, and reputational risks. Praans Consultech empowers businesses to
            confidently manage these complexities.
          </p>
        </div>
      </section>

      {/* What is an Audit / Inspection */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">🔍 What is a Labour Law Audit?</h2>
              <p className="text-gray-700 mb-4">
                A detailed examination of your company’s statutory records, processes, and practices to ensure
                compliance with central and state-specific labour regulations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Statutory registers and returns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>PF, ESI, wages, and contractor documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>License validity, renewals, and leave records</span>
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">🧾 Understanding Labour Law Inspections</h2>
              <p className="text-gray-700 mb-4">
                A physical verification of compliance conducted by government-authorized officials, which can be
                scheduled, a surprise visit, or triggered by a complaint.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Maintenance of statutory records</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Display of mandatory notices and signage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Verification of working conditions and employee rights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Readiness Matters */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🛡️ Why Audit & Inspection Readiness Matters</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyReadinessMatters.map((item, index) => (
              <Card key={index} className="text-center p-6 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Comprehensive Audit & Inspection Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourServices.map((service, index) => (
              <Card key={index} className="bg-white shadow-md p-6">
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology-Enabled Compliance */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">🔧 Technology-Enabled Compliance</h2>
              <p className="text-lg text-gray-300 mb-6">
                To enhance accuracy and efficiency, we integrate our AI-powered compliance management software with our
                audit and inspection services.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-orange-400" /> Track compliance status in real-time
                </li>
                <li className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-orange-400" /> Maintain digital records of registers and forms
                </li>
                <li className="flex items-center gap-3">
                  <Search className="w-6 h-6 text-orange-400" /> Generate audit reports and compliance checklists
                  instantly
                </li>
              </ul>
            </div>
            <div>
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

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">👨‍⚖️ Why Choose Praans Consultech?</h2>
            <p className="text-xl text-gray-600">Smart compliance begins with a smart partnership.</p>
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
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of Every Inspection</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Being audit-ready is not optional—it's essential. With Praans Consultech, you gain the assurance of
            compliance and the confidence to face inspections.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-orange-600 hover:bg-gray-100"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Your Free Consultation Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
