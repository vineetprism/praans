import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
return (
<div className="flex min-h-screen w-full bg-white">
<aside className="hidden w-64 flex-col border-r bg-gray-50 p-4 lg:flex">
  <div className="mb-8">
    <Skeleton className="h-8 w-32" />
  </div>
  <nav className="flex flex-col space-y-2">
    <Skeleton className="h-6 w-full" />
    <Skeleton className="h-6 w-full" />
    <Skeleton className="h-6 w-full" />
    <Skeleton className="h-6 w-full" />
    <Skeleton className="h-6 w-full" />
  </nav>
</aside>
<main className="flex-1 p-6">
  <div className="mb-6 flex items-center justify-between">
    <Skeleton className="h-6 w-1/2" />
    <Skeleton className="h-10 w-48" />
  </div>
  <div className="space-y-8">
    <div>
      <Skeleton className="mb-4 h-8 w-1/3" />
      <div className="rounded-lg border">
        <div className="grid grid-cols-2 gap-px">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-2 p-4">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-6 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div>
      <Skeleton className="mb-4 h-8 w-1/3" />
      <div className="rounded-lg border">
        <div className="p-4">
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="border-t">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="grid grid-cols-4 gap-4 border-b p-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</main>
</div>
)
}
