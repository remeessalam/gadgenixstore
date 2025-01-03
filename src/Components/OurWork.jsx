import { overworkbgimage } from "../constant";
import freedelivery from "../assets/images/icons/freedelivery.png";
import payment from "../assets/images/icons/securepayment.png";
import support from "../assets/images/icons/support.png";
import returnicon from "../assets/images/icons/return.png";
const OurWork = () => {
  return (
    <div
      className="relative bg-no-repeat bg-current bg-cover bg-center  min-h-[70vh] -z-20"
      style={{ backgroundImage: `url(${overworkbgimage})` }}
    >
      <div className="grid md:grid-cols-4 spacebetween wrapper text-white z-10 min-h-[60vh] items-center justify-items-center">
        <div className="space-y-10 w-full">
          <div
            data-aos="fade-right"
            className="flex items-center  gap-1 sm:gap-4 space-x-4"
          >
            <div className="rounded-full border border-primary p-5 sm:w-24 sm:h-24 w-16  h-16 flex justify-center items-center">
              <img src={freedelivery} alt="" />{" "}
            </div>
            <div>
              <h3>Free delivery</h3>
              <p>For all orders above $45</p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="flex items-center  gap-1 sm:gap-4 space-x-4"
          >
            <div className="rounded-full border border-primary p-5 sm:w-24 sm:h-24 w-16  h-16 flex justify-center items-center">
              <img src={payment} alt="" />
            </div>
            <div>
              <h3>Secure payments</h3>
              <p>Confidence on all your devices</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 text-center">
          {" "}
          <h1 data-aos="fade-up" className="heading md:my-0 my-5">
            Sign Up & Save 25%
          </h1>
        </div>
        <div className="space-y-10 w-full ">
          <div
            data-aos="fade-left"
            className="flex items-center  gap-1 sm:gap-4 space-x-4"
          >
            <div className="rounded-full border border-primary p-5 sm:w-24 sm:h-24 w-16  h-16 flex justify-center items-center">
              <img src={support} alt="" />{" "}
            </div>
            <div>
              <h3>Top-notch support</h3>
              <p>sayhello&gazacom</p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex items-center  gap-1 sm:gap-4 space-x-4"
          >
            <div className="rounded-full border border-primary p-5 sm:w-24 sm:h-24 w-16  h-16 flex justify-center items-center">
              <img src={returnicon} alt="" />
            </div>
            <div>
              <h3>180 Days Return</h3>
              <p>money back guranry</p>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="absolute h-full w-screen top-0 left-0 bg-black/50 -z-10" />
    </div>
  );
};

export default OurWork;
