// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   Target,
//   Eye,
//   Cpu,
//   Globe,
//   ShieldCheck,
//   UsersRound,
//   Headset,
//   Scaling,
//   Award,
//   Newspaper,
//   Truck,
//   Factory,
//   Store,
//   Stethoscope,
//   Building2,
//   Laptop,
//   Utensils,
//   Tractor,
//   School,
//   Landmark,
//   Users,
//   Dog,
//   Coffee,
//   Briefcase,
//   UserCheck,
//   Map,
//   Lock,
//   ArrowRight,
// } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// export const metadata = {
//   title: "About Us | Praans Consultech",
//   description:
//     "Learn about Praans Consultech's mission to simplify labour law compliance across India with our AI-driven platform and expert legal team.",
//   keywords:
//     "about praans consultech, labour law experts, compliance software company, sandeep kumar, nitesh kumar, allisha sharma",
// }

// const whyChooseUs = [
//   {
//     icon: Cpu,
//     title: "AI-Driven Compliance",
//     description: "Smart software for error-free filings & real-time alerts.",
//   },
//   {
//     icon: Globe,
//     title: "Pan-India Coverage",
//     description: "Local experts in every state for seamless compliance.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "End-to-End Solutions",
//     description: "From registrations to litigation, we handle it all.",
//   },
//   {
//     icon: UsersRound,
//     title: "Expert Team",
//     description: "Labour law specialists & HR professionals on your side.",
//   },
//   {
//     icon: Headset,
//     title: "Proactive Support",
//     description: "Timely updates & guidance to prevent penalties.",
//   },
//   {
//     icon: Scaling,
//     title: "Customized for You",
//     description: "Scalable solutions for startups to enterprises.",
//   },
// ]

// const services = [
//   "Labour Law Registrations",
//   "AI-Based Compliance Management Software",
//   "Compliance Outsourcing Solutions",
//   "Litigation Support & Legal Representation",
//   "Labour Law Advisory Services",
//   "Audit and Inspection Support",
// ]

// const certifications = [
//   { name: "ISO Certified", logo: "/placeholder.svg?width=150&height=80" },
//   { name: "Startup India", logo: "/placeholder.svg?width=150&height=80" },
//   { name: "MSME", logo: "/placeholder.svg?width=150&height=80" },
//   {
//     name: "Ministry of Corporate Affairs",
//     logo: "/placeholder.svg?width=150&height=80",
//   },
// ]

// const media = [
//   {
//     icon: Award,
//     title: "Best Labour Law Consultant",
//     source: "Excellence in Business Compliance",
//   },
//   {
//     icon: Newspaper,
//     title: "Shaping the Future of Labour Law and Business Registration",
//     source: "CEO INDIA Magazine",
//   },
//   {
//     icon: Newspaper,
//     title: "Empowering India’s Businesses Through Compliance",
//     source: "Success India Magazine",
//   },
// ]

// const clientSectors = [
//   { icon: Truck, name: "Logistics & Warehousing" },
//   { icon: Factory, name: "Manufacturing & Industrial Units" },
//   { icon: Store, name: "Retail & E-Commerce" },
//   { icon: Stethoscope, name: "Healthcare & Pharmaceuticals" },
//   { icon: Building2, name: "Construction & Infrastructure" },
//   { icon: Laptop, name: "Information Technology & BPO" },
//   { icon: Utensils, name: "Food & Beverage Industry" },
//   { icon: Tractor, name: "Agriculture & Farming Sector" },
//   { icon: School, name: "Education & EdTech Companies" },
//   { icon: Landmark, name: "Banking, Finance & Insurance (BFSI)" },
//   { icon: Users, name: "Manpower Supply & Contract Staffing Firms" },
//   { icon: Dog, name: "Pet Care & Veterinary Services" },
//   { icon: Coffee, name: "Restaurants, Cafes & Food Service Chains" },
//   { icon: Briefcase, name: "Business Consulting & Professional Services" },
// ]

// const stats = [
//   { icon: UserCheck, value: "100+", label: "Clients Served" },
//   { icon: UsersRound, value: "4000+", label: "Employees Covered" },
//   { icon: Map, value: "25+", label: "States Covered (PAN India)" },
// ]

// export default function AboutPage() {
//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-br from-orange-50 to-blue-50">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-800">About Praans Consultech</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Your trusted, technology-driven partner in simplifying labour law compliance across India.
//           </p>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <Image
//                 src="/placeholder.svg?width=600&height=400"
//                 alt="Praans Consultech Team"
//                 width={600}
//                 height={400}
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//             <div>
//               <h2 className="text-4xl font-bold mb-6 text-slate-800">Our Story</h2>
//               <p className="text-gray-600 mb-4 leading-relaxed">
//                 Praans Consultech was founded in 2021 with a clear vision to simplify and streamline labour law
//                 compliance for businesses across India. Understanding the increasing complexities HR and legal teams
//                 face, our founders established a platform that delivers accurate, efficient, and tech-driven compliance
//                 solutions.
//               </p>
//               <p className="text-gray-600 mb-4 leading-relaxed">
//                 In 2022, we proudly launched our AI-based Intelligent Compliance Management Software, designed to
//                 automate, monitor, and simplify complex compliance workflows. Since then, Praans Consultech has grown
//                 rapidly, expanding its service network to cover all states and union territories in India.
//               </p>
//               <Card className="mt-6 bg-gray-50">
//                 <CardContent className="p-6">
//                   <h3 className="font-bold text-lg mb-2">Meet Our Leadership</h3>
//                   <p className="text-gray-600 mb-4">
//                     Our journey is guided by a founder with over 15 years of hands-on experience in the field.
//                   </p>
//                   <Link href="/founder">
//                     <Button variant="outline" className="w-full bg-transparent">
//                       Learn More About Our Founder <ArrowRight className="w-4 h-4 ml-2" />
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission Section */}
//       <section className="py-20 bg-slate-800 text-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 text-center">
//             <div>
//               <Eye className="w-16 h-16 mx-auto mb-4 text-orange-400" />
//               <h3 className="text-3xl font-bold mb-4">🚀 Our Vision</h3>
//               <p className="text-lg text-gray-300 max-w-lg mx-auto">
//                 To become India’s most trusted and technology-driven partner in labour law compliance, making complex
//                 regulations simple, accessible, and manageable for every business.
//               </p>
//             </div>
//             <div>
//               <Target className="w-16 h-16 mx-auto mb-4 text-orange-400" />
//               <h3 className="text-3xl font-bold mb-4">🎯 Our Mission</h3>
//               <p className="text-lg text-gray-300 max-w-lg mx-auto">
//                 To empower businesses with intelligent tools and expert support for labour law compliance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Why Praans Consultech?</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               We combine technology, expertise, and a client-first approach to deliver unparalleled compliance
//               solutions.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {whyChooseUs.map((item, index) => (
//               <div key={index} className="flex items-start gap-4">
//                 <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
//                   <item.icon className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Clients Section */}
//       <section className="py-20 bg-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-slate-800">
//               Our Clients – Trusted by Businesses Across All Major Sectors
//             </h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto">
//               We proudly serve a wide spectrum of clients across India, offering tailored labour law compliance
//               solutions that meet the unique needs of each industry.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
//             {clientSectors.map((sector, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <sector.icon className="w-6 h-6 text-orange-500 flex-shrink-0" />
//                 <span className="font-medium text-gray-700">{sector.name}</span>
//               </div>
//             ))}
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-20 text-center max-w-4xl mx-auto">
//             {stats.map((stat, index) => (
//               <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
//                 <stat.icon className="w-12 h-12 mx-auto mb-3 text-orange-500" />
//                 <p className="text-4xl font-bold text-slate-800">{stat.value}</p>
//                 <p className="text-gray-500">{stat.label}</p>
//               </div>
//             ))}
//           </div>

