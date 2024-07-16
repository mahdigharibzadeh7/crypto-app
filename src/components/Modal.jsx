import Chart from "./Chart";

function Modal({ setShowModal, chartData, chartType, setChartType }) {
  const closeHandler = () => {
    setShowModal((modal) => !modal);
    setChartType("prices");
  };
  return (
    <div className="w-full fixed min-h-[100vh] top-0 left-0 backdrop-blur-sm z-10">
      <button className="bg-red-500 rounded-lg p-2 m-10" onClick={closeHandler}>
        ✖
      </button>
      <Chart
        chartData={chartData}
        chartType={chartType}
        setChartType={setChartType}
      />
    </div>
  );
}

export default Modal;
