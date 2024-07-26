// src/components/SearchSection.jsx
import { Search } from 'lucide-react';
import React, { useState } from 'react';

const SearchSection = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the search logic here
    console.log('Search query:', query);
  };

  return (
    <div className="p-32 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold dark:text-white mb-4 text-center">Search for Courses</h2>
      <div className="border-b-4 border-blue-600 mb-16 mx-auto w-20"></div>
      <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search courses..."
            className="w-full p-3 border border-blue-300 rounded-lg bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-500" />
          </span>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchSection;
