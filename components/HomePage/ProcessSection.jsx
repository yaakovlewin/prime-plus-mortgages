import Image from "next/image";
import SectionContainer from "../layout/SectionContainer";
import BrickWallContainer from "../shared/BrickWallContainer";
import Heading2 from "../shared/Heading2";

const ProcessSection = ({ title, items }) => {
  return (
    <SectionContainer>
      <Heading2>{title}</Heading2>
      <BrickWallContainer>
        <div className="grid gap-10 px-4 text-center text-cyan-50 md:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="mb-6 md:mb-0">
              <div className="h-44">
                <h2 className="mb-4 h-16 font-exo2 text-2xl font-semibold text-cyan-100">
                  {item.title}
                </h2>
                <div className="mb-5">
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    width={200}
                    height={80}
                    className="mx-auto mb-3 h-20 w-44"
                  />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-cyan-300">
                {item.subtitle}
              </h3>
              <p className="text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </BrickWallContainer>
    </SectionContainer>
  );
};

export default ProcessSection;
