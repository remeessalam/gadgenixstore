import { GiFlame } from "react-icons/gi";
import favproductbgimage from "../assets/images/favproductbgimage.jpeg";
import favproduct from "../assets/images/favproductsimage.png";
const FavouriteProduct = () => {
  return (
    <div
      className=" bg-black relative overflow-hidden bg-current bg-cover bg-no-repeat bg-center spacebetween"
      style={{ backgroundImage: `url(${favproductbgimage})` }}
    >
      {/* Wavy background pattern */}

      {/* Main content container */}
      <div className="wrapper">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Product Images */}
          <div className="w-full flex justify-center">
            <img src={favproduct} alt="favproduct" className="max-h-[500px]" />
          </div>

          {/* Right side - Content */}
          <div className="w-full  text-white">
            <h1 className="text-5xl font-bold mb-8 flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-orange-500"></span>
              Find Your Best Favourite
            </h1>

            <p className="text-lg mb-8 text-blue-400">
              At Gadgenix Store, We Know Everyone Has Unique Needs And
              Preferences When It Comes To Tech. That&apos;s Why We&apos;ve
              Curated A Diverse Collection Of Innovative Products To Suit Every
              Lifestyle. From Productivity Tools To Smart Home Devices,
              You&apos;re Sure To Find Something That Fits Perfectly Into Your
              World.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="primary-btn">Shop Now</button>
              <div className="flex space-x-2 text-white border border-primarytextcolor rounded-full p-4">
                <GiFlame className="w-6 h-6 text-primarytextcolor" />
                <span className="font-semibold mt-1">
                  GET <span className="text-primarytextcolor">25% OFF</span> NOW
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteProduct;
