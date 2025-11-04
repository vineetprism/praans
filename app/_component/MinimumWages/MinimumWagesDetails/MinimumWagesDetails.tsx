"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  Globe,
  IndianRupee,
  Check,
  ChevronsUpDown,
  Calendar,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import PopularSearch from "@/app/PopularSearch/PopularSearch";
import {
  openProtectedDownload,
  handleAutoDownloadOnReturn,
} from "@/lib/download-auth";

/* ================== Types ================== */
type Row = Record<string, string | null>;

export type TableBlock = {
  title?: string | null;
  headers: string[];
  rows: Row[];
};

export type Tiles = {
  form_title?: string | null;
  form_url?: string | null;
  calculator_title?: string | null;
  calculator_url?: string | null;
  website_url?: string | null;
};

export type MWSlugData = {
  state: { name: string; slug: string };
  updated_date?: string | null;
  effective_date?: string | null;
  minimum_wage_rates: TableBlock | any;
  employment_categories_benefits: TableBlock | any;
  interest_penality?: TableBlock | any;
  tiles?: Tiles;
};

type PeriodOption = {
  id: number | string;
  state: { name: string; slug: string };
  updated_date_iso: string;
  effective_date_iso: string;
  updated_date: string;
  effective_date: string;
  label: string;
};

/* ================== Utils ================== */
const LOCAL_HOSTS = new Set([
  "localhost",
  "127.0.0.1",
  "127.1.1.0",
  "127.0.1.1",
  "::1",
]);
const cn = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(" ");
const fmt = (s?: string | null) =>
  typeof s === "string" && s.trim().length ? s : "—";

const toHeaderLabel = (h: any) =>
  String(
    (h && typeof h === "object" && "label" in h ? (h as any).label : h) ?? ""
  ).trim();

const toDisplay = (v: any): string => {
  if (v == null) return "—";
  if (Array.isArray(v))
    return v.map((x) => (x == null ? "—" : String(x))).join(", ");
  if (typeof v === "string") return v;
  if (typeof v === "object") return JSON.stringify(v) || "—";
  return String(v);
};
const cell = (row: Row, header: string) => toDisplay(row?.[header]);

function normalizeUrl(input?: string | null, apiBase?: string): string | null {
  if (!input) return null;
  const val = input.trim();
  const API_ORIGIN = apiBase ? new URL(apiBase).origin : "";
  try {
    const u = new URL(val);
    if (LOCAL_HOSTS.has(u.hostname))
      return (API_ORIGIN || "") + u.pathname + u.search + u.hash;
    return u.toString();
  } catch {
    if (!apiBase) return null;
    if (val.startsWith("/")) return new URL(val, API_ORIGIN).toString();
    if (val.startsWith("storage/") || val.startsWith("/storage/")) {
      return API_ORIGIN + (val.startsWith("/") ? "" : "/") + val;
    }
    return null;
  }
}

function fileNameFromUrl(u: string): string {
  try {
    const url = new URL(u);
    return url.pathname.split("/").filter(Boolean).pop() || "Download";
  } catch {
    return "Download";
  }
}

/* ---------- Normalizer ---------- */
function normalizeMWRates(input: any, fallbackTitle?: string): TableBlock {
  if (Array.isArray(input?.headers) && Array.isArray(input?.rows)) {
    const headers = input.headers.map(toHeaderLabel);
    const rawRows: any[] = input.rows;

    const out: Row[] = [];
    for (const r of rawRows) {
      const maxLen = headers.reduce((m: any, h: any) => {
        const v = (r as any)?.[h];
        return Array.isArray(v) ? Math.max(m, v.length) : m;
      }, 0);

      if (maxLen > 0) {
        for (let i = 0; i < maxLen; i++) {
          const obj: Row = {};
          for (const h of headers) {
            const v = (r as any)?.[h];
            obj[h] = Array.isArray(v)
              ? v[i] == null
                ? "—"
                : String(v[i])
              : toDisplay(v);
          }
          out.push(obj);
        }
      } else {
        const obj: Row = {};
        for (const h of headers) obj[h] = toDisplay((r as any)?.[h]);
        out.push(obj);
      }
    }

    // return {
    //   title: input?.title ?? fallbackTitle ?? "Minimum Wage Rates",
    //   headers,
    //   rows: out,
    // };
    // 🟧 Fill-down logic sirf Minimum Wage table ke liye
    const isFirstTable = (input?.title || fallbackTitle || "")
      .toLowerCase()
      .includes("minimum wage");
    let rowsToReturn = out;
    if (isFirstTable) {
      const filledRows: Row[] = [];
      let lastSeen: Record<string, string> = {};
      for (const row of out) {
        const filled: Row = {};
        for (const h of headers) {
          const val = toDisplay(row[h]);
          if (val !== "—" && val.trim() !== "") {
            lastSeen[h] = val;
          }
          filled[h] =
            val === "—" || val.trim() === "" ? lastSeen[h] || "—" : val;
        }
        filledRows.push(filled);
      }
      rowsToReturn = filledRows;
    }

    return {
      title: input?.title ?? fallbackTitle ?? "Minimum Wage Rates",
      headers,
      rows: rowsToReturn,
    };
  }

  const cols = Array.isArray(input?.columns) ? input.columns : [];
  const rows = Array.isArray(input?.rows) ? input.rows : [];
  const headers = cols.map((c: any) => toHeaderLabel(c?.label ?? c));
  const outRows: Row[] = rows.map((r: any) => {
    const obj: Row = {};
    cols.forEach((c: any) => {
      const label = toHeaderLabel(c?.label ?? c);
      const key = c?.key;
      const v = key in r ? r[key] : r[label];
      obj[label] = Array.isArray(v)
        ? v.map((x: any) => String(x ?? "—")).join(", ")
        : toDisplay(v);
    });
    return obj;
  });

  return {
    title: input?.title ?? fallbackTitle ?? "Minimum Wage Rates",
    headers,
    rows: outRows,
  };
}

