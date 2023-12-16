"use client";
import React from "react";
import MapContainer from "./MapContainer";
import Link from "next/link";

export default function OurLocationSection() {
    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-3xl text-cyan-800 font-bold text-center mb-6 animate-pulse">
                Our Location
            </h2>
            <p className="text-center mb-8 text-gray-600">
                7 Bevendon Sq, Salford M7 4TP, UK
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
