// "use client";

// import React, { useState } from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
//   Annotation,
// } from "react-simple-maps";
// import { geoCentroid } from "d3-geo";

// type Office = {
//   name: string;
//   city: string;
//   address: string;
//   coordinates: [number, number];
//   type: "corporate" | "regional";
//   employees: string;
//   icon: string;
//   phone: string;
//   email: string;
// };

// const geoUrl =
//   "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

// const HIGHLIGHT_HEX = "#eb8535";
// const highlightStates = new Set(["haryana", "karnataka", "assam"]);
// const SHOW_NAME_PREFIX = false; // set true to render "Uttar Pradesh: UP"

// // --- helpers ---
// const norm = (s: string) =>
//   s.toLowerCase().replace(/&/g, "and").replace(/[.\s]+/g, " ").trim();

// const STOP_WORDS = new Set(["and", "of", "the"]);

// // Official-ish short codes (fallback auto-generated if missing)
// const STATE_ABBR: Record<string, string> = {
//   "andaman and nicobar islands": "AN",
//   "andhra pradesh": "AP",
//   "arunachal pradesh": "AR",
//   assam: "AS",
//   bihar: "BR",
//   chandigarh: "CH",
//   chhattisgarh: "CG",
//   "dadra and nagar haveli and daman and diu": "DD",
//   delhi: "DL",
//   goa: "GA",
//   gujarat: "GJ",
//   haryana: "HR",
//   "himachal pradesh": "HP",
//   jharkhand: "JH",
//   karnataka: "KA",
//   kerala: "KL",
//   ladakh: "LA",
//   "jammu and kashmir": "JK",
//   "madhya pradesh": "MP",
//   maharashtra: "MH",
//   manipur: "MN",
//   meghalaya: "ML",
//   mizoram: "MZ",
//   nagaland: "NL",
//   odisha: "OD",
//   puducherry: "PY",
//   punjab: "PB",
//   rajasthan: "RJ",
//   sikkim: "SK",
//   "tamil nadu": "TN",
//   telangana: "TG",
//   tripura: "TR",
//   "uttar pradesh": "UP",
//   uttarakhand: "UK",
//   "west bengal": "WB",
//   lakshadweep: "LD",
// };

// const autoAbbrev = (name: string) =>
//   name
//     .split(/\s+/)
//     .filter((w) => !STOP_WORDS.has(w.toLowerCase()))
//     .map((w) => w[0]?.toUpperCase() ?? "")
//     .join("")
//     .slice(0, 3); // safety cap

// // offsets for tiny/crowded regions
// const LABEL_OFFSETS: Record<
//   string,
//   { dx: number; dy: number; align?: "start" | "middle" | "end" }
// > = {
//   delhi: { dx: 10, dy: 8, align: "start" },
//   "jammu and kashmir": { dx: -8, dy: 10 },
//   ladakh: { dx: 12, dy: -8 },
//   "himachal pradesh": { dx: 8, dy: 12 },
//   punjab: { dx: -10, dy: 14 },
//   haryana: { dx: 6, dy: 16 },
//   sikkim: { dx: 12, dy: -8, align: "start" },
//   goa: { dx: 12, dy: 12 },
//   tripura: { dx: 10, dy: 8, align: "start" },
//   meghalaya: { dx: 10, dy: -6, align: "start" },
//   manipur: { dx: 12, dy: 6, align: "start" },
//   nagaland: { dx: 12, dy: -4, align: "start" },
//   mizoram: { dx: 12, dy: 10, align: "start" },
//   "arunachal pradesh": { dx: -20, dy: -10, align: "end" },
//   "andaman and nicobar islands": { dx: 14, dy: 0, align: "start" },
//   lakshadweep: { dx: 10, dy: 6, align: "start" },
//   "dadra and nagar haveli and daman and diu": { dx: 14, dy: 10, align: "start" },
//   puducherry: { dx: 12, dy: 12, align: "start" },
//   chandigarh: { dx: 12, dy: -8, align: "start" },
// };

// // --- data ---
// const officeLocations: Office[] = [
//   {
//     name: "Corporate Office",
//     city: "Manesar, Gurugram",
//     address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana-122052",
//     coordinates: [76.9306, 28.367],
//     type: "corporate",
//     employees: "150+",
//     icon: "🏢",
//     phone: "+91-124-123-4567",
//     email: "corporate@paraansconsultech.com",
//   },
//   {
//     name: "Regional Office",
//     city: "Bengaluru",
//     address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bengaluru – 560054",
//     coordinates: [77.5946, 12.9716],
//     type: "regional",
//     employees: "80+",
//     icon: "🏢",
//     phone: "+91-80-123-4567",
//     email: "bangalore@paraansconsultech.com",
//   },
//   {
//     name: "Regional Office",
//     city: "Guwahati",
//     address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam-781008",
//     coordinates: [91.7362, 26.1445],
//     type: "regional",
//     employees: "60+",
//     icon: "🏢",
//     phone: "+91-361-123-4567",
//     email: "guwahati@paraansconsultech.com",
//   },
// ];

// // Build a Google Maps directions URL to the office (from current location)
// const getDirectionsUrl = (office: Office) => {
//   // office.coordinates are [lon, lat]; Google expects "lat,lng"
//   const [lon, lat] = office.coordinates;
//   const destination = `${lat},${lon}`;
//   return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
//     destination
//   )}&travelmode=driving&dir_action=navigate`;
// };

// export default function Locations() {
//   const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
//       {/* Header */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
//         <div className="relative z-10 py-14">
//           <div className="container mx-auto px-6 text-center text-white">
//             <h1 className="text-5xl md:text-6xl font-black mb-4">
//               Pan-India{" "}
//               <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
//                 Presence
//               </span>
//             </h1>
//             <p className="text-gray-300 max-w-3xl mx-auto">
//               Strategic locations across India with offices in Haryana, Karnataka,
//               and Assam.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Map + Sidebar */}
//       <div className="container mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8 items-start">
//         {/* Map */}
//         <div className="lg:col-span-2">
//           <div className="bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">India Office Locations</h2>
//             <p className="text-sm text-gray-600 mb-3">
//               Offices in Haryana (HQ), Karnataka, and Assam. Click markers for details.
//             </p>

