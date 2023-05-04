import React, { useRef } from "react";
import './SearchBar.css'

const SearchBar = ({handleSearch, searchText, setSearchText}) => {
  const inputRef = useRef(null);
  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          handleSearch(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="input"
          placeholder="Search Movie, TV Shows etc..."
          className="input_box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="input_submit" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
