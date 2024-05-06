import Heading2 from "../Heading2";
import FaqItem from "./FaqItem";

function Faq() {
  return (
    <section className="container mx-auto px-4 pb-12 lg:px-56">
      <div className="" id="faq">
        <Heading2>Frequently Asked Questions</Heading2>
        <div className="space-y-4 md:space-y-5">
          <FaqItem
            question="What documents do I need to apply?"
            answer="Typically, you’ll need proof of income, credit information, and identification. This includes tax returns, W-2 forms, paycheck stubs, credit reports, and government-issued ID."
          />
          <FaqItem
            question="How long does the process take?"
            answer="The time can vary greatly but generally it could take from several weeks to a couple of months, depending on various factors such as the completeness of your application, the complexity of your financial situation, and lending conditions at the time."
          />
          <FaqItem
            question="What are the interest rates?"
            answer="Interest rates are subject to change based on market conditions and your individual creditworthiness. Rates can also differ between fixed-rate and adjustable-rate mortgages."
          />
          <FaqItem
            question="Can I get pre-approved for a mortgage?"
            answer="Yes, getting pre-approved is a smart step as it gives you an idea of how much you may be able to borrow and shows sellers that you’re serious about buying."
          />
          <FaqItem
            question="Do I qualify for any special mortgage programs?"
            answer="Depending on your circumstances, such as if you're a first-time homebuyer or a veteran, there could be specific programs available to help you secure a loan with favorable terms."
          />
          <FaqItem
            question="What is the difference between pre-qualification and pre-approval?"
            answer="Pre-qualification is an informal assessment of your finances, while pre-approval involves a more thorough review and a commitment from the lender to provide you with a loan up to a specified amount."
          />
          <FaqItem
            question="Will making a down payment affect my mortgage?"
            answer="Yes, the size of your down payment can affect your interest rate, the type of mortgage you qualify for, and whether you have to pay for private mortgage insurance (PMI)."
          />
          <FaqItem
            question="What is an escrow account?"
            answer="An escrow account is used by your lender to pay property taxes and insurance premiums on your behalf. The costs are rolled into your monthly mortgage payment."
          />
        </div>
      </div>
    </section>
  );
}

export default Faq;
