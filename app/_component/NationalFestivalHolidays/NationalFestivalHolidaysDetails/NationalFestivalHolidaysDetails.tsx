"use client";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

type NFHTableRow = {
  [key: string]: string;
};

type SectionItem = {
  title: string;
  count: string | number;
  items: string[];
};

type StateNFHData = {
  state: { name: string; slug: string };
  updated_date: string;
  effective_date: string;
  nfh_table: { header: string[]; rows: NFHTableRow[] };
  tiles: { form_title: string | null; form_url: string | null };
  sections?: SectionItem[];
};

type NFHDetailApi = { data: StateNFHData };

type Props = {
  initialData: NFHDetailApi;
};

const toStr = (v: unknown) => (v ?? "").toString();

export default function NationalFestivalHolidaysDetails({
  initialData,
}: Props) {
  const stateData = initialData.data;
  const headers = stateData.nfh_table?.header || [];
  const rows = stateData.nfh_table?.rows || [];
  const sections = stateData.sections || [];

  const handleDownload = () => {
    if (stateData.tiles?.form_url)
      window.open(stateData.tiles.form_url, "_blank");
  };

  const renderCellContent = (header: string, rawValue: unknown) => {
    const value = toStr(rawValue);

    if (header === "List of National Holidays") {
      const holidays =
        value
          ?.split(/,|\n/)
          ?.map((x) => x.trim())
          ?.filter(Boolean) || [];
      return (
        <ul className="list-disc list-inside space-y-1 text-[#1F2937]">
          {holidays.length ? (
            holidays.map((h, i) => <li key={i}>{h}</li>)
          ) : (
            <li>{value}</li>
          )}
        </ul>
      );
    }

    if (header === "Total Number of National & Festival Holidays in a year") {
      return (
        <Badge className="bg-[#FFF3E8] text-[#E85C0D] font-semibold">
          {value}
        </Badge>
      );
    }

    return (
      <span className="text-[#1F2937] break-words whitespace-pre-wrap">
        {value}
      </span>
    );
  };

  return (
    <div className="">
      <div className="mx-auto w-full px-2 sm:px-4 lg:px-6 2xl:px-10 xl:px-8 py-6 sm:py-8">
        {/* top bar */}
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1F2937]">
              NFH Details of {stateData?.state?.name} :
            </h1>
            <div className="sm:shrink-0">
              <Button
                onClick={handleDownload}
                className="w-full sm:w-auto bg-[#E85C0D] hover:bg-[#c44c08] text-white"
                aria-label="Download NFH"
              >
                <Download className="w-4 h-4 mr-2" /> Download NFH
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
          {/* LEFT */}
          <div className="lg:col-span-3 space-y-6">
            {/* ===== MAIN NFH TABLE ===== */}
            <Card className="border-0 shadow-none p-0">
              <CardContent className="p-0">
                {/* DESKTOP */}
                <div className="hidden lg:block overflow-x-auto">
                  {/* rounded + overflow-hidden fix */}
                  <div className="rounded-2xl overflow-hidden border border-[#F6B084]">
                    <table className="w-full text-left border-collapse">
                      <tbody>
                        {headers?.map((header, idx) => (
                          <tr
                            key={header}
                            className={
                              idx !== headers.length - 1
                                ? "border-b border-[#F6B084]"
                                : ""
                            }
                          >
                            {/* left cell */}
                            <td
                              className="p-4 lg:p-5 font-semibold w-1/3 min-w-[240px] bg-[#FFF3E8] text-[#E85C0D] align-top"
                              style={{ borderRight: "1px solid #F6B084" }}
                            >
                              {header}
                            </td>
                            {/* right cell */}
                            <td className="p-4 lg:p-5 align-top bg-white">
                              <div className="space-y-3">
                                {rows?.map((row, idx2) => (
                                  <div key={idx2}>
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
                </div>

                {/* MOBILE */}
                <div className="lg:hidden rounded-2xl overflow-hidden border border-[#F6B084]">
                  {headers?.map((header, idx) => (
                    <div
                      key={header}
                      className={
                        idx !== headers.length - 1
                          ? "border-b border-[#F6B084]"
                          : ""
                      }
                    >
                      <div className="bg-[#FFF3E8] text-[#E85C0D] font-semibold px-4 py-3">
                        {header}
                      </div>
                      <div className="px-4 py-3 space-y-2 bg-white">
                        {rows?.map((row, ridx) => (
                          <div key={ridx}>
                            {renderCellContent(header, (row as any)[header])}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ===== SECTIONS TABLE (National / Festival) ===== */}
            {sections.length > 0 && (
              <Card className="border-0 shadow-none p-0">
                <CardContent className="p-0">
                  <div className="rounded-2xl overflow-hidden border border-orange-700">
                    <div className="px-4 pt-4 pb-3 text-base sm:text-lg font-semibold text-[#1F2937] bg-white">
                      National &amp; Festival Holidays (as per state data)
                    </div>

                    <table className="w-full border-t border-orange-700">
                      <tbody>
                        {(() => {
                          // total calc
                          const totalHolidays = sections.reduce(
                            (sum, section) => {
                              const count = Number(section.count || 0);
                              const len = (section.items || []).length;
                              const effective = Math.max(count, len);
                              return sum + effective;
                            },
                            0
                          );

                          return (
                            <>
                              {sections.map((section, idx) => {
                                const count = Number(section.count || 0);
                                const items = section.items || [];
                                const effective = Math.max(count, items.length);

                                return (
                                  <tr
                                    key={section.title}
                                    className={
                                      idx !== sections.length - 1
                                        ? "border-b border-orange-700"
                                        : ""
                                    }
                                  >
                                    {/* left */}
                                    <td className="bg-[#FFF3E8] text-orange-700 font-semibold px-4 py-3  w-64 align-middle text-center">
                                      {section.title}
                                    </td>

                                    {/* count */}
                                    <td
                                      className="px-4 py-3 align-middle font-medium w-20 text-[#1F2937] text-center border-l border-r border-orange-700"
                                      
                                    >
                                      {effective}
                                    </td>

                                    {/* vertical list */}
                                    <td
                                      className="px-0 py-0 align-top bg-white border-l border-orange-700"
                                     
                                    >
                                      <div className="flex flex-col">
                                        {Array.from({ length: effective }).map(
                                          (_, i) => (
                                            <div
                                              key={i}
                                              className={
                                                i !== effective - 1
                                                  ? "px-4 py-2 text-[#1F2937] border-b border-orange-700"
                                                  : "px-4 py-2 text-[#1F2937]"
                                              }
                                            >
                                              {items[i] ?? ""}
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}

                              {/* total row */}
                              <tr className="border-t border-orange-700">
                                {/* left label */}
                                <td className=" bg-orange-50 text-orange-700 font-semibold px-4 py-3 w-64 align-middle text-center">
                                  Total Holidays
                                </td>

                                {/* count */}
                                <td className="bg-white px-4 py-3 font-medium w-20 border-l border-r border-orange-700 align-middle text-center">
                                  {totalHolidays}
                                </td>
                                
                              </tr>
                            </>
                          );
                        })()}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* RIGHT */}
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
