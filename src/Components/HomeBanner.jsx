import { useEffect, useState } from "react";
import { GiFlame } from "react-icons/gi";
import { banner1, banner2, banner3 } from "../constant";
import { Link } from "react-router-dom";
// banner4
const backgroundImages = [banner1, banner2, banner3];

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
      <div className="relative h-smbannerheight sm:h-bannerheight overflow-hidden">
        {/* Background Image with Fade Effect */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-16">
          <div data-aos="fade-up" className="flex space-x-2 text-white">
            <GiFlame className="w-6 h-6" />
            <span className="font-semibold mt-1">
              GET <span className="text-primarytextcolor">25% OFF </span> NOW
            </span>
          </div>

          <div className="mt-8 max-w-4xl">
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Discover The Future Of
              <span className="text-primary"> Smart Living.</span>
            </h1>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to={
                  "/product/3-in-1-Magnetic-Foldable-MagSafe-Compatible-Wireless-Charger"
                }
                data-aos="fade-up"
                className="primary-btn"
              >
                Shop Now
              </Link>
              <Link
                to={
                  "/product/3-in-1-Magnetic-Foldable-MagSafe-Compatible-Wireless-Charger"
                }
                data-aos="fade-up"
                className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-full transition-colors"
              >
                View Details
              </Link>
            </div>
            <p
              data-aos="fade-up"
              className="text-lg md:text-xl mb-8 text-white textwithshadow"
            >
              Embrace innovation and elevate your lifestyle with cutting-edge
              gadgets designed to simplify your world. Discover smarter,
              seamless solutions for modern living at Gadgenix.store
            </p>

            {/* <div
              data-aos="fade-up"
              className="inline-block bg-purple-600/20 px-4 py-2 rounded-lg"
            >
              <span className="text-purple-300">90 Hug × 28 Hug</span>
            </div> */}

            <div className="mt-8">
              <div data-aos="fade-up" className="text-2xl font-bold">
                Starting Price
              </div>
              <div
                data-aos="fade-up"
                className="text-4xl mt-4 mb-4 sm:mb-0 font-bold text-orange-500"
              >
                ₹1999.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
