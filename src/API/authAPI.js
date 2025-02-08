import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_BASE_URL = "http://localhost:8080";

export const signUp = async (userDetails) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/signup`,
      userDetails
    );

    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", response.data.user.name);
    }

    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};

export const login = async (userDetails) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/login`,
      userDetails
    );
    console.log(response, "asdfasdf");

    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", response.data.user.fullName);
      localStorage.setItem("userID", response.data.user.id);
    }

    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const checkAuth = () => {
  const token = localStorage.getItem("authToken");
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("authToken");
      return false;
    }
    return true;
    //eslint-disable-next-line
  } catch (error) {
    localStorage.removeItem("authToken");
    return false;
  }
};

export const getUser = async () => {
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userID");
  console.log(userId, "asdfasdfasdfasdf");
  const response = await axios.post(
    `${API_BASE_URL}/api/auth/user`,
    { userId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response, "sadfasdfs");
  return response.data;
};
export const addAddress = async (data) => {
  try {
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userID");
    const payload = { data, userId };

    const response = await axios.post(
      `${API_BASE_URL}/api/auth/user/add-address`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data, "Response Data");
    return response.data;
  } catch (error) {
    console.error("Error adding address:", error);
    throw error;
  }
};
export const deleteAddress = async (userId, addressId) => {
  try {
    const token = localStorage.getItem("authToken");

    const response = await axios.delete(
      `${API_BASE_URL}/api/auth/user/delete-address/${userId}/${addressId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data, "Updated User After Deleting Address");
    return response.data;
  } catch (error) {
    console.error("Error deleting address:", error);
    throw error;
  }
};
