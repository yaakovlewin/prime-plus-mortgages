import Image from "next/image";

export default function TestimonialCard({ quote, author, imageSrc }) {
    return (
        <div className="flex flex-col items-center bg-white p-6 shadow rounded-lg">
            <Image
                src={imageSrc}
                alt={author}
                width={80}
                height={80}
                className="w-16 h-16 rounded-full mb-3"
            />
            <blockquote className="text-gray-600 italic mb-4">
                "{quote}"
            </blockquote>
            <p className="font-semibold">{author}</p>
        </div>
    );
}
