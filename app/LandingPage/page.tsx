// 'use client';
// import { useState } from 'react';

// export default function LandingPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     organization: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Demo request submitted successfully!');
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
//         <div className="absolute top-0 right-0 w-1/2 h-full">
//           <div className="absolute top-0 right-0 w-full h-full bg-orange-500 transform skew-x-12 origin-top-right"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="w-32 h-32 bg-orange-500 rounded-full mb-8"></div>
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 India's Leading Legal Compliance Management Software.
//               </h1>
//               <p className="text-2xl text-orange-500 font-semibold mb-6">
//                 Free trial with legal consultancy
//               </p>
//               <p className="text-lg text-gray-700 mb-8">
//                 Automate your compliances, Registrations/Licences, Litigations and Contracts/Agreements
//               </p>
//               <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all">
//                 See Our Exciting Offers
//               </button>
//             </div>

//             <div className="relative z-10">
//               <div className="bg-white rounded-lg shadow-2xl p-8">
//                 <h2 className="text-3xl font-bold text-center mb-8">REQUEST A DEMO</h2>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="NAME"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-gray-100 border-0 focus:ring-2 focus:ring-orange-500 outline-none"
//                     required
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="BUSINESS EMAIL ADDRESS"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-gray-100 border-0 focus:ring-2 focus:ring-orange-500 outline-none"
//                     required
//                   />
//                   <input
//                     type="tel"
//                     name="mobile"
//                     placeholder="MOBILE NUMBER"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-gray-100 border-0 focus:ring-2 focus:ring-orange-500 outline-none"
//                     required
//                   />
//                   <input
//                     type="text"
//                     name="organization"
//                     placeholder="ORGANIZATION NAME"
//                     value={formData.organization}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-gray-100 border-0 focus:ring-2 focus:ring-orange-500 outline-none"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     className="w-full bg-orange-500 text-white font-bold py-3 px-6 hover:bg-orange-600 transition-all"
//                   >
//                     REQUEST NOW
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-orange-500 text-sm font-bold mb-2 tracking-wider">FEATURES OF</h2>
//             <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Legal Compliance Management Software | GRC Software
//             </h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: '📊', title: 'Dashboard' },
//               { icon: '🔍', title: 'Know Your Compliance' },
//               { icon: '📱', title: 'Compliance Risk Tracking' },
//               { icon: '📄', title: 'Litigation/Contract Tracking' },
//               { icon: '📋', title: 'Registration/Licence Tracking' },
//               { icon: '✅', title: 'Manpower Vendor Audit' },
//               { icon: '🔍', title: 'Real Time Audit' },
//               { icon: '📚', title: 'E-Library' },
//               { icon: '🔔', title: 'Compliance Alert' },
//               { icon: '📰', title: 'Legal Updates' },
//               { icon: '📊', title: 'Reports' },
//               { icon: '👍', title: 'Easy to Use' }
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center"
//               >
//                 <div className="text-5xl mb-4 text-orange-500">{feature.icon}</div>
//                 <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Advantages Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-orange-500 text-sm font-bold mb-2 tracking-wider">ADVANTAGES OF</h2>
//             <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Legal Compliance Management Software | GRC Software
//             </h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="text-6xl mb-4">💼</div>
//               <h4 className="text-xl font-bold mb-4">Automated Compliance Processes</h4>
//               <p className="text-gray-600">
//                 Our GRC Software automates many compliance processes, including risk assessments, 
//                 document management, compliance tracking and reporting. This automation reduces the 
//                 likelihood of human error, improves accuracy, and saves time.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="text-6xl mb-4">⚖️</div>
//               <h4 className="text-xl font-bold mb-4">Improved Risk Management</h4>
//               <p className="text-gray-600">
//                 Our GRC Software automates many compliance processes, including risk assessments, 
//                 document management, compliance tracking and reporting. This automation reduces the 
//                 likelihood of human error, improves accuracy, and saves time.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="text-6xl mb-4">💰</div>
//               <h4 className="text-xl font-bold mb-4">Cost Savings</h4>
//               <p className="text-gray-600">
//                 By lowering the fines, penalties, and legal action resulting from non-compliance, we can 
//                 assist firms in saving money. Additionally, it can simplify compliance procedures and lessen 
//                 the need for manual labour, enhancing productivity and lowering labour expenses.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="text-6xl mb-4">👨‍💼</div>
//               <h4 className="text-xl font-bold mb-4">Increased Accountability</h4>
//               <p className="text-gray-600">
//                 By keeping track of compliance-related actions, recording proof of compliance, and providing 
//                 an audit trail, our software encourages accountability. This encourages openness and enables 
//                 companies to show their compliance to auditors, regulators, and other stakeholders.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="text-6xl mb-4">🔒</div>
//               <h4 className="text-xl font-bold mb-4">Secured Cloud</h4>
//               <p className="text-gray-600">
//                 All data in software is secured with AWS (Amazon Web Services) and certified with ISO 
//                 9001:2015, ISO 27001:2013 and GDPR. Organisations can do compliances without the fear of data 
//                 confidentiality.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <div className="text-6xl mb-4">🛠️</div>
//               <h4 className="text-xl font-bold mb-4">Support System</h4>
//               <p className="text-gray-600">
//                 Our IT and Legal team always be ready to support our clients whenever required. We try to be 
//                 quick in problem-solving for the smooth functioning of the compliance journey.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Highlights Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-orange-500 text-sm font-bold mb-2 tracking-wider">HIGHLIGHTS OF</h2>
//             <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Legal Compliance Management Software | GRC Software
//             </h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: '⚙️',
//                 title: 'Four Modules in One Software',
//                 desc: 'Compliance Management, Litigation Management, Registration/Contract Management, Internal task Management'
//               },
//               {
//                 icon: '✓',
//                 title: 'Maker & Checker',
//                 desc: 'To ensure error-free compliance, our software has a Maker and Checker concept. Every compliance uploaded to our tool shall be cross-checked and approved by Checker.'
//               },
//               {
//                 icon: '📚',
//                 title: 'E-Library',
//                 desc: 'We have a huge E-Library in our software that has all the latest Acts, Rules, and notifications.'
//               },
//               {
//                 icon: '👌',
//                 title: 'Easy to Use',
//                 desc: 'Our software dashboard and process are very simple, and everybody can understand them without any formal training.'
//               },
//               {
//                 icon: '📊',
//                 title: 'Risk Analysis',
//                 desc: 'We divided the risk of compliance into three parts – High, Medium, and Low, therefore the client can understand the severity of compliance.'
//               },
//               {
//                 icon: '📈',
//                 title: 'Reporting and Analytics',
//                 desc: 'Software provides reports in downloadable Excel, therefore clients can make reports as per their requirements and can analyse compliance.'
//               },
//               {
//                 icon: '🔔',
//                 title: 'Reminders',
//                 desc: 'Our software sends emails to users for due compliance and reminders automatically.'
//               },
//               {
//                 icon: '📦',
//                 title: 'Documents Management',
//                 desc: 'Organisations may upload all compliance-related documents in software for future use without the worry of data confidentiality.'
//               }
//             ].map((item, index) => (
//               <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-lg shadow-md text-center">
//                 <div className="text-5xl mb-4 text-orange-500">{item.icon}</div>
//                 <h4 className="text-lg font-bold mb-3">{item.title}</h4>
//                 <p className="text-sm text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Exciting Offers */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-12">Our Exciting Offers</h2>
//           <div className="relative">
//             <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
//               <div className="bg-orange-500 text-white px-6 py-3 rounded-r-full text-sm font-bold shadow-lg">
//                 SPECIAL OFFER
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
//               {[
//                 { num: '1', text: '1st month free trial' },
//                 { num: '2', text: 'No implementation charges for first 100 customers' },
//                 { num: '3', text: 'Get 3 User Extra access on our Basic Package' },
//                 { num: '4', text: 'Get 2 month free trial storage of 10GB for the first 100 Customer' },
//                 { num: '5', text: 'Get 25Gb extra storage on our Standard Package' }
//               ].map((offer, index) => (
//                 <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
//                   <div className="w-16 h-16 mx-auto mb-4 border-2 border-orange-500 rounded-full flex items-center justify-center">
//                     <span className="text-3xl font-bold text-orange-500">{offer.num}</span>
//                   </div>
//                   <p className="text-gray-700">{offer.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Table */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-12">Pricing Table</h2>
//           <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
//             {[
//               {
//                 price: '10,000',
//                 plan: 'Basic',
//                 color: 'bg-orange-500',
//                 users: '2',
//                 storage: '10 GB',
//                 entity: '1',
//                 state: 'Multiple'
//               },
//               {
//                 price: '15,000',
//                 plan: 'Standard',
//                 color: 'bg-black',
//                 users: '5',
//                 storage: '20 GB',
//                 entity: '1',
//                 state: 'Multiple'
//               },
//               {
//                 price: '20,000',
//                 plan: 'Premium',
//                 color: 'bg-orange-500',
//                 users: '5',
//                 storage: '50 GB',
//                 entity: '2',
//                 state: 'Multiple'
//               },
//               {
//                 price: '30,000',
//                 plan: 'Advance',
//                 color: 'bg-black',
//                 users: '10',
//                 storage: '100 GB',
//                 entity: '4',
//                 state: 'Multiple'
//               },
//               {
//                 price: 'Custom',
//                 plan: 'Business',
//                 color: 'bg-orange-500',
//                 users: '> 10',
//                 storage: '> 100GB',
//                 entity: '> 4',
//                 state: 'Multiple'
//               }
//             ].map((pkg, index) => (
//               <div key={index} className="text-center">
//                 <div className={`${pkg.color} text-white p-8 rounded-t-lg`}>
//                   <div className="text-3xl font-bold mb-2">Rs. {pkg.price}</div>
//                   <div className="text-xl">{pkg.plan}</div>
//                 </div>
//                 <div className="bg-gray-100 p-6 rounded-b-lg space-y-4">
//                   <div className="py-3 border-b border-gray-300">
//                     <div className="font-semibold">Monthly</div>
//                   </div>
//                   <div className="py-3 border-b border-gray-300">
//                     <div className="font-semibold">User:{pkg.users}</div>
//                   </div>
//                   <div className="py-3 border-b border-gray-300">
//                     <div className="font-semibold">Storage:{pkg.storage}</div>
//                   </div>
//                   <div className="py-3 border-b border-gray-300">
//                     <div className="font-semibold">Entity: {pkg.entity}</div>
//                   </div>
//                   <div className="py-3">
//                     <div className="font-semibold">State: {pkg.state}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-8">
//             <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all">
//               Book A Free Trial Now...
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Certifications */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { name: 'ISO 9001:2015', icon: '🏆' },
//               { name: 'ISO 27001:2013', icon: '🔒' },
//               { name: 'SOC 2 Certified', icon: '✓' },
//               { name: 'GDPR', icon: '🛡️' }
//             ].map((cert, index) => (
//               <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
//                 <div className="text-5xl mb-4 text-blue-600">{cert.icon}</div>
//                 <div className="font-bold text-lg">{cert.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Acts Covered */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-12">Acts Covered</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
//               <div key={index} className="text-center">
//                 <div className="text-4xl mb-3">{act.icon}</div>
//                 <div className="font-semibold text-sm">{act.name}</div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all">
//               And More....
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-100 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-orange-500 rounded mr-3"></div>
//                 <div>
//                   <div className="font-bold text-xl">PRAAN'S</div>
//                   <div className="text-orange-500 font-bold">CONSULTECH</div>
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold mb-6">Connect With Praans Consultech</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <span className="text-orange-500 mr-3">📞</span>
//                   <span className="font-semibold">Call Us: +91-9050576838</span>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="text-orange-500 mr-3">✉️</span>
//                   <span className="font-semibold">info@praansconsultech.com</span>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold mb-6">Follow Us:</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded flex items-center justify-center hover:bg-blue-700 transition-all">
//                   f
//                 </a>
//                 <a href="#" className="w-12 h-12 bg-black text-white rounded flex items-center justify-center hover:bg-gray-800 transition-all">
//                   𝕏
//                 </a>
//                 <a href="#" className="w-12 h-12 bg-blue-700 text-white rounded flex items-center justify-center hover:bg-blue-800 transition-all">
//                   in
//                 </a>
//                 <a href="#" className="w-12 h-12 bg-red-600 text-white rounded flex items-center justify-center hover:bg-red-700 transition-all">
//                   ▶
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }












