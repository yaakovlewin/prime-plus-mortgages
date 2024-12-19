import ResetPasswordContent from "@/components/auth/ResetPasswordContent";
import { defaultMetadata } from "@/config/metadata";

export const metadata = {
  ...defaultMetadata,
  title: "Reset Password | Prime Plus Mortgages",
  description: "Set your new password for Prime Plus Mortgages admin portal.",
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
    title: "Reset Password | Prime Plus Mortgages",
    description: "Set your new password for Prime Plus Mortgages admin portal.",
  },
};

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <ResetPasswordContent />
      </div>
    </div>
  );
}
