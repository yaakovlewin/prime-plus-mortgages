const camelToTitle = (camelCase) => {
  if (typeof camelCase !== "string") return camelCase;
  return camelCase
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between lowercase and uppercase letters
    .replace(/([A-Z])/g, " $1") // Add space before each uppercase letter
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter of the string
    .replace(/\b\w/g, (str) => str.toUpperCase()) // Capitalize the first letter of each word
    .replace(/Id/g, "ID"); // Replace 'Id' with 'ID'
};

export { camelToTitle };