/* ---------- Desktop Table (Tablet+) ---------- */

// function DesktopOrangeGrid({
//   block,
//   maxMergeColumns = 3,
//   excludeCols = [/amount|total|basic|vda|hra|per\s+day|per\s+month|rate|wage|monthly|daily/i],
//   includeCols, // e.g. ["Category", /categories of employees/i, "Zone", /name of the category/i]
// }: {
//   block: TableBlock;
//   maxMergeColumns?: number;
//   excludeCols?: (string | RegExp)[];
//   includeCols?: (string | RegExp)[];
// }) {
//   const H: string[] = (block.headers ?? []).map(toHeaderLabel);
//   const R = (block.rows ?? []) as Row[];

//   // ---------- helpers ----------
//   const canonBase = (v: any) => {
//     let s = String(v ?? "");
//     s = s.replace(/<[^>]+>/g, "");                 // strip tags
//     s = s.replace(/[\u00A0\u202F\t]/g, " ");       // NBSP + narrow NBSP + tabs -> space
//     s = s.replace(/[\u2000-\u200B]/g, " ");        // other unicode spaces
//     s = s.replace(/\s+/g, " ");                    // collapse spaces
//     s = s.replace(/[\u2010-\u2015\u2212\uFE58\uFE63\uFF0D-]/g, "-"); // normalize dashes
//     return s.trim().toLowerCase();
//   };

//   // key-aware canonicalization (fix noisy/typo categories etc.)
//   const canonSpecial = (key: string, raw: any) => {
//     let s = canonBase(raw);

//     if (/category/i.test(key)) {
//       // trailing noise
//       s = s.replace(/[.:]+$/g, "").trim();
//       // normalize slash spacing
//       s = s.replace(/\s*\/\s*/g, " / ");
//       // **typo & alias fixes**
//       s = s.replace(/\bcommerical\b/g, "commercial");    // common typo
//       s = s.replace(/\bestabl?ish?m?e?n?t?s?\b/g, "establishment");
//       // final collapse
//       s = s.replace(/\s+/g, " ").trim();
//     }
//     return s;
//   };

//   // placeholder check (ditto rows)
//   const isPlaceholder = (raw: any, key?: string) => {
//     const s = key ? canonSpecial(key, raw) : canonBase(raw);
//     return (
//       !s ||
//       s === "-" ||
//       /^-+$/.test(s) ||
//       /^(na|n\/a|nil|null|blank|none)$/i.test(String(raw ?? "").trim())
//     );
//   };

//   // treat rows with placeholders in ALL non-key cells as "separator"
//   const separatorRow = (rowIdx: number, key: string) => {
//     for (const h of H) {
//       if (h === key) continue;
//       if (!isPlaceholder(R[rowIdx]?.[h], h)) return false;
//     }
//     return true;
//   };

//   // ditto-aware comparison value
//   const valueForCompare = (rowIdx: number, key: string): string => {
//     if (!isPlaceholder(R[rowIdx]?.[key], key)) return canonSpecial(key, R[rowIdx]?.[key]);
//     let k = rowIdx - 1;
//     while (k >= 0) {
//       if (!isPlaceholder(R[k]?.[key], key)) return canonSpecial(key, R[k]?.[key]);
//       k--;
//     }
//     return "__placeholder__";
//   };

//   const isLikelyNumeric = (label: string, colValues: any[]) => {
//     if (excludeCols?.length) {
//       for (const pat of excludeCols) {
//         if (typeof pat === "string"
//           ? label.toLowerCase().includes(pat.toLowerCase())
//           : pat.test(label)) return true;
//       }
//     }
//     let numericish = 0, total = 0;
//     for (const v of colValues) {
//       const s = String(v ?? "").trim();
//       if (!s || s === "—") continue;
//       total++;
//       if (/^[₹$]?\s*-?\d[\d,]*(\.\d+)?\s*$/.test(s)) numericish++;
//     }
//     return total > 0 && numericish / total > 0.85;
//   };

//   const matchOne = (label: string, pats?: (string | RegExp)[]) =>
//     !!pats?.some((p) => (typeof p === "string"
//       ? label.toLowerCase().includes(p.toLowerCase())
//       : p.test(label)));

//   // -------- Force-include leftmost Category-ish column --------
//   const catIdxHard = H.findIndex(h => /category/i.test(h.trim()));
//   const includeColsEffective: (string | RegExp)[] | undefined = React.useMemo(() => {
//     if (catIdxHard < 0) return includeCols;
//     const arr = [...(includeCols ?? [])];
//     const label = H[catIdxHard];
//     const rx = new RegExp("^" + label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "$", "i");
//     if (!arr.some(p => (typeof p === "string"
//       ? label.toLowerCase().includes(p.toLowerCase())
//       : (p as RegExp).test(label)))) {
//       arr.unshift(rx);
//     }
//     return arr;
//   }, [includeCols, catIdxHard, H]);

