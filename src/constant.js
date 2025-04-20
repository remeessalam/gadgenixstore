import logo from "./assets/images/logo/logo.png";
import textdeco from "./assets/images/textdeco.png";
// banner item images
import banner1 from "./assets/images/homebanner/banner1.jpeg";
import banner2 from "./assets/images/homebanner/banner2.jpeg";
import banner3 from "./assets/images/homebanner/banner3.jpeg";
import banner4 from "./assets/images/homebanner/banner4.jpeg";
import productlistbannerimage from "./assets/images/productlistbannerimage.png";
import checkoutbannerimage from "./assets/images/checkoutbannerimage.jpeg";
import cartpagebanner from "./assets/images/cartpagebanner.jpeg";
import contactpagebanner from "./assets/images/contactpagebanner.jpeg";
import aboutbanneriamge from "./assets/images/aboutbanneriamge.png";
// category icons
import smarthome from "./assets/images/categoryIcons/smarthome.png";
import wirelesscharging from "./assets/images/categoryIcons/wirelesscharging.png";
import personaltech from "./assets/images/categoryIcons/personaltech.png";
import accessories from "./assets/images/categoryIcons/accessories.png";
import entertainment from "./assets/images/categoryIcons/entertainment.png";
import travel from "./assets/images/categoryIcons/travel.png";
//categories images
import categroriesbg from "./assets/images/categoryIcons/categroriesbg.jpeg";
import categroygadgetimg1 from "./assets/images/categoryIcons/categroygadgetimg1.jpeg";
import categroygadgetimg2 from "./assets/images/categoryIcons/categroygadgetimg2.jpeg";
import categroygadgetimg3 from "./assets/images/categoryIcons/categroygadgetimg3.jpeg";
//home products
import homeproduct1 from "./assets/images/homeproducts/homeproduct1.png";
import homeproduct12 from "./assets/images/homeproducts/homeproduct12.png";
import homeproduct13 from "./assets/images/homeproducts/homeproduct13.png";
import homeproduct2 from "./assets/images/homeproducts/homeproduct2.png";
import homeproduct3 from "./assets/images/homeproducts/homeproduct3.png";
import homeproduct4 from "./assets/images/homeproducts/homeproduct4.png";
import homeproduct5 from "./assets/images/homeproducts/homeproduct5.jpeg";
import homeproduct51 from "./assets/images/homeproducts/homeproduct51.jpeg";
import homeproduct52 from "./assets/images/homeproducts/homeproduct52.jpeg";
import homeproduct53 from "./assets/images/homeproducts/homeproduct53.jpeg";
import homeproduct54 from "./assets/images/homeproducts/homeproduct54.mp4";
import homeproduct55 from "./assets/images/homeproducts/homeproduct55.mp4";
import homeproduct56 from "./assets/images/homeproducts/homeproduct56.mp4";
import homeproduct57 from "./assets/images/homeproducts/homeproduct57.mp4";
import homeproduct58 from "./assets/images/homeproducts/homeproduct58.jpeg";
import homeproduct59 from "./assets/images/homeproducts/homeproduct59.png";
import homeproduct60 from "./assets/images/homeproducts/homeproduct60.png";
import homeproduct61 from "./assets/images/homeproducts/homeproduct61.png";
import homeproduct62 from "./assets/images/homeproducts/homeproduct62.png";
import homeproduct7 from "./assets/images/homeproducts/homeproduct7.jpeg";
import homeproduct8 from "./assets/images/homeproducts/homeproduct8.jpeg";
// other images
import cantactusimage from "./assets/images/cantactusimage.jpeg";
import contactusicons from "./assets/images/contactusicons.png";
import overworkbgimage from "./assets/images/overworkbgimage.png";
import tesimonialimg1 from "./assets/images/tesimonialimg1.png";
import blogimg1 from "./assets/images/blogimg1.jpeg";
import blogimg2 from "./assets/images/blogimg2.png";
export {
  logo,
  banner1,
  banner2,
  banner3,
  banner4,
  textdeco,
  categroriesbg,
  categroygadgetimg1,
  categroygadgetimg2,
  categroygadgetimg3,
  productlistbannerimage,
  checkoutbannerimage,
  cartpagebanner,
  contactpagebanner,
  cantactusimage,
  contactusicons,
  aboutbanneriamge,
  overworkbgimage,
};
export const routes = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Products", path: "/products" },
  { name: "Cart", path: "/cart" },
  { name: "Contact Us", path: "/contact-us" },
  // { name: "Login", path: "/login" },
];
export const companyDetails = {
  email: "gadgenixstore@gmail.com",
};
export const categories = [
  { name: "Smart Home Devices", icon: smarthome },
  {
    name: "Wireless Charging Solutions",
    icon: wirelesscharging,
    link: "/product/3-in-1-Magnetic-Foldable-MagSafe-Compatible-Wireless-Charger",
  },
  { name: "Personal Tech Essentials", icon: personaltech },
  { name: "Accessories", icon: accessories },
  { name: "Entertainment Gadgets", icon: entertainment },
  { name: "Travel Gadgets", icon: travel },
];
export const latestProducts = [
  {
    id: 1,
    name: "Retractable Car Charger For Andriod / Iphone",
    originalPrice: 74.5,
    discountedPrice: 49.5,
    image: homeproduct1,
    rating: 5,
  },
  {
    id: 2,
    name: "Portable Blender-500 Watts (3 Jars, Silver)",
    originalPrice: 74.5,
    discountedPrice: 49.5,
    image: homeproduct2,
    rating: 5,
  },
  {
    id: 3,
    name: "Bike GPS Tracking Device For Car,Bikes",
    originalPrice: 74.5,
    discountedPrice: 49.5,
    image: homeproduct3,
    rating: 5,
  },
  {
    id: 4,
    name: "3-In-1 Magenetic Charger",
    originalPrice: 74.5,
    discountedPrice: 49.5,
    image: homeproduct4,
    rating: 5,
  },
  {
    id: 5,
    name: "Magnetic Wireless Charge",
    originalPrice: 74.5,
    discountedPrice: 49.5,
    image: homeproduct5,
    rating: 5,
  },
  // {
  //   id: 6,
  //   name: "Multi-Functional Electric Scalp Massager",
  //   originalPrice: 74.5,
  //   discountedPrice: 49.5,
  //   image: homeproduct6,
  //   rating: 5,
  // },
];

