'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import PopularSearch from "../PopularSearch/PopularSearch";
import { useEffect, useState } from "react";


export default function HolidaysPage() {
  const [year, setYear] = useState("2025"); // Default year is 2025
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch holidays data based on selected year
  useEffect(() => {
    const fetchHolidays = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/holidays/${year}`);
        const data = await response.json();
        setHolidays(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, [year]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-auto px-2 py-2 min-[375px]:px-3 min-[375px]:py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 xl:px-6">
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
          
          {/* Popular Search Sidebar */}
          <div className="lg:col-span-1 lg:order-2 order-1">
            <div className="sticky top-4 z-10">
              <Card>
                <CardContent className="p-3">
                  <PopularSearch className="mt-0" />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4 lg:order-1 order-2">
            
            {/* Page Header */}
            <div className="mb-4">
              <div className="mb-4">
                <div className="flex justify-between">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">
                    Holiday Lists :
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-1">
                    {/* Year Selector */}
                    <div className="flex-shrink-0">
                      <Select value={year} onValueChange={setYear}>
                        <SelectTrigger className="w-24 sm:w-32 border-orange-300 focus:ring-orange-500 h-9 ">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2023">2023</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify mb-3">
                  "Statutory Holidays" are public or legal holidays designated by government authorities based on cultural, religious, historical, or national significance within a particular country or region as mandated by law. Every employee is entitled to a day off with pay or premium pay if they work on such occasions.
                </p>
              </div>
            </div>

            {/* States Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
              {loading ? (
                <p>Loading holidays...</p>
              ) : error ? (
                <p className="text-red-600">Failed to fetch holidays. Please try again later.</p>
              ) : (
                holidays.map((holiday, index) => (
                  <Link key={index} href={`/holidays/${holiday.slug}`}>
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg cursor-pointer overflow-hidden">
                      <div className="p-2 sm:p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xs sm:text-sm font-semibold text-slate-800 mb-1 sm:mb-2 line-clamp-2 leading-tight min-h-[24px] sm:min-h-[28px] lg:min-h-[35px]">
                              {holiday.state}
                            </h3>

                            <div className="flex items-center text-xs text-orange-600 font-medium">
                              <Calendar className="w-3 h-3 mr-1" />
                              {year}
                            </div>
                          </div>
                          <div className="flex-shrink-0 ml-2">
                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                              <ChevronRight className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
