// "use client";

// import { useState, useEffect } from "react";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";

// type Props = {
//   onSearchChange: (value: string) => void;
//   onStateChange: (value: string) => void;
//   searchValue: string;
//   stateValue: string;
//   isPending: boolean;
//   /** Optional: parent se spacing/override dene ke liye */
//   className?: string;
// };

// // Filter component for Search and State dropdown
// const SearchAndStateFilter = ({
//   onSearchChange,
//   onStateChange,
//   searchValue,
//   stateValue,
//   isPending,
//   className = "",
// }: Props) => {  
//   const [states, setStates] = useState<{ id: number; name: string }[]>([]);

//   useEffect(() => {
//     const fetchStates = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/states`);
//         const data = await res.json();
//         setStates(data.states ?? []);
//       } catch (error) {
//         console.error("Error fetching states:", error);
//       }
//     };
//     fetchStates();
//   }, []);

//   return (
//     <div
//       className={[
//         "grid gap-0",
//         "sm:grid-cols-[minmax(0,1fr)_220px]",
//         "lg:grid-cols-[minmax(0,1fr)_240px]",
//         className,
//       ].join(" ")}
//     >
//       {/* Search */}
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 2xl:w-5 2xl:h-5" />
//         <Input
//           value={searchValue}
//           onChange={(e) => onSearchChange(e.target.value)}
//           placeholder="Search by title..."
//           className="pl-10 h-8 2xl:h-10 text-xs lg:text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//           disabled={isPending}
//         />
//       </div>

//       {/* States */}
//       <Select value={stateValue || undefined} onValueChange={onStateChange} disabled={isPending}>
//         <SelectTrigger className="p-[1.1rem] h-9 2xl:h-12 2xl:w-[170px] text-xs lg:text-sm bg-gray-100 ml-3" aria-label={stateValue ? `State: ${stateValue}` : "Select state"}>
//           <SelectValue placeholder="Select State" />
//         </SelectTrigger>
//         <SelectContent
//           position="popper"
//           sideOffset={6}
//           className="z-[60] w-[var(--radix-select-trigger-width)] max-h-60 overflow-y-auto p-0 rounded-md border bg-white shadow-md"
//         >
//           <SelectItem value="All States">All States</SelectItem>
//           {states?.map((s) => (
//             <SelectItem key={s?.id} value={s?.name}>
//               {s?.name}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   );
// };

// export default SearchAndStateFilter;










// "use client";

// import { useState, useEffect } from "react";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";

// type Props = {
//   onSearchChange: (value: string) => void;
//   onStateChange: (value: string) => void;
//   searchValue: string;
//   stateValue: string;
//   isPending: boolean;
//   states?: { label: string; value: string }[];
//   className?: string;
// };

// // Filter component for Search and State dropdown
// const SearchAndStateFilter = ({
//   onSearchChange,
//   onStateChange,
//   searchValue,
//   stateValue,
//   isPending,
//   states = [],
//   className = "",
// }: Props) => {
//   const [apiStates, setApiStates] = useState<{ id: number; name: string }[]>([]);

//   useEffect(() => {
//     // Always try to fetch from API first, then fallback to props if needed
//     const fetchStates = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/states`);
//         if (res.ok) {
//           const data = await res.json();
//           setApiStates(data.states ?? []);
//         }
//       } catch (error) {
//         console.error("Error fetching states:", error);
//         // If API fails, we'll use the states prop as fallback
//       }
//     };
    
//     fetchStates();
//   }, []);

//   // Use fetched API states first, then fallback to provided states prop
//   const stateOptions = apiStates.length > 0 
//     ? [{ label: "All States", value: "All States" }, ...apiStates.map(s => ({ label: s.name, value: s.name }))]
//     : states.length > 0 
//     ? states 
//     : [{ label: "All States", value: "All States" }];

//   return (
//     <div
//       className={[
//         "flex flex-col gap-3 sm:flex-row sm:gap-4",
//         "items-stretch sm:items-center",
//         className,
//       ].join(" ")}
//     >
//       {/* Search Input */}
//       <div className="relative flex-1">
//         <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//         <Input
//           value={searchValue}
//           onChange={(e) => onSearchChange(e.target.value)}
//           placeholder="Search by title..."
//           className="pl-12 py-1 h-10 rounded-lg border-orange-300 focus:ring-orange-500 focus:border-orange-500 text-sm"
//           disabled={isPending}
//         />
//       </div>

//       {/* State Dropdown */}
//       <div className="flex-shrink-0">
//         <Select value={stateValue || undefined} onValueChange={onStateChange} disabled={isPending}>
//           <SelectTrigger className="w-full sm:w-48 h-10 text-sm bg-gray-100 hover:bg-gray-200 border-orange-300 focus:ring-orange-500 focus:border-orange-500" 
//             aria-label={stateValue ? `State: ${stateValue}` : "Select state"}>
//             <SelectValue placeholder="Select State" />
//           </SelectTrigger>
//           <SelectContent
//             position="popper"
//             sideOffset={6}
//             className="z-[60] w-[var(--radix-select-trigger-width)] max-h-60 overflow-y-auto p-0 rounded-md border bg-white shadow-md"
//           >
//             {stateOptions.map((option, index) => (
//               <SelectItem key={`${option.value}-${index}`} value={option.value}>
//                 {option.label}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>
//     </div>
//   );
// };

// export default SearchAndStateFilter;












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