// 'use client';
// import { useState, useEffect } from 'react';

// export default function LandingPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     organization: ''
//   });
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeTab, setActiveTab] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Demo request submitted successfully! 🎉');
//     setFormData({ name: '', email: '', mobile: '', organization: '' });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-100">
//       {/* Animated Background Shapes */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//         <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center overflow-hidden">
//         {/* Geometric Pattern Background */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }}></div>
//         </div>

//         {/* Orange Diagonal Shape */}
//         <div className="absolute top-0 right-0 w-1/2 h-full">
//           <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 transform skew-x-12 origin-top-right shadow-2xl">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]"></div>
//           </div>
//         </div>

//         <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               {/* Animated Logo Circle */}
//               <div className="relative w-32 h-32 mb-8">
//                 <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full animate-pulse"></div>
//                 <div className="absolute inset-2 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center">
//                   <span className="text-white text-4xl font-bold">P</span>
//                 </div>
//                 <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
//               </div>

//               <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
//                 India's <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Leading</span>
//                 <br />Legal Compliance
//                 <br />Management Software.
//               </h1>

//               <div className="flex items-center space-x-3 bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-4 shadow-lg w-fit">
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
//                 <p className="text-xl text-orange-600 font-bold">
//                   Free trial with legal consultancy
//                 </p>
//               </div>