//           <Card className="bg-white p-8 max-w-4xl mx-auto shadow-xl">
//             <div className="flex flex-col md:flex-row items-center gap-8">
//               <div className="flex-shrink-0">
//                 <Lock className="w-16 h-16 text-orange-500" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold mb-3 text-slate-800">🔒 Confidentiality You Can Rely On</h3>
//                 <p className="text-gray-600">
//                   Our professional integrity and commitment to discretion have helped us build lasting relationships
//                   across industries. Clients value not just our expertise—but our ability to handle their compliance
//                   needs quietly, efficiently, and with full respect for privacy.
//                 </p>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </section>

//       {/* Certifications & Recognition Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Certifications & Recognition</h2>
//             <p className="text-xl text-gray-600">
//               Our commitment to excellence is recognized by leading industry bodies and publications.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-2xl font-semibold mb-6 text-center">Our Certifications</h3>
//               <div className="flex flex-wrap justify-center items-center gap-8">
//                 {certifications.map((cert, index) => (
//                   <Image
//                     key={index}
//                     src={cert.logo || "/placeholder.svg"}
//                     alt={cert.name}
//                     width={150}
//                     height={80}
//                     className="grayscale hover:grayscale-0 transition-all duration-300"
//                   />
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold mb-6 text-center">Media & Recognition</h3>
//               <div className="space-y-6">
//                 {media.map((item, index) => (
//                   <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
//                     <CardHeader className="flex flex-row items-center gap-4">
//                       <item.icon className="w-8 h-8 text-orange-500" />
//                       <div>
//                         <CardTitle className="text-lg">{item.title}</CardTitle>
//                         <p className="text-sm text-gray-500">{item.source}</p>
//                       </div>
//                     </CardHeader>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }






// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   Target,
//   Eye,
//   Cpu,
//   Globe,
//   ShieldCheck,
//   UsersRound,
//   Headset,
//   Scaling,
//   Award,
//   Newspaper,
//   Truck,
//   Factory,
//   Store,
//   Stethoscope,
//   Building2,
//   Laptop,
//   Utensils,
//   Tractor,
//   School,
//   Landmark,
//   Users,
//   Dog,
//   Coffee,
//   Briefcase,
//   UserCheck,
//   Map,
//   Lock,
//   ArrowRight,
//   CheckCircle,
// } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// export const metadata = {
//   title: "About Us | Praans Consultech",
//   description:
//     "Learn about Praans Consultech's mission to simplify labour law compliance across India with our AI-driven platform and expert legal team.",
//   keywords:
//     "about praans consultech, labour law experts, compliance software company, sandeep kumar, nitesh kumar, allisha sharma",
// }

// const whyChooseUs = [
//   {
//     icon: Cpu,
//     title: "AI-Driven Compliance",
//     description: "Smart software for error-free filings & real-time alerts.",
//   },
//   {
//     icon: Globe,
//     title: "Pan-India Coverage",
//     description: "Local experts in every state for seamless compliance.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "End-to-End Solutions",
//     description: "From registrations to litigation, we handle it all.",
//   },
//   {
//     icon: UsersRound,
//     title: "Expert Team",
//     description: "Labour law specialists & HR professionals on your side.",
//   },
//   {
//     icon: Headset,
//     title: "Proactive Support",
//     description: "Timely updates & guidance to prevent penalties.",
//   },
//   {
//     icon: Scaling,
//     title: "Customized for You",
//     description: "Scalable solutions for startups to enterprises.",
//   },
// ]

// const services = [
//   "Labour Law Registrations",
//   "AI-Based Compliance Management Software",
//   "Compliance Outsourcing Solutions",
//   "Litigation Support & Legal Representation",
//   "Labour Law Advisory Services",
//   "Audit and Inspection Support",
// ]

// const founders = [
//   { name: "Mr. Sandeep Kumar", role: "Co-Founder" },
//   { name: "Mr. Nitesh Kumar", role: "Co-Founder" },
//   { name: "Ms. Allisha Sharma", role: "Co-Founder" },
// ]

// const certifications = [
//   { name: "ISO Certified", logo: "/placeholder.svg?width=150&height=80" },
//   { name: "Startup India", logo: "/placeholder.svg?width=150&height=80" },
//   { name: "MSME", logo: "/placeholder.svg?width=150&height=80" },
//   {
//     name: "Ministry of Corporate Affairs",
//     logo: "/placeholder.svg?width=150&height=80",
//   },
// ]

