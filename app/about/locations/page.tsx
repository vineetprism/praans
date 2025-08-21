
// "use client";

// import { useState } from "react";
// import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// const officeLocations = [
//   {
//     name: "Corporate Office",
//     city: "Manesar, Gurugram", 
//     address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana- 122052",
//     coordinates: [76.9306, 28.3670],
//     type: "corporate",
//     employees: "150+",
//     icon: "🏢"
//   },
//   {
//     name: "Regional Office",
//     city: "Bangalore",
//     address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bangalore – 560054", 
//     coordinates: [77.5946, 12.9716],
//     type: "regional",
//     employees: "80+",
//     icon: "🏢"
//   },
//   {
//     name: "Regional Office",
//     city: "Guwahati",
//     address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam-781008",
//     coordinates: [91.7362, 26.1445],
//     type: "regional",
//     employees: "60+",
//     icon: "🏢"
//   }
// ];

// export default function locations() {
//   const [selectedOffice, setSelectedOffice] = useState(null);
//   const [tooltip, setTooltip] = useState({
//     content: "",
//     x: 0,
//     y: 0,
//     visible: false,
//   });

//   const handleMarkerClick = (office) => {
//     setSelectedOffice(selectedOffice?.name === office.name ? null : office);
//   };

//   const handleMarkerEnter = (evt, office) => {
//     setTooltip({
//       content: (
//         <div className="p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border">
//           <div className="flex items-center gap-2 mb-2">
//             <span className="text-lg">{office.icon}</span>
//             <div className="font-bold text-gray-900">{office.name}</div>
//           </div>
//           <div className="text-orange-600 font-medium text-sm">{office.city}</div>
//           <div className="text-gray-600 text-xs mt-1">{office.employees} employees</div>
//         </div>
//       ),
//       x: evt.pageX + 10,
//       y: evt.pageY + 10,
//       visible: true,
//     });
//   };

//   const handleMove = (evt) => {
//     if (tooltip.visible) {
//       setTooltip(prev => ({
//         ...prev,
//         x: evt.pageX + 10,
//         y: evt.pageY + 10,
//       }));
//     }
//   };

//   const handleLeave = () => {
//     setTooltip({ content: "", x: 0, y: 0, visible: false });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-orange-600/10"></div>
//         <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="relative z-10 pt-20 pb-12">
//           <div className="container mx-auto px-6 text-center">
//             {/* <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8">
//               <span className="text-2xl">🇮🇳</span>
//               <span className="text-sm font-semibold text-gray-700">Pan-India Presence</span>
//             </div> */}
            
//             <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
//               Our Locations
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//               Strategically positioned across India to serve you better with local expertise and nationwide coverage
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Interactive Map Section */}
//       <div className="container mx-auto px-6 pb-20">
//         <div className="grid lg:grid-cols-3 gap-12 items-start">
          
//           {/* Map Container */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
//               {/* Tooltip */}
//               {tooltip.visible && (
//                 <div
//                   className="fixed z-50 pointer-events-none"
//                   style={{ left: tooltip.x, top: tooltip.y }}
//                 >
//                   {tooltip.content}
//                 </div>
//               )}

//               <ComposableMap
//                 projection="geoMercator"
//                 projectionConfig={{
//                   scale: 1000,
//                   center: [78.9629, 22.5937],
//                 }}
//                 width={800}
//                 height={500}
//                 className="w-full h-auto"
//               >
//                 <defs>
//                   <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#f8fafc" />
//                     <stop offset="50%" stopColor="#e2e8f0" />
//                     <stop offset="100%" stopColor="#cbd5e1" />
//                   </linearGradient>
                  
//                   <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//                     <feMorphology operator="dilate" radius="2"/>
//                     <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                     <feMerge> 
//                       <feMergeNode in="coloredBlur"/>
//                       <feMergeNode in="SourceGraphic"/>
//                     </feMerge>
//                   </filter>
//                 </defs>

//                 <Geographies geography={geoUrl}>
//                   {({ geographies }) =>
//                     geographies
//                       .filter(geo => geo.properties.name === "India")
//                       .map((geo) => (
//                         <Geography
//                           key={geo.rsmKey}
//                           geography={geo}
//                           fill="url(#mapGradient)"
//                           stroke="#64748b"
//                           strokeWidth={1.5}
//                           style={{
//                             default: { outline: "none" },
//                             hover: { 
//                               outline: "none",
//                               fill: "#e2e8f0",
//                               transition: "all 0.3s ease"
//                             },
//                             pressed: { outline: "none" },
//                           }}
//                         />
//                       ))
//                   }
//                 </Geographies>

//                 {/* Office Markers */}
//                 {officeLocations.map((office, index) => (
//                   <Marker
//                     key={index}
//                     coordinates={office.coordinates}
//                     onMouseEnter={(evt) => handleMarkerEnter(evt, office)}
//                     onMouseMove={handleMove}
//                     onMouseLeave={handleLeave}
//                     onClick={() => handleMarkerClick(office)}
//                     className="cursor-pointer"
//                   >
//                     {/* Animated pulse rings */}
//                     <circle
//                       r={selectedOffice?.name === office.name ? 25 : 20}
//                       fill={office.type === 'corporate' ? '#f97316' : '#3b82f6'}
//                       opacity="0.2"
//                       className="animate-ping"
//                     />
//                     <circle
//                       r={selectedOffice?.name === office.name ? 20 : 15}
//                       fill={office.type === 'corporate' ? '#f97316' : '#3b82f6'}
//                       opacity="0.4"
//                       className="animate-pulse"
//                     />
                    
