import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const animation = { duration: 50000, easing: (t) => t };
const SlidingText = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
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
    <div className=" bg-black w-screen flex items-center overflow-hidden spacebetween">
      <div ref={sliderRef} className="flex keen-slider  whitespace-nowrap">
        <h1 className="keen-slider__slide text-white text-[80px] font-bold tracking-tight mx-1">
          4-in-1 Magnetic Wireless Charging Station
        </h1>
        <h1 className="keen-slider__slide text-white text-[80px] font-bold tracking-tight mx-1">
          4-in-1 Magnetic Wireless Charging Station
        </h1>
      </div>
    </div>
  );
};

export default SlidingText;
