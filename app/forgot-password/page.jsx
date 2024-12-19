import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { defaultMetadata } from "@/config/metadata";

export const metadata = {
  ...defaultMetadata,
  title: "Reset Password | Prime Plus Mortgages",
  description: "Reset your Prime Plus Mortgages admin portal password.",
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
    description: "Reset your Prime Plus Mortgages admin portal password.",
  },
};

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
}
