import React from "react";

function Filter({ search, onSearchChange, selectedCategory, onCategoryChange }) {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        value={search}
        onChange={handleSearchChange} // Handle search input changes
        placeholder="Search..."
      />
      <select
        name="filter"
        value={selectedCategory}
        onChange={onCategoryChange} // Handle category filter changes
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
