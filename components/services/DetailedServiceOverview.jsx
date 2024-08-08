import BrickWallContainer from "@/components/shared/BrickWallContainer";
import iconMapping from "@/utils/iconMapping"; // iconMapping[icon] returns the icon component

export default function DetailedServiceOverview({ service }) {
  return (
    <BrickWallContainer>
      <section className="text-cyan-50">
        <div className="container mx-auto px-4  ">
          <h2 className="mb-6 text-center text-xl font-bold">
            {service.title} - Overview
          </h2>
          <div className="grid gap-6 md:grid-cols-2 ">
            {service.details.map((detail, index) => {
              const IconComponent = iconMapping[detail.icon];
              return (
                <div key={index} className="flex items-start">
                  <div className="mr-4 shrink-0">
                    {IconComponent ? (
                      <IconComponent className="h-10 w-10 text-cyan-500" />
                    ) : null}
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {detail.title}
                    </h3>
                    <p className="text-sm">{detail.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </BrickWallContainer>
  );
}