//             <div className="w-full overflow-hidden rounded-lg">
//               <ComposableMap
//                 projection="geoMercator"
//                 projectionConfig={{ scale: 760, center: [80.5, 22] }}
//                 width={900}
//                 height={640}
//                 preserveAspectRatio="xMidYMid meet"
//                 className="w-full h-auto border border-gray-200 rounded-lg"
//               >
//                 {/* States */}
//                 <Geographies geography={geoUrl}>
//                   {({ geographies }) =>
//                     geographies.map((geo) => {
//                       const rawName =
//                         geo.properties?.ST_NM ||
//                         geo.properties?.NAME_1 ||
//                         geo.properties?.name ||
//                         geo.properties?.st_nm ||
//                         "";
//                       const key = norm(String(rawName));
//                       const isHL = highlightStates.has(key);

//                       return (
//                         <Geography
//                           key={geo.rsmKey}
//                           geography={geo}
//                           fill={isHL ? HIGHLIGHT_HEX : "#d1d5db"}
//                           stroke="#9ca3af"
//                           strokeWidth={1}
//                           style={{
//                             default: { outline: "none" },
//                             hover: {
//                               outline: "none",
//                               fill: isHL ? "#d97706" : "#e5e7eb",
//                               transition: "all 0.2s ease",
//                             },
//                             pressed: { outline: "none" },
//                           }}
//                         />
//                       );
//                     })
//                   }
//                 </Geographies>

//                 {/* Short-form labels (DL, UP, KA...) with full-name tooltip */}
//                 <Geographies geography={geoUrl}>
//                   {({ geographies }) =>
//                     geographies.map((geo) => {
//                       const rawName =
//                         geo.properties?.ST_NM ||
//                         geo.properties?.NAME_1 ||
//                         geo.properties?.name ||
//                         geo.properties?.st_nm ||
//                         "";
//                       if (!rawName) return null;

//                       const key = norm(String(rawName));
//                       const centroid = geoCentroid(geo) as [number, number];
//                       const offset = LABEL_OFFSETS[key];
//                       const isHL = highlightStates.has(key);

//                       const abbr = STATE_ABBR[key] || autoAbbrev(String(rawName));
//                       const textContent = SHOW_NAME_PREFIX
//                         ? `${String(rawName)}: ${abbr}`
//                         : abbr;

//                       const label = (
//                         <text
//                           className="pointer-events-none select-none"
//                           textAnchor={offset?.align || "middle"}
//                           style={{
//                             fontSize: isHL ? 12 : 11,
//                             fontWeight: 700,
//                             fill: "#111827",
//                             stroke: "white",
//                             strokeWidth: 2,
//                             paintOrder: "stroke",
//                           }}
//                         >
//                           <title>{String(rawName)}</title>
//                           {textContent}
//                         </text>
//                       );

//                       return offset ? (
//                         <Annotation
//                           key={`${geo.rsmKey}-label`}
//                           subject={centroid}
//                           dx={offset.dx}
//                           dy={offset.dy}
//                           connectorProps={{
//                             stroke: "#9ca3af",
//                             strokeWidth: 0.6,
//                             strokeLinecap: "round",
//                           }}
//                         >
//                           {label}
//                         </Annotation>
//                       ) : (
//                         <Marker key={`${geo.rsmKey}-label`} coordinates={centroid}>
//                           {label}
//                         </Marker>
//                       );
//                     })
//                   }
//                 </Geographies>

//                 {/* Office markers */}
//                 {officeLocations.map((office) => (
//                   <Marker
//                     key={office.city}
//                     coordinates={office.coordinates}
//                     onClick={() =>
//                       setSelectedOffice(
//                         selectedOffice?.city === office.city ? null : office
//                       )
//                     }
//                     className="cursor-pointer"
//                   >
//                     <circle r={20} fill={HIGHLIGHT_HEX} opacity="0.15" className="animate-ping" />
//                     <circle r={12} fill={HIGHLIGHT_HEX} opacity="0.25" className="animate-pulse" />
//                     <circle r={8} fill={HIGHLIGHT_HEX} stroke="#fff" strokeWidth={3} />
//                     <text
//                       y={30}
//                       textAnchor="middle"
//                       className="pointer-events-none"
//                       style={{ fontSize: 12, fontWeight: 700, fill: "#111827" }}
//                     >
//                       {office.city.split(",")[0]}
//                     </text>
//                     <text
//                       y={42}
//                       textAnchor="middle"
//                       className="pointer-events-none"
//                       style={{ fontSize: 9, fontWeight: 600, fill: "#ea580c" }}
//                     >
//                       {office.type === "corporate" ? "HQ" : "Regional"}
//                     </text>
//                   </Marker>
//                 ))}
//               </ComposableMap>
//             </div>

//             {/* Legend */}
//             <div className="flex justify-center mt-4">
//               <div className="bg-orange-50 rounded-xl p-3 border border-orange-200 text-sm">
//                 <div className="flex flex-wrap justify-center gap-6">
//                   <div className="flex items-center gap-2">
//                     <span
//                       className="inline-block w-4 h-4 rounded-full"
//                       style={{ background: HIGHLIGHT_HEX }}
//                     />
//                     <span className="font-medium text-gray-700">States with Offices</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="inline-block w-4 h-4 rounded-full bg-gray-300" />
//                     <span className="font-medium text-gray-700">Other States</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="space-y-6">
//           <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//             <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
//               <span className="text-orange-600">📍</span>
//               Our Offices
//             </h3>
//             <div className="space-y-4">
//               {officeLocations.map((o) => {
//                 const isSel = selectedOffice?.city === o.city;
//                 return (
//                   <div
//                     key={o.city}
//                     className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
//                       isSel
//                         ? "border-orange-300 bg-orange-50 shadow"
//                         : "border-gray-200 bg-gray-50 hover:border-orange-200 hover:bg-orange-50/30"
//                     }`}
//                     onClick={() => setSelectedOffice(isSel ? null : o)}
//                   >
//                     <div className="flex items-start gap-3">
//                       <span className="text-xl">{o.icon}</span>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-2 mb-1">
//                           <h4 className="font-bold text-gray-900">{o.city}</h4>
//                           <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
//                             {o.type === "corporate" ? "Corporate HQ" : "Regional Office"}
//                           </span>
//                         </div>
//                         <p className="text-sm text-gray-600 mb-1">{o.address}</p>
//                         <div className="text-xs text-gray-500">{o.employees} team members</div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {selectedOffice && (
//             <div className="bg-[#2a3154] rounded-xl shadow-lg p-6 text-white border border-orange-200">
//               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//                 Contact Information
//               </h3>
//               <div className="space-y-3">
//                 <div className="bg-white/10 rounded-lg p-3 border border-orange-600/20">
//                   <div className="text-orange-200 text-sm mb-1">Office</div>
//                   <div className="font-semibold">{selectedOffice.name}</div>
//                   <div className="text-sm text-gray-300">{selectedOffice.city}</div>
//                 </div>
//                 <div className="bg-white/10 rounded-lg p-3 border border-orange-600/20">
//                   <div className="text-orange-200 text-sm mb-1">Phone</div>
//                   <div className="font-semibold">{selectedOffice.phone}</div>
//                 </div>
//                 <div className="bg-white/10 rounded-lg p-3 border border-orange-600/20">
//                   <div className="text-orange-200 text-sm mb-1">Email</div>
//                   <div className="font-semibold">{selectedOffice.email}</div>
//                 </div>
//               </div>

