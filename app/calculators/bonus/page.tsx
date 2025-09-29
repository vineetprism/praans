// 'use client'

// import { useState, useEffect } from 'react'
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"
// import { Alert, AlertDescription } from "@/components/ui/alert"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Calculator, IndianRupee, FileText, CheckCircle, AlertCircle, TrendingUp, Calendar } from 'lucide-react'
// import Link from "next/link"
// import PopularSearch from '@/app/PopularSearch/PopularSearch'

// type BonusType = 'statutory' | 'exgratia' | 'productivity'
// type CalculationBasis = 'minimum' | 'actual'

// export default function BonusCalculatorPage() {
//   // Basic inputs
//   const [salary, setSalary] = useState<number>(25000)
//   const [workingDays, setWorkingDays] = useState<number>(240)
//   const [bonusType, setBonusType] = useState<BonusType>('statutory')
//   const [calculationBasis, setCalculationBasis] = useState<CalculationBasis>('minimum')
  
//   // Advanced inputs
//   const [customBonusRate, setCustomBonusRate] = useState<number>(8.33)
//   const [isEligible, setIsEligible] = useState<boolean>(true)
//   const [hasWorkedMinimumDays, setHasWorkedMinimumDays] = useState<boolean>(true)
//   const [establishmentType, setEstablishmentType] = useState<string>('factory')
  
//   // Calculation results
//   const [bonusAmount, setBonusAmount] = useState<number>(0)
//   const [minimumBonus, setMinimumBonus] = useState<number>(0)
//   const [maximumBonus, setMaximumBonus] = useState<number>(0)
//   const [effectiveSalary, setEffectiveSalary] = useState<number>(0)

//   // Constants as per Payment of Bonus Act, 1965
//   const MINIMUM_BONUS_RATE = 8.33 // 8.33% of salary or Rs. 100, whichever is higher
//   const MAXIMUM_BONUS_RATE = 20 // 20% of salary
//   const MINIMUM_WORKING_DAYS = 30 // Minimum days to be eligible
//   const SALARY_CEILING = 21000 // Maximum salary for bonus calculation (as per latest amendment)
//   const MINIMUM_BONUS_AMOUNT = 100 // Minimum bonus amount in rupees

//   // Calculate bonus based on inputs
//   useEffect(() => {
//     // Check eligibility
//     const eligible = workingDays >= MINIMUM_WORKING_DAYS
//     setIsEligible(eligible)
//     setHasWorkedMinimumDays(eligible)

//     if (!eligible) {
//       setBonusAmount(0)
//       setMinimumBonus(0)
//       setMaximumBonus(0)
//       return
//     }

//     // Calculate effective salary (capped at ceiling)
//     const effectiveSal = Math.min(salary, SALARY_CEILING)
//     setEffectiveSalary(effectiveSal)

//     // Calculate proportionate bonus based on working days
//     const proportionateFactor = workingDays / 365

//     let calculatedBonus = 0

//     switch (bonusType) {
//       case 'statutory':
//         if (calculationBasis === 'minimum') {
//           calculatedBonus = Math.max(
//             (effectiveSal * MINIMUM_BONUS_RATE / 100) * proportionateFactor,
//             MINIMUM_BONUS_AMOUNT * proportionateFactor
//           )
//         } else {
//           // Actual calculation based on company's allocable surplus
//           calculatedBonus = (effectiveSal * customBonusRate / 100) * proportionateFactor
//         }
//         break
//       case 'exgratia':
//         calculatedBonus = (effectiveSal * customBonusRate / 100) * proportionateFactor
//         break
//       case 'productivity':
//         calculatedBonus = (effectiveSal * customBonusRate / 100) * proportionateFactor
//         break
//     }

//     // Calculate minimum and maximum bonus
//     const minBonus = Math.max(
//       (effectiveSal * MINIMUM_BONUS_RATE / 100) * proportionateFactor,
//       MINIMUM_BONUS_AMOUNT * proportionateFactor
//     )
//     const maxBonus = (effectiveSal * MAXIMUM_BONUS_RATE / 100) * proportionateFactor

