export default function ServiceHeroSection({ service }) {
    return (
        <div
            className="flex items-center bg-cover bg-center h-[50vh] text-white py-24 px-10 object-fill"
            style={{ backgroundImage: `url(${service.imageUrl})` }}
        >
            {" "}
            <div className="md:w-1/3 bg-neutral-300 bg-opacity-70 rounded-lg p-4 py-7 text-shadow-black">
                <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl mb-6">{service.description}</p>
                <a
                    href="#learn-more"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white text-shadow-none font-bold py-3 px-6 rounded uppercase"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
}
