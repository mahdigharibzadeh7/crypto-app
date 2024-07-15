import { useEffect, useState } from "react";
import { getCoinsList } from "../services/cryptoApi";
import Lottie from "react-lottie-player";
import loader from "../assets/loader.json";

function CoinTableRow({ coins, setCoins, page, currency }) {
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(getCoinsList(currency, page));
        const json = await response.json();
        setCoins(json);
        pageLenth = coins.length;
      } catch (err) {
        console.log(err.name);
      }
    };
    fetchCoins();
  }, [page, currency]);
  return (
    <>
      {coins.length ? (
        coins.map((coin) => (
          <tr key={coin.id}>
            <td className="flex items-center gap-x-3">
              <img
                className="w-7 rounded-full"
                src={coin.image}
                alt={coin.name}
              />
              <span>{coin.symbol.toUpperCase()}</span>
            </td>
            <td>{coin.name}</td>
            <td>
              {currency === "usd" ? "$" : currency === "eur" ? "€" : "¥"}
              {coin.current_price.toLocaleString()}
            </td>
            <td
              className={`${
                parseFloat(coin.price_change_percentage_24h) > 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {coin.price_change_percentage_24h}
            </td>
            <td>
              {currency === "usd" ? "$" : currency === "eur" ? "€" : "¥"}
              {coin.total_volume.toLocaleString()}
            </td>
          </tr>
        ))
      ) : (
        <Lottie animationData={loader} play loop />
      )}
    </>
  );
}

export default CoinTableRow;
