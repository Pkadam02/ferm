"use client";

import { checkIsOnDemandRevalidate } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CaseReviewPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    withinTwoYears: "",
    reported: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, ariaChecked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checkIsOnDemandRevalidate : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <main className="bg-white text-slate-800">
      {/* ===================================================== */}
      {/* ✅ CASE REVIEW FORM SECTION */}
      {/* ===================================================== */}
      <section
      id="case-review"
      className="relative w-full py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/7th.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-40 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center text-white">
          {/* Left Text */}
          <div>
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
              Free, No-Obligation Legal Case Review
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Motor Vehicle Accident? Legal Help May Be Available
            </h2>
            <p className="mt-4 leading-relaxed text-gray-200">
              Some individuals are seeking legal support after suffering
              injuries in car, truck, or motorcycle accidents. If you or a loved
              one has been involved in an accident, you may qualify for a free,
              no-obligation legal case review.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">First Name</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Last Name</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Phone/Mobile</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Address</label>
                  <input
                    name="address"
                    placeholder="Address line 1"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">City</label>
                  <input
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">State</label>
                  <input
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Zip Code</label>
                  <input
                    name="zip"
                    placeholder="Zip code"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Radios */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Was the accident within the last 2 years?
                  </p>
                  <div className="flex gap-4 mt-2 text-gray-700">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="withinTwoYears"
                        value="yes"
                        checked={formData.withinTwoYears === "yes"}
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="withinTwoYears"
                        value="no"
                        checked={formData.withinTwoYears === "no"}
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Was the accident reported to the police?
                  </p>
                  <div className="flex gap-4 mt-2 text-gray-700">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="reported"
                        value="yes"
                        checked={formData.reported === "yes"}
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="reported"
                        value="no"
                        checked={formData.reported === "no"}
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3 mt-4">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1"
                />
                <p className="text-xs text-gray-600 leading-relaxed">
                  I consent to receive communications regarding my potential
                  motor vehicle accident claim. I understand message and data
                  rates may apply.
                </p>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

      {/* ===================================================== */}
      {/* ✅ WHAT’S HAPPENING SECTION */}
      {/* ===================================================== */}
      <section className="py-16 px-40 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="https://findthefirm.com/wp-content/uploads/2025/06/MVA1.jpg"
            alt="Motor Vehicle Accident"
            width={720}
            height={404}
            className="rounded-lg shadow-lg object-cover"
          />
          <div>
            <p className="text-blue-600 font-semibold mb-2 text-sm uppercase">
              What’s Happening?
            </p>
            <p className="text-gray-700 mb-4">
              Legal teams across the U.S. are reviewing cases involving motor
              vehicle collisions. Claims may focus on issues such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Driver negligence or distracted driving</li>
              <li>Poor road conditions or defective auto parts</li>
              <li>Lack of proper insurance coverage</li>
              <li>Delayed or denied claims by insurers</li>
            </ul>
            <Link
              href="#case-review"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Assess Your Case
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 px-40 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <p className="text-blue-600 font-semibold mb-2 text-sm uppercase">
            Assess Your Case
          </p>
          <p className="text-gray-800 font-semibold mb-3 text-lg">
            Who May Qualify?
          </p>
          <p className="text-gray-700 mb-4">
            You may be eligible for a free case review if:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>You were injured in a vehicle accident caused by someone else</li>
            <li>There were medical expenses or lost income involved</li>
            <li>You’ve suffered emotional distress or ongoing health issues</li>
            <li>The accident affected your work, school, or daily life</li>
          </ul>

          <Link
            href="#case-review"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Assess Your Case
          </Link>
        </div>

        {/* Right Column (Image) */}
        <div className="flex justify-center">
          <Image
            src="https://findthefirm.com/wp-content/uploads/2025/06/usman-malik-cbXfPEOc1-k-unsplash-1024x683.jpg"
            alt="Assess Your Case - Legal Help"
            width={1024}
            height={683}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>

      {/* ===================================================== */}
      {/* ✅ CONFIDENTIAL SECTION */}
      {/* ===================================================== */}
      <section className="py-12 px-40 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            100% Confidential | No Obligation | Free Consultation
          </h2>
          <p className="text-gray-700 mt-3">
            If you or someone you love was hurt in a vehicle accident, you may
            qualify for a free, no-obligation legal consultation.
          </p>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ✅ WHAT YOU’LL GET SECTION */}
      {/* ===================================================== */}
      <section className="py-16 px-40 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold mb-2 text-sm uppercase">
              What You’ll Get
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <strong>Free Legal Consultation:</strong> No obligation, no cost
                to submit your case.
              </li>
              <li>
                <strong>Confidential Review:</strong> Your information is kept
                private and secure.
              </li>
              <li>
                <strong>Nationwide Support:</strong> Lawyers licensed across the
                U.S.
              </li>
              <li>
                <strong>No Upfront Fees:</strong> Attorneys often work on a
                contingency basis.
              </li>
            </ul>
            <Link
              href="#case-review"
              className="inline-block mt-6 bg-red-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Assess Your Case
            </Link>
          </div>

          <Image
            src="https://findthefirm.com/wp-content/uploads/2025/06/accident-4860938_1280-1024x682.jpg"
            alt="Car Accident Scene"
            width={1024}
            height={682}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* ===================================================== */}
      {/* ✅ DISCLAIMER SECTION */}
      {/* ===================================================== */}
      <section className="py-10 px-40 bg-gray-50 text-sm text-gray-600">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <p>
            <strong>DISCLAIMER:</strong> Legal Nationwide does not endorse or
            recommend any lawyer or law firm. The information contained herein
            is not legal advice. Any information you submit to Legal Nationwide
            may not be protected by attorney-client privilege. All photos are of
            models and do not depict clients. All case evaluations are performed
            by participating attorneys. Powered by Adwire Media.
          </p>

          <div className="text-center text-gray-700 text-xs space-y-1">
            <p>
              Copyright 2025 Legal Nationwide | All Rights Reserved | Owned and
              Operated by{" "}
              <a
                href="http://adwiremedia.com/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Adwire Media
              </a>{" "}
              |{" "}
              <a
                href="https://www.legalnationwide.com/privacy-policy/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>{" "}
              |{" "}
              <a
                href="https://www.legalnationwide.com/terms-and-conditions/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Terms and Conditions
              </a>
            </p>
            <p>📍 2925 Richmond Avenue, Suite 1600, Houston, TX 77098</p>
          </div>
        </div>
      </section>
    </main>
  );
}
