// "use client";
// import React, { useEffect, useState } from "react";
// import Papa, { ParseResult } from "papaparse";
// import { Card, CardContent } from "@/components/ui/card";
// import PopularSearch from "../PopularSearch/PopularSearch";

// export default function CsvTable() {
//   const [data, setData] = useState<string[][]>([]);

//   useEffect(() => {
//     fetch("/Book1.csv")
//       .then((res) => res.text())
//       .then((csvText) => {
//         Papa.parse<string[]>(csvText, {
//           complete: (result: ParseResult<string[]>) => {
//             setData(result.data);
//           },
//         });
//       });
//   }, []);

//   if (data.length === 0) return <p>Loading CSV...</p>;

//   // Top two special rows
//   const topRow1 = data[0]?.[0] || "";
//   const topRow2 = data[1]?.[0] || "";

//   // Actual headers & rows start after these
//   const headers = data[2];
//   const rows = data.slice(3);

//   return (
//     <div className="p-6 overflow-x-auto flex flex-col lg:flex-row justify-center">
//       {/* Table Section */}
//       <div className="lg:w-3/4 overflow-x-auto">
//         <table className="w-full border border-orange-500 border-collapse text-sm table-auto">
//           <thead>
//             {/* ✅ First special row (Effective Date) */}
//             <tr>
//               <th
//                 colSpan={headers.length}
//                 className="text-center font-bold bg-orange-50 text-orange-700 px-3 py-2 border-none"
//                 style={{ width: "auto", whiteSpace: "nowrap" }} // Dynamic width based on content
//               >
//                 {topRow1}
//               </th>
//             </tr>

//             {/* ✅ Second special row (General Category) */}
//             <tr>
//               <th
//                 colSpan={headers.length}
//                 className="text-center font-bold bg-orange-100 text-orange-700 px-3 py-2 border-none"
//                 style={{ width: "auto", whiteSpace: "nowrap" }} // Dynamic width based on content
//               >
//                 {topRow2}
//               </th>
//             </tr>

//             {/* ✅ Actual header row */}
//             <tr>
//               {headers.map((h, i) => (
//                 <th
//                   key={i}
//                   className={`border border-orange-300 bg-orange-50 font-bold text-center px-3 py-2 ${
//                     i === 0 ? "text-left" : ""
//                   }`}
//                   style={{ whiteSpace: "nowrap" }} // Prevent wrapping in header
//                 >
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, rowIndex) => (
//               <tr key={rowIndex} className="hover:bg-gray-50">
//                 {row.map((cell, colIndex) => {
//                   // Center-align all columns (colIndex !== 0 will be center-aligned as well)
//                   const cellClass = colIndex === 0 ? "text-center" : "text-center";

//                   return (
//                     <td
//                       key={colIndex}
//                       className={`border border-orange-300 ${cellClass} px-3 py-2 whitespace-pre-wrap`}
//                       style={{ whiteSpace: "nowrap" }} // Prevent text wrapping in cell
//                     >
//                       {cell}
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Popular Search Section on the Right */}
//       <div className="hidden lg:block lg:w-1/4 ml-6">
//         <div className="sticky top-3 lg:top-4 xl:top-5">
//           <Card className="shadow-lg hover:shadow-xl transition-shadow p-4 border-2 rounded-lg border-yellow-500">
//             <CardContent className="p-4 bg-white rounded-md">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }




//Same content and empty cells both pr merging code.....



// "use client";
// import React, { useEffect, useState } from "react";
// import Papa, { ParseResult } from "papaparse";
// import { Card, CardContent } from "@/components/ui/card";
// import PopularSearch from "../PopularSearch/PopularSearch";

// export default function CsvTable() {
//   const [data, setData] = useState<string[][]>([]);

//   useEffect(() => {
//     fetch("/Book1.csv")
//       .then((res) => res.text())
//       .then((csvText) => {
//         Papa.parse<string[]>(csvText, {
//           complete: (result: ParseResult<string[]>) => {
//             setData(result.data);
//           },
//         });
//       });
//   }, []);

//   if (data.length === 0) return <p>Loading CSV...</p>;

//   // Top two special rows
//   const topRow1 = data[0]?.[0] || "";
//   const topRow2 = data[1]?.[0] || "";

//   // Actual headers & rows start after these
//   const headers = data[2];
//   const rows = data.slice(3);

//   // Function to calculate rowspan for vertical merging
//   const calculateRowSpans = () => {
//     const rowSpans: { [key: string]: number } = {};
//     const skippedCells: { [key: string]: boolean } = {};

//     for (let colIndex = 0; colIndex < headers.length; colIndex++) {
//       for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
//         const cellKey = `${rowIndex}-${colIndex}`;
        
//         if (skippedCells[cellKey]) continue;

//         const currentCell = rows[rowIndex][colIndex]?.trim() || "";
//         let spanCount = 1;

//         // Check how many consecutive rows have same content or are empty
//         for (let nextRowIndex = rowIndex + 1; nextRowIndex < rows.length; nextRowIndex++) {
//           const nextCell = rows[nextRowIndex][colIndex]?.trim() || "";
          
//           // If next cell is empty or same as current, merge it
//           if (nextCell === "" || nextCell === currentCell) {
//             spanCount++;
//             skippedCells[`${nextRowIndex}-${colIndex}`] = true;
//           } else {
//             break;
//           }
//         }

//         if (spanCount > 1) {
//           rowSpans[cellKey] = spanCount;
//         }
//       }
//     }

//     return { rowSpans, skippedCells };
//   };

//   const { rowSpans, skippedCells } = calculateRowSpans();

//   return (
//     <div className="p-6 overflow-x-auto flex flex-col lg:flex-row justify-center">
//       {/* Table Section */}
//       <div className="lg:w-3/4 overflow-x-auto">
//         <table className="w-full border border-orange-500 border-collapse text-sm table-auto">
//           <thead>
//             {/* First special row (Effective Date) */}
//             <tr>
//               <th
//                 colSpan={headers.length}
//                 className="text-center font-bold bg-orange-50 text-orange-700 px-3 py-2 border-none"
//                 style={{ width: "auto", whiteSpace: "nowrap" }}
//               >
//                 {topRow1}
//               </th>
//             </tr>

