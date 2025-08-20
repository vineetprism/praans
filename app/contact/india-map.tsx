// "use client"

// // A simplified SVG map of India with state paths.
// // In a real application, you might use a more detailed SVG or a library like D3/TopoJSON.
// export function IndiaMap() {
  // const states = [
  //   { id: "ap", name: "Andhra Pradesh", pos: { cx: 535, cy: 650 } },
  //   { id: "ar", name: "Arunachal Pradesh", pos: { cx: 810, cy: 230 } },
  //   { id: "as", name: "Assam", pos: { cx: 760, cy: 300 } },
  //   { id: "br", name: "Bihar", pos: { cx: 630, cy: 340 } },
  //   { id: "cg", name: "Chhattisgarh", pos: { cx: 570, cy: 470 } },
  //   { id: "dl", name: "Delhi", pos: { cx: 465, cy: 245 } },
  //   { id: "ga", name: "Goa", pos: { cx: 415, cy: 665 } },
  //   { id: "gj", name: "Gujarat", pos: { cx: 350, cy: 420 } },
  //   { id: "hr", name: "Haryana", pos: { cx: 440, cy: 220 } },
  //   { id: "hp", name: "Himachal Pradesh", pos: { cx: 460, cy: 150 } },
  //   { id: "jh", name: "Jharkhand", pos: { cx: 630, cy: 400 } },
  //   { id: "jk", name: "Jammu and Kashmir", pos: { cx: 420, cy: 80 } },
  //   { id: "ka", name: "Karnataka", pos: { cx: 460, cy: 680 } },
  //   { id: "kl", name: "Kerala", pos: { cx: 450, cy: 780 } },
  //   { id: "mp", name: "Madhya Pradesh", pos: { cx: 490, cy: 420 } },
  //   { id: "mh", name: "Maharashtra", pos: { cx: 450, cy: 530 } },
  //   { id: "mn", name: "Manipur", pos: { cx: 800, cy: 360 } },
  //   { id: "ml", name: "Meghalaya", pos: { cx: 730, cy: 330 } },
  //   { id: "mz", name: "Mizoram", pos: { cx: 780, cy: 400 } },
  //   { id: "nl", name: "Nagaland", pos: { cx: 810, cy: 320 } },
  //   { id: "or", name: "Odisha", pos: { cx: 610, cy: 510 } },
  //   { id: "pb", name: "Punjab", pos: { cx: 420, cy: 180 } },
  //   { id: "rj", name: "Rajasthan", pos: { cx: 380, cy: 320 } },
  //   { id: "sk", name: "Sikkim", pos: { cx: 680, cy: 260 } },
  //   { id: "tn", name: "Tamil Nadu", pos: { cx: 490, cy: 780 } },
  //   { id: "ts", name: "Telangana", pos: { cx: 510, cy: 580 } },
  //   { id: "tr", name: "Tripura", pos: { cx: 750, cy: 380 } },
  //   { id: "up", name: "Uttar Pradesh", pos: { cx: 530, cy: 310 } },
  //   { id: "uk", name: "Uttarakhand", pos: { cx: 500, cy: 200 } },
  //   { id: "wb", name: "West Bengal", pos: { cx: 670, cy: 400 } },
  // ]

//   return (
//     <div className="relative w-full aspect-[4/3] bg-white p-4 rounded-lg shadow-lg">
//       <svg
//         version="1.1"
//         id="Layer_1"
//         xmlns="http://www.w3.org/2000/svg"
//         xmlnsXlink="http://www.w3.org/1999/xlink"
//         viewBox="0 0 850 900"
//         xmlSpace="preserve"
//         className="w-full h-full"
//       >
//         <g>
//           {/* This is a simplified representation. A real map would have complex path data for each state. */}
//           <path fill="#D4E6F1" stroke="#5DADE2" strokeWidth="1.5" d="M425,50 L800,200 L700,800 L150,800 L50,200 Z" />
//           <text x="425" y="450" fontFamily="Arial" fontSize="24" textAnchor="middle" fill="#555">
//             Simplified Map of India
//           </text>
//           <text x="425" y="480" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#777">
//             (Markers indicate presence in each state)
//           </text>
//         </g>
//         {states.map((state) => (
//           <g key={state.id} className="group cursor-pointer">
//             <circle
//               cx={state.pos.cx}
//               cy={state.pos.cy}
//               r="8"
//               fill="#FF5733"
//               className="group-hover:r-12 transition-all duration-300"
//             />
//             <circle cx={state.pos.cx} cy={state.pos.cy} r="4" fill="white" />
//             <text
//               x={state.pos.cx}
//               y={state.pos.cy - 20}
//               fontFamily="Arial"
//               fontSize="14"
//               textAnchor="middle"
//               fill="#333"
//               className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold"
//             >
//               {state.name}
//             </text>
//           </g>
//         ))}
//       </svg>
//     </div>
//   )
// }








// "use client";

// import { useState } from "react";
// import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// // India map TopoJSON URL
// const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// // Your office locations with exact coordinates
// const officeLocations = [
//   {
//     name: "Corporate Office",
//     city: "Manesar, Gurugram",
//     address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana- 122052",
//     coordinates: [76.9306, 28.3670], // Manesar coordinates
//     type: "corporate"
//   },
//   {
//     name: "Regional Office", 
//     city: "Bangalore",
//     address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bangalore – 560054",
//     coordinates: [77.5946, 12.9716], // Bangalore coordinates
//     type: "regional"
//   },
//   {
//     name: "Regional Office",
//     city: "Guwahati", 
//     address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam-781008",
//     coordinates: [91.7362, 26.1445], // Guwahati coordinates
//     type: "regional"
//   }
// ];

// // States where you have physical presence (all except UTs, but including Delhi & Jammu)
// const presenceStates = [
//   "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
//   "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
//   "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
//   "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
//   "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
//   "Delhi", "Jammu and Kashmir" // Including Delhi & Jammu as mentioned
// ];

// export  function IndiaMap() {
//   const [tooltip, setTooltip] = useState({
//     content: "",
//     x: 0,
//     y: 0,
//     visible: false,
//   });

//   const handleMarkerEnter = (evt, office) => {
//     setTooltip({
//       content: (
//         <div className="text-black">
//           <div className="font-bold text-sm">{office.name}</div>
//           <div className="text-xs text-gray-600">{office.city}</div>
//           <div className="text-xs text-gray-500 mt-1 max-w-xs">{office.address}</div>
//         </div>
//       ),
//       x: evt.pageX + 10,
//       y: evt.pageY + 10,
//       visible: true,
//     });
//   };

//   const handleMove = (evt) => {
//     if (tooltip.visible) {
//       setTooltip((prev) => ({
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
//     <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4 text-slate-800">Our Physical Presence</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             With offices across India and presence in every state, we're here to serve you locally
//           </p>
//         </div>

//         <div className="relative bg-white rounded-2xl shadow-xl p-8">
//           {/* Tooltip */}
//           {tooltip.visible && (
//             <div
//               className="fixed bg-white px-4 py-3 rounded-lg shadow-lg text-sm z-50 border"
//               style={{
//                 left: tooltip.x,
//                 top: tooltip.y,
//                 pointerEvents: "none",
//               }}
//             >
//               {tooltip.content}
//             </div>
//           )}

