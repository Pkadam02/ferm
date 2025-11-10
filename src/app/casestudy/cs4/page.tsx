"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TalcumPowderCaseReview() {
  return (
    <main className="bg-white text-gray-900">
      {/* HEADER */}
      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-start">
        <div className="bg-black absolute inset-0"></div>
        <div className="relative z-10 text-center ml-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
          Talcum Powder Case Review
          </h1>
        </div>
      </div>

      {/* INTRO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 items-start">
        {/* Left Text */}
        <div className="md:col-span-2 space-y-4 text-[15px] leading-relaxed text-gray-800">
          <p>
            As of May 2025, Johnson & Johnson faces over{" "}
            <strong>58,643 active lawsuits</strong> consolidated under MDL 2738
            in New Jersey federal court. These lawsuits allege that long-term
            use of <strong>talc-based products</strong> like{" "}
            <strong>Johnson’s Baby Powder</strong> and{" "}
            <strong>Shower to Shower</strong> caused ovarian cancer or
            mesothelioma due to <strong>asbestos contamination</strong>.
          </p>
          <p>
            J&amp;J’s attempts to settle via bankruptcy were{" "}
            <strong>rejected three times</strong>, most recently in{" "}
            <strong>March 2025</strong>, with the court citing a lack of
            financial distress and issues with claim voting procedures. The
            litigation continues in the tort system under U.S. District Judge
            Michael A. Shipp.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-end items-start mt-4 md:mt-0">
          <Link
            href="#case-review"
            className="bg-[#d62814] hover:bg-[#b91c0c] text-white font-semibold px-6 py-3 rounded shadow transition-all"
          >
            DO I QUALIFY?
          </Link>
        </div>
      </section>

      {/* DO YOU QUALIFY SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Do You Qualify?
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed text-[15px]">
            Thousands have already filed claims. If you or a loved one used
            talcum powder and were later diagnosed with cancer,{" "}
            <strong>
              you may be entitled to significant compensation.
            </strong>
          </p>

          <h5 className="text-lg font-semibold mb-2">
            Eligible Talcum Products Include:
          </h5>
          <ul className="list-disc list-inside text-gray-800 text-[15px] space-y-1 leading-relaxed">
            <li>Johnson’s Baby Powder</li>
            <li>Shower to Shower</li>
            <li>Gold Bond Body Powder</li>
            <li>Gold Bond No Mess Spray</li>
            <li>Gold Bond Extra Strength</li>
          </ul>
        </div>

        {/* Right Image */}
        <div>
          <Image
            src="https://findthefirm.com/wp-content/uploads/2024/02/talcum-claims-lawsuit-department.jpg"
            alt="Talcum Lawsuit"
            width={800}
            height={600}
            className="rounded-md shadow-md w-full object-cover"
          />
        </div>
      </section>

      {/* PRODUCT DISCONTINUATION SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <Image
            src="https://findthefirm.com/wp-content/uploads/2023/04/talcum2.jpg"
            alt="Product Discontinuation"
            width={800}
            height={600}
            className="rounded-md shadow-md w-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-gray-900">
            Product Discontinuation
          </h4>
          <p className="text-gray-700 mb-4 leading-relaxed text-[15px]">
            In response to mounting legal pressure, J&amp;J announced in August
            2022 that it would cease the sale of talc-based products globally by
            2023, transitioning to cornstarch-based alternatives.
          </p>

          <h5 className="text-lg font-semibold mb-3">
            Quick Eligibility Checklist
          </h5>
          <ul className="space-y-2 text-gray-800 text-[15px] leading-relaxed">
            <li>✔ Regular use of talc-based powder products</li>
            <li>
              ✔ Diagnosed with <strong>ovarian cancer</strong> or{" "}
              <strong>mesothelioma</strong>
            </li>
            <li>✔ Diagnosis occurred after prolonged product use</li>
            <li>✔ U.S. resident</li>
          </ul>
        </div>
      </section>

      {/* FINAL QUALIFICATION SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h4 className="text-2xl font-semibold mb-4 text-gray-900">
          Do You Qualify for a Talcum Powder Lawsuit?
        </h4>
        <p className="text-gray-700 text-[15px] leading-relaxed max-w-3xl mx-auto">
          If you or a loved one used talcum powder products regularly and were
          diagnosed with ovarian cancer or mesothelioma, you might be eligible
          for compensation.
        </p>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-10" id="case-review">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4 ml-100">
          Case Review
        </h2>
      

        {/* Case Review Form */}
        <form className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5] col-span-1 md:col-span-2"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5] col-span-1 md:col-span-2"
            required
          />
          <input
            type="text"
            placeholder="Address Line 1"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5] col-span-1 md:col-span-2"
          />
          <div className="grid md:grid-cols-2 gap-4 col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
            />
            <input
              type="text"
              placeholder="State"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder="Zip Code"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
              required
            />
            <select
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
              required
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </select>
          </div>

          <div className="col-span-1 md:col-span-2 grid gap-4">
            <select
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
              required
            >
              <option value="">Was your child born prematurely?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>

            <select
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4dabe5]"
              required
            >
              <option value="">Was your child diagnosed with NEC?</option>
              <option value="Yes">Yes, confirmed by a doctor</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>

          <label className="col-span-1 md:col-span-2 flex items-start gap-3 text-[14px] text-gray-700">
            <input type="checkbox" required className="mt-1" />
            <span>
              By checking the box, you agree to be contacted about your potential
              case or promotional legal offers sent by or on behalf of Perfect
              Legal Match, FusionByte Media, FindTheFirm and/or participating law
              firms. You may receive live calls, automated calls, emails or text
              messages even if you are on a national or state “Do Not Call” list.
              Consent is not a condition of purchase.
            </span>
          </label>

          <div className="text-center pt-4 ml-[-300]">
              <button
                type="submit"
                className="bg-[#29a4f0] text-white px-10 py-3 font-semibold rounded-md hover:white transition-all duration-300"
              >
                Submit
              </button>
            </div>
        </form>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h4 className="text-lg font-semibold mb-4">Frequently Asked Questions</h4>

          <div className="space-y-2">
            <Accordion title="Is this a class action lawsuit?" defaultOpen>
              No — most cases are individual lawsuits filed as part of MDL 2738.
            </Accordion>

            <Accordion title="What compensation could I receive?">
              Compensation may include medical bills, lost wages, pain and suffering, and wrongful death damages.
            </Accordion>

            <Accordion title="How much does it cost to file a claim?">
              Most law firms work on a contingency basis — you pay nothing unless you win.
            </Accordion>

            <Accordion title="Is there a deadline to file?">
              Yes — legal deadlines (statutes of limitation) vary by state. Act now to preserve your rights.
            </Accordion>
          </div>
        </div>
      </section>

      {/* secure info + advertising */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-sm">
          <h4 className="font-semibold mb-2">Your Information Is Secure</h4>
          <p className="mb-4">
            Your submission is 100% confidential. By completing this form, you consent to be contacted by phone, email, or text regarding your case. No purchase necessary.
          </p>

          <p className="text-xs text-slate-600">
            Attorney Advertising. Past results do not guarantee future outcomes. Sponsored by legal marketing partners and participating law firms.
          </p>
        </div>
      </section>
    </main>
  );
}

function Accordion({ title, children, defaultOpen = false }: { title: string; children: any; defaultOpen?: boolean }) {
    const [open, setOpen] = useState<boolean>(defaultOpen);
    return (
      <div className="border rounded">
        <button
          onClick={() => setOpen((s) => !s)}
          className="w-full text-left px-4 py-3 flex justify-between items-center"
        >
          <span className="font-medium">{title}</span>
          <span>{open ? "−" : "+"}</span>
        </button>
        {open && <div className="px-4 py-3 text-sm">{children}</div>}
      </div>
    );
  }