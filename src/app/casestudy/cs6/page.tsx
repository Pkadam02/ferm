"use client";

import Image from "next/image";

export default function DepoProveraPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* Page Header */}
      <section className="bg-[#111827] text-white py-0 text-center">
      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-start">
        <div className="bg-black absolute inset-0"></div>
        <div className="relative z-10 text-center ml-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
          Depo-Provera Free Case Review
          </h1>
        </div>
      </div>
      </section>

      {/* Lawsuit Summary */}
      <section className="py-10 max-w-4xl mx-auto px-6">
        <p className="text-[15px] leading-relaxed text-gray-700">
          <strong>Lawsuits against Depo-Provera</strong> allege that brand-name
          and generic versions of this birth control injection may be linked to
          an increased risk of meningiomas, typically benign brain tumors.
          Plaintiffs claim Pfizer and other manufacturers failed to adequately
          warn users. While no jury verdicts or mass settlements have been
          finalized, a federal MDL was established in February 2025 and
          currently includes over 550 consolidated claims as of July 2025, with
          additional cases moving forward in state courts.
        </p>
      </section>

      {/* CTA Section */}
      <section className="text-center py-4">
        <a
          href="#case-review"
          className="inline-block bg-[#d62814] text-white px-6 py-3 rounded shadow font-semibold hover:bg-[#b91c0c] transition-all"
        >
          See If I Qualify
        </a>
      </section>

      {/* Depo-Provera & Brain Tumors */}
      <section className="py-14 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Image
            src="https://findthefirm.com/wp-content/uploads/2024/12/Depo-Provera-Lawyer.png"
            alt="Depo-Provera Lawyer"
            width={768}
            height={512}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Depo-Provera and Brain Tumors
          </h2>
          <ul className="list-disc pl-5 text-[15px] space-y-2 text-gray-700">
            <li>
              A March 2024 study in the{" "}
              <em>British Medical Journal</em> reported that women using
              Depo-Provera for 12 months or longer had a 5.6-fold increased risk
              of meningioma.
            </li>
            <li>
              The FDA has not required a U.S. label warning about brain-tumor
              risk, despite similar warnings being added in the EU and UK.
            </li>
          </ul>

          <div className="mt-6">
            <a
              href="#case-review"
              className="inline-block bg-[#d62814] text-white px-6 py-3 rounded shadow font-semibold hover:bg-[#b91c0c] transition-all"
            >
              Check My Eligibility
            </a>
          </div>
        </div>
      </section>

      {/* Do I Qualify Section */}
      <section className="py-14 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Do I Qualify for a Depo-Provera Lawsuit?
          </h2>
          <p className="text-[15px] mb-4">
            You may be eligible if all of the following apply:
          </p>
          <ul className="list-disc pl-5 text-[15px] space-y-2 text-gray-700">
            <li>
              You received Depo-Provera, Depo-SubQ Provera, or an authorized generic.
            </li>
            <li>
              You used it for at least a year (typically two or more injections).
            </li>
            <li>
              You received a meningioma diagnosis after beginning the injections.
            </li>
            <li>
              Your case meets state-specific filing deadlines (commonly 2–3 years post-diagnosis).
            </li>
          </ul>
          <p className="text-[15px] mt-4">
            Requirements vary by state and injury specifics. Contact a qualified
            Depo-Provera attorney to assess your case.
          </p>

          <div className="mt-6">
            <a
              href="#case-review"
              className="inline-block bg-[#d62814] text-white px-6 py-3 rounded shadow font-semibold hover:bg-[#b91c0c] transition-all"
            >
              Start Free Case Review
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="https://findthefirm.com/wp-content/uploads/2025/07/Depo-Provera-Lawsuit-1000x0-c-de.png"
            alt="Depo Provera Lawsuit"
            width={1000}
            height={750}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </section>

      {/* What’s Happening Now */}
      <section className="py-14 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Image
            src="https://findthefirm.com/wp-content/uploads/2025/07/project-articles-2-1200x930-1-1024x794.png"
            alt="Depo Provera Updates"
            width={1024}
            height={794}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            What’s Happening Now
          </h2>
          <ul className="list-disc pl-5 text-[15px] space-y-2 text-gray-700">
            <li>
              <strong>Feb 2025:</strong> MDL 3140 formed in the Northern District of Florida under Judge Casey Rodgers.
            </li>
            <li>
              <strong>By Jul 2025:</strong> Over 550 Depo-related lawsuits are consolidated, with initial “bellwether” cases selected to help shape future settlements.
            </li>
            <li>
              <strong>Evidence gathering:</strong> Ongoing document exchanges, with more than 8,000 documents produced.
            </li>
            <li>
              <strong>Next steps:</strong> Discovery, case management orders, and early trials could begin in 2025–26.
            </li>
          </ul>

          <div className="mt-6">
            <a
              href="#case-review"
              className="inline-block bg-[#d62814] text-white px-6 py-3 rounded shadow font-semibold hover:bg-[#b91c0c] transition-all"
            >
              Find Out Now
            </a>
          </div>
        </div>
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
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-sm">
          

          <p className="text-xs text-slate-600">
          Disclaimer: This is attorney advertising. No attorney‑client relationship is formed by submitting this form or interacting with FusionByte Media, FindTheFirm, or affiliated law firms. Laws vary by state; this content is for informational purposes and not legal advice. Consult a licensed attorney in your state for advice tailored to your situation.  </p>
        </div>
      </section>
    </main>
  );
}
