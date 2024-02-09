export default function Heading2({ children, className }) {
  return (
    <h2
      className={`mb-10 text-center font-zilla-slab text-2xl font-bold tracking-wider md:text-3xl ${
        className || "text-sky-900"
      }`}
    >
      {children}
    </h2>
  );
}
