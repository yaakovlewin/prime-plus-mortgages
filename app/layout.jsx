import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Prime Plus Mortgages",
    description: "Prime Plus Mortgages is a mortgage broker in Salford, UK.",
    keywords: "mortgage, broker, salford, uk",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className={inter.className}>{children}</body>
            <Footer />
        </html>
    );
}
