"use client";
import { useRouter } from "next/navigation";
const ContactFormSection = () => {
  const router = useRouter();

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...Object.fromEntries(new FormData(form)),
      }),
    })
      .then(() => router.push("/success"))
      .catch((error) => alert(error));
  };
  return (
    <section className="bg-slate-100 py-12 text-center">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-lg">
          <form
            name="contact"
            data-netlify="true"
            data-netlify-recaptcha="true"
            method="POST"
            className="rounded-lg bg-white p-8 shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label htmlFor="name" className="mb-2 block text-sm">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
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
                rows="4"
                placeholder="Enter your message..."
                className="w-full rounded-md border border-gray-300 px-3 py-2 ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              ></textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <input type="hidden" name="contact" value="contact" />
            <button
              type="submit"
              className="rounded-md bg-cyan-600 px-4 py-2 font-semibold text-white hover:bg-cyan-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