//   // ---------- score columns by merge-worthiness ----------
//   type ColScore = { idx: number; label: string; avgRun: number; hasRepeats: boolean; };
//   const colScores: ColScore[] = (() => {
//     const scores: ColScore[] = [];
//     H.forEach((label, idx) => {
//       const vals = R.map((row) => row?.[label]);
//       if (isLikelyNumeric(label, vals)) {
//         scores.push({ idx, label, avgRun: 1, hasRepeats: false });
//         return;
//       }
//       let runs = 0, sumRun = 0;
//       let i = 0;
//       while (i < R.length) {
//         const base = valueForCompare(i, label);
//         let j = i + 1;
//         while (j < R.length && valueForCompare(j, label) === base) j++;
//         const span = Math.max(1, j - i);
//         runs++; sumRun += span; i = j;
//       }
//       const avgRun = runs ? sumRun / runs : 1;
//       scores.push({ idx, label, avgRun, hasRepeats: avgRun > 1.0001 });
//     });

//     return scores.sort((a, b) => {
//       const af = matchOne(a.label, includeColsEffective) ? 1 : 0;
//       const bf = matchOne(b.label, includeColsEffective) ? 1 : 0;
//       if (af !== bf) return bf - af;
//       return b.avgRun - a.avgRun;
//     });
//   })();

//   // pick top N textual columns (parent-first order)
//   const mergeIdxs: number[] = (() => {
//     const picked: number[] = [];
//     for (const s of colScores) {
//       const forced = matchOne(s.label, includeColsEffective);
//       if (forced || s.hasRepeats) picked.push(s.idx);
//       if (picked.length >= maxMergeColumns) break;
//     }
//     return picked.sort((a, b) => a - b);
//   })();

//   // ---------- compute rowSpans (parent-first, ditto + separator aware) ----------
//   const spansByColIdx = (() => {
//     const map = new Map<number, number[]>();
//     if (!mergeIdxs.length) return map;

//     for (const cIdx of mergeIdxs) {
//       const key = H[cIdx];
//       const spans = new Array(R.length).fill(1);
//       const isCategoryCol = /category/i.test(key.trim());

//       let i = 0;
//       while (i < R.length) {
//         const base = valueForCompare(i, key);
//         let j = i + 1;

//         while (j < R.length) {
//           const sameThis = valueForCompare(j, key) === base;
//           const passThrough = isCategoryCol && separatorRow(j, key); // absorb blank rows for Category

//           // parents must match too
//           let parentsOk = true;
//           for (const pIdx of mergeIdxs) {
//             if (pIdx >= cIdx) break;
//             const pKey = H[pIdx];
//             if (valueForCompare(j, pKey) !== valueForCompare(i, pKey)) {
//               parentsOk = false; break;
//             }
//           }

//           if (!parentsOk || !(sameThis || passThrough)) break;
//           j++;
//         }

//         const span = j - i;
//         spans[i] = span;
//         for (let k = i + 1; k < j; k++) spans[k] = 0;
//         i = j;
//       }

//       map.set(cIdx, spans);
//     }
//     return map;
//   })();

//   const firstMergeCol = spansByColIdx.size ? Math.min(...Array.from(spansByColIdx.keys())) : -1;

//   return (
//     <Card className="hidden sm:block mb-3 sm:mb-4 lg:mb-3 shadow-sm border-l-4 border-l-orange-500">
//       <CardHeader className="pb-2 px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4">
//         <CardTitle className="text-sm sm:text-base lg:text-lg font-bold">
//           {block.title || "Table"}
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="w-full overflow-x-auto">
//           <div className="min-w-[600px] sm:min-w-[640px] lg:min-w-[720px] rounded-xl overflow-hidden border border-orange-500 mx-2 sm:mx-3 lg:mx-4 mb-3 sm:mb-4">
//             <table className="w-full border-collapse table-fixed">
//               <thead>
//                 <tr className="bg-orange-50 text-orange-700">
//                   {H.map((h, i) => (
//                     <th
//                       key={`${h}-${i}`}
//                       className={`px-2 sm:px-3 py-2 sm:py-3 text-[11px] sm:text-xs lg:text-sm font-semibold uppercase tracking-wide border border-orange-500 ${i === 0 ? "text-left" : "text-center"}`}
//                     >
//                       <span className="break-words">{h}</span>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {R.map((row, r) => (
//                   <tr key={r} className="bg-white hover:bg-orange-50/30 transition-colors">
//                     {H.map((h, c) => {
//                       const spans = spansByColIdx.get(c);
//                       if (spans) {
//                         const span = spans[r] ?? 1;
//                         if (span === 0) return null;
//                         return (
//                           <td
//                             key={`mrg-${r}-${c}`}
//                             rowSpan={span}
//                             className={`px-2 sm:px-3 py-2 sm:py-3 text-[11px] sm:text-xs lg:text-sm text-gray-900 align-top border border-orange-500 ${
//                               c === firstMergeCol ? "bg-orange-50 font-semibold text-left" : "text-left"
//                             }`}
//                           >
//                             <span className="break-words">{String(row?.[h] ?? "—")}</span>
//                           </td>
//                         );
//                       }
//                       return (
//                         <td
//                           key={`cell-${r}-${c}`}
//                           className={`px-2 sm:px-3 py-2 sm:py-3 text-[11px] sm:text-xs lg:text-sm text-gray-900 align-top border border-orange-500 ${c === 0 ? "text-left" : "text-center"}`}
//                         >
//                           <span className="break-words">{String(row?.[h] ?? "—")}</span>
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))}
//                 {(!R || R.length === 0) && (
//                   <tr>
//                     <td colSpan={H.length || 1} className="px-3 sm:px-4 py-4 sm:py-6 text-center text-xs sm:text-sm text-gray-500 border border-orange-500">
//                       No data available.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

