import React from "react";

const Loading = () => {
  // We create an array of 4 items to match your "featured" count
  const skeletonCards = [1, 2, 3, 4];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      
      {/* Title Skeleton */}
      <div className="h-10 w-56 bg-gray-200 animate-pulse rounded-md mx-auto mb-10" />

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skeletonCards.map((item) => (
          <div 
            key={item} 
            className="border rounded-xl overflow-hidden bg-white shadow-sm animate-pulse"
          >
            {/* Image Placeholder */}
            <div className="w-full h-44 bg-gray-200" />

            {/* Content Placeholder */}
            <div className="p-4 space-y-4">
              
              {/* Title and Subtitle */}
              <div className="space-y-2">
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-1/2 bg-gray-100 rounded" />
              </div>

              {/* Price Tag */}
              <div className="h-7 w-24 bg-gray-200 rounded" />

              {/* Details (Weight, Age, Location) */}
              <div className="space-y-2 pt-2 border-t border-gray-50">
                <div className="h-3 w-full bg-gray-100 rounded" />
                <div className="h-3 w-full bg-gray-100 rounded" />
                <div className="h-3 w-2/3 bg-gray-100 rounded" />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Loading;