//     setBonusAmount(Math.round(calculatedBonus))
//     setMinimumBonus(Math.round(minBonus))
//     setMaximumBonus(Math.round(maxBonus))
//   }, [salary, workingDays, bonusType, calculationBasis, customBonusRate])

//   const formatCurrency = (amount: number) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 0
//     }).format(amount)
//   }

//   const getBonusTypeDescription = (type: BonusType) => {
//     switch (type) {
//       case 'statutory':
//         return 'Mandatory bonus as per Payment of Bonus Act, 1965'
//       case 'exgratia':
//         return 'Additional voluntary bonus paid by employer'
//       case 'productivity':
//         return 'Performance-based bonus linked to productivity'
//       default:
//         return ''
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
      
//         {/* Page Header */}
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="text-4xl font-bold text-slate-800 mb-2 flex items-center gap-3">
//               <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
//                 <TrendingUp className="w-6 h-6 text-white" />
//               </div>
//               Bonus Calculator
//             </h1>
//             <p className="text-xl text-gray-600">
//               Calculate statutory and ex-gratia bonus as per the Payment of Bonus Act, 1965
//             </p>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Calculator Form */}
//           <div className="lg:col-span-2">
//             <Card className="mb-8">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Calculator className="w-5 h-5 text-orange-500" />
//                   Calculate Your Bonus
//                 </CardTitle>
//                 <CardDescription>
//                   Enter your employment details to calculate bonus amount
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-8">
//                 {/* Basic Information */}
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-3">
//                     <Label className="text-sm font-medium">
//                       Monthly Salary (Basic + DA)
//                     </Label>
//                     <div className="relative">
//                       <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                       <Input
//                         type="number"
//                         value={salary}
//                         onChange={(e) => setSalary(Number(e.target.value))}
//                         className="pl-12 text-lg h-12 border-2 focus:border-orange-500"
//                         placeholder="Enter monthly salary"
//                         min="0"
//                       />
//                     </div>
//                     <p className="text-sm text-gray-500">
//                       Include basic pay and dearness allowance only
//                     </p>
//                   </div>

//                   <div className="space-y-3">
//                     <Label className="text-sm font-medium">
//                       Working Days in Accounting Year
//                     </Label>
//                     <div className="relative">
//                       <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                       <Input
//                         type="number"
//                         value={workingDays}
//                         onChange={(e) => setWorkingDays(Number(e.target.value))}
//                         className="pl-12 text-lg h-12 border-2 focus:border-orange-500"
//                         placeholder="Enter working days"
//                         min="0"
//                         max="365"
//                       />
//                     </div>
//                     <p className="text-sm text-gray-500">
//                       Minimum 30 days required for eligibility
//                     </p>
//                   </div>
//                 </div>

//                 {/* Bonus Type Selection */}
//                 <div className="space-y-4">
//                   <Label className="text-sm font-medium">Bonus Type</Label>
//                   <div className="grid md:grid-cols-3 gap-4">
//                     {(['statutory', 'exgratia', 'productivity'] as BonusType[]).map((type) => (
//                       <Card 
//                         key={type}
//                         className={`cursor-pointer transition-all ${
//                           bonusType === type 
//                             ? 'border-orange-500 bg-orange-50' 
//                             : 'hover:border-gray-300'
//                         }`}
//                         onClick={() => setBonusType(type)}
//                       >
//                         <CardContent className="p-4">
//                           <div className="flex items-center space-x-2 mb-2">
//                             <div className={`w-4 h-4 rounded-full border-2 ${
//                               bonusType === type 
//                                 ? 'bg-orange-500 border-orange-500' 
//                                 : 'border-gray-300'
//                             }`} />
//                             <span className="font-medium capitalize">{type} Bonus</span>
//                           </div>
//                           <p className="text-xs text-gray-600">
//                             {getBonusTypeDescription(type)}
//                           </p>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Advanced Options */}
//                 <div className="space-y-6">
//                   <div className="flex items-center justify-between">
//                     <Label className="text-sm font-medium">Advanced Options</Label>
//                     <Badge variant="outline">Optional</Badge>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="space-y-3">
//                       <Label className="text-sm font-medium">Establishment Type</Label>
//                       <Select value={establishmentType} onValueChange={setEstablishmentType}>
//                         <SelectTrigger>
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="factory">Factory</SelectItem>
//                           <SelectItem value="mine">Mine</SelectItem>
//                           <SelectItem value="plantation">Plantation</SelectItem>
//                           <SelectItem value="port">Port</SelectItem>
//                           <SelectItem value="railway">Railway</SelectItem>
//                           <SelectItem value="oilfield">Oilfield</SelectItem>
//                           <SelectItem value="other">Other Establishment</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>

