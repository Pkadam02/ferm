"use client";

import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Image from "next/image";
import { Mail, Clock, Shield, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const [phone, setPhone] = useState("");
  return (
    <main className="bg-white text-gray-800">
      {/* ==== PAGE HEADER ==== */}
      <section
        className="relative w-full bg-cover bg-center py-50 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://findthefirm.com/wp-content/uploads/2020/12/pheader-contacts.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ==== CONTACT INFO + IMAGE ==== */}
      <section className="container mx-auto px-6 lg:px-46 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* LEFT SIDE CONTENT */}
      <div className="space-y-6 order-2 lg:order-1">
        <h2 className="text-4xl lg:text-4xl font-semibold leading-tight text-gray-900">
          We&apos;re Here to Help You
          <br />
          Take the First Step
          <br />
          Toward Justice
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          Have questions before submitting your case? Need help understanding
          the process? Just want to talk to a real person? You’ve come to the
          right place.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you’re unsure about a potential case, need clarification on
          something you read, or simply want peace of mind before moving forward—
          our team is ready to support you.
        </p>

        {/* Contact Details */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <Mail className="w-6 h-6 text-gray-800" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-gray-700">info@findthefirm.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <Clock className="w-6 h-6 text-gray-800" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Hours</p>
              <p className="text-gray-700">Mon–Fri, 9am–6pm EST</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative flex justify-center order-1 lg:order-2">
        <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-[650px] h-[650px] bg-[url('/globe-bg.svg')] bg-contain bg-no-repeat opacity-10"></div>

        <Image
          src="/image-contacts.png"
          alt="Contact Person"
          width={800}
          height={900}
          className="object-contain z-10"
        />
      </div>
    </section>
      {/* ==== CONTACT FORM ==== */}
      <section className="py-16 bg-white">
      <div className="container mx-auto px-6 w-350">
        <form className="bg-white p-8 space-y-8">
          {/* === ROW 1 === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* === EMAIL === */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* === PHONE === */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone/Mobile <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(value: string) => setPhone(value)}
              inputStyle={{
                width: "100%",
                borderRadius: "0.375rem",
                border: "1px solid #D1D5DB",
                height: "42px",
              }}
              buttonStyle={{
                borderTopLeftRadius: "0.375rem",
                borderBottomLeftRadius: "0.375rem",
                border: "1px solid #D1D5DB",
              }}
              dropdownStyle={{ width: "320px" }}
              placeholder="Mobile Number"
              inputProps={{
                required: true,
              }}
            />
          </div>

          {/* === ADDRESS FIELDS === */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div>
                <label className="block text-sm text-gray-600">
                  Address Line 1
                </label>
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">
                  Address Line 2
                </label>
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">City</label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">State</label>
                <input
                  type="text"
                  placeholder="State"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">
                  Zip Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Zip"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  defaultValue="US"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="US">United States (US)</option>
                  <option value="CA">Canada</option>
                  <option value="IN">India</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
              </div>
            </div>
          </div>

          {/* === MESSAGE === */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message/Case Details
            </label>
            <textarea
              rows={4}
              placeholder="Message or Case Details"
              className="w-full mt-1 border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* === CONSENT CHECKBOX === */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              required
            />
            <p className="text-sm text-gray-600 leading-snug">
              By checking the box, you agree to be contacted about your
              potential case or promotional legal offers sent by or on behalf of
              <strong> FusionByte Media, FindTheFirm </strong> and/or
              participating law firms. You may receive live calls, automated
              calls, emails, or text messages even if you are on a national or
              state “Do Not Call” list. Consent is not a condition of any
              purchase. Contact may include automated dialing or prerecorded
              messages.
            </p>
          </div>

          {/* === SUBMIT === */}
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>

      {/* ==== INFORMATION BOX SECTION ==== */}
      <section className="container mx-auto  px-6 lg:px-60 py-10 grid grid-cols-1 md:grid-cols-2 mt-[-30] ">
      {/* Card 1 */}
      <div className="bg-white text-center border border-grey-100 p-10 hover:shadow-2xl transition-shadow duration-300">
        <div className="flex justify-center mb-6">
          <div className="bg-transparent text-red-600">
            <Shield className="w-12 h-12" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Your Information is Always Safe
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
          We take privacy seriously. Any information you share is encrypted,
          never sold, and will only be used to assist you in finding qualified
          legal help.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white text-center border border-grey-100 p-10 hover:shadow-lg transition-shadow duration-300">
        <div className="flex justify-center mb-6">
          <div className="bg-transparent text-red-600">
            <HelpCircle className="w-12 h-12" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Still Wondering If You Have a Case?
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
          You don’t have to figure it out alone. Click below to fill out a
          quick, no-obligation case review. It’s fast, free, and could be the
          first step to securing justice.
        </p>
      </div>
    </section>
    </main>
  );
}
