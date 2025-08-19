import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Building } from "lucide-react"
import { IndiaMap } from "./india-map"

export const metadata = {
  title: "Contact Us | Praans Consultech",
  description:
    "Get in touch with Praans Consultech. Find our office locations in Gurugram, Bangalore, and Guwahati, or send us a message.",
  keywords: "contact praans consultech, labour law consultant contact, compliance services contact",
}

const officeLocations = [
  {
    city: "Corporate Office - Gurugram",
    address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana - 122052",
    icon: Building,
  },
  {
    city: "Regional Office - Bangalore",
    address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bangalore – 560054",
    icon: MapPin,
  },
  {
    city: "Regional Office - Guwahati",
    address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam - 781008",
    icon: MapPin,
  },
]

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-800">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help with all your labour law compliance needs. Reach out to us via phone, email, or our
            office locations.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Our Offices</h2>
                {officeLocations.map((office, index) => (
                  <Card key={index} className="mb-6 border-l-4 border-orange-500">
                    <CardHeader className="flex flex-row items-start gap-4 p-5">
                      <office.icon className="w-8 h-8 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-xl">{office.city}</CardTitle>
                        <p className="text-gray-600">{office.address}</p>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">General Inquiries</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-3 text-lg text-gray-700 hover:text-orange-500"
                  >
                    <Phone className="w-6 h-6 text-orange-500" />
                    <span>+91-123-456-7890</span>
                  </a>
                  <a
                    href="mailto:info@praansconsultech.com"
                    className="flex items-center gap-3 text-lg text-gray-700 hover:text-orange-500"
                  >
                    <Mail className="w-6 h-6 text-orange-500" />
                    <span>info@praansconsultech.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="+91-987-654-3210" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Regarding Compliance Outsourcing" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <Textarea id="message" placeholder="Please describe your requirements..." rows={5} />
                  </div>
                  <div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-3">
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Our Physical Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With on-ground teams across the nation, we provide localized expertise and support in every state.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <IndiaMap />
          </div>
        </div>
      </section>
    </div>
  )
}






// "use client";
// import { useState, useEffect } from "react";

// const timeZones = [
//     { name: "India", city: "New Delhi", zone: "Asia/Kolkata", map: "https://www.google.com/maps/place/New+Delhi" },
//     { name: "China", city: "Shanghai", zone: "Asia/Shanghai", map: "https://www.google.com/maps/place/Shanghai" },
//     { name: "Turkey", city: "Ankara", zone: "Europe/Istanbul", map: "https://www.google.com/maps/place/Ankara" },
//     { name: "UK", city: "Northamptonshire", zone: "Europe/London", map: "https://www.google.com/maps/place/Northamptonshire" },
// ];

// export default function contact() {
//     const [times, setTimes] = useState({});

//     useEffect(() => {
//         const updateTime = () => {
//             const newTimes = {};
//             timeZones.forEach(({ name, zone }) => {
//                 newTimes[name] = new Intl.DateTimeFormat("en-US", {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                     second: "2-digit",
//                     hour12: true,
//                     timeZone: zone,
//                 }).format(new Date());
//             });
//             setTimes(newTimes);
//         };

//         updateTime();
//         const interval = setInterval(updateTime, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="fixed bottom-0 left-0 w-full bg-quaternary p-4 shadow-xl z-[1002]">
//             <div className="flex flex-wrap items-center justify-center text-white text-xs sm:text-sm md:text-lg lg:text-xl px-2 sm:px-6 md:px-12 lg:px-20 cursor-pointer gap-3 sm:gap-6 md:gap-8">
//                 {timeZones.map(({ name, city, map }, index) => (
//                     <div
//                         key={name}
//                         className="text-center flex items-center hover:text-tertiary"
//                         onClick={() => window.open(map, "_blank")}
//                         style={{ cursor: "pointer" }}
//                     >
//                         {index > 0 && (
//                             <div className="hidden sm:flex justify-center items-center">
//                                 <div className="w-[0.75px] h-8 sm:h-10 md:h-12 mx-2 sm:mx-4 md:mx-6 bg-gray-700"></div>
//                             </div>
//                         )}
//                         <div>
//                             <p className="font-bold text-md">{times[name]}</p>
//                             <p className="font-bold text-md">
//                                 {name}
//                                 {city && , ${city}}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }



// "use client";

// import { useState } from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// // import AboutUs from "./AboutSection";

// // Define the project countries
// const projects = {
//   "China": { name: "China", project: "China Project" },
//   "India": { name: "India", project: "India Project3" },
//   "Turkey": { name: "Turkey", project: "Turkey Project" },
//   "United Kingdom": { name: "United Kingdom", project: "UK Project" },
//   "United Kingdom Northern": { name: "United Kingdom Northern", project: "United Kingdom Northern Project" },  // Added USA
// };

// // World map TopoJSON URL
// const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// export default function contact() {
//   const [tooltip, setTooltip] = useState({
//     content: "",
//     x: 0,
//     y: 0,
//     visible: false,
//   });

//   // Function to show tooltip when hovering over project countries
//   const handleEnter = (evt, geo) => {
//     const countryName = geo.properties.name; // Get country name from map data
//     const projectInfo = projects[countryName];

//     console.log("Hovered over:", countryName, "Project:", projectInfo);

//     // Show tooltip ONLY if the country is in the projects list
//     if (projectInfo) {
//       setTooltip({
//         content: (
//           <div className="text-black">
//             <span className="font-bold">{projectInfo.name}</span>
//             <br />
//             <span>{projectInfo.project}</span>
//           </div>
//         ),
//         x: evt.pageX + 10,
//         y: evt.pageY + 10,
//         visible: true,
//       });
//     }
//   };

//   // Function to move tooltip with the cursor
//   const handleMove = (evt) => {
//     if (tooltip.visible) {
//       setTooltip((prev) => ({
//         ...prev,
//         x: evt.pageX + 10,
//         y: evt.pageY + 10,
//       }));
//     }
//   };

//   // Function to hide tooltip when cursor leaves a country
//   const handleLeave = () => {
//     setTooltip({ content: "", x: 0, y: 0, visible: false });
//   };

//   return (
//     <>
//       <div className="flex bg-secondary flex-col items-center p-4">
//         <h1 className="text-5xl text-white font-bold mb-24 mt-32">
//           Our Project Locations
//         </h1>
//         <div className="w-3/5 h-4/5 relative">
//           {/* Tooltip box */}
//           {tooltip.visible && (
//             <div
//               role="tooltip"
//               className="fixed bg-white px-4 py-2 rounded-lg shadow-lg text-sm z-50"
//               style={{
//                 left: tooltip.x,
//                 top: tooltip.y,
//                 pointerEvents: "none",
//               }}
//             >
//               {tooltip.content}
//             </div>
//           )}

//           {/* Interactive World Map */}
//           <ComposableMap
//             projection="geoMercator"
//             projectionConfig={{
//               scale: 120,
//               center: [20, 20],
//             }}
//           >
//             <Geographies geography={geoUrl}>
//               {({ geographies }) =>
//                 geographies.map((geo) => {
//                   const countryName = geo.properties.name;
//                   const projectInfo = projects[countryName];

//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={projectInfo ? "#e40111" : "#E5E7EB"}
//                       stroke="#FFFFFF"
//                       strokeWidth={0.5}
//                       style={{
//                         default: {
//                           outline: "none",
//                           transition: "all 250ms",
//                         },
//                         hover: {
//                           fill: projectInfo ? "#ff1a1a" : "#F5F4F6",
//                           outline: "none",
//                           cursor: projectInfo ? "pointer" : "default",
//                           transition: "all 250ms",
//                         },
//                         pressed: {
//                           fill: projectInfo ? "#cc0000" : "#E5E7EB",
//                           outline: "none",
//                         },
//                       }}
//                       onMouseEnter={(evt) => handleEnter(evt, geo)}
//                       onMouseMove={handleMove}
//                       onMouseLeave={handleLeave}
//                     />
//                   );
//                 })
//               }
//             </Geographies>
//           </ComposableMap>
//         </div>

//         {/* Project List Below the Map */}
//         <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-4 mt-8">
//           {Object.entries(projects).map(([code, data], index) => (
//             <div key={code} className="flex items-center">
//               {/* Show separator only between items, not after the last one */}
//               {index > 0 && (
//                 <span className="hidden sm:block text-gray-400 mx-2 sm:mx-4 text-lg sm:text-xl">|</span>
//               )}

//               <p className="text-white hover:text-tertiary cursor-pointer font-bold text-base sm:text-lg md:text-2xl mt-6 sm:mt-12 mb-6 sm:mb-12">
//                 {data.name}
//               </p>
//             </div>
//           ))}
//         </div>


//       </div>
     
//     </>
//   );
// }




// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   ZoomableGroup,
// } from "react-simple-maps";

// type FeatureCollection = any;

// const REMOTE_INDIA_URL =
//   "https://raw.githubusercontent.com/datameet/india-geojson/master/geojson/india_st.geojson";

// export default function Contact() {
//   const [indiaData, setIndiaData] = useState<FeatureCollection | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     let cancelled = false;
//     (async () => {
//       try {
//         // Try local first: public/india-states.json
//         const local = await fetch("/india-states.json", { cache: "no-store" });
//         if (!local.ok) throw new Error("local missing");
//         const json = await local.json();
//         if (!cancelled) setIndiaData(json);
//       } catch {
//         try {
//           const r = await fetch(REMOTE_INDIA_URL, { cache: "no-store" });
//           const j = await r.json();
//           if (!cancelled) setIndiaData(j);
//         } catch (e) {
//           if (!cancelled) setError("Failed to load India states GeoJSON.");
//         }
//       }
//     })();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const palette = useMemo(
//     () => [
//       "#ff6b6b",
//       "#4ecdc4",
//       "#ffe66d",
//       "#ffa69e",
//       "#9b5de5",
//       "#00bbf9",
//       "#f15bb5",
//       "#b8f2e6",
//       "#cdb4db",
//       "#90e0ef",
//       "#ffd166",
//       "#80ed99",
//     ],
//     []
//   );

//   const colorForState = (name: string) => {
//     const s = (name || "").toLowerCase();
//     let h = 0;
//     for (let i = 0; i < s.length; i++) h = s.charCodeAt(i) + ((h << 5) - h);
//     return palette[Math.abs(h) % palette.length];
//   };

//   return (
//     <div className="bg-secondary flex flex-col items-center p-4">
//       <h1 className="text-5xl text-white font-bold mb-10 mt-10">
//         India Map (States)
//       </h1>

//       <div className="w-full" style={{ maxWidth: 1500 }}>
//         {error && (
//           <div className="text-red-500 bg-white inline-block px-3 py-2 rounded">
//             {error}
//           </div>
//         )}

//         {!indiaData && !error && (
//           <div className="text-white/90">Loading map…</div>
//         )}

//         {indiaData && (
//           <ComposableMap
//             projection="geoMercator"
//             width={1400}
//             height={900}
//             projectionConfig={{ scale: 1450, center: [82.8, 22.5] }}
//             style={{ width: "100%", height: "auto" }}
//           >
//             <ZoomableGroup minZoom={1} maxZoom={12}>
//               <Geographies geography={indiaData}>
//                 {({ geographies }) =>
//                   geographies.map((geo) => {
//                     const name =
//                       (geo.properties as any)?.st_nm ||
//                       (geo.properties as any)?.NAME_1 ||
//                       "";
//                     return (
//                       <Geography
//                         key={geo.rsmKey}
//                         geography={geo}
//                         fill={colorForState(name)}
//                         stroke="#ffffff"
//                         strokeWidth={0.8}
//                         style={{
//                           default: { outline: "none" },
//                           hover: {
//                             fill: "#ffd166",
//                             outline: "none",
//                             cursor: "pointer",
//                           },
//                           pressed: { outline: "none" },
//                         }}
//                         title={name}
//                       />
//                     );
//                   })
//                 }
//               </Geographies>
//             </ZoomableGroup>
//           </ComposableMap>
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// const INDIA_STATES_URL = "/india-states.json";

// // Soft pastel palette; states > palette length → cycle
// const PALETTE = [
//   "#FECACA", "#FDE68A", "#BBF7D0", "#BAE6FD", "#DDD6FE",
//   "#FBCFE8", "#FED7AA", "#A7F3D0", "#BFDBFE", "#F5D0FE",
// ];

// export default function Contact() {
//   const [tip, setTip] = useState<{ x: number; y: number; name: string } | null>(null);

//   return (
//     <div className="w-full max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-white">India — State Map</h1>

//       {/* Tooltip */}
//       {tip && (
//         <div
//           role="tooltip"
//           className="fixed z-50 bg-white text-black text-sm px-3 py-2 rounded-md shadow"
//           style={{ left: tip.x, top: tip.y, pointerEvents: "none" }}
//         >
//           {tip.name}
//         </div>
//       )}

//       <div className="rounded-xl overflow-hidden shadow bg-white">
//         <ComposableMap
//           projection="geoMercator"
//           projectionConfig={{
//             center: [78, 22],   // India center (lon, lat)
//             scale: 1000,        // zoom level; tweak 900–1200 if needed
//           }}
//           width={800}
//           height={600}
//           style={{ width: "100%", height: "auto" }}
//         >
//           <Geographies geography={INDIA_STATES_URL}>
//             {({ geographies }) =>
//               geographies.map((geo, idx) => (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   fill={PALETTE[idx % PALETTE.length]}
//                   stroke="#ffffff"
//                   strokeWidth={0.6}
//                   style={{
//                     default: { outline: "none" },
//                     hover: { fill: "#FFD54F", outline: "none", cursor: "pointer" },
//                     pressed: { fill: "#F59E0B", outline: "none" },
//                   }}
//                   onMouseEnter={(e) =>
//                     setTip({
//                       x: e.pageX + 10,
//                       y: e.pageY + 10,
//                       name: geo.properties?.name ?? "State",
//                     })
//                   }
//                   onMouseMove={(e) => tip && setTip({ ...tip, x: e.pageX + 10, y: e.pageY + 10 })}
//                   onMouseLeave={() => setTip(null)}
//                 />
//               ))
//             }
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useState, useMemo } from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
// } from "react-simple-maps";

