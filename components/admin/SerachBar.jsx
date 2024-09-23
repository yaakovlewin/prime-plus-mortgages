"use client";

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search applications..."
        className="w-full rounded-md border px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
