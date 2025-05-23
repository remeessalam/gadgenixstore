import axios from "axios";
import toast from "react-hot-toast/headless";

const API_BASE_URL = "https://gadgenixstore-backend.vercel.app";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userID");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (userId) {
      config.headers["X-User-ID"] = userId;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const apiRequest = async (method, url, data = null) => {
  try {
    const response = await apiClient({
      method,
      url,
      data,
    });
    console.log(response, "asdfjasdfasdf");
    if (!response?.data?.success) {
      toast.error(response.message || "please try again");
      return false;
    }
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    if (error.response.data.message === "Invalid token.") {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      localStorage.removeItem("userID");
      toast.error("token expired please login again");
    }
    throw error;
  }
};
