import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavBar/Navbar";
import { defaultMetadata } from "@/config/metadata";
import { Inter } from "next/font/google";
import { exo2, rubik, zillaSlab } from "./font";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.className} ${exo2.variable} ${rubik.variable} ${zillaSlab.variable}  `}
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
