import React from 'react';

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search Twitter"
      className="w-full bg-gray-800 text-white rounded-full px-4 py-2 outline-none"
    />
  );
}

export default SearchBar;
