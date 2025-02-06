import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import { Suspense } from "react";
import Loader from "./Components/Loader";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CheckOutPage from "./Pages/CheckOutPage";
import CartPage from "./Pages/CartPage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import ProductItem from "./Pages/ProductItem";
import LandingPage from "./Pages/LandingPage";
import ScrollToTop from "./Components/ScrollTop";
import { Toaster } from "react-hot-toast";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import ProtectedRoute from "./ProtectedRoute.jsx";
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#000000",
              color: "#ffffff",
            },
          }}
        />
        <AppLayout />
      </Suspense>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
      {
        path: "/checkout",
        element: <ProtectedRoute element={<CheckOutPage />} />,
      },

      { path: "/cart", element: <CartPage /> },
      { path: "/contact-us", element: <ContactPage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/product/:id", element: <ProductItem /> },
      { path: "/landing-page", element: <LandingPage /> },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
]);
export default AppRouter;
