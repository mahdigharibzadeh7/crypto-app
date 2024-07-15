function PaginateButton({
  number,
  currentNumber,
  setCurrentNumber,
  paginationHandler,
}) {
  const buttonHandler = () => {
    paginationHandler(number);
    setCurrentNumber(number);
  };
  return (
    <button
      className={`border px-3 py-1 rounded-lg hover:bg-blue-500 ${
        number === currentNumber ? "bg-blue-500" : "bg-inherit"
      }`}
      onClick={buttonHandler}
    >
      {number}
    </button>
  );
}

export default PaginateButton;
