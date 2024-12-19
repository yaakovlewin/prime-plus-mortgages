import LoginForm from "@/components/auth/LoginForm";
import { defaultMetadata } from "@/config/metadata";

export const metadata = {
  ...defaultMetadata,
  title: "Admin Login | Prime Plus Mortgages",
  description: "Secure access portal for Prime Plus Mortgages administrators.",
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
    title: "Admin Login | Prime Plus Mortgages",
    description:
      "Secure access portal for Prime Plus Mortgages administrators.",
  },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-cyan-50 heropattern-brickwall-sky-300/50">
      <div className="bg-sky-800 bg-opacity-80 py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <svg
              className="h-12 w-12 text-cyan-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-white">
            Admin Login
          </h2>
          <p className="mt-2 text-center text-sm text-cyan-100">
            Secure access to Prime Plus Mortgages admin portal
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="rounded-lg bg-white px-6 py-8 shadow-lg sm:px-10">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
