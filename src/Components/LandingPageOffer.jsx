import { useEffect, useState } from "react";
import landingpagebanner from "../assets/images/landingpagebanner.jpeg";
import landingpageimage from "../assets/images/landingpageimage.jpeg";
import landingpageaboutimg from "../assets/images/landingpageaboutimg.jpeg";
import { products } from "../constant";
import { Link } from "react-router-dom";
const LandingPageOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Add your countdown logic here
      // This is a placeholder that shows 00
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" md:-mt-[20rem]">
      <div className="space-y-8 grid md:grid-cols-2 wrapper text-white spacebetween">
        {/* Deal of the Day Section */}
        <div className="space-y-4 flex flex-col justify-center">
          <div data-aos="fade-up" className="">
            <span className="bg-primary text-black text-sm px-3 py-1 rounded">
              New in Store
            </span>
          </div>
          <h2 data-aos="fade-up" className="text-4xl font-bold text-black">
            Deal of the Day
          </h2>
          <div className="flex gap-4 text-primary">
            <div data-aos="fade-up" className="text-center">
              <div className="text-xl">{timeLeft.days}</div>
              <div className="text-sm text-[#FF6B6B]">Days</div>
            </div>
            <div data-aos="fade-up" className="text-center">
              <div className="text-xl">{timeLeft.hours}</div>
              <div className="text-sm text-[#FF6B6B]">Hours</div>
            </div>
            <div data-aos="fade-up" className="text-center">
              <div className="text-xl">{timeLeft.mins}</div>
              <div className="text-sm text-[#FF6B6B]">Mins</div>
            </div>
            <div data-aos="fade-up" className="text-center">
              <div className="text-xl">{timeLeft.secs}</div>
              <div className="text-sm text-[#FF6B6B]">Secs</div>
            </div>
          </div>
          <Link
            to={
              "/product/3-in-1-Magnetic-Foldable-MagSafe-Compatible-Wireless-Charger"
            }
            data-aos="fade-up"
            className="primary-btn"
          >
            Buy Now →
          </Link>
        </div>
        <div data-aos="fade-up" className="">
          <img
            src={landingpagebanner}
            alt="Foldable wireless charger"
            className="w-full rounded-lg max-h-[500px] object-cover"
          />
        </div>
      </div>
      <div className="wrapper grid md:grid-cols-2 spacebetween text-white gap-8">
        <div data-aos="fade-right">
          <img
            src={products[0].images[2]}
            alt="Wireless charger on wooden surface"
            className="w-full rounded-lg object-cover max-h-[500px]"
          />
        </div>
        <div
          data-aos="fade-left"
          className="space-y-4 flex flex-col justify-center items-center"
        >
          <h1 className="text-4xl font-bold text-center">{products[4].name}</h1>
          <div className="text-primary">LIMITED OFFER 25% OFF!</div>
          <p className="text-gray-400">{products[4].description}</p>
          <Link
            to={
              "/product/3-in-1-Magnetic-Foldable-MagSafe-Compatible-Wireless-Charger"
            }
            className="flex items-center text-white hover:text-primary transition-colors"
          >
            <span className="mr-2">Discover More</span>
            <span>+</span>
          </Link>
        </div>
      </div>
      <div
        className="relative -z-20 bg-no-repeat bg-current bg-left md:bg-center bg-cover wrapper spacebetween flex  flex-col  min-h-[70vh]"
        style={{ backgroundImage: `url(${landingpageaboutimg})` }}
      >
        <div className="bg-black/50 -z-10 absolute top-0 left-0 h-full w-full" />
        <div className="ml-auto flex flex-col justify-center">
          <h1
            data-aos="fade-up"
            className="text-start heading text-primarytextcolor"
          >
            {" "}
            Empowering a Busy Professional in Pune{" "}
          </h1>
          <p data-aos="fade-up" className="max-w-[40rem] desc !text-white mt-8">
            Priya, a marketing executive from Pune, found her perfect
            work-from-home companion with our Magnetic Wireless Charging
            Station. She shares: “I no longer have to juggle wires or worry
            about multiple chargers. Gadgenix.store made it so simple to stay
            organized and connected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPageOffer;