//                     <div className="space-y-3">
//                       <Label className="text-sm font-medium">Calculation Basis</Label>
//                       <Select value={calculationBasis} onValueChange={(value) => setCalculationBasis(value as CalculationBasis)}>
//                         <SelectTrigger>
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="minimum">Minimum Statutory (8.33%)</SelectItem>
//                           <SelectItem value="actual">Based on Allocable Surplus</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>

//                   {(calculationBasis === 'actual' || bonusType !== 'statutory') && (
//                     <div className="space-y-3">
//                       <Label className="text-sm font-medium">
//                         Custom Bonus Rate (%)
//                       </Label>
//                       <Input
//                         type="number"
//                         value={customBonusRate}
//                         onChange={(e) => setCustomBonusRate(Number(e.target.value))}
//                         className="text-lg h-12 border-2 focus:border-orange-500"
//                         placeholder="Enter bonus percentage"
//                         min="0"
//                         max="100"
//                         step="0.01"
//                       />
//                       <p className="text-sm text-gray-500">
//                         Enter the bonus percentage (statutory range: 8.33% - 20%)
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 {/* Eligibility Check */}
//                 {isEligible ? (
//                   <Alert className="border-green-200 bg-green-50">
//                     <CheckCircle className="h-4 w-4 text-green-600" />
//                     <AlertDescription className="text-green-800">
//                       <strong>Eligible for Bonus:</strong> You meet the minimum working days requirement.
//                       <br />
//                       <span className="text-sm">Working Days: {workingDays} days (Minimum: {MINIMUM_WORKING_DAYS} days)</span>
//                     </AlertDescription>
//                   </Alert>
//                 ) : (
//                   <Alert className="border-red-200 bg-red-50">
//                     <AlertCircle className="h-4 w-4 text-red-600" />
//                     <AlertDescription className="text-red-800">
//                       <strong>Not Eligible:</strong> Minimum {MINIMUM_WORKING_DAYS} working days required for bonus eligibility.
//                       <br />
//                       <span className="text-sm">Current Working Days: {workingDays} days</span>
//                     </AlertDescription>
//                   </Alert>
//                 )}
//               </CardContent>
//             </Card>

//             {/* Calculation Breakdown */}
//             {isEligible && (
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <FileText className="w-5 h-5 text-orange-500" />
//                     Detailed Calculation Breakdown
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-6">
//                     <div className="grid md:grid-cols-3 gap-4">
//                       <div className="p-4 bg-gray-50 rounded-lg">
//                         <div className="text-sm text-gray-600">Monthly Salary</div>
//                         <div className="text-lg font-semibold">{formatCurrency(salary)}</div>
//                       </div>
//                       <div className="p-4 bg-gray-50 rounded-lg">
//                         <div className="text-sm text-gray-600">Effective Salary</div>
//                         <div className="text-lg font-semibold">{formatCurrency(effectiveSalary)}</div>
//                         {salary > SALARY_CEILING && (
//                           <div className="text-xs text-orange-600">Capped at ₹{SALARY_CEILING.toLocaleString()}</div>
//                         )}
//                       </div>
//                       <div className="p-4 bg-gray-50 rounded-lg">
//                         <div className="text-sm text-gray-600">Working Days</div>
//                         <div className="text-lg font-semibold">{workingDays} days</div>
//                       </div>
//                     </div>
                    
//                     <Separator />
                    
//                     <div className="space-y-4">
//                       <h4 className="font-semibold">Calculation Details:</h4>
                      
