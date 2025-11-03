"use client";

import React, { useState } from "react";
import { HotTable } from "@handsontable/react";
import {
  NumericCellType,
  TextCellType,
} from "handsontable/cellTypes";
import Handsontable from "handsontable";
import "handsontable/dist/handsontable.full.min.css";

interface WageRow {
  category: string;
  zone: string;
  basicPerMonth: number;
  vdaPerMonth: number;
  totalPerMonth: number;
  totalPerDay: number;
  hraPerMonth: number;
}

export default function MinimumWageTable() {
  const [data, setData] = useState<WageRow[]>([
    { category: "Unskilled", zone: "Zone I", basicPerMonth: 10021, vdaPerMonth: 681.75, totalPerMonth: 3614, totalPerDay: 524.42, hraPerMonth: 13635 },
    { category: "Unskilled", zone: "Zone II", basicPerMonth: 9425, vdaPerMonth: 651.95, totalPerMonth: 3614, totalPerDay: 501.50, hraPerMonth: 13039 },
    { category: "Unskilled", zone: "Zone III", basicPerMonth: 8828, vdaPerMonth: 622.1, totalPerMonth: 3614, totalPerDay: 478.54, hraPerMonth: 12442 },
    { category: "Semi-skilled", zone: "Zone I", basicPerMonth: 10856, vdaPerMonth: 723.5, totalPerMonth: 3614, totalPerDay: 556.54, hraPerMonth: 14470 },
    { category: "Semi-skilled", zone: "Zone II", basicPerMonth: 10260, vdaPerMonth: 693.7, totalPerMonth: 3614, totalPerDay: 533.62, hraPerMonth: 13874 },
    { category: "Semi-skilled", zone: "Zone III", basicPerMonth: 9664, vdaPerMonth: 663.9, totalPerMonth: 3614, totalPerDay: 510.69, hraPerMonth: 13278 },
    { category: "Skilled", zone: "Zone I", basicPerMonth: 11632, vdaPerMonth: 762.3, totalPerMonth: 3614, totalPerDay: 586.38, hraPerMonth: 15246 },
    { category: "Skilled", zone: "Zone II", basicPerMonth: 11036, vdaPerMonth: 732.5, totalPerMonth: 3614, totalPerDay: 563.46, hraPerMonth: 14650 },
    { category: "Skilled", zone: "Zone III", basicPerMonth: 10440, vdaPerMonth: 702.7, totalPerMonth: 3614, totalPerDay: 540.54, hraPerMonth: 14054 },
  ]);

  // Example role control (set to "admin" to edit, others are read-only)
  const userRole = "admin";
  const isReadOnly = userRole !== "admin";

  return (
    <div className="min-h-screen w-screen bg-orange-50">
      <h1 className="text-3xl font-bold py-6 text-center text-gray-900">
        Minimum Wages – Effective Date: 01st Jul’25
      </h1>

      <div className="w-full overflow-x-auto">
        <HotTable
          data={data.map((row) => Object.values(row))}
          colHeaders={[
            "Category of Employees",
            "Zone",
            "Basic Per Month",
            "VDA Per Month",
            "Total Per Month",
            "Total Per Day",
            "HRA Per Month",
          ]}
          columns={[
            { data: 0, cellType: TextCellType, readOnly: true },
            { data: 1, cellType: TextCellType, readOnly: isReadOnly },
            { data: 2, cellType: NumericCellType, readOnly: isReadOnly },
            { data: 3, cellType: NumericCellType, readOnly: isReadOnly },
            { data: 4, cellType: NumericCellType, readOnly: isReadOnly },
            { data: 5, cellType: NumericCellType, readOnly: isReadOnly },
            { data: 6, cellType: NumericCellType, readOnly: isReadOnly },
          ]}
          width="100%"
          stretchH="all"
          height="auto"
          rowHeaders={true}
          licenseKey="non-commercial-and-evaluation"
          className="w-full"
          colWidths={[200, 120, 150, 150, 150, 150, 150]}
          cells={(row, col) => {
            const cellProperties: Handsontable.CellProperties = {};
            if (row === -1) {
              cellProperties.className =
                "bg-orange-100 font-semibold text-gray-800 text-center";
            }
            if (col === 0) {
              cellProperties.className =
                "bg-orange-50 font-medium text-gray-800";
            }
            return cellProperties;
          }}
          afterChange={(changes) => {
            if (changes && !isReadOnly) {
              const updated = [...data];
              changes.forEach(([row, prop, , newValue]) => {
                const keys = [
                  "category",
                  "zone",
                  "basicPerMonth",
                  "vdaPerMonth",
                  "totalPerMonth",
                  "totalPerDay",
                  "hraPerMonth",
                ] as (keyof WageRow)[];
                const key = keys[prop as number];
                updated[row][key] =
                  typeof newValue === "number"
                    ? newValue
                    : isNaN(Number(newValue))
                    ? (newValue as any)
                    : Number(newValue);
              });
              setData(updated);
            }
          }}
        />
      </div>
    </div>
  );
}
