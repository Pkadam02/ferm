"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/banner3.jpg",
    // ✅ Add <br> after “Fast.”
    title: (
      <>
        Mass Tort Deadlines Are 
        <br />Closing Fast. Act Now.
      </>
    ),
    subtitle:
      "You may only have weeks or months to file your claim. Don’t wait—your free case review takes just 60 seconds.",
    button: "CHECK IF YOU QUALIFY",
  },
  {
    image: "/banner2.jpg",
    title: "Injured by a Drug or Device? You're Not Alone.",
    subtitle:
      "Thousands have suffered. We're here to help you take the first step toward justice, support, and possible compensation.",
    button: "CHECK IF YOU QUALIFY",
  },
  {
    image: "/banner1.jpg",
    // ✅ Add <br> after “Justice”
    title: (
      <>
        You Deserve Justice.
        <br /> We Help You Find It.
      </>
    ),
    subtitle:
      "If you’ve been harmed by a dangerous drug, product, or chemical, our team connects you with trusted legal experts.",
    button: "CHECK IF YOU QUALIFY",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto-slide every 30 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      {/* ===== Background Images (crossfade) ===== */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[current].image})`,
              backgroundBlendMode: "normal",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/1" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ===== Text Content ===== */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-6">
        <motion.div
          key={current + "-text"}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="mx-auto bg-white h-[3px] w-[60px] mb-6 origin-left"
          ></motion.div>

          {/* ===== Title with translucent background box ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block bg-black/20  px-6 py-4 mb-6"
          >
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight drop-shadow-lg">
              {slides[current].title}
            </h1>
          </motion.div>

          <p className="text-gray-200 text-lg md:text-[18px] mb-8 leading-relaxed drop-shadow-md">
            {slides[current].subtitle}
          </p>

          <motion.a
            href="/contact-us"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
            transition={{ duration: 0.3 }}
            className="inline-block px-10 py-3 bg-white text-black font-semibold uppercase rounded-md border border-white hover:bg-transparent hover:text-white transition"
          >
            {slides[current].button}
          </motion.a>
        </motion.div>
      </div>

      {/* ===== Navigation Arrows ===== */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-[40px]
        bg-white/10 backdrop-blur-md text-white border border-white/40 
        p-3 rounded-full hover:bg-white/30 transition duration-300 z-30 shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-[40px]
        bg-white/10 backdrop-blur-md text-white border border-white/40 
        p-3 rounded-full hover:bg-white/30 transition duration-300 z-30 shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </motion.button>

      {/* ===== Revolution Slider Style Bullets ===== */}
      
    </section>
  );
}