//               <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
//                 Automate your compliances, Registrations/Licences, Litigations and Contracts/Agreements with our cutting-edge platform.
//               </p>

//               <div className="flex flex-wrap gap-4 pt-4">
//                 <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
//                   <span className="relative z-10">See Our Exciting Offers</span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
//                 </button>
                
//                 <button className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl">
//                   Watch Demo
//                 </button>
//               </div>

//               {/* Trust Badges */}
//               <div className="flex flex-wrap gap-6 pt-6">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                     <span className="text-blue-600 font-bold">✓</span>
//                   </div>
//                   <span className="text-sm font-semibold text-gray-700">ISO Certified</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
//                     <span className="text-green-600 font-bold">🔒</span>
//                   </div>
//                   <span className="text-sm font-semibold text-gray-700">AWS Secured</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
//                     <span className="text-purple-600 font-bold">⚡</span>
//                   </div>
//                   <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
//                 </div>
//               </div>
//             </div>

//             {/* Request Demo Form - Enhanced */}
//             <div className="relative z-10">
//               <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 animate-bounce">
//                   Limited Offer! 🎉
//                 </div>
                
//                 <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
//                   REQUEST A DEMO
//                 </h2>
//                 <p className="text-center text-gray-600 mb-6">Get started in 60 seconds</p>
                
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Full Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all"
//                       required
//                     />
//                   </div>
                  
