"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Download, Loader2 } from "lucide-react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { useEffect, useMemo, useState } from "react";
import type { HolidayStateData } from "@/app/(holidays)/holidays-details/[slug]/page";

import {
  openProtectedDownload,
  handleAutoDownloadOnReturn,
} from "@/lib/download-auth";
import { useRouter } from "next/navigation";

type HolidayDetail = HolidayStateData["holiday_details"][number];

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

function DatePicker({
  selected,
  onChange,
  placeholder,
}: {
  selected: Date | null;
  onChange: (v: Date | null) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="date"
      value={selected ? selected.toISOString().split("T")[0] : ""}
      onChange={(e) =>
        onChange(e.target.value ? new Date(e.target.value) : null)
      }
      className="h-7 min-[375px]:h-8 sm:h-9 md:h-10 px-2 sm:px-3 rounded-md border border-gray-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
      placeholder={placeholder}
    />
  );
}

const cleanDescription = (htmlString: string) =>
  (htmlString || "").replace(/<[^>]*>/g, "").trim();

const formatStateName = (s: string) =>
  s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const formatDisplayDate = (iso: string) => {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = d.getFullYear();
  return `${dd}-${mm}-${yy}`;
};

export default function HolidayDetails({
  initialData,
  slug,
}: {
  initialData: HolidayStateData | null;
  slug: string;
}) {
  const router = useRouter();

  const [apiData, setApiData] = useState<HolidayStateData | null>(initialData);
  const [holidayDetails, setHolidayDetails] = useState<HolidayDetail[]>(
    initialData?.holiday_details ?? []
  );
  const [isLoading, setIsLoading] = useState<boolean>(!initialData);
  const [error, setError] = useState<string | null>(null);

  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    const path =
      typeof window !== "undefined" ? window.location.pathname : "/holidays";
    const search = typeof window !== "undefined" ? window.location.search : "";
    handleAutoDownloadOnReturn(router, path, search);
  }, []);

  useEffect(() => {
    if (initialData) return;
    let ac = new AbortController();

    const run = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(`${API_BASE}/api/holidaysdetail/${slug}`, {
          signal: ac.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const data: HolidayStateData | null = json?.data ?? null;
        setApiData(data);
        setHolidayDetails(data?.holiday_details ?? []);
      } catch (e: any) {
        if (e?.name !== "AbortError") {
          setError("Failed to load holiday data");
          setApiData(null);
          setHolidayDetails([]);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (API_BASE) run();
    return () => ac.abort();
  }, [slug, initialData]);

  const filteredHolidays = useMemo(() => {
    return holidayDetails.filter((h) => {
      const monthOk =
        selectedMonth === "all" ||
        h.month.toLowerCase() === selectedMonth.toLowerCase();
      const typeOk = selectedType === "all" || h.type === selectedType;

      let dateOk = true;
      if (startDate || endDate) {
        const hd = new Date(h.date);
        if (startDate && endDate) dateOk = hd >= startDate && hd <= endDate;
        else if (startDate) dateOk = hd >= startDate;
        else if (endDate) dateOk = hd <= endDate;
      }
      return monthOk && typeOk && dateOk;
    });
  }, [holidayDetails, selectedMonth, selectedType, startDate, endDate]);

  const clearDateFilters = () => {
    setStartDate(null);
    setEndDate(null);
  };

  if (isLoading) {
    return (
      <div className=" bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-orange-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading holiday data...</p>
        </div>
      </div>
    );
  }

  if (error || !apiData) {
    return (
      <div className=" flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error || "No data found"}</p>
          <Button onClick={() => location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="mx-auto px-2 py-2 min-[320px]:px-3 min-[320px]:py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 lg:py-6 xl:px-8">
        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-5 xl:gap-6">
          <div className="lg:col-span-1 lg:order-2 order-1">
            <div className="sticky top-2 sm:top-4 z-10">
              <Card>
                <CardContent className="p-2 sm:p-3 md:p-4">
                  <PopularSearch className="mt-0" />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-4 lg:order-1 order-2 ">
            <div className="mb-3 sm:mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-1 gap-2 sm:gap-3">
                      <h1 className="font-bold text-slate-800 text-sm min-[375px]:text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
                        {formatStateName(apiData?.title)} Holidays (
                        {apiData?.year}) :
                      </h1>

                      <div className="flex flex-col min-[480px]:flex-row gap-2 min-[480px]:gap-1 sm:gap-2 ">

                        <Button
                          className="h-7 min-[375px]:h-8 sm:h-9 md:h-10 bg-orange-500 hover:bg-orange-600 text-white text-xs min-[375px]:text-xs sm:text-sm transition-colors px-2 sm:px-3 md:px-4 cursor-pointer"
                          onClick={() => {
                            const url = apiData?.holiday_pdf_url?.trim();
                            if (!url) {
                              alert("PDF not available");
                              return;
                            }
                            openProtectedDownload(router, url);
                          }}
                        >
                          <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          <span>Download Holiday</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3 sm:mb-4 2xl:-mb-6">
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base text-justify">
                  {apiData?.short_desc
                    ? cleanDescription(apiData?.short_desc)
                    : "This holidays are driven to enable Simple, Beautiful and Effective compliance for you always. You now have access to the most accurate state-wise holiday lists released by the Government gazettes."}
                </p>
              </div>
            </div>

            <div className="pt-7">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="flex justify-center p-[1.2rem] w/full min-[480px]:w-auto h-7 min-[375px]:h-8 sm:h-9 md:h-10 bg-orange-500 text-white text-xs min-[375px]:text-xs sm:text-sm hover:bg-orange-600 px-2 focus-visible:ring-orange-500 focus-visible:border-orange-500 cursor-pointer">
                  <SelectValue placeholder="Months" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="all"
                    className="text-xs sm:text-sm cursor-pointer"
                  >
                    Select Months
                  </SelectItem>
                  {months?.map((m) => (
                    <SelectItem
                      key={m}
                      value={m}
                      className="text-xs sm:text-sm cursor-pointer"
                    >
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="block sm:hidden space-y-2 min-[375px]:space-y-3 mt-5">
              {filteredHolidays?.map((h, i) => (
                <div
                  key={`${h?.holiday_name}-${i}`}
                  className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:border-orange-200 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 pr-2">
                      <h3 className="font-semibold text-xs sm:text-sm text-gray-900 line-clamp-2 mb-1">
                        {h?.holiday_name}
                      </h3>
                      <div className="text-xs text-gray-600">
                        {formatDisplayDate(h?.date)} • {h?.day}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          h?.type === "National"
                            ? "bg-green-100 text-green-800"
                            : h?.type === "Regional"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {h?.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="w-5 h-5 bg-orange-400 rounded-full text-white text-xs font-medium flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span>{h?.month.slice(0, 3)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden sm:block md:hidden space-y-3 mt-2">
              {filteredHolidays.map((h, i) => (
                <div
                  key={`${h?.holiday_name}-${i}`}
                  className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:border-orange-200 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <span className="w-8 h-8 bg-orange-400 rounded-full text-white text-sm font-medium flex items-center justify-center">
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm text-gray-900 mb-1">
                          {h?.holiday_name}
                        </h3>
                        <div className="text-sm text-gray-600">
                          {formatDisplayDate(h?.date)} • {h?.day} •{" "}
                          {h?.month.slice(0, 3)}
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          h?.type === "National"
                            ? "bg-green-100 text-green-800"
                            : h?.type === "Regional"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {h?.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] min-[1600px]:max-w-[1560px] min-[1800px]:max-w-[1720px] min-[1920px]:max-w-[1880px] lg:mx-auto mt-7">
              <div className="overflow-x-auto">
                {/* Outer rounded frame with single orange outline */}
                <div className="rounded-xl overflow-hidden border border-orange-500 lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] min-[1600px]:max-w-[1560px] min-[1800px]:max-w-[1720px] min-[1920px]:max-w-[1880px] lg:mx-auto bg-white">
                  <table className="w-full table-fixed border-collapse">
                    <colgroup>
                      {/* thoda better layout ke liye: S.No thoda chhota, Type thoda bada */}
                      <col style={{ width: "70px" }} />
                      <col />
                      <col style={{ width: "120px" }} />
                      <col style={{ width: "140px" }} />
                      <col style={{ width: "140px" }} />
                      <col style={{ width: "120px" }} />
                    </colgroup>

                    <thead>
                      <tr className="bg-orange-500">
                        {[
                          "S.No",
                          "Holiday Name",
                          "Month",
                          "Date",
                          "Day",
                          "Type",
                        ].map((h, i, arr) => (
                          <th
                            key={h}
                            className={[
                              "text-left font-semibold text-white uppercase tracking-wide",
                              "text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base",
                              "p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4",
                              // header bhi grid ke saath:
                              "border border-orange-500",
                            ].join(" ")}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {filteredHolidays?.map((h, i) => (
                        <tr
                          key={`${h?.holiday_name}-${i}`}
                          className="bg-white"
                        >
                          <td className="border border-orange-500 p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base">
                            {i + 1}
                          </td>

                          <td className="border border-orange-500 p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-800 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base truncate">
                            {h?.holiday_name}
                          </td>

                          <td className="border border-orange-500 p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base">
                            {h?.month.slice(0, 3)}
                          </td>

                          <td className="border border-orange-500 p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base">
                            {formatDisplayDate(h?.date)}
                          </td>

                          <td className="border border-orange-500 p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base">
                            {h?.day}
                          </td>

                          <td className="border border-orange-500 p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4">
                            <span
                              className={[
                                "rounded-full font-medium",
                                "px-2 py-1 md:px-3 md:py-1 lg:px-2 lg:py-1 2xl:px-3 2xl:py-1 min-[1600px]:px-4 min-[1600px]:py-1.5",
                                "text-xs md:text-sm lg:text-[12px] xl:text-[11px] 2xl:text-sm min-[1600px]:text-[15px]",
                                h?.type === "National"
                                  ? "bg-green-100 text-green-800"
                                  : h?.type === "Regional"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800",
                              ].join(" ")}
                            >
                              {h?.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {filteredHolidays?.length === 0 && (
              <Card className="text-center py-8 border-l-4 border-l-orange-500">
                <CardContent>
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No holidays found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters to see more results.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedMonth("all");
                      setSelectedType("all");
                      setStartDate(null);
                      setEndDate(null);
                    }}
                    className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                    aria-label="Clear All Filters"
                  >
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
