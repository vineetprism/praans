// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { 
//   Users, 
//   Award, 
//   Target, 
//   BookOpen, 
//   Building2, 
//   Briefcase,
//   GraduationCap,
//   ExternalLink,
//   CheckCircle,
//   Lightbulb,
//   ArrowRight
// } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// export const metadata = {
//   title: "Meet Our Founder | Praans Consultech",
//   description: "Meet our visionary founder - Your trusted labour law consultant with over 15 years of expertise in labour law compliance across India.",
// }

// const qualifications = [
//   {
//     degree: "B.Sc.",
//     description: "Cultivated analytical skills that help decode complex regulatory issues"
//   },
//   {
//     degree: "LL.B. and LL.M.",
//     description: "Provided comprehensive legal understanding of Indian labour laws, employment regulations, and industrial relations"
//   },
//   {
//     degree: "PG Diploma in Labour Laws & Industrial Relations",
//     description: "Built strong foundations in labour laws and industrial relations"
//   },
//   {
//     degree: "XLRI Alumnus",
//     description: "Gained advanced leadership and HR management insights from one of India's most respected business schools"
//   },
//   {
//     degree: "Ph.D. (Pursuing)",
//     description: "Currently pursuing doctoral research in labour law and compliance frameworks, staying ahead of evolving legal trends"
//   }
// ]

// const services = [
//   "Labour Law Registrations – Shops & Establishments, CLRA, ESIC, EPF, and more",
//   "AI-Powered Compliance Software – Monitor and manage statutory obligations seamlessly", 
//   "Compliance Outsourcing – Seamless labour law management from Start to Finish",
//   "Labour Law Litigation Support – Legal representation and case management",
//   "Advisory Services – Expert guidance on labour law strategy, audits, and reforms",
//   "Audit and Inspection Handling – Complete support during statutory audits, inspections, and departmental visits"
// ]

// const achievements = [
//   "Over 2,500 locations managed",
//   "More than 50,000 employees covered PAN India",
//   "Former Director of Legal & Compliance at top logistics company",
//   "15+ years of expertise in labour law compliance"
// ]

// const leadershipBenefits = [
//   "Real-time compliance alerts designed for your industry",
//   "Local execution with centralized control", 
//   "Expert handling of inspections, notices, and legal issues",
//   "Scalable solutions for startups, MSMEs, and large enterprises",
//   "Seamless audit and inspection readiness"
// ]

// const featuredArticles = [
//   {
//     title: "Praans Consultech: Empowering Businesses with Seamless Compliance Solutions",
//     source: "AsiaConnect Magazine",
//     link: "https://asiaconnectmagazine.com/praans-consultech-empowering-businesses-with-seamless-compliance-solutions/"
//   },
//   {
//     title: "The Visionary Who Left Corporate Success to Empower Everyday Entrepreneurs", 
//     source: "Hindustan Metro",
//     link: "https://www.hindustanmetro.com/the-visionary-who-left-corporate-success-to-empower-everyday-entrepreneurs/"
//   }
// ]

// export default function OurFoundersPage() {
//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-br from-orange-50 to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
//             <div>
//               <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800">Meet Our Founder</h1>
//               <h2 className="text-2xl font-semibold mb-4 text-orange-600">
//                 Your Trusted Labour Law Consultant with Over 15 Years of Expertise
//               </h2>
//               <p className="text-xl text-gray-600 leading-relaxed">
//                 At Praans Consultech, our journey is led by a visionary labour law consultant who brings over 15 years of in-depth experience in managing and simplifying labour law compliance for businesses across India.
//               </p>
//             </div>
//             <div className="flex justify-center">
//               <div className="w-80 h-80 bg-gradient-to-br from-orange-200 to-blue-200 rounded-full flex items-center justify-center shadow-2xl">
//                 <Image
//                   src="/founder-photo.jpg" // Add your photo here
//                   alt="Founder - Praans Consultech"
//                   width={300}
//                   height={300}
//                   className="rounded-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Founder Introduction */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
//             <p>
//               Our founder is not only a legal expert but a trusted partner to countless organizations seeking clarity and control over their statutory responsibilities.
//             </p>
//             <p>
//               With a background in managing compliance for over <strong className="text-orange-600">2,500 locations</strong> and more than <strong className="text-orange-600">50,000 employees PAN India</strong>, our founder has demonstrated exceptional capability in handling complex labour law operations across multiple states and sectors.
//             </p>
//             <p>
//               Formerly the <strong>Director of Legal & Compliance</strong> at a top logistics and courier company, their leadership in large-scale operations laid the foundation for what Praans Consultech stands for today – <strong className="text-slate-800">excellence, reliability, and innovation in labour law compliance.</strong>
//             </p>
//           </div>

