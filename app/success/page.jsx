import SuccessContent from "@/components/shared/SuccessContent";
import { defaultMetadata } from "@/config/metadata";
import { Suspense } from "react";

// Disable static rendering for this page
export const dynamic = "force-dynamic";

export const metadata = {
  ...defaultMetadata,
  title: "Submission Successful | Prime Plus Mortgages",
  description:
    "Your form has been successfully submitted to Prime Plus Mortgages.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Submission Successful | Prime Plus Mortgages",
    description:
      "Your form has been successfully submitted to Prime Plus Mortgages.",
  },
};

export default function FormSuccessPage() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-sky-100"
      role="main"
      aria-label="Success Page"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </div>
  );
}
