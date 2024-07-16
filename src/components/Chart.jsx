import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { convertChartData } from "../helpers/convertChartData";
import ChartButton from "./ChartButton";

function Chart({ chartData, chartType, setChartType }) {
  return (
    <div className="bg-zinc-950 border border-slate-700 rounded-lg mx-64 min-h-20 px-10">
      <div className="flex items-center mx-5 mt-5 mb-8">
        <img
          className="w-10"
          src={chartData.coin.image}
          alt={chartData.coin.name}
        />
        <div className="mx-3 font-bold text-xl">{chartData.coin.name}</div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          width={300}
          height={300}
          data={convertChartData(chartData, chartType)}
        >
          <CartesianGrid stroke="#404042" />
          <XAxis dataKey="date" hide />
          <YAxis dataKey={chartType} domain={["auto", "auto"]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={chartType}
            stroke="#3874ff"
            strokeWidth="2px"
          />
        </LineChart>
      </ResponsiveContainer>
      {["Prices", "Market Caps", "Total Volumes"].map((item) => (
        <ChartButton
          key={item}
          buttName={item}
          chartType={chartType}
          setChartType={setChartType}
        />
      ))}
      <div className="flex mx-10 gap-x-28 text-blue-500 font-bold mt-10 mb-5">
        <div>
          Price:{" "}
          <span className="text-white font-normal">
            ${chartData.coin.current_price}
          </span>
        </div>
        <div>
          ATH:{" "}
          <span className="text-white font-normal">${chartData.coin.ath}</span>
        </div>
        <div>
          Market Cap:{" "}
          <span className="text-white font-normal">
            ${chartData.coin.market_cap}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chart;
