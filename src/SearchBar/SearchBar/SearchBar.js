import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import Filters from "../Filters/Filters";

export default function SearchBar(props) {
  return (
    <form onSubmit={props.onSubmitForm} className="form">
      <SearchInput />
      <Filters />
    </form>
  );
}
