import { useState } from "react";
import SearchBox from "./SearchBox";
import CoinsTable from "./CoinsTable";
import Pagination from "./Pagination";
import Currency from "./Currency";

function MainContent({ setShowModal }) {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  const paginationHandler = (number) => {
    setPage(number);
  };

  const currencyHandler = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="mx-40">
      <div className="flex items-center mt-40 gap-x-5">
        <SearchBox />
        <Currency currencyHandler={currencyHandler} />
      </div>
      <CoinsTable
        coins={coins}
        setCoins={setCoins}
        page={page}
        currency={currency}
        setShowModal={setShowModal}
      />
      <Pagination
        currentNumber={page}
        setCurrentNumber={setPage}
        paginationHandler={paginationHandler}
      />
    </div>
  );
}

export default MainContent;
