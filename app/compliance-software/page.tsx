"use client";
import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    business_email: "",
    mobile_number: "",
    organization_name: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const payload = {
        full_name: formData.full_name,
        business_email: formData.business_email,
        mobile_number: formData.mobile_number,
        organization_name: formData.organization_name,
      };
      // console.log(payload,process.env.NEXT_PUBLIC_API_BASE)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/demo-requests`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong! Please try again.");
      }

      const result = await response.json();
      console.log("Success:", result);

      setMessage({
        type: "success",
        text: "Demo request submitted successfully! 🎉",
      });

      setFormData({
        full_name: "",
        business_email: "",
        mobile_number: "",
        organization_name: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setMessage({
        type: "error",
        text: "Failed to submit request. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-500/10 to-transparent"></div>

        {/* Orange Decorative Shape */}
        <div className="absolute top-0 right-0 w-2/5 h-full">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 transform skew-x-[-12deg] origin-top-right shadow-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-sm font-semibold text-orange-700">
                  India's #1 Compliance Software
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                India's Leading
                <span className="block text-orange-600">
                  Labour Law Compliance
                </span>
                Management Software
              </h1>

              {/* <p className="text-xl text-gray-600 leading-relaxed">
                Automate your compliances, Registrations/Licences, Litigations and Contracts/Agreements with our comprehensive platform.
              </p> */}

              <p className="text-xl text-gray-600 leading-relaxed">
                Automate your compliances, registrations/licences, litigations,
                manpower vendor audits, and contracts/agreements with our
                comprehensive platform.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                {/* <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg">
                  See Our Exciting Offers →
                </button> */}
                <Link
                  href="#offers"
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg inline-block"
                >
                  See Our Exciting Offers →
                </Link>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-orange-500">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    REQUEST A DEMO
                  </h2>
                  {/* <p className="text-gray-600">
                    Get started in just 60 seconds
                  </p> */}
                </div>

                {/* Success/Error Message */}
                {message.text && (
                  <div
                    className={`mb-4 p-4 rounded-lg ${
                      message.type === "success"
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : "bg-red-100 text-red-700 border border-red-300"
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    {/* <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label> */}
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    {/* <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Email
                    </label> */}
                    <input
                      type="email"
                      name="business_email"
                      value={formData.business_email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    {/* <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile Number
                    </label> */}
                    <input
                      type="tel"
                      name="mobile_number"
                      value={formData.mobile_number}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    {/* <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Organization Name
                    </label> */}
                    <input
                      type="text"
                      name="organization_name"
                      value={formData.organization_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="Your Company Ltd."
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "SUBMITTING..." : "REQUEST NOW →"}
                  </button>
                </form>

                <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Your information is secure and encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              FEATURES
            </div>
            {/* <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Legal Compliance Management Software
            </h2> */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Labour Law Compliance 
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools to manage all your compliance needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📊",
                title: "Dashboard",
                desc: "Comprehensive overview",
                color: "bg-blue-50 border-blue-200",
              },
              {
                icon: "🔍",
                title: "Know Your Compliance",
                desc: "Stay informed",
                color: "bg-purple-50 border-purple-200",
              },
              {
                icon: "📱",
                title: "Compliance Risk Tracking",
                desc: "Monitor risks",
                color: "bg-pink-50 border-pink-200",
              },
              {
                icon: "📄",
                title: "Litigation/Contract Tracking",
                desc: "Manage contracts",
                color: "bg-orange-50 border-orange-200",
              },
              {
                icon: "📋",
                title: "Registration/Licence",
                desc: "Track licenses",
                color: "bg-green-50 border-green-200",
              },
              {
                icon: "✅",
                title: "Vendor Audit",
                desc: "Audit management",
                color: "bg-teal-50 border-teal-200",
              },
              {
                icon: "🔍",
                title: "Real Time Audit",
                desc: "Live monitoring",
                color: "bg-indigo-50 border-indigo-200",
              },
              {
                icon: "📚",
                title: "E-Library",
                desc: "Digital resources",
                color: "bg-red-50 border-red-200",
              },
              {
                icon: "🔔",
                title: "Compliance Alert",
                desc: "Timely notifications",
                color: "bg-yellow-50 border-yellow-200",
              },
              {
                icon: "📰",
                title: "Legal Updates",
                desc: "Stay current",
                color: "bg-cyan-50 border-cyan-200",
              },
              {
                icon: "📊",
                title: "Reports",
                desc: "Detailed analytics",
                color: "bg-violet-50 border-violet-200",
              },
              {
                icon: "👍",
                title: "Easy to Use",
                desc: "User-friendly",
                color: "bg-emerald-50 border-emerald-200",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} border-2 p-6 rounded-xl hover:shadow-lg transition-all`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg font-medium opacity-90">Active Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-lg font-medium opacity-90">Compliances Tracked</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg font-medium opacity-90">Uptime</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg font-medium opacity-90">Expert Support</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              ADVANTAGES
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our compliance Software?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💼",
                title: "Automated Compliance Processes",
                desc: "Our GRC Software automates many compliance processes, including risk assessments, document management, compliance tracking and reporting. This automation reduces the likelihood of human error, improves accuracy, and saves time.",
                color: "border-t-blue-500",
              },
              {
                icon: "⚖️",
                title: "Improved Risk Management",
                desc: "Identify, assess, and mitigate compliance risks in real-time. Our advanced analytics help you stay ahead of potential issues and maintain regulatory compliance effortlessly.",
                color: "border-t-purple-500",
              },
              {
                icon: "💰",
                title: "Cost Savings",
                desc: "By lowering the fines, penalties, and legal action resulting from non-compliance, we can assist firms in saving money. Additionally, it can simplify compliance procedures and lessen the need for manual labour.",
                color: "border-t-green-500",
              },
              {
                icon: "👨‍💼",
                title: "Increased Accountability",
                desc: "By keeping track of compliance-related actions, recording proof of compliance, and providing an audit trail, our software encourages accountability and enables transparency.",
                color: "border-t-orange-500",
              },
              {
                icon: "🔒",
                title: "Secured Cloud",
                desc: "All data in software is secured with AWS (Amazon Web Services) and certified with ISO 9001:2015, ISO 27001:2013 and GDPR. Organisations can do compliances without the fear of data confidentiality.",
                color: "border-t-red-500",
              },
              {
                icon: "🛠️",
                title: "Support System",
                desc: "Our IT and Legal team always be ready to support our clients whenever required. We try to be quick in problem-solving for the smooth functioning of the compliance journey.",
                color: "border-t-indigo-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white border-2 border-gray-100 border-t-4 ${item.color} p-8 rounded-xl hover:shadow-xl transition-all`}
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="py-30 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-orange-700">
              Our Exciting Offers
            </h2>
            <p className="text-xl text-orange-600">
              Limited time special deals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "1", text: "1st month free trial" },
              // {
              //   num: "2",
              //   text: "No implementation charges for first 100 customers",
              // },
              {
                num: "2",
                text: "Get 3 User Extra access on our Basic Package",
              },
              {
                num: "3",
                text: "Get 2 month free trial storage of 10GB for the first 100 Customer",
              },
              {
                num: "4",
                text: "Get 25Gb extra storage on our Standard Package",
              },
            ].map((offer, index) => (
              <div
                key={index}
                className="bg-white border-2 border-orange-300 p-6 rounded-xl text-center hover:shadow-xl hover:border-orange-400 hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {offer.num}
                </div>
                <p className="font-semibold leading-relaxed text-gray-700">
                  {offer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              TRUSTED & CERTIFIED
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading security standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "ISO 9001:2015",
                icon: "🏆",
                bg: "bg-blue-50",
                border: "border-blue-200",
              },
              {
                name: "ISO 27001:2013",
                icon: "🔒",
                bg: "bg-green-50",
                border: "border-green-200",
              },
              {
                name: "SOC 2 Certified",
                icon: "✓",
                bg: "bg-purple-50",
                border: "border-purple-200",
              },
              {
                name: "GDPR",
                icon: "🛡️",
                bg: "bg-orange-50",
                border: "border-orange-200",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className={`${cert.bg} border-2 ${cert.border} p-8 rounded-xl text-center hover:shadow-lg transition-all`}
              >
                <div className="text-6xl mb-4">{cert.icon}</div>
                <div className="font-bold text-lg text-gray-900">
                  {cert.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acts Covered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              COMPREHENSIVE COVERAGE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Acts Covered
            </h2>
            <p className="text-xl text-gray-600">
              Complete compliance across all regulations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "HR & LABOUR", icon: "👥" },
              { name: "SECRETARIAL", icon: "📋" },
              { name: "TAXATION", icon: "💰" },
              { name: "LEGAL METROLOGY", icon: "⚖️" },
              { name: "SEBI", icon: "🔒" },
              { name: "FSSAI", icon: "🍽️" },
              { name: "INDUSTRY SPECIFIC", icon: "🏭" },
              { name: "IMPORT & EXPORT", icon: "🌍" },
              { name: "FIRE & SAFETY", icon: "🔥" },
              { name: "FINANCE", icon: "💵" },
              { name: "FDI", icon: "📈" },
              { name: "TRANSPORT LAWS", icon: "🚛" },
            ].map((act, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 p-6 rounded-xl text-center hover:border-orange-500 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-3">{act.icon}</div>
                <div className="font-bold text-sm text-gray-800">
                  {act.name}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all">
              And Many More →
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
}





// 'use client';
// import { useState } from 'react';

// export default function NewLandingPage() {
//   const [formData, setFormData] = useState({
//     full_name: '',
//     business_email: '',
//     mobile_number: '',
//     organization_name: ''
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage({ type: '', text: '' });

//     try {
//       const payload = {
//         full_name: formData.full_name,
//         business_email: formData.business_email,
//         mobile_number: formData.mobile_number,
//         organization_name: formData.organization_name
//       };

//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/demo-requests`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error('Something went wrong! Please try again.');
//       }

//       const result = await response.json();
//       console.log('Success:', result);

//       setMessage({
//         type: 'success',
//         text: 'Demo request submitted successfully! 🎉'
//       });

//       setFormData({ full_name: '', business_email: '', mobile_number: '', organization_name: '' });

//     } catch (error) {
//       console.error('Error:', error);
//       setMessage({
//         type: 'error',
//         text: 'Failed to submit request. Please try again.'
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
//       {/* Navigation Bar */}
//       <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <span className="text-white font-bold text-xl">LC</span>
//               </div>
//               <div>
//                 <div className="font-bold text-xl text-gray-900">LegalComply</div>
//                 <div className="text-xs text-orange-600">India's #1 GRC Platform</div>
//               </div>
//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#features" className="text-gray-700 hover:text-orange-600 font-medium transition">Features</a>
//               <a href="#benefits" className="text-gray-700 hover:text-orange-600 font-medium transition">Benefits</a>
//               <a href="#pricing" className="text-gray-700 hover:text-orange-600 font-medium transition">Pricing</a>
//               <button className="bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition shadow-md">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section - Completely New Design */}
//       <section className="pt-32 pb-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-6 py-2.5 rounded-full mb-6 shadow-sm">
//               <span className="relative flex h-3 w-3">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
//               </span>
//               <span className="font-semibold text-sm">Trusted by 500+ Companies Across India</span>
//             </div>

//             <h1 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
//               Simplify Your Legal
//               <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
//                 Compliance Journey
//               </span>
//             </h1>

//             <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
//               All-in-one platform to automate compliances, manage registrations, track litigations, and stay ahead of regulatory changes.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
//               <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center space-x-2">
//                 <span>Start Free Trial</span>
//                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </button>
//               <button className="bg-white text-gray-900 px-10 py-5 rounded-xl font-bold text-lg border-2 border-gray-200 hover:border-orange-500 transition-all shadow-md">
//                 Watch Video Demo
//               </button>
//             </div>

//             {/* Trust Badges */}
//             <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
//               <div className="flex items-center space-x-2">
//                 <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                 </svg>
//                 <span className="font-medium">No Credit Card Required</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                 </svg>
//                 <span className="font-medium">Setup in 60 Seconds</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                 </svg>
//                 <span className="font-medium">ISO Certified Platform</span>
//               </div>
//             </div>
//           </div>

//           {/* Demo Form Card - Floating Style */}
//           <div className="max-w-5xl mx-auto mt-16">
//             <div className="bg-white rounded-3xl shadow-2xl p-10 border-4 border-orange-100">
//               <div className="grid lg:grid-cols-2 gap-12 items-center">
//                 {/* Left Side - Info */}
//                 <div className="space-y-6">
//                   <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-bold">
//                     ⚡ INSTANT ACCESS
//                   </div>
//                   <h2 className="text-4xl font-bold text-gray-900">
//                     Get Your Free Demo Today!
//                   </h2>
//                   <p className="text-lg text-gray-600">
//                     See how LegalComply can transform your compliance management. No commitment required.
//                   </p>

//                   <div className="space-y-4 pt-4">
//                     {[
//                       'Complete platform walkthrough',
//                       'Personalized compliance roadmap',
//                       'Expert consultation included',
//                       'Implementation support'
//                     ].map((item, i) => (
//                       <div key={i} className="flex items-center space-x-3">
//                         <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
//                           <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
//                           </svg>
//                         </div>
//                         <span className="text-gray-700 font-medium">{item}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Right Side - Form */}
//                 <div>
//                   {message.text && (
//                     <div className={`mb-4 p-4 rounded-xl ${
//                       message.type === 'success'
//                         ? 'bg-green-50 text-green-700 border-2 border-green-200'
//                         : 'bg-red-50 text-red-700 border-2 border-red-200'
//                     }`}>
//                       {message.text}
//                     </div>
//                   )}

//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     <div>
//                       <input
//                         type="text"
//                         name="full_name"
//                         value={formData.full_name}
//                         onChange={handleChange}
//                         className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
//                         placeholder="Your Full Name"
//                         required
//                         disabled={isLoading}
//                       />
//                     </div>

//                     <div>
//                       <input
//                         type="email"
//                         name="business_email"
//                         value={formData.business_email}
//                         onChange={handleChange}
//                         className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
//                         placeholder="Business Email Address"
//                         required
//                         disabled={isLoading}
//                       />
//                     </div>

//                     <div>
//                       <input
//                         type="tel"
//                         name="mobile_number"
//                         value={formData.mobile_number}
//                         onChange={handleChange}
//                         className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
//                         placeholder="Mobile Number (+91)"
//                         required
//                         disabled={isLoading}
//                       />
//                     </div>

//                     <div>
//                       <input
//                         type="text"
//                         name="organization_name"
//                         value={formData.organization_name}
//                         onChange={handleChange}
//                         className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
//                         placeholder="Organization Name"
//                         required
//                         disabled={isLoading}
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-5 rounded-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//                     >
//                       <span>{isLoading ? 'PROCESSING...' : 'SCHEDULE MY DEMO'}</span>
//                       {!isLoading && (
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                         </svg>
//                       )}
//                     </button>
//                   </form>

//                   <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-500">
//                     <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
//                     </svg>
//                     <span>Your data is 256-bit encrypted and secure</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section - New Design */}
//       <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { number: '500+', label: 'Enterprise Clients', icon: '🏢' },
//               { number: '50K+', label: 'Compliances Tracked', icon: '📊' },
//               { number: '99.9%', label: 'Platform Uptime', icon: '⚡' },
//               { number: '24x7', label: 'Expert Support', icon: '💬' }
//             ].map((stat, i) => (
//               <div key={i} className="text-center text-white">
//                 <div className="text-5xl mb-3">{stat.icon}</div>
//                 <div className="text-5xl font-black mb-2">{stat.number}</div>
//                 <div className="text-lg font-medium opacity-90">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section - Modern Grid */}
//       <section id="features" className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
//               POWERFUL FEATURES
//             </div>
//             <h2 className="text-5xl font-black text-gray-900 mb-4">
//               Everything You Need for Compliance
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Comprehensive suite of tools designed to make compliance management effortless
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: '📊',
//                 title: 'Smart Dashboard',
//                 desc: 'Real-time insights and analytics at your fingertips. Monitor all compliance activities from one centralized hub.',
//                 gradient: 'from-blue-500 to-blue-600'
//               },
//               {
//                 icon: '🎯',
//                 title: 'Risk Management',
//                 desc: 'Identify and mitigate compliance risks before they become issues. Stay proactive with intelligent alerts.',
//                 gradient: 'from-purple-500 to-purple-600'
//               },
//               {
//                 icon: '📱',
//                 title: 'Mobile Access',
//                 desc: 'Manage compliances on-the-go with our intuitive mobile interface. Work from anywhere, anytime.',
//                 gradient: 'from-pink-500 to-pink-600'
//               },
//               {
//                 icon: '⚖️',
//                 title: 'Litigation Tracker',
//                 desc: 'Keep track of all legal matters and contracts in one place. Never miss a deadline or hearing.',
//                 gradient: 'from-orange-500 to-orange-600'
//               },
//               {
//                 icon: '🔔',
//                 title: 'Smart Alerts',
//                 desc: 'Get timely notifications for upcoming deadlines, renewals, and regulatory changes automatically.',
//                 gradient: 'from-green-500 to-green-600'
//               },
//               {
//                 icon: '📚',
//                 title: 'Digital Library',
//                 desc: 'Access comprehensive legal resources, templates, and documentation instantly from our e-library.',
//                 gradient: 'from-indigo-500 to-indigo-600'
//               },
//               {
//                 icon: '✅',
//                 title: 'Audit Management',
//                 desc: 'Streamline vendor audits and internal compliance checks with automated workflows and reports.',
//                 gradient: 'from-teal-500 to-teal-600'
//               },
//               {
//                 icon: '📄',
//                 title: 'Document Control',
//                 desc: 'Secure document storage with version control. Manage registrations and licenses effortlessly.',
//                 gradient: 'from-red-500 to-red-600'
//               },
//               {
//                 icon: '📈',
//                 title: 'Advanced Reports',
//                 desc: 'Generate detailed compliance reports for stakeholders. Export data in multiple formats instantly.',
//                 gradient: 'from-yellow-500 to-yellow-600'
//               }
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-300 hover:shadow-2xl transition-all duration-300"
//               >
//                 <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section - New Layout */}
//       <section id="benefits" className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
//               WHY CHOOSE US
//             </div>
//             <h2 className="text-5xl font-black text-gray-900 mb-4">
//               Transform Your Compliance Operations
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {[
//               {
//                 icon: '🚀',
//                 title: 'Automated Workflows',
//                 desc: 'Save 70% of time with intelligent automation. Let our system handle repetitive tasks while you focus on strategic decisions.',
//                 stats: '70% Time Saved'
//               },
//               {
//                 icon: '💰',
//                 title: 'Reduce Costs',
//                 desc: 'Avoid penalties and legal fees with proactive compliance management. Our clients save an average of ₹50L annually.',
//                 stats: '₹50L+ Saved Annually'
//               },
//               {
//                 icon: '🔒',
//                 title: 'Enterprise Security',
//                 desc: 'Bank-grade encryption with AWS infrastructure. ISO 27001 certified with GDPR compliance for complete data protection.',
//                 stats: '100% Secure'
//               },
//               {
//                 icon: '👨‍💼',
//                 title: 'Expert Support',
//                 desc: 'Dedicated legal and IT support team available 24/7. Get expert guidance whenever you need it for smooth operations.',
//                 stats: '24/7 Available'
//               }
//             ].map((benefit, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-orange-300"
//               >
//                 <div className="flex items-start space-x-6">
//                   <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 shadow-lg">
//                     {benefit.icon}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between mb-3">
//                       <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
//                       <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
//                         {benefit.stats}
//                       </span>
//                     </div>
//                     <p className="text-gray-600 leading-relaxed text-lg">{benefit.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Exciting Offers - Premium Design */}
//       <section id="pricing" className="py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
//               🎉 LIMITED TIME OFFERS
//             </div>
//             <h2 className="text-5xl font-black text-white mb-4">
//               Exclusive Launch Deals
//             </h2>
//             <p className="text-xl text-white/90 max-w-2xl mx-auto">
//               Be among the first 100 customers and unlock incredible benefits
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//             {[
//               {
//                 num: '01',
//                 title: 'Free Trial Month',
//                 text: 'Get your first month completely free. No strings attached, cancel anytime.',
//                 highlight: true
//               },
//               {
//                 num: '02',
//                 title: 'Zero Setup Cost',
//                 text: 'No implementation charges for first 100 customers. Save ₹50,000 instantly.',
//                 highlight: true
//               },
//               {
//                 num: '03',
//                 title: '3 Extra Users',
//                 text: 'Get 3 additional user licenses on Basic Package at no extra cost.',
//                 highlight: false
//               },
//               {
//                 num: '04',
//                 title: '10GB Free Storage',
//                 text: '2 months of free 10GB cloud storage for your compliance documents.',
//                 highlight: false
//               },
//               {
//                 num: '05',
//                 title: '25GB Bonus',
//                 text: 'Get 25GB extra storage with Standard Package. Store unlimited documents.',
//                 highlight: false
//               },
//               {
//                 num: '06',
//                 title: 'Priority Support',
//                 text: 'Jump the queue with priority customer support for faster resolutions.',
//                 highlight: false
//               }
//             ].map((offer, index) => (
//               <div
//                 key={index}
//                 className={`${offer.highlight ? 'bg-white text-gray-900 shadow-2xl scale-105' : 'bg-white/10 backdrop-blur-md text-white border-2 border-white/20'} rounded-2xl p-8 hover:scale-105 transition-all`}
//               >
//                 <div className={`inline-block ${offer.highlight ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' : 'bg-white/20 text-white'} px-4 py-2 rounded-lg text-sm font-bold mb-4`}>
//                   OFFER {offer.num}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
//                 <p className={`${offer.highlight ? 'text-gray-600' : 'text-white/80'} leading-relaxed`}>{offer.text}</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <button className="bg-white text-orange-600 px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition-all inline-flex items-center space-x-3">
//               <span>Claim Your Exclusive Offer Now</span>
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </button>
//             <p className="text-white/80 mt-4 text-sm">⏰ Offer valid for first 100 customers only</p>
//           </div>
//         </div>
//       </section>

//       {/* Acts Coverage - Sleek Design */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
//               COMPREHENSIVE COVERAGE
//             </div>
//             <h2 className="text-5xl font-black text-gray-900 mb-4">
//               Complete Regulatory Coverage
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Stay compliant across all major Indian regulations and industry-specific laws
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {[
//               { name: 'Labour & HR Laws', icon: '👥', color: 'bg-blue-50 border-blue-200 hover:border-blue-400' },
//               { name: 'Secretarial Laws', icon: '📋', color: 'bg-purple-50 border-purple-200 hover:border-purple-400' },
//               { name: 'Taxation Laws', icon: '💰', color: 'bg-green-50 border-green-200 hover:border-green-400' },
//               { name: 'Legal Metrology', icon: '⚖️', color: 'bg-yellow-50 border-yellow-200 hover:border-yellow-400' },
//               { name: 'SEBI Guidelines', icon: '📈', color: 'bg-red-50 border-red-200 hover:border-red-400' },
//               { name: 'FSSAI Standards', icon: '🍽️', color: 'bg-orange-50 border-orange-200 hover:border-orange-400' },
//               { name: 'Industry Specific', icon: '🏭', color: 'bg-indigo-50 border-indigo-200 hover:border-indigo-400' },
//               { name: 'Import & Export', icon: '🌍', color: 'bg-teal-50 border-teal-200 hover:border-teal-400' },
//               { name: 'Fire & Safety', icon: '🔥', color: 'bg-pink-50 border-pink-200 hover:border-pink-400' },
//               { name: 'Finance Laws', icon: '💵', color: 'bg-cyan-50 border-cyan-200 hover:border-cyan-400' },
//               { name: 'FDI Regulations', icon: '📊', color: 'bg-violet-50 border-violet-200 hover:border-violet-400' },
//               { name: 'Transport Laws', icon: '🚛', color: 'bg-emerald-50 border-emerald-200 hover:border-emerald-400' }
//             ].map((act, index) => (
//               <div
//                 key={index}
//                 className={`${act.color} border-2 rounded-2xl p-8 text-center transition-all cursor-pointer group`}
//               >
//                 <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{act.icon}</div>
//                 <div className="font-bold text-gray-800">{act.name}</div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center space-x-2">
//               <span>View All Covered Acts</span>
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Certifications - Badge Style */}
//       <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
//               TRUSTED & CERTIFIED
//             </div>
//             <h2 className="text-5xl font-black text-gray-900 mb-4">
//               Industry-Leading Security Standards
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Your data security is our top priority. Certified by global security standards.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { name: 'ISO 9001:2015', icon: '🏆', desc: 'Quality Management', color: 'from-blue-500 to-blue-600' },
//               { name: 'ISO 27001:2013', icon: '🔒', desc: 'Information Security', color: 'from-green-500 to-green-600' },
//               { name: 'SOC 2 Type II', icon: '✓', desc: 'Security Compliance', color: 'from-purple-500 to-purple-600' },
//               { name: 'GDPR Compliant', icon: '🛡️', desc: 'Data Protection', color: 'from-orange-500 to-orange-600' }
//             ].map((cert, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-orange-300"
//               >
//                 <div className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg`}>
//                   {cert.icon}
//                 </div>
//                 <div className="font-bold text-xl text-gray-900 mb-2">{cert.name}</div>
//                 <div className="text-sm text-gray-600">{cert.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-5xl font-black mb-6">
//             Ready to Simplify Your Compliance?
//           </h2>
//           <p className="text-xl text-gray-300 mb-10 leading-relaxed">
//             Join 500+ companies that trust LegalComply for their compliance management. Start your free trial today!
//           </p>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
//               Get Started Free →
//             </button>
//             <button className="bg-white/10 backdrop-blur-sm text-white px-12 py-5 rounded-xl font-bold text-lg border-2 border-white/20 hover:bg-white/20 transition-all">
//               Talk to Sales
//             </button>
//           </div>
//           <p className="text-gray-400 mt-6 text-sm">No credit card required • Setup in 60 seconds • Cancel anytime</p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <h4 className="font-bold text-white mb-4">Product</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-orange-500 transition">Features</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition">Pricing</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition">Security</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-white mb-4">Company</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition">Careers</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-white mb-4">Resources</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-orange-500 transition">Blog</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition">Help Center</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition">API Docs</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-white mb-4">Legal</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-orange-500 transition">Privacy Policy</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition">Terms of Service</a></li>
//                 <li><a href="#" className="hover:text-orange-500 transition">Compliance</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-sm">© 2025 LegalComply. All rights reserved.</p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <a href="#" className="hover:text-orange-500 transition">LinkedIn</a>
//               <a href="#" className="hover:text-orange-500 transition">Twitter</a>
//               <a href="#" className="hover:text-orange-500 transition">Facebook</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// 'use client';
// import { useState } from 'react';

// // एक सबटल डॉट पैटर्न बैकग्राउंड के लिए
// const DotPatternBackground = () => (
//   <svg
//     className="absolute inset-0 -z-10 h-full w-full stroke-orange-200/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
//     aria-hidden="true"
//   >
//     <defs>
//       <pattern
//         id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
//         width={200}
//         height={200}
//         x="50%"
//         y={-1}
//         patternUnits="userSpaceOnUse"
//       >
//         <path d="M.5 200V.5H200" fill="none" />
//       </pattern>
//     </defs>
//     <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
//   </svg>
// );

// export default function LandingPage() {
//   const [formData, setFormData] = useState({
//     full_name: '',
//     business_email: '',
//     mobile_number: '',
//     organization_name: ''
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   const handleSubmit = async (e : any) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage({ type: '', text: '' });

//     try {
//         const payload = {
//          full_name: formData.full_name,
//          business_email: formData.business_email,
//          mobile_number: formData.mobile_number,
//          organization_name: formData.organization_name
//        };

//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE }/api/demo-requests`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error('Something went wrong! Please try again.');
//       }

//       const result = await response.json();
//       console.log('Success:', result);

//       setMessage({
//         type: 'success',
//         text: 'Demo request submitted successfully! 🎉'
//       });

//       setFormData({ full_name: '', business_email: '', mobile_number: '', organization_name: '' });

//     } catch (error) {
//       console.error('Error:', error);
//       setMessage({
//         type: 'error',
//         text: 'Failed to submit request. Please try again.'
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e : any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-white">

//       {/* =================================== */}
//       {/* 1. नया हीरो सेक्शन (New Hero Section) */}
//       {/* =================================== */}
//       <section className="relative bg-gradient-to-b from-orange-50 via-white to-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
//         <DotPatternBackground />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
//           <div className="max-w-4xl mx-auto text-center">

//             {/* बैज */}
//             <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
//               <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
//               <span className="text-sm font-semibold text-orange-700">India's #1 Compliance Software</span>
//             </div>

//             {/* हेडलाइन */}
//             <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
//               India's Leading
//               <span className="block text-orange-600 mt-2">Legal Compliance</span>
//               Management Software
//             </h1>

//             {/* सब-टेक्स्ट */}
//             <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
//               Automate your compliances, Registrations/Licences, Litigations and Contracts/Agreements with our comprehensive platform.
//             </p>

//             {/* CTA बटन्स */}
//             <div className="mt-12 flex flex-wrap gap-4 justify-center">
//               <a
//                 href="#demo-form"
//                 className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all shadow-lg text-lg"
//               >
//                 Request a Free Demo →
//               </a>
//               <a
//                 href="#features"
//                 className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg text-lg"
//               >
//                 See Features
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ======================================= */}
//       {/* 2. नया डेमो फॉर्म सेक्शन (New Demo Form Section) */}
//       {/* ======================================= */}
//       <section id="demo-form" className="py-20 bg-white">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl shadow-2xl p-8 md:p-12">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">REQUEST A DEMO</h2>
//               <p className="text-gray-600">Get started in just 60 seconds</p>
//             </div>

//             {/* Success/Error Message */}
//             {message.text && (
//               <div className={`mb-4 p-4 rounded-lg ${
//                 message.type === 'success'
//                   ? 'bg-green-100 text-green-700 border border-green-300'
//                   : 'bg-red-100 text-red-700 border border-red-300'
//               }`}>
//                 {message.text}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   name="full_name"
//                   value={formData.full_name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                   placeholder="John Doe"
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">Business Email</label>
//                 <input
//                   type="email"
//                   name="business_email"
//                   value={formData.business_email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                   placeholder="john@company.com"
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
//                 <input
//                   type="tel"
//                   name="mobile_number"
//                   value={formData.mobile_number}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                   placeholder="+91 98765 43210"
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Name</label>
//                 <input
//                   type="text"
//                   name="organization_name"
//                   value={formData.organization_name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                   placeholder="Your Company Ltd."
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isLoading ? 'SUBMITTING...' : 'REQUEST NOW →'}
//               </button>
//             </form>

//             <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
//               </svg>
//               <span>Your information is secure and encrypted</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================== */}
//       {/* 3. फ़ीचर्स सेक्शन (Features Section) */}
//       {/* =================================== */}
//       <section id="features" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
//               FEATURES
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               Legal Compliance Management Software
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Comprehensive tools to manage all your compliance needs
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { icon: '📊', title: 'Dashboard', desc: 'Comprehensive overview' },
//               { icon: '🔍', title: 'Know Your Compliance', desc: 'Stay informed' },
//               { icon: '📱', title: 'Compliance Risk Tracking', desc: 'Monitor risks' },
//               { icon: '📄', title: 'Litigation/Contract Tracking', desc: 'Manage contracts' },
//               { icon: '📋', title: 'Registration/Licence', desc: 'Track licenses' },
//               { icon: '✅', title: 'Vendor Audit', desc: 'Audit management' },
//               { icon: '🔍', title: 'Real Time Audit', desc: 'Live monitoring' },
//               { icon: '📚', title: 'E-Library', desc: 'Digital resources' },
//               { icon: '🔔', title: 'Compliance Alert', desc: 'Timely notifications' },
//               { icon: '📰', title: 'Legal Updates', desc: 'Stay current' },
//               { icon: '📊', title: 'Reports', desc: 'Detailed analytics' },
//               { icon: '👍', title: 'Easy to Use', desc: 'User-friendly' }
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
//               >
//                 <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-2xl mb-4">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-600">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===================================== */}
//       {/* 4. एडवांटेज सेक्शन (Advantages Section) */}
//       {/* ===================================== */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
//               ADVANTAGES
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               Why Choose Our GRC Software?
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: '💼',
//                 title: 'Automated Compliance Processes',
//                 desc: 'Our GRC Software automates many compliance processes, including risk assessments, document management, compliance tracking and reporting. This automation reduces the likelihood of human error, improves accuracy, and saves time.',
//                 color: 'text-blue-600 bg-blue-100'
//               },
//               {
//                 icon: '⚖️',
//                 title: 'Improved Risk Management',
//                 desc: 'Identify, assess, and mitigate compliance risks in real-time. Our advanced analytics help you stay ahead of potential issues and maintain regulatory compliance effortlessly.',
//                 color: 'text-purple-600 bg-purple-100'
//               },
//               {
//                 icon: '💰',
//                 title: 'Cost Savings',
//                 desc: 'By lowering the fines, penalties, and legal action resulting from non-compliance, we can assist firms in saving money. Additionally, it can simplify compliance procedures and lessen the need for manual labour.',
//                 color: 'text-green-600 bg-green-100'
//               },
//               {
//                 icon: '👨‍💼',
//                 title: 'Increased Accountability',
//                 desc: 'By keeping track of compliance-related actions, recording proof of compliance, and providing an audit trail, our software encourages accountability and enables transparency.',
//                 color: 'text-orange-600 bg-orange-100'
//               },
//               {
//                 icon: '🔒',
//                 title: 'Secured Cloud',
//                 desc: 'All data in software is secured with AWS (Amazon Web Services) and certified with ISO 9001:2015, ISO 27001:2013 and GDPR. Organisations can do compliances without the fear of data confidentiality.',
//                 color: 'text-red-600 bg-red-100'
//               },
//               {
//                 icon: '🛠️',
//                 title: 'Support System',
//                 desc: 'Our IT and Legal team always be ready to support our clients whenever required. We try to be quick in problem-solving for the smooth functioning of the compliance journey.',
//                 color: 'text-indigo-600 bg-indigo-100'
//               }
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
//               >
//                 <div className={`w-16 h-16 flex items-center justify-center rounded-full ${item.color} text-3xl mb-5`}>
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================================== */}
//       {/* 5. ऑफर्स सेक्शन (Offers Section) */}
//       {/* ================================== */}
//       <section className="py-20 bg-orange-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-orange-700">
//               Our Exciting Offers
//             </h2>
//             <p className="text-xl text-orange-600">Limited time special deals</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
//             {[
//               { num: "1", text: "1st month free trial" },
//               { num: "2", text: "No implementation charges for first 100 customers" },
//               { num: "3", text: "Get 3 User Extra access on our Basic Package" },
//               { num: "4", text: "Get 2 month free trial storage of 10GB for the first 100 Customer" },
//               { num: "5", text: "Get 25Gb extra storage on our Standard Package" },
//             ].map((offer, index) => (
//               <div
//                 key={index}
//                 className="bg-white border-2 border-orange-200 p-6 rounded-xl text-center shadow-md hover:shadow-xl hover:border-orange-400 hover:scale-105 transition-all duration-300"
//               >
//                 <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
//                   {offer.num}
//                 </div>
//                 <p className="font-semibold leading-relaxed text-gray-700">
//                   {offer.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ========================================= */}
//       {/* 6. सर्टिफ़िकेशन सेक्शन (Certifications Section) */}
//       {/* ========================================= */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
//               TRUSTED & CERTIFIED
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               Our Certifications
//             </h2>
//             <p className="text-xl text-gray-600">Industry-leading security standards</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { name: 'ISO 9001:2015', icon: '🏆', color: 'text-blue-500' },
//               { name: 'ISO 27001:2013', icon: '🔒', color: 'text-green-500' },
//               { name: 'SOC 2 Certified', icon: '✓', color: 'text-purple-500' },
//               { name: 'GDPR', icon: '🛡️', color: 'text-orange-500' }
//             ].map((cert, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 border-2 border-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition-all"
//               >
//                 <div className={`text-6xl mb-4 ${cert.color}`}>{cert.icon}</div>
//                 <div className="font-bold text-lg text-gray-900">{cert.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================================== */}
//       {/* 7. एक्ट्स कवर्ड सेक्शन (Acts Covered Section) */}
//       {/* ====================================== */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
//               COMPREHENSIVE COVERAGE
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               Acts Covered
//             </h2>
//             <p className="text-xl text-gray-600">Complete compliance across all regulations</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//             {[
//               { name: 'HR & LABOUR', icon: '👥' },
//               { name: 'SECRETARIAL', icon: '📋' },
//               { name: 'TAXATION', icon: '💰' },
//               { name: 'LEGAL METROLOGY', icon: '⚖️' },
//               { name: 'SEBI', icon: '🔒' },
//               { name: 'FSSAI', icon: '🍽️' },
//               { name: 'INDUSTRY SPECIFIC', icon: '🏭' },
//               { name: 'IMPORT & EXPORT', icon: '🌍' },
//               { name: 'FIRE & SAFETY', icon: '🔥' },
//               { name: 'FINANCE', icon: '💵' },
//               { name: 'FDI', icon: '📈' },
//               { name: 'TRANSPORT LAWS', icon: '🚛' }
//             ].map((act, index) => (
//               <div
//                 key={index}
//                 className="bg-white border-2 border-gray-200 p-6 rounded-xl text-center hover:border-orange-500 hover:shadow-lg transition-all"
//               >
//                 <div className="text-5xl mb-3">{act.icon}</div>
//                 <div className="font-bold text-sm text-gray-800">{act.name}</div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all">
//               And Many More →
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// 'use client';
// import { useState, useEffect } from 'react';

// export default function PremiumLandingPage() {
//   const [formData, setFormData] = useState({
//     full_name: '',
//     business_email: '',
//     mobile_number: '',
//     organization_name: ''
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage({ type: '', text: '' });

//     try {
//       const payload = {
//         full_name: formData.full_name,
//         business_email: formData.business_email,
//         mobile_number: formData.mobile_number,
//         organization_name: formData.organization_name
//       };

//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/demo-requests`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error('Something went wrong! Please try again.');
//       }

//       const result = await response.json();
//       console.log('Success:', result);

//       setMessage({
//         type: 'success',
//         text: 'Thank you! Our team will contact you within 24 hours 🎉'
//       });

//       setFormData({ full_name: '', business_email: '', mobile_number: '', organization_name: '' });

//     } catch (error) {
//       console.error('Error:', error);
//       setMessage({
//         type: 'error',
//         text: 'Oops! Something went wrong. Please try again.'
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Premium Navigation */}

//       {/* Hero Section - Ultra Premium */}
//       <section className="relative pt-32 pb-20 overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50">
//           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-500/10 via-orange-400/5 to-transparent"></div>
//           <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-orange-500/5 to-transparent"></div>
//         </div>

//         {/* Floating Shapes */}
//         <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Left Content */}
//             <div className="space-y-8">
//               {/* Trust Badge */}
//               <div className="inline-flex items-center space-x-3 bg-white px-5 py-3 rounded-full shadow-lg border border-orange-100">
//                 <div className="flex -space-x-2">
//                   <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
//                   <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
//                   <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
//                   <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
//                     +500
//                   </div>
//                 </div>
//                 <div className="text-sm">
//                   <span className="font-bold text-gray-900">500+ Companies</span>
//                   <span className="text-gray-600"> trust us</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                       <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
//                     </svg>
//                   ))}
//                 </div>
//               </div>

//               {/* Main Heading */}
//               <div>
//                 <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
//                   Transform Your
//                   <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
//                     Legal Compliance
//                   </span>
//                   Into Competitive Advantage
//                 </h1>
//                 <p className="text-2xl text-gray-600 leading-relaxed">
//                   India's most advanced GRC platform trusted by Fortune 500 companies.
//                   <span className="font-semibold text-orange-600"> Automate, Monitor & Stay Ahead</span> of regulatory changes effortlessly.
//                 </p>
//               </div>

//               {/* Key Benefits */}
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { icon: '⚡', text: 'Setup in 60 Seconds', color: 'bg-blue-50 border-blue-200' },
//                   { icon: '🔒', text: '100% Secure & Encrypted', color: 'bg-green-50 border-green-200' },
//                   { icon: '📊', text: '50,000+ Compliances', color: 'bg-purple-50 border-purple-200' },
//                   { icon: '🎯', text: '99.9% Accuracy Rate', color: 'bg-orange-50 border-orange-200' }
//                 ].map((item, i) => (
//                   <div key={i} className={`${item.color} border-2 rounded-xl p-4 flex items-center space-x-3`}>
//                     <span className="text-2xl">{item.icon}</span>
//                     <span className="font-bold text-gray-800 text-sm">{item.text}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-wrap gap-4">
//                 <button className="group bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center space-x-2">
//                   <span>Start Free Trial</span>
//                   <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </button>
//                 <button className="bg-white text-gray-900 px-10 py-5 rounded-xl font-bold text-lg border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all flex items-center space-x-2">
//                   <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
//                   </svg>
//                   <span>Watch Demo</span>
//                 </button>
//               </div>

//               {/* Trust Indicators */}
//               <div className="flex items-center space-x-6 text-sm text-gray-600">
//                 <div className="flex items-center space-x-2">
//                   <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                   </svg>
//                   <span className="font-semibold">No Credit Card</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                   </svg>
//                   <span className="font-semibold">Cancel Anytime</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                   </svg>
//                   <span className="font-semibold">ISO Certified</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Form - Premium Card */}
//             <div className="relative">
//               {/* Glow Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur-2xl opacity-20"></div>

//               <div className="relative bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
//                 {/* Form Header */}
//                 <div className="text-center mb-8">
//                   <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
//                     <span className="relative flex h-2 w-2">
//                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
//                       <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
//                     </span>
//                     <span>LIMITED SPOTS AVAILABLE</span>
//                   </div>
//                   <h2 className="text-4xl font-black text-gray-900 mb-3">Book Your Free Demo</h2>
//                   <p className="text-gray-600 text-lg">Join 500+ companies already using LegalComply</p>
//                 </div>

//                 {/* Success/Error Message */}
//                 {message.text && (
//                   <div className={`mb-6 p-5 rounded-2xl border-2 ${
//                     message.type === 'success'
//                       ? 'bg-green-50 text-green-800 border-green-200'
//                       : 'bg-red-50 text-red-800 border-red-200'
//                   }`}>
//                     <div className="flex items-start space-x-3">
//                       <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
//                         {message.type === 'success' ? (
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                         ) : (
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
//                         )}
//                       </svg>
//                       <span className="font-semibold">{message.text}</span>
//                     </div>
//                   </div>
//                 )}

//                 {/* Form */}
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div>
//                     <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
//                     <input
//                       type="text"
//                       name="full_name"
//                       value={formData.full_name}
//                       onChange={handleChange}
//                       className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition-all text-gray-900 font-medium"
//                       placeholder="e.g., Rajesh Kumar"
//                       required
//                       disabled={isLoading}
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-bold text-gray-700 mb-2">Business Email *</label>
//                     <input
//                       type="email"
//                       name="business_email"
//                       value={formData.business_email}
//                       onChange={handleChange}
//                       className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition-all text-gray-900 font-medium"
//                       placeholder="e.g., rajesh@company.com"
//                       required
//                       disabled={isLoading}
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number *</label>
//                     <input
//                       type="tel"
//                       name="mobile_number"
//                       value={formData.mobile_number}
//                       onChange={handleChange}
//                       className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition-all text-gray-900 font-medium"
//                       placeholder="e.g., +91 98765 43210"
//                       required
//                       disabled={isLoading}
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-bold text-gray-700 mb-2">Organization Name *</label>
//                     <input
//                       type="text"
//                       name="organization_name"
//                       value={formData.organization_name}
//                       onChange={handleChange}
//                       className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:outline-none transition-all text-gray-900 font-medium"
//                       placeholder="e.g., Acme Corporation Pvt Ltd"
//                       required
//                       disabled={isLoading}
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 text-white font-black py-5 rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center space-x-2"
//                   >
//                     {isLoading ? (
//                       <>
//                         <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         <span>PROCESSING...</span>
//                       </>
//                     ) : (
//                       <>
//                         <span>GET FREE DEMO NOW</span>
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                         </svg>
//                       </>
//                     )}
//                   </button>
//                 </form>

//                 {/* Security Badge */}
//                 <div className="mt-6 flex items-center justify-center space-x-3 text-sm">
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
//                     </svg>
//                     <span className="font-semibold">256-bit SSL Encrypted</span>
//                   </div>
//                   <span className="text-gray-300">|</span>
//                   <div className="flex items-center space-x-1">
//                     <span className="font-semibold text-gray-600">Rated</span>
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                           <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
//                         </svg>
//                       ))}
//                     </div>
//                     <span className="font-semibold text-gray-600">4.9/5</span>
//                   </div>
//                 </div>

//                 {/* Testimonial Snippet */}
//                 <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
//                   <div className="flex items-start space-x-3">
//                     <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">
//                       RK
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm text-gray-700 italic">"Best compliance platform we've used. Saved us ₹10L in penalties!"</p>
//                       <p className="text-xs text-gray-600 font-semibold mt-1">- Ravi Kumar, CEO at TechCorp</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Trusted By Section */}
//       <section className="py-16 bg-gray-50 border-y border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Trusted by Industry Leaders</p>
//             <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
//               {['Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'].map((company, i) => (
//                 <div key={i} className="text-2xl font-black text-gray-400">
//                   {company}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section - Premium */}
//       <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-black text-white mb-4">Numbers That Speak For Themselves</h2>
//             <p className="text-xl text-gray-300">Join thousands of companies achieving compliance excellence</p>
//           </div>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { number: '500+', label: 'Enterprise Clients', sublabel: 'Fortune 500 Companies', icon: '🏢', color: 'from-blue-500 to-blue-600' },
//               { number: '50K+', label: 'Active Compliances', sublabel: 'Tracked Daily', icon: '📊', color: 'from-green-500 to-green-600' },
//               { number: '99.9%', label: 'Success Rate', sublabel: 'Zero Penalties', icon: '🎯', color: 'from-purple-500 to-purple-600' },
//               { number: '₹50Cr+', label: 'Penalties Saved', sublabel: 'For Our Clients', icon: '💰', color: 'from-orange-500 to-orange-600' }
//             ].map((stat, i) => (
//               <div key={i} className="text-center group">
//                 <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 transition-transform`}>
//                   {stat.icon}
//                 </div>
//                 <div className="text-6xl font-black text-white mb-3 group-hover:scale-110 transition-transform">{stat.number}</div>
//                 <div className="text-xl font-bold text-gray-300 mb-1">{stat.label}</div>
//                 <div className="text-sm text-gray-500 font-medium">{stat.sublabel}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section - Modern Cards */}
//       <section id="features" className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-block bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-bold mb-6">
//               POWERFUL FEATURES
//             </div>
//             <h2 className="text-6xl font-black text-gray-900 mb-6">
//               Everything You Need,
//               <span className="block text-orange-600">All In One Place</span>
//             </h2>
//             <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive compliance management suite designed for modern enterprises
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: '🎯',
//                 title: 'Smart Dashboard',
//                 desc: 'Get 360° visibility of all compliance activities. Real-time insights with AI-powered analytics and predictive alerts.',
//                 gradient: 'from-blue-500 to-blue-600',
//                 features: ['Real-time Monitoring', 'AI Analytics', 'Custom Reports']
//               },
//               {
//                 icon: '🚨',
//                 title: 'Risk Intelligence',
//                 desc: 'Proactive risk detection with machine learning. Identify potential compliance issues before they become problems.',
//                 gradient: 'from-red-500 to-red-600',
//                 features: ['ML-Powered Detection', 'Risk Scoring', 'Auto Mitigation']
//               },
//               {
//                 icon: '📱',
//                 title: 'Mobile-First Design',
//                 desc: 'Manage compliances on-the-go. Native mobile experience with offline capability and instant sync.',
//                 gradient: 'from-purple-500 to-purple-600',
//                 features: ['iOS & Android', 'Offline Mode', 'Push Notifications']
//               },
//               {
//                 icon: '⚖️',
//                 title: 'Legal Case Manager',
//                 desc: 'Track all litigations, contracts, and agreements. Never miss a hearing or renewal date with smart reminders.',
//                 gradient: 'from-orange-500 to-orange-600',
//                 features: ['Case Tracking', 'Document Management', 'Deadline Alerts']
//               },
//               {
//                 icon: '🤖',
//                 title: 'Automation Engine',
//                 desc: 'Automate repetitive compliance tasks. Save 70% time with intelligent workflows and smart scheduling.',
//                 gradient: 'from-green-500 to-green-600',
//                 features: ['Workflow Automation', 'Auto-Filing', 'Smart Scheduling']
//               },
//               {
//                 icon: '📚',
//                 title: 'Compliance Library',
//                 desc: 'Access 10,000+ compliance templates, guides, and resources. Always up-to-date with latest regulations.',
//                 gradient: 'from-indigo-500 to-indigo-600',
//                 features: ['10K+ Templates', 'Expert Guides', 'Live Updates']
//               },
//               {
//                 icon: '🔍',
//                 title: 'Audit Management',
//                 desc: 'Streamline internal and vendor audits. Complete audit trail with blockchain-verified records.',
//                 gradient: 'from-teal-500 to-teal-600',
//                 features: ['Blockchain Verified', 'Vendor Audits', 'Compliance Reports']
//               },
//               {
//                 icon: '📄',
//                 title: 'Document Control',
//                 desc: 'Centralized document management with version control. OCR-powered search and smart categorization.',
//                 gradient: 'from-pink-500 to-pink-600',
//                 features: ['OCR Search', 'Version Control', 'E-Signatures']
//               },
//               {
//                 icon: '📊',
//                 title: 'Advanced Analytics',
//                 desc: 'Deep insights with customizable dashboards. Export reports in 20+ formats for stakeholders.',
//                 gradient: 'from-yellow-500 to-yellow-600',
//                 features: ['Custom Dashboards', '20+ Export Formats', 'Data Visualization']
//               }
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="group bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
//               >
//                 {/* Gradient Background on Hover */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

//                 <div className="relative">
//                   <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-2xl font-black text-gray-900 mb-4">{feature.title}</h3>
//                   <p className="text-gray-600 leading-relaxed mb-6 text-lg">{feature.desc}</p>

//                   <div className="space-y-2">
//                     {feature.features.map((item, i) => (
//                       <div key={i} className="flex items-center space-x-2 text-sm text-gray-700">
//                         <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                         </svg>
//                         <span className="font-semibold">{item}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-16">
//             <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all inline-flex items-center space-x-3">
//               <span>Explore All Features</span>
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Solutions Section */}
//       <section id="solutions" className="py-24 bg-gradient-to-br from-orange-50 to-orange-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-block bg-orange-200 text-orange-800 px-6 py-2 rounded-full text-sm font-bold mb-6">
//               INDUSTRY SOLUTIONS
//             </div>
//             <h2 className="text-6xl font-black text-gray-900 mb-6">
//               Tailored For Your Industry
//             </h2>
//             <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
//               Specialized compliance solutions for every sector
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { icon: '🏭', title: 'Manufacturing', desc: 'Factory Act, Labour Laws, ESI, PF', color: 'from-blue-500 to-blue-600' },
//               { icon: '🏦', title: 'Banking & Finance', desc: 'RBI, SEBI, Income Tax, GST', color: 'from-green-500 to-green-600' },
//               { icon: '🏥', title: 'Healthcare', desc: 'FSSAI, Drug Control, Medical Laws', color: 'from-red-500 to-red-600' },
//               { icon: '💼', title: 'IT & Services', desc: 'Labour, Secretarial, Tax Compliance', color: 'from-purple-500 to-purple-600' },
//               { icon: '🏪', title: 'Retail & E-commerce', desc: 'Consumer Laws, GST, FSSAI', color: 'from-orange-500 to-orange-600' },
//               { icon: '🏗️', title: 'Construction', desc: 'Safety Laws, Labour, Environment', color: 'from-yellow-500 to-yellow-600' },
//               { icon: '🚚', title: 'Logistics', desc: 'Transport, Labour, Safety Laws', color: 'from-indigo-500 to-indigo-600' },
//               { icon: '🎓', title: 'Education', desc: 'UGC, Labour, Secretarial Laws', color: 'from-pink-500 to-pink-600' }
//             ].map((solution, i) => (
//               <div key={i} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group border-2 border-transparent hover:border-orange-300">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
//                   {solution.icon}
//                 </div>
//                 <h3 className="text-xl font-black text-gray-900 mb-3">{solution.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{solution.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-block bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-bold mb-6">
//               CUSTOMER STORIES
//             </div>
//             <h2 className="text-6xl font-black text-gray-900 mb-6">
//               Loved By Compliance Teams
//               <span className="block text-orange-600">Across India</span>
//             </h2>
//             <div className="flex items-center justify-center space-x-2 text-xl text-gray-600">
//               <span>Rated</span>
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                     <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
//                   </svg>
//                 ))}
//               </div>
//               <span className="font-bold">4.9/5</span>
//               <span>from 500+ reviews</span>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: 'Priya Sharma',
//                 role: 'Head of Compliance',
//                 company: 'TechVista Solutions',
//                 image: 'PS',
//                 rating: 5,
//                 text: 'LegalComply transformed our compliance operations. We reduced manual work by 75% and never missed a single deadline. The ROI was visible within the first month!',
//                 color: 'from-blue-500 to-blue-600'
//               },
//               {
//                 name: 'Amit Patel',
//                 role: 'CEO',
//                 company: 'Global Manufacturing Ltd',
//                 image: 'AP',
//                 rating: 5,
//                 text: 'Best investment we made this year. Saved us ₹50L in potential penalties and our compliance team is now 3x more productive. Highly recommended!',
//                 color: 'from-green-500 to-green-600'
//               },
//               {
//                 name: 'Sneha Reddy',
//                 role: 'Legal Manager',
//                 company: 'FinServe Bank',
//                 image: 'SR',
//                 rating: 5,
//                 text: 'The platform is intuitive and powerful. Their support team is outstanding - always available and super helpful. We\'re managing 1000+ compliances effortlessly now.',
//                 color: 'from-purple-500 to-purple-600'
//               }
//             ].map((testimonial, i) => (
//               <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-orange-300">
//                 <div className="flex items-center space-x-4 mb-6">
//                   <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg`}>
//                     {testimonial.image}
//                   </div>
//                   <div>
//                     <div className="font-black text-gray-900 text-lg">{testimonial.name}</div>
//                     <div className="text-sm text-gray-600 font-semibold">{testimonial.role}</div>
//                     <div className="text-sm text-gray-500">{testimonial.company}</div>
//                   </div>
//                 </div>

//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                       <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
//                     </svg>
//                   ))}
//                 </div>

//                 <p className="text-gray-700 leading-relaxed text-lg italic">"{testimonial.text}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section - Premium Offers */}
//       <section id="pricing" className="py-24 bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 relative overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-block bg-orange-500/20 backdrop-blur-sm text-orange-300 px-6 py-2 rounded-full text-sm font-bold mb-6 border border-orange-500/30">
//               🎉 LIMITED TIME LAUNCH OFFERS
//             </div>
//             <h2 className="text-6xl font-black text-white mb-6">
//               Exclusive Founding Member Benefits
//             </h2>
//             <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
//               Join the first 100 customers and unlock lifetime advantages
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {[
//               {
//                 num: '01',
//                 title: 'Free Trial Month',
//                 subtitle: 'Zero Commitment',
//                 text: 'Full platform access for 30 days. No credit card required. Cancel anytime.',
//                 value: '₹50,000',
//                 highlight: true,
//                 icon: '🎁'
//               },
//               {
//                 num: '02',
//                 title: 'Zero Setup Cost',
//                 subtitle: 'Waived Forever',
//                 text: 'No implementation or onboarding charges. Save ₹75,000 instantly.',
//                 value: '₹75,000',
//                 highlight: true,
//                 icon: '💰'
//               },
//               {
//                 num: '03',
//                 title: '3 Extra User Licenses',
//                 subtitle: 'Basic Package Bonus',
//                 text: 'Get 3 additional user accounts on Basic Package at no extra cost.',
//                 value: '₹30,000/year',
//                 highlight: false,
//                 icon: '👥'
//               },
//               {
//                 num: '04',
//                 title: '10GB Cloud Storage',
//                 subtitle: '2 Months Free',
//                 text: 'Premium cloud storage for your compliance documents. Fully encrypted.',
//                 value: '₹20,000',
//                 highlight: false,
//                 icon: '☁️'
//               },
//               {
//                 num: '05',
//                 title: '25GB Storage Upgrade',
//                 subtitle: 'Standard Package',
//                 text: 'Get 25GB additional storage with Standard Package. Unlimited documents.',
//                 value: '₹40,000',
//                 highlight: false,
//                 icon: '📦'
//               },
//               {
//                 num: '06',
//                 title: 'Priority Support',
//                 subtitle: 'Lifetime Access',
//                 text: 'Skip the queue with priority support. Direct access to senior experts.',
//                 value: 'Priceless',
//                 highlight: false,
//                 icon: '🎯'
//               }
//             ].map((offer, index) => (
//               <div
//                 key={index}
//                 className={`relative rounded-3xl p-8 transition-all duration-300 overflow-hidden ${
//                   offer.highlight
//                     ? 'bg-gradient-to-br from-orange-500 to-red-600 shadow-2xl shadow-orange-500/50 scale-105 border-4 border-orange-300'
//                     : 'bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-orange-500/50 hover:scale-105'
//                 }`}
//               >
//                 {offer.highlight && (
//                   <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-2xl font-black text-sm">
//                     MOST POPULAR
//                   </div>
//                 )}

//                 <div className={`text-6xl mb-6 ${offer.highlight ? 'animate-bounce' : ''}`}>
//                   {offer.icon}
//                 </div>

//                 <div className={`inline-block ${offer.highlight ? 'bg-white/20' : 'bg-orange-500/20'} backdrop-blur-sm px-4 py-1.5 rounded-lg text-sm font-bold mb-4 ${offer.highlight ? 'text-white' : 'text-orange-300'}`}>
//                   OFFER {offer.num}
//                 </div>

//                 <h3 className={`text-3xl font-black mb-2 ${offer.highlight ? 'text-white' : 'text-white'}`}>
//                   {offer.title}
//                 </h3>

//                 <p className={`text-sm font-bold mb-4 ${offer.highlight ? 'text-orange-100' : 'text-orange-300'}`}>
//                   {offer.subtitle}
//                 </p>

//                 <p className={`leading-relaxed mb-6 text-lg ${offer.highlight ? 'text-white/90' : 'text-gray-300'}`}>
//                   {offer.text}
//                 </p>

//                 <div className={`inline-block px-4 py-2 rounded-xl ${offer.highlight ? 'bg-white/20' : 'bg-orange-500/20'} backdrop-blur-sm`}>
//                   <span className={`text-sm font-bold ${offer.highlight ? 'text-white' : 'text-orange-300'}`}>VALUE: </span>
//                   <span className={`text-2xl font-black ${offer.highlight ? 'text-white' : 'text-white'}`}>{offer.value}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center space-y-6">
//             <div className="inline-block bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl px-8 py-6">
//               <p className="text-white text-2xl font-bold mb-2">
//                 Total Value: <span className="text-orange-400 text-4xl font-black">₹2,15,000+</span>
//               </p>
//               <p className="text-gray-300 text-lg">Get everything for FREE as a founding member!</p>
//             </div>

//             <button className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-gray-900 px-16 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:shadow-orange-500/50 transition-all inline-flex items-center space-x-4 animate-pulse">
//               <span>CLAIM YOUR FOUNDING MEMBER SPOT</span>
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </button>

//             <p className="text-orange-300 font-bold text-lg flex items-center justify-center space-x-2">
//               <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               <span>Only 23 spots remaining out of 100!</span>
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Acts Coverage */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-block bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-bold mb-6">
//               COMPREHENSIVE COVERAGE
//             </div>
//             <h2 className="text-6xl font-black text-gray-900 mb-6">
//               Complete Regulatory Universe
//               <span className="block text-orange-600">Under One Roof</span>
//             </h2>
//             <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
//               Stay compliant across all major Indian regulations and industry-specific laws
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {[
//               { name: 'Labour & HR', icon: '👥', acts: '50+ Acts', color: 'from-blue-500 to-blue-600' },
//               { name: 'Secretarial', icon: '📋', acts: '30+ Acts', color: 'from-purple-500 to-purple-600' },
//               { name: 'Taxation', icon: '💰', acts: '40+ Acts', color: 'from-green-500 to-green-600' },
//               { name: 'Legal Metrology', icon: '⚖️', acts: '20+ Acts', color: 'from-yellow-500 to-yellow-600' },
//               { name: 'SEBI', icon: '📈', acts: '25+ Guidelines', color: 'from-red-500 to-red-600' },
//               { name: 'FSSAI', icon: '🍽️', acts: '15+ Standards', color: 'from-orange-500 to-orange-600' },
//               { name: 'Industry Specific', icon: '🏭', acts: '100+ Acts', color: 'from-indigo-500 to-indigo-600' },
//               { name: 'Import & Export', icon: '🌍', acts: '35+ Acts', color: 'from-teal-500 to-teal-600' },
//               { name: 'Fire & Safety', icon: '🔥', acts: '20+ Acts', color: 'from-pink-500 to-pink-600' },
//               { name: 'Finance', icon: '💵', acts: '45+ Acts', color: 'from-cyan-500 to-cyan-600' },
//               { name: 'FDI', icon: '📊', acts: '30+ Regulations', color: 'from-violet-500 to-violet-600' },
//               { name: 'Transport', icon: '🚛', acts: '25+ Acts', color: 'from-emerald-500 to-emerald-600' }
//             ].map((act, index) => (
//               <div
//                 key={index}
//                 className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 text-center border-2 border-gray-100 hover:border-orange-300 hover:shadow-2xl transition-all cursor-pointer"
//               >
//                 <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${act.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform`}>
//                   {act.icon}
//                 </div>
//                 <h3 className="font-black text-xl text-gray-900 mb-2">{act.name}</h3>
//                 <p className="text-orange-600 font-bold text-sm">{act.acts}</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-16 space-y-6">
//             <p className="text-3xl font-black text-gray-900">
//               450+ Acts & Regulations Covered
//             </p>
//             <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all inline-flex items-center space-x-3">
//               <span>View Complete Act List</span>
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Certifications */}
//       <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-block bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-bold mb-6">
//               TRUSTED & CERTIFIED
//             </div>
//             <h2 className="text-6xl font-black text-gray-900 mb-6">
//               World-Class Security Standards
//             </h2>
//             <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
//               Your data security is our top priority. Certified by global authorities.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { name: 'ISO 9001:2015', subtitle: 'Quality Management System', icon: '🏆', gradient: 'from-blue-500 to-blue-600' },
//               { name: 'ISO 27001:2013', subtitle: 'Information Security', icon: '🔒', gradient: 'from-green-500 to-green-600' },
//               { name: 'SOC 2 Type II', subtitle: 'Security & Compliance', icon: '✓', gradient: 'from-purple-500 to-purple-600' },
//               { name: 'GDPR Compliant', subtitle: 'Data Protection', icon: '🛡️', gradient: 'from-orange-500 to-orange-600' }
//             ].map((cert, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-orange-300 group"
//               >
//                 <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${cert.gradient} rounded-3xl flex items-center justify-center text-5xl shadow-2xl group-hover:scale-110 transition-transform`}>
//                   {cert.icon}
//                 </div>
//                 <h3 className="font-black text-2xl text-gray-900 mb-2">{cert.name}</h3>
//                 <p className="text-gray-600 font-semibold">{cert.subtitle}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-16 bg-white rounded-3xl shadow-2xl p-12 border-2 border-orange-100">
//             <div className="grid md:grid-cols-3 gap-8 text-center">
//               <div>
//                 <div className="text-5xl font-black text-orange-600 mb-2">256-bit</div>
//                 <div className="text-gray-700 font-bold">SSL Encryption</div>
//               </div>
//               <div>
//                 <div className="text-5xl font-black text-orange-600 mb-2">99.9%</div>
//                 <div className="text-gray-700 font-bold">Uptime SLA</div>
//               </div>
//               <div>
//                 <div className="text-5xl font-black text-orange-600 mb-2">24/7</div>
//                 <div className="text-gray-700 font-bold">Monitoring</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-bold mb-6">
//               GOT QUESTIONS?
//             </div>
//             <h2 className="text-5xl font-black text-gray-900 mb-4">
//               Frequently Asked Questions
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {[
//               {
//                 q: 'How quickly can we get started?',
//                 a: 'You can be up and running in under 60 seconds! Simply sign up, add your team, and start managing compliances immediately. Our onboarding team will guide you through the entire process.'
//               },
//               {
//                 q: 'Is my data secure?',
//                 a: 'Absolutely! We use bank-grade 256-bit SSL encryption, are ISO 27001 certified, GDPR compliant, and host on AWS with multiple redundancies. Your data is safer with us than in physical files.'
//               },
//               {
//                 q: 'Do you provide training and support?',
//                 a: 'Yes! We offer comprehensive training sessions, video tutorials, documentation, and 24/7 priority support. Our team is always ready to help you succeed.'
//               },
//               {
//                 q: 'Can I cancel my subscription anytime?',
//                 a: 'Yes, you can cancel anytime with no questions asked. We believe in earning your business every day. No long-term contracts or hidden fees.'
//               },
//               {
//                 q: 'What happens after the free trial?',
//                 a: 'After your free trial ends, you can choose a plan that fits your needs. All your data remains intact, and you continue with full access based on your selected plan.'
//               }
//             ].map((faq, i) => (
//               <div key={i} className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-300 transition-all">
//                 <h3 className="text-xl font-black text-gray-900 mb-3">{faq.q}</h3>
//                 <p className="text-gray-700 leading-relaxed text-lg">{faq.a}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
//         </div>

//         <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-6xl font-black text-white mb-6">
//             Ready To Transform Your
//             <span className="block">Compliance Operations?</span>
//           </h2>
//           <p className="text-2xl text-white/90 mb-12 leading-relaxed">
//             Join 500+ companies that chose LegalComply and never looked back.
//             <br />Start your free trial today - no credit card required!
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
//             <button className="bg-white text-orange-600 px-16 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:shadow-white/50 transition-all">
//               Start Free Trial →
//             </button>
//             <button className="bg-white/10 backdrop-blur-sm text-white px-16 py-6 rounded-2xl font-black text-2xl border-4 border-white/30 hover:bg-white/20 transition-all">
//               Schedule Demo
//             </button>
//           </div>

//           <div className="flex flex-wrap items-center justify-center gap-8 text-white/90 text-lg font-semibold">
//             <div className="flex items-center space-x-2">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//               </svg>
//               <span>Free 30-Day Trial</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//               </svg>
//               <span>No Credit Card</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//               </svg>
//               <span>Cancel Anytime</span>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
