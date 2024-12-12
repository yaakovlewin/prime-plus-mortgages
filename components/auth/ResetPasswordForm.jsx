"use client";

import { resetPassword } from "@/js/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don&apos;t match",
    path: ["confirmPassword"],
  });

export default function ResetPasswordForm({ oobCode }) {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetComplete, setResetComplete] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    if (isLoading) return;
    setServerError("");
    setIsLoading(true);

    try {
      const { success, error } = await resetPassword(oobCode, data.password);

      if (error) {
        throw new Error(error.message);
      }

      if (success) {
        setResetComplete(true);
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      }
    } catch (err) {
      setServerError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (resetComplete) {
    return (
      <div className="space-y-6">
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-600">
          <h3 className="text-lg font-medium">Password Reset Complete</h3>
          <p className="mt-2">
            Your password has been successfully reset. You will be redirected to
            the login page shortly.
          </p>
        </div>
        <div className="text-center">
          <Link
            href="/login"
            className="text-sm text-sky-600 hover:text-sky-500"
          >
            Go to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
        <p className="mt-2 text-sm text-gray-600">
          Please enter your new password below.
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

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-sky-900"
          >
            New Password
          </label>
          <div className="mt-1">
            <input
              {...register("password")}
              type="password"
              id="password"
              className={`block w-full appearance-none rounded-lg border px-3 py-2.5 placeholder-gray-400 shadow-sm transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 sm:text-sm ${
                errors.password ? "border-red-300" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-sky-900"
          >
            Confirm Password
          </label>
          <div className="mt-1">
            <input
              {...register("confirmPassword")}
              type="password"
              id="confirmPassword"
              className={`block w-full appearance-none rounded-lg border px-3 py-2.5 placeholder-gray-400 shadow-sm transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 sm:text-sm ${
                errors.confirmPassword ? "border-red-300" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword.message}
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
                <span>Resetting...</span>
              </span>
            ) : (
              "Reset Password"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