export const testimonials = [
  {
    id: 1,
    name: "RamRavi",
    position: "Marketing Manager",
    location: "Bangalore",
    image: tesimonialimg1,
    quote:
      "For a long time I was looking for a reliable product like this. And finally I hv got it & feel it is worth waiting.Have been using it for a couple of days. The main reason to buy this product solves many of my travel problems. It is very compact & as the name suggests it is 3-in-1 charger. I’m using this product for simultaneous charging of my iPhone 11, ultra watch 2 & iPod PRO. No abnormal activities observed. It is worth for the money.",
  },
  {
    id: 2,
    name: "Vaibav Kumar",
    position: "Tech Enthusiast",
    location: "Mumbai",
    image: tesimonialimg1,
    quote:
      "Its been roughly 20 days since I am using this product and I really happy with the performance. Its very handy specially while traveling. Charges my phone, iWatch and airpods together without the hassle of carrying different charges/cables for different gears. The Magsafe works perfectly fine. Very proud to be using a make in India product that looks truly world class and charges fast.",
  },
  {
    id: 3,
    name: "Raghul Tokur",
    position: "Tech Enthusiast",
    location: "Mumbai",
    image: tesimonialimg1,
    quote:
      "The 3 in 1 Magnetic Foldable MagSafe Compatible Wireless Charger has proven to be a game-changer for my iPhone charging setup.",
  },
  {
    id: 4,
    name: "Ganesh",
    position: "Tech Enthusiast",
    location: "Mumbai",
    image: tesimonialimg1,
    quote:
      "Overall, in my opinion the charging speed is very good. I wud recommend this for those who seeks a compact & reliability charging solution. It is the most economical & efficient wireless charger.",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Smart Gadgets For A Healthier Lifestyle",
    excerpt:
      "In Today's Fast-Paced World, Technology Is Reshaping How We Live, Work, And Connect. But It's Also Giving Us The Opportunity To Make Smarter Choices For A Healthier And More Fulfilling Lifestyle.",
    image: blogimg1,
    category: "Vapors",
    author: "Max Trewhitt",
    date: "2 Weeks Ago",
  },
  {
    id: 2,
    title: "A Day In The Park: Redefining The Social Scene",
    image: blogimg2,
    category: "Vapors",
    date: "2 Weeks Ago",
  },
];

