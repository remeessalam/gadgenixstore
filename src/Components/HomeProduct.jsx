import { FaStar } from "react-icons/fa";
import { homeproducts } from "../constant";
import { useNavigate } from "react-router-dom";

const HomeProduct = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/product/123456789");
  };
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex md:flex-row flex-col items-center justify-between mb-8">
          <h1
            data-aos="fade-right"
            className="text-white text-3xl font-bold flex items-center gap-2"
          >
            Latest Arrival Products
          </h1>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              data-aos="fade-left"
              className="text-orange-500 hover:text-white"
            >
              Latest Item
            </button>
            <button
              data-aos="fade-left"
              className="text-gray-500 hover:text-white"
            >
              Top Rating
            </button>
            <button
              data-aos="fade-left"
              className="text-gray-500 hover:text-white"
            >
              Featured Products
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeproducts.map((product) => (
            <div
              data-aos="fade-up"
              key={product.id}
              className="bg-black rounded-lg p-4 flex flex-col cursor-pointer"
              onClick={redirect}
            >
              <div className="relative aspect-square mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-white text-lg font-medium mb-2">
                {product.title}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-orange-500">
                  ${product.salePrice.toFixed(2)}
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
              <button className="mt-auto bg-transparent border border-orange-500 text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomeProduct;
