export default function ContactCard({ title, children }) {
  return (
    <div className="border-beige-100 rounded-lg border-2 bg-white p-6 shadow-lg transition-shadow duration-500 hover:shadow-2xl">
      {/* <div className=" absolute -mt-2 ml-3 h-4 w-4 rounded-full bg-red-600"></div> */}
      <h3 className="mb-2 text-xl font-semibold text-cyan-600">{title}</h3>
      {children}
    </div>
  );
}
