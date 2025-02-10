import { apiRequest } from "./ApiHandler";

export const addToCartAPI = async (cartItem) => {
  return apiRequest("POST", "/api/cart", {
    userId: cartItem.userID, // Ensure userId is passed
    product: {
      id: cartItem.id,
      name: cartItem.name,
      price: cartItem.price,
      image: cartItem.image,
      quantity: cartItem.quantity,
      color: cartItem.color || "",
    },
  });
};
export const getCartAPI = async (userId) => {
  try {
    const response = await apiRequest("GET", `/api/cart/${userId}`);
    console.log(response, "asdfasdfasdfsadf");
    return response; // Ensure response is returned properly
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};
export const removeCartItemAPI = async (productId, userID) => {
  try {
    const response = await apiRequest("POST", `/api/cart/removecartitem`, {
      productId,
      userID,
    });
    return response;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

// Delete the current user's cart
export const deleteCart = async (cartId) =>
  await apiRequest("POST", `/api/cart/deletecart`, { cartId });
