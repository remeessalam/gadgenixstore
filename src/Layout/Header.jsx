import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, routes } from "../constant";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <header className="fixed w-screen overflow-hidden bg-headerbgcolor py-4 px-6 text-white z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-primary overflow-hidden">
            <img src={logo} alt="logo" className="scale-150" />
          </div>
          <span className="text-lg font-semibold">Gadget Store</span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {routes.map((obj) => (
            <Link
              key={obj.name}
              to={obj.path}
              className="text-foreground hover:text-primary"
            >
              {obj.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU ICON */}
        <TiThMenu
          className="flex md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMobileNav}
        />

        {/* MOBILE NAVIGATION */}
        {mobileNavOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-headerbgcolor z-50 flex flex-col items-center justify-center">
            <button
              onClick={closeMobileNav}
              className="absolute top-4 right-4 text-white text-lg font-semibold"
            >
              <IoMdClose />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {routes.map((obj) => (
                <Link
                  key={obj.name}
                  to={obj.path}
                  className="text-foreground hover:text-primary"
                  onClick={closeMobileNav}
                >
                  {obj.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
