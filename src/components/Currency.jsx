import React from "react";

function Currency({ currencyHandler }) {
  return (
    <div>
      <select
        className="bg-zinc-700 p-2 rounded-lg focus:outline-none"
        name="currency"
        onChange={currencyHandler}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
}

export default Currency;
