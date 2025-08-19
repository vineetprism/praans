export default function Loading() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded-lg w-3/4 mb-4 dark:bg-gray-700" />
        <div className="h-4 bg-gray-200 rounded-lg w-1/2 mb-8 dark:bg-gray-700" />
        
        <div className="border rounded-lg overflow-hidden dark:border-gray-700">
          <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4">
            <div className="h-6 bg-gray-200 rounded-lg w-1/3 dark:bg-gray-700" />
          </div>
          <div className="divide-y dark:divide-gray-700">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="px-6 py-4 grid grid-cols-3 gap-4 items-center">
                <div className="col-span-2">
                  <div className="h-5 bg-gray-200 rounded-lg w-full mb-2 dark:bg-gray-700" />
                  <div className="h-4 bg-gray-200 rounded-lg w-3/4 dark:bg-gray-700" />
                </div>
                <div className="h-10 bg-gray-200 rounded-lg w-24 justify-self-end dark:bg-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
