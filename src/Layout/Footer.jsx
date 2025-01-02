import { logo } from "../constant";
import footerimage from "../assets/images/footerimage.jpeg";
const Footer = () => {
  return (
    <footer
      className="relative -z-20 bg-gray-900 text-white py-12 px-4 md:px-8 bg-current bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${footerimage})` }}
    >
      <div className="max-w-7xl mx-auto ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Customer Service Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Help Portal
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Click And Collect
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Refunds And Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Get To Know Us Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get To Know Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Shopping Cart
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Product Page
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* New Collections Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">New Collections</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Wireless Chargers
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  All-In-One Charging
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Magnetic Alignments
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Foldable And Compact Design
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-orange-500">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Minimalist & Aesthetic
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get Newsletter</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-orange-500 rounded-full py-2 px-4 focus:outline-none focus:border-orange-600"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-2 hover:bg-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-orange-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.411 2.865 8.138 6.839 9.439.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.135 22 16.41 22 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden">
            <img src={logo} alt="logo" className="scale-150" />
          </div>
          <div className="flex space-x-4">
            <img src="/paypal.png" alt="PayPal" className="h-8" />
            <img src="/mastercard.png" alt="Mastercard" className="h-8" />
            <img src="/discover.png" alt="Discover" className="h-8" />
            <img src="/visa.png" alt="Visa" className="h-8" />
          </div>
        </div>
      </div>
      <div className="bg-black/50 absolute top-0 left-0  w-screen h-full -z-10" />
    </footer>
  );
};

export default Footer;
