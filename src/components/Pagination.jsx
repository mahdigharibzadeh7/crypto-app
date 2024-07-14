function Pagination({ pagesLength, paginationHandler }) {
  const paginationNumber = [];
  for (let index = 1; index <= pagesLength; index++) {
    paginationNumber.push(index);
  }

  return (
    <div className="w-full mx-5 flex justify-center gap-x-2">
      {paginationNumber.map((pn) => (
        <button
          key={pn}
          className="border px-3 py-1 rounded-lg hover:bg-blue-500"
          onClick={paginationHandler}
        >
          {pn}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