//               {/* Get Directions button with arrow + redirect */}
//               <button
//                 type="button"
//                 aria-label="Get Google Maps directions"
//                 onClick={() => window.open(getDirectionsUrl(selectedOffice), "_blank")}
//                 className="w-full mt-4 bg-[#eb8535] hover:bg-[#e07022] text-white font-semibold py-3 px-4 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
//               >
//                 Get Directions
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform"
//                   aria-hidden="true"
//                 >
//                   <path d="M13.5 4.5l7 7-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                 </svg>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }





// "use client";

// import React, { useState } from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
//   Annotation,
// } from "react-simple-maps";
// import { geoCentroid } from "d3-geo";

// type Office = {
//   name: string;
//   city: string;
//   address: string;
//   coordinates: [number, number];
//   type: "corporate" | "regional";
//   employees: string;
//   icon: string;
//   phone: string;
//   email: string;
// };

// const geoUrl =
//   "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

// const HIGHLIGHT_HEX = "#eb8535";
// const highlightStates = new Set(["haryana", "karnataka", "assam"]);
// const SHOW_NAME_PREFIX = false;

// const norm = (s: string) =>
//   s.toLowerCase().replace(/&/g, "and").replace(/[.\s]+/g, " ").trim();

// const STOP_WORDS = new Set(["and", "of", "the"]);

// const STATE_ABBR: Record<string, string> = {
//   "andaman and nicobar islands": "AN",
//   "andhra pradesh": "AP",
//   "arunachal pradesh": "AR",
//   assam: "AS",
//   bihar: "BR",
//   chandigarh: "CH",
//   chhattisgarh: "CG",
//   "dadra and nagar haveli and daman and diu": "DD",
//   delhi: "DL",
//   goa: "GA",
//   gujarat: "GJ",
//   haryana: "HR",
//   "himachal pradesh": "HP",
//   jharkhand: "JH",
//   karnataka: "KA",
//   kerala: "KL",
//   ladakh: "LA",
//   "jammu and kashmir": "JK",
//   "madhya pradesh": "MP",
//   maharashtra: "MH",
//   manipur: "MN",
//   meghalaya: "ML",
//   mizoram: "MZ",
//   nagaland: "NL",
//   odisha: "OD",
//   puducherry: "PY",
//   punjab: "PB",
//   rajasthan: "RJ",
//   sikkim: "SK",
//   "tamil nadu": "TN",
//   telangana: "TG",
//   tripura: "TR",
//   "uttar pradesh": "UP",
//   uttarakhand: "UK",
//   "west bengal": "WB",
//   lakshadweep: "LD",
// };

// const autoAbbrev = (name: string) =>
//   name
//     .split(/\s+/)
//     .filter((w) => !STOP_WORDS.has(w.toLowerCase()))
//     .map((w) => w[0]?.toUpperCase() ?? "")
//     .join("")
//     .slice(0, 3);

// const LABEL_OFFSETS: Record<
//   string,
//   { dx: number; dy: number; align?: "start" | "middle" | "end" }
// > = {
//   delhi: { dx: 10, dy: 8, align: "start" },
//   "jammu and kashmir": { dx: -8, dy: 10 },
//   ladakh: { dx: 12, dy: -8 },
//   "himachal pradesh": { dx: 8, dy: 12 },
//   punjab: { dx: -10, dy: 14 },
//   haryana: { dx: 6, dy: 16 },
//   sikkim: { dx: 12, dy: -8, align: "start" },
//   goa: { dx: 12, dy: 12 },
//   tripura: { dx: 10, dy: 8, align: "start" },
//   meghalaya: { dx: 10, dy: -6, align: "start" },
//   manipur: { dx: 12, dy: 6, align: "start" },
//   nagaland: { dx: 12, dy: -4, align: "start" },
//   mizoram: { dx: 12, dy: 10, align: "start" },
//   "arunachal pradesh": { dx: -20, dy: -10, align: "end" },
//   "andaman and nicobar islands": { dx: 14, dy: 0, align: "start" },
//   lakshadweep: { dx: 10, dy: 6, align: "start" },
//   "dadra and nagar haveli and daman and diu": { dx: 14, dy: 10, align: "start" },
//   puducherry: { dx: 12, dy: 12, align: "start" },
//   chandigarh: { dx: 12, dy: -8, align: "start" },
// };

// const STATE_PALETTE = [
//   "#fde68a", "#fdba74", "#fecaca", "#fbcfe8", "#c7d2fe", "#bfdbfe",
//   "#bae6fd", "#a5f3fc", "#99f6e4", "#a7f3d0", "#bbf7d0", "#d9f99d",
//   "#fef08a", "#fcd34d", "#fda4af", "#f9a8d4", "#e9d5ff", "#c4b5fd",
//   "#a5b4fc", "#93c5fd", "#7dd3fc", "#67e8f9", "#5eead4", "#6ee7b7",
//   "#86efac", "#bef264", "#fde047", "#fed7aa", "#fecdd3", "#f5d0fe",
//   "#e2e8f0", "#cbd5e1", "#d6d3d1", "#e7e5e4", "#ffe4e6", "#ddd6fe",
// ];

