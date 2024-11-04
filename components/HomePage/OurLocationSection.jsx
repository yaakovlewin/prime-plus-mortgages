"use client";
import { contactInfo } from "@/js/contactInfo";
import Link from "next/link";
import SectionContainer from "../layout/SectionContainer";
import Heading2 from "../shared/Heading2";
import MapContainer from "./MapContainer";

export default function OurLocationSection() {
  return (
    <SectionContainer>
      <Heading2 className="">Our Location</Heading2>
      <p className="text-center text-gray-300">{contactInfo.fullAddress()}</p>
      <p className="mb-8 text-center text-gray-200">
        <Link
          href="mailto:info@primeplusemortgages.co.uk"
          className="text-cyan-500 hover:text-cyan-400"
        >
          {contactInfo.email}
        </Link>
        <br />
        <Link
          href="tel:+44 161 818 8824"
          className="text-cyan-500 hover:text-cyan-400"
        >
          {contactInfo.phone}
        </Link>
      </p>
      <div className="my-4 overflow-hidden rounded-lg shadow-xl">
        <MapContainer />
      </div>
    </SectionContainer>
  );
}
