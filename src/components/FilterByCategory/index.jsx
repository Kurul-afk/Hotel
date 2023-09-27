import React, { useContext, useEffect, useState } from "react";
import { roomContext } from "../../context/roomContext";
import { useSearchParams } from "react-router-dom";

const FilterByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { categories, category, getCategories } = useContext(roomContext);

  useEffect(() => {
    getCategories();
    if (searchParams.get("category")) {
      setSelectedCategory(searchParams.get("category"));
    }
  }, []);

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    setSearchParams({ category: selectedValue });
  };

  return (
    <select value={selectedCategory} onChange={handleCategoryChange}>
      <option value="">Choose category</option>
      {categories &&
        categories.map((item) => (
          <option value={item.category} key={item.id}>
            {item.category}
          </option>
        ))}
    </select>
  );
};

export default FilterByCategory;