//                       <div className="grid md:grid-cols-2 gap-4">
//                         <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
//                           <div className="text-sm text-blue-800 mb-2">
//                             <strong>Proportionate Factor:</strong>
//                           </div>
//                           <div className="text-blue-700">
//                             {workingDays} ÷ 365 = {(workingDays / 365).toFixed(4)}
//                           </div>
//                         </div>
                        
//                         <div className="p-4 bg-green-50 rounded-lg border border-green-200">
//                           <div className="text-sm text-green-800 mb-2">
//                             <strong>Bonus Rate:</strong>
//                           </div>
//                           <div className="text-green-700">
//                             {bonusType === 'statutory' && calculationBasis === 'minimum' 
//                               ? `${MINIMUM_BONUS_RATE}% (Minimum Statutory)`
//                               : `${customBonusRate}% (Custom Rate)`
//                             }
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
//                         <div className="text-sm text-orange-800 mb-2">
//                           <strong>Final Calculation:</strong>
//                         </div>
//                         <div className="text-orange-700">
//                           {formatCurrency(effectiveSalary)} × {
//                             bonusType === 'statutory' && calculationBasis === 'minimum' 
//                               ? MINIMUM_BONUS_RATE 
//                               : customBonusRate
//                           }% × {(workingDays / 365).toFixed(4)} = <strong>{formatCurrency(bonusAmount)}</strong>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="text-xs text-gray-500 space-y-1">
//                       <p>• Calculation is based on the Payment of Bonus Act, 1965</p>
//                       <p>• Salary is capped at ₹{SALARY_CEILING.toLocaleString()} for bonus calculation</p>
//                       <p>• Minimum bonus is ₹{MINIMUM_BONUS_AMOUNT} or {MINIMUM_BONUS_RATE}% of salary, whichever is higher</p>
//                       <p>• Maximum statutory bonus is {MAXIMUM_BONUS_RATE}% of salary</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             )}
//           </div>

//           {/* Results Sidebar */}
//           <div className="lg:col-span-1">
           
//                {/* Quick Info */}
//               <Card >
//                 <CardHeader>  
//                 </CardHeader>
//                 <CardContent className="">
//                   <PopularSearch/>
//                 </CardContent>
//               </Card>
       
//               {/* Result Card */}
//               <Card className="border-l-4 border-l-orange-500 mt-3">
//                 <CardHeader className="text-center">
//                   <CardTitle className="text-lg text-gray-700">
//                     Total Bonus Amount
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <div className="text-4xl font-bold text-orange-500 mb-2">
//                     {isEligible ? formatCurrency(bonusAmount) : '₹ 0'}
//                   </div>
//                   <div className="text-sm text-gray-600 mb-4">
//                     {isEligible ? `${bonusType.charAt(0).toUpperCase() + bonusType.slice(1)} Bonus` : 'Not eligible (< 30 days)'}
//                   </div>
                  
//                   {isEligible && (
//                     <div className="space-y-2">
//                       <div className="p-3 bg-gray-50 rounded-lg">
//                         <div className="text-xs text-gray-600">Minimum Statutory</div>
//                         <div className="font-semibold text-green-600">{formatCurrency(minimumBonus)}</div>
//                       </div>
//                       <div className="p-3 bg-gray-50 rounded-lg">
//                         <div className="text-xs text-gray-600">Maximum Statutory</div>
//                         <div className="font-semibold text-blue-600">{formatCurrency(maximumBonus)}</div>
//                       </div>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>

             

//               {/* Related Tools */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-lg">Related Calculators</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <Link href="/calculators/gratuity" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors" aria-label='gratuity and gratuity amount calculator'>
//                     <div className="font-medium text-sm">Gratuity Calculator</div>
//                     <div className="text-xs text-gray-600">Calculate gratuity amount</div>
//                   </Link>
//                   <Link href="/calculators/pf" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors" aria-label='pf calculator'>
//                     <div className="font-medium text-sm">PF Calculator</div>
//                     <div className="text-xs text-gray-600">Calculate Provident Fund</div>
//                   </Link>
//                   <Link href="/calculators/esi" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors" aria-label='esi and esi contributions calculator'>
//                     <div className="font-medium text-sm">ESI Calculator</div>
//                     <div className="text-xs text-gray-600">Calculate ESI contributions</div>
//                   </Link>
//                 </CardContent>
//               </Card>
//           </div>
//         </div>

