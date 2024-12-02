"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ContactFormSection = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      router.push("/success");
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-100 py-12 text-center">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-lg">
          <form
            className="rounded-lg bg-white p-8 shadow-lg"
            onSubmit={handleSubmit}
          >
            {error && (
              <div className="mb-6 rounded-md bg-red-50 p-4 text-red-600">
                {error}
              </div>
            )}
            <div className="mb-6">
              <label htmlFor="name" className="mb-2 block text-sm">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
                className="w-full rounded-md border border-gray-300 px-3 py-2 ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block text-sm">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full rounded-md border border-gray-300 px-3 py-2 ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                placeholder="Enter your message..."
                className="w-full rounded-md border border-gray-300 px-3 py-2 ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`rounded-md bg-cyan-600 px-4 py-2 font-semibold text-white transition-colors ${
                isSubmitting
                  ? "cursor-not-allowed opacity-75"
                  : "hover:bg-cyan-700"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
