import { useState } from "react";
import SearchBox from "./SearchBox";
import Table from "../layouts/Table";
import Pagination from "./Pagination";

function MainContent() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);

  const pagesLength = coins.length;

  const paginationHandler = (e) => {
    setPage(e.target.textContent);
  };

  return (
    <div>
      <SearchBox />
      <Table coins={coins} setCoins={setCoins} page={page} />
      <Pagination
        pagesLength={pagesLength}
        paginationHandler={paginationHandler}
      />
    </div>
  );
}

export default MainContent;
