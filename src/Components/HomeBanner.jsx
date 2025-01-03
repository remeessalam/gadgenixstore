import { useEffect, useState } from "react";
import { GiFlame } from "react-icons/gi";
import { banner1, banner2, banner3, banner4 } from "../constant";

const backgroundImages = [banner1, banner2, banner3, banner4];

const HomeBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-smbannerheight sm:h-bannerheight pt-[96px] sm:pt-[112px] bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-bannerheight overflow-hidden">
        {/* Background Image with Fade Effect */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-16">
          <div data-aos="fade-up" className="flex space-x-2 text-orange-500">
            <GiFlame className="w-6 h-6" />
            <span className="font-semibold mt-1">GET 25% OFF NOW</span>
          </div>

          <div className="mt-8 max-w-4xl">
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Discover The Future Of{" "}
              <span className="text-orange-500">Smart Living.</span>
            </h1>

            <p
              data-aos="fade-up"
              className="text-lg md:text-xl mb-8 text-gray-300"
            >
              Embrace Innovation And Style With Cutting-Edge Gadgets Designed To
              Simplify Your World.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                data-aos="fade-up"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors"
              >
                Shop Now
              </button>
              <button
                data-aos="fade-up"
                className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-full transition-colors"
              >
                View Details
              </button>
            </div>

            <div
              data-aos="fade-up"
              className="inline-block bg-purple-600/20 px-4 py-2 rounded-lg"
            >
              <span className="text-purple-300">90 Hug × 28 Hug</span>
            </div>

            <div className="mt-8">
              <div data-aos="fade-up" className="text-2xl font-bold">
                Starting Price
              </div>
              <div
                data-aos="fade-up"
                className="text-4xl font-bold text-orange-500"
              >
                $99.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