//         {/* Information Section */}
//         <div className="mt-12">
//           <Tabs defaultValue="about" className="space-y-6">
//             <TabsList className="grid w-full grid-cols-4 max-w-lg">
//               <TabsTrigger value="about">About Bonus</TabsTrigger>
//               <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
//               <TabsTrigger value="calculation">Calculation</TabsTrigger>
//               <TabsTrigger value="types">Bonus Types</TabsTrigger>
//             </TabsList>

//             <TabsContent value="about" className="space-y-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>What is Bonus?</CardTitle>
//                 </CardHeader>
//                 <CardContent className="prose max-w-none">
//                   <p className="text-gray-700 leading-relaxed mb-4">
//                     <strong>Bonus</strong> is an additional payment made to employees over and above their regular salary. 
//                     It is governed by the <strong>Payment of Bonus Act, 1965</strong> and is applicable to establishments 
//                     employing 20 or more persons.
//                   </p>
//                   <p className="text-gray-700 leading-relaxed mb-4">
//                     The Act ensures that employees receive a fair share of the profits earned by the establishment. 
//                     Bonus is calculated based on the salary or wage earned by the employee during the accounting year.
//                   </p>
//                   <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
//                     <h4 className="font-semibold text-orange-800 mb-2">Key Features:</h4>
//                     <ul className="text-orange-700 text-sm space-y-1">
//                       <li>• Minimum 8.33% of salary or ₹100, whichever is higher</li>
//                       <li>• Maximum 20% of salary</li>
//                       <li>• Based on working days in accounting year</li>
//                       <li>• Salary ceiling of ₹21,000 per month</li>
//                     </ul>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="eligibility" className="space-y-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Eligibility Criteria</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-6">
//                     <div>
//                       <h4 className="font-semibold mb-3">For Employees:</h4>
//                       <ul className="space-y-2 text-gray-700">
//                         <li className="flex items-start gap-2">
//                           <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                           <span>Minimum 30 working days in the accounting year</span>
//                         </li>
//                         <li className="flex items-start gap-2">
//                           <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                           <span>Salary/wage not exceeding ₹21,000 per month</span>
//                         </li>
//                         <li className="flex items-start gap-2">
//                           <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                           <span>Employed in a covered establishment</span>
//                         </li>
//                       </ul>
//                     </div>
                    
//                     <Separator />
                    
//                     <div>
//                       <h4 className="font-semibold mb-3">For Establishments:</h4>
//                       <ul className="space-y-2 text-gray-700">
//                         <li className="flex items-start gap-2">
//                           <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                           <span>Employs 20 or more persons on any day during the accounting year</span>
//                         </li>
//                         <li className="flex items-start gap-2">
//                           <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                           <span>Includes factories, establishments in public sector</span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="calculation" className="space-y-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>How Bonus is Calculated</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-6">
//                     <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                       <h4 className="font-semibold text-blue-800 mb-2">Basic Formula:</h4>
//                       <div className="text-blue-700 font-mono text-lg">
//                         Bonus = (Salary × Bonus %) × (Working Days ÷ 365)
//                       </div>
//                     </div>
                    
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div className="p-4 border rounded-lg">
//                         <h5 className="font-semibold mb-2">Minimum Bonus:</h5>
//                         <ul className="text-sm text-gray-700 space-y-1">
//                           <li>• 8.33% of salary</li>
//                           <li>• Or ₹100 per year</li>
//                           <li>• Whichever is higher</li>
//                         </ul>
//                       </div>
//                       <div className="p-4 border rounded-lg">
//                         <h5 className="font-semibold mb-2">Maximum Bonus:</h5>
//                         <ul className="text-sm text-gray-700 space-y-1">
//                           <li>• 20% of salary</li>
//                           <li>• Based on allocable surplus</li>
//                           <li>• Subject to availability</li>
//                         </ul>
//                       </div>
//                     </div>
                    
