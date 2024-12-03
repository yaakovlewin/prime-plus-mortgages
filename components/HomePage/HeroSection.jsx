import { getContentBySlug } from "@/lib/mdx";
import ButtonLink from "../shared/ButtonLink";
import MDXRenderer from "./MDXRenderer";

export default async function HeroSection() {
  const heroContent = await getContentBySlug("home", "hero");
  if (!heroContent) return null;

  const { backgroundVideo, buttonText, buttonLink } = heroContent.frontMatter;

  return (
    <div className="relative min-h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 h-full w-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute h-full w-full"></div>

      {/* Hero Content */}
      <div className="relative flex h-full flex-row items-center justify-center px-6 text-white">
        <div className="w-full text-center">
          <MDXRenderer
            content={heroContent.content}
            frontMatter={heroContent.frontMatter}
          />

          <div className="flex items-center justify-center space-x-8 text-center">
            <ButtonLink
              href={buttonLink}
              variant="primary"
              className="mt-4 inline-block px-6 py-3 text-lg font-bold"
            >
              {buttonText}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
