import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getCartAPI } from "../API/cartAPI";
import { addToCart } from "../store/cartSlice";

const useCartInitialization = () => {
  const dispatch = useDispatch();
  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initializeCart = async () => {
      const token = localStorage.getItem("authToken");
      const userId = localStorage.getItem("userID");

      if (token && userId) {
        try {
          const response = await getCartAPI(userId);
          if (response?.success) {
            dispatch(
              addToCart({
                userID: response.cart.userId,
                products: response.cart.products,
              })
            );
          }
        } catch (error) {
          console.error("Error initializing cart:", error);
        }
      }
    };

    initializeCart();
  }, [dispatch]);
};

export default useCartInitialization;
