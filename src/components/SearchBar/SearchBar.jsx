import React from "react";
import "./styles.css";
export const SearchBar = (props) => {
  const { onChange } = props;
  return (
    <div>
      <input
        placeholder="Search GitHub User"
        onChange={(e) => onChange(e.target.value)}
        className="searchBar"
      />
    </div>
  );
};
