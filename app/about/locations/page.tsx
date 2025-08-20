
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
    icon: "🏢"
  },
  {
    name: "Regional Office",
    city: "Bangalore",
    address: "No 1/3, 3rd Main, 4th Cross, Mathikere, Bangalore – 560054", 
    coordinates: [77.5946, 12.9716],
    type: "regional",
    employees: "80+",
    icon: "🏢"
  },
  {
    name: "Regional Office",
    city: "Guwahati",
    address: "283, Paltan Bazar, Guwahati, Kamrup Metro, Assam-781008",
    coordinates: [91.7362, 26.1445],
    type: "regional",
    employees: "60+",
    icon: "🏢"
  }
];

export default function locations() {
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
        <div className="p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{office.icon}</span>
            <div className="font-bold text-gray-900">{office.name}</div>
          </div>
          <div className="text-orange-600 font-medium text-sm">{office.city}</div>
          <div className="text-gray-600 text-xs mt-1">{office.employees} employees</div>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-orange-600/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 pt-20 pb-12">
          <div className="container mx-auto px-6 text-center">
            {/* <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8">
              <span className="text-2xl">🇮🇳</span>
              <span className="text-sm font-semibold text-gray-700">Pan-India Presence</span>
            </div> */}
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              Our Locations
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Strategically positioned across India to serve you better with local expertise and nationwide coverage
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
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
                className="w-full h-auto"
              >
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f8fafc" />
                    <stop offset="50%" stopColor="#e2e8f0" />
                    <stop offset="100%" stopColor="#cbd5e1" />
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
                          stroke="#64748b"
                          strokeWidth={1.5}
                          style={{
                            default: { outline: "none" },
                            hover: { 
                              outline: "none",
                              fill: "#e2e8f0",
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
                      fill={office.type === 'corporate' ? '#f97316' : '#3b82f6'}
                      opacity="0.2"
                      className="animate-ping"
                    />
                    <circle
                      r={selectedOffice?.name === office.name ? 20 : 15}
                      fill={office.type === 'corporate' ? '#f97316' : '#3b82f6'}
                      opacity="0.4"
                      className="animate-pulse"
                    />
                    
                    {/* Main marker */}
                    <circle
                      r={selectedOffice?.name === office.name ? 12 : 10}
                      fill={office.type === 'corporate' ? '#ea580c' : '#2563eb'}
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
                      className="fill-gray-800 font-bold text-sm"
                      style={{ fontSize: "12px" }}
                    >
                      {office.city.split(',')[0]}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>

              {/* Modern Legend */}
              <div className="flex justify-center mt-6">
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-500 rounded-full shadow-md"></div>
                      <span className="text-sm font-medium text-gray-700">Corporate HQ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full shadow-md"></div>
                      <span className="text-sm font-medium text-gray-700">Regional Office</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Details Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Office Network</h3>
              <div className="space-y-4">
                {officeLocations.map((office, index) => (
                  <div 
                    key={index}
                    onClick={() => handleMarkerClick(office)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedOffice?.name === office.name
                        ? office.type === 'corporate' 
                          ? 'border-orange-300 bg-orange-50' 
                          : 'border-blue-300 bg-blue-50'
                        : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{office.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-800">{office.city}</h4>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            office.type === 'corporate' 
                              ? 'bg-orange-100 text-orange-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {office.type === 'corporate' ? 'HQ' : 'Regional'}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{office.address}</p>
                        <div className="text-xs text-gray-500">{office.employees} team members</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            {/* <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Coverage Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Total States Covered</span>
                  <span className="text-2xl font-bold">28+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Active Offices</span>
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Team Members</span>
                  <span className="text-2xl font-bold">290+</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Ready to Connect?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Find the nearest office to you and get in touch with our local experts for personalized service
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Contact Nearest Office
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}