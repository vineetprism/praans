"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import {
  geoCentroid,
  geoContains,
  geoArea,
  geoBounds,
  type GeoPermissibleObjects,
} from "d3-geo";

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

// Optional: keep a manual highlight list (besides real office states)
const highlightStates = new Set(["haryana", "karnataka", "assam"]);

const norm = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[.\s]+/g, " ").trim();

// Robust checks for exclusions
const isAndaman = (key: string) => key.startsWith("andaman and nicobar");
const isLadakh = (key: string) => key === "ladakh";
const isJammuKashmir = (key: string) => key === "jammu and kashmir";

// --- Color palette & mapper (stable per state) ---
const STATE_PALETTE = [
  "#fde68a", "#fdba74", "#fecaca", "#fbcfe8", "#c7d2fe", "#bfdbfe",
  "#bae6fd", "#a5f3fc", "#99f6e4", "#a7f3d0", "#bbf7d0", "#d9f99d",
  "#fef08a", "#fcd34d", "#fda4af", "#f9a8d4", "#e9d5ff", "#c4b5fd",
  "#a5b4fc", "#93c5fd", "#7dd3fc", "#67e8f9", "#5eead4", "#6ee7b7",
  "#86efac", "#bef264", "#fde047", "#fed7aa", "#fecdd3", "#f5d0fe",
  "#e2e8f0", "#cbd5e1", "#d6d3d1", "#e7e5e4", "#ffe4e6", "#ddd6fe",
];

const colorForState = (stateKey: string) => {
  let h = 0;
  for (let i = 0; i < stateKey.length; i++) {
    h = (h << 5) - h + stateKey.charCodeAt(i);
    h |= 0;
  }
  const idx = Math.abs(h) % STATE_PALETTE.length;
  return STATE_PALETTE[idx];
};

// Safe centroid inside polygon
function safeCentroid(feature: any): [number, number] {
  const c1 = geoCentroid(feature) as [number, number];
  if (geoContains(feature as GeoPermissibleObjects, c1)) return c1;

  if (feature?.geometry?.type === "MultiPolygon") {
    let bestPoly: any = null;
    let bestArea = -1;
    for (const coords of feature.geometry.coordinates) {
      const poly = { type: "Polygon", coordinates: coords };
      const a = geoArea(poly as any);
      if (a > bestArea) {
        bestArea = a;
        bestPoly = poly;
      }
    }
    if (bestPoly) {
      const c2 = geoCentroid(bestPoly) as [number, number];
      if (geoContains(feature as GeoPermissibleObjects, c2)) return c2;
    }
  }

  const [[minLon, minLat], [maxLon, maxLat]] = geoBounds(
    feature as GeoPermissibleObjects
  );
  return [(minLon + maxLon) / 2, (minLat + maxLat) / 2];
}

// Force J&K pin to Jammu (lon, lat)
const PIN_OVERRIDES: Record<string, [number, number]> = {
  "jammu and kashmir": [74.86, 32.73],
};

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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Pan India Locations</h2>
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
              {/* STATES: FILL + AUTO-HIGHLIGHT OFFICE STATES */}
              <Geographies geography={geoUrl}>
                {({ geographies }) => {
                  // 1) Build actual office states from office coordinates
                  const officeStateKeys = new Set<string>();
                  for (const geo of geographies) {
                    const rawName =
                      geo.properties?.ST_NM ||
                      geo.properties?.NAME_1 ||
                      geo.properties?.name ||
                      geo.properties?.st_nm ||
                      "";
                    const key = norm(String(rawName));
                    const hasOffice = officeLocations.some((o) =>
                      geoContains(geo as GeoPermissibleObjects, o.coordinates)
                    );
                    if (hasOffice) officeStateKeys.add(key);
                  }

                  return geographies.map((geo) => {
                    const rawName =
                      geo.properties?.ST_NM ||
                      geo.properties?.NAME_1 ||
                      geo.properties?.name ||
                      geo.properties?.st_nm ||
                      "";
                    const key = norm(String(rawName));

                    const isOfficeState = officeStateKeys.has(key);
                    const isManualHighlight = highlightStates.has(key);
                    const emphasized = isOfficeState || isManualHighlight;

                    const fillColor = isOfficeState
                      ? HIGHLIGHT_HEX // solid brand for actual office states
                      : colorForState(key);

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={fillColor}
                        stroke={emphasized ? "#b45309" : "#9ca3af"}
                        strokeWidth={emphasized ? 1.6 : 1}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", opacity: 0.92, transition: "all 0.2s ease" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  });
                }}
              </Geographies>

              {/* SAME PIN on every state (except Andaman & Ladakh).
                  J&K pin is forced to Jammu for better visibility. */}
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
                    if (isAndaman(key) || isLadakh(key)) return null;

                    const override = isJammuKashmir(key) ? PIN_OVERRIDES[key] : undefined;
                    const pinAt = override ?? safeCentroid(geo);

                    return (
                      <Marker key={`${geo.rsmKey}-pin`} coordinates={pinAt} className="pointer-events-none">
                        <g transform="translate(-8,-16) scale(0.55)">
                          <path
                            d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 11 9 11s9-5.75 9-11c0-4.97-4.03-9-9-9z"
                            fill="#111111"
                          />
                          <circle cx="12" cy="10" r="3.2" fill="#ffffff" />
                        </g>
                      </Marker>
                    );
                  })
                }
              </Geographies>

              {/* OFFICE MARKERS */}
              {officeLocations.map((office) => (
                <Marker key={office.city} coordinates={office.coordinates} className="cursor-pointer">
                  <circle r={20} fill={HIGHLIGHT_HEX} opacity="0.15" className="animate-ping" />
                  <circle r={12} fill={HIGHLIGHT_HEX} opacity="0.25" className="animate-pulse" />
                  <circle r={4} fill={HIGHLIGHT_HEX} stroke="#fff" strokeWidth={3} />
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
                  <span className="inline-block w-4 h-4 rounded-full" style={{ background: HIGHLIGHT_HEX }} />
                  <span className="font-medium text-gray-700">Office States (filled)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 rounded-full border border-gray-300 bg-white" />
                  <span className="font-medium text-gray-700">Other States (palette)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage blurb */}
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
