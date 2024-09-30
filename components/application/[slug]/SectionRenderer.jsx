const SectionRenderer = ({ title, children }) => {
  const camelToTitle = (camelCase) => {
    if (typeof camelCase !== "string") return camelCase;
    return camelCase
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between lowercase and uppercase letters
      .replace(/([A-Z])/g, " $1") // Add space before each uppercase letter
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter of the string
      .replace(/\b\w/g, (str) => str.toUpperCase()) // Capitalize the first letter of each word
      .replace(/Id/g, "ID"); // Replace 'Id' with 'ID'
  };

  return (
    <div className="mb-6 rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md">
      <h3 className="mb-4 border-b pb-2 text-xl font-bold text-gray-800">
        {camelToTitle(title)}
      </h3>
      {children}
    </div>
  );
};

export default SectionRenderer;
