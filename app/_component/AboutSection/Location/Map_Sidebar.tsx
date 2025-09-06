"use client";

import React, { useState } from "react";
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

// ---------- Types ----------
type Office = {
    name: string;
    city: string;
    address: string;
    coordinates: [number, number]; // [lon, lat]
    type: "corporate" | "regional";
    // employees: string;
    icon: string;
    phone: string;
    email: string;
};

// ---------- Config ----------
const geoUrl =
    "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

const HIGHLIGHT_HEX = "#eb8535";
const highlightStates = new Set(["haryana", "karnataka", "assam"]);

// --- helpers ---
const norm = (s: string) =>
    s.toLowerCase().replace(/&/g, "and").replace(/[.\s]+/g, " ").trim();

// helpers that tolerate singular/plural + ampersand
const isAndaman = (key: string) => key.startsWith("andaman and nicobar");
const isLadakh = (key: string) => key === "ladakh";
const isJammuKashmir = (key: string) => key === "jammu and kashmir";

// Exclude **pins** for these states (robust checks)
const shouldExcludePin = (key: string) =>
    isAndaman(key) || isLadakh(key);

// Exclude **color** for these states (render white)
const shouldExcludeColor = (key: string) =>
    isAndaman(key) || isLadakh(key);

// override pin placement (lon, lat)
const PIN_OVERRIDES: Record<string, [number, number]> = {
    // Show the pin in Jammu (not Kashmir)
    "jammu and kashmir": [74.86, 32.73],
};

// --- colorful palette ---
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

// Choose a centroid that lies inside the state geometry.
function safeCentroid(feature: any): [number, number] {
    // 1) overall centroid
    let c = geoCentroid(feature) as [number, number];
    if (geoContains(feature as GeoPermissibleObjects, c)) return c;

    // 2) largest polygon centroid (for MultiPolygon)
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

    // 3) bbox center fallback
    const [[minLon, minLat], [maxLon, maxLat]] = geoBounds(
        feature as GeoPermissibleObjects
    );
    return [(minLon + maxLon) / 2, (minLat + maxLat) / 2];
}

// ---------- Data ----------
const officeLocations: Office[] = [
    {
        name: "Corporate Office",
        city: "Manesar, Gurugram",
        address: "CP-9, Sector-8, IMT Manesar, Gurugram, Haryana-122052",
        coordinates: [76.9306, 28.367],
        type: "corporate",
        // employees: "150+",
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
        // employees: "80+",
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
        // employees: "60+",
        icon: "🏢",
        phone: "+91-361-123-4567",
        email: "guwahati@paraansconsultech.com",
    },
];

// Build a Google Maps directions URL to the office (from current location)
const getDirectionsUrl = (office: Office) => {
    const [lon, lat] = office.coordinates; // [lon, lat]
    const destination = `${lat},${lon}`; // Google expects lat,lng
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        destination
    )}&travelmode=driving&dir_action=navigate`;
};

export default function Map_Sidebar() {
    const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
    return (
        <>
            <div className="container mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8 items-start bg-white">
                {/* Map */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Pan India Locations</h2>
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
                                {/* States (colored or excluded) */}
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

                                            const fillColor = shouldExcludeColor(key)
                                                ? "#ffffff"
                                                : isHL
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

                                {/* State pins (skip Andaman + Ladakh; place J&K pin in Jammu) */}
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
                                            if (!rawName || shouldExcludePin(key)) return null;

                                            const override = PIN_OVERRIDES[key];
                                            const pinAt = override ?? safeCentroid(geo);

                                            return (
                                                <Marker key={`${geo.rsmKey}-pin`} coordinates={pinAt}>
                                                    {/* SVG pin (scaled smaller) */}
                                                    <g transform="translate(-8,-16) scale(0.6)">
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

                                {/* Office markers (keep ripple + labels) */}
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
                                        <span className="font-medium text-gray-700">
                                            Office States (highlighted)
                                        </span>
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
                                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${isSel
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
                                                {/* <div className="text-xs text-gray-500">{o.employees} team members</div> */}
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

                            <button
                                type="button"
                                aria-label="Get Google Maps directions"
                                onClick={() => window.open(getDirectionsUrl(selectedOffice), "_blank")}
                                className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
                            >
                                Get Directions
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M13.5 4.5l7 7-7 7m7-7H3"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}