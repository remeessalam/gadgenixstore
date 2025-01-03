import { GiFlame } from "react-icons/gi";
import {
  categories,
  categroriesbg,
  categroygadgetimg1,
  categroygadgetimg2,
  categroygadgetimg3,
  textdeco,
} from "../constant";

const ProductCategories = () => {
  return (
    <div className="bg-black py-16 text-white">
      <div className="container mx-auto px-4 mt-[112px]">
        <h2 className="text-2xl flex justify-center items-center gap-4 md:text-3xl font-bold text-center mb-12 ">
          <span>
            <img src={textdeco} alt="" />
          </span>{" "}
          Our Top Categories
          <span>
            <img src={textdeco} alt="" />
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full border-2 border-orange-500/30 flex items-center justify-center mb-4 group-hover:border-orange-500 transition-colors">
                {/* <category.icon className="w-12 h-12 text-white group-hover:text-orange-500 transition-colors" /> */}
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-12 h-12 text-white group-hover:text-orange-500 transition-colors"
                />
              </div>
              <span className="text-center text-sm font-medium group-hover:text-orange-500 transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="wrapper mt-[4rem]">
        <hr />
        <div
          className="bg-no-repeat bg-current bg-cover bg-center grid md:grid-cols-2 gap-4 py-[2rem] sm:mt-16 mt-8"
          style={{ backgroundImage: `url(${categroriesbg})` }}
        >
          <div className=" bg-headerbgcolor rounded-lg overflow-hidden">
            <img
              src={categroygadgetimg1}
              alt="categroygadgetimg1"
              className="w-full object-cover max-h-[18rem]"
            />
            <div className="p-4 space-y-8 max-h-100vh">
              <h3 className="text-2xl">The Best Smart Gadget Bundles</h3>
              <p className="desc">
                Our exclusive gadget bundles offer the perfect combination of
                innovation and value. Whether you&apos;re setting up a smart
                home, enhancing your workspace, or powering your devices
                efficiently, we&apos;ve got the right bundle for you.
              </p>
              <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 justify-between">
                <button className="secondry-btn">Shop Now</button>
                <div className="flex space-x-2 text-white border border-primarytextcolor rounded-full p-4">
                  <GiFlame className="w-6 h-6 text-primarytextcolor" />
                  <span className="font-semibold mt-1">
                    GET <span className="text-primarytextcolor">25% OFF</span>{" "}
                    NOW
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex lg:flex-row flex-col-reverse bg-headerbgcolor rounded-lg overflow-hidden">
              <div className="flex flex-col justify-between p-4 gap-6">
                <h3 className="text-2xl">New to Smart Gadgets?</h3>
                <p>
                  At Gadgenix.store, we make it easy for anyone, from beginners
                  to tech enthusiasts, to embrace innovative technology.
                </p>
                <button className="secondry-btn">Shop Now</button>
              </div>
              <img
                src={categroygadgetimg2}
                alt="categroygadgetimg2"
                className="max-h-[18rem]"
              />
            </div>
            <div className="flex lg:flex-row flex-col-reverse bg-headerbgcolor rounded-lg overflow-hidden">
              <div className="flex flex-col justify-between p-4 gap-6">
                <h3 className="text-2xl">The Best Smart Gadget Bundles</h3>
                <p className="desc">
                  Our exclusive gadget bundles offer the perfect combination of
                  innovation and value. Whether you&apos;re setting up a smart
                  home, enhancing your workspace, or powering your devices
                  efficiently, we&apos;ve got the right bundle for you.
                </p>
                <button className="secondry-btn ">Shop Now</button>
              </div>
              <img
                src={categroygadgetimg3}
                alt="categroygadgetimg3"
                className="max-h-[18rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
