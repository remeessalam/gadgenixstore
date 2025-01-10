import { useState, useEffect } from "react";
import homeproduct5 from "../assets/images/homeproducts/homeproduct5.jpeg";
import { products } from "../constant";
const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: -372,
    hours: -12,
    minutes: -18,
    seconds: -9,
  });

  const spedialproducts = [
    {
      id: 5,
      name: "3 in 1 Magnetic Foldable MagSafe Compatible Wireless Charger",
      pathname: "3-in-1-Magnetic-Foldable-MagSafe-Compatible-Wireless-Charger",
      price: 1999,
      images: homeproduct5,

      rating: 5,
      stock: true,
      description:
        "For iPhone 8 to 16 Series | All Qi Standard Phones | Samsung Galaxy/Note Series | AirPods 2/3/Pro/Pro2 | Compatible with Apple Watch Series | 23W Charging | Pearl White/Matt Black",
      details: {
        connectivityTechnology: "Lightning",
        connectorType: "USB Type C",
        compatibleDevices: [
          "iPhone 16",
          "iPhone 16 Plus",
          "iPhone 16 Pro",
          "iPhone 16 Pro Max",
          "iPhone 15",
          "iPhone 15 Plus",
          "iPhone 15 Pro",
          "iPhone 14",
          "iPhone 14 Plus",
          "iPhone 14 Pro",
          "iPhone 14 Pro Max",
          "iPhone 13 mini",
          "iPhone 13",
          "iPhone 13 Pro",
          "iPhone 13 Pro Max",
          "iPhone 12 mini",
          "iPhone 12",
          "iPhone 12 Pro",
          "iPhone 12 Pro Max",
          "iPhone 11",
          "iPhone 11 Pro",
          "iPhone 11 Pro Max",
          "iPhone SE",
          "iPhone X",
          "iPhone XS",
          "iPhone XS Max",
          "iPhone XR",
          "iPhone 8",
          "iPhone 8 Plus",
          "Samsung Galaxy S23",
          "S22",
          "S21",
          "S20",
          "S10",
          "S9",
          "S8",
          "S7",
          "S6 Edge Plus",
          "Note 10",
          "9",
          "LG G8",
          "G8s",
          "G8X",
          "G7",
          "V50",
          "V40",
          "V35",
          "V30",
          "Apple Watch Ultra 2",
          "Ultra",
          "9",
          "8",
          "7",
          "6",
          "SE",
          "AirPods 2",
          "AirPods 3",
          "AirPods Pro",
          "AirPods Pro 2",
          "AirPods Pro 3",
        ],
        includedComponents: [
          "3 in 1 Foldable Charging Station",
          "1 x User Manual",
          "1 x Type C to Type C Charging Cable",
        ],
        specialFeatures: [
          "Over Voltage Protection",
          "Short Circuit Protection",
          "Over Current Protection",
          "Super Fast Charging",
          "Light Weight Design",
          "Magnetic Foldable",
        ],
        colourOptions: ["Pearl White", "Matt Black"],
        inputVoltage: "240 Volts (DC)",
        mountingType: "Wall Mount",
      },
      keyFeatures: [
        "Adapter Requirement: To charge 3 devices together, you need to use at least a 20W Charging Adapter at all times as the power input (not included in the product).",

        "Usage Scenarios: White/Black Charger is most suited to users who set it up on the work desk or nightstand or need it for travelling purpose and want to avoid the hassle of carrying multiple cables. The charger is useful to charge devices leisurely and in a relaxed manner. Not suited for fast charging.",

        "charging Speed: Wireless Chargers are nearly 3 times slower in charging compared to wired cable charging. Wired Cable Charging supports a maximum power of 45W whereas Wireless Charging supports a maximum power of 15W.",

        "Charging Time: Typically requires about 3 hours to charge an iPhone from 0 to 90% and similarly, about 3 hours to charge an Apple Watch within the same range of 0 to 90%.",

        "Heat Generation: Wireless Chargers generate mild heat whilst charging the devices. This is completely normal and the working principle of any wireless charger. There is no harm to the battery in such cases. Sometimes the heat can be trapped between the phone and the mobile case. We recommend removing thick mobile cases when charging to let go of the heat.",
      ],
      compatibility: [
        {
          power: "15W",
          description:
            "Compatible with iPhone 16, iPhone 15, iPhone 14, iPhone 13, iPhone 12 and their Pro, Pro Max and Plus Versions. Not compatible with iPhone 15 Pro Max.",
        },
        {
          power: "5W",
          description:
            "Compatible with AirPods Pro, AirPods Pro 2nd generation, AirPods 2/3 [Wireless Charging Version], and other Qi / Qi2 enabled wireless earbuds and phones.",
        },
        {
          power: "5W",
          description:
            "Compatible with Samsung Galaxy S21, S22, S23 and their Plus & Ultra version.",
        },
        {
          power: "3W",
          description:
            "Only Compatible with Apple Watch Series 4, 5, SE, 6, 7, 8, 9, 10, Ultra, Ultra 2 (Does not support charging for Samsung Watch Series or other brand smart watch).",
        },
      ],
      benefits: {
        batteryLifeImprovement:
          "Comparing the Battery Health of devices charged on Wireless Charging to Wired Cable Charging, study shows a clear improvement in battery life by a whopping 65% over time. Can be validated by checking the Maximum Capacity in Battery Health under settings on an iPhone.",
      },
    },
  ];

  return (
    <div className="w-full  bg-headerbgcolor text-white p-4 h-fit rounded-lg">
      {/* Special Offer Header */}
      <h2
        data-aos="fade-right"
        className="text-xl font-semibold mb-4 pb-2 border-b border-primary"
      >
        Special Offer
      </h2>

      {/* Products */}
      <div className="space-y-6">
        {spedialproducts.map((product) => (
          <div data-aos="fade-right" key={product.id} className="space-y-2">
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={product.images}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg">{product.name}</h3>
            <div className="flex items-center gap-2">
              {/* <span className="text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span> */}
              <span className="text-orange-500 font-bold">
                ₹{product.price.toFixed(2)}
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
      <div data-aos="fade-right" className="mt-6">
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
