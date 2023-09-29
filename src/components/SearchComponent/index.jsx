import React, { useState } from "react";

const SearchComponent = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    onSearch(text);
  };

  return (
    <input
      type="text"
      placeholder="Enter..."
      value={searchText}
      onChange={handleInputChange}
    />
  );
};

export default SearchComponent;
