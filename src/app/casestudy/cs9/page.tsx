"use client";

import { checkIsOnDemandRevalidate } from "next/dist/server/api-utils";
import { useState } from "react";

export default function InstitutionalAbusePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    location: "",
    details: "",
    withinTwoYears: "",
    reported: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, ariaChecked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checkIsOnDemandRevalidate : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <main className="bg-white text-slate-800">
      {/* --- HERO SECTION --- */}
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
        <div className="absolute inset-0 bg-black/"></div>
        <div className="relative max-w-md space-y-4">
          <p className="text-blue-400 uppercase tracking-wide text-sm font-semibold">
            Free, Confidential Case Review
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Institutional Sexual Abuse Investigation
          </h1>
          <p className="text-gray-200 leading-relaxed">
            Sexual misconduct by staff, officers, or agents acting under the authority of major institutions is rising.
            When abuse occurs in places of trust — prisons, juvenile detention centers, or state-run facilities — the
            harm is amplified by power imbalances.
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

      {/* --- CONTENT SECTIONS (Below Hero) --- */}
      <section className="py-16 px-6 lg:px-32 text-gray-700 space-y-16">
        {/* Section 1 */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Were You or a Loved One Abused in a U.S. Institution?
          </h2>
          <p>
            Reports continue to expose widespread sexual abuse within
            government-operated and state-run facilities – particularly in
            correctional and juvenile institutions. Victims have come forward
            describing manipulation, coercion, and sexual violence committed by
            staff, officers, or agents entrusted with authority.
          </p>
          <p className="mt-4">
            Attorneys are investigating whether state institutions failed to
            prevent, report, or properly address sexual abuse that occurred
            under their supervision. Survivors may qualify for confidential
            legal action against negligent entities.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://findthefirm.com/wp-content/uploads/2025/10/download.webp"
            alt="Investigation"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-4">What’s Happening</h3>
            <p>
              Investigations have identified systemic abuse in several
              institutions, including:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>California Juvenile Detention Centers</li>
              <li>California Women’s Prison and Chowchilla Women’s Prison</li>
              <li>Illinois Juvenile Detention Centers</li>
            </ul>
            <p className="mt-3">
              These facilities are under legal scrutiny for allegedly allowing
              staff to engage in sexual misconduct, harassment, or exploitation.
            </p>
            <a
              href="#case-review"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
            >
              Assess Your Case
            </a>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Reports Include:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Sexual Assault and Rape</strong> – Forced or coerced
                sexual acts committed by those in authority.
              </li>
              <li>
                <strong>Grooming and Coercion</strong> – Staff exploiting trust
                before escalating to sexual acts.
              </li>
              <li>
                <strong>Sextortion</strong> – Demanding explicit photos, videos,
                or messages.
              </li>
              <li>
                <strong>Sex Trafficking</strong> – Victims coerced into sexual
                acts in exchange for safety or privileges.
              </li>
              <li>
                <strong>Exposure to Explicit Materials</strong> – Forcing
                victims to view or share sexual content.
              </li>
            </ul>
            <a
              href="#case-review"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
            >
              Assess Your Case
            </a>
          </div>
          <img
            src="https://findthefirm.com/wp-content/uploads/2025/10/download1.webp"
            alt="Institutional Abuse"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Section 3 */}
       

        {/* Section 4 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://findthefirm.com/wp-content/uploads/2025/10/LingeringEffectsSexualTraumaxGettyImages-1329102109-1120x640-1-1024x585.jpg"
            alt="Who May Qualify"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who May Qualify</h3>
            <p>
              You may be eligible for a{" "}
              <strong>free, confidential case review</strong> if you or your
              loved one experienced sexual abuse in:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>California juvenile detention centers</li>
              <li>California women’s prisons (including Chowchilla)</li>
              <li>Illinois juvenile detention centers</li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            100% Confidential | No Obligation | Free Consultation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            If you or a loved one suffered sexual abuse in one of these
            institutions, you may qualify for a{" "}
            <strong>free, confidential legal consultation.</strong>
          </p>
        </div>

        {/* Section 6 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">What You’ll Receive</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Free Legal Consultation:</strong> No cost to review your
                claim.
              </li>
              <li>
                <strong>Confidential Review:</strong> All details handled
                discreetly.
              </li>
              <li>
                <strong>National Legal Network:</strong> Experienced attorneys
                across the U.S.
              </li>
              <li>
                <strong>No Upfront Fees:</strong> You pay only if compensation is
                secured.
              </li>
            </ul>
            <a
              href="#case-review"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
            >
              Assess Your Case
            </a>
          </div>
          <img
            src="https://findthefirm.com/wp-content/uploads/2025/10/what-is-my-sexual-assault-case-worth.tmb-cfthumb-1024x683.webp"
            alt="Legal Consultation"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Legal Notice */}
        <div className="text-center text-gray-600 border-t pt-8">
          <p className="font-semibold">Important Legal Notice</p>
          <p className="mt-2 text-sm max-w-3xl mx-auto">
            Attorney advertisement. This page provides general information and
            does not constitute legal advice. Submitting information does not
            create an attorney-client relationship. Prior outcomes do not
            guarantee future results. Representation is provided by licensed
            attorneys.
          </p>
        </div>
      </section>
    </main>
  );
}