//             {/* Second special row (General Category) */}
//             <tr>
//               <th
//                 colSpan={headers.length}
//                 className="text-center font-bold bg-orange-100 text-orange-700 px-3 py-2 border-none"
//                 style={{ width: "auto", whiteSpace: "nowrap" }}
//               >
//                 {topRow2}
//               </th>
//             </tr>

//             {/* Actual header row */}
//             <tr>
//               {headers.map((h, i) => (
//                 <th
//                   key={i}
//                   className={`border border-orange-300 bg-orange-50 font-bold text-center px-3 py-2 ${
//                     i === 0 ? "text-left" : ""
//                   }`}
//                   style={{ whiteSpace: "nowrap" }}
//                 >
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, rowIndex) => (
//               <tr key={rowIndex} className="hover:bg-gray-50">
//                 {row.map((cell, colIndex) => {
//                   const cellKey = `${rowIndex}-${colIndex}`;
                  
//                   // Skip cells that are merged with previous rows
//                   if (skippedCells[cellKey]) {
//                     return null;
//                   }

//                   const rowSpan = rowSpans[cellKey] || 1;
//                   const cellClass = colIndex === 0 ? "text-left" : "text-center";
                  
//                   // For first column with merged cells, center the content vertically
//                   const isFirstColumnWithSpan = colIndex === 0 && rowSpan > 1;

//                   return (
//                     <td
//                       key={colIndex}
//                       className={`border border-orange-300 ${cellClass} px-3 py-2 ${
//                         isFirstColumnWithSpan ? "align-middle" : ""
//                       }`}
//                       rowSpan={rowSpan > 1 ? rowSpan : undefined}
//                       style={{ 
//                         whiteSpace: "nowrap",
//                         verticalAlign: isFirstColumnWithSpan ? "middle" : "top"
//                       }}
//                     >
//                       {cell || ""}
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Popular Search Section on the Right */}
//       <div className="hidden lg:block lg:w-1/4 ml-6">
//         <div className="sticky top-3 lg:top-4 xl:top-5">
//           <Card className="shadow-lg hover:shadow-xl transition-shadow p-4 border-2 rounded-lg border-yellow-500">
//             <CardContent className="p-4 bg-white rounded-md">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }







// "use client";
// import React, { useEffect, useState } from "react";
// import Papa, { ParseResult } from "papaparse";
// import { Card, CardContent } from "@/components/ui/card";
// import PopularSearch from "../PopularSearch/PopularSearch";

// export default function CsvTable() {
//   const [data, setData] = useState<string[][]>([]);

//   useEffect(() => {
//     fetch("/Book2.csv")
//       .then((res) => res.text())
//       .then((csvText) => {
//         Papa.parse<string[]>(csvText, {
//           complete: (result: ParseResult<string[]>) => {
//             setData(result.data);
//           },
//         });
//       });
//   }, []);

//   if (data.length === 0) return <p>Loading CSV...</p>;

//   // Top two special rows
//   const topRow1 = data[0]?.[0] || "";
//   const topRow2 = data[1]?.[0] || "";

//   // Actual headers & rows start after these
//   const headers = data[2];
//   const rows = data.slice(3);

//   // Function to calculate rowspan for ONLY empty cells
//   const calculateRowSpans = () => {
//     const rowSpans: { [key: string]: number } = {};
//     const skippedCells: { [key: string]: boolean } = {};

//     for (let colIndex = 0; colIndex < headers.length; colIndex++) {
//       for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
//         const cellKey = `${rowIndex}-${colIndex}`;
        
//         if (skippedCells[cellKey]) continue;

//         const currentCell = rows[rowIndex][colIndex]?.trim() || "";
        
//         // Only proceed if current cell has content (not empty)
//         if (currentCell === "") continue;
        
//         let spanCount = 1;

//         // Check how many consecutive empty cells are below this content cell
//         for (let nextRowIndex = rowIndex + 1; nextRowIndex < rows.length; nextRowIndex++) {
//           const nextCell = rows[nextRowIndex][colIndex]?.trim() || "";
          
//           // Only merge if next cell is empty
//           if (nextCell === "") {
//             spanCount++;
//             skippedCells[`${nextRowIndex}-${colIndex}`] = true;
//           } else {
//             break;
//           }
//         }

//         if (spanCount > 1) {
//           rowSpans[cellKey] = spanCount;
//         }
//       }
//     }

//     return { rowSpans, skippedCells };
//   };

//   const { rowSpans, skippedCells } = calculateRowSpans();

//   return (
//     <div className="p-6 overflow-x-auto flex flex-col lg:flex-row justify-center">
//       {/* Table Section */}
//       <div className="lg:w-3/4 overflow-x-auto">
//         <table className="w-full border border-orange-500 border-collapse text-sm table-auto">
//           <thead>
//             {/* First special row (Effective Date) */}
//             <tr>
//               <th
//                 colSpan={headers.length}
//                 className="text-center font-bold bg-orange-50 text-orange-700 px-3 py-2 border-none"
//                 style={{ width: "auto", whiteSpace: "nowrap" }}
//               >
//                 {topRow1}
//               </th>
//             </tr>

//             {/* Second special row (General Category) */}
//             <tr>
//               <th
//                 colSpan={headers.length}
//                 className="text-center font-bold bg-orange-100 text-orange-700 px-3 py-2 border-none"
//                 style={{ width: "auto", whiteSpace: "nowrap" }}
//               >
//                 {topRow2}
//               </th>
//             </tr>

