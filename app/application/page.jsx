import FormHeroSection from "@/components/FormHeroSection";
import ServiceCard from "@/components/common/ServiceCard";
import servicesData from "@/js/servicesData";
import Link from "next/link";

export default function GetStarted() {
  return (
    <div className="container mx-auto min-h-screen bg-sky-100 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <FormHeroSection>
        <h1 className="mb-8 text-center text-3xl font-bold text-sky-900">
          Choose Your Application Type
        </h1>
      </FormHeroSection>

      {/* Button Links Section */}
      <div className="grid gap-6 md:grid-cols-5">
        {servicesData.map((service) => (
          <Link key={service.id} href={`/application/${service.url}`}>
            <ServiceCard {...service} prefix={"application"}>
              Apply
            </ServiceCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// const applicationTypes = [
//   {
//     id: "first-time-buyer",
//     title: "First Time Buyer",
//     description: "For those purchasing their first home",
//     icon: "🏠",
//   },
//   {
//     id: "remortgage",
//     title: "Remortgage",
//     description: "Switch your existing mortgage to a new deal",
//     icon: "🔄",
//   },
//   {
//     id: "buy-to-let",
//     title: "Buy to Let",
//     description: "For property investments and rentals",
//     icon: "🏘️",
//   },
//   {
//     id: "moving-home",
//     title: "Moving Home",
//     description: "For those selling and buying a new property",
//     icon: "🚚",
//   },
// ];

// export default function MainApplicationComponent() {
//   return (
//     <div className="min-h-screen bg-sky-100 px-4 py-12 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-3xl">
//         <h1 className="mb-8 text-center text-3xl font-bold text-sky-900">
//           Choose Your Application Type
//         </h1>
//         <div className="grid gap-6 md:grid-cols-2">
//           {applicationTypes.map((applicationType) => (
//             <Link
//               key={applicationType.id}
//               href={`/application/${applicationType.id}`}
//             >
//               <article className="flex h-full flex-col justify-between rounded-lg bg-white p-6 text-left shadow-md transition-shadow duration-300 hover:shadow-lg">
//                 <div>
//                   <span className="mb-4 block text-4xl">
//                     {applicationType.icon}
//                   </span>
//                   <h2 className="mb-2 text-xl font-semibold text-sky-800">
//                     {applicationType.title}
//                   </h2>
//                   <p className="text-gray-600">{applicationType.description}</p>
//                 </div>
//                 <div className="mt-4 flex items-center justify-end font-semibold text-cyan-600">
//                   Get Started <p className="ml-2 h-5 w-5" />
//                 </div>
//               </article>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
