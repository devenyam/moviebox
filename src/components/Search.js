import React from 'react';

export default function Search({ movieSearch, onSetSearch, onSearch }) {
  return (
    <div className="search">
      <label htmlFor="search" />
      <input
        type="text"
        id="search"
        placeholder="Search for a movie..."
        value={movieSearch}
        onChange={onSetSearch}
      />
      <button type="button" onClick={onSearch}>
        <img src="search-icon.svg" alt="search icon" />
      </button>
    </div>
  );
}
