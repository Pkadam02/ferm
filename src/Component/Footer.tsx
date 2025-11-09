"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

interface FooterProps {
  logoWidth?: number;
  logoHeight?: number;
}

export default function Footer({
  logoWidth = 120,
  logoHeight = 50,
}: FooterProps) {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 pt-20 pb-10 px-6 lg:px-44 font-inter">
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14">
        {/* ---------- LEFT: LOGO + TEXT ---------- */}
        <div className="space-y-5">
          <div className="flex items-center">
            <Image
              src="/6.png"
              alt="FindTheFirm Logo"
              width={logoWidth}
              height={logoHeight}
              className="object-contain"
            />
          </div>

          <p className="text-mb leading-relaxed text-gray-300 tracking-[0.025em]">
            <span className="text-white font-semibold">FindTheFirm</span> helps
            individuals harmed by dangerous drugs, medical devices, or toxic
            exposures get connected to trusted legal professionals. We’re not a
            law firm—we’re your first step toward justice, offering free case
            evaluations and connections to qualified mass tort attorneys across
            the U.S.
          </p>
        </div>

        {/* ---------- QUICK LINKS ---------- */}
        <div>
          <h4 className="text-white font-semibold text-[17px] mb-9 tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-[15px]">
            <li className="relative">
              <Link
                href="/"
                className="text-white font-semibold after:absolute rounded-lg after:left-[-30] after:-bottom-[8px] after:w-[300px] after:h-[4px] after:bg-[#a49d9d57]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white text-gray-300 font-medium transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-white text-gray-300 font-medium transition-colors duration-200"
              >
                Frequently Asked Questions
              </Link>
            </li>
            <li>
              <Link
                href="/lawsuits"
                className="hover:text-white text-gray-300 font-medium transition-colors duration-200 flex items-center gap-1"
              >
                Active Lawsuits <span className="text-gray-400">▼</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white text-gray-300 font-medium transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------- LEGAL LINKS ---------- */}
        <div>
          <h4 className="text-white font-semibold text-[17px] mb-9 tracking-wide">
            Legal Links
          </h4>
          <ul className="space-y-[10px]">
            <li>
              <Link
                href="/aboutus"
                className="hover:text-white text-gray-300 font-medium transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/Service#s1"
                className="hover:text-white text-gray-300 font-medium transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------- CONTACT US ---------- */}
        <div>
          <h4 className="text-white font-semibold text-[25px] mb-9 tracking-wide">
            Contact Us
          </h4>
          <div className="flex items-start space-x-3">
            <Mail className="w-[25px] h-[25px] text-white mt-[3px]" />
            <div>
              <p className="text-gray-400 text-[18px] mb-[2px]">Mail Us</p>
              <a
                href="mailto:info@findthefirm.com"
                className="text-white text-[14px] font-semibold hover:text-red-500 transition-colors duration-200"
              >
                info@findthefirm.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- DISCLAIMER ---------- */}
      <div className="max-w-7xl mx-auto mt-14 border-t border-gray-700 pt-6">
        <p className="text-xs text-gray-500 leading-relaxed italic tracking-wide">
          <span className="not-italic font-semibold text-gray-400">
            Disclaimer:
          </span>{" "}
          FindTheFirm is not a law firm and does not provide legal advice. We
          connect individuals with law firms who may offer legal representation.
          This is attorney advertising. Results vary.
        </p>
      </div>

      {/* ---------- COPYRIGHT ---------- */}
      <div className="text-center text-[12px] text-gray-500 mt-6 tracking-wide">
        © {new Date().getFullYear()} |{" "}
        <span className="text-white font-medium">FindTheFirm</span>
      </div>
    </footer>
  );
}