// // 🌍 World map TopoJSON URL
// const worldUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// // 🇮🇳 India states GeoJSON (place this file in /public)
// const indiaStatesUrl = "/india-states.json";

// // 🌐 Project countries (existing)
// const projects: Record<
//   string,
//   { name: string; project: string }
// > = {
//   China: { name: "China", project: "China Project" },
//   India: { name: "India", project: "India Project3" },
//   Turkey: { name: "Turkey", project: "Turkey Project" },
//   "United Kingdom": { name: "United Kingdom", project: "UK Project" },
//   "United Kingdom Northern": {
//     name: "United Kingdom Northern",
//     project: "United Kingdom Northern Project",
//   },
// };

// // 📍 Major India cities (add more easily)
// const indiaCities = [
//   { name: "New Delhi", coordinates: [77.2090, 28.6139] },
//   { name: "Mumbai", coordinates: [72.8777, 19.0760] },
//   { name: "Bengaluru", coordinates: [77.5946, 12.9716] },
//   { name: "Chennai", coordinates: [80.2707, 13.0827] },
//   { name: "Kolkata", coordinates: [88.3639, 22.5726] },
//   { name: "Hyderabad", coordinates: [78.4867, 17.3850] },
//   { name: "Ahmedabad", coordinates: [72.5714, 23.0225] },
//   { name: "Pune", coordinates: [73.8567, 18.5204] },
//   { name: "Jaipur", coordinates: [75.7873, 26.9124] },
//   { name: "Lucknow", coordinates: [80.9462, 26.8467] },
//   { name: "Surat", coordinates: [72.8311, 21.1702] },
//   { name: "Kanpur", coordinates: [80.3319, 26.4499] },
//   { name: "Nagpur", coordinates: [79.0882, 21.1458] },
//   { name: "Indore", coordinates: [75.8577, 22.7196] },
//   { name: "Bhopal", coordinates: [77.4126, 23.2599] },
//   { name: "Patna", coordinates: [85.1376, 25.5941] },
//   { name: "Ranchi", coordinates: [85.3096, 23.3441] },
//   { name: "Bhubaneswar", coordinates: [85.8245, 20.2961] },
//   { name: "Guwahati", coordinates: [91.7362, 26.1445] },
//   { name: "Chandigarh", coordinates: [76.7794, 30.7333] },
//   { name: "Shimla", coordinates: [77.1734, 31.1048] },
//   { name: "Dehradun", coordinates: [78.0322, 30.3165] },
//   { name: "Srinagar", coordinates: [74.7973, 34.0837] },
//   { name: "Jammu", coordinates: [74.8723, 32.7266] },
//   { name: "Panaji", coordinates: [73.8278, 15.4909] },
//   { name: "Thiruvananthapuram", coordinates: [76.9366, 8.5241] },
//   { name: "Kochi", coordinates: [76.2673, 9.9312] },
//   { name: "Coimbatore", coordinates: [76.9558, 11.0168] },
//   { name: "Madurai", coordinates: [78.1198, 9.9252] },
//   { name: "Visakhapatnam", coordinates: [83.2185, 17.6868] },
//   { name: "Vijayawada", coordinates: [80.6480, 16.5062] },
//   { name: "Raipur", coordinates: [81.6296, 21.2514] },
//   { name: "Noida", coordinates: [77.3910, 28.5355] },
//   { name: "Gurugram", coordinates: [77.0266, 28.4595] },
// ];