//             {/* Actual header row */}
//             <tr>
//               {headers.map((h, i) => (
//                 <th
//                   key={i}
//                   className={`border border-orange-300 bg-orange-50 font-bold text-center px-3 py-2 ${
//                     i === 0 ? "text-left" : ""
//                   }`}
//                   style={{ whiteSpace: "nowrap" }}
//                 >
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, rowIndex) => (
//               <tr key={rowIndex} className="hover:bg-gray-50">
//                 {row.map((cell, colIndex) => {
//                   const cellKey = `${rowIndex}-${colIndex}`;
                  
//                   // Skip cells that are merged with previous rows (empty cells)
//                   if (skippedCells[cellKey]) {
//                     return null;
//                   }

//                   const rowSpan = rowSpans[cellKey] || 1;
//                   const cellClass = colIndex === 0 ? "text-center" : "text-center";
                  
//                   // For first column with merged cells, center the content vertically
//                   const isFirstColumnWithSpan = colIndex === 0 && rowSpan > 1;

//                   return (
//                     <td
//                       key={colIndex}
//                       className={`border border-orange-300 ${cellClass} px-3 py-2 ${
//                         isFirstColumnWithSpan ? "align-middle" : ""
//                       }`}
//                       rowSpan={rowSpan > 1 ? rowSpan : undefined}
//                       style={{ 
//                         whiteSpace: "nowrap",
//                         verticalAlign: isFirstColumnWithSpan ? "middle" : "top"
//                       }}
//                     >
//                       {cell || ""}
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Popular Search Section on the Right */}
//       <div className="hidden lg:block lg:w-1/4 ml-6">
//         <div className="sticky top-3 lg:top-4 xl:top-5">
//           <Card className="shadow-lg hover:shadow-xl transition-shadow p-4 border-2 rounded-lg border-yellow-500">
//             <CardContent className="p-4 bg-white rounded-md">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }










// "use client";
// import React, { useEffect, useState } from "react";
// import Papa, { ParseResult } from "papaparse";
// import { Card, CardContent } from "@/components/ui/card";
// import PopularSearch from "../PopularSearch/PopularSearch";

// export default function CsvTable() {
//   const [data, setData] = useState<string[][]>([]);

//   useEffect(() => {
//     fetch("/data1.csv")
//       .then((res) => res.text())
//       .then((csvText) => {
//         Papa.parse<string[]>(csvText, {
//           complete: (result: ParseResult<string[]>) => {
//             const cleanData = result.data.filter(row => 
//               row.some(cell => cell && cell.trim() !== "")
//             );
//             setData(cleanData);
//           },
//           skipEmptyLines: true,
//         });
//       });
//   }, []);

//   if (data.length === 0) return <p>Loading CSV...</p>;

//   // CSV structure analysis
//   const topRow1 = data[0];
//   const headers = data[1];
//   const rows = data.slice(2);

//   // Function to calculate rowspan for ONLY empty cells
//   const calculateRowSpans = () => {
//     const rowSpans: { [key: string]: number } = {};
//     const skippedCells: { [key: string]: boolean } = {};

//     for (let colIndex = 0; colIndex < headers.length; colIndex++) {
//       for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
//         const cellKey = `${rowIndex}-${colIndex}`;
        
//         if (skippedCells[cellKey]) continue;

//         const currentCell = rows[rowIndex][colIndex]?.trim() || "";
        
//         if (currentCell === "") continue;
        
//         let spanCount = 1;

//         for (let nextRowIndex = rowIndex + 1; nextRowIndex < rows.length; nextRowIndex++) {
//           const nextCell = rows[nextRowIndex][colIndex]?.trim() || "";
          
//           if (nextCell === "") {
//             spanCount++;
//             skippedCells[`${nextRowIndex}-${colIndex}`] = true;
//           } else {
//             break;
//           }
//         }

//         if (spanCount > 1) {
//           rowSpans[cellKey] = spanCount;
//         }
//       }
//     }

//     return { rowSpans, skippedCells };
//   };

//   const { rowSpans, skippedCells } = calculateRowSpans();

//   return (
//     <div className="p-6 overflow-x-auto flex flex-col lg:flex-row justify-center">
//       {/* Table Section */}
//       <div className="lg:w-3/4 overflow-x-auto">
//         <table className="w-full border border-orange-500 border-collapse text-sm table-auto">
//           <thead>
//             {/* Main Title Header - spans all columns */}
//             <tr>
//               <th
//                 colSpan={headers.length}
//                 className="text-center font-bold bg-orange-50 text-orange-700 px-3 py-2 border border-orange-300"
//                 style={{ whiteSpace: "nowrap" }}
//               >
//                 {topRow1[0] || "Special Category-Hair Dressing Saloon/Beauty Parlour"}
//               </th>
//             </tr>

//             {/* Column headers */}
//             <tr>
//               {headers.map((header, index) => (
//                 <th
//                   key={index}
//                   className="border border-orange-300 bg-orange-100 font-bold text-center px-3 py-2"
//                   style={{ whiteSpace: "nowrap" }}
//                 >
//                   {header || ""}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, rowIndex) => (
//               <tr key={rowIndex} className="hover:bg-gray-50">
//                 {row.map((cell, colIndex) => {
//                   const cellKey = `${rowIndex}-${colIndex}`;
                  
//                   if (skippedCells[cellKey]) {
//                     return null;
//                   }

//                   const rowSpan = rowSpans[cellKey] || 1;
//                   const hasRowSpan = rowSpan > 1;

