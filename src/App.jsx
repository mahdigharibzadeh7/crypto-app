import { useState } from "react";

import MainContent from "./components/MainContent";
import Modal from "./components/Modal";
import Layout from "./layouts/Layout";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [chartType, setChartType] = useState("prices");

  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          chartData={chartData}
          chartType={chartType}
          setChartType={setChartType}
        />
      )}

      <Layout>
        <MainContent setShowModal={setShowModal} setChartData={setChartData} />
      </Layout>
    </>
  );
}

export default App;
