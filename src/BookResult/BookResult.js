import React, { Component } from "react";
import "./BookResult.css";

class BookResult extends Component {
  render() {
    const { title, author, thumbnail, price, description } = this.props;
    return (
      <div className="BookResult">
        <h2 className="BookResult_title">{title}</h2>
        <img className="BookResult_thumbnail" src={thumbnail} alt={title} />
        <div className="BookResult_summary">
          <p className="BookResult_author">Author: {author}</p>
          <p className="BookResult_price">Price: $ {price}</p>
          <p className="BookResult_description">{description}</p>
        </div>
      </div>
    );
  }
}

export default BookResult;