export const homeproducts = [
  {
    id: 1,
    title: "Retractable Car Charger For Android / Iphone",
    image: homeproduct1,
    originalPrice: 74.5,
    salePrice: 49.5,
  },
  {
    id: 2,
    title: "Portable Blender-500 Watts (3 Jars, Silver)",
    image: homeproduct2,
    originalPrice: 74.5,
    salePrice: 49.5,
  },
  {
    id: 3,
    title: "Bike GPS Tracking Device For Car,Bikes",
    image: homeproduct3,
    originalPrice: 74.5,
    salePrice: 49.5,
  },
  {
    id: 4,
    title: "Multi-Functional Electric Scalp Massager",
    image: homeproduct4,
    originalPrice: 74.5,
    salePrice: 49.5,
  },
  {
    id: 5,
    title: "3-In-1 Magenetic Charger",
    image: homeproduct5,
    originalPrice: 74.5,
    salePrice: 49.5,
  },
  // {
  //   id: 6,
  //   title: "Magnetic Wireless Charge",
  //   // image: homeproduct6,
  //   originalPrice: 74.5,
  //   salePrice: 49.5,
  // },
  {
    id: 7,
    title: "Charger Docker",
    image: homeproduct7,
    originalPrice: 74.5,
    salePrice: 49.5,
  },
  {
    id: 8,
    title: "Magnetic Charger For Iphone",
    image: homeproduct8,
    originalPrice: 74.5,
    salePrice: 49.5,
  },
];

