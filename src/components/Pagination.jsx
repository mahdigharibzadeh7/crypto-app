import PaginateButton from "./PaginateButton";

function Pagination({ currentNumber, setCurrentNumber, paginationHandler }) {
  const ButtonNumber = [1, 2, 3, 4, 5, 16, 17, 18, 19, 20];

  const prevHandler = () => {
    if (currentNumber > 1) setCurrentNumber((num) => num - 1);
  };
  const nextHandler = () => {
    if (currentNumber < 20) setCurrentNumber((num) => num + 1);
  };

  return (
    <div className="w-full mx-5 flex justify-center gap-x-2">
      <button
        className={`border border-blue-500 w-24 py-1 rounded-lg bg-blue-500 ${
          currentNumber === 1 && "opacity-30 hover:cursor-not-allowed"
        }`}
        onClick={prevHandler}
      >
        Previous
      </button>
      {ButtonNumber.slice(0, 5).map((num) => (
        <PaginateButton
          key={num}
          number={num}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
          paginationHandler={paginationHandler}
        />
      ))}
      {
        <>
          {currentNumber > 5 && currentNumber < 16 && (
            <>
              <span>...</span>
              <PaginateButton
                number={currentNumber}
                currentNumber={currentNumber}
                setCurrentNumber={setCurrentNumber}
                paginationHandler={paginationHandler}
              />
            </>
          )}
        </>
      }
      <span>...</span>
      {ButtonNumber.slice(5).map((num) => (
        <PaginateButton
          key={num}
          number={num}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
          paginationHandler={paginationHandler}
        />
      ))}
      <button
        className={`border border-blue-500 w-24 py-1 rounded-lg bg-blue-500 ${
          currentNumber === 20 && "opacity-30 hover:cursor-not-allowed"
        }`}
        onClick={nextHandler}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
