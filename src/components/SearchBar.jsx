import React from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      className="search"
      onChange={(e) =>
        dispatch({ type: "ui/search", payload: e.target.value })
      }
    />
  );
};

export default SearchBar;
