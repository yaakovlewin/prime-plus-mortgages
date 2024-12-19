"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessInner() {
  const searchParams = useSearchParams();
  const formType = searchParams.get("type") || "form";

  const messages = {
    contact: {
      title: "Message Sent Successfully!",
      description:
        "Thank you for reaching out. We have received your message and will get back to you as soon as possible.",
    },
    application: {
      title: "Application Submitted Successfully!",
      description:
        "Thank you for your application. We have received your submission and will review it shortly.",
    },
    form: {
      title: "Submission Successful!",
      description:
        "Thank you for your submission. We have received your information and will process it accordingly.",
    },
  };

  const { title, description } = messages[formType] || messages.form;

  return (
    <div className="mx-4 max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
      <div className="mb-6">
        <svg
          className="mx-auto h-16 w-16 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="mb-4 text-2xl font-bold text-cyan-600" tabIndex={0}>
        {title}
      </h1>

      <p className="mb-8 text-gray-700" tabIndex={0}>
        {description}
      </p>

      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        role="button"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default function SuccessContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessInner />
    </Suspense>
  );
}