// // 🎨 Random nice fills for India states
// const stateFill = (i: number) =>
//   `hsl(${(i * 37) % 360}, 70%, 72%)`;

// export default function Contact() {
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

//   // quick lookup to highlight project countries in world layer
//   const projectLookup = useMemo(
//     () =>
//       new Set(Object.keys(projects).map((k) => k.toLowerCase())),
//     []
//   );

//   const handleEnterCountry = (evt: any, geo: any) => {
//     const countryName = geo.properties.name as string;
//     const projectInfo = projects[countryName];

//     if (projectInfo) {
//       setTooltip({
//         content: (
//           <div className="text-black">
//             <span className="font-bold">{projectInfo.name}</span>
//             <br />
//             <span>{projectInfo.project}</span>
//           </div>
//         ),
//         x: evt.pageX + 10,
//         y: evt.pageY + 10,
//         visible: true,
//       });
//     }
//   };

//   const handleEnterState = (evt: any, geo: any) => {
//     // Show state name tooltip
//     setTooltip({
//       content: (
//         <div className="text-black">
//           <span className="font-bold">
//             {geo.properties?.name || "State"}
//           </span>
//           <div className="text-xs opacity-70">India</div>
//         </div>
//       ),
//       x: evt.pageX + 10,
//       y: evt.pageY + 10,
//       visible: true,
//     });
//   };

