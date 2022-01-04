import React from "react";
import './search-box.css';

const SearchBox = ({handelchange,placeholder}) => {
  return (
    <div>
      <input
        className="search_bar"
        type="search"
        placeholder={placeholder}
        onChange={handelchange}
      />
    </div>
  );
};
export default SearchBox;
