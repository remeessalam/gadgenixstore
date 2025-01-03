import { useEffect, useState } from "react";
import landingpagebanner from "../assets/images/landingpagebanner.jpeg";
import landingpageimage from "../assets/images/landingpageimage.jpeg";
import landingpageaboutimg from "../assets/images/landingpageaboutimg.jpeg";
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
          <div className="">
            <span className="bg-primary text-black text-sm px-3 py-1 rounded">
              New in Store
            </span>
          </div>
          <h2 className="text-4xl font-bold">Deal of the Day</h2>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-xl">{timeLeft.days}</div>
              <div className="text-sm text-[#FF6B6B]">Days</div>
            </div>
            <div className="text-center">
              <div className="text-xl">{timeLeft.hours}</div>
              <div className="text-sm text-[#FF6B6B]">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-xl">{timeLeft.mins}</div>
              <div className="text-sm text-[#FF6B6B]">Mins</div>
            </div>
            <div className="text-center">
              <div className="text-xl">{timeLeft.secs}</div>
              <div className="text-sm text-[#FF6B6B]">Secs</div>
            </div>
          </div>
          <button className="primary-btn">Buy Now →</button>
        </div>
        <div className="">
          <img
            src={landingpagebanner}
            alt="Foldable wireless charger"
            className="w-full rounded-lg max-h-[500px] object-cover"
          />
        </div>
      </div>
      <div className="wrapper grid md:grid-cols-2 spacebetween text-white gap-8">
        <div>
          <img
            src={landingpageimage}
            alt="Wireless charger on wooden surface"
            className="w-full rounded-lg object-cover max-h-[500px]"
          />
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">Mac Safe Wireless Charger</h1>
          <div className="text-primary">LIMITED OFFER 25% OFF!</div>
          <p className="text-gray-400">
            Macsafe Wireless Charger For Iphone 13, 14,14pro,14pro Max,15 and
            15series
          </p>
          <button className="flex items-center text-white hover:text-primary transition-colors">
            <span className="mr-2">Discover More</span>
            <span>+</span>
          </button>
        </div>
      </div>
      <div
        className="relative -z-20 bg-no-repeat bg-current bg-left md:bg-center bg-cover wrapper spacebetween flex  flex-col  min-h-[70vh]"
        style={{ backgroundImage: `url(${landingpageaboutimg})` }}
      >
        <div className="bg-black/50 -z-10 absolute top-0 left-0 h-full w-full" />
        <div className="ml-auto flex flex-col justify-center">
          <h1 className="text-start heading text-primarytextcolor">
            {" "}
            Empowering a Busy Professional in Pune{" "}
          </h1>
          <p className="max-w-[40rem] desc !text-white mt-8">
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