// const colorForState = (stateKey: string) => {
//   let h = 0;
//   for (let i = 0; i < stateKey.length; i++) {
//     h = (h << 5) - h + stateKey.charCodeAt(i);
//     h |= 0;
//   }
//   const idx = Math.abs(h) % STATE_PALETTE.length;
//   return STATE_PALETTE[idx];
// };

// const officeLocations: Office[] = [
//   {
//     name: "Corporate Office",
//     city: "Manesar, Gurugram",
//     address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana-122052",
//     coordinates: [76.9306, 28.367],
//     type: "corporate",
//     employees: "150+",
//     icon: "🏢",
//     phone: "+91-124-123-4567",
//     email: "corporate@paraansconsultech.com",
//   },
//   {
//     name: "Regional Office",
//     city: "Bengaluru",
//     address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bengaluru – 560054",
//     coordinates: [77.5946, 12.9716],
//     type: "regional",
//     employees: "80+",
//     icon: "🏢",
//     phone: "+91-80-123-4567",
//     email: "bangalore@paraansconsultech.com",
//   },
//   {
//     name: "Regional Office",
//     city: "Guwahati",
//     address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam-781008",
//     coordinates: [91.7362, 26.1445],
//     type: "regional",
//     employees: "60+",
//     icon: "🏢",
//     phone: "+91-361-123-4567",
//     email: "guwahati@paraansconsultech.com",
//   },
// ];

// const getDirectionsUrl = (office: Office) => {
//   const [lon, lat] = office.coordinates; // [lon, lat]
//   const destination = `${lat},${lon}`;   // Google expects lat,lng
//   return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
//     destination
//   )}&travelmode=driving&dir_action=navigate`;
// };

// export default function Locations() {
//   const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
//       {/* Header */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
//         <div className="relative z-10 py-14">
//           <div className="container mx-auto px-6 text-center text-white">
//             <h1 className="text-5xl md:text-6xl font-black mb-4">
//               Pan-India{" "}
//               <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
//                 Presence
//               </span>
//             </h1>
//             <p className="text-gray-300 max-w-3xl mx-auto">
//               Strategic locations across India with offices in Haryana, Karnataka,
//               and Assam.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Map + Sidebar */}
//       <div className="container mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8 items-start">
//         {/* Map */}
//         <div className="lg:col-span-2">
//           <div className="bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">India Office Locations</h2>
//             <p className="text-sm text-gray-600 mb-3">
//               Offices in Haryana (HQ), Karnataka, and Assam. Click markers for details.
//             </p>

//             <div className="w-full overflow-hidden rounded-lg">
//               <ComposableMap
//                 projection="geoMercator"
//                 projectionConfig={{ scale: 760, center: [80.5, 22] }}
//                 width={900}
//                 height={640}
//                 preserveAspectRatio="xMidYMid meet"
//                 className="w-full h-auto border border-gray-200 rounded-lg"
//               >
//                 {/* States */}
//                 <Geographies geography={geoUrl}>
//                   {({ geographies }) =>
//                     geographies.map((geo) => {
//                       const rawName =
//                         geo.properties?.ST_NM ||
//                         geo.properties?.NAME_1 ||
//                         geo.properties?.name ||
//                         geo.properties?.st_nm ||
//                         "";
//                       const key = norm(String(rawName));
//                       const isHL = highlightStates.has(key);

//                       const fillColor = isHL
//                         ? HIGHLIGHT_HEX
//                         : colorForState(key);

//                       return (
//                         <Geography
//                           key={geo.rsmKey}
//                           geography={geo}
//                           fill={fillColor}
//                           stroke="#9ca3af"
//                           strokeWidth={1}
//                           style={{
//                             default: { outline: "none" },
//                             hover: {
//                               outline: "none",
//                               opacity: 0.9,
//                               transition: "all 0.2s ease",
//                             },
//                             pressed: { outline: "none" },
//                           }}
//                         />
//                       );
//                     })
//                   }
//                 </Geographies>

//                 {/* Short-form labels (DL, UP, KA...) with full-name tooltip */}
//                 <Geographies geography={geoUrl}>
//                   {({ geographies }) =>
//                     geographies.map((geo) => {
//                       const rawName =
//                         geo.properties?.ST_NM ||
//                         geo.properties?.NAME_1 ||
//                         geo.properties?.name ||
//                         geo.properties?.st_nm ||
//                         "";
//                       if (!rawName) return null;

//                       const key = norm(String(rawName));
//                       const centroid = geoCentroid(geo) as [number, number];
//                       const offset = LABEL_OFFSETS[key];
//                       const isHL = highlightStates.has(key);

//                       const abbr = STATE_ABBR[key] || autoAbbrev(String(rawName));
//                       const textContent = SHOW_NAME_PREFIX
//                         ? `${String(rawName)}: ${abbr}`
//                         : abbr;

//                       const label = (
//                         <text
//                           className="pointer-events-none select-none"
//                           textAnchor={offset?.align || "middle"}
//                           style={{
//                             fontSize: isHL ? 12 : 11,
//                             fontWeight: 700,
//                             fill: "#111827",
//                             stroke: "white",
//                             strokeWidth: 2,
//                             paintOrder: "stroke",
//                           }}
//                         >
//                           <title>{String(rawName)}</title>
//                           {textContent}
//                         </text>
//                       );

//                       return offset ? (
//                         <Annotation
//                           key={`${geo.rsmKey}-label`}
//                           subject={centroid}
//                           dx={offset.dx}
//                           dy={offset.dy}
//                           connectorProps={{
//                             stroke: "#9ca3af",
//                             strokeWidth: 0.6,
//                             strokeLinecap: "round",
//                           }}
//                         >
//                           {label}
//                         </Annotation>
//                       ) : (
//                         <Marker key={`${geo.rsmKey}-label`} coordinates={centroid}>
//                           {label}
//                         </Marker>
//                       );
//                     })
//                   }
//                 </Geographies>

