import CartItems from "../Components/CartItems";
import PageBanner from "../Components/PageBanner";
import { cartpagebanner } from "../constant";

const CartPage = () => {
  return (
    <div>
      <PageBanner image={cartpagebanner} title="Cart Page" style="bg-right" />
      <CartItems />
    </div>
  );
};

export default CartPage;
