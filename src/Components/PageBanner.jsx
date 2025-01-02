const PageBanner = ({ image, title, style }) => {
  return (
    <div
      className={` relative w-screen h-[525px] bg-no-repeat bg-current ${style} bg-cover flex justify-center items-center `}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute w-screen h-full bg-black/50 top-0 left-0 " />
      <h1 className="text-[2.5rem] font-semibold text-white z-10">{title}</h1>
    </div>
  );
};

export default PageBanner;