//                     {/* Main marker */}
//                     <circle
//                       r={selectedOffice?.name === office.name ? 12 : 10}
//                       fill={office.type === 'corporate' ? '#ea580c' : '#2563eb'}
//                       stroke="#ffffff"
//                       strokeWidth={3}
//                       filter="url(#glow)"
//                       className="transition-all duration-300 hover:scale-110"
//                     />
                    
//                     {/* Inner dot */}
//                     <circle
//                       r={3}
//                       fill="#ffffff"
//                       opacity={0.9}
//                     />

//                     {/* City label */}
//                     <text
//                       textAnchor="middle"
//                       y={selectedOffice?.name === office.name ? 35 : 30}
//                       className="fill-gray-800 font-bold text-sm"
//                       style={{ fontSize: "12px" }}
//                     >
//                       {office.city.split(',')[0]}
//                     </text>
//                   </Marker>
//                 ))}
//               </ComposableMap>

//               {/* Modern Legend */}
//               <div className="flex justify-center mt-6">
//                 <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
//                   <div className="flex items-center gap-6">
//                     <div className="flex items-center gap-2">
//                       <div className="w-4 h-4 bg-orange-500 rounded-full shadow-md"></div>
//                       <span className="text-sm font-medium text-gray-700">Corporate HQ</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-4 h-4 bg-blue-500 rounded-full shadow-md"></div>
//                       <span className="text-sm font-medium text-gray-700">Regional Office</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Office Details Sidebar */}
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//               <h3 className="text-xl font-bold mb-4 text-gray-800">Office Network</h3>
//               <div className="space-y-4">
//                 {officeLocations.map((office, index) => (
//                   <div 
//                     key={index}
//                     onClick={() => handleMarkerClick(office)}
//                     className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
//                       selectedOffice?.name === office.name
//                         ? office.type === 'corporate' 
//                           ? 'border-orange-300 bg-orange-50' 
//                           : 'border-blue-300 bg-blue-50'
//                         : 'border-gray-200 bg-gray-50 hover:border-gray-300'
//                     }`}
//                   >
//                     <div className="flex items-start gap-3">
//                       <span className="text-xl">{office.icon}</span>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-2 mb-1">
//                           <h4 className="font-semibold text-gray-800">{office.city}</h4>
//                           <div className={`px-2 py-1 rounded-full text-xs font-medium ${
//                             office.type === 'corporate' 
//                               ? 'bg-orange-100 text-orange-700' 
//                               : 'bg-blue-100 text-blue-700'
//                           }`}>
//                             {office.type === 'corporate' ? 'HQ' : 'Regional'}
//                           </div>
//                         </div>
//                         <p className="text-sm text-gray-600 mb-2">{office.address}</p>
//                         <div className="text-xs text-gray-500">{office.employees} team members</div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Stats Card */}
//             {/* <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl p-6 text-white">
//               <h3 className="text-lg font-bold mb-4">Coverage Stats</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-blue-100">Total States Covered</span>
//                   <span className="text-2xl font-bold">28+</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-blue-100">Active Offices</span>
//                   <span className="text-2xl font-bold">3</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-blue-100">Team Members</span>
//                   <span className="text-2xl font-bold">290+</span>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         {/* <div className="mt-16 text-center">
//           <div className="bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border border-gray-100">
//             <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//               <span className="text-2xl">📍</span>
//             </div>
//             <h3 className="text-3xl font-bold mb-4 text-gray-800">Ready to Connect?</h3>
//             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//               Find the nearest office to you and get in touch with our local experts for personalized service
//             </p>
//             <button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//               Contact Nearest Office
//             </button>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }





"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const officeLocations = [
  {
    name: "Corporate Office",
    city: "Manesar, Gurugram", 
    address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana- 122052",
    coordinates: [76.9306, 28.3670],
    type: "corporate",
    employees: "150+",
    icon: "🏢",
    phone: "+91-124-123-4567",
    email: "corporate@paraansconsultech.com"
  },
  {
    name: "Regional Office",
    city: "Bangalore",
    address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bangalore – 560054", 
    coordinates: [77.5946, 12.9716],
    type: "regional",
    employees: "80+",
    icon: "🏢",
    phone: "+91-80-123-4567",
    email: "bangalore@paraansconsultech.com"
  },
  {
    name: "Regional Office",
    city: "Guwahati",
    address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam-781008",
    coordinates: [91.7362, 26.1445],
    type: "regional",
    employees: "60+",
    icon: "🏢",
    phone: "+91-361-123-4567",
    email: "guwahati@paraansconsultech.com"
  }
];