//           {/* India Map focused */}
//           <ComposableMap
//             projection="geoMercator"
//             projectionConfig={{
//               scale: 1100,
//               center: [78.9629, 22.5937], // Center on India
//             }}
//             width={1000}
//             height={600}
//           >
//             <Geographies geography={geoUrl}>
//               {({ geographies }) =>
//                 geographies
//                   .filter(geo => geo.properties.name === "India") // Show only India
//                   .map((geo) => (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill="#E5E7EB" // Light gray for India
//                       stroke="#FFF"
//                       strokeWidth={0.5}
//                       style={{
//                         default: { outline: "none" },
//                         hover: { outline: "none" },
//                         pressed: { outline: "none" },
//                       }}
//                     />
//                   ))
//               }
//             </Geographies>

//             {/* Office Location Markers */}
//             {officeLocations.map((office, index) => (
//               <Marker
//                 key={index}
//                 coordinates={office.coordinates}
//                 onMouseEnter={(evt) => handleMarkerEnter(evt, office)}
//                 onMouseMove={handleMove}
//                 onMouseLeave={handleLeave}
//               >
//                 {/* Marker Design */}
//                 <g>
//                   {/* Outer Circle (glow effect) */}
//                   <circle
//                     r={12}
//                     fill={office.type === 'corporate' ? '#ff6b35' : '#4285f4'}
//                     opacity={0.3}
//                   />
//                   {/* Main Marker */}
//                   <circle
//                     r={8}
//                     fill={office.type === 'corporate' ? '#ff6b35' : '#4285f4'}
//                     stroke="#fff"
//                     strokeWidth={2}
//                   />
//                   {/* Inner dot */}
//                   <circle
//                     r={3}
//                     fill="#fff"
//                   />
//                 </g>
                
//                 {/* Office Label */}
//                 <text
//                   textAnchor="middle"
//                   y={25}
//                   style={{
//                     fontFamily: "system-ui",
//                     fontSize: "12px",
//                     fontWeight: "bold",
//                     fill: "#1f2937"
//                   }}
//                 >
//                   {office.city}
//                 </text>
//               </Marker>
//             ))}
//           </ComposableMap>

//           {/* Legend */}
//           <div className="flex justify-center mt-8 gap-8">
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
//               <span className="text-sm font-medium">Corporate Office</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
//               <span className="text-sm font-medium">Regional Office</span>
//             </div>
//           </div>
//         </div>

//         {/* Office Details Cards */}
//         <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
//           {officeLocations.map((office, index) => (
//             <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//               <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
//                 office.type === 'corporate' 
//                   ? 'bg-orange-100 text-orange-700' 
//                   : 'bg-blue-100 text-blue-700'
//               }`}>
//                 {office.name}
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-gray-800">{office.city}</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">{office.address}</p>
//             </div>
//           ))}
//         </div>

//         {/* Presence Statement */}
//         <div className="text-center mt-12 bg-gradient-to-r from-orange-100 to-blue-100 rounded-2xl p-8 max-w-4xl mx-auto">
//           <h3 className="text-2xl font-bold mb-4 text-slate-800">Pan-India Coverage</h3>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             We have established our physical presence across <strong>all Indian states</strong> including Delhi and Jammu & Kashmir, 
//             ensuring local expertise and support for your compliance needs wherever your business operates.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }







// "use client";

// import { useState } from "react";
// import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// // India map TopoJSON URL
// const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// // Your office locations with exact coordinates
// const officeLocations = [
//   {
//     name: "Corporate Office",
//     city: "Manesar, Gurugram", 
//     address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana- 122052",
//     coordinates: [76.9306, 28.3670],
//     type: "corporate"
//   },
//   {
//     name: "Regional Office",
//     city: "Bangalore",
//     address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bangalore – 560054", 
//     coordinates: [77.5946, 12.9716],
//     type: "regional"
//   },
//   {
//     name: "Regional Office",
//     city: "Guwahati",
//     address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam-781008",
//     coordinates: [91.7362, 26.1445],
//     type: "regional"
//   }
// ];

// export function IndiaMap() {
//   const [tooltip, setTooltip] = useState({
//     content: "",
//     x: 0,
//     y: 0,
//     visible: false,
//   });

//   // const handleMarkerEnter = (evt, office) => {
//   //   setTooltip({
//   //     content: (
//   //       <div className="text-black p-2">
//   //         <div className="font-bold text-sm text-gray-900">{office.name}</div>
//   //         <div className="text-xs text-orange-600 font-medium">{office.city}</div>
//   //         <div className="text-xs text-gray-500 mt-1 max-w-xs leading-relaxed">{office.address}</div>
//   //       </div>
//   //     ),
//   //     x: evt.pageX + 10,
//   //     y: evt.pageY + 10,
//   //     visible: true,
//   //   });
//   // };

//   const handleMove = (evt) => {
//     if (tooltip.visible) {
//       setTooltip((prev) => ({
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
//     <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative">
//       {/* Background Decorations */}
//       <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-blue-100/20"></div>
//       <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
//       <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4 text-slate-800">Our Physical Presence</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             With offices across India and presence in every state, we're here to serve you locally
//           </p>
//         </div>

//         <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl p-8 border border-gray-200/50 backdrop-blur-sm">
//           {/* Enhanced Tooltip */}
//           {tooltip.visible && (
//             <div
//               className="fixed bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl text-sm z-50 border-2 border-orange-200/50 max-w-xs"
//               style={{
//                 left: tooltip.x,
//                 top: tooltip.y,
//                 pointerEvents: "none",
//               }}
//             >
//               {tooltip.content}
//             </div>
//           )}

//           {/* Enhanced India Map */}
//           <ComposableMap
//             projection="geoMercator"
//             projectionConfig={{
//               scale: 1100,
//               center: [78.9629, 22.5937],
//             }}
//             width={1000}
//             height={600}
//             className="drop-shadow-lg"
//           >
//             <defs>
//               {/* Gradient definitions for India map */}
//               <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#f0f9ff" />
//                 <stop offset="50%" stopColor="#e0f2fe" />
//                 <stop offset="100%" stopColor="#bae6fd" />
//               </linearGradient>
              
//               {/* Drop shadow filter */}
//               <filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%">
//                 <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#00000020"/>
//               </filter>
//             </defs>

//             <Geographies geography={geoUrl}>
//               {({ geographies }) =>
//                 geographies
//                   .filter(geo => geo.properties.name === "India")
//                   .map((geo) => (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill="url(#indiaGradient)"
//                       stroke="#3b82f6"
//                       strokeWidth={2}
//                       filter="url(#dropshadow)"
//                       style={{
//                         default: { 
//                           outline: "none",
//                           // transition: "all 0.3s ease"
//                         },
//                         hover: { 
//                           outline: "none",
//                           filter: "url(#dropshadow) brightness(1.1)"
//                         },
//                         pressed: { outline: "none" },
//                       }}
//                     />
//                   ))
//               }
//             </Geographies>

