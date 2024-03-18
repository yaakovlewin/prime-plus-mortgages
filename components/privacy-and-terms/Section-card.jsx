function SectionCard({ title, children }) {
  return (
    <section className="my-4 rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-2xl font-semibold text-gray-800">{title}</h3>
      <article className="text-gray-700">{children}</article>
    </section>
  );
}

export default SectionCard;
