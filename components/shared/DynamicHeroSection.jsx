import ButtonLink from "./ButtonLink";

const DynamicHeroSection = ({
  title,
  description,
  subDescription,
  imageUrl,
  ctaText,
  ctaLink,
  showContactButton = true,
  className = "",
}) => {
  return (
    <div className="bg-sky-200 heropattern-tinycheckers-sky-300/50">
      <section
        className="mx-auto flex min-h-[40vh] max-w-[2000px] items-center bg-cyan-50 bg-opacity-70 bg-cover bg-center object-fill px-10 py-24 text-teal-50 text-shadow-black-border-sm sm:h-[50vh] md:h-[60vh] lg:h-[70vh] lg:border-sky-300 2xl:border-x-4"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <article className="rounded-lg bg-teal-50 bg-opacity-70 p-4 py-7 text-shadow-black-lg md:w-1/3">
          <h1 className="mb-2  text-3xl font-bold text-neutral-50 text-shadow-black-lg">
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
          <section className="flex items-baseline gap-4">
            {ctaText && ctaLink && (
              <ButtonLink
                href={ctaLink}
                variant="primary"
                className="px-6 py-3 font-bold uppercase text-shadow-none"
              >
                {ctaText}
              </ButtonLink>
            )}
            {showContactButton && (
              <ButtonLink
                href="/contact"
                variant="primary"
                className="px-6 py-3 font-bold uppercase text-shadow-none"
              >
                Contact Us
              </ButtonLink>
            )}
          </section>
        </article>
      </section>
    </div>
  );
};

export default DynamicHeroSection;
