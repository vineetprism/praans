"use client"


import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Filter component for Search and State dropdown
const SearchAndStateFilter = ({
  onSearchChange,
  onStateChange,
  searchValue,
  stateValue,
  isPending
}: {
  onSearchChange: (value: string) => void;
  onStateChange: (value: string) => void;
  searchValue: string;
  stateValue: string;
  isPending: boolean;
}) => {
  const [states, setStates] = useState<{ id: number; name: string }[]>([]);

  // Fetch states data from API
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/states`);
        const data = await response.json();
        setStates(data.states);  // Save states to state
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  return (
    <div className="grid gap-3 mb-4 p-2 sm:grid-cols-[minmax(0,1fr)_220px] lg:grid-cols-[minmax(0,1fr)_240px]">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 2xl:w-5 2xl:h-5" />
        <Input
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by title..."
          className="pl-10 h-8 2xl:h-10 text-xs lg:text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          disabled={isPending}
        />
      </div>

      {/* Select with scrollable list for States */}
      <Select
        value={stateValue || undefined}
        onValueChange={onStateChange}
        disabled={isPending}
      >
        <SelectTrigger className="h-8 2xl:h-10 text-xs lg:text-sm bg-gray-100">
          <SelectValue placeholder="Select State" />
        </SelectTrigger>
        <SelectContent
          position="popper"
          sideOffset={6}
          className="z-[60] w-[var(--radix-select-trigger-width)] max-h-60 overflow-y-auto p-0 rounded-md border bg-white shadow-md"
        >
          <SelectItem value="All States">All States</SelectItem>
          {states.map((s) => (
            <SelectItem key={s.id} value={s.name}>
              {s.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchAndStateFilter;