//   const handleMove = (evt: any) => {
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
//     <>
//       <div className="flex bg-secondary flex-col items-center p-4">
//         <h1 className="text-5xl text-white font-bold mb-24 mt-32">
//           Our Project Locations
//         </h1>

//         <div className="w-3/5 h-4/5 relative">
//           {/* 🧰 Tooltip */}
//           {tooltip.visible && (
//             <div
//               role="tooltip"
//               className="fixed bg-white px-4 py-2 rounded-lg shadow-lg text-sm z-50"
//               style={{
//                 left: tooltip.x,
//                 top: tooltip.y,
//                 pointerEvents: "none",
//               }}
//             >
//               {tooltip.content}
//             </div>
//           )}

//           {/* 🗺️ Base World Map */}
//           <ComposableMap
//             projection="geoMercator"
//             projectionConfig={{ scale: 120, center: [20, 20] }}
//           >
//             {/* World countries */}
//             <Geographies geography={worldUrl}>
//               {({ geographies }) =>
//                 geographies.map((geo) => {
//                   const name = geo.properties.name as string;
//                   const isProjectCountry = projectLookup.has(
//                     name.toLowerCase()
//                   );
//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={isProjectCountry ? "#e40111" : "#E5E7EB"}
//                       stroke="#FFFFFF"
//                       strokeWidth={0.5}
//                       style={{
//                         default: { outline: "none", transition: "all 250ms" },
//                         hover: {
//                           fill: isProjectCountry ? "#ff1a1a" : "#F5F4F6",
//                           outline: "none",
//                           cursor: isProjectCountry ? "pointer" : "default",
//                           transition: "all 250ms",
//                         },
//                         pressed: {
//                           fill: isProjectCountry ? "#cc0000" : "#E5E7EB",
//                           outline: "none",
//                         },
//                       }}
//                       onMouseEnter={(evt) => handleEnterCountry(evt, geo)}
//                       onMouseMove={handleMove}
//                       onMouseLeave={handleLeave}
//                     />
//                   );
//                 })
//               }
//             </Geographies>

