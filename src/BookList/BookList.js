import React, { Component } from "react";
import BookResult from "../BookResult/BookResult";
import "./BookList.css";

class BookList extends Component {
  render() {
    const list = this.props.books.map((book, key) => (
      <BookResult {...book} key={key} />
    ));
    return <div className="BookList">{list}</div>;
  }
}

BookList.defaultProps = {
  books: [],
};

export default BookList;
