// "use client"

// type WageRow = {
//   classOfEmployment: "Unskilled" | "Semi-skilled" | "Skilled" | "Highly Skilled"
//   zone: "Zone A" | "Zone B" | "Zone C"
//   basicPerDay: number
//   basicPerMonth: number
//   vdaPerDay: number
//   vdaPerMonth: number
//   totalPerDay: number
//   totalPerMonth: number
// }

// const DATA: WageRow[] = [
//   // Unskilled
//   { classOfEmployment: "Unskilled", zone: "Zone A", basicPerDay: 320, basicPerMonth: 8320, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 430, totalPerMonth: 11176 },
//   { classOfEmployment: "Unskilled", zone: "Zone B", basicPerDay: 310, basicPerMonth: 8060, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 420, totalPerMonth: 10916 },
//   { classOfEmployment: "Unskilled", zone: "Zone C", basicPerDay: 300, basicPerMonth: 7800, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 410, totalPerMonth: 10656 },

//   // Semi-skilled
//   { classOfEmployment: "Semi-skilled", zone: "Zone A", basicPerDay: 345, basicPerMonth: 8970, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 455, totalPerMonth: 11826 },
//   { classOfEmployment: "Semi-skilled", zone: "Zone B", basicPerDay: 335, basicPerMonth: 8710, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 445, totalPerMonth: 11566 },
//   { classOfEmployment: "Semi-skilled", zone: "Zone C", basicPerDay: 325, basicPerMonth: 8450, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 435, totalPerMonth: 11306 },

//   // Skilled
//   { classOfEmployment: "Skilled", zone: "Zone A", basicPerDay: 375, basicPerMonth: 9750, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 485, totalPerMonth: 12606 },
//   { classOfEmployment: "Skilled", zone: "Zone B", basicPerDay: 365, basicPerMonth: 9490, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 475, totalPerMonth: 12346 },
//   { classOfEmployment: "Skilled", zone: "Zone C", basicPerDay: 355, basicPerMonth: 9230, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 465, totalPerMonth: 12086 },

//   // Highly Skilled
//   { classOfEmployment: "Highly Skilled", zone: "Zone A", basicPerDay: 405, basicPerMonth: 10530, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 515, totalPerMonth: 13386 },
//   { classOfEmployment: "Highly Skilled", zone: "Zone B", basicPerDay: 395, basicPerMonth: 10270, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 505, totalPerMonth: 13126 },
//   { classOfEmployment: "Highly Skilled", zone: "Zone C", basicPerDay: 385, basicPerMonth: 10010, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 495, totalPerMonth: 12866 },
// ]

// // Group as-is (no structural change)
// const grouped = DATA.reduce<Record<WageRow["classOfEmployment"], WageRow[]>>((acc, row) => {
//   ;(acc[row.classOfEmployment] ||= []).push(row)
//   return acc
// }, {} as any)

// export function WageTable() {
//   const thTop =
//     "px-2 sm:px-3 py-2 sm:py-3 text-[11px] sm:text-sm font-medium border border-border whitespace-nowrap"
//   const td =
//     "px-2 sm:px-3 py-2 sm:py-3 text-[11px] sm:text-sm border border-border align-top"
//   const tdNum =
//     "px-2 sm:px-3 py-2 sm:py-3 text-[11px] sm:text-sm border border-border text-right tabular-nums whitespace-nowrap"

//   return (
//     <div
//       className="
//         w-full overflow-x-auto rounded-lg border border-border bg-card
//         scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent
//       "
//     >
//       <table className="w-full min-w-[720px] sm:min-w-[860px] border-collapse">
//         <thead className="sticky top-0 z-10">
//           <tr>
//             <th
//               colSpan={8}
//               className="
//                 px-4 py-3 text-center text-xs sm:text-sm font-semibold
//                 bg-orange-500 text-white border border-border sticky top-0
//               "
//             >
//               {"Effective Date - 01st April\u201925"}
//             </th>
//           </tr>
//           <tr className="bg-orange-500 text-white sticky top-[41px] sm:top-[48px]">
//             <th scope="col" className={thTop}>Class of Employment</th>
//             <th scope="col" className={thTop}>Zone</th>
//             <th scope="col" className={`${thTop} text-right`}>Basic Per Day</th>
//             <th scope="col" className={`${thTop} text-right`}>Basic Per Month</th>
//             <th scope="col" className={`${thTop} text-right`}>VDA Per Day</th>
//             <th scope="col" className={`${thTop} text-right`}>VDA Per Month</th>
//             <th scope="col" className={`${thTop} text-right`}>Total Per Day</th>
//             <th scope="col" className={`${thTop} text-right`}>Total Per Month</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(grouped).map(([clazz, rows]) =>
//             rows.map((row, idx) => (
//               <tr key={`${clazz}-${row.zone}`} className="even:bg-muted/40">
//                 {idx === 0 ? (
//                   <th
//                     scope="rowgroup"
//                     rowSpan={rows.length}
//                     className={`${td} font-semibold bg-card sticky left-0 z-[1]`}
//                   >
//                     {clazz}
//                   </th>
//                 ) : null}
//                 <td className={td}>{row.zone}</td>
//                 <td className={tdNum}>{row.basicPerDay.toLocaleString()}</td>
//                 <td className={tdNum}>{row.basicPerMonth.toLocaleString()}</td>
//                 <td className={tdNum}>{row.vdaPerDay.toFixed(2)}</td>
//                 <td className={tdNum}>{row.vdaPerMonth.toLocaleString()}</td>
//                 <td className={tdNum}>{row.totalPerDay.toLocaleString()}</td>
//                 <td className={tdNum}>{row.totalPerMonth.toLocaleString()}</td>
//               </tr>
//             )),
//           )}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default WageTable






