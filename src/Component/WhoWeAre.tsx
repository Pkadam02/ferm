"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Quick Online Form",
    content:
      "Takes 60 seconds or less. No medical records required to start.",
  },
  {
    id: 2,
    title: "Free Case Review",
    content:
      "Our case specialists carefully match your situation to the right law firm partner.",
  },
  {
    id: 3,
    title: "Get Connected",
    content:
      "You’ll be contacted by a legal team to discuss your potential claim.",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(1);

  return (
    <section className="w-full bg-white py-3">
      <div className="w-370 h-150 mx-auto flex flex-col lg:flex-row items-stretch overflow-hidden shadow-md">
        {/* LEFT CONTENT (40%) */}
        <div className="w-full lg:w-[40%] bg-[#282c34] flex flex-col justify-center px-8 lg:px-12 py-12">
          {/* Heading */}
          <div>
            <p className="text-gray-400 uppercase tracking-wider text-sm font-semibold">
              How It Works
            </p>
            <h2 className="text-3xl md:text-5xl font-light mt-2 text-white leading-snug">
              Our 3-Step Process Is Simple
            </h2>
          </div>

          {/* Accordion */}
          <div className="space-y-4 mt-8">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col">
                {/* Box with ID and Title */}
                <button
                  onClick={() =>
                    setActive(active === step.id ? 0 : step.id)
                  }
                  className={`flex justify-between items-center w-full px-5 py-3 font-semibold border transition-all duration-300 ${
                    active === step.id
                      ? "bg-[#dc2626] border-[#dc2626] text-white"
                      : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <span>
                    {step.id}. {step.title}
                  </span>
                  <motion.div
                    animate={{
                      rotate: active === step.id ? -90 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight
                      className={`w-5 h-5 ${
                        active === step.id ? "text-white" : "text-gray-800"
                      }`}
                    />
                  </motion.div>
                </button>

                {/* Content on background (outside box) */}
                <AnimatePresence initial={false}>
                  {active === step.id && (
                    <motion.div
                      key={step.id}
                      initial={{ height: 0, opacity: 0, y: -10 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="mt-2 ml-2"
                    >
                      <p className="text-white/90 text-lg leading-relaxed ">
                        {step.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE (60%) */}
        <div className="relative w-full lg:w-[60%] min-h-[480px] overflow-hidden">
          <Image
            src="/Disscusion.jpg"
            alt="How It Works Discussion"
            fill
            className="object-cover"
          />
          {/* Red Diagonal Overlay */}
          <div className="absolute inset-0"></div>
        </div>
      </div>
    </section>
  );
}
