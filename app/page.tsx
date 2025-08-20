
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  Scale,
  FormInput,
  Bell,
  Calendar,
  Wallet,
  DollarSign,
  CreditCard,
  Zap,
  // Cpu,
  Gavel,
  ClipboardCheck,
  Landmark,
  Briefcase,
  ClipboardList,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Users,
Bot, Sparkles,Crown,
  Clock,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Praans Consultech - Simplifying Labour Law Compliance",
  description:
    "All-in-One Platform for Compliance Software, Legal Advisory, PAN India Registrations, Litigation Support, Outsourcing, and Audits.",
  keywords:
    "labour law compliance, legal advisory, pan india registrations, litigation support, compliance outsourcing, compliance software",
  openGraph: {
    title: "Praans Consultech - Simplifying Labour Law Compliance",
    description:
      "All-in-One Platform for Compliance Software, Legal Advisory, PAN India Registrations, & More.",
    type: "website",
  },
};

const keyOfferings = [
  {
    icon: Monitor,
    title: "Smart Compliance Software",
    description:
      "Automated, error-free labour law management with AI-powered insights and real-time monitoring.",
    features: ["AI-Powered", "Real-time Alerts", "Auto Reports"],
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
  },
  {
    icon: Gavel,
    title: "Legal Advisory",
    description:
      "Get expert help for complex labour laws from certified legal professionals.",
    features: ["Expert Consultation", "24/7 Support", "Legal Updates"],
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
  },
  {
    icon: ClipboardCheck,
    title: "PAN India Registrations",
    description:
      "Fast licences, hassle-free filings across all states and territories.",
    features: ["PAN India Coverage", "Fast Processing", "Hassle-free"],
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100",
  },
  {
    icon: Landmark,
    title: "Litigation Support",
    description: "Comprehensive dispute resolution and legal defence services.",
    features: ["Dispute Resolution", "Legal Defence", "Court Support"],
    color: "from-red-500 to-red-600",
    bgColor: "from-red-50 to-red-100",
  },
  {
    icon: Briefcase,
    title: "Compliance Outsourcing",
    description:
      "We manage it all, so you don't have to worry about compliance.",
    features: ["Full Management", "Risk Mitigation", "Cost Effective"],
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-50 to-orange-100",
  },
  {
    icon: ClipboardList,
    title: "Audit & Inspection",
    description:
      "Complete support for audits, inspections, and compliance verification.",
    features: ["Audit Support", "Inspection Ready", "Compliance Check"],
    color: "from-indigo-500 to-indigo-600",
    bgColor: "from-indigo-50 to-indigo-100",
  },
];

const newsUpdates = [
  { title: "New Minimum Wage Rates Announced for Maharashtra" },
  { title: "Updated PF Contribution Rates Effective February 2025" },
  { title: "Professional Tax Amendment for Karnataka" },
  { title: "Holiday List 2025 - Central Government Released" },
  { title: "ESI Filing Deadline Extended for Q4" },
  { title: "Changes in Maternity Benefit Act - A Quick Guide" },
];

const categories = [
  {
    title: "Acts",
    description: "Comprehensive collection of labor acts and regulations",
    icon: Scale,
    color: "bg-blue-500",
    href: "/acts",
  },
  {
    title: "Rules",
    description: "Detailed rules and implementation guidelines",
    icon: FileText,
    color: "bg-green-500",
    href: "/rules",
  },
  {
    title: "Forms",
    description: "Downloadable forms for compliance requirements",
    icon: FormInput,
    color: "bg-purple-500",
    href: "/forms",
  },
  {
    title: "Gazette Notifications",
    description: "Latest government notifications and circulars",
    icon: Bell,
    color: "bg-orange-500",
    href: "/gazette",
  },
  {
    title: "Holidays List",
    description: "Official holiday calendars by state",
    icon: Calendar,
    color: "bg-pink-500",
    href: "/national-festival-holidays",
  },
  {
    title: "Labour Welfare Fund",
    description: "Welfare fund contributions and benefits",
    icon: Wallet,
    color: "bg-indigo-500",
    href: "/welfare-fund",
  },
  {
    title: "Minimum Wages",
    description: "State-wise minimum wage rates",
    icon: DollarSign,
    color: "bg-yellow-500",
    href: "/minimum-wages",
  },
  {
    title: "Professional Tax",
    description: "Professional tax rates and compliance",
    icon: CreditCard,
    color: "bg-red-500",
    href: "/professional-tax",
  },
];

