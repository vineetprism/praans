// "use client"

// // A simplified SVG map of India with state paths.
// // In a real application, you might use a more detailed SVG or a library like D3/TopoJSON.
// export function IndiaMap() {
//   const states = [
//     { id: "ap", name: "Andhra Pradesh", pos: { cx: 535, cy: 650 } },
//     { id: "ar", name: "Arunachal Pradesh", pos: { cx: 810, cy: 230 } },
//     { id: "as", name: "Assam", pos: { cx: 760, cy: 300 } },
//     { id: "br", name: "Bihar", pos: { cx: 630, cy: 340 } },
//     { id: "cg", name: "Chhattisgarh", pos: { cx: 570, cy: 470 } },
//     { id: "dl", name: "Delhi", pos: { cx: 465, cy: 245 } },
//     { id: "ga", name: "Goa", pos: { cx: 415, cy: 665 } },
//     { id: "gj", name: "Gujarat", pos: { cx: 350, cy: 420 } },
//     { id: "hr", name: "Haryana", pos: { cx: 440, cy: 220 } },
//     { id: "hp", name: "Himachal Pradesh", pos: { cx: 460, cy: 150 } },
//     { id: "jh", name: "Jharkhand", pos: { cx: 630, cy: 400 } },
//     { id: "jk", name: "Jammu and Kashmir", pos: { cx: 420, cy: 80 } },
//     { id: "ka", name: "Karnataka", pos: { cx: 460, cy: 680 } },
//     { id: "kl", name: "Kerala", pos: { cx: 450, cy: 780 } },
//     { id: "mp", name: "Madhya Pradesh", pos: { cx: 490, cy: 420 } },
//     { id: "mh", name: "Maharashtra", pos: { cx: 450, cy: 530 } },
//     { id: "mn", name: "Manipur", pos: { cx: 800, cy: 360 } },
//     { id: "ml", name: "Meghalaya", pos: { cx: 730, cy: 330 } },
//     { id: "mz", name: "Mizoram", pos: { cx: 780, cy: 400 } },
//     { id: "nl", name: "Nagaland", pos: { cx: 810, cy: 320 } },
//     { id: "or", name: "Odisha", pos: { cx: 610, cy: 510 } },
//     { id: "pb", name: "Punjab", pos: { cx: 420, cy: 180 } },
//     { id: "rj", name: "Rajasthan", pos: { cx: 380, cy: 320 } },
//     { id: "sk", name: "Sikkim", pos: { cx: 680, cy: 260 } },
//     { id: "tn", name: "Tamil Nadu", pos: { cx: 490, cy: 780 } },
//     { id: "ts", name: "Telangana", pos: { cx: 510, cy: 580 } },
//     { id: "tr", name: "Tripura", pos: { cx: 750, cy: 380 } },
//     { id: "up", name: "Uttar Pradesh", pos: { cx: 530, cy: 310 } },
//     { id: "uk", name: "Uttarakhand", pos: { cx: 500, cy: 200 } },
//     { id: "wb", name: "West Bengal", pos: { cx: 670, cy: 400 } },
//   ]

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







"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// India map TopoJSON URL
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Your office locations with exact coordinates
const officeLocations = [
  {
    name: "Corporate Office",
    city: "Manesar, Gurugram", 
    address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana- 122052",
    coordinates: [76.9306, 28.3670],
    type: "corporate"
  },
  {
    name: "Regional Office",
    city: "Bangalore",
    address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bangalore – 560054", 
    coordinates: [77.5946, 12.9716],
    type: "regional"
  },
  {
    name: "Regional Office",
    city: "Guwahati",
    address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam-781008",
    coordinates: [91.7362, 26.1445],
    type: "regional"
  }
];

