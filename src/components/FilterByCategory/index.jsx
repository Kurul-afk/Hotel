import React, { useContext, useEffect, useState } from "react";
import { roomContext } from "../../context/roomContext";
import { useSearchParams } from "react-router-dom";

const FilterByCategory = ({ selectedCategory, setSelectedCategory }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categories, getCategories } = useContext(roomContext);

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategoryChange = (e) => {
    const newCategory = parseInt(e.target.value);
    if (newCategory === 0) {
      searchParams.delete("category");
      searchParams.delete("_page");
    } else {
      searchParams.set("category", newCategory);
      searchParams.set("_page", 1);
    }
    setSelectedCategory(newCategory);
    setSearchParams(searchParams);
  };

  return (
    <select onChange={handleCategoryChange} value={selectedCategory}>
      <option value="0">All</option>
      {categories &&
        categories.map((item) => (
          <option value={item.id} key={item.id}>
            {item.category}
          </option>
        ))}
    </select>
  );
};

export default FilterByCategory;