const stats = [
  {
    icon: Users,
    number: "5000+",
    label: "Happy Clients",
    color: "text-blue-500",
  },
  {
    icon: CheckCircle,
    number: "99.9%",
    label: "Success Rate",
    color: "text-green-500",
  },
  { icon: Clock, number: "24/7", label: "Support", color: "text-orange-500" },
  { icon: Shield, number: "100%", label: "Secure", color: "text-purple-500" },
];
const CategoryCard = React.memo(({ category, index }) => (
  <Link key={index} href={category.href}>
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white">
      <CardHeader className="pb-3">
        <div
          className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          <category.icon className="w-7 h-7 text-white" loading="lazy" />
        </div>
        <CardTitle className="text-xl group-hover:text-orange-500 transition-colors duration-300 font-bold">
          {category.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 leading-relaxed text-base">
          {category.description}
        </CardDescription>
      </CardContent>
    </Card>
  </Link>
));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className=" relative min-h-screen flex items-center justify-center  px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden ">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-orange-100/10" />
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-100/40 to-blue-100/20" />
        <div className="absolute top-20 left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-100/20 to-blue-100/20 rounded-full blur-3xl" />
        {/* Container */}
        <div className="max-w-7xl mx-auto text-center space-y-2 relative z-10 transform scale-95 origin-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] animate-fade-up">
            Simplifying{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                Labour Law
              </span>
              <div className="absolute -bottom-3 left-0 right-0 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60 blur-sm" />
            </span>
            <br />        
            <div className="text-slate-800 mt-2">Compliance</div>
            <span className="text-3xl md:text-4xl lg:text-5xl text-slate-600 font-bold">
              for Your Business
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto animate-fade-up delay-100 leading-relaxed">
            All-in-One Platform: Software, Legal Advisory, Registrations & More
            – PAN India
          </p>

         <div className="">
                <div className="relative inline-flex items-center gap-3 px-6 py-2 rounded-full
                        border-2 border-orange-300
                        bg-gradient-to-r from-orange-100 via-orange-50 to-red-100
                        text-orange-800 ">
          <div className="relative">
            <Bot className="w-6 h-6 text-orange-600" />
          </div>
          {/* Text with gradient */}
          <span className="text-sm md:text-lg font-bold tracking-wide
                         bg-gradient-to-r from-orange-700 via-red-600 to-orange-800
                         bg-clip-text text-transparent">
              India's First Labour Law Compliance AI ChatBot
          </span>
          <Crown className="w-5 h-5 text-yellow-600" />
        </div>
      </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up delay-200">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl px-8 py-6 shadow-2xl hover:shadow-orange-500/25 rounded-2xl font-bold"
            >
              Get a Free Demo of Software
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-orange-600 border-3 border-orange-500 hover:bg-orange-50 text-xl px-8 py-6 rounded-2xl font-bold bg-white/80 backdrop-blur-sm"
            >
              Talk to Our Compliance Experts
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Latest Updates Marquee */}
      <section className="py-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10" />
        <div className="marquee-container relative flex">
          <div className="marquee flex-shrink-0 flex items-center gap-8">
            <span className="font-bold text-orange-400 text-lg flex-shrink-0 flex items-center gap-2">
              <Zap className="w-5 h-5 animate-pulse" />
              Latest Updates:
            </span>
            {[...newsUpdates, ...newsUpdates].map((news, index) => (
              <div key={index} className="flex items-center gap-3 flex-shrink-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="whitespace-nowrap text-sm font-medium">{news.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Key Offerings Section */}
      <section className="relative bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30 overflow-hidden">
        {/* Background Elements */}
         <div className="container mx-auto relative z-10">
          {/* Enhanced Offerings Grid */}
          <section className="py-30 bg-gradient-to-br from-orange-50 via-white to-blue-50 min-h-screen">
            <div className="container mx-auto px-4">
              {/* Section Heading */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-1 text-slate-900">
                  Single Platform for All Labour Law Compliances
                </h2>
                <p className="text-base text-gray-700 max-w-2xl mx-auto">
                  From automated software to expert legal support, we've got you
                  covered.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {keyOfferings.map((offering, idx) => (
                  <div
                    key={idx}
                    className="relative bg-white/90 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-sm cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    {/* Icon Container: smaller */}
                    <div className="mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${offering.color} rounded-xl flex items-center justify-center shadow`}
                      >
                        <offering.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Title & Description with smaller text */}
                    <h3 className="text-lg font-semibold mb-1 text-slate-800">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600 text-xs mb-3 leading-tight">
                      {offering.description}
                    </p>

                    {/* Features Tags: smaller text & padding */}
                    <div className="flex flex-wrap gap-1">
                      {offering.features.map((feature, fidx) => (
                        <span
                          key={fidx}
                          className="bg-white/80 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium border border-gray-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* Enhanced Category Grid */}
      <section className=" pb-24  pt-19 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-blue-100/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">
              Explore Our{" "}
             <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 mb-8">
                Resource Library
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Navigate through our comprehensive collection of compliance
              resources organized by category.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4  mt-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <TrendingUp className="w-4 h-4" />
            <span>Get Started Today</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Ensure Compliance.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              Avoid Penalties.
            </span>{" "}
            Get Started Today!
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Join thousands of businesses who trust our platform for their
            compliance needs. Schedule a demo or talk to our experts now.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl px-10 py-6 shadow-2xl hover:shadow-orange-500/25  rounded-2xl font-bold"
            >
              🚀 Get a Free Demo Of Software
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 text-xl px-10 py-6 bg-transparent  rounded-2xl font-bold"
            >
              💬 Talk to Our Compliance Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}