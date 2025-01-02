import CheckoutForm from "../Components/CheckoutForm";
import PageBanner from "../Components/PageBanner";
import { checkoutbannerimage } from "../constant";

const CheckOutPage = () => {
  return (
    <div>
      <PageBanner
        image={checkoutbannerimage}
        title="Checkout Page"
        style="bg-bottom"
      />
      <CheckoutForm />
    </div>
  );
};

export default CheckOutPage;