"use client";

type WageRow = {
  classOfEmployment: "Unskilled" | "Semi-skilled" | "Skilled" | "Highly Skilled";
  zone: "Zone A" | "Zone B" | "Zone C";
  basicPerDay: number;
  basicPerMonth: number;
  vdaPerDay: number;
  vdaPerMonth: number;
  totalPerDay: number;
  totalPerMonth: number;
};

const DATA: WageRow[] = [
  { classOfEmployment: "Unskilled", zone: "Zone A", basicPerDay: 320, basicPerMonth: 8320, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 430, totalPerMonth: 11176 },
  { classOfEmployment: "Unskilled", zone: "Zone B", basicPerDay: 310, basicPerMonth: 8060, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 420, totalPerMonth: 10916 },
  { classOfEmployment: "Unskilled", zone: "Zone C", basicPerDay: 300, basicPerMonth: 7800, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 410, totalPerMonth: 10656 },
  { classOfEmployment: "Semi-skilled", zone: "Zone A", basicPerDay: 345, basicPerMonth: 8970, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 455, totalPerMonth: 11826 },
  { classOfEmployment: "Semi-skilled", zone: "Zone B", basicPerDay: 335, basicPerMonth: 8710, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 445, totalPerMonth: 11566 },
  { classOfEmployment: "Semi-skilled", zone: "Zone C", basicPerDay: 325, basicPerMonth: 8450, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 435, totalPerMonth: 11306 },
  { classOfEmployment: "Skilled", zone: "Zone A", basicPerDay: 375, basicPerMonth: 9750, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 485, totalPerMonth: 12606 },
  { classOfEmployment: "Skilled", zone: "Zone B", basicPerDay: 365, basicPerMonth: 9490, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 475, totalPerMonth: 12346 },
  { classOfEmployment: "Skilled", zone: "Zone C", basicPerDay: 355, basicPerMonth: 9230, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 465, totalPerMonth: 12086 },
  { classOfEmployment: "Highly Skilled", zone: "Zone A", basicPerDay: 405, basicPerMonth: 10530, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 515, totalPerMonth: 13386 },
  { classOfEmployment: "Highly Skilled", zone: "Zone B", basicPerDay: 395, basicPerMonth: 10270, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 505, totalPerMonth: 13126 },
  { classOfEmployment: "Highly Skilled", zone: "Zone C", basicPerDay: 385, basicPerMonth: 10010, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 495, totalPerMonth: 12866 },
];

// Group by class
const grouped: Record<string, WageRow[]> = {};
DATA.forEach((row) => {
  if (!grouped[row.classOfEmployment]) grouped[row.classOfEmployment] = [];
  grouped[row.classOfEmployment].push(row);
});

export default function WageTable() {
  const thTop =
    "px-3 py-3 text-[12px] sm:text-sm font-semibold border border-orange-300 whitespace-nowrap text-white bg-orange-500";
  const td =
    "px-3 py-3 text-[12px] sm:text-sm border border-orange-200 align-top bg-white";
  const tdNum =
    "px-3 py-3 text-[12px] sm:text-sm border border-orange-200 text-right tabular-nums whitespace-nowrap bg-white";

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-orange-400 bg-white shadow-sm">
      <table className="w-full min-w-[780px] sm:min-w-[960px] border-collapse">
        {/* Top Header */}
        <thead>
          <tr>
            <th
              colSpan={8}
              className="px-4 py-3 text-center text-sm sm:text-base font-semibold bg-orange-600 text-white border border-orange-400"
            >
              Effective Date - 01st April’25
            </th>
          </tr>
          <tr className="bg-orange-500 text-white">
            <th className={thTop}>Class of Employment</th>
            <th className={thTop}>Zone</th>
            <th className={thTop}>Basic Per Day</th>
            <th className={thTop}>Basic Per Month</th>
            <th className={thTop}>VDA Per Day</th>
            <th className={thTop}>VDA Per Month</th>
            <th className={thTop}>Total Per Day</th>
            <th className={thTop}>Total Per Month</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {Object.keys(grouped).map((clazz) => {
            const rows = grouped[clazz];
            const totalRows = rows.length;

            return rows.map((row, idx) => (
              <tr key={`${clazz}-${row.zone}`} className="even:bg-orange-50">
                {idx === 0 && (
                  <th
                    rowSpan={totalRows}
                    className="px-3 py-3 border border-orange-300 font-semibold text-gray-800 text-left bg-orange-100"
                  >
                    {clazz}
                  </th>
                )}
                <td className={`${td} font-medium text-gray-800`}>{row.zone}</td>
                <td className={tdNum}>{row.basicPerDay.toLocaleString()}</td>
                <td className={tdNum}>{row.basicPerMonth.toLocaleString()}</td>
                <td className={tdNum}>{row.vdaPerDay.toFixed(2)}</td>
                <td className={tdNum}>{row.vdaPerMonth.toLocaleString()}</td>
                <td className={tdNum}>{row.totalPerDay.toLocaleString()}</td>
                <td className={`${tdNum} text-orange-700 font-semibold`}>
                  {row.totalPerMonth.toLocaleString()}
                </td>
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
}
