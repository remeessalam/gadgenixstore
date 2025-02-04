// cartAPI.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; // Replace with your backend base URL

export const addToCartAPI = async (cartItem) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/cart`, cartItem);
    return response.data; // Return the response data if needed
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error; // Throw the error to handle it in the component
  }
};
