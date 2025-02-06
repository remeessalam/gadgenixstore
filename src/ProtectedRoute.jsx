import { Navigate, useLocation } from "react-router-dom";
import { checkAuth } from "./API/authAPI";
//eslint-disable-next-line
const ProtectedRoute = ({ element }) => {
  const location = useLocation();

  return checkAuth() ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
};

export default ProtectedRoute;