//           {/* Achievements Cards */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//             {achievements.map((achievement, index) => (
//               <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
//                 <CardContent className="p-6 text-center">
//                   <Award className="w-8 h-8 text-orange-500 mx-auto mb-3" />
//                   <p className="font-semibold text-gray-800">{achievement}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Educational Background */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-slate-800">A Strong Educational Foundation in Law and Compliance</h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto">
//               Our founder's success as a labour law expert in India is built on a solid academic background
//             </p>
//           </div>

//           <div className="space-y-6 max-w-5xl mx-auto">
//             {qualifications.map((qual, index) => (
//               <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
//                 <CardContent className="p-6">
//                   <div className="flex items-start gap-4">
//                     <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
//                       <GraduationCap className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold mb-2 text-slate-800">{qual.degree}</h3>
//                       <p className="text-gray-600">{qual.description}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
//               <p className="text-lg font-semibold text-slate-800">
//                 This rare combination of practical experience, legal acumen, and academic excellence positions our founder among the <strong className="text-orange-600">top labour law consultants in India.</strong>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* From Field Expertise to Tech */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-slate-800">From Field Expertise to Tech-Driven Solutions</h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto">
//               Understanding the growing need for automation and real-time compliance tracking, our founder envisioned a smarter way for businesses to manage their statutory obligations.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
//             <div>
//               <div className="bg-gradient-to-br from-orange-100 to-blue-100 p-8 rounded-2xl">
//                 <Lightbulb className="w-12 h-12 text-orange-600 mb-4" />
//                 <h3 className="text-2xl font-bold mb-4 text-slate-800">Innovation in Action</h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   This led to the creation of Praans Consultech's <strong>AI-based Compliance Management Software</strong>, launched in 2022. Designed with real-world challenges in mind, this intelligent platform helps businesses automate compliance tracking, receive deadline alerts, manage registers, and avoid penalties.
//                 </p>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold mb-6 text-slate-800">Our Services Portfolio</h3>
//               <div className="space-y-3">
//                 {services.map((service, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
//                     <p className="text-gray-600">{service}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vision */}
//       <section className="py-20 bg-slate-800 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <Target className="w-16 h-16 mx-auto mb-6 text-orange-400" />
//           <h2 className="text-4xl font-bold mb-6">Vision: Simplifying Compliance, Empowering Businesses</h2>
//           <div className="max-w-4xl mx-auto">
//             <blockquote className="text-2xl font-light italic mb-8 text-gray-300">
//               "To empower businesses across India with accessible, affordable, and intelligent labour law compliance solutions—ensuring legal safety while promoting employee welfare and operational efficiency."
//             </blockquote>
//             <p className="text-lg text-gray-300 leading-relaxed">
//               They strongly believe that labour law compliance shouldn't be a burden but a well-managed system that promotes fair practices, protects organizations, and upholds employee rights. This belief fuels everything we do at Praans Consultech.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Leadership Matters */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-slate-800">Why Our Founder's Leadership Matters</h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto">
//               In a country where labour laws vary by state, enforcement is dynamic, and penalties are costly, having a knowledgeable and proactive labour law compliance consultant makes all the difference.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {leadershipBenefits.map((benefit, index) => (
//               <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
//                 <CardContent className="p-6 text-center">
//                   <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <CheckCircle className="w-6 h-6 text-orange-600" />
//                   </div>
//                   <p className="font-semibold text-gray-800">{benefit}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               With a growing client base and PAN India presence, our founder continues to innovate and lead Praans Consultech as one of the most <strong className="text-orange-600">trusted labour law consultants in India.</strong>
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Articles */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-slate-800">Read Our Featured Articles</h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {featuredArticles.map((article, index) => (
//               <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow">
//                 <CardContent className="p-8">
//                   <div className="flex items-start gap-4">
//                     <ExternalLink className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
//                     <div>
//                       <h3 className="text-lg font-bold mb-2 text-slate-800">{article.title}</h3>
//                       <p className="text-sm text-gray-600 mb-4">{article.source}</p>
//                       <Link 
//                         href={article.link} 
//                         target="_blank" 
//                         className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center gap-2"
//                       >
//                         Read Article <ArrowRight className="w-4 h-4" />
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-slate-800 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-6">Looking for a reliable partner to manage your labour law compliance?</h2>
//           <p className="text-xl mb-8 text-gray-300">Get in touch with Praans Consultech — Led by India's trusted labour law expert.</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6">
//               Get Free Consultation
//             </Button>
//             <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-800 text-lg px-8 py-6">
//               Contact Us Today
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }









import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap,
  ExternalLink,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  Target,
  Users
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Meet Our Founder | Praans Consultech",
  description: "Meet our visionary founder - Your trusted labour law consultant with over 15 years of expertise in labour law compliance across India.",
}

const qualifications = [
  {
    degree: "B.Sc.",
    description: "Cultivated analytical skills that help decode complex regulatory issues."
  },
  {
    degree: "LL.B. and LL.M.",
    description: "Provided comprehensive legal understanding of Indian labour laws, employment regulations, and industrial relations."
  },
  {
    degree: "PG Diploma in Labour Laws & Industrial Relations",
    description: "Built strong foundations in labour laws and industrial relations."
  },
  {
    degree: "XLRI Alumnus",
    description: "Gained advanced leadership and HR management insights from one of India's most respected business schools."
  },
  {
    degree: "Ph.D. (Pursuing)",
    description: "Currently pursuing doctoral research in labour law and compliance frameworks, staying ahead of evolving legal trends."
  }
]

const services = [
  "Labour Law Registrations – Shops & Establishments, CLRA, ESIC, EPF, and more",
  "AI-Powered Compliance Software – Monitor and manage statutory obligations seamlessly", 
  "Compliance Outsourcing – Seamless labour law management from Start to Finish",
  "Labour Law Litigation Support – Legal representation and case management",
  "Advisory Services – Expert guidance on labour law strategy, audits, and reforms",
  "Audit and Inspection Handling – Complete support during statutory audits, inspections, and departmental visits"
]

const leadershipBenefits = [
  "Real-time compliance alerts designed for your industry",
  "Local execution with centralized control", 
  "Expert handling of inspections, notices, and legal issues",
  "Scalable solutions for startups, MSMEs, and large enterprises",
  "Seamless audit and inspection readiness"
]

const featuredArticles = [
  {
    title: "Praans Consultech: Empowering Businesses with Seamless Compliance Solutions",
    source: "AsiaConnect Magazine",
    link: "https://asiaconnectmagazine.com/praans-consultech-empowering-businesses-with-seamless-compliance-solutions/"
  },
  {
    title: "The Visionary Who Left Corporate Success to Empower Everyday Entrepreneurs", 
    source: "Hindustan Metro",
    link: "https://www.hindustanmetro.com/the-visionary-who-left-corporate-success-to-empower-everyday-entrepreneurs/"
  }
]

