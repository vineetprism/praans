import { Calendar, Clock, Building2, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function HolidaysLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-10 w-40" />
            <div className="hidden md:flex items-center space-x-6">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
        </div>
      </header>

      {/* Page Header Skeleton */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-12 w-12 text-gray-300 mr-3" />
              <Skeleton className="h-10 w-80" />
            </div>
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[Calendar, MapPin, Building2, Clock].map((Icon, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Icon className="h-8 w-8 text-gray-300" />
                  <div className="ml-4">
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-8 w-8" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters Skeleton */}
        <Card className="mb-8">
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <div className="flex gap-2">
                <Skeleton className="h-10 flex-1" />
                <Skeleton className="h-10 w-10" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Skeleton */}
        <div className="space-y-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 flex-1" />
          </div>

          {/* Holiday Cards Skeleton */}
          {[1, 2, 3].map((month) => (
            <Card key={month}>
              <CardHeader>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-gray-300 mr-3" />
                  <Skeleton className="h-8 w-40" />
                  <Skeleton className="h-6 w-16 ml-3" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((holiday) => (
                    <div key={holiday} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="flex-1">
                          <Skeleton className="h-6 w-48 mb-3" />
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <Skeleton className="h-6 w-24" />
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-4 w-24" />
                          </div>
                          <Skeleton className="h-4 w-full mb-3" />
                          <div className="bg-gray-50 border rounded-lg p-4">
                            <Skeleton className="h-4 w-20 mb-2" />
                            <Skeleton className="h-4 w-full" />
                          </div>
                        </div>
                        <div className="lg:ml-6 mt-4 lg:mt-0">
                          <div className="text-center bg-gray-50 rounded-lg p-4 min-w-[120px]">
                            <Skeleton className="h-8 w-8 mx-auto mb-2" />
                            <Skeleton className="h-4 w-12 mx-auto mb-1" />
                            <Skeleton className="h-3 w-16 mx-auto" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notes Skeleton */}
        <Card className="mt-8">
          <CardHeader>
            <Skeleton className="h-6 w-40" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((note) => (
                <div key={note} className="flex items-start">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Skeleton */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((col) => (
              <div key={col}>
                <Skeleton className="h-8 w-32 mb-4 bg-gray-700" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((item) => (
                    <Skeleton key={item} className="h-4 w-24 bg-gray-700" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <Skeleton className="h-4 w-48 mx-auto bg-gray-700" />
          </div>
        </div>
      </footer>
    </div>
  )
}
