import Image from "next/image";
import BrickWallContainer from "../shared/BrickWallContainer";
import Heading2 from "../shared/Heading2";

export default function MortgageProcessSection() {
  return (
    <div className="container mx-auto px-4 pb-12">
      <Heading2>How the Mortgage Process Works with us</Heading2>
      <BrickWallContainer>
        {/* Step-by-Step Guide */}
        <div className="grid gap-10 px-4 text-center text-cyan-100 md:grid-cols-3">
          {/* Step 1 */}
          <div className="mb-6 md:mb-0">
            <div className=" h-44">
              <h2 className="mb-4 h-16 font-exo2 text-2xl font-semibold text-cyan-100">
                Step 1: Begin with Insight
              </h2>
              <div className="mb-5">
                <Image
                  src="/images/meeting-svgrepo-com (2).svg"
                  alt="Step 1"
                  width={200}
                  height={80}
                  className=" mx-auto mb-3 h-20 w-44"
                />
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-cyan-300">
              Initial Consultation
            </h3>
            <p className="text-justify">
              Embark on your property journey with a personalized, face-to-face
              consultation. Our experts offer tailored advice, designed to align
              precisely with your investment goals or homebuying dreams. This is
              where your vision starts to take shape, informed by our deep
              understanding and commitment to your success.
            </p>
          </div>

          {/* Step 2 */}
          <div className="mb-6 md:mb-0">
            <div className="h-44">
              <h2 className="mb-4 h-16 font-exo2 text-2xl font-semibold text-cyan-100">
                Step 2: Streamline Your Path
              </h2>
              <div className="mb-5">
                <Image
                  src="/images/mortgage-contract-svgrepo-com (1).svg"
                  alt="Step 2"
                  width={200}
                  height={80}
                  className=" mx-auto mb-3 h-20 w-44 text-cyan-800  "
                />
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-cyan-300">
              Application & Documentation
            </h3>
            <p className="text-justify">
              Navigate our simplified application process with ease. We value
              your time and ask only for essential documentation to move
              forward: <br />
              <i
                className="
                italic text-cyan-300
              "
              >
                ID, Proof of Address, Income Proof, Portfolio Spreadsheet (if
                applicable).
              </i>
              <br />
              This step ensures we have all we need to tailor the mortgage
              solution that best fits your unique scenario.
            </p>
          </div>

          {/* Step 3 */}
          <div className="mb-6 md:mb-0">
            <div className=" h-44">
              <h2 className="mb-4 h-16 font-exo2 text-2xl font-semibold text-cyan-100">
                Step 3: Cross the Finish Line
              </h2>
              <div className="mb-5">
                <Image
                  src="/images/mortgage-svgrepo-com (2).svg"
                  alt="Step 3"
                  width={200}
                  height={80}
                  className=" mx-auto mb-3 h-20 w-44"
                />
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-cyan-300">
              Approval & Closing
            </h3>
            <p className="text-justify">
              Experience rapid progress toward your goals with our expedited
              approval process. We work diligently to review your application
              and documents, aiming for a swift approval so you can finalize
              your mortgage terms. With Prime Plus Mortgages, step into the
              future of your investment or dream home with confidence and peace
              of mind.
            </p>
          </div>
        </div>
      </BrickWallContainer>
    </div>
  );
}
