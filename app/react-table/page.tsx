"use client";
import React, { useEffect, useState } from "react";
import Papa, { ParseResult } from "papaparse";
import { Card, CardContent } from "@/components/ui/card";
import PopularSearch from "../PopularSearch/PopularSearch";

export default function CsvTable() {
  const [data, setData] = useState<string[][]>([]);

  useEffect(() => {
    fetch("/data.csv")
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse<string[]>(csvText, {
          complete: (result: ParseResult<string[]>) => {
            setData(result.data);
          },
        });
      });
  }, []);

  if (data.length === 0) return <p>Loading CSV...</p>;

  // Top two special rows
  const topRow1 = data[0]?.[0] || "";
  const topRow2 = data[1]?.[0] || "";

  // Actual headers & rows start after these
  const headers = data[2];
  const rows = data.slice(3);

  return (
    <div className="p-6 overflow-x-auto flex flex-col lg:flex-row">
      {/* Table Section */}
      <div className="lg:w-3/4 overflow-x-auto">
        <table className="w-full border border-black border-collapse text-sm">
          <thead>
            {/* ✅ First special row (Effective Date) */}
            <tr>
              <th
                colSpan={headers.length}
                className="text-center font-bold bg-white text-black px-3 py-2 border-none"
                style={{ width: "auto", whiteSpace: "nowrap" }} // Dynamic width based on content
              >
                {topRow1}
              </th>
            </tr>

            {/* ✅ Second special row (General Category) */}
            <tr>
              <th
                colSpan={headers.length}
                className="text-center font-bold bg-yellow-400 text-black px-3 py-2 border-none"
                style={{ width: "auto", whiteSpace: "nowrap" }} // Dynamic width based on content
              >
                {topRow2}
              </th>
            </tr>

            {/* ✅ Actual header row */}
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  className={`border border-orange-100 bg-orange-50 font-bold text-center px-3 py-2 ${
                    i === 0 ? "text-left" : ""
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {row.map((cell, colIndex) => {
                  // Left-align first column (colIndex === 0)
                  const cellClass = colIndex === 0 ? "text-left" : "text-center";

                  return (
                    <td
                      key={colIndex}
                      className={`border border-orange-100 ${cellClass} px-3 py-2 whitespace-pre-wrap`}
                      style={colIndex === 0 ? { paddingRight: "0px" } : {}}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popular Search Section on the Right */}
      <div className="hidden lg:block lg:w-1/4 ml-6">
        <div className="sticky top-3 lg:top-4 xl:top-5">
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-3 lg:p-4">
              <PopularSearch className="mb-0" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
