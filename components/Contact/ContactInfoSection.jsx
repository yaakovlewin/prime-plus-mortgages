import Link from "next/link";
import ContactCard from "./ContactCard";
import { contactInfo } from "@/js/contactInfo";

const ContactInfoSection = () => {
  return (
    <section className="bg-sky-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="grid gap-8 md:grid-cols-3">
          <ContactCard title="Our Office">
            <p className="text-gray-700">{contactInfo.fullAddress()}</p>
          </ContactCard>

          <ContactCard title="Phone">
            <p className="text-gray-700">{contactInfo.phone}</p>
            <button className="focus:shadow-outline-cyan mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-cyan-500 focus:border-cyan-700 focus:outline-none active:bg-cyan-700">
              <Link href={`tel:${contactInfo.phone}`} className="">
                Call Now
              </Link>
            </button>
          </ContactCard>

          <ContactCard title="Email">
            <Link
              href={`mailto:${contactInfo.email}`}
              className="text-skylight-500 hover:underline focus:underline active:underline"
            >
              {contactInfo.email}
            </Link>
          </ContactCard>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