//                 {/* Office markers */}
//                 {officeLocations.map((office) => (
//                   <Marker
//                     key={office.city}
//                     coordinates={office.coordinates}
//                     onClick={() =>
//                       setSelectedOffice(
//                         selectedOffice?.city === office.city ? null : office
//                       )
//                     }
//                     className="cursor-pointer"
//                   >
//                     <circle r={20} fill={HIGHLIGHT_HEX} opacity="0.15" className="animate-ping" />
//                     <circle r={12} fill={HIGHLIGHT_HEX} opacity="0.25" className="animate-pulse" />
//                     <circle r={2} fill={HIGHLIGHT_HEX} stroke="#fff" strokeWidth={3} />
//                     <text
//                       y={30}
//                       textAnchor="middle"
//                       className="pointer-events-none"
//                       style={{ fontSize: 12, fontWeight: 700, fill: "#111827" }}
//                     >
//                       {office.city.split(",")[0]}
//                     </text>
//                     <text
//                       y={42}
//                       textAnchor="middle"
//                       className="pointer-events-none"
//                       style={{ fontSize: 9, fontWeight: 600, fill: "#ea580c" }}
//                     >
//                       {office.type === "corporate" ? "HQ" : "Regional"}
//                     </text>
//                   </Marker>
//                 ))}
//               </ComposableMap>
//             </div>

//             {/* Legend */}
//             <div className="flex justify-center mt-4">
//               <div className="bg-orange-50 rounded-xl p-3 border border-orange-200 text-sm">
//                 <div className="flex flex-wrap justify-center gap-6">
//                   <div className="flex items-center gap-2">
//                     <span
//                       className="inline-block w-4 h-4 rounded-full"
//                       style={{ background: HIGHLIGHT_HEX }}
//                     />
//                     <span className="font-medium text-gray-700">Office States (highlighted)</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-r from-amber-300 to-sky-300" />
//                     <span className="font-medium text-gray-700">Other States (varied colors)</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="space-y-6">
//           <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//             <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
//               <span className="text-orange-600">📍</span>
//               Our Offices
//             </h3>
//             <div className="space-y-4">
//               {officeLocations.map((o) => {
//                 const isSel = selectedOffice?.city === o.city;
//                 return (
//                   <div
//                     key={o.city}
//                     className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
//                       isSel
//                         ? "border-orange-300 bg-orange-50 shadow"
//                         : "border-gray-200 bg-gray-50 hover:border-orange-200 hover:bg-orange-50/30"
//                     }`}
//                     onClick={() => setSelectedOffice(isSel ? null : o)}
//                   >
//                     <div className="flex items-start gap-3">
//                       <span className="text-xl">{o.icon}</span>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-2 mb-1">
//                           <h4 className="font-bold text-gray-900">{o.city}</h4>
//                           <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
//                             {o.type === "corporate" ? "Corporate HQ" : "Regional Office"}
//                           </span>
//                         </div>
//                         <p className="text-sm text-gray-600 mb-1">{o.address}</p>
//                         <div className="text-xs text-gray-500">{o.employees} team members</div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {selectedOffice && (
//             <div className="bg-[#2a3154] rounded-xl shadow-lg p-6 text-white border border-orange-200">
//               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//                 Contact Information
//               </h3>
//               <div className="space-y-3">
//                 <div className="bg-white/10 rounded-lg p-3 border border-orange-600/20">
//                   <div className="text-orange-200 text-sm mb-1">Office</div>
//                   <div className="font-semibold">{selectedOffice.name}</div>
//                   <div className="text-sm text-gray-300">{selectedOffice.city}</div>
//                 </div>
//                 <div className="bg-white/10 rounded-lg p-3 border border-orange-600/20">
//                   <div className="text-orange-200 text-sm mb-1">Phone</div>
//                   <div className="font-semibold">{selectedOffice.phone}</div>
//                 </div>
//                 <div className="bg-white/10 rounded-lg p-3 border border-orange-600/20">
//                   <div className="text-orange-200 text-sm mb-1">Email</div>
//                   <div className="font-semibold">{selectedOffice.email}</div>
//                 </div>
//               </div>

//               {/* Get Directions button with arrow + redirect */}
//               <button
//                 type="button"
//                 aria-label="Get Google Maps directions"
//                 onClick={() => window.open(getDirectionsUrl(selectedOffice), "_blank")}
//                 className="w-full mt-4 bg-[#eb8535] hover:bg-[#e07022] text-white font-semibold py-3 px-4 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
//               >
//                 Get Directions
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform"
//                   aria-hidden="true"
//                 >
//                   <path d="M13.5 4.5l7 7-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                 </svg>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
// } from "react-simple-maps";

// type Office = {
//   name: string;
//   city: string;
//   address: string;
//   coordinates: [number, number];
//   type: "corporate" | "regional";
//   employees: string;
//   icon: string;
//   phone: string;
//   email: string;
// };

// const geoUrl =
//   "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

// const HIGHLIGHT_HEX = "#eb8535";
// const highlightStates = new Set(["haryana", "karnataka", "assam"]);

// // --- helpers ---
// const norm = (s: string) =>
//   s.toLowerCase().replace(/&/g, "and").replace(/[.\s]+/g, " ").trim();

// // --- data ---
// const officeLocations: Office[] = [
//   {
//     name: "Corporate Office",
//     city: "Manesar, Gurugram",
//     address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana-122052",
//     coordinates: [76.9306, 28.367],
//     type: "corporate",
//     employees: "150+",
//     icon: "🏢",
//     phone: "+91-124-123-4567",
//     email: "corporate@paraansconsultech.com",
//   },
//   {
//     name: "Regional Office",
//     city: "Bengaluru",
//     address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bengaluru – 560054",
//     coordinates: [77.5946, 12.9716],
//     type: "regional",
//     employees: "80+",
//     icon: "🏢",
//     phone: "+91-80-123-4567",
//     email: "bangalore@paraansconsultech.com",
//   },
//   {
//     name: "Regional Office",
//     city: "Guwahati",
//     address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam-781008",
//     coordinates: [91.7362, 26.1445],
//     type: "regional",
//     employees: "60+",
//     icon: "🏢",
//     phone: "+91-361-123-4567",
//     email: "guwahati@paraansconsultech.com",
//   },
// ];

// // Build a Google Maps directions URL to the office (from current location)
// const getDirectionsUrl = (office: Office) => {
//   // office.coordinates are [lon, lat]; Google expects "lat,lng"
//   const [lon, lat] = office.coordinates;
//   const destination = `${lat},${lon}`;
//   return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
//     destination
//   )}&travelmode=driving&dir_action=navigate`;
// };

