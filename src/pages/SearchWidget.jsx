// src/SearchWidget.js
import React, { useState } from 'react';
import './SearchWidget.css';

const SearchWidget = ({ onSearch, posts }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-widget">
      <h3>Search</h3>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>SEARCH</button>
      </div>
      <h3>Recent Posts</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchWidget;
