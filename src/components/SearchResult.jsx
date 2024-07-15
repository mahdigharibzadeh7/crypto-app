import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import loader from "../assets/loader.json";
import { getSearchList } from "../services/cryptoApi";

function SearchResult({ search }) {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(getSearchList("usd"), {
          signal: controller.signal,
        });
        const json = await response.json();

        const newRes = json.filter(
          (data) =>
            data.name.toLowerCase().includes(search) ||
            data.symbol.toLowerCase().includes(search)
        );
        setResult(newRes);
        setIsLoading(false);
      } catch (error) {
        console.log(error.name);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <div className="w-72 max-h-80 overflow-auto scrollbar-hide border border-zinc-400 rounded-lg px-3 mt-3">
      {isLoading ? (
        <div className="flex justify-center">
          <Lottie className="w-[50%]" animationData={loader} play loop />
        </div>
      ) : (
        result.map((rs) => (
          <div
            className="flex items-center gap-x-3 my-3 pb-2 border-b border-zinc-800"
            key={rs.id}
          >
            <img className="w-7 rounded-full" src={rs.image} />
            <div key={rs.id}>{rs.name}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchResult;