//                   <div className="relative">
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Business Email Address"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all"
//                       required
//                     />
//                   </div>
                  
//                   <div className="relative">
//                     <input
//                       type="tel"
//                       name="mobile"
//                       placeholder="Mobile Number"
//                       value={formData.mobile}
//                       onChange={handleChange}
//                       className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all"
//                       required
//                     />
//                   </div>
                  
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="organization"
//                       placeholder="Organization Name"
//                       value={formData.organization}
//                       onChange={handleChange}
//                       className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all"
//                       required
//                     />
//                   </div>
                  
//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
//                   >
//                     REQUEST NOW →
//                   </button>
//                 </form>

//                 <p className="text-center text-xs text-gray-500 mt-4">
//                   🔒 Your information is secure and encrypted
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section - Enhanced */}
//       <section className="py-20 bg-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50 to-transparent opacity-50"></div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-4">
//               FEATURES OF
//             </span>
//             <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Legal Compliance Management Software
//             </h3>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: '📊', title: 'Dashboard', color: 'from-blue-400 to-blue-600' },
//               { icon: '🔍', title: 'Know Your Compliance', color: 'from-purple-400 to-purple-600' },
//               { icon: '📱', title: 'Compliance Risk Tracking', color: 'from-pink-400 to-pink-600' },
//               { icon: '📄', title: 'Litigation/Contract Tracking', color: 'from-orange-400 to-orange-600' },
//               { icon: '📋', title: 'Registration/Licence Tracking', color: 'from-green-400 to-green-600' },
//               { icon: '✅', title: 'Manpower Vendor Audit', color: 'from-teal-400 to-teal-600' },
//               { icon: '🔍', title: 'Real Time Audit', color: 'from-indigo-400 to-indigo-600' },
//               { icon: '📚', title: 'E-Library', color: 'from-red-400 to-red-600' },
//               { icon: '🔔', title: 'Compliance Alert', color: 'from-yellow-400 to-yellow-600' },
//               { icon: '📰', title: 'Legal Updates', color: 'from-cyan-400 to-cyan-600' },
//               { icon: '📊', title: 'Reports', color: 'from-violet-400 to-violet-600' },
//               { icon: '👍', title: 'Easy to Use', color: 'from-emerald-400 to-emerald-600' }
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
//                 <div className="relative">
//                   <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-4 transform group-hover:rotate-12 transition-transform shadow-lg`}>
//                     {feature.icon}
//                   </div>
//                   <h4 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
//                     {feature.title}
//                   </h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Advantages Section - Enhanced */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-4">
//               ADVANTAGES OF
//             </span>
//             <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Why Choose Our GRC Software?
//             </h3>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: '💼',
//                 title: 'Automated Compliance Processes',
//                 desc: 'Our GRC Software automates many compliance processes, including risk assessments, document management, compliance tracking and reporting. This automation reduces the likelihood of human error, improves accuracy, and saves time.',
//                 gradient: 'from-blue-500 to-blue-700'
//               },
//               {
//                 icon: '⚖️',
//                 title: 'Improved Risk Management',
//                 desc: 'Our GRC Software automates many compliance processes, including risk assessments, document management, compliance tracking and reporting. This automation reduces the likelihood of human error, improves accuracy, and saves time.',
//                 gradient: 'from-purple-500 to-purple-700'
//               },
//               {
//                 icon: '💰',
//                 title: 'Cost Savings',
//                 desc: 'By lowering the fines, penalties, and legal action resulting from non-compliance, we can assist firms in saving money. Additionally, it can simplify compliance procedures and lessen the need for manual labour, enhancing productivity and lowering labour expenses.',
//                 gradient: 'from-green-500 to-green-700'
//               },
//               {
//                 icon: '👨‍💼',
//                 title: 'Increased Accountability',
//                 desc: 'By keeping track of compliance-related actions, recording proof of compliance, and providing an audit trail, our software encourages accountability. This encourages openness and enables companies to show their compliance to auditors, regulators, and other stakeholders.',
//                 gradient: 'from-orange-500 to-orange-700'
//               },
//               {
//                 icon: '🔒',
//                 title: 'Secured Cloud',
//                 desc: 'All data in software is secured with AWS (Amazon Web Services) and certified with ISO 9001:2015, ISO 27001:2013 and GDPR. Organisations can do compliances without the fear of data confidentiality.',
//                 gradient: 'from-red-500 to-red-700'
//               },
//               {
//                 icon: '🛠️',
//                 title: 'Support System',
//                 desc: 'Our IT and Legal team always be ready to support our clients whenever required. We try to be quick in problem-solving for the smooth functioning of the compliance journey.',
//                 gradient: 'from-indigo-500 to-indigo-700'
//               }
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
//               >
//                 <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.gradient} rounded-t-3xl`}></div>
//                 <div className={`text-6xl mb-6 transform group-hover:scale-110 transition-transform`}>
//                   {item.icon}
//                 </div>
//                 <h4 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h4>
//                 <p className="text-gray-600 leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Exciting Offers - Enhanced */}
//       <section className="py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
//               Our Exciting Offers
//             </h2>
//             <p className="text-xl text-orange-100">Limited time deals - Don't miss out!</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
//             {[
//               { num: '1', text: '1st month free trial', icon: '🎁' },
//               { num: '2', text: 'No implementation charges for first 100 customers', icon: '💝' },
//               { num: '3', text: 'Get 3 User Extra access on our Basic Package', icon: '👥' },
//               { num: '4', text: 'Get 2 month free trial storage of 10GB for the first 100 Customer', icon: '💾' },
//               { num: '5', text: 'Get 25Gb extra storage on our Standard Package', icon: '📦' }
//             ].map((offer, index) => (
//               <div
//                 key={index}
//                 className="group bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl border-2 border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
//               >
//                 <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform">
//                   <span className="text-4xl">{offer.icon}</span>
//                 </div>
//                 <div className="w-12 h-12 mx-auto mb-4 border-3 border-white rounded-full flex items-center justify-center">
//                   <span className="text-2xl font-bold text-white">{offer.num}</span>
//                 </div>
//                 <p className="text-white font-semibold text-center leading-relaxed">{offer.text}</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <button className="px-10 py-5 bg-white text-orange-600 font-bold rounded-full text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1 hover:scale-105">
//               Claim Your Offer Now! 🚀
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Table - Enhanced */}
//       <section className="py-20 bg-white relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-4">
//               PRICING
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Choose Your Perfect Plan
//             </h2>
//             <p className="text-xl text-gray-600">Flexible pricing for businesses of all sizes</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
//             {[
//               {
//                 price: '10,000',
//                 plan: 'Basic',
//                 color: 'from-orange-400 to-orange-600',
//                 users: '2',
//                 storage: '10 GB',
//                 entity: '1',
//                 popular: false
//               },
//               {
//                 price: '15,000',
//                 plan: 'Standard',
//                 color: 'from-gray-800 to-black',
//                 users: '5',
//                 storage: '20 GB',
//                 entity: '1',
//                 popular: false
//               },
//               {
//                 price: '20,000',
//                 plan: 'Premium',
//                 color: 'from-orange-500 to-orange-700',
//                 users: '5',
//                 storage: '50 GB',
//                 entity: '2',
//                 popular: true
//               },
//               {
//                 price: '30,000',
//                 plan: 'Advance',
//                 color: 'from-gray-900 to-black',
//                 users: '10',
//                 storage: '100 GB',
//                 entity: '4',
//                 popular: false
//               },
//               {
//                 price: 'Custom',
//                 plan: 'Business',
//                 color: 'from-orange-600 to-orange-800',
//                 users: '> 10',
//                 storage: '> 100GB',
//                 entity: '> 4',
//                 popular: false
//               }
//             ].map((pkg, index) => (
//               <div
//                 key={index}
//                 className={`relative transform transition-all duration-300 ${
//                   pkg.popular ? 'scale-105 md:scale-110 z-10' : 'hover:scale-105'
//                 }`}
//               >
//                 {pkg.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg z-20">
//                     ⭐ MOST POPULAR
//                   </div>
//                 )}
                
