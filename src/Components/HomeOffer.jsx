function OfferZone() {
  const products = [
    {
      title: "All-In-One Charger",
      description: "Best All-In-One Charger In The Market",
      image: "/placeholder.svg?height=400&width=400",
      discount: "50% OFF",
      buttonText: "Shop Now",
    },
    {
      title: "Wireless Charger",
      description: "Best Wireless Chargers From Our Huge Collection",
      image: "/placeholder.svg?height=400&width=400",
      discount: "50% OFF",
      buttonText: "Shop Now",
    },
    {
      title: "Charging Dock",
      description: "Best Charging Dock From Our Huge Collection",
      image: "/placeholder.svg?height=400&width=400",
      discount: "50% OFF",
      buttonText: "Shop Now",
    },
    {
      title: "Charging Station",
      description: "Best Charging Station From Our Huge Collection",
      image: "/placeholder.svg?height=400&width=400",
      discount: "50% OFF",
      buttonText: "Shop Now",
    },
  ];

  return (
    <div className="bg-black spacebetween">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-black wrapper ">
        {products.map((product, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden">
            {/* Discount Badge */}
            <div className="absolute top-4 right-4 bg-white rounded-full p-2 z-10">
              <span className="text-orange-500 font-medium text-sm">
                {product.discount}
              </span>
            </div>

            {/* Product Image and Content */}
            <div className="relative h-[300px]">
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h2 className="text-white text-2xl font-semibold mb-2">
                  {product.title}
                </h2>
                <p className="text-white text-sm mb-4">{product.description}</p>
                <button className="bg-white text-black px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors">
                  {product.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferZone;
