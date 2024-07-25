"use client";
import RenderForm from "@/components/application/form/RenderForm";
import {
  buyToLetConfig,
  firstTimeBuyerConfig,
  remortgageConfig,
} from "@/js/config/applicationConfigs";

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
  const config = getConfig(slug);

  if (!config) {
    throw new Error(`Sorry, your form option ${slug} isn't available`);
  }

  return <RenderForm config={config} />;
}
