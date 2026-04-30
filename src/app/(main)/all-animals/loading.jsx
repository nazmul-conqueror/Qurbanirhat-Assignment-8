export default function Loading() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">

      {/* Title Skeleton */}
      <div className="h-8 w-48 bg-gray-200 animate-pulse rounded mx-auto" />

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="border rounded-xl overflow-hidden bg-white"
          >

            {/* Image Skeleton */}
            <div className="h-44 bg-gray-200 animate-pulse" />

            {/* Content Skeleton */}
            <div className="p-4 space-y-3">

              <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded" />

              <div className="h-3 w-1/2 bg-gray-200 animate-pulse rounded" />

              <div className="h-4 w-1/3 bg-gray-200 animate-pulse rounded" />

              <div className="space-y-2 mt-3">
                <div className="h-3 w-full bg-gray-200 animate-pulse rounded" />
                <div className="h-3 w-5/6 bg-gray-200 animate-pulse rounded" />
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}