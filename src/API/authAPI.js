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
  const response = await axios.post(`${API_BASE_URL}/api/auth/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response, "sadfasdfs");
};
export const addAddress = async (data) => {
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userID");
  const datas = { data, df };
  const response = await axios.post(
    `${API_BASE_URL}/api/auth/user/add-address`,
    datas,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response, "sadfasdfs");
};
