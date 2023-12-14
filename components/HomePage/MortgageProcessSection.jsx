import Image from "next/image";
import FaqItem from "./FaqItem";

export default function MortgageProcessSection() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold text-center mb-8">
                How the Mortgage Process Works
            </h2>

            {/* Step-by-Step Guide */}
            <div className="grid md:grid-cols-3 gap-4 text-center">
                {/* Step 1 */}
                <div className="mb-6 md:mb-0">
                    <div className="mb-2">
                        <Image
                            src="/meeting-svgrepo-com (3).svg"
                            alt="Step 1"
                            width={200}
                            height={80}
                            className=" w-44 h-20 mb-3 mx-auto"
                        />
                    </div>
                    <h3 className="mb-2 font-semibold">
                        Step 1: Initial Consultation
                    </h3>
                    <p>
                        Meet with our experts to assess your needs and discuss
                        your options.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="mb-6 md:mb-0">
                    <div className="mb-5">
                        <Image
                            src="/mortgage-contract-svgrepo-com (2).svg"
                            alt="Step 2"
                            width={200}
                            height={80}
                            className=" w-44 h-20 mb-3 mx-auto text-cyan-800  "
                        />
                    </div>
                    <h3 className="mb-2 font-semibold">
                        Step 2: Application & Documentation
                    </h3>
                    <p>
                        Fill out the application form and submit the necessary
                        documents.
                    </p>
                </div>

                {/* Step 3 */}
                <div>
                    <div className="mb-5">
                        <Image
                            src="/mortgage-svgrepo-com (3).svg"
                            alt="Step 3"
                            width={200}
                            height={80}
                            className=" w-44 h-20 mb-3 mx-auto"
                        />
                    </div>
                    <h3 className="mb-2 font-semibold">
                        Step 3: Approval & Closing
                    </h3>
                    <p>
                        Receive approval and finalize the terms for your
                        mortgage.
                    </p>
                </div>
            </div>

            {/* FAQs */}
            <div className="mt-28">
                <h3 className="text-xl font-bold mb-4">
                    Frequently Asked Questions
                </h3>
                <div className="space-y-4">
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
