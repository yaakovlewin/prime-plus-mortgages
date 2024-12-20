import Image from "next/image";
import ButtonLink from "./ButtonLink";

export default function ServiceCard({
  title,
  description,
  imageUrl,
  url,
  prefix,
  children,
  buttonText,
  ariaLabel,
}) {
  const truncateText = (text, maxWords = 20) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  // Construct the URL path
  const constructUrl = (prefix, url) => {
    const cleanPrefix = prefix?.replace(/^\/+|\/+$/g, "");
    const cleanUrl = url?.replace(/^\/+|\/+$/g, "");
    return cleanPrefix ? `/${cleanPrefix}/${cleanUrl}` : `/${cleanUrl}`;
  };

  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-sky-50 p-6 shadow-sm transition-all hover:border-cyan-400/50 hover:shadow-md">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        className="h-48 w-full rounded-t-lg object-cover"
      />
      <div className="flex flex-grow flex-col p-4">
        <h3
          id={`service-${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="mb-2 text-lg font-semibold text-gray-800"
        >
          {title}
        </h3>
        <p className="mb-4 flex-grow text-sm text-gray-600">
          {truncateText(description, 15)}
        </p>
        {prefix && (
          <div
            aria-labelledby={`service-${title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            <ButtonLink
              href={constructUrl(prefix, url)}
              variant="primary"
              className="mt-auto w-full py-2"
            >
              {buttonText || children}
            </ButtonLink>
          </div>
        )}
      </div>
    </div>
  );
}
