"use client";
import RenderForm from "@/components/application/form/RenderForm";
import { getFormConfigByType } from "@/js/utils/getFormConfigByType";

export default function MortgageApplicationForm({ params: { type } }) {
  const config = getFormConfigByType(type);
  console.log(config);

  if (!config) {
    throw new Error(`Sorry, your form option ${type} isn't available`);
  }

  return <RenderForm config={config} />;
}
