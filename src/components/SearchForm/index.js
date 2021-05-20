import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm({ search, handleFormSubmit, handleInputChange }) {
  return (
      <div className="form-group">
    <form className="search">
        <input
          value={search}
          onChange={handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Search"
          id="term"
        />
    </form>
      </div>
  );
}

export default SearchForm;
