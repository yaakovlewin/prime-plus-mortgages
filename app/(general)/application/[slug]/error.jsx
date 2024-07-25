"use client"; // Error components must be Client Components

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  console.log(error);

  const router = useRouter();

  return (
    <div>
      <h2>Error: {error.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-4xl tracking-wider">404 - Page Not Found</h1>
        <h2 className="text-2xl tracking-wider text-red-500">
          {error.message}
        </h2>
        <p className="text-2xl tracking-wider text-red-500">
          Please
          <Link href="/" className="text-sky-500 hover:text-sky-700">
            {" "}
            click here{" "}
          </Link>
          to see valid form options.
        </p>
        <p className="text-2xl tracking-wider ">Or</p>
        {/* return to previouse page */}
        <div className="flex">
          <button
            className="mx-10 mt-3  rounded bg-sky-500 p-2 text-white hover:bg-sky-700"
            onClick={() => reset()}
          >
            Try again
          </button>
          <button
            className="mt-3 rounded  bg-sky-500 p-2 text-white hover:bg-sky-700"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
