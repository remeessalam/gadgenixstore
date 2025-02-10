import { useEffect, useRef, useState } from "react";
import { getCartAPI } from "../API/cartAPI";

const useCartInitialization = () => {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
          console.log(response, "sadfasdfasdfs");
          if (response?.success) {
            setCartData(response.cart);
          } else {
            if (response.message === "Cart not found") {
              return true;
            } else {
              setError("Failed to fetch cart data.");
            }
          }
        } catch (err) {
          console.error("Error initializing cart:", err);
          setError(err.message);
        }
      }
      setLoading(false);
    };

    initializeCart();
  }, []);
  console.log(cartData, "asdfasdfasdf");
  return { cartData, loading, error };
};

export default useCartInitialization;
