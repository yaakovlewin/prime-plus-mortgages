"use client";
import MainForm from "@/components/application/RenderForm";
import { firstTimeBuyerConfig } from "@/js/config/applicationConfigs";

export default function firstTimeBuyer() {
  return <MainForm config={firstTimeBuyerConfig} />;
}
