"use client";
import React, { useEffect, useState } from "react";
import Papa, { ParseResult } from "papaparse";
import { Card, CardContent } from "@/components/ui/card";
import PopularSearch from "../PopularSearch/PopularSearch";

export default function CsvTable() {
  const [data, setData] = useState<string[][]>([]);

  useEffect(() => {
    fetch("/Book2.csv")
      .then((res) => res.arrayBuffer()) // read binary
      .then((buffer) => {
        const decoder = new TextDecoder("utf-8"); // ✅ force UTF-8
        const csvText = decoder.decode(buffer);

        Papa.parse<string[]>(csvText, {
          complete: (result: ParseResult<string[]>) => {
            const cleanData = result.data.filter(row =>
              row.some(cell => cell && cell.trim() !== "")
            );
            setData(cleanData);
          },
          skipEmptyLines: true,
        });
      });
  }, []);

  if (data.length === 0) return <p>Loading CSV...</p>;

  // === Multi-level headers from CSV ===
  const groupHeaders = data[0]; // e.g. ["", "", "ZONE I", "", "", "ZONE II", "", ""]
  const subHeaders = data[1];   // e.g. ["Designation","Category","Basic Per","VDA Per","Total Per",...]
  const rows = data.slice(2);

  // === MOBILE CARD DATA ===
  const mobileCardData = rows.map((row) => {
    const rowData: { [key: string]: string } = {};
    row.forEach((cell, colIndex) => {
      const gHeader = groupHeaders[colIndex] || "";
      const sHeader = subHeaders[colIndex] || "";
      rowData[`${gHeader} ${sHeader}`.trim()] = cell;
    });
    return rowData;
  });

  const cardThemes = [
    "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
    "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
    "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
    "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
  ];

  return (
    <div className="p-6 overflow-x-auto flex flex-col lg:flex-row justify-center">
      {/* === Mobile Card View === */}
      <div className="block md:hidden w-full">
        <h2 className="text-center font-bold bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-3 rounded-t-lg mb-6 shadow-lg">
          Minimum Wage Rates
        </h2>

        <div className="space-y-4">
          {mobileCardData.map((rowData, index) => {
            const themeClass = cardThemes[index % cardThemes.length];
            return (
              <Card key={index} className={`${themeClass} border border-gray-300 shadow-lg`}>
                <CardContent className="p-5 space-y-2">
                  {Object.entries(rowData).map(([key, value], i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center px-3 py-2 border border-gray-300 rounded-md bg-white/60"
                    >
                      <span className="font-bold text-gray-700 text-sm">{key}:</span>
                      <span className="text-gray-800 text-sm font-semibold">{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* === Desktop Table View === */}
      <div className="hidden md:block lg:w-3/4 overflow-x-auto">
        <table className="w-full border border-orange-500 border-collapse text-sm">
          <thead>
            {/* Row 1: Group Headers */}
            <tr>
              {groupHeaders.map((header, index) => {
                let colSpan = 1;
                for (let j = index + 1; j < groupHeaders.length; j++) {
                  if (groupHeaders[j] === header) colSpan++;
                  else break;
                }
                if (index > 0 && groupHeaders[index] === groupHeaders[index - 1]) {
                  return null;
                }
                return (
                  <th
                    key={index}
                    colSpan={colSpan}
                    className="border border-orange-300 bg-orange-200 text-center font-bold px-3 py-2"
                  >
                    {header || ""}
                  </th>
                );
              })}
            </tr>

            {/* Row 2: Sub Headers */}
            <tr>
              {subHeaders.map((header, i) => (
                <th
                  key={i}
                  className="border border-orange-300 bg-orange-100 font-bold text-center px-3 py-2"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className={`border border-orange-300 px-3 py-2 ${
                      colIndex < 2 ? "text-left font-medium" : "text-center"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* === Right Side PopularSearch === */}
      <div className="hidden lg:block lg:w-1/4 ml-6">
        <div className="sticky top-3">
          <Card className="shadow-lg border-2 border-yellow-500">
            <CardContent className="p-4">
              <PopularSearch />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
