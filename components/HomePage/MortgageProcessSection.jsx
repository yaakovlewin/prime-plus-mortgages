import Image from "next/image";
import FaqItem from "./FaqItem";
import BrickWallContainer from "../BrickWallContainer";
import Heading2 from "../Heading2";

export default function MortgageProcessSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Heading2>How the Mortgage Process Works</Heading2>
      <BrickWallContainer>
        {/* Step-by-Step Guide */}
        <div className="grid gap-4 px-4 text-center text-cyan-100 md:grid-cols-3">
          {/* Step 1 */}
          <div className="mb-6 md:mb-0">
            <div className="mb-2">
              <Image
                src="/meeting-svgrepo-com (2).svg"
                alt="Step 1"
                width={200}
                height={80}
                className=" mx-auto mb-3 h-20 w-44"
              />
            </div>
            <h3 className="mb-2 font-semibold text-cyan-300">
              Step 1: Initial Consultation
            </h3>
            <p>
              Start your property journey with a face-to-face consultation.
              Receive personalized, expert advice tailored to your investment or
              home buying ambitions.
            </p>
          </div>

          {/* Step 2 */}
          <div className="mb-6 md:mb-0">
            <div className="mb-5">
              <Image
                src="/mortgage-contract-svgrepo-com (1).svg"
                alt="Step 2"
                width={200}
                height={80}
                className=" mx-auto mb-3 h-20 w-44 text-cyan-800  "
              />
            </div>
            <h3 className="mb-2 font-semibold text-cyan-300">
              Step 2: Application & Documentation
            </h3>
            <p>
              Proceed with ease using our streamlined application process. We
              require minimal, yet essential documentation: <br />
              <em
                className="
                italic text-cyan-400
              "
              >
                ID, Proof of Address, Income Proof, Portfolio Spreadsheet.
              </em>
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="mb-5">
              <Image
                src="/mortgage-svgrepo-com (2).svg"
                alt="Step 3"
                width={200}
                height={80}
                className=" mx-auto mb-3 h-20 w-44"
              />
            </div>
            <h3 className="mb-2 font-semibold text-cyan-300">
              Step 3: Approval & Closing
            </h3>
            <p>
              Secure your investment swiftly. Our fast approval means you
              finalize mortgage terms and proceed with your strategy
              confidently.
            </p>
          </div>
        </div>
      </BrickWallContainer>

      {/* FAQs */}
      <div className="mt-12 2xl:mt-28" id="faq">
        <Heading2>Frequently Asked Questions</Heading2>
        <div className="space-y-4 md:space-y-5">
          <FaqItem
            question="What documents do I need to apply?"
            answer="Typically, you’ll need proof of income, credit information, and identification. However, requirements may vary."
          />
          <FaqItem
            question="How long does the process take?"
            answer="The time can vary based on several factors, including your financial situation and the type of mortgage."
          />
          <FaqItem
            question="What are the interest rates?"
            answer="Interest rates vary based on the type of mortgage and your financial situation."
          />
        </div>
      </div>
    </div>
  );
}
