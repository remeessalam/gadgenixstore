import { useState } from "react";
import { testimonials } from "../constant";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-black text-white py-16">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-12">
          <h2 data-aos="fade-up" className="heading flex items-center">
            Customers Speak For Us
          </h2>
          <div data-aos="fade-up" className="flex gap-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-orange-500 transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors"
            >
              →
            </button>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col items-center gap-8">
          <div data-aos="fade-right" className="flex-1">
            <h3 className="text-2xl font-bold mb-2">{current.name}</h3>
            <p className="text-orange-500 mb-4">{current.position}</p>
            <div className="relative">
              <p className="text-lg mb-4">
                <span className="text-orange-500 text-6xl absolute -left-8 -top-4">
                  &quot;
                </span>
                {current.quote}{" "}
                <span className="text-orange-500 text-6xl absolute -left-8 -top-4">
                  &quot;
                </span>
              </p>

              <p className="text-gray-400">
                - {current.name}, {current.location}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="w-40 h-40 sm:w-80 sm:h-80 flex-shrink-0"
          >
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
