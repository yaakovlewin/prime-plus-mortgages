import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavBar/Navbar";
import { defaultMetadata } from "@/config/metadata";
import { Inter } from "next/font/google";
import { exo2, rubik, zillaSlab } from "./font";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.primeplusmortgages.co.uk",
  name: "Prime Plus Mortgages",
  url: "https://www.primeplusmortgages.co.uk",
  description:
    "Expert mortgage brokers in Salford & Manchester. Specialising in residential mortgages, buy-to-let, commercial mortgages, bridging loans, and development finance. FCA regulated with competitive rates.",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "53.4808",
      longitude: "-2.2426",
    },
    geoRadius: "30000",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
    addressRegion: "Greater Manchester",
    addressLocality: "Salford",
  },
  priceRange: "££",
  openingHours: "Mo-Fr 09:00-17:00",
  telephone: "+44-XXX-XXXX-XXX", // Replace with actual phone number
  email: "info@primeplusmortgages.co.uk",
  sameAs: [
    // Add social media profiles if available
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mortgage Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Mortgages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Buy to Let Mortgages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Mortgages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bridging Loans",
        },
      },
    ],
  },
};

export const metadata = {
  ...defaultMetadata,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${inter.className} ${exo2.variable} ${rubik.variable} ${zillaSlab.variable}`}
      >
        <Navbar />
        <main className="bg-gradient-to-b from-sky-900 via-sky-800 to-sky-900">
          <div className="pb-8 pt-24 heropattern-architect-cyan-300/10">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
