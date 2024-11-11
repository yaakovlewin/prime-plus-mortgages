import { contactInfo } from "@/js/contactInfo";
import Link from "next/link";

const DynamicHeroSection = ({
  title,
  description,
  subDescription,
  imageUrl,
  ctaText = "Get Started",
  ctaLink = "/application",
  showContactInfo = false,
  serviceUrl = "",
  urlPrefix = "",
  className = "",
}) => {
  return (
    <div className="bg-sky-200 heropattern-tinycheckers-sky-300/50">
      <section
        className="mx-auto flex min-h-[40vh] max-w-[2000px] items-center bg-cyan-50 bg-opacity-70 bg-cover bg-center object-fill px-10 py-24 text-teal-50 text-shadow-black-border-sm sm:h-[50vh] md:h-[60vh] lg:h-[70vh] lg:border-sky-300 2xl:border-x-4"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <article className="rounded-lg bg-teal-50 bg-opacity-70 p-4 py-7 text-shadow-black md:w-1/3">
          <h1 className="mb-2 text-3xl font-bold text-shadow-black-lg">
            {title}
          </h1>
          <p className="mb-4 w-fit bg-white bg-opacity-5 text-2xl font-medium text-sky-600 text-shadow-white">
            {description}
          </p>
          {subDescription && (
            <p className="mb-6 font-exo2 text-xl text-sky-950 text-shadow-none">
              {subDescription}
            </p>
          )}
          <section className="flex items-baseline justify-between">
            <Link
              href={serviceUrl ? `/${urlPrefix}${serviceUrl}` : ctaLink}
              className="rounded border border-sky-500 bg-cyan-500 px-4 py-2 font-bold uppercase text-white shadow-2xl text-shadow-none hover:bg-cyan-600"
            >
              {ctaText}
            </Link>
            {showContactInfo && (
              <>
                <p className="text-sky-900 text-shadow-none">or</p>
                <Link
                  href={`tel:${contactInfo.phone}`}
                  className="text-sky-900 text-shadow-none"
                >
                  <p className="mt-4 text-lg font-bold">
                    Call Us: {`${contactInfo.phone}`}
                  </p>
                </Link>
              </>
            )}
          </section>
        </article>
      </section>
    </div>
  );
};

export default DynamicHeroSection;
