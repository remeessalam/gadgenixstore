import landingpagebanner from "../assets/images/landingpagebanner2.png";

const LandingBanner = () => {
  return (
    <div>
      <div
        className="h-screen pt-[96px] sm:pt-[112px] bg-no-repeat bg-current bg-cover bg-center"
        style={{ backgroundImage: `url(${landingpagebanner})` }}
      ></div>
    </div>
  );
};

export default LandingBanner;
