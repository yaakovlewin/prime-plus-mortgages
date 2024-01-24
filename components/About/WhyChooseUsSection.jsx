import React from "react";

const WhyChooseUsSection = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-cyan-600 mb-6">
                    Why Choose Prime Plus Mortgages
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    {/* Unique Selling Point 1 */}
                    <div>
                        <h3 className="text-xl font-bold mb-2">
                            Personalized Solutions
                        </h3>
                        <p className="text-gray-600">
                            Every client is unique, so we tailor mortgage
                            solutions to fit your individual needs, ensuring you
                            get the best possible terms.
                        </p>
                    </div>
                    {/* Unique Selling Point 2 */}
                    <div>
                        <h3 className="text-xl font-bold mb-2">
                            Expert Guidance
                        </h3>
                        <p className="text-gray-600">
                            Our experienced advisors offer expert guidance
                            throughout the mortgage process, making it smooth
                            and stress-free.
                        </p>
                    </div>
                    {/* Unique Selling Point 3 */}
                    <div>
                        <h3 className="text-xl font-bold mb-2">
                            Comprehensive Services
                        </h3>
                        <p className="text-gray-600">
                            From first-time homebuyers to refinancing, our
                            comprehensive services make us your one-stop shop
                            for all your mortgage needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
