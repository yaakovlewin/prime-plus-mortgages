import Image from "next/image";
import ButtonLink from "./ButtonLink";

export default function ServiceCard({
  title,
  description,
  imageUrl,
  url,
  prefix,
  children,
}) {
  const truncateText = (text, maxWords = 20) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="flex h-full flex-col rounded-lg border-cyan-400/20 bg-sky-700/50 p-6 shadow-sm transition-all hover:border-cyan-400/50 hover:bg-sky-700/70 hover:shadow-md">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        className="h-48 w-full rounded-t-lg object-cover"
      />
      <div className="flex flex-grow flex-col p-4">
        <h3 className="mb-2 text-lg font-semibold text-cyan-300">{title}</h3>
        <p className="mb-4 flex-grow text-sm text-cyan-100">
          {" "}
          {truncateText(description, 15)}
        </p>
        {prefix && (
          <ButtonLink
            href={`/${prefix}/${url}`}
            variant="secondary"
            className="mt-auto w-full py-2"
          >
            {children}
          </ButtonLink>
          // <Link
          //   href={`/${prefix}/${url}`}
          //   className="mt-auto rounded px-4 py-2 text-center text-cyan-300 transition-colors hover:bg-cyan-600 hover:text-cyan-200"
          // >
          //   {children}
          // </Link>
        )}
      </div>
    </div>
  );
}