//                 <div className={`bg-gradient-to-br ${pkg.color} text-white p-8 rounded-t-3xl relative overflow-hidden ${
//                   pkg.popular ? 'shadow-2xl' : 'shadow-lg'
//                 }`}>
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
//                   <div className="relative">
//                     <div className="text-4xl font-bold mb-2">
//                       {pkg.price === 'Custom' ? pkg.price : `₹${pkg.price}`}
//                     </div>
//                     <div className="text-2xl font-semibold opacity-90">{pkg.plan}</div>
//                   </div>
//                 </div>
                
//                 <div className={`bg-white p-6 rounded-b-3xl space-y-4 ${
//                   pkg.popular ? 'shadow-2xl' : 'shadow-lg'
//                 } border-t-4 ${pkg.popular ? 'border-orange-500' : 'border-gray-200'}`}>
//                   <div className="flex items-center py-3 border-b border-gray-200">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span className="font-semibold text-gray-700">Monthly Billing</span>
//                   </div>
//                   <div className="flex items-center py-3 border-b border-gray-200">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span className="font-semibold text-gray-700">{pkg.users} Users</span>
//                   </div>
//                   <div className="flex items-center py-3 border-b border-gray-200">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span className="font-semibold text-gray-700">{pkg.storage} Storage</span>
//                   </div>
//                   <div className="flex items-center py-3 border-b border-gray-200">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span className="font-semibold text-gray-700">{pkg.entity} Entity</span>
//                   </div>
//                   <div className="flex items-center py-3">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span className="font-semibold text-gray-700">Multiple States</span>
//                   </div>
                  
