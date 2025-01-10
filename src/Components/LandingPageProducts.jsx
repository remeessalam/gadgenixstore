import { FaStar } from "react-icons/fa";
import { homeproducts, products } from "../constant";
import { useState } from "react";
import { BiEnvelopeOpen } from "react-icons/bi";
import { Link } from "react-router-dom";

const LandingPageProducts = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };
  return (
    <div className="spacebetween">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 wrapper spacebetween">
        {products.map((product) => (
          <div
            data-aos="fade-up"
            key={product.id}
            className="bg-black rounded-lg p-4 flex flex-col"
          >
            <div className="relative aspect-square mb-4">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-white text-lg font-medium mb-2">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              {/* <span className="text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span> */}
              <span className="text-orange-500">
                ₹{product.price.toFixed(2)}
              </span>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="w-4 h-4 fill-orange-500 text-orange-500"
                />
              ))}
            </div>
            <Link
              to={`/product/${product.pathname}`}
              className="mt-auto bg-transparent border border-orange-500 text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
      <div
        data-aos="fade-up"
        className="wrapper bg-black flex flex-col items-center justify-center p-4"
      >
        <div className="text-coral-500 mb-8">
          <BiEnvelopeOpen size={48} className="text-[#e86d5c]" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email..."
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#e86d5c]"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-[#d55c4b] transition-colors"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>

        <h2 className="mt-8 text-2xl font-bold text-white">
          Get Discount 30% Off !
        </h2>
      </div>
    </div>
  );
};

export default LandingPageProducts;