//             {/* 🇮🇳 India States overlay (on top of world) */}
//             <Geographies geography={indiaStatesUrl}>
//               {({ geographies }) =>
//                 geographies.map((geo, idx) => (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     fill={stateFill(idx)}
//                     stroke="#ffffff"
//                     strokeWidth={0.6}
//                     style={{
//                       default: { outline: "none", transition: "all 200ms" },
//                       hover: {
//                         fill: "#FFD54F",
//                         outline: "none",
//                         cursor: "pointer",
//                       },
//                       pressed: { outline: "none" },
//                     }}
//                     onMouseEnter={(evt) => handleEnterState(evt, geo)}
//                     onMouseMove={handleMove}
//                     onMouseLeave={handleLeave}
//                   />
//                 ))
//               }
//             </Geographies>

//             {/* 📍 India City Markers */}
//             {indiaCities.map((c) => (
//               <Marker
//                 key={c.name}
//                 coordinates={c.coordinates as [number, number]}
//                 onMouseEnter={(evt) =>
//                   setTooltip({
//                     content: (
//                       <div className="text-black">
//                         <span className="font-bold">{c.name}</span>
//                         <div className="text-xs opacity-70">City, India</div>
//                       </div>
//                     ),
//                     x: evt.pageX + 10,
//                     y: evt.pageY + 10,
//                     visible: true,
//                   })
//                 }
//                 onMouseMove={handleMove}
//                 onMouseLeave={handleLeave}
//               >
//                 <circle r={2.5} />
//               </Marker>
//             ))}
//           </ComposableMap>
//         </div>