//             {/* Enhanced Office Location Markers */}
//             {officeLocations.map((office, index) => (
//               <Marker
//                 key={index}
//                 coordinates={office.coordinates}
//                 onMouseEnter={(evt) => handleMarkerEnter(evt, office)}
//                 onMouseMove={handleMove}
//                 onMouseLeave={handleLeave}
//                 className="cursor-pointer"
//               >
//                 <defs>
//                   {/* Pulsing animation */}
//                   <circle id={`pulse-${index}`} r="20" fill={office.type === 'corporate' ? '#ff6b3520' : '#4285f420'}>
//                     <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite"/>
//                     <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
//                   </circle>
//                 </defs>

//                 {/* Pulsing outer ring */}
//                 <use href={`#pulse-${index}`} />
                
//                 {/* Outer glow circle */}
//                 <circle
//                   r={16}
//                   fill={office.type === 'corporate' ? '#ff6b3530' : '#4285f430'}
//                   // className="animate-pulse"
//                 />
                
//                 {/* Main marker with gradient */}
//                 <circle
//                   r={10}
//                   fill={office.type === 'corporate' ? '#ff6b35' : '#4285f4'}
//                   stroke="#ffffff"
//                   strokeWidth={3}
//                   filter="drop-shadow(2px 2px 4px rgba(0,0,0,0.3))"
//                   // className="hover:scale-110 transition-transform duration-300"
//                 />
                
//                 {/* Inner highlight */}
//                 <circle
//                   r={4}
//                   fill="#ffffff"
//                   opacity={0.9}
//                 />
                
//                 {/* Small center dot */}
//                 <circle
//                   r={1.5}
//                   fill={office.type === 'corporate' ? '#ff6b35' : '#4285f4'}
//                 />

//                 {/* Enhanced Office Label */}
//                 <text
//                   textAnchor="middle"
//                   y={30}
//                   className="fill-gray-800 font-bold text-sm drop-shadow-sm"
//                   style={{
//                     fontFamily: "system-ui",
//                     fontSize: "13px",
//                     filter: "drop-shadow(1px 1px 2px rgba(255,255,255,0.8))"
//                   }}
//                 >
//                   {office.city}
//                 </text>
                
//                 {/* Connecting line to label */}
//                 <line
//                   x1="0"
//                   y1="13"
//                   x2="0"
//                   y2="20"
//                   stroke={office.type === 'corporate' ? '#ff6b35' : '#4285f4'}
//                   strokeWidth="2"
//                   opacity="0.6"
//                 />
//               </Marker>
//             ))}
//           </ComposableMap>

//           {/* Enhanced Legend */}
//           <div className="flex justify-center mt-8">
//             <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-xl">
//               <h4 className="font-bold text-gray-800 mb-4 text-center">Office Locations</h4>
//               <div className="flex gap-8">
//                 <div className="flex items-center gap-3">
//                   <div className="relative">
//                     <div className="w-5 h-5 bg-orange-500 rounded-full shadow-lg"></div>
//                     <div className="absolute -top-1 -left-1 w-7 h-7 bg-orange-200/40 rounded-full "></div>
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">Corporate Office</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="relative">
//                     <div className="w-5 h-5 bg-blue-500 rounded-full shadow-lg"></div>
//                     <div className="absolute -top-1 -left-1 w-7 h-7 bg-blue-200/40 rounded-full "></div>
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">Regional Office</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Office Details Cards */}
//         {/* <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
//           {officeLocations.map((office, index) => (
//             <div 
//               key={index} 
//               className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:-translate-y-2"
//             >
//               <div className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold mb-4 shadow-sm ${
//                 office.type === 'corporate' 
//                   ? 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 border border-orange-200/50' 
//                   : 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border border-blue-200/50'
//               }`}>
//                 {office.name}
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-gray-900">{office.city}</h3>
//               <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700">{office.address}</p>
              
              
//               <div className={`mt-4 h-1 rounded-full ${
//                 office.type === 'corporate' 
//                   ? 'bg-gradient-to-r from-orange-400 to-orange-600' 
//                   : 'bg-gradient-to-r from-blue-400 to-blue-600'
//               } group-hover:scale-105 transition-transform duration-300`}></div>
//             </div>
//           ))}
//         </div> */}

//         {/* Enhanced Presence Statement */}
//         <div className="text-center mt-12">
//           <div className="bg-gradient-to-r from-orange-100 via-white to-blue-100 rounded-3xl p-8 max-w-4xl mx-auto shadow-xl border border-gray-200/50 backdrop-blur-sm">
//             <div className="flex items-center justify-center mb-4">
//               <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </div>
//             </div>
//             <h3 className="text-2xl font-bold mb-4 text-slate-800">Pan-India Coverage</h3>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               We have established our physical presence across <strong className="text-orange-600">all Indian states</strong> including 
//               Delhi and Jammu & Kashmir, ensuring local expertise and support for your compliance needs wherever your business operates.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import { useState } from "react";
// import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// // 🌍 World countries (for base India shape gradient)
// const worldUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
// // 🇮🇳 India states GeoJSON (keep this file in /public)
// const indiaStatesUrl = "/india-states.json";

// // 📍 Office locations
// const officeLocations = [
//   {
//     name: "Corporate Office",
//     city: "Manesar, Gurugram",
//     address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana- 122052",
//     coordinates: [76.9306, 28.3670],
//     type: "corporate",
//   },
//   {
//     name: "Regional Office",
//     city: "Bangalore",
//     address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bangalore – 560054",
//     coordinates: [77.5946, 12.9716],
//     type: "regional",
//   },
//   {
//     name: "Regional Office",
//     city: "Guwahati",
//     address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam-781008",
//     coordinates: [91.7362, 26.1445],
//     type: "regional",
//   },
// ];

// // 🎨 Nice pastel fills for states
// const stateFill = (i: number) => `hsl(${(i * 33) % 360} 70% 80%)`;

// export function IndiaMap() {
//   const [tooltip, setTooltip] = useState<{
//     content: React.ReactNode | string;
//     x: number;
//     y: number;
//     visible: boolean;
//   }>({
//     content: "",
//     x: 0,
//     y: 0,
//     visible: false,
//   });

//   const handleMove = (evt: React.MouseEvent) => {
//     if (tooltip.visible) {
//       setTooltip((prev) => ({
//         ...prev,
//         x: evt.pageX + 10,
//         y: evt.pageY + 10,
//       }));
//     }
//   };

//   const handleLeave = () => {
//     setTooltip({ content: "", x: 0, y: 0, visible: false });
//   };

//   const handleMarkerEnter = (
//     evt: React.MouseEvent,
//     office: (typeof officeLocations)[number]
//   ) => {
//     setTooltip({
//       content: (
//         <div className="text-black p-1.5">
//           <div className="font-bold text-sm text-gray-900">{office.name}</div>
//           <div className="text-xs text-orange-600 font-medium">{office.city}</div>
//           <div className="text-xs text-gray-500 mt-1 leading-relaxed">
//             {office.address}
//           </div>
//         </div>
//       ),
//       x: evt.pageX + 10,
//       y: evt.pageY + 10,
//       visible: true,
//     });
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative">
//       {/* BG decorations */}
//       <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-blue-100/20" />
//       <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl" />
//       <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4 text-slate-800">Our Physical Presence</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Across India with state-wise coverage — local presence, national scale.
//           </p>
//         </div>

