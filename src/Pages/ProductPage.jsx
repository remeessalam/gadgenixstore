import LatestProduct from "../Components/LatestProduct";
import PageBanner from "../Components/PageBanner";
import { productlistbannerimage } from "../constant";

const ProductPage = () => {
  return (
    <div>
      <PageBanner
        image={productlistbannerimage}
        title="Products"
        style="bg-center"
      />
      <LatestProduct />
    </div>
  );
};

export default ProductPage;
