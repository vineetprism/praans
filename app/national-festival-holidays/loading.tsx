import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-10 w-40" />
            <div className="hidden md:flex items-center space-x-6">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar Skeleton */}
        <div className="w-80 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <Skeleton className="h-6 w-40 mb-4" />
            <div className="space-y-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex items-center px-3 py-2">
                  <Skeleton className="h-5 w-5 mr-3" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Skeleton */}
        <div className="flex-1">
          {/* Breadcrumb Skeleton */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>

          {/* Search Bar Skeleton */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <Skeleton className="h-12 w-full" />
          </div>

          {/* Content Skeleton */}
          <div className="bg-white px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-10 w-80" />
            </div>

            <div className="text-center mb-8">
              <Skeleton className="h-6 w-96 mx-auto" />
            </div>

            <div className="space-y-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="border border-gray-200 rounded-lg">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50">
                      <Skeleton className="h-5 w-48" />
                    </div>
                    <div className="p-4">
                      <Skeleton className="h-5 w-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
