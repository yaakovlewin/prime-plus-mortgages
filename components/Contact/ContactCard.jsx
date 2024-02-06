export default function ContactCard({ title, children }) {
  return (
    <div className="rounded-lg bg-sky-200 p-8 shadow-md transition-shadow duration-500 hover:shadow-lg">
      <h3 className="mb-2 text-xl font-semibold text-cyan-600">{title}</h3>
      {children}
    </div>
  );
}
