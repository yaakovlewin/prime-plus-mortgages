export default function Heading2({ children, className }) {
    return (
        <h2
            className={`text-3xl font-bold text-center mb-6 font-zilla-slab  ${
                className || "text-sky-900"
            }`}
        >
            {children}
        </h2>
    );
}
