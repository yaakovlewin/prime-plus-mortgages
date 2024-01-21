import Image from "next/image";

export default function TestimonialCard({
    testimonial,
    isHighlighted,
    className = "",
}) {
    return (
        <div
            className={`flex flex-col items-center min-w-full md:min-w-0 h-full min-h-[20rem] md:min-h-[15rem] bg-white p-4 shadow rounded-lg transition-all duration-500 transform ${className} ${
                isHighlighted
                    ? "opacity-100 transform scale-110 px-4 mx-4 "
                    : "opacity-50 transform scale-90"
            }`}
        >
            <Image
                src={
                    // testimonial.imageSrc ||
                    `https://ui-avatars.com/api/?name=${testimonial.author
                        .split(" ")
                        .join("+")}&background=random&rounded=true&bold=true`
                }
                alt={testimonial.author}
                width={80}
                height={80}
                className="w-16 h-16 rounded-full mb-3"
            />
            <blockquote className="text-gray-600 italic mb-4 ">
                &quot;{testimonial.quote}&quot;
            </blockquote>
            <p className="font-semibold">{testimonial.author}</p>
        </div>
    );
}
