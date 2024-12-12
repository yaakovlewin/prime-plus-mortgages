"use client";

import { sendPasswordResetLink } from "@/js/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function ForgotPasswordForm() {
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [debugInfo, setDebugInfo] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    if (isLoading) return;
    setServerError("");
    setDebugInfo(null);
    setIsLoading(true);

    try {
      console.log("Starting password reset process in form...");
      const { success, error, debug } = await sendPasswordResetLink(data.email);
      console.log("Password reset response:", { success, error, debug });

      if (error) {
        setDebugInfo(debug);
        throw new Error(error.message);
      }

      if (success) {
        setEmailSent(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setServerError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className="space-y-6">
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-600">
          <h3 className="text-lg font-medium">Check your email</h3>
          <p className="mt-2">
            We&apos;ve sent you a password reset link. Please check your email
            and follow the instructions to reset your password.
          </p>
        </div>
        <div className="text-center">
          <Link
            href="/login"
            className="text-sm text-sky-600 hover:text-sky-500"
          >
            Return to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Forgot Password</h2>
        <p className="mt-2 text-sm text-gray-600">
          Enter your email address and we&apos;ll send you a link to reset your
          password.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {serverError && (
          <div
            className="relative rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-600"
            role="alert"
          >
            <span className="block sm:inline">{serverError}</span>
          </div>
        )}

        {debugInfo && process.env.NODE_ENV === "development" && (
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-yellow-800">
            <h4 className="font-medium">Debug Information:</h4>
            <pre className="mt-2 overflow-auto text-xs">
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-sky-900"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              {...register("email")}
              type="email"
              id="email"
              autoComplete="email"
              className={`block w-full appearance-none rounded-lg border px-3 py-2.5 placeholder-gray-400 shadow-sm transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 sm:text-sm ${
                errors.email ? "border-red-300" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full justify-center rounded-lg border border-transparent bg-sky-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center space-x-2">
                <Image
                  src="/images/icons/spinner.svg"
                  alt="Loading"
                  width={16}
                  height={16}
                  className="h-4 w-4 animate-spin"
                  priority
                />
                <span>Sending...</span>
              </span>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </div>

        <div className="text-center">
          <Link
            href="/login"
            className="text-sm text-sky-600 hover:text-sky-500"
          >
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
}
