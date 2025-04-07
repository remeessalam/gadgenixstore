const ProductDetailsShimmer = () => {
  return (
    <div className="container mx-auto px-4 pb-8 mt-[10rem]">
      {/* Product main section - image and details */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Left side - Product Image */}
        <div className="w-full md:w-1/2">
          <div className="animate-pulse bg-slate-200 rounded-lg w-full aspect-square"></div>

          {/* Thumbnail images */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse bg-slate-200 rounded-lg aspect-square"
                ></div>
              ))}
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Breadcrumb */}
          <div className="animate-pulse flex space-x-2 items-center">
            <div className="h-3 bg-slate-200 rounded w-16"></div>
            <div className="h-3 bg-slate-200 rounded w-3"></div>
            <div className="h-3 bg-slate-200 rounded w-20"></div>
            <div className="h-3 bg-slate-200 rounded w-3"></div>
            <div className="h-3 bg-slate-200 rounded w-32"></div>
          </div>

          {/* Product title */}
          <div className="animate-pulse h-8 bg-slate-200 rounded w-3/4"></div>

          {/* Rating */}
          <div className="animate-pulse flex items-center space-x-2">
            <div className="flex space-x-1">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-4 w-4 bg-slate-200 rounded-full"
                  ></div>
                ))}
            </div>
            <div className="h-3 bg-slate-200 rounded w-16"></div>
            <div className="h-3 bg-slate-200 rounded w-40"></div>
          </div>

          {/* Price */}
          <div className="animate-pulse h-7 bg-slate-200 rounded w-24"></div>

          {/* Short description */}
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
          </div>

          {/* Color options */}
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-slate-200 rounded w-16"></div>
            <div className="flex space-x-2">
              {Array(4)
                .fill()
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 bg-slate-200 rounded-full"
                  ></div>
                ))}
            </div>
          </div>

          {/* Size options */}
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-slate-200 rounded w-16"></div>
            <div className="flex space-x-2">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <div key={i} className="h-8 w-10 bg-slate-200 rounded"></div>
                ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-slate-200 rounded w-20"></div>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-28 bg-slate-200 rounded"></div>
            </div>
          </div>

          {/* Add to cart button */}
          <div className="animate-pulse h-12 bg-slate-200 rounded w-full"></div>

          {/* Wishlist / Share */}
          <div className="animate-pulse flex space-x-6">
            <div className="h-4 bg-slate-200 rounded w-32 flex-shrink-0"></div>
            <div className="h-4 bg-slate-200 rounded w-24 flex-shrink-0"></div>
          </div>
        </div>
      </div>

      {/* Product description section */}
      <div className="space-y-6">
        {/* Tabs */}
        <div className="animate-pulse border-b border-gray-200">
          <div className="flex space-x-8">
            <div className="h-8 bg-slate-200 rounded w-32"></div>
            <div className="h-8 bg-slate-200 rounded w-32"></div>
            <div className="h-8 bg-slate-200 rounded w-32"></div>
          </div>
        </div>

        {/* Description content */}
        <div className="animate-pulse space-y-4">
          <div className="h-5 bg-slate-200 rounded w-1/3"></div>
          <div className="h-4 bg-slate-200 rounded w-full"></div>
          <div className="h-4 bg-slate-200 rounded w-full"></div>
          <div className="h-4 bg-slate-200 rounded w-3/4"></div>

          <div className="h-5 bg-slate-200 rounded w-1/3 mt-6"></div>
          <div className="h-4 bg-slate-200 rounded w-full"></div>
          <div className="h-4 bg-slate-200 rounded w-5/6"></div>

          {/* Features list */}
          <div className="space-y-2 pl-4">
            {Array(4)
              .fill()
              .map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-slate-200 rounded-full"></div>
                  <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsShimmer;
