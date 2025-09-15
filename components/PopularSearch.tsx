interface PopularSearchProps {
  title?: string
}

const trendingSearches = [
  "Factories Act 1948",
  "Contract Labour Act",
  "Payment of Wages",
  "Shops Establishments",
  "Minimum Wages Act",
  "Provident Fund Act",
]

export default function PopularSearch({ title = "Popular Searches" }: PopularSearchProps) {
  return (
    <div>
      {title && <h3 className="font-medium mb-3 text-sm">{title}</h3>}
      <div className="space-y-2">
        {trendingSearches.map((search, index) => (
          <div
            key={index}
            className="text-sm text-gray-600 hover:text-orange-600 cursor-pointer transition-colors p-2 hover:bg-orange-50 rounded"
          >
            {search}
          </div>
        ))}
      </div>
    </div>
  )
}