// const media = [
//   {
//     icon: Award,
//     title: "Best Labour Law Consultant",
//     source: "Excellence in Business Compliance",
//     description: "Recognized for outstanding service in labour law consultation"
//   },
//   {
//     icon: Newspaper,
//     title: "Shaping the Future of Labour Law and Business Registration",
//     source: "CEO INDIA Magazine",
//     link: "https://ceoindiamagazine.com/praans-consultech-shaping-the-future-of-labour-law-and-business-registration/"
//   },
//   {
//     icon: Newspaper,
//     title: "Empowering India's Businesses Through Compliance",
//     source: "Success India Magazine",
//     link: "https://successmagazine.in/empowering-indias-businesses-through-compliance-the-success-story-of-praans-consultech/"
//   },
// ]

// const clientSectors = [
//   { icon: Truck, name: "Logistics & Warehousing" },
//   { icon: Factory, name: "Manufacturing & Industrial Units" },
//   { icon: Store, name: "Retail & E-Commerce" },
//   { icon: Stethoscope, name: "Healthcare & Pharmaceuticals" },
//   { icon: Building2, name: "Construction & Infrastructure" },
//   { icon: Laptop, name: "Information Technology & BPO" },
//   { icon: Utensils, name: "Food & Beverage Industry" },
//   { icon: Tractor, name: "Agriculture & Farming Sector" },
//   { icon: School, name: "Education & EdTech Companies" },
//   { icon: Landmark, name: "Banking, Finance & Insurance (BFSI)" },
//   { icon: Users, name: "Manpower Supply & Contract Staffing Firms" },
//   { icon: Dog, name: "Pet Care & Veterinary Services" },
//   { icon: Coffee, name: "Restaurants, Cafes & Food Service Chains" },
//   { icon: Briefcase, name: "Business Consulting & Professional Services" },
// ]

// const stats = [
//   { icon: UserCheck, value: "5000+", label: "Happy Clients" },
//   { icon: UsersRound, value: "50,000+", label: "Employees Covered" },
//   { icon: Map, value: "28+", label: "States & UTs Covered" },
// ]

// export default function AboutPage() {
//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-br from-orange-50 to-blue-50">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-800">About Praans Consultech</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Your trusted, technology-driven partner in simplifying labour law compliance across India since 2021.
//           </p>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <Image
//                 src="/placeholder.svg?width=600&height=400"
//                 alt="Praans Consultech Team"
//                 width={600}
//                 height={400}
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//             <div>
//               <h2 className="text-4xl font-bold mb-6 text-slate-800">Our Story</h2>
//               <p className="text-gray-600 mb-4 leading-relaxed">
//                 Praans Consultech was founded in 2021 with a clear vision to simplify and streamline labour law 
//                 compliance for businesses across India. Understanding the increasing complexities HR and legal teams 
//                 face in keeping pace with evolving labour laws, our founders joined hands to establish a platform 
//                 that delivers accurate, efficient, and tech-driven compliance solutions.
//               </p>
//               <p className="text-gray-600 mb-4 leading-relaxed">
//                 Driven by their collective industry experience and deep understanding of clients' operational challenges, 
//                 the founders identified a crucial gap - most businesses struggled to manage multi-location compliance 
//                 with traditional, manual systems.
//               </p>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 In 2022, we proudly launched our AI-based Intelligent Compliance Management Software, designed to 
//                 automate, monitor, and simplify complex compliance workflows. Since then, Praans Consultech has grown 
//                 rapidly, expanding its service network to cover all states and union territories in India.
//               </p>

//               {/* Founders Section */}
//               <Card className="mt-6 bg-gradient-to-r from-orange-50 to-blue-50">
//                 <CardContent className="p-6">
//                   <h3 className="font-bold text-lg mb-4 text-slate-800">Meet Our Founding Team</h3>
//                   <div className="grid grid-cols-1 gap-3 mb-4">
//                     {founders.map((founder, index) => (
//                       <div key={index} className="flex items-center gap-3">
//                         <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
//                         <span className="font-semibold text-gray-800">{founder.name}</span>
//                         <span className="text-sm text-gray-600">({founder.role})</span>
//                       </div>
//                     ))}
//                   </div>
//                   <p className="text-gray-600 text-sm mb-4">
//                     Our journey is guided by founders with collective expertise in technology, legal compliance, 
//                     and business operations.
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Services Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-slate-800">Our Comprehensive Services</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Today, we are trusted by businesses across sectors for our end-to-end labour law services.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {services.map((service, index) => (
//               <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow bg-white">
//                 <CardContent className="p-6 flex items-center gap-4">
//                   <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
//                   <span className="font-semibold text-gray-800">{service}</span>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               With a dedicated team of legal experts, technology professionals, and on-ground compliance officers 
//               in every region, we ensure timely execution, localized support, and full legal accuracy. Our platform 
//               empowers businesses to stay compliant, avoid penalties, and focus on growth while we handle the 
//               complexities of labour law.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission Section */}
//       <section className="py-20 bg-slate-800 text-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 text-center">
//             <div>
//               <Eye className="w-16 h-16 mx-auto mb-4 text-orange-400" />
//               <h3 className="text-3xl font-bold mb-4">🚀 Our Vision</h3>
//               <p className="text-lg text-gray-300 max-w-lg mx-auto leading-relaxed">
//                 To become India's most trusted and technology-driven partner in labour law compliance, making complex 
//                 regulations simple, accessible, and manageable for every business.
//               </p>
//             </div>
//             <div>
//               <Target className="w-16 h-16 mx-auto mb-4 text-orange-400" />
//               <h3 className="text-3xl font-bold mb-4">🎯 Our Mission</h3>
//               <p className="text-lg text-gray-300 max-w-lg mx-auto leading-relaxed">
//                 To empower businesses with intelligent tools and expert support for labour law compliance, helping 
//                 organizations of all sizes manage risk, improve governance, and maintain seamless operations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Why Praans Consultech?</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We take pride in being a single-window solution for all statutory and regulatory compliance needs. 
//               Whether you're a startup, SME, or a large enterprise with operations in multiple states, 
//               Praans Consultech is your reliable partner in compliance.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {whyChooseUs.map((item, index) => (
//               <div key={index} className="flex items-start gap-4">
//                 <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
//                   <item.icon className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">✅ {item.title}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <p className="text-lg font-semibold text-slate-800 bg-gradient-to-r from-orange-100 to-blue-100 p-6 rounded-lg max-w-3xl mx-auto">
//               Let us manage your compliance so you can manage your business with peace of mind.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Clients Section */}
//       <section className="py-20 bg-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-slate-800">
//               Our Clients – Trusted by Businesses Across All Major Sectors
//             </h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto">
//               We proudly serve a wide spectrum of clients across India, offering tailored labour law compliance
//               solutions that meet the unique needs of each industry.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
//             {clientSectors.map((sector, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <sector.icon className="w-6 h-6 text-orange-500 flex-shrink-0" />
//                 <span className="font-medium text-gray-700">{sector.name}</span>
//               </div>
//             ))}
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-20 text-center max-w-4xl mx-auto">
//             {stats.map((stat, index) => (
//               <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
//                 <stat.icon className="w-12 h-12 mx-auto mb-3 text-orange-500" />
//                 <p className="text-4xl font-bold text-slate-800">{stat.value}</p>
//                 <p className="text-gray-500">{stat.label}</p>
//               </div>
//             ))}
//           </div>

