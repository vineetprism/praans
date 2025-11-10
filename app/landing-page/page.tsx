'use client';
import Link from 'next/link';
import { useState } from 'react';
 
 
export default function LandingPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    business_email: '',
    mobile_number: '',
    organization_name: ''
  });
 
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });
   
    try {
 
       const payload = {
        full_name: formData.full_name,
        business_email: formData.business_email,
        mobile_number: formData.mobile_number,
        organization_name: formData.organization_name
      };
        console.log(payload,process.env.NEXT_PUBLIC_API_BASE)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE }/api/demo-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
 
      if (!response.ok) {
        throw new Error('Something went wrong! Please try again.');
      }
 
      const result = await response.json();
      console.log('Success:', result);
     
      setMessage({
        type: 'success',
        text: 'Demo request submitted successfully! 🎉'
      });
     
      setFormData({ full_name: '', business_email: '', mobile_number: '', organization_name: '' });
     
    } catch (error) {
      console.error('Error:', error);
      setMessage({
        type: 'error',
        text: 'Failed to submit request. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-sm font-semibold text-orange-700">India's #1 Compliance Software</span>
              </div>
 
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                India's Leading
                <span className="block text-orange-600">Legal Compliance</span>
                Management Software
              </h1>
 
              <p className="text-xl text-gray-600 leading-relaxed">
                Automate your compliances, Registrations/Licences, Litigations and Contracts/Agreements with our comprehensive platform.
              </p>
 
              {/* Free Trial Badge */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-xl inline-block">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="font-bold text-lg">Free Trial with Legal Consultancy</span>
                </div>
              </div>
 
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="#offers">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg">
                  See Our Exciting Offers →
                </button>
                </Link>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all">
                  Watch Demo
                </button>
              </div>
 
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="text-3xl font-bold text-orange-600">ISO</div>
                  <div className="text-sm text-gray-600 font-medium">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Support</div>
                </div>
              </div>
            </div>
 
            {/* Right Form */}
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-orange-500">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">REQUEST A DEMO</h2>
                  <p className="text-gray-600">Get started in just 60 seconds</p>
                </div>
               
                {/* Success/Error Message */}
                {message.text && (
                  <div className={`mb-4 p-4 rounded-lg ${
                    message.type === 'success'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-red-100 text-red-700 border border-red-300'
                  }`}>
                    {message.text}
                  </div>
                )}
               
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Business Email</label>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Name</label>
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
                    {isLoading ? 'SUBMITTING...' : 'REQUEST NOW →'}
                  </button>
                </form>
 
                <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Legal Compliance Management Software
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools to manage all your compliance needs
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📊', title: 'Dashboard', desc: 'Comprehensive overview', color: 'bg-blue-50 border-blue-200' },
              { icon: '🔍', title: 'Know Your Compliance', desc: 'Stay informed', color: 'bg-purple-50 border-purple-200' },
              { icon: '📱', title: 'Compliance Risk Tracking', desc: 'Monitor risks', color: 'bg-pink-50 border-pink-200' },
              { icon: '📄', title: 'Litigation/Contract Tracking', desc: 'Manage contracts', color: 'bg-orange-50 border-orange-200' },
              { icon: '📋', title: 'Registration/Licence', desc: 'Track licenses', color: 'bg-green-50 border-green-200' },
              { icon: '✅', title: 'Vendor Audit', desc: 'Audit management', color: 'bg-teal-50 border-teal-200' },
              { icon: '🔍', title: 'Real Time Audit', desc: 'Live monitoring', color: 'bg-indigo-50 border-indigo-200' },
              { icon: '📚', title: 'E-Library', desc: 'Digital resources', color: 'bg-red-50 border-red-200' },
              { icon: '🔔', title: 'Compliance Alert', desc: 'Timely notifications', color: 'bg-yellow-50 border-yellow-200' },
              { icon: '📰', title: 'Legal Updates', desc: 'Stay current', color: 'bg-cyan-50 border-cyan-200' },
              { icon: '📊', title: 'Reports', desc: 'Detailed analytics', color: 'bg-violet-50 border-violet-200' },
              { icon: '👍', title: 'Easy to Use', desc: 'User-friendly', color: 'bg-emerald-50 border-emerald-200' }
            ].map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} border-2 p-6 rounded-xl hover:shadow-lg transition-all`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
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
      </section>
 
      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              ADVANTAGES
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our GRC Software?
            </h2>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💼',
                title: 'Automated Compliance Processes',
                desc: 'Our GRC Software automates many compliance processes, including risk assessments, document management, compliance tracking and reporting. This automation reduces the likelihood of human error, improves accuracy, and saves time.',
                color: 'border-t-blue-500'
              },
              {
                icon: '⚖️',
                title: 'Improved Risk Management',
                desc: 'Identify, assess, and mitigate compliance risks in real-time. Our advanced analytics help you stay ahead of potential issues and maintain regulatory compliance effortlessly.',
                color: 'border-t-purple-500'
              },
              {
                icon: '💰',
                title: 'Cost Savings',
                desc: 'By lowering the fines, penalties, and legal action resulting from non-compliance, we can assist firms in saving money. Additionally, it can simplify compliance procedures and lessen the need for manual labour.',
                color: 'border-t-green-500'
              },
              {
                icon: '👨‍💼',
                title: 'Increased Accountability',
                desc: 'By keeping track of compliance-related actions, recording proof of compliance, and providing an audit trail, our software encourages accountability and enables transparency.',
                color: 'border-t-orange-500'
              },
              {
                icon: '🔒',
                title: 'Secured Cloud',
                desc: 'All data in software is secured with AWS (Amazon Web Services) and certified with ISO 9001:2015, ISO 27001:2013 and GDPR. Organisations can do compliances without the fear of data confidentiality.',
                color: 'border-t-red-500'
              },
              {
                icon: '🛠️',
                title: 'Support System',
                desc: 'Our IT and Legal team always be ready to support our clients whenever required. We try to be quick in problem-solving for the smooth functioning of the compliance journey.',
                color: 'border-t-indigo-500'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white border-2 border-gray-100 border-t-4 ${item.color} p-8 rounded-xl hover:shadow-xl transition-all`}
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Exciting Offers */}
      <section id="offers" className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Exciting Offers</h2>
            <p className="text-xl opacity-90">Limited time special deals</p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: '1', text: '1st month free trial' },
              { num: '2', text: 'No implementation charges for first 100 customers' },
              { num: '3', text: 'Get 3 User Extra access on our Basic Package' },
              { num: '4', text: 'Get 2 month free trial storage of 10GB for the first 100 Customer' },
              { num: '5', text: 'Get 25Gb extra storage on our Standard Package' }
            ].map((offer, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-6 rounded-xl text-center hover:bg-white/20 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  {offer.num}
                </div>
                <p className="font-semibold leading-relaxed">{offer.text}</p>
              </div>
            ))}
          </div>
 
          <div className="text-center mt-12">
            <button className="bg-white text-orange-600 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all">
              Claim Your Offer Now →
            </button>
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
            <p className="text-xl text-gray-600">Industry-leading security standards</p>
          </div>
 
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'ISO 9001:2015', icon: '🏆', bg: 'bg-blue-50', border: 'border-blue-200' },
              { name: 'ISO 27001:2013', icon: '🔒', bg: 'bg-green-50', border: 'border-green-200' },
              { name: 'SOC 2 Certified', icon: '✓', bg: 'bg-purple-50', border: 'border-purple-200' },
              { name: 'GDPR', icon: '🛡️', bg: 'bg-orange-50', border: 'border-orange-200' }
            ].map((cert, index) => (
              <div
                key={index}
                className={`${cert.bg} border-2 ${cert.border} p-8 rounded-xl text-center hover:shadow-lg transition-all`}
              >
                <div className="text-6xl mb-4">{cert.icon}</div>
                <div className="font-bold text-lg text-gray-900">{cert.name}</div>
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
            <p className="text-xl text-gray-600">Complete compliance across all regulations</p>
          </div>
 
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'HR & LABOUR', icon: '👥' },
              { name: 'SECRETARIAL', icon: '📋' },
              { name: 'TAXATION', icon: '💰' },
              { name: 'LEGAL METROLOGY', icon: '⚖️' },
              { name: 'SEBI', icon: '🔒' },
              { name: 'FSSAI', icon: '🍽️' },
              { name: 'INDUSTRY SPECIFIC', icon: '🏭' },
              { name: 'IMPORT & EXPORT', icon: '🌍' },
              { name: 'FIRE & SAFETY', icon: '🔥' },
              { name: 'FINANCE', icon: '💵' },
              { name: 'FDI', icon: '📈' },
              { name: 'TRANSPORT LAWS', icon: '🚛' }
            ].map((act, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 p-6 rounded-xl text-center hover:border-orange-500 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-3">{act.icon}</div>
                <div className="font-bold text-sm text-gray-800">{act.name}</div>
              </div>
            ))}
          </div>
 
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all">
              And Many More →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}