//                   return (
//                     <td
//                       key={colIndex}
//                       className="border border-orange-300 text-center px-3 py-2"
//                       rowSpan={rowSpan > 1 ? rowSpan : undefined}
//                       style={{ 
//                         whiteSpace: "nowrap",
//                         verticalAlign: hasRowSpan ? "middle" : "top",
//                         textAlign: "center",
//                         minHeight: hasRowSpan ? "60px" : "auto",
//                       }}
//                     >
//                       <div 
//                         className={hasRowSpan ? "flex items-center justify-center h-full min-h-[60px]" : ""}
//                         style={{
//                           display: hasRowSpan ? "flex" : "block",
//                           alignItems: hasRowSpan ? "center" : "normal",
//                           justifyContent: "center", // All columns center aligned now
//                           height: hasRowSpan ? "100%" : "auto",
//                           minHeight: hasRowSpan ? "60px" : "auto"
//                         }}
//                       >
//                         {cell || ""}
//                       </div>
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Popular Search Section on the Right */}
//       <div className="hidden lg:block lg:w-1/4 ml-6">
//         <div className="sticky top-3 lg:top-4 xl:top-5">
//           <Card className="shadow-lg hover:shadow-xl transition-shadow p-4 border-2 rounded-lg border-yellow-500">
//             <CardContent className="p-4 bg-white rounded-md">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }













// "use client";
// import React, { useEffect, useState } from "react";
// import Papa, { ParseResult } from "papaparse";
// import { Card, CardContent } from "@/components/ui/card";
// import PopularSearch from "../PopularSearch/PopularSearch";

// export default function CsvTable() {
//   const [data, setData] = useState<string[][]>([]);

//   useEffect(() => {
//     fetch("/Book4.csv")
//       .then((res) => res.text())
//       .then((csvText) => {
//         Papa.parse<string[]>(csvText, {
//           complete: (result: ParseResult<string[]>) => {
//             const cleanData = result.data.filter(row => 
//               row.some(cell => cell && cell.trim() !== "")
//             );
//             setData(cleanData);
//           },
//           skipEmptyLines: true,
//         });
//       });
//   }, []);

//   if (data.length === 0) return <p>Loading CSV...</p>;

//   // CSV structure analysis
//   const topRow1 = data[0];
//   const headers = data[1];
//   const rows = data.slice(2);

//   // Function to calculate rowspan for ONLY empty cells
//   const calculateRowSpans = () => {
//     const rowSpans: { [key: string]: number } = {};
//     const skippedCells: { [key: string]: boolean } = {};

//     for (let colIndex = 0; colIndex < headers.length; colIndex++) {
//       for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
//         const cellKey = `${rowIndex}-${colIndex}`;
        
//         if (skippedCells[cellKey]) continue;

//         const currentCell = rows[rowIndex][colIndex]?.trim() || "";
        
//         if (currentCell === "") continue;
        
//         let spanCount = 1;

//         for (let nextRowIndex = rowIndex + 1; nextRowIndex < rows.length; nextRowIndex++) {
//           const nextCell = rows[nextRowIndex][colIndex]?.trim() || "";
          
//           if (nextCell === "") {
//             spanCount++;
//             skippedCells[`${nextRowIndex}-${colIndex}`] = true;
//           } else {
//             break;
//           }
//         }

//         if (spanCount > 1) {
//           rowSpans[cellKey] = spanCount;
//         }
//       }
//     }

//     return { rowSpans, skippedCells };
//   };

//   const { rowSpans, skippedCells } = calculateRowSpans();

//   // Function to create complete data for mobile cards (including merged values)
//   const createMobileCardData = () => {
//     const cardData: { [key: string]: string }[] = [];
//     let lastValidValues: { [key: string]: string } = {};
    
//     rows.forEach((row, rowIndex) => {
//       const rowData: { [key: string]: string } = {};
      
//       row.forEach((cell, colIndex) => {
//         const cellKey = `${rowIndex}-${colIndex}`;
//         const headerName = headers[colIndex];
        
//         if (!skippedCells[cellKey] && cell && cell.trim() !== "") {
//           // This cell has content, update last valid value
//           lastValidValues[headerName] = cell.trim();
//           rowData[headerName] = cell.trim();
//         } else if (!cell || cell.trim() === "") {
//           // This cell is empty, use last valid value if available
//           if (lastValidValues[headerName]) {
//             rowData[headerName] = lastValidValues[headerName];
//           }
//         } else {
//           rowData[headerName] = cell.trim();
//         }
//       });
      
//       // Only add row if it has meaningful content
//       const hasContent = Object.values(rowData).some(value => value && value.trim() !== "");
//       if (hasContent) {
//         cardData.push(rowData);
//       }
//     });
    
//     return cardData;
//   };

//   const mobileCardData = createMobileCardData();

//   // Theme colors array for mobile cards
//   const cardThemes = [
//     "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
//     "bg-gradient-to-br from-green-50 to-green-100 border-green-200", 
//     "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
//     "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
//     "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200",
//     "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200"
//   ];

//   return (
//     <div className="p-6 overflow-x-auto flex flex-col lg:flex-row justify-center">
//       {/* Mobile Card View - Hidden on Desktop */}
//       <div className="block md:hidden w-full">
//         {/* Title for Mobile */}
//         <div className="text-center font-bold bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-3 rounded-t-lg mb-6 shadow-lg">
//           <h2 className="text-lg">{topRow1[0] || "Minimum Wage Rates"}</h2>
//         </div>
        
//         {/* Cards Container */}
//         <div className="space-y-4">
//           {mobileCardData.map((rowData, index) => {
//             const themeClass = cardThemes[index % cardThemes.length];
            
//             return (
//               <Card key={index} className={`${themeClass} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
//                 <CardContent className="p-5">
//                   {headers.map((header, headerIndex) => {
//                     const value = rowData[header];
//                     if (!value || value.trim() === "") return null;
                    
//                     // Special styling for different field types
//                     const isAmount = header.toLowerCase().includes('wage') || header.toLowerCase().includes('month') || header.toLowerCase().includes('day');
//                     const isTitle = header.toLowerCase().includes('employment') || header.toLowerCase().includes('designation');
                    
