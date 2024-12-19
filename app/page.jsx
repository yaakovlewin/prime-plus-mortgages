import CompanyValuesSection from "@/components/HomePage/CompanyValueSection";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesCards from "@/components/HomePage/ServicesCards";
import { defaultMetadata } from "@/config/metadata";

export const metadata = {
  ...defaultMetadata,
  title:
    "Prime Plus Mortgages | Expert Mortgage Brokers in Salford & Manchester",
  description:
    "Leading mortgage brokers in Salford & Manchester offering expert advice on residential, buy-to-let, commercial mortgages, and development finance. FCA regulated with competitive rates.",
  keywords: [
    ...defaultMetadata.keywords.split(", "),
    "mortgage advice Salford",
    "mortgage solutions Manchester",
    "residential mortgages",
    "buy to let mortgages",
    "commercial property finance",
    "development finance",
    "bridging loans",
  ].join(", "),
  openGraph: {
    ...defaultMetadata.openGraph,
    title:
      "Prime Plus Mortgages | Expert Mortgage Brokers in Salford & Manchester",
    description:
      "Leading mortgage brokers in Salford & Manchester offering expert advice on residential, buy-to-let, commercial mortgages, and development finance. FCA regulated with competitive rates.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesCards />
      {/* <MortgageCalculator /> */}
      {/* <MortgageProcessSection /> */}
      {/* <Faq /> */}
      {/* <TestimonialsSection /> */}
      {/* <OurLocationSection /> */}
      <CompanyValuesSection />
    </>
  );
}
