import React, { Component } from "react";
import formatQueryParams from "../formatQueryParams/formatQueryParams";
import "./SearchBar.css";

const APIkey = process.env.REACT_APP_GOOGLE_API_KEY;
const APIurl = "https://www.googleapis.com/books/v1/volumes";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      printType: "all",
      filter: "nofilter",
    };
  }

  qChanged(q) {
    this.setState({
      q,
    });
  }

  printTypeChanged(printType) {
    this.setState({
      printType,
    });
  }

  filterChanged(filter) {
    this.setState({
      filter,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { q, printType, filter } = this.state;
    const params = {
      q,
      printType,
      key: APIkey,
    };

    if (filter !== "nofilter") {
      params.filter = filter;
    }

    fetch(`${APIurl}?${formatQueryParams(params)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.items);
        this.props.showBooks(data.items);
        this.setState({
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    const error = this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : (
      ""
    );

    return (
      <form
        className="SearchBar"
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <div className="SearchBar_Box">
          <label htmlFor="q">Search:</label>
          <input
            type="text"
            name="q"
            id="q"
            placeholder="Search term"
            value={this.state.q}
            onChange={(e) => this.qChanged(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
        <div className="SearchBar_Options">
          <label htmlFor="printType">Print Type:</label>
          <select
            name="printType"
            id="printType"
            value={this.state.printType}
            onChange={(e) => this.printTypeChanged(e.target.value)}
          >
            <option value="all">All</option>
            <option value="books">Books</option>"
            <option value="magazines">Magazines</option>
          </select>
          <label htmlFor="filter">Book Type:</label>
          <select
            name="filter"
            id="filter"
            value={this.state.filter}
            onChange={(e) => this.filterChanged(e.target.value)}
          >
            <option value="nofilter">All</option>
            <option value="ebooks">All eBooks</option>"
            <option value="free-ebooks">Free eBooks</option>
            <option value="paid-ebooks">Paid eBooks</option>
          </select>
        </div>
        {error}
      </form>
    );
  }
}

export default SearchBar;
