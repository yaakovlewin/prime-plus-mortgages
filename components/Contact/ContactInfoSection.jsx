import React from "react";

const ContactInfoSection = () => {
    return (
        <section className="py-12 bg-sky-100">
            <div className="container mx-auto px-4 text-center">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            Our Office
                        </h3>
                        <p className="text-gray-700">
                            123 Mortgage St., Finance City
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                        <p className="text-gray-700">+1 234 567 890</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <p className="text-gray-700">contact@mortgageco.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfoSection;