//                   <button className={`w-full py-3 rounded-xl font-bold transition-all mt-4 ${
//                     pkg.popular
//                       ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg'
//                       : 'border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white'
//                   }`}>
//                     Get Started
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <button className="px-10 py-4 border-2 border-orange-500 text-orange-600 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//               Book A Free Trial Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Certifications - Enhanced */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
//               TRUSTED & CERTIFIED
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Our Certifications
//             </h2>
//             <p className="text-xl text-gray-600">Industry-leading security and compliance standards</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { name: 'ISO 9001:2015', icon: '🏆', color: 'from-blue-500 to-blue-700' },
//               { name: 'ISO 27001:2013', icon: '🔒', color: 'from-green-500 to-green-700' },
//               { name: 'SOC 2 Certified', icon: '✓', color: 'from-purple-500 to-purple-700' },
//               { name: 'GDPR', icon: '🛡️', color: 'from-orange-500 to-orange-700' }
//             ].map((cert, index) => (
//               <div
//                 key={index}
//                 className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
//               >
//                 <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg transform group-hover:rotate-12 transition-transform`}>
//                   {cert.icon}
//                 </div>
//                 <div className="font-bold text-lg text-center text-gray-800">{cert.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Acts Covered - Enhanced */}
//       <section className="py-20 bg-white relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-4">
//               COMPREHENSIVE COVERAGE
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Acts Covered
//             </h2>
//             <p className="text-xl text-gray-600">Complete compliance across all major regulations</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//             {[
//               { name: 'HR & LABOUR', icon: '👥', color: 'from-red-400 to-red-600' },
//               { name: 'SECRETARIAL', icon: '📋', color: 'from-blue-400 to-blue-600' },
//               { name: 'TAXATION', icon: '💰', color: 'from-green-400 to-green-600' },
//               { name: 'LEGAL METROLOGY', icon: '⚖️', color: 'from-purple-400 to-purple-600' },
//               { name: 'SEBI', icon: '🔒', color: 'from-indigo-400 to-indigo-600' },
//               { name: 'FSSAI', icon: '🍽️', color: 'from-orange-400 to-orange-600' },
//               { name: 'INDUSTRY SPECIFIC', icon: '🏭', color: 'from-cyan-400 to-cyan-600' },
//               { name: 'IMPORT & EXPORT', icon: '🌍', color: 'from-teal-400 to-teal-600' },
//               { name: 'FIRE & SAFETY', icon: '🔥', color: 'from-red-400 to-red-600' },
//               { name: 'FINANCE', icon: '💵', color: 'from-emerald-400 to-emerald-600' },
//               { name: 'FDI', icon: '📈', color: 'from-violet-400 to-violet-600' },
//               { name: 'TRANSPORT LAWS', icon: '🚛', color: 'from-amber-400 to-amber-600' }
//             ].map((act, index) => (
//               <div
//                 key={index}
//                 className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
//               >
//                 <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${act.color} rounded-xl flex items-center justify-center text-3xl shadow-lg transform group-hover:rotate-12 transition-transform`}>
//                   {act.icon}
//                 </div>
//                 <div className="font-bold text-sm text-center text-gray-800">{act.name}</div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all text-lg shadow-xl transform hover:-translate-y-1 hover:scale-105">
//               And Many More... →
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer - Enhanced */}
//       <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.1),transparent)]"></div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="flex items-center mb-8">
//                 <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl mr-4 flex items-center justify-center text-2xl font-bold shadow-xl">
//                   P
//                 </div>
//                 <div>
//                   <div className="font-bold text-2xl">PRAAN'S</div>
//                   <div className="text-orange-500 font-bold text-xl">CONSULTECH</div>
//                 </div>
//               </div>
              
