"use client"; // Error components must be Client Components

import FormHeroSection from "@/components/FormHeroSection";
import Heading2 from "@/components/common/Heading2";
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
      <FormHeroSection>
        <Heading2 className="text-4xl tracking-wider text-red-500">
          404 - Page Not Found
        </Heading2>
      </FormHeroSection>
      <div className="flex h-screen flex-col items-center justify-center">
        <h2 className="text-2xl font-bold tracking-wider text-red-400">
          {error.message}
        </h2>
        <p className="text-2xl font-bold tracking-wider text-gray-600">
          <Link href="/" className="text-sky-500 hover:text-sky-700">
            {" "}
            click here{" "}
          </Link>
          to see valid form options.
        </p>

        {/* return to previouse page */}
        <div className="flex">
          <button
            className="mx-10 mt-3  rounded bg-sky-500 p-2 text-white hover:bg-sky-700"
            onClick={() => reset()}
          >
            Try again
          </button>
          <p className="my-auto text-xl font-bold tracking-wider ">Or</p>
          <button
            className="mx-10 mt-3 rounded  bg-sky-500 p-2 text-white hover:bg-sky-700"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