//                     return (
//                       <div key={headerIndex} className="flex justify-between items-center py-2 border-b border-white/20 last:border-b-0">
//                         <span className={`font-bold text-gray-700 text-sm ${isTitle ? 'text-blue-700' : ''}`}>
//                           {header}:
//                         </span>
//                         <span className={`text-gray-800 text-sm font-semibold ${
//                           isAmount ? 'text-green-700 bg-green-50 px-2 py-1 rounded-md' : 
//                           isTitle ? 'text-blue-800 font-bold' : ''
//                         }`}>
//                           {isAmount && !value.includes('₹') ? `₹${value}` : value}
//                         </span>
//                       </div>
//                     );
//                   })}
                  
//                   {/* Card Index Indicator */}
//                   <div className="flex justify-center mt-4">
//                     <span className="bg-white/30 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
//                       Card {index + 1} of {mobileCardData.length}
//                     </span>
//                   </div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>
//       </div>

//       {/* Desktop Table View - Hidden on Mobile */}
//       <div className="hidden md:block lg:w-3/4 overflow-x-auto">
//         <table className="w-full border border-orange-500 border-collapse text-sm table-auto">
//           <thead>
//             {/* Main Title Header - spans all columns */}
//             <tr>
//               <th
//                 colSpan={headers.length}
//                 className="text-center font-bold bg-orange-50 text-orange-700 px-3 py-2 border border-orange-300"
//                 style={{ whiteSpace: "nowrap" }}
//               >
//                 {topRow1[0] || "Special Category-Hair Dressing Saloon/Beauty Parlour"}
//               </th>
//             </tr>

//             {/* Column headers */}
//             <tr>
//               {headers.map((header, index) => (
//                 <th
//                   key={index}
//                   className="border border-orange-300 bg-orange-100 font-bold text-center px-3 py-2"
//                   style={{ whiteSpace: "nowrap" }}
//                 >
//                   {header || ""}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, rowIndex) => (
//               <tr key={rowIndex} className="hover:bg-gray-50">
//                 {row.map((cell, colIndex) => {
//                   const cellKey = `${rowIndex}-${colIndex}`;
                  
//                   if (skippedCells[cellKey]) {
//                     return null;
//                   }

//                   const rowSpan = rowSpans[cellKey] || 1;
//                   const hasRowSpan = rowSpan > 1;

//                   return (
//                     <td
//                       key={colIndex}
//                       className="border border-orange-300 text-center px-3 py-2"
//                       rowSpan={rowSpan > 1 ? rowSpan : undefined}
//                       style={{ 
//                         whiteSpace: "nowrap",
//                         verticalAlign: hasRowSpan ? "middle" : "top",
//                         textAlign: "center",
//                         minHeight: hasRowSpan ? "60px" : "auto",
//                       }}
//                     >
//                       <div 
//                         className={hasRowSpan ? "flex items-center justify-center h-full min-h-[60px]" : ""}
//                         style={{
//                           display: hasRowSpan ? "flex" : "block",
//                           alignItems: hasRowSpan ? "center" : "normal",
//                           justifyContent: "center",
//                           height: hasRowSpan ? "100%" : "auto",
//                           minHeight: hasRowSpan ? "60px" : "auto"
//                         }}
//                       >
//                         {cell || ""}
//                       </div>
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Popular Search Section on the Right - Hidden on Mobile when cards are shown */}
//       <div className="hidden lg:block lg:w-1/4 ml-6">
//         <div className="sticky top-3 lg:top-4 xl:top-5">
//           <Card className="shadow-lg hover:shadow-xl transition-shadow p-4 border-2 rounded-lg border-yellow-500">
//             <CardContent className="p-4 bg-white rounded-md">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";
// import React, { useEffect, useState } from "react";
// import Papa, { ParseResult } from "papaparse";
// import { Card, CardContent } from "@/components/ui/card";
// import PopularSearch from "../PopularSearch/PopularSearch";

// export default function CsvTable() {
//   const [data, setData] = useState<string[][]>([]);

//   useEffect(() => {
//     fetch("/Book4.csv")
//       .then((res) => res.text())
//       .then((csvText) => {
//         Papa.parse<string[]>(csvText, {
//           complete: (result: ParseResult<string[]>) => {
//             const cleanData = result.data.filter(row => 
//               row.some(cell => cell && cell.trim() !== "")
//             );
//             setData(cleanData);
//           },
//           skipEmptyLines: true,
//         });
//       });
//   }, []);

//   if (data.length === 0) return <p>Loading CSV...</p>;

//   // CSV structure analysis
//   const topRow1 = data[0];
//   const headers = data[1];
//   const rows = data.slice(2);

//   // Function to calculate rowspan for ONLY empty cells
//   const calculateRowSpans = () => {
//     const rowSpans: { [key: string]: number } = {};
//     const skippedCells: { [key: string]: boolean } = {};

//     for (let colIndex = 0; colIndex < headers.length; colIndex++) {
//       for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
//         const cellKey = `${rowIndex}-${colIndex}`;
        
//         if (skippedCells[cellKey]) continue;

//         const currentCell = rows[rowIndex][colIndex]?.trim() || "";
        
//         if (currentCell === "") continue;
        
//         let spanCount = 1;

//         for (let nextRowIndex = rowIndex + 1; nextRowIndex < rows.length; nextRowIndex++) {
//           const nextCell = rows[nextRowIndex][colIndex]?.trim() || "";
          
//           if (nextCell === "") {
//             spanCount++;
//             skippedCells[`${nextRowIndex}-${colIndex}`] = true;
//           } else {
//             break;
//           }
//         }

//         if (spanCount > 1) {
//           rowSpans[cellKey] = spanCount;
//         }
//       }
//     }

//     return { rowSpans, skippedCells };
//   };

//   const { rowSpans, skippedCells } = calculateRowSpans();

//   // Function to create complete data for mobile cards (including merged values)
//   const createMobileCardData = () => {
//     const cardData: { [key: string]: string }[] = [];
//     let lastValidValues: { [key: string]: string } = {};
    
//     rows.forEach((row, rowIndex) => {
//       const rowData: { [key: string]: string } = {};
      