//         <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl p-8 border border-gray-200/50 backdrop-blur-sm">
//           {/* Tooltip */}
//           {tooltip.visible && (
//             <div
//               className="fixed bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl text-sm z-50 border-2 border-orange-200/50 max-w-xs"
//               style={{
//                 left: tooltip.x,
//                 top: tooltip.y,
//                 pointerEvents: "none",
//               }}
//             >
//               {tooltip.content}
//             </div>
//           )}

//           {/* Map */}
//           <ComposableMap
//             projection="geoMercator"
//             projectionConfig={{ scale: 1100, center: [78.9629, 22.5937] }}
//             width={1000}
//             height={600}
//             className="drop-shadow-lg"
//           >
//             {/* Gradiented Country Fill */}
//             <defs>
//               <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#f0f9ff" />
//                 <stop offset="50%" stopColor="#e0f2fe" />
//                 <stop offset="100%" stopColor="#bae6fd" />
//               </linearGradient>
//               <filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%">
//                 <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#00000020" />
//               </filter>
//             </defs>

//             {/* Base India shape from world atlas (for gradient backdrop) */}
//             <Geographies geography={worldUrl}>
//               {({ geographies }) =>
//                 geographies
//                   .filter((g) => g.properties.name === "India")
//                   .map((geo) => (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill="url(#indiaGradient)"
//                       stroke="#3b82f6"
//                       strokeWidth={2}
//                       filter="url(#dropshadow)"
//                       style={{
//                         default: { outline: "none" },
//                         hover: { outline: "none", filter: "url(#dropshadow) brightness(1.05)" },
//                         pressed: { outline: "none" },
//                       }}
//                     />
//                   ))
//               }
//             </Geographies>

//             {/* 🇮🇳 States Overlay (this shows ALL states) */}
//             <Geographies geography={indiaStatesUrl}>
//               {({ geographies }) =>
//                 geographies.map((geo, idx) => {
//                   const stateName = (geo.properties?.name as string) || "State";
//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={stateFill(idx)}
//                       stroke="#ffffff"
//                       strokeWidth={0.8}
//                       style={{
//                         default: { outline: "none", transition: "all 200ms" },
//                         hover: { fill: "#FFD54F", outline: "none", cursor: "pointer" },
//                         pressed: { outline: "none" },
//                       }}
//                       onMouseEnter={(evt) =>
//                         setTooltip({
//                           content: (
//                             <div className="text-black">
//                               <span className="font-bold">{stateName}</span>
//                               <div className="text-xs opacity-70">India</div>
//                             </div>
//                           ),
//                           x: evt.pageX + 10,
//                           y: evt.pageY + 10,
//                           visible: true,
//                         })
//                       }
//                       onMouseMove={handleMove}
//                       onMouseLeave={handleLeave}
//                     />
//                   );
//                 })
//               }
//             </Geographies>

//             {/* 📍 Office Markers */}
//             {officeLocations.map((office, index) => (
//               <Marker
//                 key={index}
//                 coordinates={office.coordinates as [number, number]}
//                 onMouseEnter={(evt) => handleMarkerEnter(evt, office)}
//                 onMouseMove={handleMove}
//                 onMouseLeave={handleLeave}
//                 className="cursor-pointer"
//               >
//                 <defs>
//                   <circle id={`pulse-${index}`} r="20" fill={office.type === "corporate" ? "#ff6b3520" : "#4285f420"}>
//                     <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
//                     <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
//                   </circle>
//                 </defs>
//                 <use href={`#pulse-${index}`} />
//                 <circle r={16} fill={office.type === "corporate" ? "#ff6b3530" : "#4285f430"} />
//                 <circle r={10} fill={office.type === "corporate" ? "#ff6b35" : "#4285f4"} stroke="#ffffff" strokeWidth={3} />
//                 <circle r={4} fill="#ffffff" opacity={0.9} />
//                 <circle r={1.5} fill={office.type === "corporate" ? "#ff6b35" : "#4285f4"} />
//                 <text
//                   textAnchor="middle"
//                   y={30}
//                   className="fill-gray-800 font-bold"
//                   style={{ fontFamily: "system-ui", fontSize: "13px", filter: "drop-shadow(1px 1px 2px rgba(255,255,255,0.8))" }}
//                 >
//                   {office.city}
//                 </text>
//                 <line x1="0" y1="13" x2="0" y2="20" stroke={office.type === "corporate" ? "#ff6b35" : "#4285f4"} strokeWidth="2" opacity="0.6" />
//               </Marker>
//             ))}
//           </ComposableMap>

