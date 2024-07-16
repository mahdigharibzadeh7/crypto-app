function ChartButton({ buttName, chartType, setChartType }) {
  const type = buttName.toLowerCase().replace(" ", "_");
  return (
    <button
      className={`text-blue-500 mx-10 mt-10 w-32 p-1 rounded-lg border-2 border-blue-500 hover:text-white hover:bg-blue-500 ${
        chartType === type && "bg-blue-500 text-white"
      }`}
      onClick={() => setChartType(type)}
    >
      {buttName}
    </button>
  );
}

export default ChartButton;