//           <Card className="bg-white p-8 max-w-4xl mx-auto shadow-xl">
//             <div className="flex flex-col md:flex-row items-center gap-8">
//               <div className="flex-shrink-0">
//                 <Lock className="w-16 h-16 text-orange-500" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold mb-3 text-slate-800">🔒 Confidentiality You Can Rely On</h3>
//                 <p className="text-gray-600">
//                   Our professional integrity and commitment to discretion have helped us build lasting relationships
//                   across industries. Clients value not just our expertise—but our ability to handle their compliance
//                   needs quietly, efficiently, and with full respect for privacy.
//                 </p>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </section>

//       {/* Certifications & Recognition Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Certifications & Recognition</h2>
//             <p className="text-xl text-gray-600">
//               Our commitment to excellence is recognized by leading industry bodies and publications.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-2xl font-semibold mb-6 text-center">Our Certifications</h3>
//               <div className="flex flex-wrap justify-center items-center gap-8">
//                 {certifications.map((cert, index) => (
//                   <div key={index} className="text-center">
//                     <Image
//                       src={cert.logo || "/placeholder.svg"}
//                       alt={cert.name}
//                       width={150}
//                       height={80}
//                       className="grayscale hover:grayscale-0 transition-all duration-300 mx-auto"
//                     />
//                     <p className="text-sm text-gray-600 mt-2">{cert.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold mb-6 text-center">Media & Recognition</h3>
//               <div className="space-y-6">
//                 {media.map((item, index) => (
//                   <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
//                     <CardHeader className="flex flex-row items-center gap-4">
//                       <item.icon className="w-8 h-8 text-orange-500" />
//                       <div>
//                         <CardTitle className="text-lg">{item.title}</CardTitle>
//                         <p className="text-sm text-gray-500">{item.source}</p>
//                         {item.link && (
//                           <Link href={item.link} target="_blank" className="text-xs text-orange-600 hover:underline">
//                             Read Article →
//                           </Link>
//                         )}
//                       </div>
//                     </CardHeader>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }









// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   Target,
//   Eye,
//   Cpu,
//   Globe,
//   ShieldCheck,
//   UsersRound,
//   Headset,
//   Scaling,
//   Award,
//   Newspaper,
//   CheckCircle,
//   ArrowRight,
// } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// export const metadata = {
//   title: "About Us | Praans Consultech",
//   description: "Learn about Praans Consultech's mission to simplify labour law compliance across India with our AI-driven platform and expert legal team.",
//   keywords: "about praans consultech, labour law experts, compliance software company, sandeep kumar, nitesh kumar, allisha sharma",
// }

// const whyChooseUs = [
//   {
//     icon: Cpu,
//     title: "AI-Driven Compliance",
//     description: "Smart software for error-free filings & real-time alerts",
//   },
//   {
//     icon: Globe,
//     title: "Pan-India Coverage", 
//     description: "Local experts in every state for seamless compliance",
//   },
//   {
//     icon: ShieldCheck,
//     title: "End-to-End Solutions",
//     description: "From registrations to litigation, we handle it all",
//   },
//   {
//     icon: UsersRound,
//     title: "Expert Team",
//     description: "Labour law specialists & HR professionals on your side",
//   },
//   {
//     icon: Headset,
//     title: "Proactive Support",
//     description: "Timely updates & guidance to prevent penalties",
//   },
//   {
//     icon: Scaling,
//     title: "Customized for You",
//     description: "Scalable solutions for startups to enterprises",
//   },
// ]

// const services = [
//   "Labour Law Registrations",
//   "AI-Based Compliance Management Software", 
//   "Compliance Outsourcing Solutions",
//   "Litigation Support & Legal Representation",
//   "Labour Law Advisory Services",
//   "Audit and Inspection Support",
// ]

// const founders = [
//   "Mr. Sandeep Kumar",
//   "Mr. Nitesh Kumar", 
//   "Ms. Allisha Sharma"
// ]

// const certifications = [
//   "ISO",
//   "Startup India",
//   "MSME", 
//   "Ministry of Corporate Affairs"
// ]

// const media = [
//   {
//     title: "Best Labour Law Consultant",
//     source: "Excellence in Business Compliance"
//   },
//   {
//     title: "Shaping the Future of Labour Law and Business Registration",
//     source: "CEO India Magazine",
//     link: "https://ceoindiamagazine.com/praans-consultech-shaping-the-future-of-labour-law-and-business-registration/"
//   },
//   {
//     title: "Empowering India's Businesses Through Compliance",
//     source: "Success India Magazine", 
//     link: "https://successmagazine.in/empowering-indias-businesses-through-compliance-the-success-story-of-praans-consultech/"
//   },
// ]

