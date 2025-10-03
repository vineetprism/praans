export default function SalaryTable() {
    const salaryData = [
      {
        class: "Unskilled",
        zones: [
          { zone: "A", basicPerDay: 320, basicPerMonth: 8320, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 430, totalPerMonth: 11176 },
          { zone: "B", basicPerDay: 310, basicPerMonth: 8060, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 420, totalPerMonth: 10916 },
          { zone: "C", basicPerDay: 300, basicPerMonth: 7800, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 410, totalPerMonth: 10656 }
        ]
      },
      {
        class: "Semi-skilled",
        zones: [
          { zone: "A", basicPerDay: 345, basicPerMonth: 8970, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 455, totalPerMonth: 11826 },
          { zone: "B", basicPerDay: 335, basicPerMonth: 8710, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 445, totalPerMonth: 11566 },
          { zone: "C", basicPerDay: 325, basicPerMonth: 8450, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 435, totalPerMonth: 11306 }
        ]
      },
      {
        class: "Skilled",
        zones: [
          { zone: "A", basicPerDay: 375, basicPerMonth: 9750, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 485, totalPerMonth: 12606 },
          { zone: "B", basicPerDay: 365, basicPerMonth: 9490, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 475, totalPerMonth: 12346 },
          { zone: "C", basicPerDay: 355, basicPerMonth: 9230, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 465, totalPerMonth: 12086 }
        ]
      },
      {
        class: "Highly Skilled",
        zones: [
          { zone: "A", basicPerDay: 405, basicPerMonth: 10530, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 515, totalPerMonth: 13386 },
          { zone: "B", basicPerDay: 395, basicPerMonth: 10270, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 505, totalPerMonth: 13126 },
          { zone: "C", basicPerDay: 385, basicPerMonth: 10010, vdaPerDay: 109.85, vdaPerMonth: 2856, totalPerDay: 495, totalPerMonth: 12866 }
        ]
      }
    ];
  
    return (
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="overflow-x-auto">
          <div className="text-center font-bold text-lg mb-4 border border-black p-2 bg-white">
            Effective Date- 01st April'25
          </div>
          
          <table className="w-full border-collapse border border-black bg-white">
            <thead>
              <tr>
                <th className="border border-black p-3 font-bold text-left align-top" rowSpan={2}>
                  Class of Employment
                </th>
                <th className="border border-black p-3 font-bold align-top" rowSpan={2}>
                  Zone
                </th>
                <th className="border border-black p-3 font-bold align-top">
                  Basic<br />Per Day
                </th>
                <th className="border border-black p-3 font-bold align-top">
                  Basic<br />Per<br />Month
                </th>
                <th className="border border-black p-3 font-bold align-top">
                  VDA Per<br />Day
                </th>
                <th className="border border-black p-3 font-bold align-top">
                  VDA Per<br />Month
                </th>
                <th className="border border-black p-3 font-bold align-top">
                  Total Per<br />Day
                </th>
                <th className="border border-black p-3 font-bold align-top">
                  Total Per<br />Month
                </th>
              </tr>
            </thead>
            <tbody>
              {salaryData.map((category, categoryIndex) => (
                category.zones.map((zone, zoneIndex) => (
                  <tr key={`${categoryIndex}-${zoneIndex}`}>
                    {zoneIndex === 0 && (
                      <td 
                        className="border border-black p-3 font-bold text-left align-middle" 
                        rowSpan={category.zones.length}
                      >
                        {category.class}
                      </td>
                    )}
                    <td className="border border-black p-3 text-center align-middle">
                      Zone {zone.zone}
                    </td>
                    <td className="border border-black p-3 text-center align-middle">
                      {zone.basicPerDay}
                    </td>
                    <td className="border border-black p-3 text-center align-middle">
                      {zone.basicPerMonth}
                    </td>
                    <td className="border border-black p-3 text-center align-middle">
                      {zone.vdaPerDay}
                    </td>
                    <td className="border border-black p-3 text-center align-middle">
                      {zone.vdaPerMonth}
                    </td>
                    <td className="border border-black p-3 text-center align-middle">
                      {zone.totalPerDay}
                    </td>
                    <td className="border border-black p-3 text-center align-middle">
                      {zone.totalPerMonth}
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }