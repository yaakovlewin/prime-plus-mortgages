"use client";

import ResetPasswordForm from "components/auth/ResetPasswordForm";
import { useSearchParams } from "next/navigation";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const oobCode = searchParams.get("oobCode");

  if (!oobCode) {
    return (
      <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
              <h3 className="text-lg font-medium">Invalid Reset Link</h3>
              <p className="mt-2">
                This password reset link is invalid or has expired. Please
                request a new password reset link.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <ResetPasswordForm oobCode={oobCode} />
        </div>
      </div>
    </div>
  );
}
