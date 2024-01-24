import React from "react";

const ContactFormSection = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <form action="#" method="POST">
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Your Message"
                                className="w-full px-4 py-2 border rounded-md"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-md"
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
