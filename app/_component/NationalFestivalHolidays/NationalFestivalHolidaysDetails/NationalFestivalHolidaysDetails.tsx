"use client";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import React from "react";

type NFHTableRow = {
  Act: string;
  "Applicability to": string;
  "Eligible to avail wages on NH&FH": string;
  "List of National Holidays": string;
  "Festival Holidays": string;
  "Total Number of National & Festival Holidays in a year": string;
  "Provision if worked on NH/FH (Double the Wages/Comp off)": string;
  "Time Limit to Avail the Comp Off": string;
  "Notice to Labour Inspector in case of working on Holidays": string;
  "Any other Forms to be maintained/submitted": string;
  "Penal Consequences": string;
};

type StateNFHData = {
  state: { name: string; slug: string };
  updated_date: string;
  effective_date: string;
  nfh_table: { header: string[]; rows: NFHTableRow[] };
  tiles: { form_title: string; form_url: string };
};

type NFHDetailApi = { data: StateNFHData };

type Props = {
  initialData: NFHDetailApi;
  apiBase: string;
  slug: string;
};

const toStr = (v: unknown) => (v ?? "").toString();

const gridColsClass = (count: number) => {
  const map: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };
  return map[Math.min(Math.max(1, count), 4)];
};

const badgeTone = (value: string) => {
  const normalized = value.trim().toLowerCase();
  if (["yes", "y", "1", "true"].includes(normalized))
    return "bg-green-100 text-green-800";
  if (["no", "n", "0", "false"].includes(normalized))
    return "bg-red-100 text-red-800";
  return "bg-gray-100 text-gray-800";
};

const parseApplicability = (value: string) => {
  const categories: Record<string, string> = {};
  const regex = /(\S+?)\s*\(([^)]+)\)/g;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(value)) !== null) {
    categories[m[1]] = m[2];
  }
  return categories;
};

export default function NationalFestivalHolidaysDetails({
  initialData,
}: Props) {
  const stateData = initialData.data;
  const headers = stateData.nfh_table.header || [];
  const rows = stateData.nfh_table.rows || [];

  const handleDownload = () => {
    if (stateData.tiles?.form_url)
      window.open(stateData.tiles.form_url, "_blank");
  };

  const renderCellContent = (header: string, rawValue: unknown) => {
    const value = toStr(rawValue);

    if (header === "Applicability to") {
      const categories = parseApplicability(value);
      const keys = Object.keys(categories);
      if (!keys?.length) return <span className="text-gray-700">{value}</span>;
      const cols = gridColsClass(keys.length);
      return (
        <div className={`grid ${cols} gap-3 sm:gap-4`}>
          {keys?.map((k) => (
            <div key={k} className="min-w-0">
              <div className="font-medium text-gray-900 capitalize truncate">
                {k.replaceAll("_", " ")}
              </div>
              <Badge className={`mt-1 ${badgeTone(categories[k])}`}>
                {categories[k]}
              </Badge>
            </div>
          ))}
        </div>
      );
    }

    if (header === "List of National Holidays") {
      let holidays: string[] = [];
      const paren = value.match(/[^()]*\([^)]*\)/g);
      if (paren?.length) holidays = paren.map((s) => s.trim());
      else if (value.includes(","))
        holidays = value
          .split(",")
          .map((x) => x.trim())
          .filter(Boolean);
      else if (value.includes("\n"))
        holidays = value
          .split("\n")
          .map((x) => x.trim())
          .filter(Boolean);
      else holidays = value.split(/\s+/).filter((x) => x.includes("("));
      const count = holidays?.length;
      return (
        <div className="flex items-start gap-3 sm:gap-4 flex-wrap">
          <Badge className="font-semibold bg-blue-100 text-blue-800">
            {count}
          </Badge>
          <ul className="list-disc list-inside space-y-1 text-gray-700 w-full sm:w-auto">
            {holidays?.length ? (
              holidays.map((h, i) => <li key={i}>{h}</li>)
            ) : (
              <li>{value}</li>
            )}
          </ul>
        </div>
      );
    }

    if (header === "Total Number of National & Festival Holidays in a year") {
      return (
        <Badge className="bg-purple-100 text-purple-800 font-semibold text-base sm:text-lg px-2.5 py-1">
          {value}
        </Badge>
      );
    }

    return (
      <span className="text-gray-700 break-words whitespace-pre-wrap">
        {value}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto w-full px-2 sm:px-4 lg:px-6 2xl:px-10 xl:px-8 py-6 sm:py-8">
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800">
              NFH Details of {stateData?.state?.name} :
            </h1>
            <div className="sm:shrink-0">
              <Button
                onClick={handleDownload}
                className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
                aria-label="Download NFH"
              >
                <Download className="w-4 h-4 mr-2" /> Download NFH
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
          <div className="lg:col-span-3">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle className="text-xl sm:text-2xl text-gray-900">
                  National Festival Holiday Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="lg:hidden divide-y">
                  {headers?.map((header) => (
                    <div key={header} className="p-4">
                      <div className="text-sm font-semibold text-gray-900 mb-2">
                        {header}
                      </div>
                      <div className="space-y-2">
                        {rows?.map((row, idx) => (
                          <div key={idx}>
                            {renderCellContent(header, (row as any)[header])}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden lg:block overflow-x-auto">
                  <table className="w-full text-left">
                    <tbody>
                      {headers?.map((header) => (
                        <tr
                          key={header}
                          className="border-b border-gray-200 align-top"
                        >
                          <td className="p-4 lg:p-5 font-semibold text-gray-900 bg-gray-50 w-1/3 min-w-[260px]">
                            {header}
                          </td>
                          <td className="p-4 lg:p-5">
                            <div className="space-y-3">
                              {rows?.map((row, idx) => (
                                <div key={idx}>
                                  {renderCellContent(
                                    header,
                                    (row as any)[header]
                                  )}
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="lg:sticky lg:top-24">
              <CardContent className="p-3 sm:p-4">
                <PopularSearch className="mt-2" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