//               <h3 className="text-3xl font-bold mb-8">Connect With Us</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-center group">
//                   <div className="w-12 h-12 bg-orange-500 bg-opacity-20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-opacity-30 transition-all">
//                     <span className="text-orange-500 text-xl">📞</span>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400">Call Us</div>
//                     <div className="font-bold text-lg">+91-9050576838</div>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center group">
//                   <div className="w-12 h-12 bg-orange-500 bg-opacity-20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-opacity-30 transition-all">
//                     <span className="text-orange-500 text-xl">✉️</span>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400">Email Us</div>
//                     <div className="font-bold text-lg">info@praansconsultech.com</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="text-3xl font-bold mb-8">Follow Us</h3>
//               <div className="flex space-x-4">
//                 {[
//                   { name: 'Facebook', icon: 'f', color: 'from-blue-500 to-blue-700' },
//                   { name: 'Twitter', icon: '𝕏', color: 'from-gray-700 to-black' },
//                   { name: 'LinkedIn', icon: 'in', color: 'from-blue-600 to-blue-800' },
//                   { name: 'YouTube', icon: '▶', color: 'from-red-500 to-red-700' }
//                 ].map((social, index) => (
//                   <a
//                     key={index}
//                     href="#"
//                     className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-xl font-bold hover:scale-110 transition-all shadow-lg hover:shadow-2xl`}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
              
