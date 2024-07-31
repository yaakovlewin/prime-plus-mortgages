"use client";
import RenderForm from "@/components/application/form/RenderForm";
import ServicesOverview from "@/components/HomePage/ServicesOverview";
import {
  buyToLetConfig,
  firstTimeBuyerConfig,
  remortgageConfig,
} from "@/js/config/applicationConfigs";
import servicesData from "@/js/servicesData";
import { getFormConfigByType } from "@/js/utils/getFormConfigByType";

function getConfig(slug) {
  switch (slug) {
    case "first-time-buyer":
      return firstTimeBuyerConfig;
    case "buy-to-let":
      return buyToLetConfig;
    case "remortgages":
      return remortgageConfig;
    default:
      return null;
  }
}

export default function MortgageApplicationForm({ params: { slug } }) {
  const config = getFormConfigByType(slug);

  if (!config) {
    throw new Error(`Sorry, your form option ${slug} isn't available`);
  }

  return (
    <>
      <RenderForm config={config} />
      <h1 className="mb-8 text-center text-3xl font-bold text-sky-900">
        Other Services
      </h1>
      <ServicesOverview services={services} />
    </>
  );
}
