import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-sky-100 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow-md">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-3xl font-bold text-cyan-600">
              Privacy Policy
            </h2>

            <p className="mb-4 text-gray-700">Effective date: [Date]</p>
            <p className="mb-4 text-gray-700">
              [Your Company Name] we operates the [Website URL] website
              (hereinafter referred to as the &quot;Service&quot;).
            </p>

            <h3 className="mb-4 mt-6 text-xl font-semibold text-gray-800">
              Information Collection and Use
            </h3>
            <p className="mb-4 text-gray-700">
              We collect several different types of information for various
              purposes to provide and improve our Service to you. This may
              include, but is not limited to:
              <ul className="ml-5 mt-2 list-disc">
                <li>
                  Personal Data such as name, email address, phone number.
                </li>
                <li>Employment details for assessing loan eligibility.</li>
                <li>
                  Property information relevant to your mortgage application.
                </li>
                <li>
                  Other information relevant to customer surveys and/or offers.
                </li>
              </ul>
            </p>

            <h3 className="mb-4 mt-6 text-xl font-semibold text-gray-800">
              Use of Data
            </h3>
            <p className="mb-4 text-gray-700">
              [Your Company Name] uses the collected data for various purposes,
              including:
              <ul className="ml-5 mt-2 list-disc">
                <li>To provide and maintain our Service.</li>
                <li>To notify you about changes to our Service.</li>
                <li>To provide customer support.</li>
                <li>
                  To gather analysis or valuable information so that we can
                  improve our Service.
                </li>
                <li>To monitor the usage of our Service.</li>
                <li>To detect, prevent, and address technical issues.</li>
              </ul>
            </p>

            {/* Continue with other sections such as "Data Sharing", "Security", "Your Rights", "Children's Privacy", "Changes to This Privacy Policy", etc. */}
          </div>
        </div>
      </div>
    </div>
  );
}
