import Heading2 from "@/components/common/Heading2";
import SectionCard from "@/components/privacy-and-terms/Section-card";
import { contactInfo } from "@/js/contactInfo";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-sky-100 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow-md">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <Heading2 className="mb-4 text-3xl font-bold text-cyan-600">
              Privacy Policy
            </Heading2>
            <SectionCard title="Privacy Notice">
              <p>
                We are committed to protecting your privacy. This Privacy Notice
                sets out our privacy practices and explains how we collect,
                process, hold and store (collectively referred to as handle)
                client data and with whom we share this information with. The
                information we handle is only that which is required by us so
                that we may deliver the services you require. Except as provided
                in this Privacy Notice, we do not supply your client data to any
                other company for marketing purposes.
              </p>
            </SectionCard>

            <SectionCard title="Introduction">
              <p>
                We are registered as a data controller with the ICO, which is
                the UK’s independent body set up to uphold information rights.
                As a data controller, we must make sure we comply with UK data
                protection law when we process personal information. By
                proceeding with using our services, you consent to the Company
                handling your data in line with this Privacy Notice. Our Privacy
                Notice will be reviewed on a regular basis and may be updated
                from time to time. We will notify you via email when this
                happens and provide you with a copy of the most recent and
                up-to-date Privacy Notice.
              </p>
              {/* Add more paragraphs as necessary */}
            </SectionCard>

            <SectionCard title="What is Personal Information/Data">
              <p>
                When we refer to personal information we mean any information
                relating to an identifiable person who can be directly or
                indirectly identified in particular by reference to an
                identifier. Under data protection legislation it is known as
                personal data. Some personal information will identify you
                directly – for example, by giving your name and email address.
                It may also be possible to identify you indirectly, from
                information in which your name is not given, for example by
                naming your job title and employer, or by using another form of
                identifier such as an online identifier.
              </p>
              {/* Add more paragraphs as necessary */}
            </SectionCard>

            <SectionCard title={"What Client Data Do We Collect "}>
              <ul>
                <li>
                  <strong className="font-semibold">Personal Details</strong> –
                  Full name, Title, Date of Birth;
                </li>
                <li>
                  <strong className="font-semibold">Contact Details</strong> –
                  Telephone number, mobile phone number, correspondence address
                  etc.
                </li>
                <li>
                  <strong className="font-semibold">Financial Details</strong> –
                  Bank details.
                </li>
              </ul>
            </SectionCard>

            <SectionCard title="How We Collect Your Client Data">
              <p>
                <strong className="font-semibold">Contacting Us</strong> - we
                may record, use and store any telephone, postal, e-mail or other
                electronic communications provided by you. This is to ensure
                that we can refer back to any instruction you may have given to
                us as well as to ensure that the information we provide you with
                is accurate.
              </p>
              {/* Add more paragraphs as necessary */}
            </SectionCard>

            <SectionCard title="Why Do We Collect Client Data">
              <h3>The personal information we collect is used to:</h3>
              <ul
                className="
                  ml-5 mt-2 list-disc
                  "
              >
                <li>
                  Enable us to provide you with information about our products
                  and services;
                </li>
                <li>
                  Enable us to provide you with our products and services;
                </li>
                <li>
                  Enable us to contact you regarding general product and service
                  level matters;
                </li>
                <li>
                  Keep you informed of new features, products and services
                  available from us;
                </li>
                <li>
                  Ensure that we comply with the necessary laws and regulations;
                </li>
              </ul>
            </SectionCard>

            <SectionCard title="Disclosing Client Data to Third Parties">
              <ul className="ml-5 mt-2 list-disc">
                <li>
                  We will not sell, share or rent your name, email address, or
                  any other client data to any third party for marketing
                  purposes;
                </li>
                <li>
                  We may disclose client data to third parties (this may include
                  but is not limited to, our accountants, contractors and other
                  professional advisors) who may require access to client data
                  in the course of them providing us with these services. We
                  will at all stages ensure that these third parties have
                  appropriate security measures in place when handling any
                  client data;
                </li>
                <li>
                  We may at our discretion disclose client data that is required
                  by the police (or other organisations with a law enforcement
                  role) for the prevention and detection of crime or the
                  apprehension or prosecution of offenders;
                </li>
                <li>
                  We may disclose specific personal information where we are
                  required to by law;
                </li>
                <li>
                  We may share aggregated demographic information with our
                  partners, advertisers or other third parties. This will not
                  contain information that can identify any individual person.
                </li>
              </ul>
            </SectionCard>

            <SectionCard title="Viewing, Changing or Removing Client Data">
              <ul className="ml-5 mt-2 list-disc">
                <li>You may view all Client Data that we store about you;</li>
                <li>
                  You may correct, delete or update your Client Data via your
                  account;
                </li>
                <li>
                  You may withdraw your consent (partial or complete) at any
                  time;
                </li>
                <li>
                  You may request that all Client Data held be removed or
                  ported.
                </li>
              </ul>
            </SectionCard>

            <SectionCard title="How We Store Client Data">
              <ul className="ml-5 mt-2 list-disc">
                <li>
                  Your data will be stored securely in line with industry best
                  practice at all times. The security measures in place are
                  reviewed annually;
                </li>
                <li>
                  Your data will be stored only on servers in a GDPR compliant
                  location.
                </li>
              </ul>
            </SectionCard>

            <SectionCard title="Contact">
              <dl>
                <dt>Name:</dt>
                <dd>
                  <strong>{contactInfo.company}</strong>
                </dd>

                <dt>Address:</dt>
                <dd>
                  <address>{contactInfo.fullAddress()}</address>
                </dd>

                <dt>Telephone Number:</dt>
                <dd>
                  <Link
                    href={`tel:${contactInfo.phone}`}
                    className="text-cyan-600 hover:text-cyan-800"
                  >
                    {contactInfo.phone}
                  </Link>
                </dd>

                <dt>Email:</dt>
                <dd>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="text-cyan-600 hover:text-cyan-800"
                  >
                    {contactInfo.email}
                  </Link>
                </dd>
              </dl>
            </SectionCard>

            <SectionCard title="Last updated">
              <p>08 July 2021</p>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
