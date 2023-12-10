import Image from "next/image";

export default function TestimonialCard({ testimonial, isHighlighted }) {
    return (
        <div
            className={`flex flex-col items-center bg-white p-4 shadow rounded-lg transition-transform duration-300 ${
                isHighlighted
                    ? "opacity-100t ransform scale-110"
                    : "opacity-50 transform scale-90"
            }`}
        >
            <Image
                src={testimonial.imageSrc}
                alt={testimonial.author}
                width={80}
                height={80}
                className="w-16 h-16 rounded-full mb-3"
            />
            <blockquote className="text-gray-600 italic mb-4">
                "{testimonial.quote}"
            </blockquote>
            <p className="font-semibold">{testimonial.author}</p>
        </div>
    );
}