export default function OurFoundersPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section - Meet Our Founder */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800">Meet Our Founder</h1>
              <h2 className="text-2xl font-semibold mb-6 text-orange-600">
                Your Trusted Labour Law Consultant with Over 15 Years of Expertise
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Praans Consultech, our journey is led by a visionary labour law consultant who brings over 15 years of in-depth experience in managing and simplifying labour law compliance for businesses across India. Our founder is not only a legal expert but a trusted partner to countless organizations seeking clarity and control over their statutory responsibilities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a background in managing compliance for over <strong className="text-orange-600">2,500 locations</strong> and more than <strong className="text-orange-600">50,000 employees PAN India</strong>, our founder has demonstrated exceptional capability in handling complex labour law operations across multiple states and sectors. Formerly the <strong>Director of Legal & Compliance</strong> at a top logistics and courier company, their leadership in large-scale operations laid the foundation for what Praans Consultech stands for today – excellence, reliability, and innovation in labour law compliance.
              </p>
            </div>
            {/* Photo in right */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-orange-200 to-blue-200 rounded-3xl flex items-center justify-center shadow-2xl">
                <Image
                  src="/founder-photo.jpg" // Add your photo here
                  alt="Founder - Praans Consultech"
                  width={300}
                  height={300}
                  className="rounded-3xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">A Strong Educational Foundation in Law and Compliance</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our founder's success as a labour law expert in India is built on a solid academic background:
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {qualifications.map((qual, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-800">{qual.degree}</h3>
                      <p className="text-gray-600">{qual.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-orange-100 to-blue-100 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
              <p className="text-lg font-semibold text-slate-800">
                This rare combination of practical experience, legal acumen, and academic excellence positions our founder among the <strong className="text-orange-600">top labour law consultants in India.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From Field Expertise to Tech */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">From Field Expertise to Tech-Driven Solutions</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Understanding the growing need for automation and real-time compliance tracking, our founder envisioned a smarter way for businesses to manage their statutory obligations. This led to the creation of Praans Consultech's AI-based Compliance Management Software, launched in 2022. Designed with real-world challenges in mind, this intelligent platform helps businesses automate compliance tracking, receive deadline alerts, manage registers, and avoid penalties.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 text-center">
              Our founder's hands-on experience and visionary approach have helped us become a leading labour law consultancy firm in India, offering services such as:
            </p>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Target className="w-16 h-16 mx-auto mb-6 text-orange-400" />
          <h2 className="text-4xl font-bold mb-6">Vision: Simplifying Compliance, Empowering Businesses</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-8">Our founder's vision is both practical and impactful:</p>
            <blockquote className="text-2xl font-light italic mb-8 text-gray-300">
              "To empower businesses across India with accessible, affordable, and intelligent labour law compliance solutions—ensuring legal safety while promoting employee welfare and operational efficiency."
            </blockquote>
            <p className="text-lg text-gray-300 leading-relaxed">
              They strongly believe that labour law compliance shouldn't be a burden but a well-managed system that promotes fair practices, protects organizations, and upholds employee rights. This belief fuels everything we do at Praans Consultech.
            </p>
          </div>
        </div>
      </section>

      {/* Why Leadership Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Why Our Founder's Leadership Matters</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              In a country where labour laws vary by state, enforcement is dynamic, and penalties are costly, having a knowledgeable and proactive labour law compliance consultant makes all the difference. Our founder's leadership ensures:
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {leadershipBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-gradient-to-r from-orange-50 to-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With a growing client base and PAN India presence, our founder continues to innovate and lead Praans Consultech as one of the most <strong className="text-orange-600">trusted labour law consultants in India.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Read our featured article</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <ExternalLink className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-slate-800">{article.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{article.source}</p>
                      <Link 
                        href={article.link} 
                        target="_blank" 
                        className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center gap-2"
                      >
                        Read Article <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Looking for a reliable partner to manage your labour law compliance?</h2>
          <p className="text-xl mb-8 text-gray-300">Get in touch with Praans Consultech — Led by India's trusted labour law expert.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-slate-800 text-lg px-8 py-6">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
