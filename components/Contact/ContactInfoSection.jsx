import Link from "next/link";
import ContactCard from "./ContactCard";
import { contactInfo } from "@/js/contactInfo";
import { FaPhoneAlt } from "react-icons/fa";

const ContactInfoSection = () => {
  return (
    <section className="bg-sky-100 py-12 heropattern-brickwall-cyan-600/10">
      <div className="container mx-auto w-min px-4 text-center md:w-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <ContactCard title="Our Office">
            <p className="text-gray-700">{contactInfo.fullAddress()}</p>
          </ContactCard>

          <ContactCard title="Phone">
            <div className="relative">
              <Link href={`tel:${contactInfo.phone}`} className="shadow-lg">
                <button className="focus:shadow-outline-cyan absolute bottom-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 text-white shadow hover:bg-cyan-500 hover:text-cyan-800 hover:shadow-lg focus:outline-none active:bg-cyan-700 ">
                  <FaPhoneAlt />
                </button>
              </Link>

              <p
                className=" cursor-pointer text-blue-500 hover:underline focus:underline active:underline
              "
              >
                {contactInfo.phone}
              </p>
              {/* <button className="focus:shadow-outline-cyan mt-2 flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-cyan-500 focus:border-cyan-700 focus:outline-none active:bg-cyan-700">
                <Link href={`tel:${contactInfo.phone}`} className="">
                  Call Now
                </Link>
              </button> */}
            </div>
          </ContactCard>

          <ContactCard title="Email">
            <Link
              href={`mailto:${contactInfo.email}`}
              className="text-sky-600 hover:underline focus:underline active:underline"
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
