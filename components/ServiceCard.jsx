import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  title,
  description,
  imageUrl,
  url,
  prefix,
  children,
}) {
  return (
    <div className="flex h-full flex-col items-center rounded-lg border bg-neutral-200 p-4 text-neutral-950 shadow-sm">
      <Image
        src={imageUrl}
        alt={title}
        width={200}
        height={100}
        className="mb-3 h-48 w-full object-cover"
      />
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="mb-3 flex-grow text-center">{description}</p>
      <Link
        href={`/${prefix}/${url}`}
        className="rounded bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600"
      >
        {children}
      </Link>
    </div>
  );
}
