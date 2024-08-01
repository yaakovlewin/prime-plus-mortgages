import BrickWallContainer from "@/components/common/BrickWallContainer";
import Heading2 from "@/components/common/Heading2";
import servicesData from "@/js/servicesData"; // Adjust the path as necessary
import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <>
      <BrickWallContainer>
        <section className="2xl:py-12">
          <div className="container mx-auto px-4">
            <Heading2 className={"text-sky-950 sm:text-4xl"}>
              Our Services
            </Heading2>
            <div className="grid gap-6 text-center md:grid-cols-3">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className="rounded-lg bg-white p-4 shadow"
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={150}
                    height={150}
                    className="mb-4 h-64 w-full rounded object-cover transition-opacity duration-500 hover:opacity-75   "
                  />
                  <h3 className="mb-2 text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                  <Link
                    href={`/services${service.url}`}
                    className="mt-4 inline-block rounded bg-cyan-500 px-4 py-2 font-bold text-white hover:bg-cyan-600"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </BrickWallContainer>
    </>
  );
};

export default ServicesSection;
