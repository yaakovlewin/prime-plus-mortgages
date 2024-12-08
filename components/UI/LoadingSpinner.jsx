import Image from "next/image";

export default function LoadingSpinner({ size = "medium" }) {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-8 w-8",
    large: "h-12 w-12",
  };

  const dimensions = {
    small: 16,
    medium: 32,
    large: 48,
  };

  return (
    <div className="flex items-center justify-center">
      <Image
        src="/images/icons/spinner.svg"
        alt="Loading"
        width={dimensions[size]}
        height={dimensions[size]}
        className={`${sizeClasses[size]} animate-spin`}
        priority
        unoptimized
        role="status"
        aria-label="Loading"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function FullPageSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoadingSpinner size="large" />
    </div>
  );
}
