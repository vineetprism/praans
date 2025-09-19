"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FilterProps = {
  /** Optional list to populate the State dropdown */
  availableStates?: string[];
  /** Controlled search input value */
  searchValue: string;
  /** Controlled state dropdown value */
  stateValue: string;
  /** Disable inputs during transitions */
  isPending?: boolean;
  /** Invoked on search text change */
  onSearchChange: (value: string) => void;
  /** Invoked on state change */
  onStateChange: (value: string) => void;
};

const DEFAULT_STATES = ["All States", "Andhra Pradesh", "Delhi", "Karnataka", "Maharashtra", "Tamil Nadu"];

function SearchAndStateFilter({
  availableStates,
  searchValue,
  stateValue,
  isPending = false,
  onSearchChange,
  onStateChange,
}: FilterProps) {
  const states = React.useMemo(() => {
    const base = (availableStates?.length ? availableStates : DEFAULT_STATES).slice();
    // Ensure "All States" exists & is first
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

// Default export expected by app/gazette/page.tsx
export default function GazetteNotificationsClient({
  initialData,
  initialPage,
  availableStates,
}: {
  initialData: any;
  initialPage: number;
  availableStates?: string[];
}) {
  const [searchValue, setSearchValue] = React.useState("");
  const [stateValue, setStateValue] = React.useState(
    availableStates && availableStates.length ? availableStates[0] : "All States"
  );
  const [isPending] = React.useState(false);

  const initialCount = Array.isArray((initialData as any)?.data)
    ? (initialData as any).data.length
    : 0;

  return (
    <div className="w-full space-y-3">
      <SearchAndStateFilter
        availableStates={availableStates}
        searchValue={searchValue}
        stateValue={stateValue}
        isPending={isPending}
        onSearchChange={setSearchValue}
        onStateChange={setStateValue}
      />
      <div className="text-xs text-gray-500">
        Page {initialPage} • {initialCount} item(s)
      </div>
    </div>
  );
}
