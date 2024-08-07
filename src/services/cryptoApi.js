const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-4iqXxLnATz5uu3DL2JiA245v";

const getCoinsList = (currency, page) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&per_page=20&page=${page}&x-cg-demo-api-key=${API_KEY}`;

const getSearchList = (query) =>
  `${BASE_URL}/search?query=${query}&x-cg-demo-api-key=${API_KEY}`;

const getChartData = (coin) =>
  `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7&x-cg-demo-api-key=${API_KEY}`;

export { getCoinsList, getSearchList, getChartData };
