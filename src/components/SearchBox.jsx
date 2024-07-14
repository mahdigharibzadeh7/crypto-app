import { useState } from "react";
import SearchResult from "./SearchResult";

function SearchBox() {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        className="bg-zinc-700 w-72 p-2 rounded-lg focus:outline-none"
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />
      {search && <SearchResult search={search} />}
    </div>
  );
}

export default SearchBox;
