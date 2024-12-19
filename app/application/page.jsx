import { defaultMetadata } from "@/config/metadata";
import ApplicationForm from "./ApplicationForm";

export const metadata = {
  ...defaultMetadata,
  title: "Apply for a Mortgage | Prime Plus Mortgages",
  description:
    "Start your mortgage application with Prime Plus Mortgages. Expert guidance for residential, buy-to-let, commercial mortgages and more. Simple online application process.",
  keywords: [
    ...defaultMetadata.keywords.split(", "),
    "mortgage application",
    "apply for mortgage",
    "online mortgage application",
    "mortgage application form",
    "start mortgage application",
  ].join(", "),
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Apply for a Mortgage | Prime Plus Mortgages",
    description:
      "Start your mortgage application with Prime Plus Mortgages. Expert guidance for residential, buy-to-let, commercial mortgages and more. Simple online application process.",
  },
};

export default function ApplicationPage() {
  return <ApplicationForm />;
}