//       row.forEach((cell, colIndex) => {
//         const cellKey = `${rowIndex}-${colIndex}`;
//         const headerName = headers[colIndex];
        
//         if (!skippedCells[cellKey] && cell && cell.trim() !== "") {
//           // This cell has content, update last valid value
//           lastValidValues[headerName] = cell.trim();
//           rowData[headerName] = cell.trim();
//         } else if (!cell || cell.trim() === "") {
//           // This cell is empty, use last valid value if available
//           if (lastValidValues[headerName]) {
//             rowData[headerName] = lastValidValues[headerName];
//           }
//         } else {
//           rowData[headerName] = cell.trim();
//         }
//       });
      
//       // Only add row if it has meaningful content
//       const hasContent = Object.values(rowData).some(value => value && value.trim() !== "");
//       if (hasContent) {
//         cardData.push(rowData);
//       }
//     });
    
//     return cardData;
//   };

//   const mobileCardData = createMobileCardData();

//   // Theme colors array for mobile cards
//   const cardThemes = [
//     "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
//     "bg-gradient-to-br from-green-50 to-green-100 border-green-200", 
//     "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
//     "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
//     "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200",
//     "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200"
//   ];

//   return (
//     <div className="p-6 overflow-x-auto flex flex-col lg:flex-row justify-center">
//       {/* Mobile Card View - Hidden on Desktop */}
//       <div className="block md:hidden w-full">
//         {/* Title for Mobile */}
//         <div className="text-center font-bold bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-3 rounded-t-lg mb-6 shadow-lg">
//           <h2 className="text-lg">{topRow1[0] || "Minimum Wage Rates"}</h2>
//         </div>
        
//         {/* Cards Container */}
//         <div className="space-y-4">
//           {mobileCardData.map((rowData, index) => {
//             const themeClass = cardThemes[index % cardThemes.length];
            
//             return (
//               <Card key={index} className={`${themeClass} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
//                 <CardContent className="p-5">
//                   {headers.map((header, headerIndex) => {
//                     const value = rowData[header];
//                     if (!value || value.trim() === "") return null;
                    
//                     // Special styling for different field types
//                     const isAmount = header.toLowerCase().includes('wage') || header.toLowerCase().includes('month') || header.toLowerCase().includes('day');
//                     const isTitle = header.toLowerCase().includes('employment') || header.toLowerCase().includes('designation');
                    
//                     return (
//                       <div key={headerIndex} className="flex justify-between items-start py-2 border-b border-white/20 last:border-b-0">
//                         <span className={`font-bold text-gray-700 text-sm pr-2 ${isTitle ? 'text-blue-700' : ''}`}>
//                           {header}:
//                         </span>
//                         <span className={`text-gray-800 text-sm font-semibold text-right ${
//                           isAmount ? 'text-green-700 bg-green-50 px-2 py-1 rounded-md' : 
//                           isTitle ? 'text-blue-800 font-bold' : ''
//                         }`}>
//                           {isAmount && !value.includes('₹') ? `₹${value}` : value}
//                         </span>
//                       </div>
//                     );
//                   })}
                  
//                   {/* Card Index Indicator */}
//                   <div className="flex justify-center mt-4">
//                     <span className="bg-white/30 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
//                       Card {index + 1} of {mobileCardData.length}
//                     </span>
//                   </div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>
//       </div>

//       {/* Desktop Table View - Hidden on Mobile */}
//       <div className="hidden md:block lg:w-3/4 overflow-x-auto">
//         <div className="min-w-full">
//           <table 
//             className="w-full border border-orange-500 border-collapse text-sm"
//             style={{ tableLayout: "fixed" }} // Fixed table layout for column width control
//           >
//             <thead>
//               {/* Main Title Header - spans all columns */}
//               <tr>
//                 <th
//                   colSpan={headers.length}
//                   className="text-center font-bold bg-orange-50 text-orange-700 px-3 py-2 border border-orange-300"
//                   style={{ whiteSpace: "normal" }}
//                 >
//                   {topRow1[0] || "Special Category-Hair Dressing Saloon/Beauty Parlour"}
//                 </th>
//               </tr>

//               {/* Column headers with controlled widths */}
//               <tr>
//                 {headers.map((header, index) => (
//                   <th
//                     key={index}
//                     className="border border-orange-300 bg-orange-100 font-bold text-center px-2 py-2"
//                     style={{ 
//                       width: index === 0 ? "35%" : `${65 / (headers.length - 1)}%`, // First column 35%, others divide remaining 65%
//                       whiteSpace: "normal",
//                       wordWrap: "break-word",
//                       lineHeight: "1.3",
//                       fontSize: "12px"
//                     }}
//                   >
//                     <div style={{
//                       maxWidth: "100%",
//                       wordBreak: "break-word",
//                       whiteSpace: "normal"
//                     }}>
//                       {header || ""}
//                     </div>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((row, rowIndex) => (
//                 <tr key={rowIndex} className="hover:bg-gray-50 transition-colors duration-150">
//                   {row.map((cell, colIndex) => {
//                     const cellKey = `${rowIndex}-${colIndex}`;
                    
//                     if (skippedCells[cellKey]) {
//                       return null;
//                     }

//                     const rowSpan = rowSpans[cellKey] || 1;
//                     const hasRowSpan = rowSpan > 1;
//                     const isFirstColumn = colIndex === 0;

