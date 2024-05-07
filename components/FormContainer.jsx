export default function FormContainer({ children, className }) {
  return (
    <section className="bg-slate-100 py-12 text-center">
      <div className="container mx-auto px-4">
        <div className={`mx-auto ${className}`}>
          <div className="rounded-lg bg-white p-8 shadow-lg">{children}</div>
        </div>
      </div>
    </section>
  );
}