//         {/* Project List Below the Map */}
//         <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-4 mt-8">
//           {Object.entries(projects).map(([code, data], index) => (
//             <div key={code} className="flex items-center">
//               {index > 0 && (
//                 <span className="hidden sm:block text-gray-400 mx-2 sm:mx-4 text-lg sm:text-xl">
//                   |
//                 </span>
//               )}
//               <p className="text-white hover:text-tertiary cursor-pointer font-bold text-base sm:text-lg md:text-2xl mt-6 sm:mt-12 mb-6 sm:mb-12">
//                 {data.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }





// "use client";

// import { useMemo, useState } from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
//   ZoomableGroup,
// } from "react-simple-maps";

// // Public TopoJSON for India states
// const INDIA_GEO_URL =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

// // Brand-aligned vibrant palette (Tailwind-ish)
// const PALETTE = [
//   "#F97316", // orange
//   "#FB7185", // pink
//   "#22C55E", // green
//   "#3B82F6", // blue
//   "#A78BFA", // violet
//   "#EAB308", // amber
//   "#06B6D4", // cyan
//   "#F43F5E", // rose
//   "#84CC16", // lime
//   "#10B981", // emerald
// ];

// // deterministic color by state name
// const colorFor = (name: string) => {
//   let h = 0;
//   for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 1_000_000_007;
//   return PALETTE[h % PALETTE.length];
// };

