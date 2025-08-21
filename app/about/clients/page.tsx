import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Truck,
  Factory,
  Store,
  Stethoscope,
  Building2,
  Laptop,
  Utensils,
  Tractor,
  School,
  Landmark,
  Users,
  Coffee,
  Briefcase,
  UserCheck,
  UsersRound,
  Map,
  Lock,
  Star,
  TrendingUp,
  Shield
} from "lucide-react"
 
export const metadata = {
  title: "Our Clients | Praans Consultech",
  description: "Trusted by businesses across all major sectors in India for labour law compliance solutions.",
}
 
const clientSectors = [
  { icon: Truck, name: "Logistics & Warehousing", count: "500+" },
  { icon: Factory, name: "Manufacturing & Industrial Units", count: "800+" },
  { icon: Store, name: "Retail & E-Commerce", count: "600+" },
  { icon: Stethoscope, name: "Healthcare & Pharmaceuticals", count: "300+" },
  { icon: Building2, name: "Construction & Infrastructure", count: "450+" },
  { icon: Laptop, name: "Information Technology & BPO", count: "350+" },
  { icon: Utensils, name: "Food & Beverage Industry", count: "250+" },
  { icon: Tractor, name: "Agriculture & Farming Sector", count: "200+" },
  { icon: School, name: "Education & EdTech Companies", count: "180+" },
  { icon: Landmark, name: "Banking, Finance & Insurance (BFSI)", count: "120+" },
  { icon: Users, name: "Manpower Supply & Contract Staffing", count: "400+" },
  { icon: Coffee, name: "Restaurants, Cafes & Food Service", count: "300+" },
  { icon: Briefcase, name: "Business Consulting & Professional Services", count: "150+" },
]
 
const stats = [
  { icon: UserCheck, value: "5000+", label: "Happy Clients", color: "text-blue-500" },
  { icon: UsersRound, value: "50,000+", label: "Employees Covered", color: "text-green-500" },
  { icon: Map, value: "28+", label: "States & UTs Covered", color: "text-orange-500" },
  { icon: TrendingUp, value: "99.9%", label: "Success Rate", color: "text-purple-500" },
]
 
const testimonials = [
  {
    quote: "Praans Consultech has been instrumental in streamlining our compliance processes across 200+ locations. Their AI-powered platform saves us hours of manual work.",
    company: "Leading Logistics Company",
    industry: "Transportation & Logistics",
    size: "10,000+ employees"
  },
  {
    quote: "The expertise and proactive support from Praans team helped us navigate complex labour law requirements seamlessly during our expansion.",
    company: "Major Manufacturing Group",
    industry: "Manufacturing",
    size: "5,000+ employees"
  },
  {
    quote: "Their compliance outsourcing service allows us to focus on our core business while ensuring 100% regulatory compliance across all our outlets.",
    company: "Retail Chain",
    industry: "Retail & E-Commerce",
    size: "15,000+ employees"
  }
]
 
const whyClientsChooseUs = [
  {
    icon: Shield,
    title: "100% Compliance Assurance",
    description: "Zero penalties and complete regulatory compliance across all locations"
  },
  {
    icon: Star,
    title: "Industry Expertise",
    description: "Deep understanding of sector-specific labour law requirements"
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Successfully serving 5000+ clients with 99.9% success rate"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Assigned compliance managers and 24/7 expert support"
  }
]
 
export default function OurClientsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-800">Our Clients</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses across all major sectors in India for seamless labour law compliance
          </p>
        </div>
      </section>
 
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <p className="text-4xl font-bold text-slate-800 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Client Sectors */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">
              Trusted Across All Major Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We proudly serve a diverse portfolio of clients across India, delivering tailored compliance solutions for every industry's unique needs
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {clientSectors.map((sector, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <sector.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-sm">{sector.name}</h3>
                      <p className="text-orange-600 font-semibold text-sm">{sector.count} clients</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
 
      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from businesses we've helped succeed</p>
          </div>
 
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="border-t pt-6">
                    <p className="font-bold text-slate-800">{testimonial.company}</p>
                    <p className="text-orange-600 text-sm">{testimonial.industry}</p>
                    <p className="text-gray-500 text-sm">{testimonial.size}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
 
      {/* Why Clients Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Why Clients Choose Us</h2>
          </div>
 
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyClientsChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Confidentiality Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-orange-100 to-blue-100 p-8 max-w-4xl mx-auto shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Lock className="w-16 h-16 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">🔒 Confidentiality You Can Rely On</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our professional integrity and commitment to discretion have helped us build lasting relationships
                  across industries. Clients value not just our expertise—but our ability to handle their compliance
                  needs quietly, efficiently, and with full respect for privacy.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
 
      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Growing Family of Satisfied Clients?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how we can simplify your labour law compliance and help your business grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-slate-800 text-lg px-8 py-6">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}