//                     return (
//                       <td
//                         key={colIndex}
//                         className={`border border-orange-300 px-2 py-2 ${
//                           isFirstColumn ? 'text-left bg-orange-25' : 'text-center'
//                         }`}
//                         rowSpan={rowSpan > 1 ? rowSpan : undefined}
//                         style={{ 
//                           width: isFirstColumn ? "35%" : `${65 / (headers.length - 1)}%`,
//                           verticalAlign: hasRowSpan ? "middle" : "top",
//                           whiteSpace: "normal", // Allow text wrapping
//                           wordWrap: "break-word", // Break long words
//                           wordBreak: "break-word", // Modern browsers
//                           lineHeight: "1.3",
//                           fontSize: "11px",
//                           minHeight: hasRowSpan ? "60px" : "auto",
//                           maxWidth: "0", // Forces table to respect width percentages
//                         }}
//                       >
//                         <div 
//                           className={hasRowSpan ? "flex items-center h-full min-h-[60px]" : ""}
//                           style={{
//                             display: hasRowSpan ? "flex" : "block",
//                             alignItems: hasRowSpan ? "center" : "normal",
//                             justifyContent: isFirstColumn ? "flex-start" : "center",
//                             height: hasRowSpan ? "100%" : "auto",
//                             minHeight: hasRowSpan ? "60px" : "auto",
//                             wordBreak: "break-word",
//                             whiteSpace: "normal",
//                             overflowWrap: "break-word", // Better word wrapping
//                             hyphens: "auto" // Add hyphens for better breaking
//                           }}
//                         >
//                           {cell || ""}
//                         </div>
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Popular Search Section on the Right - Hidden on Mobile when cards are shown */}
//       <div className="hidden lg:block lg:w-1/4 ml-6">
//         <div className="sticky top-3 lg:top-4 xl:top-5">
//           <Card className="shadow-lg hover:shadow-xl transition-shadow p-4 border-2 rounded-lg border-yellow-500">
//             <CardContent className="p-4 bg-white rounded-md">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }







// "use client";
// import React, { useEffect, useState } from "react";
// import Papa, { ParseResult } from "papaparse";
// import { Card, CardContent } from "@/components/ui/card";
// import PopularSearch from "../PopularSearch/PopularSearch";

// export default function CsvTable() {
//   const [data, setData] = useState<string[][]>([]);

//   useEffect(() => {
//     fetch("/Book4.csv")
//       .then((res) => res.arrayBuffer())
//       .then((buffer) => {
//         // 🔧 Force UTF-8 decode & remove BOM + weird characters
//         const decoder = new TextDecoder("utf-8");
//         const csvText = decoder
//           .decode(buffer)
//           .replace(/\uFEFF/g, "")
//           .replace(/[^\x20-\x7E\u0900-\u097F,]/g, "");

//         Papa.parse<string[]>(csvText, {
//           complete: (result: ParseResult<string[]>) => {
//             // 🧹 Clean + filter empty rows
//             const cleanData = result.data
//               .map((row) => row.map((cell) => cell.trim()))
//               .filter((row) => row.some((cell) => cell !== ""));

//             setData(cleanData);
//           },
//           skipEmptyLines: true,
//         });
//       })
//       .catch((err) => console.error("CSV Load Error:", err));
//   }, []);

//   if (data.length === 0) return <p>Loading CSV...</p>;

//   // 🧩 Identify structure
//   const topRow1 = data[0];
//   const headers = data[1];
//   const rows = data.slice(2);

//   // 🔁 Calculate row spans (same logic)
//   const calculateRowSpans = () => {
//   if (!headers || headers.length === 0 || !rows || rows.length === 0) {
//     return { rowSpans: {}, skippedCells: {} };
//   }

//   const rowSpans: { [key: string]: number } = {};
//   const skippedCells: { [key: string]: boolean } = {};

//   for (let colIndex = 0; colIndex < headers.length; colIndex++) {
//     for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
//       const cellKey = `${rowIndex}-${colIndex}`;
//       if (skippedCells[cellKey]) continue;

//       const currentCell = rows[rowIndex][colIndex]?.trim() || "";
//       if (currentCell === "") continue;

//       let spanCount = 1;
//       for (let nextRowIndex = rowIndex + 1; nextRowIndex < rows.length; nextRowIndex++) {
//         const nextCell = rows[nextRowIndex][colIndex]?.trim() || "";
//         if (nextCell === "") {
//           spanCount++;
//           skippedCells[`${nextRowIndex}-${colIndex}`] = true;
//         } else break;
//       }
//       if (spanCount > 1) rowSpans[cellKey] = spanCount;
//     }
//   }
//   return { rowSpans, skippedCells };
// };


//   const { rowSpans, skippedCells } = calculateRowSpans();

//   // 📱 Create data for mobile cards
//   const createMobileCardData = () => {
//     const cardData: { [key: string]: string }[] = [];
//     let lastValidValues: { [key: string]: string } = {};

//     rows.forEach((row, rowIndex) => {
//       const rowData: { [key: string]: string } = {};
//       row.forEach((cell, colIndex) => {
//         const cellKey = `${rowIndex}-${colIndex}`;
//         const headerName = headers[colIndex];

//         if (!skippedCells[cellKey] && cell && cell.trim() !== "") {
//           lastValidValues[headerName] = cell.trim();
//           rowData[headerName] = cell.trim();
//         } else if (!cell || cell.trim() === "") {
//           if (lastValidValues[headerName]) {
//             rowData[headerName] = lastValidValues[headerName];
//           }
//         }
//       });

//       const hasContent = Object.values(rowData).some((v) => v && v.trim() !== "");
//       if (hasContent) cardData.push(rowData);
//     });
//     return cardData;
//   };

//   const mobileCardData = createMobileCardData();

//   const cardThemes = [
//     "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
//     "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
//     "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
//     "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
//     "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200",
//     "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200",
//   ];

//   return (
//     <div className="p-6 overflow-x-auto flex flex-col lg:flex-row justify-center">
//       {/* 📱 Mobile Card View */}
//       <div className="block md:hidden w-full">
//         <div className="text-center font-bold bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-3 rounded-t-lg mb-6 shadow-lg">
//           <h2 className="text-lg">
//             {topRow1.join(" ").trim() || "Minimum Wage Rates"}
//           </h2>
//         </div>

//         <div className="space-y-4">
//           {mobileCardData.map((rowData, index) => {
//             const themeClass = cardThemes[index % cardThemes.length];
//             return (
//               <Card
//                 key={index}
//                 className={`${themeClass} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
//               >
//                 <CardContent className="p-5">
//                   {headers.map((header, headerIndex) => {
//                     const value = rowData[header];
//                     if (!value || value.trim() === "") return null;

