"use client";
import RenderForm from "@/components/application/form/RenderForm";
import { getFormConfigByType } from "@/js/utils/getFormConfigByType";

// Disable static rendering for this page
export const dynamic = "force-dynamic";

export default function MortgageApplicationForm({ params: { type } }) {
  const config = getFormConfigByType(type);

  if (!config) {
    throw new Error(`Sorry, your form option ${type} isn't available`);
  }

  return <RenderForm config={config} />;
}