function DesktopOrangeGrid({
  block,
  stateSlug,
  maxMergeColumns = 3,
  excludeCols = [
    /amount|total|basic|vda|hra|per\s+day|per\s+month|rate|wage|monthly|daily/i,
  ],
  includeCols,
}: {
  block: TableBlock;
  stateSlug?: string;
  maxMergeColumns?: number;
  excludeCols?: (string | RegExp)[];
  includeCols?: (string | RegExp)[];
}) {
  const H: string[] = (block.headers ?? []).map(toHeaderLabel);
  const R = (block.rows ?? []) as Row[];

  // const isAndhra = stateSlug?.toLowerCase() === "andhra-pradesh";
  const isAndhraOrTamil = ["andhra-pradesh", "tamil-nadu"].includes(
    stateSlug?.toLowerCase() || ""
  );

  // helper functions (same as before) …
  const canonBase = (v: any) => {
    let s = String(v ?? "");
    s = s.replace(/<[^>]+>/g, "").replace(/[\u00A0\u202F\t]/g, " ");
    s = s.replace(/[\u2000-\u200B]/g, " ").replace(/\s+/g, " ");
    s = s.replace(/[\u2010-\u2015\u2212\uFE58\uFE63\uFF0D-]/g, "-");
    return s.trim().toLowerCase();
  };

  const canonSpecial = (key: string, raw: any) => {
    let s = canonBase(raw);
    if (/category/i.test(key)) {
      s = s.replace(/[.:]+$/g, "").replace(/\s*\/\s*/g, " / ");
      s = s.replace(/\bcommerical\b/g, "commercial");
      s = s.replace(/\bestabl?ish?m?e?n?t?s?\b/g, "establishment");
      s = s.replace(/\s+/g, " ").trim();
    }
    return s;
  };

  const isPlaceholder = (raw: any, key?: string) => {
    const s = key ? canonSpecial(key, raw) : canonBase(raw);
    return (
      !s ||
      s === "-" ||
      /^-+$/.test(s) ||
      /^(na|n\/a|nil|null|blank|none)$/i.test(String(raw ?? "").trim())
    );
  };

  const separatorRow = (rowIdx: number, key: string) => {
    for (const h of H) {
      if (h === key) continue;
      if (!isPlaceholder(R[rowIdx]?.[h], h)) return false;
    }
    return true;
  };

  const valueForCompare = (rowIdx: number, key: string): string => {
    if (!isPlaceholder(R[rowIdx]?.[key], key))
      return canonSpecial(key, R[rowIdx]?.[key]);
    let k = rowIdx - 1;
    while (k >= 0) {
      if (!isPlaceholder(R[k]?.[key], key))
        return canonSpecial(key, R[k]?.[key]);
      k--;
    }
    return "__placeholder__";
  };

  const matchOne = (label: string, pats?: (string | RegExp)[]) =>
    !!pats?.some((p) =>
      typeof p === "string"
        ? label.toLowerCase().includes(p.toLowerCase())
        : p.test(label)
    );

  const isLikelyNumeric = (label: string, colValues: any[]) => {
    if (excludeCols?.length) {
      for (const pat of excludeCols) {
        if (
          typeof pat === "string"
            ? label.toLowerCase().includes(pat.toLowerCase())
            : pat.test(label)
        )
          return true;
      }
    }
    let numericish = 0,
      total = 0;
    for (const v of colValues) {
      const s = String(v ?? "").trim();
      if (!s || s === "—") continue;
      total++;
      if (/^[₹$]?\s*-?\d[\d,]*(\.\d+)?\s*$/.test(s)) numericish++;
    }
    return total > 0 && numericish / total > 0.85;
  };

  const catIdxHard = H.findIndex((h) => /category/i.test(h.trim()));
  const includeColsEffective: (string | RegExp)[] | undefined =
    React.useMemo(() => {
      if (catIdxHard < 0) return includeCols;
      const arr = [...(includeCols ?? [])];
      const label = H[catIdxHard];
      const rx = new RegExp(
        "^" + label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "$",
        "i"
      );
      if (
        !arr.some((p) =>
          typeof p === "string"
            ? label.toLowerCase().includes(p.toLowerCase())
            : (p as RegExp).test(label)
        )
      )
        arr.unshift(rx);
      return arr;
    }, [includeCols, catIdxHard, H]);

  // merge logic (unchanged)
  type ColScore = {
    idx: number;
    label: string;
    avgRun: number;
    hasRepeats: boolean;
  };
  const colScores: ColScore[] = (() => {
    const scores: ColScore[] = [];
    H.forEach((label, idx) => {
      const vals = R.map((row) => row?.[label]);
      if (isLikelyNumeric(label, vals)) {
        scores.push({ idx, label, avgRun: 1, hasRepeats: false });
        return;
      }
      let runs = 0,
        sumRun = 0;
      let i = 0;
      while (i < R.length) {
        const base = valueForCompare(i, label);
        let j = i + 1;
        while (j < R.length && valueForCompare(j, label) === base) j++;
        const span = Math.max(1, j - i);
        runs++;
        sumRun += span;
        i = j;
      }
      const avgRun = runs ? sumRun / runs : 1;
      scores.push({ idx, label, avgRun, hasRepeats: avgRun > 1.0001 });
    });
    return scores.sort((a, b) => b.avgRun - a.avgRun);
  })();

  const mergeIdxs: number[] = (() => {
    const picked: number[] = [];
    for (const s of colScores) {
      if (s.hasRepeats || matchOne(s.label, includeColsEffective))
        picked.push(s.idx);
      if (picked.length >= maxMergeColumns) break;
    }
    return picked.sort((a, b) => a - b);
  })();

  const spansByColIdx = (() => {
    const map = new Map<number, number[]>();
    if (!mergeIdxs.length) return map;
    for (const cIdx of mergeIdxs) {
      const key = H[cIdx];
      const spans = new Array(R.length).fill(1);
      const isCategoryCol = /category/i.test(key.trim());
      let i = 0;
      while (i < R.length) {
        const base = valueForCompare(i, key);
        let j = i + 1;
        while (j < R.length) {
          const sameThis = valueForCompare(j, key) === base;
          const passThrough = isCategoryCol && separatorRow(j, key);
          if (!sameThis && !passThrough) break;
          j++;
        }
        const span = j - i;
        spans[i] = span;
        for (let k = i + 1; k < j; k++) spans[k] = 0;
        i = j;
      }
      map.set(cIdx, spans);
    }
    return map;
  })();

  const firstMergeCol = spansByColIdx.size
    ? Math.min(...Array.from(spansByColIdx.keys()))
    : -1;

  return (
    <Card className="hidden sm:block mb-3 sm:mb-4 lg:mb-3 shadow-sm border-l-4 border-l-orange-500">
      <CardHeader className="pb-2 px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4">
        <CardTitle className="text-sm sm:text-base lg:text-lg font-bold">
          {block.title || "Table"}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[600px] sm:min-w-[640px] lg:min-w-[720px] rounded-xl overflow-hidden border border-orange-500 mx-2 sm:mx-3 lg:mx-4 mb-3 sm:mb-4">
            <table className="w-full border-collapse table-fixed">
              <thead>
                <tr className="bg-orange-50 text-orange-700">
                  {H.map((h, i) => (
                    <th
                      key={`${h}-${i}`}
                      className={`px-2 sm:px-3 py-2 sm:py-3 text-[11px] sm:text-xs lg:text-sm font-semibold uppercase tracking-wide border border-orange-500 ${
                        i === 0 ? "text-left" : "text-center"
                      }`}
                    >
                      <span className="break-words">{h}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {R.map((row, r) => (
                  <tr
                    key={r}
                    className="bg-white hover:bg-orange-50/30 transition-colors"
                  >
                    {H.map((h, c) => {
                      // 🟧 Andhra-specific logic: merge only Category every 2 rows
                      // if (isAndhra && /category/i.test(h)) {
                      //   if (r % 2 === 1) return null;
                      //   return (
                      //     <td
                      //       key={`andhra-cat-${r}-${c}`}
                      //       rowSpan={2}
                      //       className="border border-orange-500 bg-orange-50 font-semibold text-center align-middle px-3 py-2"
                      //     >
                      //       {String(row?.[h] ?? "—")}
                      //     </td>
                      //   );
                      // }
                      // 🟧 Andhra & Tamil Nadu merging logic
                      if (
                        /andhra-pradesh|tamil-nadu|telangana/i.test(
                          stateSlug || ""
                        ) &&
                        /category|designation/i.test(h)
                      ) {
                        const groupSize = /tamil-nadu/i.test(stateSlug || "")
                          ? 4
                          : 2; // Tamil Nadu = 4 zones (A–D), Andhra = 2 (I–II)
                        if (r % groupSize !== 0) return null;
                        return (
                          <td
                            key={`south-cat-${r}-${c}`}
                            rowSpan={groupSize}
                            className="border border-orange-500 bg-orange-50 text-left align-middle px-3 py-2"
                          >
                            {String(row?.[h] ?? "—")}
                          </td>
                        );
                      }

                      // 🔸 all other columns = normal logic
                      const spans = spansByColIdx.get(c);
                      if (spans) {
                        const span = spans[r] ?? 1;
                        if (span === 0) return null;
                        return (
                          <td
                            key={`mrg-${r}-${c}`}
                            rowSpan={span}
                            className={`px-2 sm:px-3 py-2 sm:py-3 text-[11px] sm:text-xs lg:text-sm text-gray-900 text-center align-middle border border-orange-500 ${
                              c === firstMergeCol
                                ? "bg-orange-50 text-left align-middle whitespace-pre-line break-words"
                                : "text-center align-middle whitespace-pre-line break-words"
                            }`}
                          >
                            <span className="break-words text-center align-middle">
                              {String(row?.[h] ?? "—")}
                            </span>
                          </td>
                        );
                      }

                      return (
                        // <td
                        //   key={`cell-${r}-${c}`}
                        //   className={`px-2 sm:px-3 py-2 sm:py-3 text-[11px] sm:text-xs lg:text-sm text-gray-900 align-top border border-orange-500 ${
                        //     c === 0 ? "text-center" : "text-center align-middle"
                        //   }`}
                        // >
                        <td
                          key={`cell-${r}-${c}`}
                          className={`px-2 sm:px-3 py-2 sm:py-3 text-[11px] sm:text-xs lg:text-sm text-gray-900 border border-orange-500 text-justify align-middle `}
                        >
                          <span className="break-words">
                            {String(row?.[h] ?? "—")}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/* ---------- Mobile Cards (Small Screens) ---------- */
function MobileCards({ block }: { block: TableBlock }) {
  const H: string[] = (block.headers ?? []).map(toHeaderLabel);
  const R = block.rows ?? [];

  return (
    <div className="block sm:hidden mb-3">
      <Card className="shadow-sm border-l-4 border-l-orange-500">
        <CardHeader className="pb-2 bg-orange-100 text-orange-700 font-bold px-3 py-2.5">
          <CardTitle className="text-sm font-bold text-orange-700 text-center">
            {block.title || "Details"}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-2.5 space-y-2.5">
          {R.map((row, ridx) => (
            <div
              key={ridx}
              className="rounded-lg border border-orange-100 bg-white p-2.5 space-y-1 shadow-sm"
            >
              {H.map((h, i) => (
                <div
                  key={`${ridx}-${i}`}
                  className="grid grid-cols-[100px_minmax(0,1fr)] min-[360px]:grid-cols-[120px_minmax(0,1fr)] gap-2 items-start py-1.5 border-b border-gray-100 last:border-0"
                >
                  <span className="text-[10px] min-[360px]:text-[11px] leading-tight font-semibold text-orange-600 break-words">
                    {h}:
                  </span>
                  <span className="text-[10px] min-[360px]:text-[11px] leading-tight text-slate-800 text-right tabular-nums break-words hyphens-auto">
                    {(() => {
                      const v = (row as Row)?.[h];
                      if (v == null || v === "") return "—";
                      try {
                        if (Array.isArray(v))
                          return (v as any[]).map(String).join(", ");
                        if (typeof v === "string" && /^\s*\[.*\]\s*$/.test(v)) {
                          const parsed = JSON.parse(v);
                          if (Array.isArray(parsed))
                            return parsed.map(String).join(", ");
                        }
                      } catch {}
                      return String(v);
                    })()}
                  </span>
                </div>
              ))}
            </div>
          ))}
          {R.length === 0 && (
            <div className="text-center text-xs text-gray-500 py-4">
              No data available.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/* ---------- Responsive KV Table ---------- */
function ResponsiveKV({
  block,
  title,
}: {
  block: TableBlock | any;
  title?: string | null;
}) {
  const H: string[] = (block.headers ?? []).map(toHeaderLabel);
  const R = (block.rows ?? []) as Row[];

  return (
    <>
      {/* Desktop/Tablet View */}
      <Card className="hidden sm:block mb-3 sm:mb-4 lg:mb-3 shadow-sm border-l-4 border-l-orange-500">
        <CardHeader className="pb-2 px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4">
          <CardTitle className="text-sm sm:text-base lg:text-lg font-bold">
            {title || block.title || "Details"}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[500px] sm:min-w-[600px] rounded-xl overflow-hidden border border-orange-500 mx-2 sm:mx-3 lg:mx-4 mb-3 sm:mb-4">
              <table className="w-full table-fixed border-collapse">
                <colgroup>
                  <col className="w-[160px] sm:w-[200px] lg:w-[220px]" />
                  {R.map((_, i) => (
                    <col key={`kv-col-${i}`} />
                  ))}
                </colgroup>
                <tbody>
                  {H.map((h, ridx) => (
                    <tr
                      key={`kv-r-${ridx}`}
                      className="bg-white hover:bg-orange-50/30 transition-colors"
                    >
                      <th
                        scope="row"
                        className="px-2 sm:px-3 py-2 sm:py-3 text-[11px] sm:text-xs lg:text-sm bg-orange-50 text-orange-700 font-semibold uppercase tracking-wide text-left border-y border-orange-500 border-r-2 border-r-orange-500 align-top"
                      >
                        <span className="break-words">{h}</span>
                      </th>
                      {R.map((row, cidx) => (
                        <td
                          key={`kv-c-${ridx}-${cidx}`}
                          className="px-2 sm:px-3 py-2 sm:py-3 text-[11px] sm:text-xs lg:text-sm text-gray-900 text-justify align-middle leading-snug border border-orange-500 break-words"
                        >
                          {row?.[h] ?? "—"}
                        </td>
                      ))}
                      {R.length === 0 && (
                        <td className="px-2 sm:px-3 py-2 sm:py-3 text-[11px] sm:text-xs lg:text-sm text-gray-500 border border-orange-500">
                          —
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mobile View */}
      <MobileCards
        block={{ ...block, headers: H, title: title || block.title }}
      />
    </>
  );
}

function PeriodCombobox({
  apiBase,
  stateSlug,
  onSelect,
  defaultLabel,
}: {
  apiBase: string;
  stateSlug?: string;
  onSelect: (opt: PeriodOption) => void;
  defaultLabel?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [options, setOptions] = React.useState<PeriodOption[]>([]);
  const [selected, setSelected] = React.useState<PeriodOption | null>(null);
  const [value, setValue] = React.useState<string>("Select period");

  // Button label: हमेशा "Effective Date-: DD-MM-YYYY"
  const makeButtonLabel = (o?: PeriodOption | null) =>
    o ? `Effective Date-: ${o.effective_date}` : "Select period";

  // defaultLabel से fallback निकालें (और "Date-:" जोड़ें)
  const parseEffectiveFromDefault = (s?: string) => {
    if (!s) return undefined;
    const m = s.match(/Effective\s+(\d{2}-\d{2}-\d{4})/i);
    return m ? `Effective Date-: ${m[1]}` : undefined;
  };

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const url = new URL(
          "/api/minimum-wages/periods/options",
          apiBase
        ).toString();
        const res = await fetch(url, { cache: "no-store" });
        const json = await res.json();
        const all: PeriodOption[] = Array.isArray(json?.data) ? json.data : [];
        const filtered = all
          .filter(
            (o) =>
              (o.state?.slug || "").toLowerCase() ===
              (stateSlug || "").toLowerCase()
          )
          .sort((a, b) =>
            (b.updated_date_iso || "").localeCompare(a.updated_date_iso || "")
          );

        if (!mounted) return;

        setOptions(filtered);
        const initial = filtered[0] ?? null;
        setSelected(initial);

        // ✅ हमेशा makeButtonLabel, नहीं तो defaultLabel का parsed fallback
        setValue(
          initial
            ? makeButtonLabel(initial)
            : parseEffectiveFromDefault(defaultLabel) || "Select period"
        );
      } catch (e) {
        console.error("[PeriodCombobox] options load failed:", e);
        // error में भी defaultLabel से try करें
        setValue(parseEffectiveFromDefault(defaultLabel) || "Select period");
      } finally {
        mounted && setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [apiBase, stateSlug, defaultLabel]);

  return (
    <div className="w-full sm:w-auto sm:min-w-[200px] md:min-w-[320px] 2xl:min-w-[200px]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between h-9 sm:h-10 text-xs sm:text-sm",
              "border-orange-200 hover:bg-orange-50 hover:border-orange-300",
              "cursor-pointer"
            )}
            disabled={loading}
          >
            <span className="flex items-center gap-1.5 sm:gap-2 truncate">
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500 flex-shrink-0" />
              <span className="text-slate-800 truncate">
                {loading ? "Loading…" : value}
              </span>
            </span>
            <ChevronsUpDown className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-60 flex-shrink-0" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          side="bottom"
          align="end"
          sideOffset={6}
          avoidCollisions={false}
          className="w-[--radix-popover-trigger-width] p-0 z-[60]"
        >
          <Command>
            <CommandList>
              <CommandEmpty className="text-xs sm:text-sm">
                No period found.
              </CommandEmpty>
              <CommandGroup heading="Available Periods">
                {options.map((opt) => {
                  const listLabel = `Effective Date-: ${opt.effective_date}`;
                  const active = selected?.id === opt.id;
                  return (
                    <CommandItem
                      key={opt.id}
                      onSelect={() => {
                        setSelected(opt);
                        setValue(makeButtonLabel(opt));
                        setOpen(false);
                        onSelect(opt);
                      }}
                      className="cursor-pointer text-xs sm:text-sm"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4",
                          active ? "opacity-100 text-orange-600" : "opacity-0"
                        )}
                      />
                      <span className="truncate">{listLabel}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

/* ---------- Quick Action Card ---------- */
function QuickActionCard({
  icon,
  title,
  cta,
  onClick,
  href,
  disabled,
}: {
  icon: React.ReactNode;
  title: string;
  cta: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}) {
  const BtnInner = (
    <Button
      size="sm"
      className={cn(
        "w-full h-8 sm:h-9 text-xs sm:text-sm",
        disabled
          ? "bg-transparent text-slate-500 border border-slate-200 hover:bg-transparent cursor-not-allowed"
          : "bg-orange-100 text-orange-700 font-bold cursor-pointer hover:bg-orange-60"
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {cta}
    </Button>
  );

  return (
    <Card className="group text-center border-l-4 border-l-orange-500 shadow-sm hover:shadow-md transition-all rounded-xl">
      <CardContent className="p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3">
        <div className="text-orange-500">{icon}</div>
        <h3 className="font-medium text-xs sm:text-sm lg:text-base line-clamp-2">
          {title}
        </h3>
        {href ? (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            {BtnInner}
          </Link>
        ) : (
          BtnInner
        )}
      </CardContent>
    </Card>
  );
}

/* ================== Main Component ================== */
export default function MinimumWageDetails({
  data,
  apiBase,
}: {
  data: MWSlugData;
  apiBase: string;
}) {
  const router = useRouter();

  React.useEffect(() => {
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    const search = typeof window !== "undefined" ? window.location.search : "";
    handleAutoDownloadOnReturn(router, path, search);
  }, [router]);

  const [mwTable, setMwTable] = React.useState<TableBlock>(() =>
    normalizeMWRates(data.minimum_wage_rates, data?.minimum_wage_rates?.title)
  );
  const stateSlug = data?.state?.slug || "";
  const tiles = data?.tiles ?? {};

  const [loadingPeriod, setLoadingPeriod] = React.useState(false);
  const handlePeriodSelect = React.useCallback(
    async (opt: PeriodOption) => {
      if (!stateSlug) return;
      try {
        setLoadingPeriod(true);
        const url = new URL("/api/minimum-wages/period", apiBase);
        url.searchParams.set("state_slug", stateSlug);
        url.searchParams.set("updated_on", opt.updated_date);
        url.searchParams.set("effective_on", opt.effective_date);
        const res = await fetch(url.toString(), { cache: "no-store" });
        if (!res.ok) throw new Error(`[period] ${res.status}`);
        const json = await res.json();
        const first = Array.isArray(json?.data)
          ? json.data[0]
          : json?.data || null;
        const rates = first?.minimum_wage_rates;
        if (rates)
          setMwTable(normalizeMWRates(rates, data?.minimum_wage_rates?.title));
      } catch (e) {
        console.error("[MW] period fetch failed:", e);
      } finally {
        setLoadingPeriod(false);
      }
    },
    [apiBase, stateSlug, data?.minimum_wage_rates?.title]
  );

  const formUrlNorm = normalizeUrl(tiles.form_url, apiBase);
  const calcUrlNorm = normalizeUrl(tiles.calculator_url, apiBase);
  const websiteUrlNorm = normalizeUrl(tiles.website_url, apiBase);
  const formTitle = fmt(tiles.form_title);
  const formBtnLabel =
    formTitle !== "—"
      ? ` ${formTitle}`
      : formUrlNorm
      ? fileNameFromUrl(formUrlNorm)
      : "Latest Notification";

  const defaultPeriodLabel = React.useMemo(() => {
    const u = data?.updated_date ? `Updated ${data.updated_date}` : null;
    const e = data?.effective_date ? `Effective ${data.effective_date}` : null;
    return [u, e].filter(Boolean).join(" • ") || "Select period";
  }, [data?.updated_date, data?.effective_date]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      <div className="w-full mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-3 sm:py-4 md:py-5 lg:py-6">
        {/* Mobile PopularSearch */}
        <div className="lg:hidden mb-3 sm:mb-4">
          <Card className="shadow-sm">
            <CardContent className="p-2 sm:p-3">
              <PopularSearch className="mb-0" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] lg:gap-5 xl:gap-6">
          <div className="min-w-0">
            {/* Header + Period Selector */}
            <div className="mb-3 sm:mb-4 lg:mb-4 space-y-2 sm:space-y-0 sm:flex sm:flex-row sm:items-end sm:justify-between sm:gap-3">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-slate-800 leading-tight">
                Minimum Wages of {data?.state?.name}
              </h1>
              
              <div className="flex flex-col items-stretch sm:items-end gap-2">
                <PeriodCombobox
                  apiBase={apiBase}
                  stateSlug={stateSlug}
                  onSelect={handlePeriodSelect}
                  defaultLabel={defaultPeriodLabel}
                />
              </div>
            </div>

            {/* Tables with Loading State */}
            <div className="relative">
              {loadingPeriod && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10 flex items-center justify-center rounded-xl">
                  <div className="text-xs sm:text-sm text-slate-600 bg-white px-4 py-2 rounded-lg shadow-md">
                    Loading period…
                  </div>
                </div>
              )}
              <DesktopOrangeGrid
                block={{
                  ...mwTable,
                  title: mwTable?.title || "Minimum Wage Rates",
                }}
                stateSlug={stateSlug}
              />
              <MobileCards
                block={normalizeMWRates(
                  mwTable,
                  mwTable?.title || "Minimum Wage Rates"
                )}
              />
            </div>

            {/* Employment Categories */}
            {data?.employment_categories_benefits && (
              <>
                <DesktopOrangeGrid
                  block={{
                    ...normalizeMWRates(
                      data.employment_categories_benefits,
                      "Employment Categories & Additional Benefits"
                    ),
                    title: "Employment Categories & Additional Benefits",
                  }}
                />
                <MobileCards
                  block={{
                    ...normalizeMWRates(
                      data.employment_categories_benefits,
                      "Employment Categories & Additional Benefits"
                    ),
                    title: "Employment Categories & Additional Benefits",
                  }}
                />
              </>
            )}

            {/* Interest & Penalty */}
            {data?.interest_penality && (
              <ResponsiveKV
                block={normalizeMWRates(
                  data.interest_penality,
                  data.interest_penality?.title
                )}
                title={
                  data.interest_penality?.title ||
                  "Penalty & Compensation for paying less than Minimum Wages"
                }
              />
            )}

            {/* Quick Actions - Fully Responsive Grid */}
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 lg:gap-4 mt-3 sm:mt-4 mb-3 sm:mb-4 lg:mb-0">
              <QuickActionCard
                icon={<Download className="h-5 w-5 sm:h-6 sm:w-6" />}
                title="Latest Notification"
                cta={formUrlNorm ? "Download" : "Not Available"}
                onClick={
                  formUrlNorm
                    ? () => openProtectedDownload(router, formUrlNorm)
                    : undefined
                }
                disabled={!formUrlNorm}
              />
              <QuickActionCard
                icon={<IndianRupee className="h-5 w-5 sm:h-6 sm:w-6" />}
                title="Wage Calculator"
                cta={calcUrlNorm ? "Open Calculator" : "Not Available"}
                href={calcUrlNorm || undefined}
                disabled={!calcUrlNorm}
              />
              <QuickActionCard
                icon={<Globe className="h-5 w-5 sm:h-6 sm:w-6" />}
                title="Official Website"
                cta={websiteUrlNorm ? "Visit Website" : "Not Available"}
                href={websiteUrlNorm || undefined}
                disabled={!websiteUrlNorm}
              />
            </div>
          </div>

          {/* Desktop Sidebar - Sticky */}
          <div className="hidden lg:block min-w-0">
            <div className="sticky top-3 lg:top-4 xl:top-5">
              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-3 lg:p-4">
                  <PopularSearch className="mb-0" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
