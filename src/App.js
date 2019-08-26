import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar/SearchBar";
import List from "./FilterableList/List/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {
        items: []
      }
    };
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=henry")
      .then(response => {
        if (!response.ok) {
          throw new Error("Soemthing went wrong!");
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  onSubmitForm = e => {
    e.preventDefault();
    let searchTerm = document.getElementById("searchinput").value;
    console.log(searchTerm);
    let printType = document.getElementById("print-type").value;
    console.log(printType);
    let bookType = document.getElementById("book-type").value;
    console.log(bookType);

    let url =
      printType === "all"
        ? `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=${bookType}`
        : `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=${printType}&printType=${bookType}`;

    document.getElementById("searchinput").value = "";

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <SearchBar onSubmitForm={this.onSubmitForm} />
        <main>
          <List books={this.state.books} />
        </main>
      </div>
    );
  }
}

export default App;
