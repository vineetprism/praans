import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Building } from "lucide-react"
import IndiaMapOnly from "./india-map"

export const metadata = {
  title: "Contact Us | Praans Consultech",
  description:
    "Get in touch with Praans Consultech. Find our office locations in Gurugram, Bangalore, and Guwahati, or send us a message.",
  keywords: "contact praans consultech, labour law consultant contact, compliance services contact",
}

const officeLocations = [
  {
    city: "Corporate Office - Gurugram",
    address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana - 122052",
    icon: Building,
  },
  {
    city: "Regional Office - Bangalore",
    address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bangalore – 560054",
    icon: MapPin,
  },
  {
    city: "Regional Office - Guwahati",
    address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam - 781008",
    icon: MapPin,
  },
]

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-800">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help with all your labour law compliance needs. Reach out to us via phone, email, or our
            office locations.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Our Offices</h2>
                {officeLocations.map((office, index) => (
                  <Card key={index} className="mb-6 border-l-4 border-[#eb8535]">
                    <CardHeader className="flex flex-row items-start gap-4 p-5">
                      <office.icon className="w-8 h-8 text-[#eb8535] mt-1 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-xl">{office.city}</CardTitle>
                        <p className="text-gray-600">{office.address}</p>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">General Inquiries</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-3 text-lg text-gray-700 hover:text-[#eb8535]"
                  >
                    <Phone className="w-6 h-6 text-orange-500" />
                    <span>+91-9050576838</span>
                  </a>
                  <a
                    href="mailto:info@praansconsultech.com"
                    className="flex items-center gap-3 text-lg text-gray-700 hover:text-[#eb8535]"
                  >
                    <Mail className="w-6 h-6 text-orange-500" />
                    <span>info@praansconsultech.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Enter Your Name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="Enter Your Email..." />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Enter your Phone Num..." />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Regarding Compliance Outsourcing" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <Textarea id="message" placeholder="Please describe your requirements..." rows={5} />
                  </div>
                  <div>
                    <Button type="submit" className="w-full bg-[#eb8535] hover:bg-orange-400 text-lg py-3">
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <IndiaMapOnly />
        </div>
      </div>
    </div>
  )
}