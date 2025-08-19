"use client"

// A simplified SVG map of India with state paths.
// In a real application, you might use a more detailed SVG or a library like D3/TopoJSON.
export function IndiaMap() {
  const states = [
    { id: "ap", name: "Andhra Pradesh", pos: { cx: 535, cy: 650 } },
    { id: "ar", name: "Arunachal Pradesh", pos: { cx: 810, cy: 230 } },
    { id: "as", name: "Assam", pos: { cx: 760, cy: 300 } },
    { id: "br", name: "Bihar", pos: { cx: 630, cy: 340 } },
    { id: "cg", name: "Chhattisgarh", pos: { cx: 570, cy: 470 } },
    { id: "dl", name: "Delhi", pos: { cx: 465, cy: 245 } },
    { id: "ga", name: "Goa", pos: { cx: 415, cy: 665 } },
    { id: "gj", name: "Gujarat", pos: { cx: 350, cy: 420 } },
    { id: "hr", name: "Haryana", pos: { cx: 440, cy: 220 } },
    { id: "hp", name: "Himachal Pradesh", pos: { cx: 460, cy: 150 } },
    { id: "jh", name: "Jharkhand", pos: { cx: 630, cy: 400 } },
    { id: "jk", name: "Jammu and Kashmir", pos: { cx: 420, cy: 80 } },
    { id: "ka", name: "Karnataka", pos: { cx: 460, cy: 680 } },
    { id: "kl", name: "Kerala", pos: { cx: 450, cy: 780 } },
    { id: "mp", name: "Madhya Pradesh", pos: { cx: 490, cy: 420 } },
    { id: "mh", name: "Maharashtra", pos: { cx: 450, cy: 530 } },
    { id: "mn", name: "Manipur", pos: { cx: 800, cy: 360 } },
    { id: "ml", name: "Meghalaya", pos: { cx: 730, cy: 330 } },
    { id: "mz", name: "Mizoram", pos: { cx: 780, cy: 400 } },
    { id: "nl", name: "Nagaland", pos: { cx: 810, cy: 320 } },
    { id: "or", name: "Odisha", pos: { cx: 610, cy: 510 } },
    { id: "pb", name: "Punjab", pos: { cx: 420, cy: 180 } },
    { id: "rj", name: "Rajasthan", pos: { cx: 380, cy: 320 } },
    { id: "sk", name: "Sikkim", pos: { cx: 680, cy: 260 } },
    { id: "tn", name: "Tamil Nadu", pos: { cx: 490, cy: 780 } },
    { id: "ts", name: "Telangana", pos: { cx: 510, cy: 580 } },
    { id: "tr", name: "Tripura", pos: { cx: 750, cy: 380 } },
    { id: "up", name: "Uttar Pradesh", pos: { cx: 530, cy: 310 } },
    { id: "uk", name: "Uttarakhand", pos: { cx: 500, cy: 200 } },
    { id: "wb", name: "West Bengal", pos: { cx: 670, cy: 400 } },
  ]

  return (
    <div className="relative w-full aspect-[4/3] bg-white p-4 rounded-lg shadow-lg">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 850 900"
        xmlSpace="preserve"
        className="w-full h-full"
      >
        <g>
          {/* This is a simplified representation. A real map would have complex path data for each state. */}
          <path fill="#D4E6F1" stroke="#5DADE2" strokeWidth="1.5" d="M425,50 L800,200 L700,800 L150,800 L50,200 Z" />
          <text x="425" y="450" fontFamily="Arial" fontSize="24" textAnchor="middle" fill="#555">
            Simplified Map of India
          </text>
          <text x="425" y="480" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#777">
            (Markers indicate presence in each state)
          </text>
        </g>
        {states.map((state) => (
          <g key={state.id} className="group cursor-pointer">
            <circle
              cx={state.pos.cx}
              cy={state.pos.cy}
              r="8"
              fill="#FF5733"
              className="group-hover:r-12 transition-all duration-300"
            />
            <circle cx={state.pos.cx} cy={state.pos.cy} r="4" fill="white" />
            <text
              x={state.pos.cx}
              y={state.pos.cy - 20}
              fontFamily="Arial"
              fontSize="14"
              textAnchor="middle"
              fill="#333"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold"
            >
              {state.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
