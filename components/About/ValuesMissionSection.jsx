import React from "react";

const ValuesMissionSection = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-cyan-600 mb-8">
                    Our Values & Mission
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Value 1 */}
                    <div className="bg-white rounded-lg shadow p-6 text-center">
                        <h3 className="text-xl font-semibold mb-3">
                            Integrity
                        </h3>
                        <p className="text-gray-600">
                            Upholding the highest standards of integrity in all
                            our actions.
                        </p>
                    </div>

                    {/* Value 2 */}
                    <div className="bg-white rounded-lg shadow p-6 text-center">
                        <h3 className="text-xl font-semibold mb-3">
                            Commitment
                        </h3>
                        <p className="text-gray-600">
                            Committed to delivering quality service and value to
                            our clients.
                        </p>
                    </div>

                    {/* Value 3 */}
                    <div className="bg-white rounded-lg shadow p-6 text-center">
                        <h3 className="text-xl font-semibold mb-3">
                            Expertise
                        </h3>
                        <p className="text-gray-600">
                            Continuously advancing our knowledge to better serve
                            your needs.
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-lg text-gray-700">
                        Our mission at MortgageCo is to empower clients to make
                        informed financial decisions by providing expert advice,
                        personalized solutions, and transparent services. We
                        strive to be your trusted partner in all things
                        mortgage.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ValuesMissionSection;
