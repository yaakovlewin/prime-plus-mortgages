import Image from "next/image";

export default function ServiceHeroSection({ service }) {
    return (
        <div className="flex items-center h-96 bg-gradient-to-br from-sky-800 via-sky-100 to-neutral-100 pb-12 px-10">
            {/* Image Container - Adding shadow for depth */}
            <div className="flex-none w-1/2 pr-10">
                <Image
                    src={service.imageUrl}
                    width={600}
                    height={400}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full object-cover h-96"
                />
            </div>

            {/* Text Content - Enhanced typography and spacing */}
            <div className="w-1/2">
                <h1 className="text-5xl font-semibold mb-6 text-sky-800">
                    {service.title}
                </h1>
                <p className="text-lg mb-8 text-gray-600">
                    {service.heroSubText}
                </p>
                <a
                    href="#learn-more"
                    className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg uppercase transition duration-300"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
}
