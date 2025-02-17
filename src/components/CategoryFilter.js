import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryClick }) {
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleChangeCategory(event) {
    const category = event.target.textContent;
    setSelectedCategory(category);
    onCategoryClick(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          className={selectedCategory === category ? "selected" : ""}
          key={category}
          onClick={handleChangeCategory}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
