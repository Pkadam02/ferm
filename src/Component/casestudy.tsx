"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-5 items-center">
      {/* LEFT IMAGE */}
      <div className="overflow-hidden mt-[-60px]">
        <img
          src="https://findthefirm.com/wp-content/uploads/2021/10/Advisory-Board-header.jpg"
          alt="FAQ Discussion"
          className="w-full h-auto object-cover rounded-lg"
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
          {faqs.map((faq) => (
            <div key={faq.id} className="flex flex-col">
              {/* Accordion Button */}
              <button
                onClick={() => setActive(active === faq.id ? null : faq.id)}
                className={`flex justify-between items-center w-full px-5 py-3 text-left font-semibold border transition-all duration-300 rounded-md ${
                  active === faq.id
                    ? "bg-[#dc2626] border-[#dc2626] text-white"
                    : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span>{faq.title}</span>
                <motion.div
                  animate={{
                    rotate: active === faq.id ? -90 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight
                    className={`w-5 h-5 ${
                      active === faq.id ? "text-white" : "text-gray-800"
                    }`}
                  />
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence initial={false}>
                {active === faq.id && (
                  <motion.div
                    key={faq.id}
                    initial={{ height: 0, opacity: 0, y: -10 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="p-4 border-l-4 border-[#dc2626] bg-gray-50 mt-1 rounded-md"
                  >
                    <p
                      className="text-gray-800 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: faq.content }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA BUTTON CENTERED */}
        
      </div>
      <div className="mt-8 mr-[-550] flex justify-center">
          <a
            href="/casestudy/cs1"
            className="inline-block bg-[#dc2626] text-white font-semibold px-8 py-3  hover:bg-red-700 transition"
          >
            VIEW FULL FAQ
          </a>
        </div>
    </section>
  );
}
