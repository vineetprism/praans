"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

type Office = {
  name: string;
  city: string;
  address: string;
  coordinates: [number, number]; // [lon, lat]
  type: "corporate" | "regional";
  employees: string;
  icon: string;
  phone: string;
  email: string;
};

const geoUrl =
  "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

const HIGHLIGHT_HEX = "#eb8535";

// Which states to fill (normalized to lowercase)
const highlightStates = new Set(["haryana", "karnataka", "assam"]);

// simple normalizer for state names from the GeoJSON
const norm = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[.\s]+/g, " ").trim();

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

export default function Locations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">India Office Locations</h2>
          <p className="text-sm text-gray-600 mb-3">
            Offices in Haryana (HQ), Karnataka, and Assam.
          </p>

          <div className="w-full overflow-hidden rounded-sm">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 760, center: [80.5, 22] }}
              width={900}
              height={640}
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-auto border border-gray-200 rounded-lg"
            >
              {/* States: only the 3 office states are filled; others are transparent (outline only). */}
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
                    const isOfficeState = highlightStates.has(key);

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isOfficeState ? HIGHLIGHT_HEX : "transparent"}
                        stroke="#9ca3af"
                        strokeWidth={1}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            outline: "none",
                            opacity: isOfficeState ? 0.9 : 1,
                            transition: "all 0.2s ease",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Office markers (keep the same highlight color) */}
              {officeLocations.map((office) => (
                <Marker key={office.city} coordinates={office.coordinates} className="cursor-pointer">
                  <circle r={20} fill={HIGHLIGHT_HEX} opacity="0.15" className="animate-ping" />
                  <circle r={12} fill={HIGHLIGHT_HEX} opacity="0.25" className="animate-pulse" />
                  <circle r={8} fill={HIGHLIGHT_HEX} stroke="#fff" strokeWidth={3} />
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

          {/* Optional tiny legend (kept minimal) */}
          <div className="flex justify-center mt-4">
            <div className="bg-orange-50 rounded-xl p-3 border border-orange-200 text-sm">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 rounded-full" style={{ background: HIGHLIGHT_HEX }} />
                  <span className="font-medium text-gray-700">Office States</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 rounded-full border border-gray-300 bg-white" />
                  <span className="font-medium text-gray-700">Other States (outline)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Below-locations section remains removed as requested earlier */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-100/80 via-white/80 to-blue-100/80 rounded-3xl p-8 max-w-5xl mx-auto shadow-xl border border-gray-200/50 backdrop-blur-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-[#eb8535] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-slate-800">Complete India Coverage</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We maintain physical presence and operational coverage across <strong className="text-[#eb8535]">all 28 states and 8 union territories</strong> of India,
              ensuring local expertise and nationwide support for your business needs.
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-[#eb8535]">28</div>
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
    </div>
  );
}

