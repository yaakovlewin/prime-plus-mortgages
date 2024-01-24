import React from "react";

const LocationMapSection = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    {/* Replace `src` with your location embed link */}
                    <iframe
                        width="100%"
                        height="400"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?hl=en&q=Your+Location&ie=UTF8&t=roadmap&z=14&iwloc=B&output=embed"
                        title="Our Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default LocationMapSection;
