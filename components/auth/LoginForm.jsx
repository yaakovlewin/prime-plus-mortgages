"use client";
import { loginWithEmail, loginWithGoogle } from "@/js/services/authService";
import { loginSchema } from "@/js/zod/loginValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Cleanup effect
  useEffect(() => {
    return () => {
      // Reset form and loading states on unmount
      reset();
      setIsLoading(false);
      setIsGoogleLoading(false);
      setServerError("");
    };
  }, [reset]);

  const handleGoogleSignIn = async () => {
    if (isGoogleLoading) return; // Prevent multiple clicks
    setServerError("");
    setIsGoogleLoading(true);

    try {
      const { user, error: loginError } = await loginWithGoogle();

      if (loginError) {
        // For user-cancelled or popup-blocked errors, just show the message without the error styling
        if (
          loginError.code === "auth/popup-closed-by-user" ||
          loginError.code === "auth/popup-blocked"
        ) {
          setServerError(loginError.message);
          return;
        }
        throw new Error(loginError.message);
      }

      if (user) {
        router.push("/admin");
      }
    } catch (err) {
      setServerError(err.message);
    } finally {
      // Only reset loading state if component is still mounted
      setIsGoogleLoading(false);
    }
  };

  const onSubmit = async (data) => {
    if (isLoading) return; // Prevent multiple submissions
    setServerError("");
    setIsLoading(true);

    try {
      const { user, error: loginError } = await loginWithEmail(
        data.email,
        data.password,
      );

      if (loginError) {
        // Handle specific error cases
        if (loginError.code === "auth/timeout") {
          throw new Error(
            "Login timed out. Please check your internet connection and try again.",
          );
        }
        if (loginError.code === "auth/network-request-failed") {
          throw new Error(
            "Network error. Please check your internet connection and try again.",
          );
        }
        throw new Error(loginError.message);
      }

      if (user) {
        router.push("/admin");
      }
    } catch (err) {
      setServerError(err.message);
      // Reset form on critical errors
      if (err.message.includes("network") || err.message.includes("timeout")) {
        reset();
      }
    } finally {
      // Only reset loading state if component is still mounted
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {serverError && (
          <div
            className={`relative rounded-lg border px-4 py-3 ${
              serverError.includes("cancelled") ||
              serverError.includes("blocked")
                ? "border-gray-200 bg-gray-50 text-gray-600"
                : "border-red-200 bg-red-50 text-red-600"
            }`}
            role="alert"
          >
            <span className="block sm:inline">{serverError}</span>
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
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-sky-900"
            >
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-sky-600 hover:text-sky-500"
            >
              Forgot password?
            </Link>
          </div>
          <div className="mt-1">
            <input
              {...register("password")}
              type="password"
              id="password"
              autoComplete="current-password"
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
                <span>Signing in...</span>
              </span>
            ) : (
              "Sign in"
            )}
          </button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div>
        <button
          onClick={handleGoogleSignIn}
          disabled={isGoogleLoading}
          className="flex w-full items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isGoogleLoading ? (
            <span className="flex items-center space-x-2">
              <Image
                src="/images/icons/spinner.svg"
                alt="Loading"
                width={16}
                height={16}
                className="h-4 w-4 animate-spin"
                priority
              />
              <span>Signing in...</span>
            </span>
          ) : (
            <>
              <Image
                src="/images/icons/google.svg"
                alt="Google"
                width={20}
                height={20}
                className="h-5 w-5"
                priority
              />
              <span>Sign in with Google</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
