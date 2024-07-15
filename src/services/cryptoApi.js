const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-4iqXxLnATz5uu3DL2JiA245v";

const getCoinsList = (currency, page) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&per_page=20&page=${page}&x-cg-demo-api-key=${API_KEY}`;
};

const getSearchList = (currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&x-cg-demo-api-key=${API_KEY}`;
};

export { getCoinsList, getSearchList };
