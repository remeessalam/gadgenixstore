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
        <div className="w-full grid md:grid-cols-6 items-center gap-2">
          <div className="md:col-span-2  flex items-center gap-3">
            <Link to={"/"}>
              <div className="h-16 w-16 sm:h-20 sm:w-20 bg-primary rounded-full  overflow-hidden">
                <img src={logo} alt="logo" className="scale-150 " />
              </div>
            </Link>
            <Link to={"/"}>
              <h4 className="text-lg font-semibold  text-white">
                Gadgenix Store
              </h4>
            </Link>
          </div>
          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 md:col-span-4 ml-[6rem]">
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
        </div>

        {/* MOBILE MENU ICON */}
        <TiThMenu
          className="flex md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMobileNav}
        />

        {/* MOBILE NAVIGATION */}
        {mobileNavOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-headerbgcolor z-50 flex flex-col items-start p-8">
            <button
              onClick={closeMobileNav}
              className="absolute top-4 right-4 text-white text-lg font-semibold"
            >
              <IoMdClose />
            </button>
            <nav className="flex flex-col items-start gap-8">
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
