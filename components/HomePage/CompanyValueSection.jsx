import ProcessSection from "./ProcessSection";

const CompanyValuesSection = () => {
  const companyValueItems = [
    {
      title: "Innovative Solutions",
      subtitle: "Creative Deal Analysis",
      description: `We approach each mortgage with a fresh mindset, finding unique and creative solutions to secure the best options.
         Our innovative approach means thinking outside the box and developing creative strategies to
          overcome any lending challenges.`,
      iconSrc: "/images/icons/values/innovative.svg",
    },
    {
      title: "Ambitious Goals",
      subtitle: "Pushing Boundaries",
      description:
        "We actively challenge lenders to stretch their limits for you. Our ambitious approach means negotiating to extend criteria, enhance rates, and expand allowances until we've secured the optimal mortgage solution for your needs.",
      iconSrc: "/images/icons/values/ambitious.svg",
    },
    {
      title: "Efficient Execution",
      subtitle: "Swift Professional Service",
      description:
        "Our strong relationships with banks and lenders enable us to streamline your mortgage journey. Combined with our professional handling of applications, this network of partnerships ensures swift, accurate processing and exceptional service delivery.",
      iconSrc: "/images/icons/values/efficiency.svg",
    },
  ];

  return <ProcessSection title="Our Core Values" items={companyValueItems} />;
};

export default CompanyValuesSection;
