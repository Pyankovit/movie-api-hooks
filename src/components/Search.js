import React, { useState } from "react";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
    callSearchFunction();
  }

//   const resetInputField = () => {
//     setSearchValue("");
//   }

  const callSearchFunction = (e) => {
    props.search(searchValue);
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
      </form>
    );
}

export default Search;
//<input onClick={callSearchFunction} type="submit" value="SEARCH" />