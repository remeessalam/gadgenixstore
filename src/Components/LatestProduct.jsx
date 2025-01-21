import { useNavigate } from "react-router-dom";
import { products } from "../constant";
import SpecialOffers from "./SpecialOffer";

const LatestProduct = () => {
  const navigate = useNavigate();
  const redirect = (productname) => {
    navigate(`/product/${productname}`);
  };
  console.log(products, "sdfasdfds");
  return (
    <div className="min-h-screen bg-black text-white spacebetween">
      {/* Header */}
      <header className="p-4 border-b border-gray-800">
        <div
          data-aos="fade-up"
          className="wrapper flex justify-between items-center"
        >
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            Latest Arrival Products
          </h1>
          <nav className="hidden md:flex gap-6">
            <button className="text-orange-500">Latest Item</button>
            <button className="text-gray-400">Top Rating</button>
            <button className="text-gray-400">Featured Products</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="wrapper flex flex-col sm:flex-row gap-4 pt-4">
        <SpecialOffers />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              onClick={() => redirect(product?.pathname)}
              data-aos="fade-up"
              key={product.id}
              className="bg-[#111] rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product?.images[0]}
                  alt={product?.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 min-h-[256px] flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-2">{product?.name}</h3>
                <h3 className="text-red-500 text-lg font-medium mb-2">
                  {!product?.stock && "SOLD OUT"}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-400 line-through">
                    {/* ${product.originalPrice.toFixed(2)} */}
                  </span>
                  <span className="text-orange-500 font-bold">
                    ₹{product?.price?.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
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
                <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {/* Add To Cart */}
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LatestProduct;