export function IndiaMap() {
  const [tooltip, setTooltip] = useState({
    content: "",
    x: 0,
    y: 0,
    visible: false,
  });

  // const handleMarkerEnter = (evt, office) => {
  //   setTooltip({
  //     content: (
  //       <div className="text-black p-2">
  //         <div className="font-bold text-sm text-gray-900">{office.name}</div>
  //         <div className="text-xs text-orange-600 font-medium">{office.city}</div>
  //         <div className="text-xs text-gray-500 mt-1 max-w-xs leading-relaxed">{office.address}</div>
  //       </div>
  //     ),
  //     x: evt.pageX + 10,
  //     y: evt.pageY + 10,
  //     visible: true,
  //   });
  // };

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
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-blue-100/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Our Physical Presence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With offices across India and presence in every state, we're here to serve you locally
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl p-8 border border-gray-200/50 backdrop-blur-sm">
          {/* Enhanced Tooltip */}
          {tooltip.visible && (
            <div
              className="fixed bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl text-sm z-50 border-2 border-orange-200/50 max-w-xs"
              style={{
                left: tooltip.x,
                top: tooltip.y,
                pointerEvents: "none",
              }}
            >
              {tooltip.content}
            </div>
          )}

          {/* Enhanced India Map */}
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 1100,
              center: [78.9629, 22.5937],
            }}
            width={1000}
            height={600}
            className="drop-shadow-lg"
          >
            <defs>
              {/* Gradient definitions for India map */}
              <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0f9ff" />
                <stop offset="50%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#bae6fd" />
              </linearGradient>
              
              {/* Drop shadow filter */}
              <filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#00000020"/>
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
                      fill="url(#indiaGradient)"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      filter="url(#dropshadow)"
                      style={{
                        default: { 
                          outline: "none",
                          // transition: "all 0.3s ease"
                        },
                        hover: { 
                          outline: "none",
                          filter: "url(#dropshadow) brightness(1.1)"
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
              }
            </Geographies>

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
                  {/* Pulsing animation */}
                  <circle id={`pulse-${index}`} r="20" fill={office.type === 'corporate' ? '#ff6b3520' : '#4285f420'}>
                    <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </defs>

                {/* Pulsing outer ring */}
                <use href={`#pulse-${index}`} />
                
                {/* Outer glow circle */}
                <circle
                  r={16}
                  fill={office.type === 'corporate' ? '#ff6b3530' : '#4285f430'}
                  // className="animate-pulse"
                />
                
                {/* Main marker with gradient */}
                <circle
                  r={10}
                  fill={office.type === 'corporate' ? '#ff6b35' : '#4285f4'}
                  stroke="#ffffff"
                  strokeWidth={3}
                  filter="drop-shadow(2px 2px 4px rgba(0,0,0,0.3))"
                  // className="hover:scale-110 transition-transform duration-300"
                />
                
                {/* Inner highlight */}
                <circle
                  r={4}
                  fill="#ffffff"
                  opacity={0.9}
                />
                
                {/* Small center dot */}
                <circle
                  r={1.5}
                  fill={office.type === 'corporate' ? '#ff6b35' : '#4285f4'}
                />

                {/* Enhanced Office Label */}
                <text
                  textAnchor="middle"
                  y={30}
                  className="fill-gray-800 font-bold text-sm drop-shadow-sm"
                  style={{
                    fontFamily: "system-ui",
                    fontSize: "13px",
                    filter: "drop-shadow(1px 1px 2px rgba(255,255,255,0.8))"
                  }}
                >
                  {office.city}
                </text>
                
                {/* Connecting line to label */}
                <line
                  x1="0"
                  y1="13"
                  x2="0"
                  y2="20"
                  stroke={office.type === 'corporate' ? '#ff6b35' : '#4285f4'}
                  strokeWidth="2"
                  opacity="0.6"
                />
              </Marker>
            ))}
          </ComposableMap>

          {/* Enhanced Legend */}
          <div className="flex justify-center mt-8">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-xl">
              <h4 className="font-bold text-gray-800 mb-4 text-center">Office Locations</h4>
              <div className="flex gap-8">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-5 h-5 bg-orange-500 rounded-full shadow-lg"></div>
                    <div className="absolute -top-1 -left-1 w-7 h-7 bg-orange-200/40 rounded-full "></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Corporate Office</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-5 h-5 bg-blue-500 rounded-full shadow-lg"></div>
                    <div className="absolute -top-1 -left-1 w-7 h-7 bg-blue-200/40 rounded-full "></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Regional Office</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Office Details Cards */}
        {/* <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
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
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-gray-900">{office.city}</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700">{office.address}</p>
              
              
              <div className={`mt-4 h-1 rounded-full ${
                office.type === 'corporate' 
                  ? 'bg-gradient-to-r from-orange-400 to-orange-600' 
                  : 'bg-gradient-to-r from-blue-400 to-blue-600'
              } group-hover:scale-105 transition-transform duration-300`}></div>
            </div>
          ))}
        </div> */}

        {/* Enhanced Presence Statement */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-100 via-white to-blue-100 rounded-3xl p-8 max-w-4xl mx-auto shadow-xl border border-gray-200/50 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Pan-India Coverage</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We have established our physical presence across <strong className="text-orange-600">all Indian states</strong> including 
              Delhi and Jammu & Kashmir, ensuring local expertise and support for your compliance needs wherever your business operates.
            </p>
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