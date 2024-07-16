import { useEffect, useState } from "react";
import { getChartData, getCoinsList } from "../services/cryptoApi";
import Lottie from "react-lottie-player";
import loader from "../assets/loader.json";
import chart_up from "../assets/chart-up.svg";
import chart_down from "../assets/chart-down.svg";

function CoinsTable({
  coins,
  setCoins,
  page,
  currency,
  setShowModal,
  setChartData,
}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(getCoinsList(currency, page));
        const json = await response.json();
        setCoins(json);
        setIsLoading(false);
      } catch (err) {
        console.log(err.name);
      }
    };
    fetchCoins();
  }, [page, currency]);
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <Lottie className="w-[50%]" animationData={loader} play loop />
        </div>
      ) : (
        <table className="w-full mt-5 border-separate border-spacing-y-7">
          <thead>
            <tr className="text-left font-bold text-xl">
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                key={coin.id}
                coin={coin}
                currency={currency}
                setShowModal={setShowModal}
                setChartData={setChartData}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default CoinsTable;

const TableRow = ({ coin, currency, setShowModal, setChartData }) => {
  const modalHandler = async () => {
    try {
      const response = await fetch(getChartData(coin.id));
      const json = await response.json();
      setChartData({ ...json, coin });
      setShowModal((modal) => !modal);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr>
      <td
        className="flex items-center gap-x-3 cursor-pointer"
        onClick={modalHandler}
      >
        <img className="w-7 rounded-full" src={coin.image} alt={coin.name} />
        <span>{coin.symbol.toUpperCase()}</span>
      </td>
      <td>{coin.name}</td>
      <td>
        {currency === "usd" ? "$" : currency === "eur" ? "€" : "¥"}
        {coin.current_price.toLocaleString()}
      </td>
      <td
        className={`${
          coin.price_change_percentage_24h > 0
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>
        {currency === "usd" ? "$" : currency === "eur" ? "€" : "¥"}
        {coin.total_volume.toLocaleString()}
      </td>
      <td>
        <img
          src={`${
            coin.price_change_percentage_24h > 0 ? chart_up : chart_down
          }`}
          alt={`${coin.name} chart`}
        />
      </td>
    </tr>
  );
};
