import ProcessSection from "./ProcessSection";

const CompanyValuesSection = () => {
  const companyValueItems = [
    {
      title: "Innovative Solutions",
      subtitle: "Cutting-Edge Approach",
      description:
        "We leverage the latest technology and market insights to provide innovative mortgage solutions. Our forward-thinking approach ensures you receive the most advanced and efficient financial services available, staying ahead of market trends and opportunities.",
      iconSrc: "/images/innovative.svg",
    },
    {
      title: "Ambitious Goals",
      subtitle: "Reaching Higher",
      description:
        "We set ambitious targets for both ourselves and our clients. Our dedication to excellence drives us to pursue the best possible outcomes, whether it's securing optimal rates or structuring complex mortgage solutions that align with your financial aspirations.",
      iconSrc: "/images/ambitious.svg",
    },
    {
      title: "Efficient Execution",
      subtitle: "Streamlined Process",
      description:
        "Time is valuable, and our efficient processes reflect this understanding. We've optimized every step of the mortgage journey to ensure swift, accurate, and professional service delivery while maintaining the highest standards of quality.",
      iconSrc: "/images/efficiency.svg",
    },
  ];

  return <ProcessSection title="Our Core Values" items={companyValueItems} />;
};

export default CompanyValuesSection;
