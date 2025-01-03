import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 50000, easing: (t) => t };

const SlidingText = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 0.8,
      spacing: 30,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="bg-black w-screen flex items-center overflow-hidden">
      <div
        ref={sliderRef}
        className="keen-slider flex whitespace-nowrap w-full"
      >
        <h1 className="keen-slider__slide text-white w-screen text-[24px] sm:text-[40px]  lg:text-[80px] font-bold tracking-tight ">
          4-in-1 Magnetic Wireless Charging Station
        </h1>
        <h1 className="keen-slider__slide text-white text-[24px] sm:text-[40px]  lg:text-[80px] font-bold tracking-tight ">
          4-in-1 Magnetic Wireless Charging Station
        </h1>
      </div>
    </div>
  );
};

export default SlidingText;
