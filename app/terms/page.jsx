import Heading2 from "@/components/Heading2";
import SectionCard from "@/components/privacy-and-terms/Section-card";
import Link from "next/link";
import React from "react";

export default function TermsOfBusiness() {
  return (
    <div className="bg-sky-100 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow-md">
          <div className="p-6">
            <Heading2 className="mb-4 text-3xl font-bold text-cyan-600">
              Terms of Business Agreement
            </Heading2>

            <SectionCard title="The Financial Conduct Authority (FCA)">
              <p>
                The FCA is the independent watchdog that regulates financial
                services. Prime Plus Mortgages Ltd is authorised and regulated
                by the Financial Conduct Authority. Our Firm Reference Number is
                973499. Our permitted business is advising and arranging
                regulated mortgage contracts. You can check this on the
                Financial Services Register by visiting the FCA&apos;s website
                at{" "}
                <Link
                  href="https://register.fca.org.uk"
                  className="text-cyan-600 hover:text-cyan-800"
                >
                  https://register.fca.org.uk
                </Link>
                .
                <br />
                Business Buy to Let mortgages, where the borrower is acting by
                way of business, are not regulated by the FCA and therefore the
                provision of our service does not hold this additional level of
                consumer protection, unlike for residential mortgages.
              </p>
            </SectionCard>

            <SectionCard title="Whose products do we offer?">
              <ul>
                <li>
                  <strong className="font-bold">
                    For residential (owner occupier) and consumer buy to let
                    mortgages
                  </strong>{" "}
                  - we offer a comprehensive range of mortgages from across the
                  market but not those that you can only obtain by going
                  directly to the lender.
                </li>
                <li>
                  <strong className="font-bold">
                    For business buy-to-let or commercial mortgages
                  </strong>{" "}
                  – we only provide mortgages from a limited range of lenders
                  from across the market, which does not represent the whole
                  market. We only sell bridging products from a limited range of
                  lenders from across the market, which does not represent the
                  whole market.
                </li>
                <li>
                  <strong className="font-bold">For Product Transfers</strong> -
                  we can advise on and arrange residential, buy-to-to let and
                  commercial product transfers in line with the level of service
                  outlined in section 3 below.
                </li>
                <li>
                  <strong className="font-bold">
                    For General Insurance (i.e. Homeowners or Landlords
                    Buildings Insurance)
                  </strong>{" "}
                  – we offer a range of products from a limited range of
                  insurers from across the market which does not represent the
                  Whole of Market. A list of Providers we offer General
                  Insurance products from is available at the end of this
                  document.
                </li>
              </ul>
            </SectionCard>

            <SectionCard title="Which service will we provide you with?">
              <ul>
                <li>
                  <strong className="font-bold">
                    For residential (owner occupier) and consumer buy to let
                    mortgages
                  </strong>{" "}
                  – you will receive advice or a recommendation from us as to
                  what we believe to be the most suitable mortgage product for
                  your requirements, once we have assessed your needs for the
                  respective product.
                </li>
                <li>
                  <strong className="font-bold">
                    For business buy-to-let or commercial mortgages
                  </strong>{" "}
                  – we provide our services on a non-advised basis. You will not
                  receive advice or a recommendation. We will first ask you some
                  questions to help us ascertain your demands and needs and we
                  will then provide you with sufficient information on what we
                  believe to be ‘a suitable product’, but not necessarily ‘the
                  most suitable product’, for your demands and needs. The
                  information we provide is intended to help you make an
                  informed decision about how to proceed. Ultimately, you will
                  need to make your own decision about how to proceed, and it is
                  your responsibility to ensure that it meets your mortgage
                  requirements.
                </li>
                <li>
                  <strong className="font-bold">
                    For residential (owner occupier) or consumer buy to let
                    product transfers
                  </strong>{" "}
                  - we provide our services on an advised basis as we would for
                  a standard residential mortgage. However, we may also provide
                  this service on an execution only basis if requested to do so.
                </li>
                <li>
                  <strong className="font-bold">For General Insurance</strong> –
                  we provide our services on a non-advised basis. You will not
                  receive advice or a recommendation. We will first ask you some
                  questions to help us ascertain your demands and needs and we
                  will then provide you with sufficient information on what we
                  believe to be ‘a suitable product’, but not necessarily ‘the
                  most suitable product’, for your demands and needs. The
                  information we provide is intended to help you make an
                  informed decision about how to proceed. Ultimately, you will
                  need to make your own decision about how to proceed and it is
                  your responsibility to ensure that it meets your insurance
                  requirements.
                </li>
                <li>
                  <strong className="font-bold">
                    For business buy-to-let or commercial product transfers
                  </strong>{" "}
                  - we provide our services on a non-advised basis as we would
                  for any other buy-to-let or commercial mortgage product.
                  However, we may also provide this service on an execution only
                  basis if requested to do so. In all cases, we will arrange the
                  product on your behalf.
                </li>
              </ul>
            </SectionCard>

            <SectionCard title="What will you have to pay for the service?">
              <ul>
                <li>
                  <strong className="font-bold">Mortgages:</strong> A fee of
                  £795 is payable upon receipt of the mortgage offer. We will
                  also be paid a commission by the lender, which will be
                  disclosed to you prior to submission of the mortgage
                  application. We do not provide any refund once you have
                  received the mortgage offer. This does not affect your
                  statutory rights.
                </li>
                <li>
                  <strong className="font-bold">General Insurance:</strong> We
                  will not charge you a fee for this service. We will receive a
                  commission of up to 30% from the Insurance provider.
                </li>
              </ul>
            </SectionCard>

            <SectionCard title="Professional Indemnity Insurance">
              <p>
                We conform to the FCA requirements in respect of Professional
                Indemnity Insurance. This type of insurance is mandatory for
                mortgage and insurance intermediaries.
              </p>
            </SectionCard>

            <SectionCard title="Disclosure of Information">
              <p>
                It is important that you understand that any information,
                statements, or answers made by you to us or your Insurer are
                your responsibility and must be correct, as failure to disclose
                facts material to the insurance or any inaccuracies in your
                answers may invalidate your insurance cover. These facts must be
                disclosed at the earliest opportunity and certainly at each
                renewal. If you are a retail client you are duty bound to avoid
                any misrepresentation & if you are a commercial client you are
                duty bound to make a fair representation of risk, (more
                information is available upon request). Responsibility for this
                is solely yours as we cannot be expected to have known facts
                which have not been disclosed to us. Please keep copies of any
                documentation sent to you for future reference.
              </p>
            </SectionCard>

            <SectionCard title="Cancellation Rights">
              <p>
                <strong className="font-bold">Mortgages:</strong> We do not
                provide any refund should you decide not to proceed with the
                mortgage or loan after the offer has been issued. You do however
                have the right to withdraw from your mortgage or loan within 7
                days of accepting the offer. This does not affect your statutory
                rights.
              </p>
              <br />
              <p>
                <strong className="font-bold">Insurance:</strong> If you wish to
                cancel your policy please contact us in writing at Prime Plus
                Mortgages Ltd, Cancellations Department, 31 Gainsborough Street,
                Salford M7 4AL or by phone on 07530 473 141. We reserve the
                right to charge a fee of £20 upon cancellation of a policy
                unless the cancellation takes place within 14 days of inception
                or renewal.
              </p>
              <p>
                Please note that we operate on an auto-renewal basis, in that
                all policies will be automatically renewed at renewal date,
                unless otherwise specified or unless you have informed us of
                your intention to lapse the policy.
                <br />
                Your statutory rights are not affected.
              </p>
            </SectionCard>

            <SectionCard title="What to do if you have a complaint?">
              <p>
                If you wish to register a complaint, please contact us in
                writing at Prime Plus Mortgages Ltd, Complaints Department, 31
                Gainsborough Street, Salford M7 4AL or by phone on 07530 473
                141. If you wish to obtain a copy of the firm’s Complaint
                Handling Procedure, please be in contact with Prime Plus
                Mortgages Ltd.
                <br />
                <br />
                Please be assured that we treat complaints seriously. For your
                further protection if you cannot settle your complaint with us,
                you may be entitled to refer it to the Financial Ombudsman
                Service (‘FOS’). Full details can be found on the FOS website at{" "}
                <Link
                  href="http://www.financial-ombudsman.org.uk"
                  className="text-cyan-600 hover:text-cyan-800"
                >
                  www.financial-ombudsman.org.uk
                </Link>
                .
              </p>
            </SectionCard>

            <SectionCard title="We are covered by the Financial Services Compensation Scheme (FSCS)">
              <h3>
                We are covered by the FSCS. You may be entitled to compensation
                from the scheme if we cannot meet our obligations. This depends
                on the type of business and the circumstances of the claim.
              </h3>
              <p>
                <strong className="font-bold">Mortgages:</strong> Mortgage
                advising and arranging is covered up to a maximum of £85,000.
                Further information about the compensation scheme arrangements
                is available from the FSCS.
              </p>
              <br />
              <p>
                <strong className="font-bold">Insurance:</strong> Advising and
                arranging of optional insurance policies is covered for 90% of
                the claim, without any limitation. Compulsory insurance policies
                are covered 100%.
              </p>
            </SectionCard>

            <SectionCard title="Data Protection">
              <p>
                Prime Plus Mortgages Ltd is registered with the Information
                Commissioners Office and we comply with the relevant Data
                Protection legislation. If you provide Prime Plus Mortgages Ltd
                with Personal Data of a third party, you should only do so if
                you are authorised to release such information by the data
                subject.
                <br />
                You hereby authorise Prime Plus Mortgages Ltd to provide your
                Personal Data to any relevant providers for whom Prime Plus
                Mortgages Ltd wish to make an application on your behalf. The
                information you provide is subject to the Privacy Notice of the
                firm, which has been provided to you together with this TOBA.
                You may request confirmation of the information we hold about
                you, to which we will respond within 30 days.
                <br />
                You consent to us or any company associated with us, processing
                your personal data in accordance with the Privacy Notice of the
                firm. If you wish to obtain a copy of the firm’s Privacy Notice,
                please be in contact with us in writing at Prime Plus Mortgages
                Ltd, 31 Gainsborough Street, Salford, M7 4AL or by phone on
                07530 473 141.
                <br />
                We may undertake checks via credit reference and fraud
                prevention agencies to manage your account with us. Please note
                that these checks should not affect your credit rating.
                Furthermore, any of our Product Providers (including Credit
                Providers), may also undertake checks via credit reference and
                fraud prevention agencies to obtain information with regards to
                your credit profile. This may affect your credit rating.
                <br />
                We may communicate with you via various methods including email.
                Although all of our emails are scanned for viruses, it is
                recommended that any attachment(s) be scanned by yourselves as
                we cannot be held liable for any loss or damage caused by
                software viruses. If you choose to communicate with us via
                email, please be aware that email communications without the use
                of encryption, may not be the safest method of communication. If
                you wish to guarantee the safety and confidentiality of any
                information you send to us via email, encryption methods should
                be used.
              </p>
            </SectionCard>

            <SectionCard title="Additional Information">
              <p>
                <strong className="font-bold">Mortgages:</strong> Mortgage
                advising and arranging is covered up to a maximum of £85,000.
                Further information about the compensation scheme arrangements
                is available from the FSCS.
              </p>
              <br />
              <p>
                <strong className="font-bold">Insurance:</strong> Advising and
                arranging of optional insurance policies is covered for 90% of
                the claim, without any limitation. Compulsory insurance policies
                are covered 100%.
              </p>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