// export default function Locations() {
//   const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
//       {/* Header */}
//       <div className="relative overflow-hidden py-20 bg-gray-50">
//         <div className="relative z-10 py-14">
//           <div className="container mx-auto px-6 text-center text-white">
//             <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
//               Pan-India{" "}
//               <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
//                 Presence
//               </span>
//               {/* <Image src="/services/parliament.svg" alt="logo" width={50} height={50} className="inline-block mr-4"/> */}
//             </h1>
//             <p className="text-gray-500 max-w-3xl mx-auto">
//               Strategic locations across India with offices in Haryana, Karnataka,
//               and Assam.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Map + Sidebar */}
//       <div className="container mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8 items-start">
//         {/* Map */}
//         <div className="lg:col-span-2">
//           <div className="bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">India Office Locations</h2>
//             <p className="text-sm text-gray-600 mb-3">
//               Offices in Haryana (HQ), Karnataka, and Assam. Click markers for details.
//             </p>

//             <div className="w-full overflow-hidden rounded-lg">
//               <ComposableMap
//                 projection="geoMercator"
//                 projectionConfig={{ scale: 760, center: [80.5, 22] }}
//                 width={900}
//                 height={640}
//                 preserveAspectRatio="xMidYMid meet"
//                 className="w-full h-auto border border-gray-200 rounded-lg"
//               >
//                 {/* States (only office states colored; others transparent) */}
//                 <Geographies geography={geoUrl}>
//                   {({ geographies }) =>
//                     geographies.map((geo) => {
//                       const rawName =
//                         geo.properties?.ST_NM ||
//                         geo.properties?.NAME_1 ||
//                         geo.properties?.name ||
//                         geo.properties?.st_nm ||
//                         "";
//                       const key = norm(String(rawName));
//                       const isHL = highlightStates.has(key);

//                       return (
//                         <Geography
//                           key={geo.rsmKey}
//                           geography={geo}
//                           fill={isHL ? HIGHLIGHT_HEX : "transparent"}
//                           stroke="#9ca3af"
//                           strokeWidth={1}
//                           style={{
//                             default: { outline: "none" },
//                             hover: {
//                               outline: "none",
//                               fill: isHL ? "#d97706" : "transparent",
//                               transition: "all 0.2s ease",
//                             },
//                             pressed: { outline: "none" },
//                           }}
//                         />
//                       );
//                     })
//                   }
//                 </Geographies>

//                 {/* Office markers */}
//                 {officeLocations.map((office) => (
//                   <Marker
//                     key={office.city}
//                     coordinates={office.coordinates}
//                     onClick={() =>
//                       setSelectedOffice(
//                         selectedOffice?.city === office.city ? null : office
//                       )
//                     }
//                     className="cursor-pointer"
//                   >
//                     <circle r={20} fill={HIGHLIGHT_HEX} opacity="0.15" className="animate-ping" />
//                     <circle r={12} fill={HIGHLIGHT_HEX} opacity="0.25" className="animate-pulse" />
//                     <circle r={4} fill={HIGHLIGHT_HEX} stroke="#fff" strokeWidth={3} />
//                     <text
//                       y={30}
//                       textAnchor="middle"
//                       className="pointer-events-none"
//                       style={{ fontSize: 12, fontWeight: 700, fill: "#111827" }}
//                     >
//                       {office.city.split(",")[0]}
//                     </text>
//                     <text
//                       y={42}
//                       textAnchor="middle"
//                       className="pointer-events-none"
//                       style={{ fontSize: 9, fontWeight: 600, fill: "#ea580c" }}
//                     >
//                       {office.type === "corporate" ? "HQ" : "Regional"}
//                     </text>
//                   </Marker>
//                 ))}
//               </ComposableMap>
//             </div>

//             {/* Legend (only office states) */}
//             <div className="flex justify-center mt-4">
//               <div className="bg-orange-50 rounded-xl p-3 border border-orange-200 text-sm">
//                 <div className="flex flex-wrap justify-center gap-6">
//                   <div className="flex items-center gap-2">
//                     <span
//                       className="inline-block w-4 h-4 rounded-full"
//                       style={{ background: HIGHLIGHT_HEX }}
//                     />
//                     <span className="font-medium text-gray-700">States with Offices</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="space-y-6">
//           <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//             <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
//               <span className="text-orange-600">📍</span>
//               Our Offices
//             </h3>
//             <div className="space-y-4">
//               {officeLocations.map((o) => {
//                 const isSel = selectedOffice?.city === o.city;
//                 return (
//                   <div
//                     key={o.city}
//                     className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
//                       isSel
//                         ? "border-orange-300 bg-orange-50 shadow"
//                         : "border-gray-200 bg-gray-50 hover:border-orange-200 hover:bg-orange-50/30"
//                     }`}
//                     onClick={() => setSelectedOffice(isSel ? null : o)}
//                   >
//                     <div className="flex items-start gap-3">
//                       <span className="text-xl">{o.icon}</span>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-2 mb-1">
//                           <h4 className="font-bold text-gray-900">{o.city}</h4>
//                           <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
//                             {o.type === "corporate" ? "Corporate HQ" : "Regional Office"}
//                           </span>
//                         </div>
//                         <p className="text-sm text-gray-600 mb-1">{o.address}</p>
//                         <div className="text-xs text-gray-500">{o.employees} team members</div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {selectedOffice && (
//             <div className="bg-[#2a3154] rounded-xl shadow-lg p-6 text-white border border-orange-200">
//               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//                 Contact Information
//               </h3>
//               <div className="space-y-3">
//                 <div className="bg-white/10 rounded-lg p-3 border border-orange-600/20">
//                   <div className="text-orange-200 text-sm mb-1">Office</div>
//                   <div className="font-semibold">{selectedOffice.name}</div>
//                   <div className="text-sm text-gray-300">{selectedOffice.city}</div>
//                 </div>
//                 <div className="bg-white/10 rounded-lg p-3 border border-orange-600/20">
//                   <div className="text-orange-200 text-sm mb-1">Phone</div>
//                   <div className="font-semibold">{selectedOffice.phone}</div>
//                 </div>
//                 <div className="bg-white/10 rounded-lg p-3 border border-orange-600/20">
//                   <div className="text-orange-200 text-sm mb-1">Email</div>
//                   <div className="font-semibold">{selectedOffice.email}</div>
//                 </div>
//               </div>

