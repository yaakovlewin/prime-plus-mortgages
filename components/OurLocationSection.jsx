"use client";
import React from "react";
import MapContainer from "./MapContainer";
import Link from "next/link";

export default function OurLocationSection() {
    console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "No API Key");
    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-3xl text-cyan-800 font-bold text-center mb-6 animate-pulse">
                Our Location
            </h2>
            <p className="text-center mb-8 text-gray-600">
                31 Gainsborough St, Salford M7 4AL, UK
            </p>
            <p className="text-center mb-8 text-gray-600">
                <Link
                    href="mailto:info@primeplusemortgages.co.uk"
                    className="text-cyan-600 hover:text-cyan-800"
                >
                    info@primeplusemortgages.co.uk
                </Link>
                <br />
                <Link
                    href="tel:+44 161 818 8824"
                    className="text-cyan-600 hover:text-cyan-800"
                >
                    +44 161 818 8824
                </Link>
            </p>
            <div className="rounded-lg overflow-hidden shadow-xl my-4">
                <MapContainer />
            </div>
        </section>
    );
}
