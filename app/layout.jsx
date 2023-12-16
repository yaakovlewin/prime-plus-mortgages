import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import { exo2, rubik, zillaSlab } from "./font";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Prime Plus Mortgages",
    description: "Prime Plus Mortgages is a mortgage broker in Salford, UK.",
    keywords: "mortgage, broker, salford, uk, prime plus mortgages, prime, plus, mortgages, prime plus, prime plus mortgages salford, prime plus mortgages uk, prime plus mortgages salford uk, prime plus mortgages uk salford, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker salford, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker salford, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker salford, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker salford, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker salford, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker salford, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker salford, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker salford, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker salford, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker, prime plus mortgages salford uk mortgage broker, prime plus mortgages uk mortgage broker salford",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body
                className={`${inter.className} ${exo2.variable} ${rubik.variable} ${zillaSlab.variable}`}
            >
                <Navbar />
                <main className="pt-28">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