//           {/* Legend */}
//           <div className="flex justify-center mt-8">
//             <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-xl">
//               <h4 className="font-bold text-gray-800 mb-4 text-center">Office Locations</h4>
//               <div className="flex gap-8">
//                 <div className="flex items-center gap-3">
//                   <div className="relative">
//                     <div className="w-5 h-5 bg-orange-500 rounded-full shadow-lg"></div>
//                     <div className="absolute -top-1 -left-1 w-7 h-7 bg-orange-200/40 rounded-full "></div>
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">Corporate Office</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="relative">
//                     <div className="w-5 h-5 bg-blue-500 rounded-full shadow-lg"></div>
//                     <div className="absolute -top-1 -left-1 w-7 h-7 bg-blue-200/40 rounded-full "></div>
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">Regional Office</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Presence Statement */}
//         <div className="text-center mt-12">
//           <div className="bg-gradient-to-r from-orange-100 via-white to-blue-100 rounded-3xl p-8 max-w-4xl mx-auto shadow-xl border border-gray-200/50 backdrop-blur-sm">
//             <h3 className="text-2xl font-bold mb-4 text-slate-800">Pan-India Coverage</h3>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               We operate across <strong className="text-orange-600">all Indian states</strong>, including major metros and emerging hubs,
//               ensuring local expertise wherever you are.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import { useState } from "react";
// import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// // 🌍 World countries (for base India shape gradient)
// const worldUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// // ��🇳 India states GeoJSON data (embedded directly)
// const indiaStatesData = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": { "name": "Jammu and Kashmir" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[73.5, 34.5], [75.5, 34.5], [75.5, 32.5], [73.5, 32.5], [73.5, 34.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Himachal Pradesh" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[75.5, 32.5], [77.5, 32.5], [77.5, 30.5], [75.5, 30.5], [75.5, 32.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Punjab" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[73.5, 30.5], [75.5, 30.5], [75.5, 28.5], [73.5, 28.5], [73.5, 30.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Haryana" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[75.5, 28.5], [77.5, 28.5], [77.5, 26.5], [75.5, 26.5], [75.5, 28.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Uttarakhand" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[77.5, 30.5], [79.5, 30.5], [79.5, 28.5], [77.5, 28.5], [77.5, 30.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Uttar Pradesh" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[77.5, 28.5], [83.5, 28.5], [83.5, 24.5], [77.5, 24.5], [77.5, 28.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Rajasthan" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[69.5, 28.5], [75.5, 28.5], [75.5, 22.5], [69.5, 22.5], [69.5, 28.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Madhya Pradesh" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[73.5, 24.5], [81.5, 24.5], [81.5, 20.5], [73.5, 20.5], [73.5, 24.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Gujarat" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[69.5, 22.5], [73.5, 22.5], [73.5, 18.5], [69.5, 18.5], [69.5, 22.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Maharashtra" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[73.5, 20.5], [79.5, 20.5], [79.5, 16.5], [73.5, 16.5], [73.5, 20.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Goa" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[73.5, 16.5], [74.5, 16.5], [74.5, 14.5], [73.5, 14.5], [73.5, 16.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Chhattisgarh" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[79.5, 22.5], [83.5, 22.5], [83.5, 18.5], [79.5, 18.5], [79.5, 22.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Jharkhand" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[83.5, 24.5], [87.5, 24.5], [87.5, 22.5], [83.5, 22.5], [83.5, 24.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Bihar" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[83.5, 26.5], [87.5, 26.5], [87.5, 24.5], [83.5, 24.5], [83.5, 26.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "West Bengal" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[87.5, 26.5], [89.5, 26.5], [89.5, 20.5], [87.5, 20.5], [87.5, 26.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Odisha" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[81.5, 22.5], [87.5, 22.5], [87.5, 18.5], [81.5, 18.5], [81.5, 22.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Telangana" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[77.5, 18.5], [81.5, 18.5], [81.5, 16.5], [77.5, 16.5], [77.5, 18.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Andhra Pradesh" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[77.5, 16.5], [83.5, 16.5], [83.5, 12.5], [77.5, 12.5], [77.5, 16.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Karnataka" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[73.5, 16.5], [77.5, 16.5], [77.5, 12.5], [73.5, 12.5], [73.5, 16.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Kerala" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[73.5, 12.5], [77.5, 12.5], [77.5, 8.5], [73.5, 8.5], [73.5, 12.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Tamil Nadu" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[77.5, 12.5], [81.5, 12.5], [81.5, 8.5], [77.5, 8.5], [77.5, 12.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Assam" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[89.5, 28.5], [95.5, 28.5], [95.5, 24.5], [89.5, 24.5], [89.5, 28.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Arunachal Pradesh" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[91.5, 30.5], [97.5, 30.5], [97.5, 26.5], [91.5, 26.5], [91.5, 30.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Nagaland" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[93.5, 26.5], [95.5, 26.5], [95.5, 24.5], [93.5, 24.5], [93.5, 26.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Manipur" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[93.5, 24.5], [95.5, 24.5], [95.5, 22.5], [93.5, 22.5], [93.5, 24.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Mizoram" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[91.5, 24.5], [93.5, 24.5], [93.5, 22.5], [91.5, 22.5], [91.5, 24.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Tripura" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[91.5, 22.5], [93.5, 22.5], [93.5, 20.5], [91.5, 20.5], [91.5, 22.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Meghalaya" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[89.5, 24.5], [91.5, 24.5], [91.5, 22.5], [89.5, 22.5], [89.5, 24.5]]]
//       }
//     },
//     {
//       "type": "Feature",
//       "properties": { "name": "Sikkim" },
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[[87.5, 28.5], [89.5, 28.5], [89.5, 26.5], [87.5, 26.5], [87.5, 28.5]]]
//       }
//     }
//   ]
// };

// // 📍 Office locations
// const officeLocations = [
//   {
//     name: "Corporate Office",
//     city: "Manesar, Gurugram",
//     address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana- 122052",
//     coordinates: [76.9306, 28.3670],
//     type: "corporate",
//   },
//   {
//     name: "Regional Office",
//     city: "Bangalore",
//     address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bangalore – 560054",
//     coordinates: [77.5946, 12.9716],
//     type: "regional",
//   },
//   {
//     name: "Regional Office",
//     city: "Guwahati",
//     address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam-781008",
//     coordinates: [91.7362, 26.1445],
//     type: "regional",
//   },
// ];

// // 🎨 Nice pastel fills for states
// const stateFill = (i: number) => `hsl(${(i * 33) % 360} 70% 80%)`;

// export function IndiaMap() {
//   const [tooltip, setTooltip] = useState<{
//     content: React.ReactNode | string;
//     x: number;
//     y: number;
//     visible: boolean;
//   }>({
//     content: "",
//     x: 0,
//     y: 0,
//     visible: false,
//   });

//   const handleMove = (evt: React.MouseEvent) => {
//     if (tooltip.visible) {
//       setTooltip((prev) => ({
//         ...prev,
//         x: evt.pageX + 10,
//         y: evt.pageY + 10,
//       }));
//     }
//   };

//   const handleLeave = () => {
//     setTooltip({ content: "", x: 0, y: 0, visible: false });
//   };

//   const handleMarkerEnter = (
//     evt: React.MouseEvent,
//     office: (typeof officeLocations)[number]
//   ) => {
//     setTooltip({
//       content: (
//         <div className="text-black p-1.5">
//           <div className="font-bold text-sm text-gray-900">{office.name}</div>
//           <div className="text-xs text-orange-600 font-medium">{office.city}</div>
//           <div className="text-xs text-gray-500 mt-1 leading-relaxed">
//             {office.address}
//           </div>
//         </div>
//       ),
//       x: evt.pageX + 10,
//       y: evt.pageY + 10,
//       visible: true,
//     });
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative">
//       {/* BG decorations */}
//       <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-blue-100/20" />
//       <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl" />
//       <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4 text-slate-800">Our Physical Presence</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Across India with state-wise coverage — local presence, national scale.
//           </p>
//         </div>

//         <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl p-8 border border-gray-200/50 backdrop-blur-sm">
//           {/* Tooltip */}
//           {tooltip.visible && (
//             <div
//               className="fixed bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl text-sm z-50 border-2 border-orange-200/50 max-w-xs"
//               style={{
//                 left: tooltip.x,
//                 top: tooltip.y,
//                 pointerEvents: "none",
//               }}
//             >
//               {tooltip.content}
//             </div>
//           )}

//           {/* Map */}
//           <ComposableMap
//             projection="geoMercator"
//             projectionConfig={{ scale: 1100, center: [78.9629, 22.5937] }}
//             width={1000}
//             height={600}
//             className="drop-shadow-lg"
//           >
//             {/* Gradiented Country Fill */}
//             <defs>
//               <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#f0f9ff" />
//                 <stop offset="50%" stopColor="#e0f2fe" />
//                 <stop offset="100%" stopColor="#bae6fd" />
//               </linearGradient>
//               <filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%">
//                 <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#00000020" />
//               </filter>
//             </defs>

