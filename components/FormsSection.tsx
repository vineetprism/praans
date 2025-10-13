"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Download,
  FileText,
  Eye,
  Star,
  Clock,
  Paperclip,
  Calendar,
  AlertCircle,
  Users,
  FileCheck,
  FileX,
  FilePlus,
} from "lucide-react"
import { downloadFile, type DownloadItem } from "@/lib/download-utils"

interface Form {
  id: number
  title: string
  formNumber: string
  description: string
  lastUpdated: string
  fileSize: string
  format: string
  isPopular: boolean
  difficulty: string
  estimatedTime: string
  mandatory: boolean
  downloadUrl: string
}

interface FormsSectionProps {
  actTitle: string
  actSlug: string
}


const formsData: { [key: string]: Form[] } = {
  "factories-act-1948": [
    {
      id: 1,
      title: "Form I - Notice of Commencement of Work",
      formNumber: "Form I",
      description: "Notice to be given before commencing work in a factory",
      lastUpdated: "2024-12-10",
      fileSize: "245 KB",
      format: "PDF",
      isPopular: true,
      difficulty: "Easy",
      estimatedTime: "15 minutes",
      mandatory: true,
      downloadUrl: "/forms/downloads/form-i-notice-commencement.pdf",
    },
    {
      id: 2,
      title: "Form II - License to Work a Factory",
      formNumber: "Form II",
      description: "Application for license to work a factory",
      lastUpdated: "2024-12-08",
      fileSize: "312 KB",
      format: "PDF",
      isPopular: true,
      difficulty: "Medium",
      estimatedTime: "30 minutes",
      mandatory: true,
      downloadUrl: "/forms/downloads/form-ii-license-work-factory.pdf",
    },
    {
      id: 3,
      title: "Form III - Register of Adult Workers",
      formNumber: "Form III",
      description: "Register to be maintained for adult workers in factory",
      lastUpdated: "2024-11-28",
      fileSize: "189 KB",
      format: "Excel",
      isPopular: false,
      difficulty: "Easy",
      estimatedTime: "10 minutes",
      mandatory: true,
      downloadUrl: "/forms/downloads/form-iii-register-adult-workers.xlsx",
    },
    {
      id: 4,
      title: "Form IV - Register of Child Workers",
      formNumber: "Form IV",
      description: "Register to be maintained for child workers (if applicable)",
      lastUpdated: "2024-11-25",
      fileSize: "167 KB",
      format: "Excel",
      isPopular: false,
      difficulty: "Easy",
      estimatedTime: "10 minutes",
      mandatory: false,
      downloadUrl: "/forms/downloads/form-iv-register-child-workers.xlsx",
    },
    {
      id: 5,
      title: "Form V - Register of Overtime",
      formNumber: "Form V",
      description: "Register for recording overtime work by adult workers",
      lastUpdated: "2024-12-01",
      fileSize: "198 KB",
      format: "Excel",
      isPopular: true,
      difficulty: "Medium",
      estimatedTime: "20 minutes",
      mandatory: true,
      downloadUrl: "/forms/downloads/form-v-register-overtime.xlsx",
    },
    {
      id: 6,
      title: "Form VI - Register of Leave with Wages",
      formNumber: "Form VI",
      description: "Register for recording leave with wages of workers",
      lastUpdated: "2024-11-30",
      fileSize: "203 KB",
      format: "Excel",
      isPopular: false,
      difficulty: "Easy",
      estimatedTime: "15 minutes",
      mandatory: true,
      downloadUrl: "/forms/downloads/form-vi-register-leave-wages.xlsx",
    },
  ],
  "contract-labour-act-1970": [
    {
      id: 1,
      title: "Form I - Application for Registration of Establishment",
      formNumber: "Form I",
      description: "Application for registration of establishment employing contract labour",
      lastUpdated: "2024-12-05",
      fileSize: "278 KB",
      format: "PDF",
      isPopular: true,
      difficulty: "Medium",
      estimatedTime: "25 minutes",
      mandatory: true,
      downloadUrl: "/forms/downloads/contract-labour-form-i.pdf",
    },
    {
      id: 2,
      title: "Form II - Certificate of Registration",
      formNumber: "Form II",
      description: "Certificate of registration for establishments",
      lastUpdated: "2024-11-28",
      fileSize: "156 KB",
      format: "PDF",
      isPopular: false,
      difficulty: "Easy",
      estimatedTime: "10 minutes",
      mandatory: true,
      downloadUrl: "/forms/downloads/contract-labour-form-ii.pdf",
    },
    {
      id: 3,
      title: "Form XIII - Register of Contract Workers",
      formNumber: "Form XIII",
      description: "Register to be maintained for contract workers",
      lastUpdated: "2024-11-25",
      fileSize: "189 KB",
      format: "Excel",
      isPopular: true,
      difficulty: "Easy",
      estimatedTime: "15 minutes",
      mandatory: true,
      downloadUrl: "/forms/downloads/contract-labour-form-xiii.xlsx",
    },
    {
      id: 4,
      title: "Form XIV - Register of Wages",
      formNumber: "Form XIV",
      description: "Register of wages paid to contract workers",
      lastUpdated: "2024-12-01",
      fileSize: "234 KB",
      format: "Excel",
      isPopular: true,
      difficulty: "Medium",
      estimatedTime: "20 minutes",
      mandatory: true,
      downloadUrl: "/forms/downloads/contract-labour-form-xiv.xlsx",
    },
  ],
  "payment-of-wages-act-1936": [
    {
      id: 1,
      title: "Form VII - Wage Register",
      formNumber: "Form VII",
      description: "Register of wages to be maintained by employers",
      lastUpdated: "2024-12-12",
      fileSize: "203 KB",
      format: "Excel",
      isPopular: true,
      difficulty: "Easy",
      estimatedTime: "20 minutes",
      mandatory: true,
      downloadUrl: "/forms/downloads/form-vii-wage-register.xlsx",
    },
    {
      id: 2,
      title: "Form VIII - Register of Deductions",
      formNumber: "Form VIII",
      description: "Register for recording deductions from wages",
      lastUpdated: "2024-12-08",
      fileSize: "187 KB",
      format: "Excel",
      isPopular: false,
      difficulty: "Medium",
      estimatedTime: "25 minutes",
      mandatory: true,
      downloadUrl: "/forms/downloads/form-viii-register-deductions.xlsx",
    },
    {
      id: 3,
      title: "Form IX - Register of Fines",
      formNumber: "Form IX",
      description: "Register for recording fines imposed on workers",
      lastUpdated: "2024-11-30",
      fileSize: "165 KB",
      format: "Excel",
      isPopular: false,
      difficulty: "Easy",
      estimatedTime: "15 minutes",
      mandatory: false,
      downloadUrl: "/forms/downloads/form-ix-register-fines.xlsx",
    },
  ],
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-100 text-green-700"
    case "Medium":
      return "bg-yellow-100 text-yellow-700"
    case "Hard":
      return "bg-red-100 text-red-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

const getFormatIcon = (format: string) => {
  switch (format) {
    case "PDF":
      return <FileText className="w-4 h-4 text-red-500" />
    case "Excel":
      return <FileCheck className="w-4 h-4 text-green-500" />
    case "Word":
      return <FileX className="w-4 h-4 text-blue-500" />
    default:
      return <FilePlus className="w-4 h-4 text-gray-500" />
  }
}

export default function FormsSection({ actTitle, actSlug }: FormsSectionProps) {
  const forms = formsData[actSlug] || []

  const handleDownload = async (form: Form) => {
    const downloadItem: DownloadItem = {
      url: form.downloadUrl,
      filename: `${form.formNumber}-${form.title.replace(/[^a-zA-Z0-9]/g, "-")}.${form.format.toLowerCase()}`,
      fileSize: form.fileSize,
      format: form.format,
    }

    await downloadFile(downloadItem)
  }

  if (forms.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-500" />
            Compliance Forms
          </CardTitle>
          <CardDescription>Download forms required for compliance under {actTitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Forms Coming Soon</h3>
            <p className="text-gray-500 mb-4">We're preparing comprehensive forms for this act. Check back soon!</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const mandatoryForms = forms.filter((form) => form.mandatory)
  const optionalForms = forms.filter((form) => !form.mandatory)

  return (
    <div className="space-y-8">
     

      {/* Mandatory Forms Section */}
      {mandatoryForms.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Mandatory Forms</h2>
            <Badge className="bg-red-100 text-red-700">Required</Badge>
          </div>

          <div className="grid gap-6">
            {mandatoryForms.map((form) => (
              <Card
                key={form.id}
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-red-100 text-red-700">Mandatory</Badge>
                        <Badge className={`text-xs ${getDifficultyColor(form.difficulty)}`}>{form.difficulty}</Badge>
                        {form.isPopular && (
                          <Badge className="bg-orange-100 text-orange-700 text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div> */}
                      <CardTitle className="text-xl group-hover:text-orange-600 transition-colors leading-tight mb-2">
                        {form.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed mb-4">
                        {form.description}
                      </CardDescription>
                    </div>
                  </div>

                  {/* Form Details */}
                  {/* <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      {getFormatIcon(form.format)}
                      <span>{form.format}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Paperclip className="w-4 h-4" />
                      <span>{form.fileSize}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{form.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Updated: {new Date(form.lastUpdated).toLocaleDateString()}</span>
                    </div>
                  </div> */}
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      {/* <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 bg-transparent"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button> */}
                      <Button
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600"
                        onClick={() => handleDownload(form)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    <div className="text-xs text-gray-500">{form.formNumber}</div>
                  </div>
                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      )}
      {/* Help Section */}
      <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-0">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-orange-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Need Help with These Forms?</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our compliance experts can help you understand the requirements and assist with form completion. Get
                personalized guidance for your specific business needs.
              </p>
              <div className="flex gap-3">
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                  <Users className="w-4 h-4 mr-2" />
                  Contact Expert
                </Button>
                <Button size="sm" variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  View Guidelines
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
