'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Calculator, IndianRupee, Clock, Users, FileText, ChevronRight, Home, Share2, Download, Info, CheckCircle, AlertCircle, TrendingUp, Building2, Calendar } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

type BonusType = 'statutory' | 'exgratia' | 'productivity'
type CalculationBasis = 'minimum' | 'actual'

export default function BonusCalculatorPage() {
  // Basic inputs
  const [salary, setSalary] = useState<number>(25000)
  const [workingDays, setWorkingDays] = useState<number>(240)
  const [bonusType, setBonusType] = useState<BonusType>('statutory')
  const [calculationBasis, setCalculationBasis] = useState<CalculationBasis>('minimum')
  
  // Advanced inputs
  const [customBonusRate, setCustomBonusRate] = useState<number>(8.33)
  const [isEligible, setIsEligible] = useState<boolean>(true)
  const [hasWorkedMinimumDays, setHasWorkedMinimumDays] = useState<boolean>(true)
  const [establishmentType, setEstablishmentType] = useState<string>('factory')
  
  // Calculation results
  const [bonusAmount, setBonusAmount] = useState<number>(0)
  const [minimumBonus, setMinimumBonus] = useState<number>(0)
  const [maximumBonus, setMaximumBonus] = useState<number>(0)
  const [effectiveSalary, setEffectiveSalary] = useState<number>(0)

  // Constants as per Payment of Bonus Act, 1965
  const MINIMUM_BONUS_RATE = 8.33 // 8.33% of salary or Rs. 100, whichever is higher
  const MAXIMUM_BONUS_RATE = 20 // 20% of salary
  const MINIMUM_WORKING_DAYS = 30 // Minimum days to be eligible
  const SALARY_CEILING = 21000 // Maximum salary for bonus calculation (as per latest amendment)
  const MINIMUM_BONUS_AMOUNT = 100 // Minimum bonus amount in rupees

  // Calculate bonus based on inputs
  useEffect(() => {
    // Check eligibility
    const eligible = workingDays >= MINIMUM_WORKING_DAYS
    setIsEligible(eligible)
    setHasWorkedMinimumDays(eligible)

    if (!eligible) {
      setBonusAmount(0)
      setMinimumBonus(0)
      setMaximumBonus(0)
      return
    }

    // Calculate effective salary (capped at ceiling)
    const effectiveSal = Math.min(salary, SALARY_CEILING)
    setEffectiveSalary(effectiveSal)

    // Calculate proportionate bonus based on working days
    const proportionateFactor = workingDays / 365

    let calculatedBonus = 0

    switch (bonusType) {
      case 'statutory':
        if (calculationBasis === 'minimum') {
          calculatedBonus = Math.max(
            (effectiveSal * MINIMUM_BONUS_RATE / 100) * proportionateFactor,
            MINIMUM_BONUS_AMOUNT * proportionateFactor
          )
        } else {
          // Actual calculation based on company's allocable surplus
          calculatedBonus = (effectiveSal * customBonusRate / 100) * proportionateFactor
        }
        break
      case 'exgratia':
        calculatedBonus = (effectiveSal * customBonusRate / 100) * proportionateFactor
        break
      case 'productivity':
        calculatedBonus = (effectiveSal * customBonusRate / 100) * proportionateFactor
        break
    }

    // Calculate minimum and maximum bonus
    const minBonus = Math.max(
      (effectiveSal * MINIMUM_BONUS_RATE / 100) * proportionateFactor,
      MINIMUM_BONUS_AMOUNT * proportionateFactor
    )
    const maxBonus = (effectiveSal * MAXIMUM_BONUS_RATE / 100) * proportionateFactor

    setBonusAmount(Math.round(calculatedBonus))
    setMinimumBonus(Math.round(minBonus))
    setMaximumBonus(Math.round(maxBonus))
  }, [salary, workingDays, bonusType, calculationBasis, customBonusRate])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  const getBonusTypeDescription = (type: BonusType) => {
    switch (type) {
      case 'statutory':
        return 'Mandatory bonus as per Payment of Bonus Act, 1965'
      case 'exgratia':
        return 'Additional voluntary bonus paid by employer'
      case 'productivity':
        return 'Performance-based bonus linked to productivity'
      default:
        return ''
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="Pragans Consultech" 
                width={180} 
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</Link>
              <Link href="/acts" className="text-gray-600 hover:text-orange-500 transition-colors">Acts</Link>
              <Link href="/calculators" className="text-orange-500 font-medium">Calculators</Link>
              <Link href="/forms" className="text-gray-600 hover:text-orange-500 transition-colors">Forms</Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Home className="w-4 h-4" />
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/calculators" className="hover:text-orange-500">Calculators</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-orange-500 font-medium">Bonus Calculator</span>
        </nav>

        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-800 mb-2 flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              Bonus Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Calculate statutory and ex-gratia bonus as per the Payment of Bonus Act, 1965
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-orange-500" />
                  Calculate Your Bonus
                </CardTitle>
                <CardDescription>
                  Enter your employment details to calculate bonus amount
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">
                      Monthly Salary (Basic + DA)
                    </Label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="number"
                        value={salary}
                        onChange={(e) => setSalary(Number(e.target.value))}
                        className="pl-12 text-lg h-12 border-2 focus:border-orange-500"
                        placeholder="Enter monthly salary"
                        min="0"
                      />
                    </div>
                    <p className="text-sm text-gray-500">
                      Include basic pay and dearness allowance only
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">
                      Working Days in Accounting Year
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="number"
                        value={workingDays}
                        onChange={(e) => setWorkingDays(Number(e.target.value))}
                        className="pl-12 text-lg h-12 border-2 focus:border-orange-500"
                        placeholder="Enter working days"
                        min="0"
                        max="365"
                      />
                    </div>
                    <p className="text-sm text-gray-500">
                      Minimum 30 days required for eligibility
                    </p>
                  </div>
                </div>

                {/* Bonus Type Selection */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium">Bonus Type</Label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {(['statutory', 'exgratia', 'productivity'] as BonusType[]).map((type) => (
                      <Card 
                        key={type}
                        className={`cursor-pointer transition-all ${
                          bonusType === type 
                            ? 'border-orange-500 bg-orange-50' 
                            : 'hover:border-gray-300'
                        }`}
                        onClick={() => setBonusType(type)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              bonusType === type 
                                ? 'bg-orange-500 border-orange-500' 
                                : 'border-gray-300'
                            }`} />
                            <span className="font-medium capitalize">{type} Bonus</span>
                          </div>
                          <p className="text-xs text-gray-600">
                            {getBonusTypeDescription(type)}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Advanced Options */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Advanced Options</Label>
                    <Badge variant="outline">Optional</Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Establishment Type</Label>
                      <Select value={establishmentType} onValueChange={setEstablishmentType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="factory">Factory</SelectItem>
                          <SelectItem value="mine">Mine</SelectItem>
                          <SelectItem value="plantation">Plantation</SelectItem>
                          <SelectItem value="port">Port</SelectItem>
                          <SelectItem value="railway">Railway</SelectItem>
                          <SelectItem value="oilfield">Oilfield</SelectItem>
                          <SelectItem value="other">Other Establishment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Calculation Basis</Label>
                      <Select value={calculationBasis} onValueChange={(value) => setCalculationBasis(value as CalculationBasis)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minimum">Minimum Statutory (8.33%)</SelectItem>
                          <SelectItem value="actual">Based on Allocable Surplus</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {(calculationBasis === 'actual' || bonusType !== 'statutory') && (
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">
                        Custom Bonus Rate (%)
                      </Label>
                      <Input
                        type="number"
                        value={customBonusRate}
                        onChange={(e) => setCustomBonusRate(Number(e.target.value))}
                        className="text-lg h-12 border-2 focus:border-orange-500"
                        placeholder="Enter bonus percentage"
                        min="0"
                        max="100"
                        step="0.01"
                      />
                      <p className="text-sm text-gray-500">
                        Enter the bonus percentage (statutory range: 8.33% - 20%)
                      </p>
                    </div>
                  )}
                </div>

                {/* Eligibility Check */}
                {isEligible ? (
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      <strong>Eligible for Bonus:</strong> You meet the minimum working days requirement.
                      <br />
                      <span className="text-sm">Working Days: {workingDays} days (Minimum: {MINIMUM_WORKING_DAYS} days)</span>
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      <strong>Not Eligible:</strong> Minimum {MINIMUM_WORKING_DAYS} working days required for bonus eligibility.
                      <br />
                      <span className="text-sm">Current Working Days: {workingDays} days</span>
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Calculation Breakdown */}
            {isEligible && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-orange-500" />
                    Detailed Calculation Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600">Monthly Salary</div>
                        <div className="text-lg font-semibold">{formatCurrency(salary)}</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600">Effective Salary</div>
                        <div className="text-lg font-semibold">{formatCurrency(effectiveSalary)}</div>
                        {salary > SALARY_CEILING && (
                          <div className="text-xs text-orange-600">Capped at ₹{SALARY_CEILING.toLocaleString()}</div>
                        )}
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600">Working Days</div>
                        <div className="text-lg font-semibold">{workingDays} days</div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Calculation Details:</h4>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="text-sm text-blue-800 mb-2">
                            <strong>Proportionate Factor:</strong>
                          </div>
                          <div className="text-blue-700">
                            {workingDays} ÷ 365 = {(workingDays / 365).toFixed(4)}
                          </div>
                        </div>
                        
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                          <div className="text-sm text-green-800 mb-2">
                            <strong>Bonus Rate:</strong>
                          </div>
                          <div className="text-green-700">
                            {bonusType === 'statutory' && calculationBasis === 'minimum' 
                              ? `${MINIMUM_BONUS_RATE}% (Minimum Statutory)`
                              : `${customBonusRate}% (Custom Rate)`
                            }
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="text-sm text-orange-800 mb-2">
                          <strong>Final Calculation:</strong>
                        </div>
                        <div className="text-orange-700">
                          {formatCurrency(effectiveSalary)} × {
                            bonusType === 'statutory' && calculationBasis === 'minimum' 
                              ? MINIMUM_BONUS_RATE 
                              : customBonusRate
                          }% × {(workingDays / 365).toFixed(4)} = <strong>{formatCurrency(bonusAmount)}</strong>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>• Calculation is based on the Payment of Bonus Act, 1965</p>
                      <p>• Salary is capped at ₹{SALARY_CEILING.toLocaleString()} for bonus calculation</p>
                      <p>• Minimum bonus is ₹{MINIMUM_BONUS_AMOUNT} or {MINIMUM_BONUS_RATE}% of salary, whichever is higher</p>
                      <p>• Maximum statutory bonus is {MAXIMUM_BONUS_RATE}% of salary</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Results Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Result Card */}
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-gray-700">
                    Total Bonus Amount
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    {isEligible ? formatCurrency(bonusAmount) : '₹ 0'}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    {isEligible ? `${bonusType.charAt(0).toUpperCase() + bonusType.slice(1)} Bonus` : 'Not eligible (< 30 days)'}
                  </div>
                  
                  {isEligible && (
                    <div className="space-y-2">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-xs text-gray-600">Minimum Statutory</div>
                        <div className="font-semibold text-green-600">{formatCurrency(minimumBonus)}</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-xs text-gray-600">Maximum Statutory</div>
                        <div className="font-semibold text-blue-600">{formatCurrency(maximumBonus)}</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Info className="w-5 h-5 text-orange-500" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Minimum Working Days</div>
                      <div className="text-xs text-gray-600">30 days in accounting year</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Applicable to</div>
                      <div className="text-xs text-gray-600">Establishments with 20+ employees</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IndianRupee className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Salary Ceiling</div>
                      <div className="text-xs text-gray-600">₹{SALARY_CEILING.toLocaleString()} per month</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Bonus Range</div>
                      <div className="text-xs text-gray-600">{MINIMUM_BONUS_RATE}% - {MAXIMUM_BONUS_RATE}% of salary</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Calculators</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/calculators/gratuity" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-sm">Gratuity Calculator</div>
                    <div className="text-xs text-gray-600">Calculate gratuity amount</div>
                  </Link>
                  <Link href="/calculators/pf" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-sm">PF Calculator</div>
                    <div className="text-xs text-gray-600">Calculate Provident Fund</div>
                  </Link>
                  <Link href="/calculators/esi" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-sm">ESI Calculator</div>
                    <div className="text-xs text-gray-600">Calculate ESI contributions</div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-12">
          <Tabs defaultValue="about" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 max-w-lg">
              <TabsTrigger value="about">About Bonus</TabsTrigger>
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
              <TabsTrigger value="calculation">Calculation</TabsTrigger>
              <TabsTrigger value="types">Bonus Types</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Bonus?</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Bonus</strong> is an additional payment made to employees over and above their regular salary. 
                    It is governed by the <strong>Payment of Bonus Act, 1965</strong> and is applicable to establishments 
                    employing 20 or more persons.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Act ensures that employees receive a fair share of the profits earned by the establishment. 
                    Bonus is calculated based on the salary or wage earned by the employee during the accounting year.
                  </p>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Key Features:</h4>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Minimum 8.33% of salary or ₹100, whichever is higher</li>
                      <li>• Maximum 20% of salary</li>
                      <li>• Based on working days in accounting year</li>
                      <li>• Salary ceiling of ₹21,000 per month</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="eligibility" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Eligibility Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">For Employees:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Minimum 30 working days in the accounting year</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Salary/wage not exceeding ₹21,000 per month</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Employed in a covered establishment</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-3">For Establishments:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Employs 20 or more persons on any day during the accounting year</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Includes factories, establishments in public sector</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calculation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How Bonus is Calculated</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Basic Formula:</h4>
                      <div className="text-blue-700 font-mono text-lg">
                        Bonus = (Salary × Bonus %) × (Working Days ÷ 365)
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-semibold mb-2">Minimum Bonus:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 8.33% of salary</li>
                          <li>• Or ₹100 per year</li>
                          <li>• Whichever is higher</li>
                        </ul>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-semibold mb-2">Maximum Bonus:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 20% of salary</li>
                          <li>• Based on allocable surplus</li>
                          <li>• Subject to availability</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li>• Salary is capped at ₹21,000 per month for calculation</li>
                        <li>• Proportionate to working days in accounting year</li>
                        <li>• Based on basic salary + dearness allowance</li>
                        <li>• Payable within 8 months of accounting year end</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="types" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Types of Bonus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border-l-4 border-l-blue-500 bg-blue-50">
                      <h4 className="font-semibold text-blue-800 mb-2">Statutory Bonus</h4>
                      <p className="text-blue-700 text-sm mb-2">
                        Mandatory bonus as per Payment of Bonus Act, 1965
                      </p>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Minimum 8.33% of salary</li>
                        <li>• Maximum 20% of salary</li>
                        <li>• Based on allocable surplus</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border-l-4 border-l-green-500 bg-green-50">
                      <h4 className="font-semibold text-green-800 mb-2">Ex-gratia Bonus</h4>
                      <p className="text-green-700 text-sm mb-2">
                        Additional voluntary bonus paid by employer
                      </p>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Over and above statutory bonus</li>
                        <li>• At employer's discretion</li>
                        <li>• No legal obligation</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border-l-4 border-l-purple-500 bg-purple-50">
                      <h4 className="font-semibold text-purple-800 mb-2">Productivity Bonus</h4>
                      <p className="text-purple-700 text-sm mb-2">
                        Performance-based bonus linked to productivity
                      </p>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• Based on performance metrics</li>
                        <li>• Incentivizes productivity</li>
                        <li>• Variable rates</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
