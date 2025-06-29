export const Pagination = ({ currentPage, handlePageChange, noOfPages }) => {
  return (
    <div className="pages">
      {[...Array(noOfPages).keys()].map((n) => {
        return (
          <button
            key={n}
            className={`page ${currentPage === n + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(n + 1)}
          >
            {n + 1}
          </button>
        );
      })}
    </div>
  );
};
