"use client";
import { useState, useEffect } from "react";

export default function NationalityDropdown() {
  const [nationalities, setNationalities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [filteredNationalities, setFilteredNationalities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((response) => response.json())
      .then(function setData(data) {
        setNationalities(data.map((country) => country.name));
      });
  }, []);

  function handleBlur() {
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  }

  const filteredNationalities = nationalities.filter((nationality) =>
    nationality.common.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="sm:col-span-3">
      <label
        htmlFor="nationality"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Nationality
      </label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowDropdown(true)}
        onBlur={handleBlur}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Search nationality..."
      />
      {showDropdown && (
        <ul className="max-h-60 overflow-auto rounded-md border border-gray-300">
          {filteredNationalities.map((nationality, index) => (
            <li
              key={index}
              onClick={() => {
                console.log("Clicked on:", nationality.common);
                setSearchTerm(nationality.common);
                console.log("Search Term set to:", searchTerm);
                setShowDropdown(false);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              {nationality.common}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
