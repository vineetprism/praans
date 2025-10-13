import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Disclaimer() {


  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-slate-800">Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="max-w-none text-gray-700 leading-relaxed">
              <p>
                The information provided on this website is published by Praans Consultech solely for general
                informational purposes related to labour law compliance, statutory registrations, advisory services,
                litigation support, and related offerings. While every effort is made to ensure that the content is
                accurate, complete, and current, Praans Consultech makes no representations or warranties of any kind,
                express or implied, about the reliability, accuracy, suitability, or availability of the website
                content.
              </p>
              <p>
                The information contained herein may include technical inaccuracies or typographical errors. Content may
                also change over time due to updates in laws, regulations, or internal policies, and we do not undertake
                any obligation to update such material on a regular basis.
              </p>
              <p>
                The use of any information or materials from this website is entirely at the discretion and risk of the
                user. Praans Consultech will not be responsible or liable for any direct, indirect, incidental, or
                consequential loss or damage arising from the use of this website or from any reliance placed on
                information contained within it.
              </p>
              <p>
                The website may include links to third-party sites or external resources for reference purposes. Praans
                Consultech does not endorse or assume responsibility for the content, accuracy, or availability of those
                sites.
              </p>
              <p>
                Use of this website implies your acceptance and understanding of the terms outlined in this disclaimer.
              </p>
              <p>
                For any inquiries, clarifications, or feedback, please contact us at{" "}
                <Link href="mailto:info@praansconsultech.com" className="text-orange-600 hover:underline" aria-label="Send email">
                  info@praansconsultech.com
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
