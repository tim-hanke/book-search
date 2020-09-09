import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    return (
      <>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" placeholder="Search term" />
        <button type="submit">Search</button>
      </>
    );
  }
}

export default SearchBox;
