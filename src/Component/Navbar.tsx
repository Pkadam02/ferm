"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full h-31 relative">
      {/* ===== Top dark bar with logo ===== */}
      <div className="bg-[#262626] py-8 flex justify-start pl-40 relative">
        <Image
          src="/6.png"
          alt="Find The Firm"
          width={120}
          height={50}
          className="object-contain"
        />
      </div>

      {/* ===== White navbar section ===== */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {isSticky ? (
            // Sticky version
            <motion.section
              key="sticky"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full bg-white shadow-lg z-50"
            >
              <div className="max-w-7xl mx-auto bg-white">
                <NavbarContent isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </motion.section>
          ) : (
            // Default position
            <section className="relative bg-transparent z-40">
              <div className="max-w-7xl mx-auto -mt-6 bg-white shadow-md rounded-sm">
                <NavbarContent isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </section>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* ✅ NavbarContent component */
function NavbarContent({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex justify-start items-center">
      <ul className="flex flex-wrap items-center space-x-10 py-4 text-[15px] font-semibold text-gray-900 ml-10">
        <li>
          <Link href="/" className="hover:text-red-500 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="hover:text-red-500 transition">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/faq" className="hover:text-red-500 transition">
            Frequently Asked Questions
          </Link>
        </li>

        {/* ===== Dropdown ===== */}
        <li
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="flex items-center hover:text-red-500 transition">
            Active Lawsuits
            <svg
              className="ml-1 w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute left-0 mt-3 bg-white shadow-xl border border-gray-100 rounded-md w-64 py-2 z-50"
              >
                {[
                  ["Paraquat Case Review", "/paraquat-case-review"],
                  ["AFFF Firefighting Case Review", "/afff-firefighting-case-review"],
                  ["NEC Baby Formula Case Review", "/nec-baby-formula-case-review"],
                  ["Talcum Powder Case Review", "/talcum-powder-case-review"],
                  ["Roundup Case Review", "/roundup-case-review"],
                  ["Depo-Provera Free Case Review", "/depo-provera-lawsuit"],
                  ["No-Cost MVA Case Evaluation", "/no-cost-mva-case-evaluation"],
                  ["Roblox Abuse Lawsuit", "/roblox-abuse-lawsuit"],
                  ["Institutional Sexual Abuse Case Review", "/institutional-sexual-abuse-case-review"],
                ].map(([label, href]) => (
                  <motion.li
                    key={href}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href={href}
                      className="block px-4 py-2 text-[14px] text-gray-800 hover:bg-gray-100 hover:text-[#dc2626] transition"
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>

        <li>
          <Link href="/contact" className="hover:text-red-500 transition">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}
