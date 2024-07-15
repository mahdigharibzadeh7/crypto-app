function Modal({ showModal, setShowModal }) {
  const closeHandler = () => {
    setShowModal((modal) => !modal);
  };
  return (
    <div
      className={`w-full ${
        showModal && "fixed"
      }  min-h-[100vh] top-0 left-0 backdrop-blur-sm z-10 ${!showModal && "hidden"}`}
    >
      <button className="bg-red-500 rounded-lg p-2 m-10" onClick={closeHandler}>
        ✖
      </button>
      <div className="flex justify-center items-center max-w-full min-h-[100vh]">
        this is chart
      </div>
    </div>
  );
}

export default Modal;
