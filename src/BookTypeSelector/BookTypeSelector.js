import React, { Component } from "react";
import "./BookTypeSelector.css";

class BookTypeSelector extends Component {
  render() {
    return (
      <>
        <label htmlFor="bookType">Book Type:</label>
        <select name="bookType" id="bookType">
          <option value="nofilter">All</option>
          <option value="ebooks">All eBooks</option>"
          <option value="free-ebooks">Free eBooks</option>
          <option value="paid-ebooks">Paid eBooks</option>
        </select>
      </>
    );
  }
}

export default BookTypeSelector;
