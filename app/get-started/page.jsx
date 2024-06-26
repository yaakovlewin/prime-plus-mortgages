import Link from "next/link";

export default function getStarted() {
  return (
    <div>
      {/* choose your form application */}
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Choose your form application</h1>
        <div className="mt-10 flex flex-col items-center justify-center space-y-4">
          <Link
            href="/application/buy-to-let"
            className="rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Buy to let
          </Link>
          <Link
            href="/application/first-time-buyer"
            className="rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            First time buyer
          </Link>
        </div>
      </div>
    </div>
  );
}