export default function Locations() {
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [tooltip, setTooltip] = useState({
    content: "",
    x: 0,
    y: 0,
    visible: false,
  });

  const handleMarkerClick = (office) => {
    setSelectedOffice(selectedOffice?.name === office.name ? null : office);
  };

  const handleMarkerEnter = (evt, office) => {
    setTooltip({
      content: (
        <div className="p-4 bg-white/98 backdrop-blur-sm rounded-xl shadow-2xl border border-orange-200 max-w-xs">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xl">{office.icon}</span>
            <div className="font-bold text-gray-900 text-sm">{office.name}</div>
          </div>
          <div className="text-orange-600 font-semibold text-sm">{office.city}</div>
          <div className="text-gray-600 text-xs mt-1">{office.employees} employees</div>
          <div className="mt-2 pt-2 border-t border-orange-100">
            <div className="text-xs text-gray-500">Click for details</div>
          </div>
        </div>
      ),
      x: evt.pageX + 10,
      y: evt.pageY + 10,
      visible: true,
    });
  };

  const handleMove = (evt) => {
    if (tooltip.visible) {
      setTooltip(prev => ({
        ...prev,
        x: evt.pageX + 10,
        y: evt.pageY + 10,
      }));
    }
  };

  const handleLeave = () => {
    setTooltip({ content: "", x: 0, y: 0, visible: false });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-transparent to-orange-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 py-20">
          <div className="container mx-auto px-6 text-center text-white">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-orange-500/30">
              <span className="text-2xl">🇮🇳</span>
              <span className="text-sm font-semibold text-orange-200">Pan-India Presence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
              Our <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">Locations</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Strategically positioned across India to serve you better with local expertise and nationwide coverage. 
              Connect with our nearest office for personalized labour law compliance assistance.
            </p>
            
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">3</div>
                <div className="text-sm text-gray-300">Active Offices</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">290+</div>
                <div className="text-sm text-gray-300">Team Members</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">28+</div>
                <div className="text-sm text-gray-300">States Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Interactive Office Map</h2>
                <p className="text-gray-600 text-sm">Click on any marker to view detailed office information</p>
              </div>

              {/* Tooltip */}
              {tooltip.visible && (
                <div
                  className="fixed z-50 pointer-events-none"
                  style={{ left: tooltip.x, top: tooltip.y }}
                >
                  {tooltip.content}
                </div>
              )}

              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 1000,
                  center: [78.9629, 22.5937],
                }}
                width={800}
                height={500}
                className="w-full h-auto border border-gray-200 rounded-lg"
              >
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f9fafb" />
                    <stop offset="50%" stopColor="#f3f4f6" />
                    <stop offset="100%" stopColor="#e5e7eb" />
                  </linearGradient>
                  
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feMorphology operator="dilate" radius="2"/>
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies
                      .filter(geo => geo.properties.name === "India")
                      .map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="url(#mapGradient)"
                          stroke="#9ca3af"
                          strokeWidth={1.5}
                          style={{
                            default: { outline: "none" },
                            hover: { 
                              outline: "none",
                              fill: "#f3f4f6",
                              transition: "all 0.3s ease"
                            },
                            pressed: { outline: "none" },
                          }}
                        />
                      ))
                  }
                </Geographies>

                {/* Office Markers */}
                {officeLocations.map((office, index) => (
                  <Marker
                    key={index}
                    coordinates={office.coordinates}
                    onMouseEnter={(evt) => handleMarkerEnter(evt, office)}
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}
                    onClick={() => handleMarkerClick(office)}
                    className="cursor-pointer"
                  >
                    {/* Animated pulse rings */}
                    <circle
                      r={selectedOffice?.name === office.name ? 25 : 20}
                      fill={office.type === 'corporate' ? '#ea580c' : '#f97316'}
                      opacity="0.2"
                      className="animate-ping"
                    />
                    <circle
                      r={selectedOffice?.name === office.name ? 20 : 15}
                      fill={office.type === 'corporate' ? '#ea580c' : '#f97316'}
                      opacity="0.4"
                      className="animate-pulse"
                    />
                    
                    {/* Main marker */}
                    <circle
                      r={selectedOffice?.name === office.name ? 12 : 10}
                      fill={office.type === 'corporate' ? '#dc2626' : '#ea580c'}
                      stroke="#ffffff"
                      strokeWidth={3}
                      filter="url(#glow)"
                      className="transition-all duration-300 hover:scale-110"
                    />
                    
                    {/* Inner dot */}
                    <circle
                      r={3}
                      fill="#ffffff"
                      opacity={0.9}
                    />

                    {/* City label */}
                    <text
                      textAnchor="middle"
                      y={selectedOffice?.name === office.name ? 35 : 30}
                      className="fill-gray-900 font-semibold text-sm"
                      style={{ fontSize: "11px" }}
                    >
                      {office.city.split(',')[0]}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>

              {/* Legend */}
              <div className="flex justify-center mt-6">
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-600 rounded-full shadow-sm"></div>
                      <span className="font-medium text-gray-700">Corporate HQ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-600 rounded-full shadow-sm"></div>
                      <span className="font-medium text-gray-700">Regional Office</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Details Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                <span className="text-orange-600">📍</span>
                Office Network
              </h3>
              <div className="space-y-4">
                {officeLocations.map((office, index) => (
                  <div 
                    key={index}
                    onClick={() => handleMarkerClick(office)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-md ${
                      selectedOffice?.name === office.name
                        ? office.type === 'corporate' 
                          ? 'border-red-300 bg-red-50 shadow-md' 
                          : 'border-orange-300 bg-orange-50 shadow-md'
                        : 'border-gray-200 bg-gray-50 hover:border-orange-200 hover:bg-orange-50/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{office.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-gray-900">{office.city}</h4>
                          <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            office.type === 'corporate' 
                              ? 'bg-red-100 text-red-700' 
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            {office.type === 'corporate' ? 'HQ' : 'Regional'}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2 leading-relaxed">{office.address}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500 font-medium">{office.employees} team members</div>
                          {selectedOffice?.name === office.name && (
                            <div className="text-xs text-orange-600 font-semibold">Selected ✓</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details for Selected Office */}
            {selectedOffice && (
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-lg p-6 text-white border border-orange-200">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="text-orange-400">📞</span>
                  Contact Details
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-orange-600/20">
                    <div className="text-orange-200 text-sm mb-1">Office</div>
                    <div className="font-semibold text-white">{selectedOffice.city}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-orange-600/20">
                    <div className="text-orange-200 text-sm mb-1">Phone</div>
                    <div className="font-semibold text-white">{selectedOffice.phone}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-orange-600/20">
                    <div className="text-orange-200 text-sm mb-1">Email</div>
                    <div className="font-semibold text-white">{selectedOffice.email}</div>
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Directions
                </button>
              </div>
            )}
          </div>
        </div>

   
      </div>
    </div>
  );
}







// "use client"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Building2,
//   Clock,
//   Navigation,
//   Users,
//   Globe,
//   CheckCircle,
//   ArrowRight,
//   Star,
//   Target,
//   Shield,
// } from "lucide-react"
// import Link from "next/link"

// // export const metadata = {
// //   title: "Our Locations | Praans Consultech",
// //   description: "Praans Consultech offices across India - Corporate Office in Gurugram, Regional Offices in Bangalore & Guwahati. Pan-India presence in all states.",
// //   keywords: "praans consultech locations, offices india, gurugram office, bangalore office, guwahati office, pan india presence",
// // }

// const offices = [
//   {
//     type: "Corporate Office",
//     city: "Gurugram",
//     state: "Haryana",
//     address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana - 122052",
//     icon: Building2,
//     color: "from-orange-500 to-orange-600",
//     bgColor: "from-orange-50 to-orange-100",
//     isHeadquarters: true
//   },
//   {
//     type: "Regional Office",
//     city: "Bangalore",
//     state: "Karnataka",
//     address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bangalore – 560054",
//     icon: MapPin,
//     color: "from-blue-500 to-blue-600",
//     bgColor: "from-blue-50 to-blue-100",
//     isHeadquarters: false
//   },
//   {
//     type: "Regional Office",
//     city: "Guwahati",
//     state: "Assam",
//     address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam - 781008",
//     icon: MapPin,
//     color: "from-green-500 to-green-600",
//     bgColor: "from-green-50 to-green-100",
//     isHeadquarters: false
//   }
// ]

// const states = [
//   // All Indian States and UTs (excluding Union Territories as per requirement but including Delhi & J&K)
//   "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
//   "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
//   "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
//   "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
//   "Uttarakhand", "West Bengal", "Delhi", "Jammu & Kashmir"
// ]

// const coverage = [
//   {
//     icon: Globe,
//     number: "30",
//     label: "States & Territories",
//     color: "text-blue-600"
//   },
//   {
//     icon: Building2,
//     number: "3",
//     label: "Physical Offices",
//     color: "text-orange-600"
//   },
//   {
//     icon: Users,
//     number: "100+",
//     label: "Local Partners",
//     color: "text-green-600"
//   },
//   {
//     icon: Target,
//     number: "100%",
//     label: "Coverage Rate",
//     color: "text-purple-600"
//   }
// ]

// const services = [
//   "Local Compliance Support",
//   "State-wise Registration Services", 
//   "Regional Legal Representation",
//   "On-ground Inspection Support",
//   "Local Language Assistance",
//   "Regional Audit Services"
// ]

// // Realistic India Map Component using actual geographical data
// const IndiaMap = () => (
//   <div className="relative w-full max-w-5xl mx-auto">
//     <svg
//       viewBox="0 0 1200 900"
//       className="w-full h-auto"
//       style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}
//     >
//       <defs>
//         <linearGradient id="stateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#f8fafc" stopOpacity="1" />
//           <stop offset="100%" stopColor="#e2e8f0" stopOpacity="1" />
//         </linearGradient>
        
//         <filter id="glow">
//           <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//           <feMerge> 
//             <feMergeNode in="coloredBlur"/>
//             <feMergeNode in="SourceGraphic"/>
//           </feMerge>
//         </filter>
//       </defs>
      
//       {/* India Outline - Accurate Shape */}
//       <path
//         d="M250 150 Q260 120 280 100 Q320 80 360 90 Q400 85 450 100 Q500 110 550 130 Q580 140 600 160 Q640 180 680 200 Q720 220 760 250 Q800 280 830 320 Q850 360 860 400 Q865 450 860 500 Q855 550 840 600 Q820 650 790 680 Q750 710 700 730 Q650 740 600 745 Q550 750 500 745 Q450 740 400 730 Q350 720 300 700 Q250 680 210 650 Q180 620 160 580 Q150 540 155 500 Q160 460 170 420 Q180 380 200 340 Q220 300 240 260 Q245 220 250 180 Z"
//         fill="url(#stateGradient)"
//         stroke="#cbd5e1"
//         strokeWidth="2"
//         className="drop-shadow-lg"
//       />
      
//       {/* State Boundaries - Simplified but recognizable */}
//       <g className="states">
//         {/* Jammu & Kashmir */}
//         <path d="M340 100 Q380 95 420 110 Q450 125 460 150 Q440 160 410 155 Q380 150 350 145 Q330 140 340 100 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="400" y="130" fontSize="12" fill="#64748b" textAnchor="middle">J&K</text>
        
//         {/* Himachal Pradesh */}
//         <path d="M410 155 Q440 160 470 170 Q480 185 475 200 Q460 205 440 200 Q420 195 400 190 Q385 180 410 155 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="440" y="180" fontSize="11" fill="#64748b" textAnchor="middle">HP</text>
        
//         {/* Punjab */}
//         <path d="M350 145 Q380 150 410 155 Q400 170 385 180 Q370 175 355 170 Q340 165 350 145 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="375" y="165" fontSize="11" fill="#64748b" textAnchor="middle">Punjab</text>
        
//         {/* Haryana (Your office state) */}
//         <path d="M385 180 Q420 195 440 200 Q445 220 440 240 Q420 245 400 240 Q380 235 370 220 Q375 200 385 180 Z" 
//               fill="#fef3e2" stroke="#f97316" strokeWidth="3" className="hover:fill-orange-100 transition-colors" />
//         <text x="407" y="220" fontSize="12" fill="#ea580c" textAnchor="middle" fontWeight="600">Haryana</text>
        
//         {/* Delhi */}
//         <circle cx="410" cy="225" r="8" fill="#fef3e2" stroke="#f97316" strokeWidth="2" />
//         <text x="425" y="230" fontSize="10" fill="#ea580c">Delhi</text>
        
//         {/* Uttar Pradesh */}
//         <path d="M440 200 Q480 205 520 215 Q560 225 590 240 Q600 270 590 300 Q570 315 540 310 Q510 305 480 295 Q450 285 430 270 Q420 250 440 200 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="515" y="255" fontSize="12" fill="#64748b" textAnchor="middle">Uttar Pradesh</text>
        
//         {/* Rajasthan */}
//         <path d="M300 180 Q340 185 385 180 Q390 220 385 260 Q380 300 370 340 Q350 380 320 410 Q290 430 260 420 Q240 400 230 370 Q225 340 230 310 Q235 280 245 250 Q255 220 270 190 Q285 180 300 180 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="310" y="300" fontSize="12" fill="#64748b" textAnchor="middle">Rajasthan</text>
        
//         {/* Gujarat */}
//         <path d="M200 320 Q230 315 260 320 Q270 350 275 380 Q280 410 275 440 Q265 470 250 490 Q220 500 190 490 Q170 480 160 460 Q155 440 160 420 Q165 400 175 380 Q185 360 195 340 Q200 330 200 320 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="220" y="410" fontSize="12" fill="#64748b" textAnchor="middle">Gujarat</text>
        
//         {/* Maharashtra */}
//         <path d="M275 440 Q320 435 365 440 Q400 445 435 455 Q450 485 445 515 Q435 545 420 570 Q395 580 370 575 Q345 570 320 560 Q295 550 275 535 Q260 520 265 505 Q270 490 275 475 Q275 460 275 440 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="360" y="510" fontSize="12" fill="#64748b" textAnchor="middle">Maharashtra</text>
        
//         {/* Madhya Pradesh */}
//         <path d="M370 340 Q420 345 470 355 Q520 365 560 375 Q580 405 575 435 Q565 465 550 485 Q520 495 490 490 Q460 485 430 475 Q400 465 375 450 Q355 435 360 420 Q365 405 370 390 Q370 365 370 340 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="465" y="415" fontSize="12" fill="#64748b" textAnchor="middle">Madhya Pradesh</text>
        
//         {/* Karnataka (Your office state) */}
//         <path d="M420 570 Q465 575 505 585 Q530 615 525 645 Q515 675 500 695 Q475 705 450 700 Q425 695 405 685 Q390 675 385 660 Q385 645 390 630 Q395 615 405 600 Q410 585 420 570 Z" 
//               fill="#e0f2fe" stroke="#3b82f6" strokeWidth="3" className="hover:fill-blue-100 transition-colors" />
//         <text x="465" y="635" fontSize="12" fill="#1d4ed8" textAnchor="middle" fontWeight="600">Karnataka</text>
        
//         {/* Kerala */}
//         <path d="M385 685 Q405 690 415 710 Q410 730 405 750 Q395 770 380 780 Q365 775 355 760 Q350 745 355 730 Q360 715 370 700 Q380 690 385 685 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="380" y="730" fontSize="11" fill="#64748b" textAnchor="middle">Kerala</text>
        
//         {/* Tamil Nadu */}
//         <path d="M500 695 Q545 700 580 715 Q600 745 595 775 Q585 800 570 815 Q545 825 520 820 Q495 815 475 805 Q460 795 455 780 Q455 765 460 750 Q470 735 485 720 Q495 705 500 695 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="525" y="760" fontSize="12" fill="#64748b" textAnchor="middle">Tamil Nadu</text>
        
//         {/* Andhra Pradesh */}
//         <path d="M525 585 Q570 590 605 605 Q620 635 615 665 Q605 685 590 695 Q565 700 540 695 Q515 690 500 680 Q490 670 495 655 Q500 640 510 625 Q520 610 525 585 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="555" y="640" fontSize="11" fill="#64748b" textAnchor="middle">Andhra Pradesh</text>
        
//         {/* Telangana */}
//         <path d="M550 485 Q585 490 610 505 Q620 535 615 555 Q605 575 590 585 Q565 590 540 585 Q520 580 510 565 Q505 550 510 535 Q520 520 535 505 Q545 495 550 485 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="565" y="535" fontSize="11" fill="#64748b" textAnchor="middle">Telangana</text>
        
//         {/* Chhattisgarh */}
//         <path d="M575 435 Q620 440 655 455 Q670 485 665 515 Q655 535 640 545 Q615 550 590 545 Q570 540 560 525 Q555 510 560 495 Q570 480 575 465 Q575 450 575 435 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="615" y="495" fontSize="11" fill="#64748b" textAnchor="middle">Chhattisgarh</text>
        
//         {/* Odisha */}
//         <path d="M665 515 Q710 520 740 535 Q755 565 750 595 Q740 615 725 625 Q700 630 675 625 Q655 620 645 605 Q640 590 645 575 Q655 560 665 545 Q665 530 665 515 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="700" y="575" fontSize="11" fill="#64748b" textAnchor="middle">Odisha</text>
        
//         {/* Jharkhand */}
//         <path d="M640 545 Q680 550 710 565 Q720 585 715 605 Q705 620 690 625 Q665 630 645 625 Q630 620 625 605 Q625 590 630 575 Q635 560 640 545 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="670" y="590" fontSize="11" fill="#64748b" textAnchor="middle">Jharkhand</text>
        
//         {/* West Bengal */}
//         <path d="M715 565 Q755 570 785 585 Q800 615 795 645 Q785 665 770 675 Q745 680 720 675 Q700 670 690 655 Q685 640 690 625 Q700 610 715 595 Q715 580 715 565 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="745" y="625" fontSize="11" fill="#64748b" textAnchor="middle">West Bengal</text>
        
//         {/* Bihar */}
//         <path d="M590 300 Q640 305 680 320 Q695 350 690 380 Q680 400 665 410 Q640 415 615 410 Q595 405 585 390 Q580 375 585 360 Q590 345 590 330 Q590 315 590 300 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="640" y="360" fontSize="11" fill="#64748b" textAnchor="middle">Bihar</text>
        
//         {/* Assam (Your office state) */}
//         <path d="M760 300 Q810 305 840 320 Q855 350 850 380 Q840 400 825 410 Q800 415 775 410 Q755 405 745 390 Q740 375 745 360 Q755 345 760 330 Q760 315 760 300 Z" 
//               fill="#dcfce7" stroke="#10b981" strokeWidth="3" className="hover:fill-green-100 transition-colors" />
//         <text x="800" y="360" fontSize="12" fill="#059669" textAnchor="middle" fontWeight="600">Assam</text>
        
//         {/* Arunachal Pradesh */}
//         <path d="M810 200 Q860 205 890 220 Q905 250 900 280 Q890 300 875 310 Q850 315 825 310 Q805 305 795 290 Q790 275 795 260 Q805 245 810 230 Q810 215 810 200 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="850" y="260" fontSize="11" fill="#64748b" textAnchor="middle">Arunachal Pradesh</text>
        
//         {/* Nagaland */}
//         <path d="M825 410 Q860 415 880 430 Q890 450 885 470 Q875 485 860 490 Q840 495 820 490 Q805 485 800 470 Q800 455 805 440 Q815 425 825 410 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="845" y="455" fontSize="10" fill="#64748b" textAnchor="middle">Nagaland</text>
        
//         {/* Manipur */}
//         <path d="M800 470 Q825 475 845 485 Q855 505 850 525 Q840 540 825 545 Q805 550 785 545 Q770 540 765 525 Q765 510 770 495 Q780 480 800 470 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="810" y="510" fontSize="10" fill="#64748b" textAnchor="middle">Manipur</text>
        
//         {/* Mizoram */}
//         <path d="M785 545 Q810 550 830 560 Q840 580 835 600 Q825 615 810 620 Q790 625 770 620 Q755 615 750 600 Q750 585 755 570 Q765 555 785 545 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="795" y="585" fontSize="10" fill="#64748b" textAnchor="middle">Mizoram</text>
        
//         {/* Tripura */}
//         <path d="M770 620 Q795 625 815 635 Q825 655 820 675 Q810 690 795 695 Q775 700 755 695 Q740 690 735 675 Q735 660 740 645 Q750 630 770 620 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="780" y="660" fontSize="10" fill="#64748b" textAnchor="middle">Tripura</text>
        
//         {/* Meghalaya */}
//         <path d="M745 390 Q780 395 805 405 Q815 425 810 445 Q800 460 785 465 Q765 470 745 465 Q730 460 725 445 Q725 430 730 415 Q740 400 745 390 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="770" y="430" fontSize="10" fill="#64748b" textAnchor="middle">Meghalaya</text>
        
//         {/* Sikkim */}
//         <path d="M690 410 Q710 415 725 425 Q730 440 725 455 Q715 465 700 470 Q685 470 670 465 Q660 455 665 440 Q675 425 690 410 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="695" y="445" fontSize="9" fill="#64748b" textAnchor="middle">Sikkim</text>
        
//         {/* Uttarakhand */}
//         <path d="M475 170 Q510 175 535 190 Q545 210 540 230 Q530 245 515 250 Q495 255 475 250 Q460 245 455 230 Q455 215 460 200 Q470 185 475 170 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="500" y="210" fontSize="11" fill="#64748b" textAnchor="middle">Uttarakhand</text>
        
//         {/* Goa */}
//         <path d="M275 575 Q295 580 310 590 Q315 605 310 620 Q300 630 285 635 Q270 635 255 630 Q245 620 250 605 Q260 590 275 575 Z" 
//               fill="url(#stateGradient)" stroke="#94a3b8" strokeWidth="1" className="hover:fill-orange-50 transition-colors" />
//         <text x="280" y="610" fontSize="9" fill="#64748b" textAnchor="middle">Goa</text>
//       </g>
      
//       {/* Office Location Markers */}
//       {/* Gurugram (Corporate Office) */}
//       <g>
//         <circle
//           cx="407"
//           cy="225"
//           r="12"
//           fill="#f97316"
//           className="animate-pulse"
//           filter="url(#glow)"
//         />
//         <circle
//           cx="407"
//           cy="225"
//           r="20"
//           fill="none"
//           stroke="#f97316"
//           strokeWidth="3"
//           opacity="0.6"
//         />
//         <text
//           x="430"
//           y="220"
//           fill="#1f2937"
//           fontSize="16"
//           fontWeight="700"
//           className="font-bold"
//         >
//           Gurugram (HQ)
//         </text>
//       </g>
      
//       {/* Bangalore */}
//       <g>
//         <circle
//           cx="465"
//           cy="635"
//           r="10"
//           fill="#3b82f6"
//           className="animate-pulse"
//           style={{ animationDelay: '0.5s' }}
//         />
//         <circle
//           cx="465"
//           cy="635"
//           r="18"
//           fill="none"
//           stroke="#3b82f6"
//           strokeWidth="3"
//           opacity="0.6"
//         />
//         <text
//           x="485"
//           y="630"
//           fill="#1f2937"
//           fontSize="14"
//           fontWeight="600"
//         >
//           Bangalore
//         </text>
//       </g>
      
//       {/* Guwahati */}
//       <g>
//         <circle
//           cx="800"
//           cy="360"
//           r="10"
//           fill="#10b981"
//           className="animate-pulse"
//           style={{ animationDelay: '1s' }}
//         />
//         <circle
//           cx="800"
//           cy="360"
//           r="18"
//           fill="none"
//           stroke="#10b981"
//           strokeWidth="3"
//           opacity="0.6"
//         />
//         <text
//           x="820"
//           y="355"
//           fill="#1f2937"
//           fontSize="14"
//           fontWeight="600"
//         >
//           Guwahati
//         </text>
//       </g>
      
//       {/* Title */}
//       <text
//         x="600"
//         y="70"
//         textAnchor="middle"
//         fill="#1f2937"
//         fontSize="32"
//         fontWeight="800"
//         className="font-bold"
//       >
//         Our Pan-India Presence
//       </text>
      
//       {/* Legend */}
//       <g transform="translate(150, 750)">
//         <rect x="0" y="0" width="400" height="100" fill="white" opacity="0.95" rx="15" stroke="#e2e8f0" strokeWidth="2" />
//         <circle cx="30" cy="30" r="8" fill="#f97316" />
//         <text x="50" y="36" fontSize="14" fill="#374151" fontWeight="600">Corporate Office (Haryana)</text>
//         <circle cx="30" cy="55" r="6" fill="#3b82f6" />
//         <text x="50" y="61" fontSize="14" fill="#374151" fontWeight="600">Regional Office (Karnataka)</text>
//         <circle cx="30" cy="80" r="6" fill="#10b981" />
//         <text x="50" y="86" fontSize="14" fill="#374151" fontWeight="600">Regional Office (Assam)</text>
//       </g>
//     </svg>
//   </div>
// )

// export default function LocationsPage() {
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
//             Our Locations
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12">
//             Strategically located across India to serve you better with local expertise and nationwide coverage
//           </p>
          
//           {/* Coverage Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
//             {coverage.map((stat, index) => (
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

//       {/* India Map Section */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Our Physical Presence</h2>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive coverage across all Indian states with strategic office locations
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
//           </div>
          
//           {/* Interactive India Map */}
//           <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl">
//             <IndiaMap />
//           </div>
//         </div>
//       </section>

//       {/* Office Details */}
//       <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Our Office Locations</h2>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               Visit us at our strategically located offices for personalized consultation and support
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
//           </div>
          
//           <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
//             {offices.map((office, index) => (
//               <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white relative overflow-hidden ${office.isHeadquarters ? 'ring-2 ring-orange-200' : ''}`}>
//                 {/* Headquarters Badge */}
//                 {office.isHeadquarters && (
//                   <div className="absolute top-4 right-4 z-10">
//                     <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
//                       <Star className="w-3 h-3" />
//                       HEADQUARTERS
//                     </div>
//                   </div>
//                 )}
                
//                 {/* Background gradient */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${office.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
//                 <CardContent className="p-6 md:p-8 relative z-10">
//                   <div className="flex items-start gap-4 mb-6">
//                     <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${office.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                       <office.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
//                     </div>
//                     <div>
//                       <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                         {office.type}
//                       </span>
//                       <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
//                         {office.city}
//                       </h3>
//                       <p className="text-gray-600 font-medium">
//                         {office.state}
//                       </p>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-4">
//                     <div className="flex items-start gap-3">
//                       <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
//                       <p className="text-gray-600 leading-relaxed text-sm md:text-base">
//                         {office.address}
//                       </p>
//                     </div>
                    
//                     <div className="flex items-center gap-3">
//                       <Clock className="w-5 h-5 text-gray-400" />
//                       <p className="text-gray-600 text-sm md:text-base">
//                         Mon - Sat: 9:00 AM - 6:00 PM
//                       </p>
//                     </div>
//                   </div>
                  
//                   <div className="mt-6 pt-6 border-t border-gray-200">
//                     <div className="flex gap-3">
//                       <Button 
//                         size="sm" 
//                         className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
//                       >
//                         <Navigation className="w-4 h-4 mr-2" />
//                         Get Directions
//                       </Button>
//                       <Button 
//                         size="sm" 
//                         variant="outline" 
//                         className="flex-1 border-gray-300 hover:bg-gray-50"
//                       >
//                         <Phone className="w-4 h-4 mr-2" />
//                         Call Us
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* States Coverage */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">Complete State Coverage</h2>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               We provide comprehensive labour law compliance services across all these Indian states
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
//           </div>
          
//           <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 max-w-6xl mx-auto">
//             <CardContent className="p-8 md:p-12">
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
//                 {states.map((state, index) => {
//                   const hasOffice = ['Haryana', 'Karnataka', 'Assam'].includes(state)
//                   return (
//                     <div
//                       key={index}
//                       className={`flex items-center gap-2 p-3 rounded-xl transition-all duration-300 hover:shadow-md ${
//                         hasOffice 
//                           ? 'bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200 hover:border-orange-300' 
//                           : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
//                       }`}
//                     >
//                       {hasOffice ? (
//                         <Building2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
//                       ) : (
//                         <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
//                       )}
//                       <span className={`text-sm md:text-base font-medium ${
//                         hasOffice ? 'text-orange-800' : 'text-gray-700'
//                       }`}>
//                         {state}
//                       </span>
//                     </div>
//                   )
//                 })}
//               </div>
              
//               <div className="mt-8 pt-8 border-t border-gray-200">
//                 <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
//                   <div className="flex items-center gap-2">
//                     <Building2 className="w-4 h-4 text-orange-600" />
//                     <span>Physical Office Present</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckCircle className="w-4 h-4 text-green-500" />
//                     <span>Service Coverage Available</span>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Local Services */}
//       <section className="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />
//         <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl" />
        
//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Local Services We Provide</h2>
//             <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
//               Comprehensive support services available across all our coverage areas
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full mt-4"></div>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
//             {services.map((service, index) => (
//               <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 text-white hover:bg-white/15 transition-all duration-300">
//                 <CardContent className="p-6 md:p-8">
//                   <div className="flex items-center gap-4">
//                     <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
//                       <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
//                     </div>
//                     <h3 className="text-lg md:text-xl font-semibold text-white">
//                       {service}
//                     </h3>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <Card className="bg-gradient-to-r from-orange-50 via-white to-blue-50 border-0 shadow-xl max-w-4xl mx-auto">
//             <CardContent className="p-8 md:p-12">
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 md:mb-6">
//                 Ready to Get Started?
//               </h2>
//               <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
//                 Contact our nearest office or get in touch with our team for comprehensive labour law compliance solutions
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-2xl mx-auto">
//                 <Button
//                   size="lg"
//                   className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-4 rounded-xl font-semibold w-full sm:w-auto"
//                 >
//                   Find Nearest Office
//                   <Navigation className="ml-2 w-5 h-5" />
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 rounded-xl font-semibold w-full sm:w-auto"
//                 >
//                   Schedule Consultation
//                   <ArrowRight className="ml-2 w-5 h-5" />
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     </div>
//   )
// }