// // Office pins (lon, lat)
// const OFFICES = [
//   { name: "Gurugram (Corporate)", coords: [77.0266, 28.4595] },
//   { name: "Bengaluru (Regional)", coords: [77.5946, 12.9716] },
//   { name: "Guwahati (Regional)", coords: [91.7362, 26.2006] },
// ];

// export default function contact() {
//   const [hovered, setHovered] = useState<string | null>(null);

//   // slight zoom for crispness, centered over India
//   const projectionCfg = useMemo(
//     () => ({ center: [80, 22], scale: 1000 }), // tweak scale if you want larger/smaller
//     []
//   );

//   return (
//     <div className="relative w-full rounded-xl border bg-white p-3 shadow-sm">
//       {/* Hover tooltip */}
//       {hovered && (
//         <div className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 rounded-md bg-slate-900/90 px-3 py-1 text-sm text-white shadow">
//           {hovered}
//         </div>
//       )}

//       <ComposableMap projectionConfig={projectionCfg} width={800} height={600}>
//         <ZoomableGroup>
//           <Geographies geography={INDIA_GEO_URL}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const name =
//                   (geo.properties as any)?.st_nm ||
//                   (geo.properties as any)?.name ||
//                   "State";
//                 const fill = colorFor(name);
//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     onMouseEnter={() => setHovered(name)}
//                     onMouseLeave={() => setHovered(null)}
//                     style={{
//                       default: {
//                         fill,
//                         outline: "none",
//                         stroke: "#FFFFFF",
//                         strokeWidth: 0.8,
//                       },
//                       hover: {
//                         fill,
//                         outline: "none",
//                         stroke: "#0F172A",
//                         strokeWidth: 1.2,
//                         filter: "brightness(1.05)",
//                       },
//                       pressed: { fill, outline: "none" },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>

//           {/* Office markers */}
//           {OFFICES.map((o) => (
//             <Marker key={o.name} coordinates={o.coords as [number, number]}>
//               <circle r={5.5} fill="#F97316" stroke="#1F2937" strokeWidth={1} />
//               <text
//                 textAnchor="start"
//                 x={8}
//                 y={4}
//                 style={{ fontFamily: "inherit", fill: "#0f172a", fontSize: 12, fontWeight: 600 }}
//               >
//                 {o.name}
//               </text>
//             </Marker>
//           ))}
//         </ZoomableGroup>
//       </ComposableMap>

//       {/* Legend */}
//       <div className="mt-2 flex flex-wrap items-center gap-3">
//         <div className="flex items-center gap-2 rounded-md bg-orange-50 px-2 py-1 text-sm text-orange-700 ring-1 ring-orange-200">
//           <span className="inline-block h-2.5 w-2.5 rounded-full bg-orange-500" />
//           Offices
//         </div>
//         <div className="ml-auto flex items-center gap-1 text-xs text-slate-500">
//           Hover states to see name
//         </div>
//       </div>
//     </div>
//   );

// }





// 'use client';

// import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
// import { useMemo } from 'react';

// const geoUrl =
//   'https://raw.githubusercontent.com/datameet/india-geojson/master/geojson/india_st.geojson';
// // Agar CORS issue ho: const geoUrl = '/india_states.geo.json'  // (file ko public me rakhna)