export const otherProducts = [
  {
    id: 1,
    name: "3 in 1 Magnetic Foldable MagSafe Compatible Wireless Charger",
    pathname: "3-in-1-Magnetic-Foldable-MagSafe-Compatible-Wireless-Charger",
    image: homeproduct5,
    price: 1999,
    crossprice: 2299,
    rating: 5,
    images: [homeproduct5],
    title:
      "3 in 1 Magnetic Foldable MagSafe Compatible Wireless Charger for iPhone 8 to 16 Series | All Qi Standard phones | Samsung Galaxy/Note Series | AirPods 2/3/Pro/Pro2 | Compatible with only Apple Watch Series | 23W Charging | Wireless Charger - Pearl White/Matt black",
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
      "Note 9",
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
    specialFeature: [
      "Over Voltage Protection",
      "Short Circuit Protection",
      "Over Current Protection",
      "Super Fast Charging",
      "Light Weight Design",
      "SEIBEN Magnetic Foldable",
    ],
    color: ["Pearl White", "Matt Black"],
    inputVoltage: "240 Volts (DC)",
    mountingType: "Wall Mount",
    adapterRequired: "At least 20W Charging Adapter (not included)",
    chargingSpeed: {
      wireless: "3 times slower than wired charging",
      wired: "Supports a maximum power of 45W",
      wirelessMax: "Supports a maximum power of 15W",
    },
    chargingTime: {
      iphone: "About 3 hours to charge an iPhone from 0 to 90%",
      appleWatch: "About 3 hours to charge an Apple Watch from 0 to 90%",
    },
    heatGenerated:
      "Wireless chargers generate mild heat while charging, which is normal. It can sometimes be trapped between the phone and the mobile case, so removing thick cases is recommended.",
  },

  {
    id: 2,
    name: "Multi-functional Electric Scalp Massager for Therapeutic Deep Tissue Vibrating Health Care",
    pathname: "Multi-functional-Electric-Scalp-Massager",
    price: 999,
    image: homeproduct4,
    rating: 5,
    description:
      "Relax, Rejuvenate, and Recharge! Experience the ultimate in relaxation with the Multi-Functional Electric Scalp Massager. Designed for therapeutic deep tissue care, this innovative device promotes better blood circulation, reduces stress, and relieves tension effortlessly.",
    keyFeatures: [
      "Deep Tissue Vibrating Massage: Targets scalp muscles with precision, offering a soothing and revitalizing experience.",
      "Multi-Functional Design: Perfect for scalp, neck, shoulders, and other areas needing relief.",
      "Customizable Settings: Choose from multiple vibration modes and intensity levels to suit your needs.",
      "Ergonomic & Portable: Compact, lightweight design with an easy-grip handle for effortless use anywhere.",
      "Rechargeable & Wireless: Long-lasting battery with USB charging for convenience.",
      "Waterproof Build: Safe for use during showers for an enhanced massage experience.",
      "Premium Materials: Made with skin-friendly, durable materials for a comfortable and safe massage.",
    ],
    benefits: [
      "Reduces stress and tension.",
      "Improves blood circulation for healthier hair and skin.",
      "Enhances relaxation and overall well-being.",
    ],
  },

  {
    id: 3,
    name: "Bike GPS Tracking Device for Car, SUV, Scooty, Bus, Truck, JCB etc. & All E-Vehicles with Real time Tracking | Easy Installation",
    pathname: "Bike-GPS-Tracking-Device-for-Car",
    price: 1200,
    rating: 5,
    image: homeproduct3,
    description:
      "Secure Your Ride, Anytime, Anywhere! Track and protect your two-wheeler with this advanced GPS Tracker. Designed for motorcycles, scooters, and other two-wheelers, it ensures real-time location tracking and enhanced security.",
    keyFeatures: [
      "Real-Time Tracking: Monitor your vehicle's exact location via a mobile app with live updates.",
      "Geo-Fencing Alerts: Set safe zones and receive instant notifications if your vehicle leaves the designated area.",
      "Anti-Theft Alarm: Built-in motion detection triggers alerts for unauthorized movements or tampering.",
      "Route History Playback: Access past routes and travel history for up to 90 days.",
      "Compact & Discreet: Small, lightweight design that’s easy to install and hard to detect.",
      "Battery Backup: Includes a rechargeable backup battery for uninterrupted tracking, even if disconnected.",
      "App Integration: Compatible with Android and iOS devices for seamless control and monitoring.",
      "Weatherproof Design: Durable, water-resistant casing ensures reliable performance in all conditions.",
    ],
    benefits: [
      "Protects against theft and unauthorized use.",
      "Helps monitor fleet vehicles for businesses.",
      "Ensures peace of mind for long-distance riders.",
    ],
    company:
      "Why Choose Gadgenix.store? At Gadgenix.store, we provide cutting-edge gadgets that keep you connected and secure. Enjoy premium quality, fast delivery, and dedicated customer support.",
  },

  {
    id: 4,
    name: "Portable Blender- 500 Watts (3 Jars, Silver)",
    pathname: "Portable-Blender-500-Watts",
    image: homeproduct2,
    price: 2400,
    rating: 5,
    description:
      "Blend Anywhere, Anytime! Make fresh smoothies, shakes, and juices on the go with this Portable Blender. Compact, rechargeable, and powerful, it’s the ultimate gadget for every health enthusiast and busy individual.",
    keyFeatures: [
      "Powerful Performance: Equipped with a high-speed motor and stainless steel blades to blend fruits, vegetables, and ice effortlessly.",
      "USB Rechargeable: Long-lasting battery that charges via USB, making it perfect for travel, work, or outdoor adventures.",
      "Compact & Lightweight: Fits easily in your bag, cup holder, or backpack for ultimate portability.",
      "One-Touch Operation: Simple to use with a single button for blending and cleaning.",
      "Safe & Durable: Made from BPA-free, food-grade materials with a safety lock system to prevent spills.",
      "Easy to Clean: Detachable parts make cleaning quick and hassle-free.",
    ],
    perfectFor: ["Smoothies", "Protein Shakes", "Fresh Juices", "Baby Food"],
    company:
      "Why Choose Gadgenix.store? We bring you innovative gadgets designed to simplify your life. With fast shipping, reliable quality, and exceptional customer support, your satisfaction is our priority.",
    order: "Order Now and Enjoy Fresh Blends Anytime, Anywhere!",
  },

  {
    id: 5,
    name: "Retractable Car Charger for Android/iPhone",
    pathname: "Retractable-Car-Charger-for-Android-iPhone",
    price: 2500,
    image: homeproduct1,
    rating: 5,
    description:
      "Stay Powered On the Go! The perfect companion for your road trips, daily commutes, or quick errands. This Retractable Car Charger is designed to keep your devices fully charged without the clutter of tangled cables.",
    keyFeatures: [
      "Universal Compatibility: Works seamlessly with Android (USB-C/Micro-USB) and iPhone (Lightning) devices.",
      "Retractable Design: Adjustable cable length keeps your car neat and organized while preventing cable damage.",
      "Fast Charging: Delivers high-speed charging to power up your devices quickly and efficiently.",
      "Dual Charging Options: Features a built-in cable and an additional USB port to charge two devices simultaneously.",
      "Compact & Durable: Lightweight, portable, and built to withstand daily use with premium materials.",
      "LED Indicator: Soft LED light shows the charger is active and ready to use, even in low light.",
    ],
    callToAction:
      "Upgrade your car charging experience with this sleek and functional gadget. Perfect for anyone who values convenience and style.",
    company:
      "Why Choose Us? At Gadgenix.store, we offer innovative gadgets that make your life easier. Enjoy fast shipping, reliable customer service, and a product you can trust.",
    order: "Order Now and Never Run Out of Power on the Road!",
  },
];

