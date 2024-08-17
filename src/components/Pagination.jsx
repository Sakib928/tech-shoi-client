import useAuth from "../hooks/useAuth";

const Pagination = () => {
  const { pages, currentPage, setCurrentPage } = useAuth();
  // console.log(pages[pages.length - 1] + 1);
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className="flex justify-center space-x-1  my-4 font-bold">
      <button
        onClick={handlePrev}
        title="previous"
        type="button"
        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md "
        disabled={currentPage == 1}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      {pages.map((page) => {
        return (
          <button
            onClick={() => setCurrentPage(page + 1)}
            key={page}
            type="button"
            title="Page 1"
            className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md ${
              currentPage == page + 1 ? "scale-125 text-blue-600" : "scale-100"
            }`}
          >
            {page + 1}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        title="next"
        type="button"
        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md"
        disabled={currentPage == pages[pages.length - 1] + 1}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
