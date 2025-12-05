import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../store/uiSlice"; // <-- import new action

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      className="search"
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  );
};

export default SearchBar;
