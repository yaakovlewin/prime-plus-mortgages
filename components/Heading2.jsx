export default function Heading2({ children, className }) {
    return (
        <h2
            className={`text-2xl md:text-3xl font-bold text-center mb-10 font-zilla-slab  ${
                className || "text-sky-900"
            }`}
        >
            {children}
        </h2>
    );
}
