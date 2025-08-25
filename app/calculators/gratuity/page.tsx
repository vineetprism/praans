'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calculator, IndianRupee, Clock, Users, FileText, ChevronRight, Home, Share2, Download, Info, CheckCircle, AlertCircle, CalendarIcon, Upload, Sparkles, FileImage, Loader2 } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import PopularSearch from '@/app/PopularSearch/PopularSearch'

type CalculationMethod = 'manual' | 'dates' | 'document'

export default function GratuityCalculatorPage() {
  const [salary, setSalary] = useState<number>(50000)
  const [calculationMethod, setCalculationMethod] = useState<CalculationMethod>('manual')
  
  // Manual input states
  const [years, setYears] = useState<number>(5)
  const [months, setMonths] = useState<number>(0)
  const [days, setDays] = useState<number>(0)
  
  // Date-based calculation states
  const [joiningDate, setJoiningDate] = useState<Date>()
  const [leavingDate, setLeavingDate] = useState<Date>(new Date())
  
  // Document upload states
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [extractedData, setExtractedData] = useState<{
    joiningDate?: Date
    employeeName?: string
    designation?: string
    confidence?: number
  } | null>(null)
  
  // Calculation results
  const [totalServiceDays, setTotalServiceDays] = useState<number>(0)
  const [gratuityAmount, setGratuityAmount] = useState<number>(0)
  const [isEligible, setIsEligible] = useState<boolean>(false)

  // Calculate service period based on method
  useEffect(() => {
    let serviceDays = 0
    
    switch (calculationMethod) {
      case 'manual':
        serviceDays = (years * 365) + (months * 30) + days
        break
      case 'dates':
        if (joiningDate && leavingDate) {
          const diffTime = Math.abs(leavingDate.getTime() - joiningDate.getTime())
          serviceDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        }
        break
      case 'document':
        if (extractedData?.joiningDate) {
          const diffTime = Math.abs(leavingDate.getTime() - extractedData.joiningDate.getTime())
          serviceDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        }
        break
    }
    
    setTotalServiceDays(serviceDays)
    
    // Calculate gratuity
    const serviceYears = serviceDays / 365
    if (serviceYears >= 5) {
      // Formula: (Last drawn salary × 15 × Number of years of service) / 26
      const calculatedGratuity = (salary * 15 * serviceYears) / 26
      setGratuityAmount(Math.round(calculatedGratuity))
      setIsEligible(true)
    } else {
      setGratuityAmount(0)
      setIsEligible(false)
    }
  }, [salary, calculationMethod, years, months, days, joiningDate, leavingDate, extractedData])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  const formatServicePeriod = (days: number) => {
    const years = Math.floor(days / 365)
    const remainingDays = days % 365
    const months = Math.floor(remainingDays / 30)
    const finalDays = remainingDays % 30
    
    const parts = []
    if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`)
    if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`)
    if (finalDays > 0) parts.push(`${finalDays} day${finalDays > 1 ? 's' : ''}`)
    
    return parts.join(', ') || '0 days'
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploadedFile(file)
    setIsProcessing(true)

    // Simulate AI processing (replace with actual AI service)
    setTimeout(() => {
      // Mock extracted data - in real implementation, this would come from AI service
      const mockExtractedData = {
        joiningDate: new Date('2019-03-15'),
        employeeName: 'John Doe',
        designation: 'Software Engineer',
        confidence: 0.95
      }
      
      setExtractedData(mockExtractedData)
      setIsProcessing(false)
    }, 3000)
  }

  const serviceYears = totalServiceDays / 365

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-800 mb-2 flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              Advanced Gratuity Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Calculate gratuity with precise dates, manual input, or AI-powered document analysis
            </p>
          </div>
          
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-orange-500" />
                  Calculate Your Gratuity
                </CardTitle>
                <CardDescription>
                  Choose your preferred method to calculate gratuity amount
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Salary Input */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">
                    Monthly Salary (Basic Pay + Dearness Allowance)
                  </Label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="number"
                      value={salary}
                      onChange={(e) => setSalary(Number(e.target.value))}
                      className="pl-12 text-lg h-14 border-2 focus:border-orange-500"
                      placeholder="Enter your monthly salary"
                      min="0"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Include basic pay and dearness allowance only. Exclude other allowances.
                  </p>
                </div>

                {/* Calculation Method Tabs */}
                <Tabs value={calculationMethod} onValueChange={(value) => setCalculationMethod(value as CalculationMethod)}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="manual" className="flex items-center gap-2">
                      <Calculator className="w-4 h-4" />
                      Manual Entry
                    </TabsTrigger>
                    <TabsTrigger value="dates" className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      Date Range
                    </TabsTrigger>
                    <TabsTrigger value="document" className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      AI Document
                    </TabsTrigger>
                  </TabsList>

                  {/* Manual Entry Tab */}
                  <TabsContent value="manual" className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Years</Label>
                        <Input
                          type="number"
                          value={years}
                          onChange={(e) => setYears(Number(e.target.value))}
                          min="0"
                          max="50"
                          className="text-center"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Months</Label>
                        <Input
                          type="number"
                          value={months}
                          onChange={(e) => setMonths(Number(e.target.value))}
                          min="0"
                          max="11"
                          className="text-center"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Days</Label>
                        <Input
                          type="number"
                          value={days}
                          onChange={(e) => setDays(Number(e.target.value))}
                          min="0"
                          max="30"
                          className="text-center"
                        />
                      </div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-sm text-blue-800">
                        <strong>Total Service Period:</strong> {formatServicePeriod(totalServiceDays)}
                      </div>
                    </div>
                  </TabsContent>

                  {/* Date Range Tab */}
                  <TabsContent value="dates" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Joining Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal h-12",
                                !joiningDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {joiningDate ? format(joiningDate, "PPP") : "Select joining date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={joiningDate}
                              onSelect={setJoiningDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Leaving Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal h-12"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {format(leavingDate, "PPP")}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={leavingDate}
                              onSelect={(date) => date && setLeavingDate(date)}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    
                    {joiningDate && (
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="text-sm text-green-800">
                          <strong>Calculated Service Period:</strong> {formatServicePeriod(totalServiceDays)}
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  {/* AI Document Tab */}
                  <TabsContent value="document" className="space-y-6">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                          <Upload className="w-8 h-8 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Upload Joining Letter</h3>
                          <p className="text-gray-600 mb-4">
                            Upload your joining letter, appointment letter, or employment contract. 
                            Our AI will extract the joining date automatically.
                          </p>
                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="document-upload"
                          />
                          <Label htmlFor="document-upload">
                            <Button asChild className="bg-orange-500 hover:bg-orange-600">
                              <span>
                                <FileImage className="w-4 h-4 mr-2" />
                                Choose File
                              </span>
                            </Button>
                          </Label>
                        </div>
                        <p className="text-xs text-gray-500">
                          Supported formats: PDF, JPG, PNG, DOC, DOCX (Max 10MB)
                        </p>
                      </div>
                    </div>

                    {/* Processing State */}
                    {isProcessing && (
                      <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-center space-x-3">
                          <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                          <div className="text-blue-800">
                            <div className="font-semibold">Processing Document...</div>
                            <div className="text-sm">AI is analyzing your document to extract joining date</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Extracted Data */}
                    {extractedData && !isProcessing && (
                      <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-green-800 mb-3">Document Processed Successfully!</h4>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium">Employee Name:</span>
                                <div className="text-green-700">{extractedData.employeeName}</div>
                              </div>
                              <div>
                                <span className="font-medium">Designation:</span>
                                <div className="text-green-700">{extractedData.designation}</div>
                              </div>
                              <div>
                                <span className="font-medium">Joining Date:</span>
                                <div className="text-green-700">
                                  {extractedData.joiningDate ? format(extractedData.joiningDate, "PPP") : 'Not found'}
                                </div>
                              </div>
                              <div>
                                <span className="font-medium">Confidence:</span>
                                <div className="text-green-700">{((extractedData.confidence || 0) * 100).toFixed(1)}%</div>
                              </div>
                            </div>
                            <div className="mt-4 p-3 bg-white rounded border">
                              <div className="text-sm">
                                <strong>Calculated Service Period:</strong> {formatServicePeriod(totalServiceDays)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>

                {/* Eligibility Check */}
                {serviceYears >= 5 ? (
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      <strong>Eligible for Gratuity:</strong> You meet the minimum service requirement of 5 years.
                      <br />
                      <span className="text-sm">Service Period: {formatServicePeriod(totalServiceDays)} ({serviceYears.toFixed(2)} years)</span>
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      <strong>Not Eligible:</strong> Minimum 5 years of continuous service is required for gratuity eligibility.
                      <br />
                      <span className="text-sm">Current Service: {formatServicePeriod(totalServiceDays)} ({serviceYears.toFixed(2)} years)</span>
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
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600">Monthly Salary</div>
                        <div className="text-lg font-semibold">{formatCurrency(salary)}</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600">Service Period</div>
                        <div className="text-lg font-semibold">{formatServicePeriod(totalServiceDays)}</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600">Service Years</div>
                        <div className="text-lg font-semibold">{serviceYears.toFixed(2)} Years</div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Calculation Formula:</h4>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="text-sm text-blue-800 mb-2">
                          <strong>Gratuity = (Last Drawn Salary × 15 × Years of Service) ÷ 26</strong>
                        </div>
                        <div className="text-blue-700">
                          ({formatCurrency(salary)} × 15 × {serviceYears.toFixed(2)}) ÷ 26 = <strong>{formatCurrency(gratuityAmount)}</strong>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>• Formula is based on the Payment of Gratuity Act, 1972</p>
                      <p>• 15 days salary for each completed year of service</p>
                      <p>• 26 working days per month is considered</p>
                      <p>• Fractional years are calculated proportionally</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Results Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
                 {/* Quick Info */}
                       <Card >
                         <CardHeader>  
                         </CardHeader>
                         <CardContent className="space-y-4">
                           <PopularSearch/>
                         </CardContent>
                       </Card>
              </div>

              {/* Result Card */}
              <Card className="border-l-4 border-l-orange-500 mt-3">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-gray-700">
                    Total Gratuity Payable
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    {isEligible ? formatCurrency(gratuityAmount) : '₹ 0'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {isEligible ? `Based on ${serviceYears.toFixed(2)} years of service` : 'Not eligible (< 5 years)'}
                  </div>
                  {isEligible && (
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                      <div className="text-xs text-orange-800">
                        <div><strong>Service Period:</strong></div>
                        <div>{formatServicePeriod(totalServiceDays)}</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

           
              {/* Related Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Calculators</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/calculators/pf" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-sm">PF Calculator</div>
                    <div className="text-xs text-gray-600">Calculate Provident Fund</div>
                  </Link>
                  <Link href="/calculators/esi" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-sm">ESI Calculator</div>
                    <div className="text-xs text-gray-600">Calculate ESI contributions</div>
                  </Link>
                  <Link href="/calculators/bonus" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-sm">Bonus Calculator</div>
                    <div className="text-xs text-gray-600">Calculate annual bonus</div>
                  </Link>
                </CardContent>
              </Card>
            {/* </div> */}
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-12">
          <Tabs defaultValue="about" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 max-w-lg">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
              <TabsTrigger value="calculation">Formula</TabsTrigger>
              <TabsTrigger value="ai-features">AI Features</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Gratuity?</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Gratuity</strong> is a monetary benefit paid by an employer to an employee as a token of appreciation 
                    for services rendered to the company. It is governed by the <strong>Payment of Gratuity Act, 1972</strong> 
                    and is applicable to establishments with 10 or more employees.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our advanced calculator allows you to calculate gratuity using multiple methods - manual entry of service period, 
                    precise date calculations, or AI-powered document analysis for maximum accuracy.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai-features" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-500" />
                    AI-Powered Document Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Supported Documents:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Joining Letters & Appointment Letters</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Employment Contracts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Offer Letters with joining dates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Service certificates</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-3">AI Capabilities:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <Sparkles className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>Automatic date extraction from documents</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Sparkles className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>Employee name and designation recognition</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Sparkles className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>Confidence scoring for accuracy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Sparkles className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>Support for multiple file formats</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Other tabs remain the same */}
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
                          <span>Minimum 5 years of continuous service</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Applicable on retirement, resignation, death, or disablement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Must be employed in a covered establishment</span>
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
                  <CardTitle>How Gratuity is Calculated</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Standard Formula:</h4>
                      <div className="text-blue-700 font-mono text-lg">
                        Gratuity = (Last Drawn Salary × 15 × Years of Service) ÷ 26
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-800 mb-2">Enhanced Precision:</h4>
                      <ul className="text-orange-700 text-sm space-y-1">
                        <li>• Our calculator considers exact days, months, and years</li>
                        <li>• Fractional years are calculated proportionally</li>
                        <li>• AI extraction ensures accurate service period calculation</li>
                        <li>• Multiple input methods for maximum flexibility</li>
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