// export default function AboutPage() {
//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-br from-orange-50 to-blue-50">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-800">About Praans Consultech</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Simplifying Labour Law Compliance for businesses across India since 2021
//           </p>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <h2 className="text-4xl font-bold mb-8 text-slate-800 text-center">Our Story</h2>
          
//           <div className="space-y-6 text-gray-600 leading-relaxed">
//             <p>
//               Praans Consultech was founded in 2021 with a clear vision to simplify and streamline labour law compliance for businesses across India. Understanding the increasing complexities HR and legal teams face in keeping pace with evolving labour laws, our founders <strong>Mr. Sandeep Kumar, Mr. Nitesh Kumar, and Ms. Allisha Sharma</strong> joined hands to establish a platform that delivers accurate, efficient, and tech-driven compliance solutions.
//             </p>
            
//             <p>
//               Driven by their collective industry experience and deep understanding of clients' operational challenges, the founders identified a crucial gap most businesses struggled to manage multi-location compliance with traditional, manual systems. Driven by this understanding, we developed our premier compliance platform.
//             </p>
            
//             <p>
//               In 2022, we proudly launched our <strong>AI-based Intelligent Compliance Management Software</strong>, designed to automate, monitor, and simplify complex compliance workflows.
//             </p>
            
//             <p>
//               Since then, Praans Consultech has grown rapidly, expanding its service network to cover all states and union territories in India. With a dedicated team of legal experts, technology professionals, and on-ground compliance officers in every region, we ensure timely execution, localized support, and full legal accuracy.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Services */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-4 text-slate-800">Our Services</h2>
//             <p className="text-xl text-gray-600">Today, we are trusted by businesses across sectors for our end-to-end labour law services</p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {services.map((service, index) => (
//               <Card key={index} className="shadow-lg bg-white">
//                 <CardContent className="p-6 flex items-center gap-4">
//                   <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
//                   <span className="font-semibold text-gray-800">{service}</span>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission */}
//       <section className="py-20 bg-slate-800 text-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 text-center">
//             <div>
//               <Eye className="w-16 h-16 mx-auto mb-4 text-orange-400" />
//               <h3 className="text-3xl font-bold mb-4">🚀 Our Vision</h3>
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 To become India's most trusted and technology-driven partner in labour law compliance making complex regulations simple, accessible, and manageable for every business.
//               </p>
//             </div>
//             <div>
//               <Target className="w-16 h-16 mx-auto mb-4 text-orange-400" />
//               <h3 className="text-3xl font-bold mb-4">🎯 Our Mission</h3>
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 To empower businesses with intelligent tools and expert support for labour law compliance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Why Praans Consultech?</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We take pride in being a single-window solution for all statutory and regulatory compliance needs
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {whyChooseUs.map((item, index) => (
//               <div key={index} className="flex items-start gap-4">
//                 <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
//                   <item.icon className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">✅ {item.title}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="text-center mt-12">
//             <div className="bg-gradient-to-r from-orange-100 to-blue-100 p-8 rounded-lg max-w-4xl mx-auto">
//               <p className="text-lg font-semibold text-slate-800">
//                 Whether you're a startup, SME, or a large enterprise with operations in multiple states, Praans Consultech is your reliable partner in compliance. Let us manage your compliance so you can manage your business with peace of mind.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Certifications & Recognition */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Certifications & Recognition</h2>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
//             {/* Certifications */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {certifications.map((cert, index) => (
//                   <Card key={index} className="text-center p-4">
//                     <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                       <Award className="w-6 h-6 text-orange-600" />
//                     </div>
//                     <p className="font-semibold">{cert}</p>
//                   </Card>
//                 ))}
//               </div>
//             </div>
            
//             {/* Media Recognition */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-6 text-center">Media & Recognition</h3>
//               <div className="space-y-4">
//                 {media.map((item, index) => (
//                   <Card key={index} className="shadow-md">
//                     <CardContent className="p-6">
//                       <div className="flex items-start gap-4">
//                         <Newspaper className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
//                         <div>
//                           <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
//                           <p className="text-sm text-gray-600 mb-2">{item.source}</p>
//                           {item.link && (
//                             <Link href={item.link} target="_blank" className="text-orange-600 hover:underline text-sm">
//                               Read Article →
//                             </Link>
//                           )}
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }







// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   Target,
//   Eye,
//   Cpu,
//   Globe,
//   ShieldCheck,
//   UsersRound,
//   Headset,
//   Scaling,
//   Award,
//   Newspaper,
//   CheckCircle,
//   ArrowRight,
//   Building2,
//   Calendar,
//   Users,
//   MapPin,
//   Star,
//   ExternalLink,
// } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// export const metadata = {
//   title: "About Us | Praans Consultech",
//   description: "Learn about Praans Consultech's mission to simplify labour law compliance across India with our AI-driven platform and expert legal team.",
//   keywords: "about praans consultech, labour law experts, compliance software company, sandeep kumar, nitesh kumar, allisha sharma",
// }

// const whyChooseUs = [
//   {
//     icon: Cpu,
//     title: "AI-Driven Compliance",
//     description: "Smart software for error-free filings & real-time alerts",
//     highlight: "99.9% Accuracy Rate"
//   },
//   {
//     icon: Globe,
//     title: "Pan-India Coverage", 
//     description: "Local experts in every state for seamless compliance",
//     highlight: "28 States + 8 UTs"
//   },
//   {
//     icon: ShieldCheck,
//     title: "End-to-End Solutions",
//     description: "From registrations to litigation, we handle it all",
//     highlight: "Complete Protection"
//   },
//   {
//     icon: UsersRound,
//     title: "Expert Team",
//     description: "Labour law specialists & HR professionals on your side",
//     highlight: "100+ Experts"
//   },
//   {
//     icon: Headset,
//     title: "Proactive Support",
//     description: "Timely updates & guidance to prevent penalties",
//     highlight: "24/7 Available"
//   },
//   {
//     icon: Scaling,
//     title: "Customized Solutions",
//     description: "Scalable solutions for startups to enterprises",
//     highlight: "Any Business Size"
//   },
// ]

// const services = [
//   {
//     title: "Labour Law Registrations",
//     description: "Complete registration services across all states"
//   },
//   {
//     title: "AI-Based Compliance Management Software",
//     description: "Intelligent automation for compliance workflows"
//   },
//   {
//     title: "Compliance Outsourcing Solutions", 
//     description: "Full-service compliance management"
//   },
//   {
//     title: "Litigation Support & Legal Representation",
//     description: "Expert legal defense and court support"
//   },
//   {
//     title: "Labour Law Advisory Services",
//     description: "Strategic guidance from legal experts"
//   },
//   {
//     title: "Audit and Inspection Support",
//     description: "Comprehensive audit preparation and support"
//   },
// ]

// const founders = [
//   {
//     name: "Mr. Sandeep Kumar",
//     role: "Co-Founder & CEO",
//     expertise: "Labour Law & Business Strategy"
//   },
//   {
//     name: "Mr. Nitesh Kumar",
//     role: "Co-Founder & CTO", 
//     expertise: "Technology & Product Development"
//   },
//   {
//     name: "Ms. Allisha Sharma",
//     role: "Co-Founder & COO",
//     expertise: "Operations & Legal Affairs"
//   }
// ]

// const stats = [
//   {
//     icon: Users,
//     number: "5000+",
//     label: "Happy Clients",
//     color: "text-blue-600"
//   },
//   {
//     icon: MapPin,
//     number: "36",
//     label: "States & UTs Covered",
//     color: "text-green-600"
//   },
//   {
//     icon: Calendar,
//     number: "2021",
//     label: "Established",
//     color: "text-purple-600"
//   },
//   {
//     icon: Building2,
//     number: "100%",
//     label: "Success Rate",
//     color: "text-orange-600"
//   }
// ]

// const certifications = [
//   {
//     name: "ISO Certified",
//     description: "Quality Management System"
//   },
//   {
//     name: "Startup India",
//     description: "Government Recognition"
//   },
//   {
//     name: "MSME Registered", 
//     description: "Micro, Small & Medium Enterprise"
//   },
//   {
//     name: "MCA Approved",
//     description: "Ministry of Corporate Affairs"
//   }
// ]

// const media = [
//   {
//     title: "Best Labour Law Consultant",
//     source: "Excellence in Business Compliance",
//     year: "2024",
//     type: "Award"
//   },
//   {
//     title: "Shaping the Future of Labour Law and Business Registration",
//     source: "CEO India Magazine",
//     year: "2024",
//     type: "Feature",
//     link: "https://ceoindiamagazine.com/praans-consultech-shaping-the-future-of-labour-law-and-business-registration/"
//   },
//   {
//     title: "Empowering India's Businesses Through Compliance",
//     source: "Success India Magazine",
//     year: "2023", 
//     type: "Interview",
//     link: "https://successmagazine.in/empowering-indias-businesses-through-compliance-the-success-story-of-praans-consultech/"
//   },
// ]

// export default function AboutPage() {
//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-blue-100/20" />
//         <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40 bg-orange-200/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-40 h-40 md:w-48 md:h-48 bg-blue-200/30 rounded-full blur-3xl" />
        
//         <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-slate-800 leading-tight">
//             About Praans Consultech
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Simplifying Labour Law Compliance for businesses across India since 2021
//           </p>
          
//           {/* Stats Cards */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 max-w-4xl mx-auto">
//             {stats.map((stat, index) => (
//               <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
//                 <CardContent className="p-4 md:p-6 text-center">
//                   <stat.icon className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 ${stat.color}`} />
//                   <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm md:text-base text-gray-600 font-medium">
//                     {stat.label}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-4 md:px-6 max-w-6xl">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Our Story</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div className="space-y-6 text-gray-600 leading-relaxed">
//               <p className="text-base md:text-lg">
//                 Praans Consultech was founded in 2021 with a clear vision to simplify and streamline labour law compliance for businesses across India. Understanding the increasing complexities HR and legal teams face in keeping pace with evolving labour laws, our founders joined hands to establish a platform that delivers accurate, efficient, and tech-driven compliance solutions.
//               </p>
              
//               <p className="text-base md:text-lg">
//                 Driven by their collective industry experience and deep understanding of clients' operational challenges, the founders identified a crucial gap most businesses struggled to manage multi-location compliance with traditional, manual systems.
//               </p>
              
//               <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 md:p-8 rounded-2xl border-l-4 border-orange-500">
//                 <p className="text-base md:text-lg font-semibold text-slate-800 mb-2">
//                   Milestone Achievement
//                 </p>
//                 <p className="text-base md:text-lg text-gray-700">
//                   In 2022, we proudly launched our <strong>AI-based Intelligent Compliance Management Software</strong>, designed to automate, monitor, and simplify complex compliance workflows.
//                 </p>
//               </div>
              
//               <p className="text-base md:text-lg">
//                 Since then, Praans Consultech has grown rapidly, expanding its service network to cover all states and union territories in India. With a dedicated team of legal experts, technology professionals, and on-ground compliance officers in every region, we ensure timely execution, localized support, and full legal accuracy.
//               </p>
//             </div>
            
//             {/* Founders Section */}
//             <div className="space-y-6">
//               <h3 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">Meet Our Founders</h3>
//               <div className="space-y-4">
//                 {founders.map((founder, index) => (
//                   <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
//                     <CardContent className="p-6">
//                       <div className="flex items-center gap-4">
//                         <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
//                           {founder.name.split(' ')[1][0]}
//                         </div>
//                         <div>
//                           <h4 className="text-lg md:text-xl font-semibold text-slate-800">
//                             {founder.name}
//                           </h4>
//                           <p className="text-orange-600 font-medium text-sm md:text-base">
//                             {founder.role}
//                           </p>
//                           <p className="text-gray-600 text-sm">
//                             {founder.expertise}
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Services */}
//       <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Our Services</h2>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               Today, we are trusted by businesses across sectors for our end-to-end labour law services
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
//             {services.map((service, index) => (
//               <Card key={index} className="shadow-lg bg-white hover:shadow-xl transition-all duration-300 group border-0">
//                 <CardContent className="p-6 md:p-8">
//                   <div className="flex items-start gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                       <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
//                         {service.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//                         {service.description}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission */}
//       <section className="py-16 md:py-20 bg-slate-800 text-white relative overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />
//         <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl" />
        
//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Vision & Mission</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
//             <Card className="bg-white/10 backdrop-blur-sm border-0 text-white hover:bg-white/15 transition-all duration-300">
//               <CardContent className="p-8 md:p-10 text-center">
//                 <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <Eye className="w-8 h-8 md:w-10 md:h-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Vision</h3>
//                 <p className="text-base md:text-lg text-gray-200 leading-relaxed">
//                   To become India's most trusted and technology-driven partner in labour law compliance making complex regulations simple, accessible, and manageable for every business.
//                 </p>
//               </CardContent>
//             </Card>
            
//             <Card className="bg-white/10 backdrop-blur-sm border-0 text-white hover:bg-white/15 transition-all duration-300">
//               <CardContent className="p-8 md:p-10 text-center">
//                 <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Mission</h3>
//                 <p className="text-base md:text-lg text-gray-200 leading-relaxed">
//                   To empower businesses with intelligent tools and expert support for labour law compliance, ensuring they focus on growth while we handle regulations.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Why Choose Praans Consultech?</h2>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               We take pride in being a single-window solution for all statutory and regulatory compliance needs
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
//             {whyChooseUs.map((item, index) => (
//               <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
//                 <CardContent className="p-6 md:p-8">
//                   <div className="flex items-start gap-4">
//                     <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                       <item.icon className="w-6 h-6 md:w-7 md:h-7" />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center justify-between mb-2">
//                         <h3 className="text-lg md:text-xl font-semibold text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
//                           {item.title}
//                         </h3>
//                         <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
//                           {item.highlight}
//                         </span>
//                       </div>
//                       <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
          
//           <div className="text-center mt-12 md:mt-16">
//             <Card className="bg-gradient-to-r from-orange-50 via-white to-blue-50 border-0 shadow-xl max-w-4xl mx-auto">
//               <CardContent className="p-8 md:p-12">
//                 <p className="text-lg md:text-xl font-semibold text-slate-800 leading-relaxed">
//                   Whether you're a startup, SME, or a large enterprise with operations in multiple states, Praans Consultech is your reliable partner in compliance. Let us manage your compliance so you can manage your business with peace of mind.
//                 </p>
//                 <div className="mt-6">
//                   <Button 
//                     size="lg" 
//                     className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold"
//                   >
//                     Get Started Today
//                     <ArrowRight className="ml-2 w-5 h-5" />
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Certifications & Recognition */}
//       <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Certifications & Recognition</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
//           </div>
          
