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
 
