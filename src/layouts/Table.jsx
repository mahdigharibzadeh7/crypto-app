import CoinTableRow from "../components/CoinTableRow";

function Table({ coins, setCoins, page, currency }) {
  return (
    <table className="w-full mt-5 border-separate border-spacing-y-7">
      <thead>
        <tr className="text-left font-bold text-xl">
          <th>Coin</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h</th>
          <th>Total Volume</th>
          <th>chart</th>
        </tr>
      </thead>
      <CoinTableRow
        coins={coins}
        setCoins={setCoins}
        page={page}
        currency={currency}
      />
    </table>
  );
}

export default Table;
