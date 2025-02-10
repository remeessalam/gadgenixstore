import { apiRequest } from "./ApiHandler";

// Create a new order
export const createOrder = async (orderData) =>
  await apiRequest("post", "/api/order/add", orderData);