//           <div className="grid lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
//             {/* Certifications */}
//             <div>
//               <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-slate-800">
//                 Certifications
//               </h3>
//               <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
//                 {certifications.map((cert, index) => (
//                   <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 group border-0">
//                     <CardContent className="p-6 md:p-8">
//                       <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                         <Award className="w-8 h-8 md:w-10 md:h-10 text-orange-600" />
//                       </div>
//                       <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
//                         {cert.name}
//                       </h4>
//                       <p className="text-gray-600 text-sm md:text-base">
//                         {cert.description}
//                       </p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
            
//             {/* Media Recognition */}
//             <div>
//               <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-slate-800">
//                 Media & Recognition
//               </h3>
//               <div className="space-y-4 md:space-y-6">
//                 {media.map((item, index) => (
//                   <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0">
//                     <CardContent className="p-6 md:p-8">
//                       <div className="flex items-start gap-4">
//                         <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
//                           <Newspaper className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
//                         </div>
//                         <div className="flex-1">
//                           <div className="flex items-start justify-between mb-3">
//                             <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
//                               {item.type}
//                             </span>
//                             <span className="text-xs text-gray-500 font-medium">
//                               {item.year}
//                             </span>
//                           </div>
//                           <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 leading-tight">
//                             {item.title}
//                           </h4>
//                           <p className="text-sm md:text-base text-gray-600 mb-3">
//                             {item.source}
//                           </p>
//                           {item.link && (
//                             <Link 
//                               href={item.link} 
//                               target="_blank" 
//                               className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm md:text-base group"
//                             >
//                               Read Article
//                               <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
//                             </Link>
//                           )}
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }







