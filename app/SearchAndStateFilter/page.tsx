"use client";

import { useState, useEffect, Fragment } from "react";
import { Search, ChevronDown, Check } from "lucide-react";
import { Combobox, Transition } from '@headlessui/react';

type Props = {
  onSearchChange: (value: string) => void;
  onStateChange: (value: string) => void;
  searchValue: string;
  stateValue: string;
  isPending: boolean;
  states?: { label: string; value: string }[];
  className?: string;
};

const SearchAndStateFilter = ({
  onSearchChange,
  onStateChange,
  searchValue,
  stateValue,
  isPending,
  states = [],
  className = "",
}: Props) => {
  const [apiStates, setApiStates] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/states`);
        if (res.ok) {
          const data = await res.json();
          setApiStates(data.states ?? []);
        }
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    
    fetchStates();
  }, []);

  const stateOptions = apiStates.length > 0 
    ? [{ label: "All States", value: "All States" }, ...apiStates.map(s => ({ label: s.name, value: s.name }))]
    : states.length > 0 
    ? states 
    : [{ label: "All States", value: "All States" }];

  const selectedState = stateOptions.find(option => option.value === stateValue) || stateOptions[0];

  return (
    <div
      className={[
        "flex flex-col gap-3 sm:flex-row sm:gap-4",
        "items-stretch sm:items-center",
        className,
      ].join(" ")}
    >
      {/* Search Input - Clean & Simple */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 w-4 h-4" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by title..."
          className="w-full h-10 pl-10 pr-4 bg-white border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
          disabled={isPending}
        />
      </div>

      {/* State Dropdown - Minimal & Clean */}
      <div className="flex-shrink-0">
        <Combobox value={selectedState} onChange={(state) => onStateChange(state?.value || "All States")} disabled={isPending}>
          <div className="relative">
            <Combobox.Button className="relative w-full sm:w-48 h-10 pl-3 pr-8 bg-white border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm transition-colors">
              <span className="block truncate text-left text-gray-900">
                {selectedState?.label || "Select State"}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </span>
            </Combobox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {stateOptions.map((option, index) => (
                  <Combobox.Option
                    key={`${option.value}-${index}`}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-8 pr-4 ${
                        active ? 'bg-orange-100 text-orange-900' : 'text-gray-900'
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {option.label}
                        </span>
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-orange-600' : 'text-orange-600'}`}>
                            <Check className="h-4 w-4" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </div>
  );
};

export default SearchAndStateFilter;