//                     const isAmount =
//                       header.toLowerCase().includes("wage") ||
//                       header.toLowerCase().includes("month") ||
//                       header.toLowerCase().includes("day");
//                     const isTitle =
//                       header.toLowerCase().includes("designation") ||
//                       header.toLowerCase().includes("employment");

//                     return (
//                       <div
//                         key={headerIndex}
//                         className="flex justify-between items-start py-2 border-b border-white/20 last:border-b-0"
//                       >
//                         <span
//                           className={`font-bold text-gray-700 text-sm pr-2 ${
//                             isTitle ? "text-blue-700" : ""
//                           }`}
//                         >
//                           {header}:
//                         </span>
//                         <span
//                           className={`text-gray-800 text-sm font-semibold text-right ${
//                             isAmount
//                               ? "text-green-700 bg-green-50 px-2 py-1 rounded-md"
//                               : isTitle
//                               ? "text-blue-800 font-bold"
//                               : ""
//                           }`}
//                         >
//                           {isAmount && !value.includes("₹")
//                             ? `₹${value}`
//                             : value}
//                         </span>
//                       </div>
//                     );
//                   })}

//                   <div className="flex justify-center mt-4">
//                     <span className="bg-white/30 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
//                       Card {index + 1} of {mobileCardData.length}
//                     </span>
//                   </div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>
//       </div>

//       {/* 💻 Desktop Table */}
//       <div className="hidden md:block lg:w-3/4 overflow-x-auto">
//         <div className="min-w-full">
//           <table
//             className="w-full border border-orange-500 border-collapse text-sm"
//             style={{ tableLayout: "fixed" }}
//           >
//             <thead>
//               <tr>
//                 <th
//                   colSpan={headers.length}
//                   className="text-center font-bold bg-orange-50 text-orange-700 px-3 py-2 border border-orange-300"
//                 >
//                   {topRow1.join(" ").trim() ||
//                     "Special Category - Hair Dressing Saloon / Beauty Parlour"}
//                 </th>
//               </tr>
//               <tr>
//                 {headers.map((header, index) => (
//                   <th
//                     key={index}
//                     className="border border-orange-300 bg-orange-100 font-bold text-center px-2 py-2"
//                     style={{
//                       width:
//                         index === 0
//                           ? "35%"
//                           : `${65 / (headers.length - 1)}%`,
//                       whiteSpace: "normal",
//                       wordBreak: "break-word",
//                       lineHeight: "1.3",
//                       fontSize: "12px",
//                     }}
//                   >
//                     {header}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((row, rowIndex) => (
//                 <tr
//                   key={rowIndex}
//                   className="hover:bg-gray-50 transition-colors duration-150"
//                 >
//                   {row.map((cell, colIndex) => {
//                     const cellKey = `${rowIndex}-${colIndex}`;
//                     if (skippedCells[cellKey]) return null;

//                     const rowSpan = rowSpans[cellKey] || 1;
//                     const isFirst = colIndex === 0;

//                     return (
//                       <td
//                         key={colIndex}
//                         rowSpan={rowSpan > 1 ? rowSpan : undefined}
//                         className={`border border-orange-300 px-2 py-2 ${
//                           isFirst ? "text-left" : "text-center"
//                         }`}
//                         style={{
//                           fontSize: "11px",
//                           wordBreak: "break-word",
//                           whiteSpace: "normal",
//                         }}
//                       >
//                         {cell || ""}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* 🔍 Popular Search Section */}
//       <div className="hidden lg:block lg:w-1/4 ml-6">
//         <div className="sticky top-3">
//           <Card className="shadow-lg hover:shadow-xl transition-shadow p-4 border-2 rounded-lg border-yellow-500">
//             <CardContent className="p-4 bg-white rounded-md">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import React, { useState } from "react";
import { HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.min.css";
import { registerAllModules } from "handsontable/registry";

// Register all modules (filters, dropdowns, etc.)
registerAllModules();

export default function AdvancedHandsOnTable() {
  // 🧩 Initial Dummy Data (can be replaced with API)
  const [data, setData] = useState([
    ["Name", "Department", "Salary", "Active", "Joining Date"],
    ["Tarun Sehrawat", "IT", 55000, true, "2021-04-15"],
    ["Vineet Sharma", "Sales", 42000, false, "2022-03-10"],
    ["Gyanesh", "Marketing", 48000, true, "2020-08-22"],
    ["Utkarsh", "Design", 51000, true, "2023-01-01"],
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6 text-slate-800">
        Prism Infoways Employee Matrix
      </h1>

      <HotTable
        data={data}
        colHeaders={[
          "Name",
          "Department",
          "Salary (₹)",
          "Active",
          "Joining Date",
        ]}
        rowHeaders={true}
        columnSorting={true}
        filters={true}
        dropdownMenu={true}
        contextMenu={true}
        manualColumnResize={true}
        manualRowMove={true}
        stretchH="all"
        height="auto"
        width="100%"
        autoWrapRow={true}
        autoWrapCol={true}
        licenseKey="non-commercial-and-evaluation"
        columns={[
          {
            type: "text",
            validator: (value: string) => !!value.trim(),
            allowInvalid: false,
          },
          {
            type: "dropdown",
            source: ["IT", "Sales", "Marketing", "Design", "HR"],
          },
          {
            type: "numeric",
            numericFormat: { pattern: "₹0,0.00" },
            validator: (value: number) => value > 0,
            allowInvalid: false,
          },
          {
            type: "checkbox",
          },
          {
            type: "date",
            dateFormat: "YYYY-MM-DD",
            correctFormat: true,
          },
        ]}
        afterChange={(changes) => {
          if (changes) {
            console.log("Updated:", changes);
          }
        }}
      />
    </div>
  );
}
