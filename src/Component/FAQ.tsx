"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    id: 1,
    title: "Is FindTheFirm a law firm?",
    content: `No, we are not a law firm. We are a trusted <strong>legal intake and lead generation service</strong>. 
    Our job is to <strong>connect you to experienced law firms</strong> handling mass tort lawsuits.`,
  },
  {
    id: 2,
    title: "How much does this cost me?",
    content: `Our service is <strong>completely free</strong> for users. You’ll only pay legal fees if you decide to move forward and win your case.`,
  },
  {
    id: 3,
    title: "Is my information safe and private?",
    content: `Yes, we value your privacy. All submissions are <strong>100% secure</strong> and never shared without your permission.`,
  },
  {
    id: 4,
    title: "How do I know if I qualify?",
    content: `After you submit your details, our legal partners will review your case and let you know if you qualify.`,
  },
];

export default function FAQPreview() {
  const [active, setActive] = useState<number | null>(1);

  // Refs for content wrappers (the inner content whose scrollHeight we measure)
  const contentRefs = useRef<Record<number, HTMLDivElement | null>>({});
  // Measured heights in px
  const [heights, setHeights] = useState<Record<number, number>>({});

  // Measure heights after first paint and on window resize
  useLayoutEffect(() => {
    const measure = () => {
      const newHeights: Record<number, number> = {};
      faqs.forEach((f) => {
        const el = contentRefs.current[f.id];
        if (el) {
          // use scrollHeight to get full content height even if hidden by wrapper
          newHeights[f.id] = el.scrollHeight;
        } else {
          newHeights[f.id] = 0;
        }
      });
      setHeights((prev) => {
        // shallow compare to avoid frequent state updates
        let same = true;
        for (const k of Object.keys(newHeights)) {
          if (prev[+k] !== newHeights[+k]) {
            same = false;
            break;
          }
        }
        return same ? prev : newHeights;
      });
    };

    measure();
    // re-measure after fonts/images load (small delay)
    const t = setTimeout(measure, 120);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Small optimization: prevents pointer events when animating (optional)
  // Not required but can reduce micro-jank on some devices
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
      {/* LEFT IMAGE */}
      <div className="overflow-hidden mt-[50px]">
        <img
          src="https://findthefirm.com/wp-content/uploads/2021/10/Advisory-Board-header.jpg"
          alt="FAQ Discussion"
          className="w-full h-auto object-cover rounded-lg "
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <p className="text-sm font-semibold uppercase text-gray-500 mb-2">
          Frequently Asked Questions
        </p>
        <h2 className="text-4xl font-bold leading-snug mb-8 text-gray-900">
          Have Questions? <br /> We’ve Got Answers.
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isActive = active === faq.id;
            const measured = heights[faq.id] ?? 0;

            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-lg bg-white shadow-sm border border-gray-200"
              >
                {/* Header */}
                <button
                  onClick={() => setActive(isActive ? null : faq.id)}
                  className={`flex justify-between items-center w-full px-5 py-3 text-left font-semibold rounded-md transition-colors duration-200 ${
                    isActive ? "bg-[#dc2626] text-white" : "text-gray-900 hover:bg-gray-50"
                  }`}
                  style={{
                    // avoid layout changes from border/padding changes on toggle
                    willChange: "transform, opacity",
                    pointerEvents: isAnimating ? "none" : undefined,
                  }}
                >
                  <span>{faq.title}</span>
                  <motion.div
                    animate={{ rotate: isActive ? -90 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <ArrowRight
                      className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-700"}`}
                    />
                  </motion.div>
                </button>

                {/* Motion wrapper animates numeric height (px) — NO height:auto */}
                <motion.div
                  initial={false}
                  animate={{ height: isActive ? measured : 0, opacity: isActive ? 1 : 0 }}
                  transition={{
                    height: { duration: 0.36, ease: [0.22, 0.9, 0.27, 1] },
                    opacity: { duration: 0.22, ease: "easeOut" },
                  }}
                  onAnimationStart={() => setIsAnimating(true)}
                  onAnimationComplete={() => setIsAnimating(false)}
                  style={{
                    overflow: "hidden",
                    willChange: "height, opacity",
                    // prevent layout jump by forcing GPU-friendly compositing
                    transform: "translateZ(0)",
                  }}
                >
                  {/* The measured content — always in DOM so scrollHeight is available */}
                  <div
                    ref={(el) => { contentRefs.current[faq.id] = el; }}
                    className="px-5 pb-4 bg-gray-50 border-t border-gray-100"
                  >
                    <p
                      className="text-gray-700 leading-relaxed pt-3"
                      dangerouslySetInnerHTML={{ __html: faq.content }}
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <div className="mt-10 flex justify-center">
          <a
            href="/FAQ"
            className="inline-block bg-[#dc2626] text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-red-700 transition-all duration-200"
          >
            VIEW FULL FAQ
          </a>
        </div>
      </div>
    </section>
  );
}
