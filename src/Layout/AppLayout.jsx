import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
const AppLayout = () => {
  Aos.init({
    once: true,
    duration: 500,
    offset: -50,
  });
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
