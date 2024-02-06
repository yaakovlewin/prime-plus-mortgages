"use client";
import React from "react";
import MapContainer from "./MapContainer";
import Link from "next/link";
import Heading2 from "../Heading2";
import { contactInfo } from "@/js/contactInfo";

export default function OurLocationSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <Heading2 className="">Our Location</Heading2>
      <p className="text-center text-gray-600">{contactInfo.fullAddress()}</p>
      <p className="mb-8 text-center text-gray-600">
        <Link
          href="mailto:info@primeplusemortgages.co.uk"
          className="text-cyan-600 hover:text-cyan-800"
        >
          {contactInfo.email}
        </Link>
        <br />
        <Link
          href="tel:+44 161 818 8824"
          className="text-cyan-600 hover:text-cyan-800"
        >
          {contactInfo.phone}
        </Link>
      </p>
      <div className="my-4 overflow-hidden rounded-lg shadow-xl">
        <MapContainer />
      </div>
    </section>
  );
}
