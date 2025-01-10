import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { products } from "../constant";
import ReactPlayer from "react-player";
import { BsPause, BsPlay } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductItem = () => {
  const { id } = useParams(); // Extract product name from URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  console.log(products, id, "asdfasd");

  useEffect(() => {
    setIsPlaying(false);
    setShowThumbnail(true);
    if (playerRef.current) {
      playerRef.current;
    }
  }, [selectedVideo]);

  // Find the product based on the productname in the URL
  useEffect(() => {
    const foundProduct = products.find(
      (prod) =>
        prod.pathname.toLowerCase().replace(/\s+/g, "-") ===
        id.toLowerCase().replace(/\s+/g, "-")
    );
    console.log(foundProduct, "asdfasdf");
    setProduct(foundProduct);
    setSelectedImage(foundProduct.images[0]);
    setSelectedVideo(foundProduct?.videos ? foundProduct?.videos[0] : "null");
  }, [id]);
  if (!product) return <div>Loading...</div>; // Handle if product is not found
  console.log(product);
  const redirect = (productname) => {
    navigate(`/product/${productname}`);
  };
  console.log(selectedVideo, "asdfasdfasd");

  const handleVideoSelect = (video) => {
    setIsPlaying(false);
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().pause();
    }
    setSelectedVideo(video);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
    setShowThumbnail(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setShowThumbnail(false);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const addToCartHandler = () => {
    console.log(product, "asdfasdfs");
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: quantity,
      })
    );
  };
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div>
      <div className="bg-black text-white pt-[96px] sm:pt-[112px]">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-8 pt-[6rem]">
          {/* Product Images */}
          <div>
            <div className="space-y-4 mb-[2rem]">
              <div className="bg-zinc-900 rounded-lg p-4">
                <img
                  data-aos="fade-up"
                  src={selectedImage}
                  alt={product.name}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex gap-4 ">
                {product.images?.map((image, index) => (
                  <img
                    onClick={() => setSelectedImage(image)}
                    key={index}
                    data-aos="fade-up"
                    src={image}
                    alt={`${product.name} Detail ${index + 1}`}
                    className="w-24 h-24 rounded-lg bg-zinc-900 p-2"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 data-aos="fade-up" className="text-2xl font-bold">
              {product.name}
            </h1>
            <div data-aos="fade-up" className="flex items-center gap-4">
              {/* <span className="text-gray-400 line-through">
              {product.price}
            </span> */}
              <span className="text-2xl text-orange-500">
                {/* ${(product.price / 100).toFixed()} */}₹{product.price}
              </span>
            </div>
            <div data-aos="fade-up" className="flex gap-1">
              {[...Array(product.rating)].map((_, i) => (
                <FaStar key={i} className="text-orange-500" />
              ))}
            </div>
            <p data-aos="fade-up" className="text-gray-300">
              {product?.description}
            </p>
            <h1 data-aos="fade-up" className="text-xl font-bold">
              {product?.tagline}
            </h1>
            <h1
              data-aos="fade-up"
              className={`text-xl font-bold ${
                product?.stock ? `text-green-700` : `text-red-500`
              }`}
            >
              {product?.stock ? "Ready To Ship " : "Not In Stock"}
            </h1>

            <div className="flex items-center gap-4">
              <div
                data-aos="fade-up"
                className="flex items-center border border-gray-600 rounded-md"
              >
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
              {isInCart ? (
                <button
                  onClick={() => navigate("/cart")}
                  // data-aos="fade-up"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
                >
                  Go to Cart
                </button>
              ) : (
                <button
                  // disabled={product?.stock}
                  onClick={() => product?.stock && addToCartHandler()}
                  data-aos="fade-up"
                  className={`${
                    product?.stock
                      ? `bg-orange-500 hover:bg-orange-600 cursor-pointer`
                      : `bg-orange-500/40 text-white/30 cursor-not-allowed`
                  } text-white px-6 py-2 rounded-md `}
                >
                  🛒 Add To Cart
                </button>
              )}
            </div>
            {/* Key Features */}
            <div className="space-y-4 border-t border-gray-800 pt-6">
              <h2 data-aos="fade-up" className="text-xl font-semibold">
                Key Features:
              </h2>
              <ul className="space-y-4 text-gray-300">
                {product.keyFeatures?.map((feature, index) => (
                  <li key={index} data-aos="fade-up">
                    • {feature}
                  </li>
                ))}
              </ul>

              <h2 data-aos="fade-up" className="text-xl font-semibold">
                {product.perfectFor && `Perfect For:`}
              </h2>
              <ul className="space-y-4 text-gray-300">
                {product.perfectFor?.map((feature, index) => (
                  <li key={index} data-aos="fade-up">
                    • {feature}
                  </li>
                ))}
              </ul>

              <h2 data-aos="fade-up" className="text-xl font-semibold">
                {product.whyItsPerfect && `Why Its Perfect:`}
              </h2>
              <ul className="space-y-4 text-gray-300">
                {product.whyItsPerfect?.map((feature, index) => (
                  <li key={index} data-aos="fade-up">
                    • {feature}
                  </li>
                ))}
              </ul>

              {/* <p data-aos="fade-up" className="text-gray-300">
              {product.company}
            </p>
            <p data-aos="fade-up" className="text-gray-300">
              {product.order}
            </p> */}
            </div>
          </div>
        </div>
        <div className="wrapper">
          {product?.details && (
            <div className="">
              <h2 data-aos="fade-up" className="text-3xl font-semibold mb-2">
                Product Details
              </h2>
              <div className="space-y-4">
                <h2>
                  {product?.details?.connectivityTechnology &&
                    "Connectivity Technology: "}
                  {product?.details?.connectivityTechnology}
                </h2>
                <h2>
                  {product?.details?.connectorType && "Connector Type:"}{" "}
                  {product?.details?.connectorType}
                </h2>
                <p>
                  {product?.details?.compatibleDevices && "Connector Type:"}{" "}
                  {product?.details?.compatibleDevices.map((obj) => (
                    <span key={obj} className="mx-1">
                      {obj},
                    </span>
                  ))}
                </p>
                <p>
                  {product?.details?.specialFeatures && "Special Features:"}
                  {product?.details?.specialFeatures.map((obj) => (
                    <span key={obj} className="mx-1">
                      {obj},
                    </span>
                  ))}
                </p>
                <p>
                  {product?.details?.colourOptions && "Colour Options:"}
                  {product?.details?.colourOptions.map((obj) => (
                    <span key={obj} className="mx-1">
                      {obj},
                    </span>
                  ))}
                </p>
                <h2>
                  {product?.details?.inputVoltage && "Input Voltage:"}{" "}
                  {product?.details?.inputVoltage}
                </h2>
                <h2>
                  {product?.details?.mountingType && "Mounting Type:"}{" "}
                  {product?.details?.mountingType}
                </h2>
              </div>
            </div>
          )}
        </div>
        <div className="wrapper pb-[3rem]">
          <p data-aos="fade-up" className="text-gray-300 text-lg mb-3">
            {product?.cta && product?.cta}
          </p>
          <h1 data-aos="fade-up" className="text-xl font-bold">
            {product?.whyChooseUs && `Why Choose Us`}
          </h1>
          <p data-aos="fade-up" className="text-gray-300 mt-3">
            {product?.whyChooseUs && product?.whyChooseUs}
          </p>
        </div>
        <h1
          data-aos="fade-up"
          className="text-3xl font-bold text-center text-primary wrapper"
        >
          {product?.finalCTA && product?.finalCTA}
        </h1>
      </div>
      {product?.videos && (
        <div className="space-y-4 mt-5 mb-8 wrapper">
          <div className="bg-zinc-900 rounded-lg p-4 relative aspect-video">
            {showThumbnail && (
              <img
                src={product.images[1]}
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            )}
            <ReactPlayer
              ref={playerRef}
              url={selectedVideo}
              playing={isPlaying}
              width="100%"
              height="100%"
              playsinline
              onPlay={handlePlay}
              onPause={handlePause}
              controls={false}
              style={{ display: showThumbnail ? "none" : "block" }}
            />
            <button
              className="absolute bottom-4 left-4 bg-white/50 hover:bg-white/70 p-2 rounded-full z-10"
              onClick={togglePlayPause}
            >
              {isPlaying ? (
                <BsPause className="h-4 w-4" />
              ) : (
                <BsPlay className="h-4 w-4" />
              )}
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 pt-2 px-3 mt-3">
            {product?.videos?.map((video, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-24 h-24 rounded-lg bg-zinc-900 p-2 cursor-pointer ${
                  video === selectedVideo ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => handleVideoSelect(video)}
              >
                <img
                  src={product.images[2]}
                  alt={`Video thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <h3
        data-aos="fade-up"
        className="text-3xl font-bold text-white wrapper mt-5 pb-[2rem]"
      >
        Related product
      </h3>

      <div className="wrapper grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 pb-[4rem] text-white">
        {products.map((obj) => (
          <div
            onClick={() => redirect(obj?.pathname)}
            data-aos="fade-up"
            key={obj.id}
            className={`bg-[#111] rounded-lg overflow-hidden cursor-pointer ${
              obj.id === product.id && `hidden`
            }`}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={obj?.images[0]}
                alt={obj?.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 min-h-[256px] flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-2">{obj?.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400 line-through">
                  {/* ${product.originalPrice.toFixed(2)} */}
                </span>
                <span className="text-orange-500 font-bold">
                  ₹{obj?.price?.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(obj.rating)].map((_, i) => (
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
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