//               {/* Get Directions button with arrow + redirect */}
//               <button
//                 type="button"
//                 aria-label="Get Google Maps directions"
//                 onClick={() => window.open(getDirectionsUrl(selectedOffice), "_blank")}
//                 className="w-full mt-4 bg-[#eb8535] hover:bg-[#e07022] text-white font-semibold py-3 px-4 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
//               >
//                 Get Directions
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform"
//                   aria-hidden="true"
//                 >
//                   <path d="M13.5 4.5l7 7-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                 </svg>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


 
"use client";
 
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
 
type Office = {
  name: string;
  city: string;
  address: string;
  coordinates: [number, number];
  type: "corporate" | "regional";
  employees: string;
  icon: string;
  phone: string;
  email: string;
};
 
const geoUrl =
  "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";
 
const HIGHLIGHT_HEX = "#eb8535";
const highlightStates = new Set(["haryana", "karnataka", "assam"]);
const SHOW_NAME_PREFIX = false; // set true to render "Uttar Pradesh: UP"
 
// --- helpers ---
const norm = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[.\s]+/g, " ").trim();
 
const STOP_WORDS = new Set(["and", "of", "the"]);
 
// Official-ish short codes (fallback auto-generated if missing)
const STATE_ABBR: Record<string, string> = {
  "andaman and nicobar islands": "AN",
  "andhra pradesh": "AP",
  "arunachal pradesh": "AR",
  assam: "AS",
  bihar: "BR",
  chandigarh: "CH",
  chhattisgarh: "CG",
  "dadra and nagar haveli and daman and diu": "DD",
  delhi: "DL",
  goa: "GA",
  gujarat: "GJ",
  haryana: "HR",
  "himachal pradesh": "HP",
  jharkhand: "JH",
  karnataka: "KA",
  kerala: "KL",
  ladakh: "LA",
  "jammu and kashmir": "JK",
  "madhya pradesh": "MP",
  maharashtra: "MH",
  manipur: "MN",
  meghalaya: "ML",
  mizoram: "MZ",
  nagaland: "NL",
  odisha: "OD",
  puducherry: "PY",
  punjab: "PB",
  rajasthan: "RJ",
  sikkim: "SK",
  "tamil nadu": "TN",
  telangana: "TG",
  tripura: "TR",
  "uttar pradesh": "UP",
  uttarakhand: "UK",
  "west bengal": "WB",
  lakshadweep: "LD",
};
 
const autoAbbrev = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => !STOP_WORDS.has(w.toLowerCase()))
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 3); // safety cap
 
// offsets for tiny/crowded regions
const LABEL_OFFSETS: Record<
  string,
  { dx: number; dy: number; align?: "start" | "middle" | "end" }
> = {
  delhi: { dx: 10, dy: 8, align: "start" },
  "jammu and kashmir": { dx: -8, dy: 10 },
  ladakh: { dx: 12, dy: -8 },
  "himachal pradesh": { dx: 8, dy: 12 },
  punjab: { dx: -10, dy: 14 },
  haryana: { dx: 6, dy: 16 },
  sikkim: { dx: 12, dy: -8, align: "start" },
  goa: { dx: 12, dy: 12 },
  tripura: { dx: 10, dy: 8, align: "start" },
  meghalaya: { dx: 10, dy: -6, align: "start" },
  manipur: { dx: 12, dy: 6, align: "start" },
  nagaland: { dx: 12, dy: -4, align: "start" },
  mizoram: { dx: 12, dy: 10, align: "start" },
  "arunachal pradesh": { dx: -20, dy: -10, align: "end" },
  "andaman and nicobar islands": { dx: 14, dy: 0, align: "start" },
  lakshadweep: { dx: 10, dy: 6, align: "start" },
  "dadra and nagar haveli and daman and diu": { dx: 14, dy: 10, align: "start" },
  puducherry: { dx: 12, dy: 12, align: "start" },
  chandigarh: { dx: 12, dy: -8, align: "start" },
};
 
// --- colorful palette (36+ soft, readable colors) ---
const STATE_PALETTE = [
  "#fde68a", "#fdba74", "#fecaca", "#fbcfe8", "#c7d2fe", "#bfdbfe",
  "#bae6fd", "#a5f3fc", "#99f6e4", "#a7f3d0", "#bbf7d0", "#d9f99d",
  "#fef08a", "#fcd34d", "#fda4af", "#f9a8d4", "#e9d5ff", "#c4b5fd",
  "#a5b4fc", "#93c5fd", "#7dd3fc", "#67e8f9", "#5eead4", "#6ee7b7",
  "#86efac", "#bef264", "#fde047", "#fed7aa", "#fecdd3", "#f5d0fe",
  "#e2e8f0", "#cbd5e1", "#d6d3d1", "#e7e5e4", "#ffe4e6", "#ddd6fe",
];
 
// deterministic hash → stable color per state
const colorForState = (stateKey: string) => {
  let h = 0;
  for (let i = 0; i < stateKey.length; i++) {
    h = (h << 5) - h + stateKey.charCodeAt(i);
    h |= 0;
  }
  const idx = Math.abs(h) % STATE_PALETTE.length;
  return STATE_PALETTE[idx];
};
 
// --- data ---
const officeLocations: Office[] = [
  {
    name: "Corporate Office",
    city: "Manesar, Gurugram",
    address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana-122052",
    coordinates: [76.9306, 28.367],
    type: "corporate",
    employees: "150+",
    icon: "🏢",
    phone: "+91-124-123-4567",
    email: "corporate@paraansconsultech.com",
  },
  {
    name: "Regional Office",
    city: "Bengaluru",
    address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bengaluru – 560054",
    coordinates: [77.5946, 12.9716],
    type: "regional",
    employees: "80+",
    icon: "🏢",
    phone: "+91-80-123-4567",
    email: "bangalore@paraansconsultech.com",
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
    email: "guwahati@paraansconsultech.com",
  },
];
 
