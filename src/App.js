import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import BookList from "./BookList/BookList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showBooks(books) {
    const newBooks = books.map((book) => ({
      title: book.volumeInfo.title,
      author: book?.volumeInfo?.authors?.join(", "),
      description: book.volumeInfo.description,
      price: book?.saleInfo?.listPrice?.amount
        ? book.saleInfo.listPrice.amount
        : "not available for sale",
      thumbnail: book.volumeInfo.imageLinks.thumbnail,
    }));
    console.log(newBooks);
    this.setState({ books: newBooks });
  }

  render() {
    return (
      <main className="App">
        <h1 className="header">Google Book Search</h1>
        <SearchBar showBooks={(books) => this.showBooks(books)} />
        <BookList books={this.state.books} />
      </main>
    );
  }
}

export default App;
