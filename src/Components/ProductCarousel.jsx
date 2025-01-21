import { useState, useEffect } from "react";
import carousalimage1 from "../assets/images/carousalimage1.jpeg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { products } from "../constant";
const ProductCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 372,
    hours: 8,
    minutes: 23,
    seconds: 26,
  });

  const images = products[0].images;
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-black spacebetween">
      <div className="wrapper grid md:grid-cols-2 text-white">
        {/* Header Section */}
        <div className="mb-8  flex flex-col justify-center gap-4">
          <div data-aos="fade-up" className="flex items-center gap-2 mb-4">
            <span role="img" aria-label="fire">
              🔥
            </span>
            <span className="text-xl">
              GET <span className="text-yellow-500">25% OFF</span> NOW
            </span>
          </div>

          <div data-aos="fade-up" className="flex items-center gap-2 mb-4">
            <h1 className="text-4xl font-bold">Latest Arrival Products</h1>
          </div>
          <h3 className="text-white text-lg font-medium mb-2">
            {products[0]?.name}
          </h3>
          <div data-aos="fade-up" className="mb-4">
            {/* <span className="text-gray-500 line-through mr-2">$99.00</span> */}
            <span className="text-gray-500 line-through text-2xl font-bold">
              {products[0]?.crossprice && `₹${products[0]?.crossprice}`}
            </span>{" "}
            <span className="text-2xl font-bold"> ₹{products[0]?.price}</span>
          </div>

          <p data-aos="fade-up" className="text-gray-300 mb-6 max-w-2xl">
            {products[0].description}
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4" data-aos="fade-up">
              HUNGRY UP !
            </h3>
            <div className="flex gap-4">
              <div data-aos="fade-up" className="text-center">
                <div className="text-2xl font-bold">-{timeLeft.days}</div>
                <div className="text-sm text-gray-400">Day</div>
              </div>
              <div data-aos="fade-up" className="text-center">
                <div className="text-2xl font-bold">-{timeLeft.hours}</div>
                <div className="text-sm text-gray-400">Hr</div>
              </div>
              <div data-aos="fade-up" className="text-center">
                <div className="text-2xl font-bold">-{timeLeft.minutes}</div>
                <div className="text-sm text-gray-400">Min</div>
              </div>
              <div data-aos="fade-up" className="text-center">
                <div className="text-2xl font-bold">-{timeLeft.seconds}</div>
                <div className="text-sm text-gray-400">Sec</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Image Carousel */}
        <div data-aos="fade-left" className="relative ">
          <div className="aspect-square rounded-full overflow-hidden border-8 border-gray-800 relative">
            <img
              src={images[currentImageIndex]}
              alt="Product"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute bottom-8 left-0 right-0 text-center bg-black bg-opacity-50 p-4">
              <h3 className="text-xl font-bold mb-2">
                Folding storage, does not take up space
              </h3>
              <p className="text-gray-300">
                Soft silicone material, can be bent repeatedly
              </p>
            </div> */}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
