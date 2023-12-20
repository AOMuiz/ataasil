import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const generatePages = () => {
    const pages = [];
    const displayRange = 3; // Adjust this number to display more or fewer pages

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - displayRange && i <= currentPage + displayRange)
      ) {
        pages.push(i);
      }
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <nav aria-label="Page navigation" className="grid place-content-center">
      <ul className="inline-flex">
        <li>
          <button
            className="focus:shadow-outline h-10 rounded-r-lg bg-primary-P300 px-5  text-white transition-colors duration-150 hover:bg-primary-P400"
            onClick={() => onPageChange("next")}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`focus:shadow-outline h-10 ${
                currentPage === page
                  ? "bg-primary-P300 text-white"
                  : "bg-white text-gray-400 hover:bg-primary-P100"
              } px-5 text-sm transition-colors duration-150`}
              onClick={() => onPageChange(page)}
              disabled={currentPage === page}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button className="focus:shadow-outline h-10 bg-white px-5 text-sm text-gray-400 transition-colors duration-150 hover:bg-primary-P100">
            ...
          </button>
        </li>
        <li>
          <button className="focus:shadow-outline h-10 rounded-l-lg px-5 text-gray-400 transition-colors duration-150 hover:bg-primary-P100 active:bg-primary-P300 active:text-white">
            Prev
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
