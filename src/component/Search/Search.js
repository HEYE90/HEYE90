import React from "react";
import SearchIcon from "../../assets/icons/SearchIcon";
import './Search.css'

const Search = (props) => {

  
  const { search, setSearch } = props.value;
  return (
    <div className='search'>
      <input
        type={"text"}
        placeholder={"Search..."}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
