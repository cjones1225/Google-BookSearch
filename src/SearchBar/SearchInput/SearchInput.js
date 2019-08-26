import React, { Component } from "react";
import "./SearchInput.css";

class SearchInput extends Component {
  render() {
    return (
      <div className="search_input">
        <label htmlFor="searchbox">Search: </label>
        <input
          placeholder="Enter search term..."
          name="searchinput"
          id="searchinput"
        />

        <button type="submit">Search</button>
      </div>
    );
  }
}

export default SearchInput;
