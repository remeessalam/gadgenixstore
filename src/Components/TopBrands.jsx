import brand1 from "../assets/images/brands/brand1.png";
import brand2 from "../assets/images/brands/brand2.png";
import brand3 from "../assets/images/brands/brand3.png";
import brand4 from "../assets/images/brands/brand4.png";
import brand5 from "../assets/images/brands/brand5.png";
import brand6 from "../assets/images/brands/brand6.png";
const TopBrands = () => {
  const brand = [brand1, brand2, brand3, brand4, brand5, brand6];
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center flex items-center justify-center mb-12"
        >
          Our Top Brands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brand.map((img, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="border border-primary rounded-lg p-8 flex items-center justify-center hover:border-orange-500 transition-colors"
            >
              <img
                src={img}
                alt={"brand-image"}
                className="w-16 h-16 opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
