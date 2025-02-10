import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      // If a token exists, redirect to the home page.
      navigate("/");
    } else {
      // If no token is found, clean up any authentication keys.
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      localStorage.removeItem("userID");
    }
  }, [navigate]);
};

export default useAuthRedirect;
