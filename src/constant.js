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
import homeproduct2 from "./assets/images/homeproducts/homeproduct2.png";
import homeproduct3 from "./assets/images/homeproducts/homeproduct3.png";
import homeproduct4 from "./assets/images/homeproducts/homeproduct4.png";
import homeproduct5 from "./assets/images/homeproducts/homeproduct5.jpeg";
import homeproduct6 from "./assets/images/homeproducts/homeproduct6.jpeg";
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
];

export const categories = [
  { name: "Smart Home Devices", icon: smarthome },
  { name: "Wireless Charging Solutions", icon: wirelesscharging },
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
  {
    id: 6,
    name: "Multi-Functional Electric Scalp Massager",
    originalPrice: 74.5,
    discountedPrice: 49.5,
    image: homeproduct6,
    rating: 5,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Amit.K",
    position: "Marketing Manager",
    location: "Bangalore",
    image: tesimonialimg1,
    quote:
      "Top-Notch Products With Fast Delivery! I Purchased The Magnetic Wireless Charging Station From Gadgenix.Store, And It Has Made My Life So Much Easier. It Charges All My Devices Seamlessly, And The Build Quality Is Amazing! Plus, The Delivery Was Super Quick Even In My City. I'm So Impressed!",
  },
  {
    id: 2,
    name: "Sarah M.",
    position: "Tech Enthusiast",
    location: "Mumbai",
    image: tesimonialimg1,
    quote:
      "Exceptional service and product quality! The smart home devices I ordered exceeded my expectations. The customer support team was incredibly helpful throughout the process.",
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
  {
    id: 6,
    title: "Magnetic Wireless Charge",
    image: homeproduct6,
    originalPrice: 74.5,
    salePrice: 49.5,
  },
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