import { Button } from "@/components/ui/button"
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
  Building2,
  Calendar,
  Users,
  MapPin,
  Star,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
    highlight: "99.9% Accuracy"
  },
  {
    icon: Globe,
    title: "Pan-India Coverage", 
    description: "Local experts in every state for seamless compliance",
    highlight: "All States & UTs"
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Solutions",
    description: "From registrations to litigation, we handle it all",
    highlight: "Complete Service"
  },
  {
    icon: UsersRound,
    title: "Expert Team",
    description: "Labour law specialists & HR professionals on your side",
    highlight: "Expert Support"
  },
  {
    icon: Headset,
    title: "Proactive Support",
    description: "Timely updates & guidance to prevent penalties",
    highlight: "24/7 Available"
  },
  {
    icon: Scaling,
    title: "Customized for You",
    description: "Scalable solutions for startups to enterprises",
    highlight: "All Business Sizes"
  },
]

const services = [
  {
    title: "Labour Law Registrations",
    description: "Complete registration services across all states and union territories"
  },
  {
    title: "AI-Based Compliance Management Software",
    description: "Intelligent automation for compliance workflows with real-time monitoring"
  },
  {
    title: "Compliance Outsourcing Solutions", 
    description: "Full-service compliance management so you can focus on your business"
  },
  {
    title: "Litigation Support & Legal Representation",
    description: "Expert legal defense and comprehensive court support services"
  },
  {
    title: "Labour Law Advisory Services",
    description: "Strategic guidance and consultation from certified legal experts"
  },
  {
    title: "Audit and Inspection Support",
    description: "Complete preparation and support for audits and compliance inspections"
  },
]