//                     <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
//                       <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
//                       <ul className="text-yellow-700 text-sm space-y-1">
//                         <li>• Salary is capped at ₹21,000 per month for calculation</li>
//                         <li>• Proportionate to working days in accounting year</li>
//                         <li>• Based on basic salary + dearness allowance</li>
//                         <li>• Payable within 8 months of accounting year end</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="types" className="space-y-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Types of Bonus</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-6">
//                     <div className="p-4 border-l-4 border-l-blue-500 bg-blue-50">
//                       <h4 className="font-semibold text-blue-800 mb-2">Statutory Bonus</h4>
//                       <p className="text-blue-700 text-sm mb-2">
//                         Mandatory bonus as per Payment of Bonus Act, 1965
//                       </p>
//                       <ul className="text-blue-600 text-sm space-y-1">
//                         <li>• Minimum 8.33% of salary</li>
//                         <li>• Maximum 20% of salary</li>
//                         <li>• Based on allocable surplus</li>
//                       </ul>
//                     </div>
                    
//                     <div className="p-4 border-l-4 border-l-green-500 bg-green-50">
//                       <h4 className="font-semibold text-green-800 mb-2">Ex-gratia Bonus</h4>
//                       <p className="text-green-700 text-sm mb-2">
//                         Additional voluntary bonus paid by employer
//                       </p>
//                       <ul className="text-green-600 text-sm space-y-1">
//                         <li>• Over and above statutory bonus</li>
//                         <li>• At employer's discretion</li>
//                         <li>• No legal obligation</li>
//                       </ul>
//                     </div>
                    
//                     <div className="p-4 border-l-4 border-l-purple-500 bg-purple-50">
//                       <h4 className="font-semibold text-purple-800 mb-2">Productivity Bonus</h4>
//                       <p className="text-purple-700 text-sm mb-2">
//                         Performance-based bonus linked to productivity
//                       </p>
//                       <ul className="text-purple-600 text-sm space-y-1">
//                         <li>• Based on performance metrics</li>
//                         <li>• Incentivizes productivity</li>
//                         <li>• Variable rates</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>
//     </div>
//   )
// }


// app/bonus-calculator/page.tsx
"use client";

import { useMemo, useState } from "react";

/** ===================== Types ===================== */
type Rounding = "none" | "nearest" | "ceil";

/** ===================== Utils ===================== */
const INR = (v: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(v || 0)));

const clamp = (n: number, a: number, b: number) => Math.min(Math.max(n, a), b);

function roundBy(v: number, mode: Rounding) {
  switch (mode) {
    case "nearest":
      return Math.round(v);
    case "ceil":
      return Math.ceil(v);
    default:
      return v;
  }
}

