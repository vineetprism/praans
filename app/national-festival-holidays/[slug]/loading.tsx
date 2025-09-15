import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
return (
  <div className="flex min-h-screen w-full bg-gray-100/50 dark:bg-gray-900/50">
    <aside className="hidden w-64 flex-col border-r bg-white p-4 dark:bg-gray-950 lg:flex">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Statutory Resources</h2>
      </div>
      <nav className="flex flex-col space-y-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-full" />
        ))}
      </nav>
      <div className="mt-auto">
        <h2 className="text-lg font-semibold">Resources</h2>
        <nav className="mt-2 flex flex-col space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-full" />
          ))}
        </nav>
      </div>
    </aside>
    <main className="flex-1 p-4 md:p-6">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Skeleton className="h-8 w-1/2" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
      <div className="mb-6 flex items-center justify-between">
        <Skeleton className="h-10 w-1/4" />
        <Skeleton className="h-10 w-48" />
      </div>
      <div className="overflow-hidden rounded-lg border">
        <div className="border-b bg-gray-50 p-4 dark:bg-gray-800/50">
          <Skeleton className="h-8 w-3/4" />
        </div>
        <div className="divide-y">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="grid grid-cols-3 gap-4 p-4">
              <Skeleton className="h-6 w-1/3" />
              <div className="col-span-2">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="mt-2 h-6 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>
)
}