// Build a Google Maps directions URL to the office (from current location)
const getDirectionsUrl = (office: Office) => {
  const [lon, lat] = office.coordinates; // [lon, lat]
  const destination = `${lat},${lon}`;   // Google expects lat,lng
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    destination
  )}&travelmode=driving&dir_action=navigate`;
};
 
export default function Locations() {
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="relative z-10 py-14">
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              Pan-India{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
                Presence
              </span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Strategic locations across India with offices in Haryana, Karnataka,
              and Assam.
            </p>
          </div>
        </div>
      </div>
 
      {/* Map + Sidebar */}
      <div className="container mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8 items-start">
        {/* Map */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">India Office Locations</h2>
            <p className="text-sm text-gray-600 mb-3">
              Offices in Haryana (HQ), Karnataka, and Assam. Click markers for details.
            </p>
 
            <div className="w-full overflow-hidden rounded-lg">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 760, center: [80.5, 22] }}
                width={900}
                height={640}
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-auto border border-gray-200 rounded-lg"
              >
                {/* States */}
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const rawName =
                        geo.properties?.ST_NM ||
                        geo.properties?.NAME_1 ||
                        geo.properties?.name ||
                        geo.properties?.st_nm ||
                        "";
                      const key = norm(String(rawName));
                      const isHL = highlightStates.has(key);
 
                      const fillColor = isHL
                        ? HIGHLIGHT_HEX
                        : colorForState(key);
 
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={fillColor}
                          stroke="#9ca3af"
                          strokeWidth={1}
                          style={{
                            default: { outline: "none" },
                            hover: {
                              outline: "none",
                              opacity: 0.9,
                              transition: "all 0.2s ease",
                            },
                            pressed: { outline: "none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
 
                {/* Short-form labels (DL, UP, KA...) with full-name tooltip */}
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const rawName =
                        geo.properties?.ST_NM ||
                        geo.properties?.NAME_1 ||
                        geo.properties?.name ||
                        geo.properties?.st_nm ||
                        "";
                      if (!rawName) return null;
 
                      const key = norm(String(rawName));
                      const centroid = geoCentroid(geo) as [number, number];
                      const offset = LABEL_OFFSETS[key];
                      const isHL = highlightStates.has(key);
 
                      const abbr = STATE_ABBR[key] || autoAbbrev(String(rawName));
                      const textContent = SHOW_NAME_PREFIX
                        ? `${String(rawName)}: ${abbr}`
                        : abbr;
 
                      const label = (
                        <text
                          className="pointer-events-none select-none"
                          textAnchor={offset?.align || "middle"}
                          style={{
                            fontSize: isHL ? 12 : 11,
                            fontWeight: 700,
                            fill: "#111827",
                            stroke: "white",
                            strokeWidth: 2,
                            paintOrder: "stroke",
                          }}
                        >
                          <title>{String(rawName)}</title>
                          {textContent}
                        </text>
                      );
 
                      return offset ? (
                        <Annotation
                          key={`${geo.rsmKey}-label`}
                          subject={centroid}
                          dx={offset.dx}
                          dy={offset.dy}
                          connectorProps={{
                            stroke: "#9ca3af",
                            strokeWidth: 0.6,
                            strokeLinecap: "round",
                          }}
                        >
                          {label}
                        </Annotation>
                      ) : (
                        <Marker key={`${geo.rsmKey}-label`} coordinates={centroid}>
                          {label}
                        </Marker>
                      );
                    })
                  }
                </Geographies>
 
                {/* Office markers */}
                {officeLocations.map((office) => (
                  <Marker
                    key={office.city}
                    coordinates={office.coordinates}
                    onClick={() =>
                      setSelectedOffice(
                        selectedOffice?.city === office.city ? null : office
                      )
                    }
                    className="cursor-pointer"
                  >
                    <circle r={20} fill={HIGHLIGHT_HEX} opacity="0.15" className="animate-ping" />
                    <circle r={12} fill={HIGHLIGHT_HEX} opacity="0.25" className="animate-pulse" />
                    <circle r={2} fill={HIGHLIGHT_HEX} stroke="#fff" strokeWidth={3} />
                    <text
                      y={30}
                      textAnchor="middle"
                      className="pointer-events-none"
                      style={{ fontSize: 12, fontWeight: 700, fill: "#111827" }}
                    >
                      {office.city.split(",")[0]}
                    </text>
                    <text
                      y={42}
                      textAnchor="middle"
                      className="pointer-events-none"
                      style={{ fontSize: 9, fontWeight: 600, fill: "#ea580c" }}
                    >
                      {office.type === "corporate" ? "HQ" : "Regional"}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>
            </div>
 
            {/* Legend */}
            <div className="flex justify-center mt-4">
              <div className="bg-orange-50 rounded-xl p-3 border border-orange-200 text-sm">
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-4 h-4 rounded-full"
                      style={{ background: HIGHLIGHT_HEX }}
                    />
                    <span className="font-medium text-gray-700">Office States (highlighted)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-r from-amber-300 to-sky-300" />
                    <span className="font-medium text-gray-700">Other States (varied colors)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="text-orange-600">📍</span>
              Our Offices
            </h3>
            <div className="space-y-4">
              {officeLocations.map((o) => {
                const isSel = selectedOffice?.city === o.city;
                return (
                  <div
                    key={o.city}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      isSel
                        ? "border-orange-300 bg-orange-50 shadow"
                        : "border-gray-200 bg-gray-50 hover:border-orange-200 hover:bg-orange-50/30"
                    }`}
                    onClick={() => setSelectedOffice(isSel ? null : o)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{o.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-900">{o.city}</h4>
                          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                            {o.type === "corporate" ? "Corporate HQ" : "Regional Office"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{o.address}</p>
                        <div className="text-xs text-gray-500">{o.employees} team members</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
 
          {selectedOffice && (
            <div className="bg-[#2a3154] rounded-xl shadow-lg p-6 text-white border border-orange-200">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-3 border border-orange-600/20">
                  <div className="text-orange-200 text-sm mb-1">Office</div>
                  <div className="font-semibold">{selectedOffice.name}</div>
                  <div className="text-sm text-gray-300">{selectedOffice.city}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 border border-orange-600/20">
                  <div className="text-orange-200 text-sm mb-1">Phone</div>
                  <div className="font-semibold">{selectedOffice.phone}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 border border-orange-600/20">
                  <div className="text-orange-200 text-sm mb-1">Email</div>
                  <div className="font-semibold">{selectedOffice.email}</div>
                </div>
              </div>
 
              {/* Get Directions button with arrow + redirect */}
              <button
                type="button"
                aria-label="Get Google Maps directions"
                onClick={() => window.open(getDirectionsUrl(selectedOffice), "_blank")}
                className="w-full mt-4 bg-[#eb8535] hover:bg-[#e07022] text-white font-semibold py-3 px-4 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                Get Directions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                >
                  <path d="M13.5 4.5l7 7-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}