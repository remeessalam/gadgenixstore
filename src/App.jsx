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

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/checkout", element: <CheckOutPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/contact-us", element: <ContactPage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/product/:id", element: <ProductItem /> },
    ],
  },
]);
export default AppRouter;
