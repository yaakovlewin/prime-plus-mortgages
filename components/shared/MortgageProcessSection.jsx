import ProcessSection from "../HomePage/ProcessSection";

const MortgageProcessSection = () => {
  const mortgageProcessItems = [
    {
      title: "Step 1: Begin with Insight",
      subtitle: "Initial Consultation",
      description:
        "Embark on your property journey with a personalized, face-to-face consultation. Our experts offer tailored advice, designed to align precisely with your investment goals or homebuying dreams. This is where your vision starts to take shape, informed by our deep understanding and commitment to your success.",
      iconSrc: "/images/meeting-svgrepo-com (2).svg",
    },
    {
      title: "Step 2: Streamline Your Path",
      subtitle: "Application & Documentation",
      description:
        "Navigate our simplified application process with ease. We value your time and ask only for essential documentation to move forward: ID, Proof of Address, Income Proof, Portfolio Spreadsheet (if applicable). This step ensures we have all we need to tailor the mortgage solution that best fits your unique scenario.",
      iconSrc: "/images/mortgage-contract-svgrepo-com (1).svg",
    },
    {
      title: "Step 3: Cross the Finish Line",
      subtitle: "Approval & Closing",
      description:
        "Experience rapid progress toward your goals with our expedited approval process. We work diligently to review your application and documents, aiming for a swift approval so you can finalize your mortgage terms. With Prime Plus Mortgages, step into the future of your investment or dream home with confidence and peace of mind.",
      iconSrc: "/images/mortgage-svgrepo-com (2).svg",
    },
  ];

  return (
    <ProcessSection
      title="How the Mortgage Process Works with us"
      items={mortgageProcessItems}
    />
  );
};

export default MortgageProcessSection;
