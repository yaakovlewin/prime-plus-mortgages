const HeroSection = () => {
    return (
        <div
            className="bg-cover bg-center h-96 text-white py-24 px-10 object-fill"
            style={{ backgroundImage: `url('/house2.jpg')` }}
        >
            {" "}
            <div className="md:w-1/2 bg-neutral-400 bg-opacity-40 rounded-lg p-4 pb-7">
                <p className="font-bold text-sm uppercase">Services</p>
                <p className="text-3xl font-bold">Discover What We Offer</p>
                <p className="text-2xl mb-10 leading-none">
                    Explore our wide range of mortgage solutions tailored to
                    your needs.
                </p>
                <a
                    href="#services"
                    className="bg-cyan-500 py-4 px-8 text-sm text-white font-bold uppercase rounded hover:bg-green-600 transition duration-300"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
