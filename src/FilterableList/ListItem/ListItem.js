import React from "react";
import "./ListItem.css";

export default function ListItem(props) {
  return (
    <div className="book">
      <h1 className="book-title">{props.volumeInfo.title}</h1>

      {props.volumeInfo.imageLinks ? (
        <img
          className="book-img"
          src={props.volumeInfo.imageLinks.thumbnail}
          alt="book cover"
        />
      ) : null}

      <h2 className="author">Author: {props.volumeInfo.authors}</h2>

      {props.saleInfo.listPrice ? (
        <h2 className="price">Price : ${props.saleInfo.listPrice.amount}</h2>
      ) : (
        <h2>Price: not for sale</h2>
      )}

      <p>{props.searchInfo.textSnippet}</p>
    </div>
  );
}

ListItem.defaultProps = {
  searchInfo: {
    textSnipper: ""
  },
  volumeInfo: {
    title: "",
    imageLinks: []
  },
  saleInfo: {
    listPrice: ""
  }
};
