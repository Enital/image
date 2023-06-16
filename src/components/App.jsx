import { useState } from "react";

import SearchBar from "./SearchBar/SearchBar";
// import SearchText from "./SearchText/SearchText";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchText, setSearchText] = useState('');

  const submitForm = (query) => {
    if (query !== searchQuery) {
      setSearchQuery(query);
    }
  }
  
  return (
    <div>
      <SearchBar onFormSubmit={submitForm}/>
      {/* {searchQuery&&<SearchText searchText={searchQuery} />} */}
    </div>
  );
};
