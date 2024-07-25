import servicesData from "@/js/servicesData";
import Link from "next/link";

export default function GetStarted() {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center bg-gray-100 p-4">
      {/* Header Section */}
      <h1 className="mb-6 text-5xl font-extrabold text-gray-900">
        Choose Your Form Application
      </h1>

      {/* Button Links Section */}
      <div className="flex flex-wrap justify-center gap-4">
        {servicesData.map((service) => (
          <Link key={service.id} href={`/application/${service.url}`}>
            <div className="transform cursor-pointer rounded-lg bg-blue-500 px-6 py-3 text-center text-xl font-medium text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600">
              {service.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
