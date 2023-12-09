import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ title, description, link, imgSrc }) {
    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm min-w-fit bg-neutral-200">
            <Image
                src={imgSrc}
                alt={title}
                width={200}
                height={80}
                className=" w-44 h-20 mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-center mb-3">{description}</p>
            <Link
                href={link}
                className="text-white bg-green-500 hover:bg-green-600 rounded px-4 py-2"
            >
                Learn More
            </Link>
        </div>
    );
}
