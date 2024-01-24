import React from "react";

const CompanyOverviewSection = () => {
    return (
        <section className="py-12 bg-sky-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-cyan-600 mb-6">
                    About MortgageCo
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-lg leading-relaxed text-gray-700">
                            At MortgageCo, we understand that finding the right
                            mortgage solution can be daunting. With over 20
                            years of experience in the mortgage industry, we
                            specialize in guiding our clients through the
                            process with expertise and personalized service.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Our team of dedicated mortgage professionals is
                            committed to providing competitive rates, flexible
                            options, and a hassle-free experience. Whether
                            you&apos;re a first-time homebuyer or looking to
                            refinance, we&apos;re here to find the mortgage plan
                            that&apos;s perfect for you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyOverviewSection;
