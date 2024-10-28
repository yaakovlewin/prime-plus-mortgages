export default function Heading2({ children, className }) {
  return (
    <h2
      className={`mb-8 text-center font-zilla-slab text-2xl font-bold tracking-wider md:text-2xl ${
        className || "text-cyan-50"
      }`}
    >
      {children}
    </h2>
  );
}
