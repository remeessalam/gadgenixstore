import FavouriteProduct from "../Components/FavouriteProduct";
import HomeBanner from "../Components/HomeBanner";
import OfferZone from "../Components/HomeOffer";
import HomeProduct from "../Components/HomeProduct";
import ProductCarousel from "../Components/ProductCarousel";
import ProductCategories from "../Components/ProductCategories";
import SlidingText from "../Components/SlidingText";
import TopBrands from "../Components/TopBrands";

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <ProductCategories />
      <HomeProduct />
      <FavouriteProduct />
      <ProductCarousel />
      <SlidingText />
      <OfferZone />
      <TopBrands />
    </div>
  );
};

export default HomePage;