//             {/* Base India shape from world atlas (for gradient backdrop) */}
//             <Geographies geography={worldUrl}>
//               {({ geographies }) =>
//                 geographies
//                   .filter((g) => g.properties.name === "India")
//                   .map((geo) => (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill="url(#indiaGradient)"
//                       stroke="#3b82f6"
//                       strokeWidth={2}
//                       filter="url(#dropshadow)"
//                       style={{
//                         default: { outline: "none" },
//                         hover: { outline: "none", filter: "url(#dropshadow) brightness(1.05)" },
//                         pressed: { outline: "none" },
//                       }}
//                     />
//                   ))
//               }
//             </Geographies>

//             {/* ��🇳 States Overlay (this shows ALL states) */}
//             <Geographies geography={indiaStatesData}>
//               {({ geographies }) =>
//                 geographies.map((geo, idx) => {
//                   const stateName = (geo.properties?.name as string) || "State";
//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={stateFill(idx)}
//                       stroke="#ffffff"
//                       strokeWidth={0.8}
//                       style={{
//                         default: { outline: "none", transition: "all 200ms" },
//                         hover: { fill: "#FFD54F", outline: "none", cursor: "pointer" },
//                         pressed: { outline: "none" },
//                       }}
//                       onMouseEnter={(evt) =>
//                         setTooltip({
//                           content: (
//                             <div className="text-black">
//                               <span className="font-bold">{stateName}</span>
//                               <div className="text-xs opacity-70">India</div>
//                             </div>
//                           ),
//                           x: evt.pageX + 10,
//                           y: evt.pageY + 10,
//                           visible: true,
//                         })
//                       }
//                       onMouseMove={handleMove}
//                       onMouseLeave={handleLeave}
//                     />
//                   );
//                 })
//               }
//             </Geographies>

//             {/* 📍 Office Markers */}
//             {officeLocations.map((office, index) => (
//               <Marker
//                 key={index}
//                 coordinates={office.coordinates as [number, number]}
//                 onMouseEnter={(evt) => handleMarkerEnter(evt, office)}
//                 onMouseMove={handleMove}
//                 onMouseLeave={handleLeave}
//                 className="cursor-pointer"
//               >
//                 <defs>
//                   <circle id={`pulse-${index}`} r="20" fill={office.type === "corporate" ? "#ff6b3520" : "#4285f420"}>
//                     <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
//                     <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
//                   </circle>
//                 </defs>
//                 <use href={`#pulse-${index}`} />
//                 <circle r={16} fill={office.type === "corporate" ? "#ff6b3530" : "#4285f430"} />
//                 <circle r={10} fill={office.type === "corporate" ? "#ff6b35" : "#4285f4"} stroke="#ffffff" strokeWidth={3} />
//                 <circle r={4} fill="#ffffff" opacity={0.9} />
//                 <circle r={1.5} fill={office.type === "corporate" ? "#ff6b35" : "#4285f4"} />
//                 <text
//                   textAnchor="middle"
//                   y={30}
//                   className="fill-gray-800 font-bold"
//                   style={{ fontFamily: "system-ui", fontSize: "13px", filter: "drop-shadow(1px 1px 2px rgba(255,255,255,0.8))" }}
//                 >
//                   {office.city}
//                 </text>
//                 <line x1="0" y1="13" x2="0" y2="20" stroke={office.type === "corporate" ? "#ff6b35" : "#4285f4"} strokeWidth="2" opacity="0.6" />
//               </Marker>
//             ))}
//           </ComposableMap>

//           {/* Legend */}
//           <div className="flex justify-center mt-8">
//             <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-xl">
//               <h4 className="font-bold text-gray-800 mb-4 text-center">Office Locations</h4>
//               <div className="flex gap-8">
//                 <div className="flex items-center gap-3">
//                   <div className="relative">
//                     <div className="w-5 h-5 bg-orange-500 rounded-full shadow-lg"></div>
//                     <div className="absolute -top-1 -left-1 w-7 h-7 bg-orange-200/40 rounded-full "></div>
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">Corporate Office</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="relative">
//                     <div className="w-5 h-5 bg-blue-500 rounded-full shadow-lg"></div>
//                     <div className="absolute -top-1 -left-1 w-7 h-7 bg-blue-200/40 rounded-full "></div>
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">Regional Office</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Presence Statement */}
//         <div className="text-center mt-12">
//           <div className="bg-gradient-to-r from-orange-100 via-white to-blue-100 rounded-3xl p-8 max-w-4xl mx-auto shadow-xl border border-gray-200/50 backdrop-blur-sm">
//             <h3 className="text-2xl font-bold mb-4 text-slate-800">Pan-India Coverage</h3>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               We operate across <strong className="text-orange-600">all Indian states</strong>, including major metros and emerging hubs,
//               ensuring local expertise wherever you are.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// 🌍 Multiple reliable CDN options for India map
const indiaMapUrls = [
  "https://raw.githubusercontent.com/datameet/maps/master/Country/india-osm.geojson",
  // "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json", // fallback
  // "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson" // second fallback
];

// 📍 Office locations with enhanced info
const officeLocations = [
  {
    name: "Corporate Office",
    city: "Manesar, Gurugram",
    address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana- 122052",
    coordinates: [76.9306, 28.3670],
    type: "corporate",
    state: "Haryana",
    zone: "North India"
  },
  {
    name: "Regional Office",
    city: "Bangalore",
    address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bangalore – 560054",
    coordinates: [77.5946, 12.9716],
    type: "regional",
    state: "Karnataka", 
    zone: "South India"
  },
  {
    name: "Regional Office", 
    city: "Guwahati",
    address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam-781008",
    coordinates: [91.7362, 26.1445],
    type: "regional",
    state: "Assam",
    zone: "Northeast India"
  },
];

// 🗺️ Coverage states manually defined for reliability
const coverageStates = [
  // North
  { name: "Haryana", region: "north", hasOffice: true },
  { name: "Delhi", region: "north", hasOffice: false },
  { name: "Punjab", region: "north", hasOffice: false },
  { name: "Rajasthan", region: "north", hasOffice: false },
  { name: "Uttar Pradesh", region: "north", hasOffice: false },
  { name: "Uttarakhand", region: "north", hasOffice: false },
  { name: "Himachal Pradesh", region: "north", hasOffice: false },
  { name: "Jammu and Kashmir", region: "north", hasOffice: false },
  { name: "Ladakh", region: "north", hasOffice: false },
  
  // South
  { name: "Karnataka", region: "south", hasOffice: true },
  { name: "Tamil Nadu", region: "south", hasOffice: false },
  { name: "Kerala", region: "south", hasOffice: false },
  { name: "Andhra Pradesh", region: "south", hasOffice: false },
  { name: "Telangana", region: "south", hasOffice: false },
  { name: "Puducherry", region: "south", hasOffice: false },
  
  // Northeast
  { name: "Assam", region: "northeast", hasOffice: true },
  { name: "Arunachal Pradesh", region: "northeast", hasOffice: false },
  { name: "Manipur", region: "northeast", hasOffice: false },
  { name: "Meghalaya", region: "northeast", hasOffice: false },
  { name: "Mizoram", region: "northeast", hasOffice: false },
  { name: "Nagaland", region: "northeast", hasOffice: false },
  { name: "Sikkim", region: "northeast", hasOffice: false },
  { name: "Tripura", region: "northeast", hasOffice: false },
  
  // East & Central
  { name: "West Bengal", region: "east", hasOffice: false },
  { name: "Bihar", region: "east", hasOffice: false },
  { name: "Jharkhand", region: "east", hasOffice: false },
  { name: "Odisha", region: "east", hasOffice: false },
  { name: "Madhya Pradesh", region: "central", hasOffice: false },
  { name: "Chhattisgarh", region: "central", hasOffice: false },
  
  // West
  { name: "Maharashtra", region: "west", hasOffice: false },
  { name: "Gujarat", region: "west", hasOffice: false },
  { name: "Goa", region: "west", hasOffice: false },
  { name: "Daman and Diu", region: "west", hasOffice: false },
  { name: "Dadra and Nagar Haveli", region: "west", hasOffice: false },
];

