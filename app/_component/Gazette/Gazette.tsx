"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  availableStates?: string[];
  searchValue: string;
  stateValue: string;
  isPending?: boolean;
  onSearchChange: (value: string) => void;
  onStateChange: (value: string) => void;
};

const DEFAULT_STATES = ["All States", "Andhra Pradesh", "Delhi", "Karnataka", "Maharashtra", "Tamil Nadu"];

export default function SearchAndStateFilter({
  availableStates,
  searchValue,
  stateValue,
  isPending = false,
  onSearchChange,
  onStateChange,
}: Props) {
  const states = React.useMemo(() => {
    const base = (availableStates?.length ? availableStates : DEFAULT_STATES).slice();
    if (!base.map((s) => s.toLowerCase()).includes("all states")) base.unshift("All States");
    return Array.from(new Set(base));
  }, [availableStates]);

  return (
    <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-end">
      {/* Search */}
      <div className="w-full sm:w-72">
        <Input
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search notifications…"
          disabled={isPending}
          className="h-8 sm:h-9 lg:h-10 text-xs sm:text-sm"
        />
      </div>

      {/* State */}
      <div className="w-full sm:w-56">
        <select
          value={stateValue}
          onChange={(e) => onStateChange(e.target.value)}
          disabled={isPending}
          className="h-8 sm:h-9 lg:h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-xs sm:text-sm"
        >
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Clear search (optional helper) */}
      {searchValue ? (
        <Button
          variant="outline"
          className="h-8 sm:h-9 lg:h-10 text-xs sm:text-sm"
          disabled={isPending}
          onClick={() => onSearchChange("")}
        >
          Clear
        </Button>
      ) : null}
    </div>
  );
}
