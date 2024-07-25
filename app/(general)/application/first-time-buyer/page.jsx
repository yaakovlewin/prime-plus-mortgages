"use client";
import RenderForm from "@/components/application/form/RenderForm";
import { firstTimeBuyerConfig } from "@/js/config/applicationConfigs";

export default function firstTimeBuyer() {
  return <RenderForm config={firstTimeBuyerConfig} />;
}
