import { logo } from "../constant";
import footerimage from "../assets/images/footerimage.jpeg";
import cardsimg from "../assets/images/cardsimg.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

const linksData = [
  {
    id: 1,
    title: "Customer Service",
    links: [
      { id: 1, name: "Help Portal", to: "#" },
      { id: 2, name: "Contact Us", to: "#" },
      { id: 3, name: "Delivery Information", to: "#" },
      { id: 4, name: "Click And Collect", to: "#" },
      { id: 5, name: "Refunds And Returns", to: "#" },
    ],
  },
  {
    id: 2,
    title: "Get To Know Us",
    links: [
      { id: 1, name: "About Us", to: "/about-us" },
      { id: 2, name: "Shopping Cart", to: "/cart" },
      { id: 3, name: "Product Page", to: "/products" },
      { id: 4, name: "Contact Us", to: "/contact-us" },
    ],
  },
  {
    id: 3,
    title: "New Collections",
    links: [
      { id: 1, name: "Wireless Chargers", to: "#" },
      { id: 2, name: "All-In-One Charging", to: "#" },
      { id: 3, name: "Magnetic Alignments", to: "#" },
      { id: 4, name: "Foldable And Compact Design", to: "#" },
      { id: 5, name: "Minimalist & Aesthetic", to: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="relative">
      <div
        className=" bg-black h-full -z-20 w-screen overflow-hidden text-white py-12 px-4 md:px-8 bg-current bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${footerimage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto z-30">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {linksData.map((section) => (
              <div key={section.id}>
                <h3 className="text-2xl font-semibold mb-6 textwithshadow">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        to={link.to}
                        className="flex items-center hover:text-orange-500 textwithshadow"
                      >
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 textwithshadow">
                Get Newsletter
              </h3>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border border-orange-500 rounded-full py-2 px-4 focus:outline-none focus:border-orange-600"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-2 hover:bg-orange-600">
                  <FaArrowRight className="text-white" />
                </button>
              </div>
              <div className="flex space-x-4 mt-6">
                <Link to={"#"} className="hover:text-orange-500 textwithshadow">
                  <FaFacebookF className="w-6 h-6" />
                </Link>
                <Link to={"#"} className="hover:text-orange-500 textwithshadow">
                  <FaTwitter className="w-6 h-6" />
                </Link>
                <Link to={"#"} className="hover:text-orange-500 textwithshadow">
                  <FaGithub className="w-6 h-6" />
                </Link>
                <Link to={"#"} className="hover:text-orange-500 textwithshadow">
                  <FaLinkedinIn className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0 gap-3 overflow-hidden">
              <Link to="/" className="flex items-center gap-3">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden">
                  <img src={logo} alt="logo" className="scale-150" />
                </div>
                <div className="text-lg font-semibold text-white textwithshadow">
                  Gadgenix Store
                </div>
              </Link>
            </div>
            <div className="flex space-x-4">
              <img src={cardsimg} alt="PayPal" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
