import { useState } from "react";
import { FaStar, FaMinus, FaPlus } from "react-icons/fa";
import product1 from "../assets/images/product/product1.png";
import product12 from "../assets/images/product/product12.png";
import product13 from "../assets/images/product/product13.png";
const ProductItem = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className=" bg-black text-white  pt-[96px] sm:pt-[112px]">
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-8 py-[6rem]">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-zinc-900 rounded-lg p-4">
            <img
              src={product1}
              alt="Retractable Car Charger"
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex gap-4">
            <img
              src={product12}
              alt="Charger Detail 1"
              className="w-24 h-24 rounded-lg bg-zinc-900 p-2"
            />
            <img
              src={product13}
              alt="Charger Detail 2"
              className="w-24 h-24 rounded-lg bg-zinc-900 p-2"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Retractable Car Charger
            <br />
            For Android/iPhone
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-gray-400 line-through">$76.50</span>
            <span className="text-2xl text-orange-500">$49.50</span>
          </div>

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-orange-500" />
            ))}
          </div>

          <p className="text-gray-300">
            The Perfect Companion For Your Road Trips, Daily Commutes, Or Quick
            Errands. This Retractable Car Charger Is Designed To Keep Your
            Devices Fully Charged Without The Clutter Of Tangled Cables.
          </p>

          <div className="space-y-2">
            <div className="text-sm text-gray-400">
              Categories: Chargers | Mobile | Fast Charging
            </div>
            <div className="text-sm text-gray-400">
              Tags: Charging | Fast Charger | Portable
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-600 rounded-md">
              <button
                onClick={decreaseQuantity}
                className="p-2 hover:bg-gray-800 rounded-l-md"
              >
                <FaMinus />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="p-2 hover:bg-gray-800 rounded-r-md"
              >
                <FaPlus />
              </button>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
              🛒 Add To Cart
            </button>
          </div>

          {/* Key Features */}
          <div className="space-y-4 border-t border-gray-800 pt-6">
            <h2 className="text-xl font-semibold">Key Features:</h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                • Universal Compatibility: Works Seamlessly With Android
                (USB-C/Micro-USB) And iPhone (Lightning) Devices.
              </li>
              <li>
                • Retractable Design: Adjustable Cable Length Keeps Your Car
                Neat And Organized While Preventing Cable Damage.
              </li>
              <li>
                • Fast Charging: Delivers High-Speed Charging To Power Up Your
                Devices Quickly And Efficiently.
              </li>
              <li>
                • Dual Charging Options: Features A Built-In Cable And An
                Additional USB Port To Charge Two Devices Simultaneously.
              </li>
              <li>
                • Compact & Durable: Lightweight, Portable, And Built To
                Withstand Daily Use With Premium Materials.
              </li>
              <li>
                • LED Indicator: Soft LED Light Shows The Charger Is Active And
                Ready To Use, Even In Low Light.
              </li>
            </ul>
            <p className="text-gray-300">
              Upgrade Your Car Charging Experience With This Sleek And
              Functional Gadget. Perfect For Anyone Who Values Convenience And
              Style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
