import BrickWallContainer from "@/components/BrickWallContainer";
import iconMapping from "@/utils/iconMapping"; // iconMapping[icon] returns the icon component

const DetailedServiceOverview = ({ service }) => {
    

    return (
        <BrickWallContainer>
            <section className="text-cyan-50">
                <div className="container mx-auto px-4  ">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        {service.title} - Overview
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 ">
                        {service.details.map((detail, index) => {
                            const IconComponent = iconMapping[detail.icon];
                            return (
                            <div key={index} className="flex items-start">
                                <div className="mr-4 shrink-0">
                                    {IconComponent ? <IconComponent className="w-10 h-10 text-cyan-500" /> : null}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {detail.title}
                                    </h3>
                                    <p>{detail.description}</p>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </section>
        </BrickWallContainer>
    );
};

export default DetailedServiceOverview;
