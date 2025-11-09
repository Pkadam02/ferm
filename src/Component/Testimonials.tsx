"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Fast and easy. I filled out the form, they called me back the next day. They made a complicated process simple.",
    name: "Carlos T.",
    location: "TEXAS",
  },
  {
    text: "My son was born prematurely and later diagnosed with NEC. I had no idea it could be linked to his formula. FindTheFirm connected me to a lawyer who is actually helping.",
    name: "Monique R.",
    location: "GEORGIA",
  },
  {
    text: "I used hair relaxers for years and never imagined they could be dangerous. I found this site, filled out the form, and now I’m part of a lawsuit that’s bringing attention to the issue.",
    name: "Latasha B.",
    location: "ILLINOIS",
  },
  {
    text: "My husband worked with pesticides for over a decade. When he was diagnosed with Parkinson’s, I didn’t know what to do. This site pointed us in the right direction when no one else could.",
    name: "Diane K.",
    location: "IOWA",
  },
  {
    text: "I never thought I had a case. I was just sick all the time. They explained everything, connected me to a firm, and now I’m part of a lawsuit getting the help I need.",
    name: "Jennifer M.",
    location: "ALABAMA",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const groupSize = 3;

  const nextSlide = () => {
    setCurrent((prev) => (prev + groupSize) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0
        ? testimonials.length - groupSize
        : (prev - groupSize + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisible = () => {
    const end = current + groupSize;
    if (end <= testimonials.length) {
      return testimonials.slice(current, end);
    } else {
      return [
        ...testimonials.slice(current, testimonials.length),
        ...testimonials.slice(0, end - testimonials.length),
      ];
    }
  };

  const visibleTestimonials = getVisible();

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">
          Hear from people we’ve helped
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">
          Real Stories. Real Justice.
        </h2>

        <div className="relative flex justify-center items-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-8 lg:-left-20 z-20 bg-black text-white p-3  hover:bg-red-600 transition duration-300"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Slider */}
          <div className="overflow-hidden w-full max-w-9xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="flex justify-center gap-8 md:gap-10 transition-transform duration-700 ease-in-out"
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                exit={{ x: 0 }}
              >
                {visibleTestimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`${
                      i === 0
                        ? "h-[150px]"
                        : i === 1
                        ? "h-[290px]"
                        : "h-[280px]"
                    } w-[310px] md:w-[490px] bg-white  flex flex-col justify-between  transition-all duration-300`}
                  >
                    <div className="p-5 pb-6 text-left">
                      <p className="text-gray-700 text-base leading-relaxed">
                        {t.text}
                      </p>
                    </div>
                    <div className="border-t px-8 py-5 text-left">
                      <h6 className="font-semibold text-gray-900">{t.name}</h6>
                      <span className="text-red-600 text-xs uppercase tracking-wider">
                        {t.location}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-8 lg:-right-20 z-20 bg-black text-white p-3 hover:bg-red-600 transition duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: Math.ceil(testimonials.length / groupSize) }).map(
            (_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index * groupSize)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === Math.floor(current / groupSize)
                    ? "bg-red-600 scale-110"
                    : "bg-gray-300"
                }`}
              ></span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