export const products = [
  {
    id: 1,
    name: "3 in 1 Magnetic Foldable MagSafe Compatible Wireless Charger",
    pathname: "3-in-1-Magnetic-Foldable-MagSafe-Compatible-Wireless-Charger",
    price: 1999,
    crossprice: 2299,
    images: [
      homeproduct58,
      homeproduct5,
      // homeproduct51,
      homeproduct52,
      homeproduct53,
      homeproduct58,
      homeproduct59,
      homeproduct60,
      homeproduct61,
      homeproduct62,
    ],
    videos: [homeproduct54, homeproduct55, homeproduct56, homeproduct57],
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

  {
    id: 2,
    name: "Multi-Functional Electric Scalp Massager for Therapeutic Deep Tissue Vibrating Health Care",
    tagline: "Relax, Rejuvenate, and Recharge!",
    pathname: "Multi-functional-Electric-Scalp-Massager",
    price: 999,
    stock: false,
    images: [homeproduct4],
    rating: 5,
    description:
      "Experience the ultimate in relaxation with the Multi-Functional Electric Scalp Massager. Designed for therapeutic deep tissue care, this innovative device promotes better blood circulation, reduces stress, and relieves tension effortlessly.",
    keyFeatures: [
      "Deep Tissue Vibrating Massage: Targets scalp muscles with precision, offering a soothing and revitalizing experience.",
      "Multi-Functional Design: Perfect for scalp, neck, shoulders, and other areas needing relief.",
      "Customizable Settings: Choose from multiple vibration modes and intensity levels to suit your needs.",
      "Ergonomic & Portable: Compact, lightweight design with an easy-grip handle for effortless use anywhere.",
      "Rechargeable & Wireless: Long-lasting battery with USB charging for convenience.",
      "Waterproof Build: Safe for use during showers for an enhanced massage experience.",
      "Premium Materials: Made with skin-friendly, durable materials for a comfortable and safe massage.",
    ],
    whyItsPerfect: [
      "Reduces stress and tension.",
      "Improves blood circulation for healthier hair and skin.",
      "Enhances relaxation and overall well-being.",
    ],
  },

  {
    id: 3,
    name: "Bike GPS Tracking Device for Car, SUV, Scooty, Bus, Truck, JCB etc. & All E-Vehicles",
    tagline: "Secure Your Ride, Anytime, Anywhere!",
    pathname: "Bike-GPS-Tracking-Device-for-Car",
    price: 1200,
    rating: 5,
    stock: false,

    images: [homeproduct3],
    description:
      "Track and protect your two-wheeler with this advanced GPS Tracker. Designed for motorcycles, scooters, and other two-wheelers, it ensures real-time location tracking and enhanced security.",
    keyFeatures: [
      "Real-Time Tracking: Monitor your vehicle's exact location via a mobile app with live updates.",
      "Geo-Fencing Alerts: Set safe zones and receive instant notifications if your vehicle leaves the designated area.",
      "Anti-Theft Alarm: Built-in motion detection triggers alerts for unauthorized movements or tampering.",
      "Route History Playback: Access past routes and travel history for up to 90 days.",
      "Compact & Discreet: Small, lightweight design that’s easy to install and hard to detect.",
      "Battery Backup: Includes a rechargeable backup battery for uninterrupted tracking, even if disconnected.",
      "App Integration: Compatible with Android and iOS devices for seamless control and monitoring.",
      "Weatherproof Design: Durable, water-resistant casing ensures reliable performance in all conditions.",
    ],
    whyItsPerfect: [
      "Protects against theft and unauthorized use.",
      "Helps monitor fleet vehicles for businesses.",
      "Ensures peace of mind for long-distance riders.",
    ],
    whyChooseUs:
      "At Gadgenix.store, we provide cutting-edge gadgets that keep you connected and secure. Enjoy premium quality, fast delivery, and dedicated customer support.",
  },
  {
    id: 4,
    name: "Portable Blender - 500 Watts (3 Jars, Silver)",
    tagline: "Blend Anywhere, Anytime!",
    pathname: "Portable-Blender-500-Watts",
    images: [homeproduct2],
    price: 2400,
    stock: false,

    rating: 5,
    description:
      "Make fresh smoothies, shakes, and juices on the go with this Portable Blender. Compact, rechargeable, and powerful, it’s the ultimate gadget for every health enthusiast and busy individual.",
    keyFeatures: [
      "Powerful Performance: Equipped with a high-speed motor and stainless steel blades to blend fruits, vegetables, and ice effortlessly.",
      "USB Rechargeable: Long-lasting battery that charges via USB, making it perfect for travel, work, or outdoor adventures.",
      "Compact & Lightweight: Fits easily in your bag, cup holder, or backpack for ultimate portability.",
      "One-Touch Operation: Simple to use with a single button for blending and cleaning.",
      "Safe & Durable: Made from BPA-free, food-grade materials with a safety lock system to prevent spills.",
      "Easy to Clean: Detachable parts make cleaning quick and hassle-free.",
    ],
    perfectFor: ["Smoothies", "Protein Shakes", "Fresh Juices", "Baby Food"],
    whyChooseUs:
      "We bring you innovative gadgets designed to simplify your life. With fast shipping, reliable quality, and exceptional customer support, your satisfaction is our priority.",
    finalCTA: "Order Now and Enjoy Fresh Blends Anytime, Anywhere!",
  },
  {
    id: 5,
    name: "Retractable Car Charger for Android/iPhone",
    pathname: "Retractable-Car-Charger-for-Android-iPhone",
    price: 2500,
    image: homeproduct1,
    images: [homeproduct12, homeproduct13],

    rating: 5,
    stock: false,
    tagline: "Stay Powered On the Go!",
    description:
      "The perfect companion for your road trips, daily commutes, or quick errands. This Retractable Car Charger is designed to keep your devices fully charged without the clutter of tangled cables.",
    keyFeatures: [
      "Universal Compatibility: Works seamlessly with Android (USB-C/Micro-USB) and iPhone (Lightning) devices.",
      "Retractable Design: Adjustable cable length keeps your car neat and organized while preventing cable damage.",
      "Fast Charging: Delivers high-speed charging to power up your devices quickly and efficiently.",
      "Dual Charging Options: Features a built-in cable and an additional USB port to charge two devices simultaneously.",
      "Compact & Durable: Lightweight, portable, and built to withstand daily use with premium materials.",
      "LED Indicator: Soft LED light shows the charger is active and ready to use, even in low light.",
    ],
    cta: "Upgrade your car charging experience with this sleek and functional gadget. Perfect for anyone who values convenience and style.",
    whyChooseUs:
      "At Gadgenix.store, we offer innovative gadgets that make your life easier. Enjoy fast shipping, reliable customer service, and a product you can trust.",
    finalCTA: "Order Now and Never Run Out of Power on the Road!",
  },
];
