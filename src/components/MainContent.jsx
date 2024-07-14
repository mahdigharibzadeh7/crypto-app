import { useState } from "react";
import SearchBox from "./SearchBox";
import Table from "../layouts/Table";
import Pagination from "./Pagination";
import Currency from "./Currency";

function MainContent() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  const pagesLength = coins.length;

  const paginationHandler = (e) => {
    setPage(e.target.textContent);
  };

  const currencyHandler = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center mt-40 gap-x-5">
        <SearchBox />
        <Currency currencyHandler={currencyHandler} />
      </div>
      <Table
        coins={coins}
        setCoins={setCoins}
        page={page}
        currency={currency}
      />
      <Pagination
        pagesLength={pagesLength}
        paginationHandler={paginationHandler}
      />
    </div>
  );
}

export default MainContent;
