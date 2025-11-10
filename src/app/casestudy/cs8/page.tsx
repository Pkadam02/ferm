"use client";

import { checkIsOnDemandRevalidate } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RobloxAbusePage() {
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
    const { name, value, type, ariaChecked} = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checkIsOnDemandRevalidate : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <main className="bg-white text-slate-800">
        <section
      id="case-review"
      className="relative w-full py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/8th.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-40 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center text-white">
          {/* Left Text */}
          <div
        className="relative flex-1 bg-cover bg-center flex items-center justify-center text-white p-10 md:p-16"
        style={{
          backgroundImage:
            ""        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-md">
          <p className="text-blue-400 uppercase tracking-wide text-sm font-semibold mb-2">
            Free, Confidential Case Review
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Roblox Abuse Lawsuit Investigation
          </h1>
          <p className="text-gray-200 mt-4 leading-relaxed">
            Families nationwide are exploring legal action after reports of
            children being exploited or abused through Roblox. If your child has
            been harmed, you may qualify for a free, no-obligation legal
            consultation.
          </p>
        </div>
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
      {/* ============ HERO SECTION ============ */}
      <section className="py-16 px-40 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Is Your Child a Victim of Roblox-Related Abuse?
          </h2>
          <p className="text-gray-700 mt-5 leading-relaxed">
            Roblox is one of the most popular online gaming platforms for
            children and teens. Unfortunately, predators have used Roblox to
            connect with minors, leading to grooming, sextortion, and in some
            cases real-world abuse.
          </p>
          <p className="text-gray-700 mt-3">
            Attorneys are now investigating whether Roblox failed to prevent
            dangerous interactions that exposed children to harm.
          </p>
          <p className="text-gray-700 mt-3 font-medium">
            You may qualify for legal help if your child was abused after meeting
            someone through Roblox.
          </p>
        </div>
      </section>

      {/* ============ WHAT’S HAPPENING ============ */}
      <section className="py-16 px-40 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="https://findthefirm.com/wp-content/uploads/2025/08/roblox-abuse-2-1024x831.png"
            alt="Roblox Abuse Illustration"
            width={1024}
            height={831}
            className="rounded-lg shadow-lg object-cover"
          />
          <div>
            <p className="text-blue-600 font-semibold mb-2 text-sm uppercase">
              What’s Happening?
            </p>
            <p className="text-gray-700 mb-4">
              Reports continue to surface of predators using Roblox to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Meet and Groom Children:</strong> Building trust and
                manipulating minors for sexual exploitation.
              </li>
              <li>
                <strong>Sextortion:</strong> Demanding explicit photos, videos, or
                payments, sometimes involving Roblox currency (Robux).
              </li>
              <li>
                <strong>Sexual Abuse and Trafficking:</strong> Online grooming
                escalating to in-person assault or trafficking.
              </li>
              <li>
                <strong>Exposure to Explicit Materials:</strong> Sending sexually
                inappropriate images or requests to minors.
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Families are pursuing legal action to hold companies accountable
              for failing to safeguard children.
            </p>

            <Link
              href="#case-review"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Assess Your Case
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHO MAY QUALIFY ============ */}
      <section className="py-16 px-40 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold mb-2 text-sm uppercase">
              Who May Qualify?
            </p>
            <p className="text-gray-700 mb-4">
              You may be eligible for a free case review if:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                The child met the abuser through Roblox (even if communication
                continued elsewhere).
              </li>
              <li>The child was under 18 when the abuse began.</li>
              <li>
                Abuse involved:
                <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                  <li>
                    <strong>Physical abuse</strong> such as rape, sexual assault,
                    or trafficking.
                  </li>
                  <li>
                    <strong>Virtual abuse</strong> such as sextortion, grooming, or
                    exposure to explicit materials.
                  </li>
                </ul>
              </li>
              <li>
                The child suffered one or more of the following:
                <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                  <li>Depression, anxiety, PTSD, or suicidal thoughts.</li>
                  <li>Behavioral or academic decline.</li>
                  <li>Medical or psychological treatment.</li>
                  <li>Suicide attempt or self-harm.</li>
                </ul>
              </li>
            </ul>
            <Link
              href="#case-review"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Assess Your Case
            </Link>
          </div>

          <Image
            src="https://findthefirm.com/wp-content/uploads/2025/08/roblox-abuse-3.png"
            alt="Who May Qualify"
            width={640}
            height={411}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* ============ CONFIDENTIAL NOTICE ============ */}
      <section className="py-12 px-40 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            100% Confidential | No Obligation | Free Consultation
          </h2>
          <p className="text-gray-700 mt-3">
            If your child experienced any of the above, you may qualify for a
            free, confidential legal consultation.
          </p>
        </div>
      </section>

      {/* ============ WHAT YOU’LL RECEIVE ============ */}
      <section className="py-16 px-40 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold mb-2 text-sm uppercase">
              What You’ll Receive
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <strong>Free Legal Consultation:</strong> No upfront cost, no
                obligation.
              </li>
              <li>
                <strong>Confidential Review:</strong> Your information will be
                kept private and secure.
              </li>
              <li>
                <strong>Nationwide Support:</strong> Lawyers licensed across the
                U.S.
              </li>
              <li>
                <strong>No Upfront Fees:</strong> Many attorneys work on a
                contingency basis, meaning you pay nothing unless you win.
              </li>
            </ul>

            <Link
              href="#case-review"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Assess Your Case
            </Link>
          </div>

          <Image
            src="https://findthefirm.com/wp-content/uploads/2025/08/roblox-abuse-1.png"
            alt="Roblox Legal Help"
            width={1000}
            height={667}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* ============ CASE REVIEW FORM (BACKGROUND IMAGE) ============ */}
     

      {/* ============ LEGAL DISCLAIMER ============ */}
      <section className="py-12 px-40 bg-gray-50 text-center text-gray-700 text-sm">
        <div className="container mx-auto px-6 max-w-4xl space-y-3">
          <p className="font-semibold">Important Legal Notice</p>
          <p>
            Attorney advertisement. This page is for informational purposes only
            and does not constitute legal advice. No attorney-client relationship
            is formed by submitting this form. Prior results do not guarantee
            similar outcomes. Services are provided by licensed attorneys.
          </p>
        </div>
      </section>
    </main>
  );
}