// const palette = [
//   '#ff6b6b', '#4ecdc4', '#ffe66d', '#ffa69e', '#9b5de5', '#00bbf9',
//   '#f15bb5', '#b8f2e6', '#cdb4db', '#90e0ef', '#ffd166', '#80ed99'
// ];

// function colorForState(name: string) {
//   const safe = (name || '').toLowerCase();
//   let hash = 0;
//   for (let i = 0; i < safe.length; i++) {
//     hash = safe.charCodeAt(i) + ((hash << 5) - hash);
//   }
//   const idx = Math.abs(hash) % palette.length;
//   return palette[idx];
// }

// type City = { name: string; coordinates: [number, number] }; // [lon, lat]
// const cities: City[] = [
//   { name: 'New Delhi', coordinates: [77.2090, 28.6139] },
//   { name: 'Mumbai', coordinates: [72.8777, 19.0760] },
//   { name: 'Kolkata', coordinates: [88.3639, 22.5726] },
//   { name: 'Chennai', coordinates: [80.2707, 13.0827] },
//   { name: 'Bengaluru', coordinates: [77.5946, 12.9716] },
//   { name: 'Hyderabad', coordinates: [78.4867, 17.3850] },
//   { name: 'Ahmedabad', coordinates: [72.5714, 23.0225] },
//   { name: 'Pune', coordinates: [73.8567, 18.5204] },
//   { name: 'Jaipur', coordinates: [75.7873, 26.9124] },
//   { name: 'Lucknow', coordinates: [80.9462, 26.8467] },
//   { name: 'Bhopal', coordinates: [77.4126, 23.2599] },
//   { name: 'Patna', coordinates: [85.1376, 25.5941] },
//   { name: 'Guwahati', coordinates: [91.7362, 26.1445] },
//   { name: 'Srinagar', coordinates: [74.7973, 34.0837] },
//   { name: 'Thiruvananthapuram', coordinates: [76.9366, 8.5241] }
// ];

// export default function Page() {
//   const mapStyle = useMemo(
//     () => ({
//       width: '100%',
//       maxWidth: 1100,
//       margin: '0 auto',
//       background: '#f7f7fb',
//       borderRadius: 12,
//       boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
//       padding: 8
//     }),
//     []
//   );

//   return (
//     <div style={{ padding: 16 }}>
//       <h2 style={{ margin: '8px 0 16px' }}>India Map (States + Cities)</h2>
//       <div style={mapStyle as React.CSSProperties}>
//         <ComposableMap projection="geoMercator" projectionConfig={{ scale: 900, center: [82.8, 22.5] }}>
//           <ZoomableGroup minZoom={0.9} maxZoom={8} translateExtent={[[0, 0], [1000, 700]]}>
//             <Geographies geography={geoUrl}>
//               {({ geographies }) =>
//                 geographies.map((geo) => {
//                   const name = (geo.properties as any)?.st_nm || (geo.properties as any)?.NAME_1 || '';
//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={colorForState(name)}
//                       stroke="#ffffff"
//                       strokeWidth={0.5}
//                       style={{
//                         default: { outline: 'none' },
//                         hover: { fill: '#ffd166', outline: 'none' },
//                         pressed: { outline: 'none' }
//                       }}
//                       title={name}
//                     />
//                   );
//                 })
//               }
//             </Geographies>

//             {cities.map((city) => (
//               <Marker key={city.name} coordinates={city.coordinates}>
//                 <circle r={2.4} fill="#111" stroke="#fff" strokeWidth={0.6} />
//                 <text
//                   x={5}
//                   y={3}
//                   style={{ fontFamily: 'system-ui, sans-serif', fontSize: 10, fill: '#222' }}
//                 >
//                   {city.name}
//                 </text>
//               </Marker>
//             ))}
//           </ZoomableGroup>
//         </ComposableMap>
//       </div>
//     </div>
//   );
// }