// 🎨 Helper function to generate state colors
const getStateColor = (index) => {
  const colors = [
    "#fef3c7", "#fed7aa", "#fbbf24", "#f59e0b", "#d97706",
    "#fdba74", "#fb923c", "#f97316", "#ea580c", "#dc2626",
    "#fde68a", "#fcd34d", "#facc15", "#eab308", "#ca8a04"
  ];
  return colors[index % colors.length];
};

// 🏗️ Helper function to handle state hover
const handleStateHover = (evt, stateName, setTooltip) => {
  const stateInfo = coverageStates.find(state => state.name === stateName) || { 
    name: stateName, 
    region: 'unknown', 
    hasOffice: false 
  };
  
  setTooltip({
    content: (
      <div className="text-black p-3">
        <div className="font-bold text-lg text-gray-900 mb-1">{stateInfo.name}</div>
        <div className="text-sm text-orange-600 font-medium mb-1 capitalize">{stateInfo.region} India</div>
        {stateInfo.hasOffice && (
          <div className="text-xs text-green-600 font-medium">🏢 Office Location</div>
        )}
        <div className="text-xs text-blue-600 font-medium mt-1">✓ Full Coverage Area</div>
      </div>
    ),
    x: evt.pageX + 10,
    y: evt.pageY + 10,
    visible: true,
  });
};