//               <div className="mt-12 p-6 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl border border-white border-opacity-10">
//                 <h4 className="font-bold text-lg mb-4">Newsletter</h4>
//                 <div className="flex gap-2">
//                   <input
//                     type="email"
//                     placeholder="Your email"
//                     className="flex-1 px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl outline-none focus:border-orange-500 transition-all"
//                   />
//                   <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg">
//                     →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-white border-opacity-10 mt-12 pt-8 text-center text-gray-400">
//             <p>© 2024 Praans Consultech. All rights reserved. | Made with ❤️ in India</p>
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }
        
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// }








'use client';
import { useState } from 'react';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    organization: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Demo request submitted successfully! 🎉');
    setFormData({ name: '', email: '', mobile: '', organization: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">P</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">PRAAN'S</div>
                <div className="text-sm font-semibold text-orange-600">CONSULTECH</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

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
                <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg">
                  See Our Exciting Offers →
                </button>
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
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Business Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Name</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="Your Company Ltd."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all"
                  >
                    REQUEST NOW →
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
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white">
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

      {/* Pricing Table */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              PRICING
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600">Flexible pricing for businesses of all sizes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                price: '10,000',
                plan: 'Basic',
                headerBg: 'bg-gradient-to-br from-orange-400 to-orange-600',
                users: '2',
                storage: '10 GB',
                entity: '1',
                featured: false
              },
              {
                price: '15,000',
                plan: 'Standard',
                headerBg: 'bg-gradient-to-br from-gray-700 to-gray-900',
                users: '5',
                storage: '20 GB',
                entity: '1',
                featured: false
              },
              {
                price: '20,000',
                plan: 'Premium',
                headerBg: 'bg-gradient-to-br from-orange-500 to-orange-700',
                users: '5',
                storage: '50 GB',
                entity: '2',
                featured: true
              },
              {
                price: '30,000',
                plan: 'Advance',
                headerBg: 'bg-gradient-to-br from-gray-800 to-black',
                users: '10',
                storage: '100 GB',
                entity: '4',
                featured: false
              },
              {
                price: 'Custom',
                plan: 'Business',
                headerBg: 'bg-gradient-to-br from-orange-600 to-orange-800',
                users: '> 10',
                storage: '> 100GB',
                entity: '> 4',
                featured: false
              }
            ].map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden border-2 ${
                  pkg.featured ? 'border-orange-500 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'
                } transition-all hover:shadow-xl`}
              >
                {pkg.featured && (
                  <div className="bg-orange-500 text-white text-center py-2 font-bold text-sm">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className={`${pkg.headerBg} text-white p-6 text-center`}>
                  <div className="text-4xl font-bold mb-2">
                    {pkg.price === 'Custom' ? pkg.price : `₹${pkg.price}`}
                  </div>
                  <div className="text-xl font-semibold">{pkg.plan}</div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold text-gray-700">Monthly Billing</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold text-gray-700">{pkg.users} Users</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold text-gray-700">{pkg.storage} Storage</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold text-gray-700">{pkg.entity} Entity</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold text-gray-700">Multiple States</span>
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-bold mt-6 transition-all ${
                    pkg.featured
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg'
                      : 'border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
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

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">P</span>
                </div>
                <div>
                  <div className="text-xl font-bold">PRAAN'S</div>
                  <div className="text-orange-500 font-semibold">CONSULTECH</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                India's leading legal compliance management software trusted by 500+ companies.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <div>
                    <div className="text-sm text-gray-400">Call Us</div>
                    <div className="font-semibold">+91-9050576838</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <div>
                    <div className="text-sm text-gray-400">Email Us</div>
                    <div className="font-semibold">info@praansconsultech.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-xl font-bold">f</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-black transition-colors">
                  <span className="text-xl font-bold">𝕏</span>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <span className="text-xl font-bold">in</span>
                </a>
                <a href="#" className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                  <span className="text-xl font-bold">▶</span>
                </a>
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <h4 className="font-bold mb-3">Newsletter</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-orange-500 transition-colors"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-bold hover:shadow-lg transition-all">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 Praans Consultech. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}