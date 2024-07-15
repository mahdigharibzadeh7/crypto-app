import { useState } from "react";

import MainContent from "./components/MainContent";
import Modal from "./components/Modal";
import Layout from "./layouts/Layout";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Layout>
        <MainContent setShowModal={setShowModal} />
      </Layout>
    </>
  );
}

export default App;
