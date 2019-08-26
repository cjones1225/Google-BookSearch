import React, { Component } from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";

class List extends Component {
  render() {
    let bookResults = this.props.books.items.map((book, i) => (
      <ListItem {...book} key={i} />
    ));

    return <div className="list">{bookResults}</div>;
  }
}

export default List;