const founders = [
  {
    name: "Mr. Sandeep Kumar",
    role: "Co-Founder",
    expertise: "Labour Law & Business Strategy"
  },
  {
    name: "Mr. Nitesh Kumar",
    role: "Co-Founder", 
    expertise: "Technology & Product Development"
  },
  {
    name: "Ms. Allisha Sharma",
    role: "Co-Founder",
    expertise: "Operations & Legal Affairs"
  }
]

const stats = [
  {
    icon: Users,
    number: "5000+",
    label: "Happy Clients",
    color: "text-blue-600"
  },
  {
    icon: MapPin,
    number: "36",
    label: "States & UTs Covered",
    color: "text-green-600"
  },
  {
    icon: Calendar,
    number: "2021",
    label: "Established",
    color: "text-purple-600"
  },
  {
    icon: Building2,
    number: "100%",
    label: "Success Rate",
    color: "text-orange-600"
  }
]

const certifications = [
  {
    name: "ISO Certified",
    description: "Quality Management System"
  },
  {
    name: "Startup India",
    description: "Government Recognition Program"
  },
  {
    name: "MSME Registered", 
    description: "Micro, Small & Medium Enterprise"
  },
  {
    name: "Ministry of Corporate Affairs",
    description: "Government Approved Entity"
  }
]

const media = [
  {
    title: "Best Labour Law Consultant",
    source: "Excellence in Business Compliance",
    year: "2024",
    type: "Award"
  },
  {
    title: "Shaping the Future of Labour Law and Business Registration",
    source: "CEO India Magazine",
    year: "2024",
    type: "Feature",
    link: "https://ceoindiamagazine.com/praans-consultech-shaping-the-future-of-labour-law-and-business-registration/"
  },
  {
    title: "Empowering India's Businesses Through Compliance: The Success Story of Praans Consultech",
    source: "Success India Magazine",
    year: "2023", 
    type: "Success Story",
    link: "https://successmagazine.in/empowering-indias-businesses-through-compliance-the-success-story-of-praans-consultech/"
  },
]

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-blue-100/20" />
        <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-48 md:h-48 bg-blue-200/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-slate-800 leading-tight">
            About Praans Consultech
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simplifying Labour Law Compliance for businesses across India since 2021
          </p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-4 md:p-6 text-center">
                  <stat.icon className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 ${stat.color}`} />
                  <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-base md:text-lg">
                Praans Consultech was founded in 2021 with a clear vision to simplify and streamline labour law compliance for businesses across India. Understanding the increasing complexities HR and legal teams face in keeping pace with evolving labour laws, our founders <strong>Mr. Sandeep Kumar, Mr. Nitesh Kumar, and Ms. Allisha Sharma</strong> joined hands to establish a platform that delivers accurate, efficient, and tech-driven compliance solutions.
              </p>
              
              <p className="text-base md:text-lg">
                Driven by their collective industry experience and deep understanding of clients' operational challenges, the founders identified a crucial gap most businesses struggled to manage multi-location compliance with traditional, manual systems. Driven by this understanding, we developed our premier compliance platform.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 md:p-8 rounded-2xl border-l-4 border-orange-500">
                <p className="text-base md:text-lg font-semibold text-slate-800 mb-2">
                  Milestone Achievement - 2022
                </p>
                <p className="text-base md:text-lg text-gray-700">
                  We proudly launched our <strong>AI-based Intelligent Compliance Management Software</strong>, designed to automate, monitor, and simplify complex compliance workflows.
                </p>
              </div>
              
              <p className="text-base md:text-lg">
                Since then, Praans Consultech has grown rapidly, expanding its service network to cover all states and union territories in India. With a dedicated team of legal experts, technology professionals, and on-ground compliance officers in every region, we ensure timely execution, localized support, and full legal accuracy.
              </p>
              
              <p className="text-base md:text-lg">
                Our platform empowers businesses to stay compliant, avoid penalties, and focus on growth while we handle the complexities of labour law. We take pride in being a single-window solution for all statutory and regulatory compliance needs, helping organizations of all sizes manage risk, improve governance, and maintain seamless operations across multiple states.
              </p>
            </div>
            
            {/* Founders Section */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">Meet Our Founders</h3>
              <div className="space-y-4">
                {founders.map((founder, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {founder.name.split(' ')[1][0]}
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold text-slate-800">
                            {founder.name}
                          </h4>
                          <p className="text-orange-600 font-medium text-sm md:text-base">
                            {founder.role}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {founder.expertise}
                          </p>
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

      {/* Our Services */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Today, we are trusted by businesses across sectors for our end-to-end labour law services
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
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-slate-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Vision & Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Vision</h3>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                  To become India's most trusted and technology-driven partner in labour law compliance making complex regulations simple, accessible, and manageable for every business.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Mission</h3>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                  To empower businesses with intelligent tools and expert support for labour law compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Why Praans Consultech?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We take pride in being a single-window solution for all statutory and regulatory compliance needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg md:text-xl font-semibold text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                          {item.highlight}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 md:mt-16">
            <Card className="bg-gradient-to-r from-orange-50 via-white to-blue-50 border-0 shadow-xl max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg md:text-xl font-semibold text-slate-800 leading-relaxed mb-6">
                  Whether you're a startup, SME, or a large enterprise with operations in multiple states, Praans Consultech is your reliable partner in compliance. Let us manage your compliance so you can manage your business with peace of mind.
                </p>
                <div className="mt-6">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Recognition */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Certifications & Recognition</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-slate-800">
                Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 group border-0">
                    <CardContent className="p-6 md:p-8">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-8 h-8 md:w-10 md:h-10 text-orange-600" />
                      </div>
                      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        {cert.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Media Recognition */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-slate-800">
                Media & Recognition
              </h3>
              <div className="space-y-4 md:space-y-6">
                {media.map((item, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                          <Newspaper className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              {item.type}
                            </span>
                            <span className="text-xs text-gray-500 font-medium">
                              {item.year}
                            </span>
                          </div>
                          <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-sm md:text-base text-gray-600 mb-3">
                            {item.source}
                          </p>
                          {item.link && (
                            <Link 
                              href={item.link} 
                              target="_blank" 
                              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm md:text-base group"
                            >
                              Read Article
                              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
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