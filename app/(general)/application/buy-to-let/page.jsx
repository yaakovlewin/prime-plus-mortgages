"use client";
import RenderForm from "@/components/application/form/RenderForm";
import { buyToLetConfig } from "@/js/config/applicationConfigs";

export default function firstTimeBuyer() {
  return <RenderForm config={buyToLetConfig} />;
}
