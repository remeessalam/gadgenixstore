import { useState, useEffect } from "react";
import homeproduct1 from "../assets/images/homeproducts/homeproduct1.png";
const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: -372,
    hours: -12,
    minutes: -18,
    seconds: -9,
  });

  const products = [
    {
      id: 1,
      name: "Magnetic Alignments",
      originalPrice: 74.5,
      salePrice: 49.5,
      image: homeproduct1,
      rating: 5,
    },
    {
      id: 2,
      name: "Wireless Chargers",
      originalPrice: 74.5,
      salePrice: 49.5,
      image: homeproduct1,
      rating: 5,
    },
  ];

  return (
    <div className="w-full mx-auto sm:mx-0 max-w-[300px] bg-headerbgcolor text-white p-4 h-fit">
      {/* Special Offer Header */}
      <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-primary">
        Special Offer
      </h2>

      {/* Products */}
      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="space-y-2">
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg">{product.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-orange-500 font-bold">
                ${product.salePrice.toFixed(2)}
              </span>
            </div>
            <div className="flex">
              {[...Array(product.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-orange-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Hurry Up Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Hurry Up!</h3>
        <p className="text-sm text-gray-400 mb-4">Offer Ends in</p>
        <div className="grid grid-cols-4 gap-2">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
              {timeLeft.days}
            </div>
            <span className="text-xs mt-1">Day</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
              {timeLeft.hours}
            </div>
            <span className="text-xs mt-1">Hour</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
              {timeLeft.minutes}
            </div>
            <span className="text-xs mt-1">Min</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
              {timeLeft.seconds}
            </div>
            <span className="text-xs mt-1">Sec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
