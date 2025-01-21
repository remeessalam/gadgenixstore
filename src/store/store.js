import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userDetailsReducer from "./userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    userDetails: userDetailsReducer,
  },
});

export default store;
