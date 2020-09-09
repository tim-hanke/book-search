import React, { Component } from "react";
import "./PrintTypeSelector.css";

class PrintTypeSelector extends Component {
  render() {
    return (
      <>
        <label htmlFor="printType">Print Type:</label>
        <select name="printType" id="printType">
          <option value="all">All</option>
          <option value="books">Books</option>"
          <option value="magazines">Magazines</option>
        </select>
      </>
    );
  }
}

export default PrintTypeSelector;
