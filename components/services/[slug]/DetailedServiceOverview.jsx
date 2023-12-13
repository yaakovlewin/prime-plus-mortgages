const DetailedServiceOverview = ({ service }) => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {service.title} - Overview
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {service.details.map((detail, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-semibold mb-2">
                                {detail.title}
                            </h3>
                            <p>{detail.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DetailedServiceOverview;
