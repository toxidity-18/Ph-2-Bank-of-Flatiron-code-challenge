import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search transactions"
        className="p-2 border border-gray-300 rounded w-full"
      />
    </div>
  );
}

export default SearchBar;
