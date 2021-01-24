import React from 'react';
import SearchBar from './SearchBar';

const SearchArea = () => {
  const text = 'Enter your search here.';
  return (
    <div>
      {text}
      <SearchBar onSubmit={(query) => {alert(`Your query was ${query}!`)}} />
    </div>
  );
};

export default SearchArea;
