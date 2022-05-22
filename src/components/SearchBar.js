import React, { useState } from "react";

const SearchBar = ({ whenSubmitted }) => {
  const [term, setTerm] = useState("");
  // const onInputChange = (e) => {
  //   setTerm(e.target.value);
  // };
  const onFormSubmit = (e) => {
    e.preventDefault();
    // TO-DO Make sure we call
    whenSubmitted(term);
    // Callback from parent-component
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Search for a Video:</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
