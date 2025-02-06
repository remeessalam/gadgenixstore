import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; // Adjust based on your backend

// 🔹 Async Thunk to Fetch Cart from Backend
export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/cart`, {
      headers: {
        Authorization: localStorage.getItem("authToken"), // ✅ Pass auth token
      },
      params: { userId },
    });
    return response.data; // Returns the fetched cart
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const { userID, products } = action.payload;
      console.log(userID, products, "thispayload");

      state.userID = userID;

      products.forEach((product) => {
        const existingItem = state.items.find(
          (item) =>
            item.id === product.id && item.color === (product.color || "")
        );

        if (existingItem) {
          existingItem.quantity += product.quantity;
          existingItem.totalPrice = existingItem.price * existingItem.quantity;
        } else {
          state.items.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: product.quantity,
            color: product.color || "",
            totalPrice: product.price * product.quantity,
          });
        }
      });

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        state.totalAmount += (quantity - item.quantity) * item.price;
        item.quantity = parseInt(quantity);
        item.totalPrice = item.price * item.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      if (action.payload && action.payload.products) {
        state.items = action.payload.products.map((product) => ({
          userId: action.payload.userId,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: product.quantity,
          totalPrice: product.price * product.quantity,
          color: product.color || "",
        }));

        // 🔹 Update total quantities and amounts from backend data
        state.totalQuantity = state.items.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
        state.totalAmount = state.items.reduce(
          (sum, item) => sum + item.totalPrice,
          0
        );
      }
    });
  },
});

export const { addToCart, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
