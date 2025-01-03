import landingpagebanner from "../assets/images/landingpagebanner.jpeg";

const LandingBanner = () => {
  return (
    <div>
      <div
        className="h-screen pt-[96px] sm:pt-[112px] bg-no-repeat bg-current bg-cover bg-top"
        style={{ backgroundImage: `url(${landingpagebanner})` }}
      ></div>
    </div>
  );
};

export default LandingBanner;