/** ===================== Page ===================== */
export default function BonusCalculatorPage() {
  // Core inputs
  const [monthlyBasicDA, setMonthlyBasicDA] = useState<number>(18000); // Basic + DA per month
  const [eligibleMonths, setEligibleMonths] = useState<number>(12);    // months worked in FY

  // Statutory configuration (static but editable)
  const [eligibilityWageThreshold, setEligibilityWageThreshold] = useState<number>(21000); // <= threshold eligible
  const [minWageForCalcBase, setMinWageForCalcBase] = useState<number>(0); // if you know MW for employment; else 0
  const [statutoryFloor, setStatutoryFloor] = useState<number>(7000);       // ₹7,000 floor as per Act (configurable)
  const [bonusRate, setBonusRate] = useState<number>(8.33);                 // between 8.33% and 20%

  // Policy options
  const [allowExGratiaIfIneligible, setAllowExGratiaIfIneligible] = useState<boolean>(true);
  const [rounding, setRounding] = useState<Rounding>("nearest");

  // Optional attendance scaler (advanced): % of month’s working days attended
  const [useAttendanceScaler, setUseAttendanceScaler] = useState<boolean>(false);
  const [avgAttendancePct, setAvgAttendancePct] = useState<number>(100); // 0..100

  // Guard & helpers
  const safeMonths = useMemo(() => clamp(Math.floor(eligibleMonths || 0), 0, 12), [eligibleMonths]);

  // Eligibility
  const eligible = useMemo(() => {
    if (monthlyBasicDA <= 0) return false;
    return monthlyBasicDA <= eligibilityWageThreshold;
  }, [monthlyBasicDA, eligibilityWageThreshold]);

  // Calculation base per month = min(employee monthly basic+DA, max(7000, MinimumWageInput))
  const monthlyCalcBase = useMemo(() => {
    const ceiling = Math.max(statutoryFloor || 0, minWageForCalcBase || 0); // e.g., max(7000, MW)
    return Math.min(Math.max(monthlyBasicDA, 0), ceiling > 0 ? ceiling : monthlyBasicDA);
  }, [monthlyBasicDA, statutoryFloor, minWageForCalcBase]);

  // Annualized base for eligible months
  const annualCalcBase = useMemo(() => monthlyCalcBase * safeMonths, [monthlyCalcBase, safeMonths]);

  // Attendance scaler (optional)
  const attendanceFactor = useMemo(
    () => (useAttendanceScaler ? clamp(avgAttendancePct, 0, 100) / 100 : 1),
    [useAttendanceScaler, avgAttendancePct]
  );

  // Bonus computation
  const computedBonusRaw = useMemo(() => {
    const rate = clamp(bonusRate, 0, 100) / 100; // convert to fraction
    const payableBase = annualCalcBase * attendanceFactor;

    if (eligible) {
      return payableBase * rate;
    }
    // Not eligible → either 0 or ex-gratia as per policy
    if (allowExGratiaIfIneligible) {
      return payableBase * rate; // treat as ex-gratia
    }
    return 0;
  }, [eligible, allowExGratiaIfIneligible, annualCalcBase, attendanceFactor, bonusRate]);

  const computedBonus = useMemo(() => roundBy(computedBonusRaw, rounding), [computedBonusRaw, rounding]);

  // Effective rate vs *actual* annual Basic+DA (for insight)
  const effectiveOnActualAnnual = useMemo(() => {
    const actualAnnualBasic = Math.max(monthlyBasicDA, 0) * safeMonths * attendanceFactor;
    if (actualAnnualBasic <= 0) return 0;
    return (computedBonusRaw / actualAnnualBasic) * 100;
  }, [monthlyBasicDA, safeMonths, attendanceFactor, computedBonusRaw]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            <span className="text-[#eb8535]">Bonus</span> Calculator
          </h1>
          <p className="text-sm text-neutral-600">
            Statutory-style computation: eligibility threshold, capped calculation base, configurable rate, and pro-rata months.
          </p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-5">
        {/* Calculator */}
        <section className="md:col-span-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Inputs</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {/* Monthly Basic+DA */}
            <div>
              <label className="mb-1 block text-sm font-medium">Monthly Basic + DA (₹)</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={monthlyBasicDA}
                onChange={(e) => setMonthlyBasicDA(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">Used for eligibility and capped for calculation base.</p>
            </div>

            {/* Eligible Months */}
            <div>
              <label className="mb-1 block text-sm font-medium">Eligible Months in FY (0–12)</label>
              <input
                type="number"
                min={0}
                max={12}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={eligibleMonths}
                onChange={(e) => setEligibleMonths(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">Pro-rata based on months worked/eligible.</p>
            </div>

            {/* Eligibility threshold */}
            <div>
              <label className="mb-1 block text-sm font-medium">Eligibility Threshold (₹/month)</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={eligibilityWageThreshold}
                onChange={(e) => setEligibilityWageThreshold(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">Default ₹21,000 under the Act.</p>
            </div>

            {/* Minimum Wage for Calc Base */}
            <div>
              <label className="mb-1 block text-sm font-medium">Minimum Wage for Calc Base (₹/month)</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={minWageForCalcBase}
                onChange={(e) => setMinWageForCalcBase(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">
                Calculation base cap = max(Statutory Floor, Minimum Wage).
              </p>
            </div>

            {/* Statutory floor (₹7,000 default) */}
            <div>
              <label className="mb-1 block text-sm font-medium">Statutory Floor for Calc Base (₹)</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={statutoryFloor}
                onChange={(e) => setStatutoryFloor(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">Default ₹7,000 (configurable).</p>
            </div>

            {/* Bonus Rate */}
            <div>
              <label className="mb-1 block text-sm font-medium">Bonus Rate (%)</label>
              <input
                type="number"
                min={0}
                max={100}
                step={0.01}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={bonusRate}
                onChange={(e) => setBonusRate(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">Typical statutory band: 8.33%–20%.</p>
            </div>

            {/* Ex-gratia toggle */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="size-4 rounded border-neutral-300"
                checked={allowExGratiaIfIneligible}
                onChange={(e) => setAllowExGratiaIfIneligible(e.target.checked)}
              />
              <span className="text-sm">Allow Ex-gratia if Ineligible</span>
            </div>

            {/* Attendance scaler */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="size-4 rounded border-neutral-300"
                checked={useAttendanceScaler}
                onChange={(e) => setUseAttendanceScaler(e.target.checked)}
              />
              <span className="text-sm">Apply Attendance / Productivity Scaler (%)</span>
            </div>

            {useAttendanceScaler && (
              <div>
                <label className="mb-1 block text-sm font-medium">Average Attendance (%)</label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={avgAttendancePct}
                  onChange={(e) => setAvgAttendancePct(Number(e.target.value))}
                />
              </div>
            )}

            {/* Rounding */}
            <div>
              <label className="mb-1 block text-sm font-medium">Rounding</label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={rounding}
                onChange={(e) => setRounding(e.target.value as Rounding)}
              >
                <option value="none">None (paise retained)</option>
                <option value="nearest">Nearest Rupee</option>
                <option value="ceil">Round Up</option>
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Eligibility</div>
              <div className="mt-1 text-base font-medium">
                {eligible ? "Eligible under threshold" : allowExGratiaIfIneligible ? "Not eligible • Ex-gratia policy" : "Not eligible"}
              </div>
              <div className="mt-1 text-[11px] text-neutral-500">
                Threshold ₹{eligibilityWageThreshold.toLocaleString("en-IN")} • Basic+DA ₹{monthlyBasicDA.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Monthly Calculation Base</div>
              <div className="mt-1 text-2xl font-semibold">{INR(monthlyCalcBase)}</div>
              <div className="mt-1 text-[11px] text-neutral-500">
                Cap = max(₹{statutoryFloor.toLocaleString("en-IN")}, ₹{(minWageForCalcBase || 0).toLocaleString("en-IN")})
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Annual Base (Pro-rata)</div>
              <div className="mt-1 text-2xl font-semibold">{INR(annualCalcBase)}</div>
              <div className="mt-1 text-[11px] text-neutral-500">
                Months {safeMonths} {useAttendanceScaler ? `• Attendance ${avgAttendancePct}%` : ""}
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 p-4">
            <div className="mb-1 text-xs text-neutral-600">Bonus Payable</div>
            <div className="text-3xl font-bold">{INR(computedBonus)}</div>
            <div className="mt-1 text-xs text-neutral-500">
              Rate {bonusRate}% • Effective on actual Basic+DA ~ {effectiveOnActualAnnual.toFixed(2)}%
            </div>
            <p className="mt-2 text-[11px] text-neutral-500">
              This tool is a guide. For statutory compliance, validate {`{`}minimum wage, eligibility threshold, allocable surplus/set-on & set-off{`}`} with your legal team.
            </p>
          </div>
        </section>

        {/* Help / Notes */}
        <aside className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">How it works</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li>
              <b>Eligibility:</b> Employee with Basic+DA ≤ threshold (default ₹21,000) is eligible. Toggle ex-gratia to pay otherwise.
            </li>
            <li>
              <b>Calc Base:</b> Per month base is capped at <code>max(₹7,000, Minimum Wage)</code> or employee’s Basic+DA, whichever is lower.
            </li>
            <li>
              <b>Bonus Rate:</b> Typically 8.33% to 20%. Applied on pro-rated annual base.
            </li>
            <li>
              <b>Attendance Scaler:</b> Optional percentage factor on the annual base.
            </li>
            <li>
              <b>Rounding:</b> None / nearest / ceil for payroll hygiene.
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

