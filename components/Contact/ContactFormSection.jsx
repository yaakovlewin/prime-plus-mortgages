"use client";
import { useContactForm } from "hooks/useContactForm";

const ContactFormSection = () => {
  const { register, errors, isSubmitting, onSubmit } = useContactForm();

  return (
    <section
      className="bg-slate-100 py-12 text-center"
      aria-label="Contact Form"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-lg">
          <form
            className="rounded-lg bg-white p-8 shadow-lg"
            onSubmit={onSubmit}
            noValidate
          >
            {errors.submit && (
              <div
                className="mb-6 rounded-md bg-red-50 p-4 text-red-600"
                role="alert"
              >
                {errors.submit.message}
              </div>
            )}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                }`}
                {...register("name")}
              />
              {errors.name && (
                <p
                  className="mt-1 text-sm text-red-600"
                  id="name-error"
                  role="alert"
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p
                  className="mt-1 text-sm text-red-600"
                  id="email-error"
                  role="alert"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Enter your message..."
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                }`}
                {...register("message")}
              />
              {errors.message && (
                <p
                  className="mt-1 text-sm text-red-600"
                  id="message-error"
                  role="alert"
                >
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              className={`inline-flex w-full items-center justify-center rounded-md bg-cyan-600 px-4 py-2 font-semibold text-white transition-colors ${
                isSubmitting
                  ? "cursor-not-allowed opacity-75"
                  : "hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="mr-2 h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