export function IndiaMap() {
  const [mapData, setMapData] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [tooltip, setTooltip] = useState({
    content: "",
    x: 0,
    y: 0,
    visible: false,
  });

  // Load India map data
  useState(() => {
    const loadMapData = async () => {
      try {
        // Try first URL - detailed India GeoJSON
        const response = await fetch(indiaMapUrls[0]);
        const data = await response.json();
        setMapData({ url: indiaMapUrls[0], isDetailedIndia: true });
      } catch (error) {
        console.log("Using fallback world atlas");
        setMapData({ url: indiaMapUrls[1], isDetailedIndia: false });
      }
    };
    loadMapData();
  }, []);

  const handleMove = (evt) => {
    if (tooltip.visible) {
      setTooltip((prev) => ({
        ...prev,
        x: evt.pageX + 10,
        y: evt.pageY + 10,
      }));
    }
  };

  const handleLeave = () => {
    setTooltip({ content: "", x: 0, y: 0, visible: false });
    setSelectedZone(null);
  };

  const handleMarkerEnter = (evt, office) => {
    setTooltip({
      content: (
        <div className="text-black p-3">
          <div className="font-bold text-base text-gray-900 mb-1">{office.name}</div>
          <div className="text-sm text-orange-600 font-medium mb-1">{office.city}</div>
          <div className="text-xs text-blue-600 font-medium mb-1">{office.state}</div>
          <div className="text-xs text-purple-600 font-medium mb-2">{office.zone}</div>
          <div className="text-xs text-gray-600 leading-relaxed max-w-xs">
            {office.address}
          </div>
        </div>
      ),
      x: evt.pageX + 10,
      y: evt.pageY + 10,
      visible: true,
    });
  };

  const handleIndiaHover = (evt) => {
    setTooltip({
      content: (
        <div className="text-black p-3">
          <div className="font-bold text-lg text-gray-900 mb-2">🇮🇳 Republic of India</div>
          <div className="space-y-1 text-sm">
            <div className="text-orange-600 font-medium">✓ 28 States Covered</div>
            <div className="text-blue-600 font-medium">✓ 8 Union Territories</div>
            <div className="text-green-600 font-medium">✓ 3 Physical Offices</div>
            <div className="text-purple-600 font-medium">✓ Pan-India Operations</div>
          </div>
        </div>
      ),
      x: evt.pageX + 10,
      y: evt.pageY + 10,
      visible: true,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-blue-100/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
            <span className="text-2xl">🇮🇳</span>
            <span className="text-sm font-semibold text-gray-700">All 28 States + 8 UTs Coverage</span>
          </div>
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-blue-600 bg-clip-text text-transparent">
            Our Pan-India Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Physical offices strategically located across India with comprehensive nationwide coverage
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-white/90 via-gray-50/90 to-white/90 rounded-3xl shadow-2xl p-8 border border-gray-200/50 backdrop-blur-lg">
          {/* Enhanced Tooltip */}
          {tooltip.visible && (
            <div
              className="fixed bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl text-sm z-50 border-2 border-orange-200/50 max-w-sm"
              style={{
                left: tooltip.x,
                top: tooltip.y,
                pointerEvents: "none",
              }}
            >
              {tooltip.content}
            </div>
          )}

          {/* India Map */}
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 1200,
              center: [78.9629, 22.5937],
            }}
            width={1000}
            height={650}
            className="drop-shadow-lg"
          >
            <defs>
              {/* Enhanced gradients for India */}
              <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="25%" stopColor="#fed7aa" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="75%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              
              <linearGradient id="indiaHover" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="50%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
              
              <filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#00000020"/>
              </filter>

              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* India Map with States */}
            {mapData && (
              <Geographies geography={mapData.url}>
                {({ geographies }) => {
                  // Filter for India if using world atlas
                  const indiaGeographies = mapData.isDetailedIndia 
                    ? geographies 
                    : geographies.filter(geo => geo.properties.NAME === "India" || geo.properties.name === "India");
                    
                  return indiaGeographies.map((geo, index) => {
                    const geoName = geo.properties?.NAME || geo.properties?.name || geo.properties?.st_nm || `Region-${index}`;
                    const isIndiaCountry = geoName === "India";
                    
                    return (
                      <Geography
                        key={geo.rsmKey || index}
                        geography={geo}
                        fill={mapData.isDetailedIndia ? getStateColor(index) : "url(#indiaGradient)"}
                        stroke={mapData.isDetailedIndia ? "#ffffff" : "#d97706"}
                        strokeWidth={mapData.isDetailedIndia ? 1 : 2}
                        filter="url(#dropshadow)"
                        style={{
                          default: { 
                            outline: "none",
                            transition: "all 0.3s ease",
                            opacity: mapData.isDetailedIndia ? 0.8 : 1
                          },
                          hover: { 
                            outline: "none",
                            fill: mapData.isDetailedIndia ? "#fbbf24" : "url(#indiaHover)",
                            cursor: "pointer",
                            filter: "url(#glow)",
                            opacity: 1
                          },
                          pressed: { outline: "none" },
                        }}
                        onMouseEnter={(evt) => {
                          if (mapData.isDetailedIndia) {
                            handleStateHover(evt, geoName, setTooltip);
                          } else {
                            handleIndiaHover(evt);
                          }
                        }}
                        onMouseMove={handleMove}
                        onMouseLeave={handleLeave}
                      />
                    );
                  });
                }}
              </Geographies>
            )}

            {/* Fallback if no map data */}
            {!mapData && (
              <g>
                <rect width="1000" height="650" fill="#f0f9ff" />
                <text x="500" y="325" textAnchor="middle" className="text-lg fill-gray-600">
                  Loading India Map...
                </text>
              </g>
            )}

            {/* Enhanced Office Location Markers */}
            {officeLocations.map((office, index) => (
              <Marker
                key={index}
                coordinates={office.coordinates}
                onMouseEnter={(evt) => handleMarkerEnter(evt, office)}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                className="cursor-pointer"
              >
                <defs>
                  {/* Multi-layer pulsing animation */}
                  <circle id={`pulse-outer-${index}`} r="30" fill={office.type === 'corporate' ? '#ff6b3515' : '#4285f415'}>
                    <animate attributeName="r" values="25;35;25" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle id={`pulse-inner-${index}`} r="22" fill={office.type === 'corporate' ? '#ff6b3525' : '#4285f425'}>
                    <animate attributeName="r" values="18;26;18" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </defs>

                {/* Pulsing rings */}
                <use href={`#pulse-outer-${index}`} />
                <use href={`#pulse-inner-${index}`} />
                
                {/* Outer glow circle */}
                <circle
                  r={18}
                  fill={office.type === 'corporate' ? '#ff6b3540' : '#4285f440'}
                  className="animate-pulse"
                />
                
                {/* Main marker with enhanced styling */}
                <circle
                  r={14}
                  fill={office.type === 'corporate' ? '#ea580c' : '#2563eb'}
                  stroke="#ffffff"
                  strokeWidth={4}
                  filter="drop-shadow(3px 3px 8px rgba(0,0,0,0.4))"
                  className="hover:scale-110 transition-transform duration-300"
                />
                
                {/* Inner highlight ring */}
                <circle
                  r={10}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={2}
                  opacity={0.6}
                />
                
                {/* Center highlight */}
                <circle
                  r={6}
                  fill="#ffffff"
                  opacity={0.9}
                />
                
                {/* Inner center dot */}
                <circle
                  r={3}
                  fill={office.type === 'corporate' ? '#ea580c' : '#2563eb'}
                />

                {/* Enhanced Office Label with background */}
                <g>
                  {/* Label background */}
                  <rect
                    x={-office.city.split(',')[0].length * 5}
                    y={28}
                    width={office.city.split(',')[0].length * 10}
                    height={20}
                    fill="rgba(255,255,255,0.95)"
                    rx={10}
                    stroke={office.type === 'corporate' ? '#ea580c' : '#2563eb'}
                    strokeWidth={2}
                  />
                  <text
                    textAnchor="middle"
                    y={40}
                    className="fill-gray-800 font-bold"
                    style={{
                      fontFamily: "system-ui",
                      fontSize: "14px"
                    }}
                  >
                    {office.city.split(',')[0]}
                  </text>
                </g>
                
                {/* Connecting line */}
                <line
                  x1="0"
                  y1="18"
                  x2="0"
                  y2="28"
                  stroke={office.type === 'corporate' ? '#ea580c' : '#2563eb'}
                  strokeWidth="3"
                  opacity="0.8"
                />
              </Marker>
            ))}
          </ComposableMap>

          {/* Enhanced Legend */}
          <div className="flex justify-center mt-8">
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-xl">
              <h4 className="font-bold text-gray-800 mb-4 text-center">Office Network</h4>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-6 h-6 bg-orange-500 rounded-full shadow-lg"></div>
                    <div className="absolute -top-1 -left-1 w-8 h-8 bg-orange-200/40 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Corporate HQ</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-6 h-6 bg-blue-500 rounded-full shadow-lg"></div>
                    <div className="absolute -top-1 -left-1 w-8 h-8 bg-blue-200/40 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Regional Office</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-4 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-sm shadow-sm border border-orange-400"></div>
                  <span className="text-sm font-medium text-gray-700">Full India Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage States Grid */}
        <div className="mt-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">States & Union Territories Coverage</h3>
            
            {/* Group states by region */}
            {['north', 'south', 'east', 'west', 'central', 'northeast'].map(region => {
              const regionStates = coverageStates.filter(state => state.region === region);
              const regionName = {
                north: 'Northern India',
                south: 'Southern India', 
                east: 'Eastern India',
                west: 'Western India',
                central: 'Central India',
                northeast: 'Northeast India'
              }[region];
              
              return (
                <div key={region} className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-700 capitalize">{regionName}</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {regionStates.map((state, idx) => (
                      <div 
                        key={idx}
                        className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                          state.hasOffice 
                            ? 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 border-orange-300 shadow-md' 
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {state.hasOffice && <span className="text-orange-600 mr-1">🏢</span>}
                        {state.name}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Office Details Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {officeLocations.map((office, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold mb-4 shadow-sm ${
                office.type === 'corporate' 
                  ? 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 border border-orange-200/50' 
                  : 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border border-blue-200/50'
              }`}>
                {office.name}
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-gray-900">{office.city}</h3>
              <div className="text-sm text-blue-600 font-medium mb-1">{office.state}</div>
              <div className="text-xs text-purple-600 font-medium mb-3">{office.zone}</div>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 mb-4">{office.address}</p>
              
              {/* Decorative element */}
              <div className={`h-1 rounded-full ${
                office.type === 'corporate' 
                  ? 'bg-gradient-to-r from-orange-400 to-orange-600' 
                  : 'bg-gradient-to-r from-blue-400 to-blue-600'
              } group-hover:scale-105 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Coverage Statement */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-100/80 via-white/80 to-blue-100/80 rounded-3xl p-8 max-w-5xl mx-auto shadow-xl border border-gray-200/50 backdrop-blur-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 via-red-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-slate-800">Complete India Coverage</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We maintain physical presence and operational coverage across <strong className="text-orange-600">all 28 states and 8 union territories</strong> of India, 
              ensuring local expertise and nationwide support for your business needs.
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-orange-600">28</div>
                <div className="text-sm text-gray-600">States</div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-black text-blue-600">8</div>
                <div className="text-sm text-gray-600">Union Territories</div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-black text-green-600">100%</div>
                <div className="text-sm text-gray-600">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}












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

// export function IndiaMap() {
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
//             <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8">
//               <span className="text-2xl">🇮🇳</span>
//               <span className="text-sm font-semibold text-gray-700">Pan-India Presence</span>
//             </div>
            
//             <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
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
//             <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl p-6 text-white">
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
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center">
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
//         </div>
//       </div>
//     </div>
//   );
// }