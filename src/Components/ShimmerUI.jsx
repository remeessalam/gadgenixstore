const ShimmerUI = () => {
  return (
    <div className="container mx-auto px-4 pb-8 pt-[10rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(8)
          .fill()
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    </div>
  );
};

const ShimmerCard = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="animate-pulse">
      {/* Image placeholder */}
      <div className="h-48 bg-slate-200"></div>

      {/* Content placeholders */}
      <div className="p-4 space-y-3">
        {/* Title placeholder */}
        <div className="h-4 bg-slate-200 rounded w-3/4"></div>

        {/* Rating placeholder */}
        <div className="flex space-x-1">
          {Array(5)
            .fill()
            .map((_, i) => (
              <div key={i} className="h-3 w-3 bg-slate-200 rounded-full"></div>
            ))}
        </div>

        {/* Description placeholder */}
        <div className="h-4 bg-slate-200 rounded w-full"></div>
        <div className="h-4 bg-slate-200 rounded w-5/6"></div>

        {/* Price and button placeholder */}
        <div className="flex justify-between items-center pt-2">
          <div className="h-5 bg-slate-200 rounded w-1/4"></div>
          <div className="h-8 bg-slate-200 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  </div>
);

export default ShimmerUI;
