import React from "react";
import { usePagination, DOTS } from "../hooks/usePagination";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <nav aria-label="Page navigation" className="grid place-content-center">
      <ul className="inline-flex gap-2">
        <li>
          <button
            className="focus:shadow-outline h-10 cursor-pointer rounded-lg border border-gray-200 px-5 text-gray-500 transition-colors duration-150 hover:bg-primary-P400 hover:text-white"
            onClick={onNext}
            disabled={currentPage === lastPage}
          >
            Next
          </button>
        </li>
        {paginationRange.map((pageNumber, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li key={index}>
                <button className="focus:shadow-outline h-10 bg-white px-5 text-sm text-gray-400 transition-colors duration-150 hover:bg-primary-P100">
                  &#8230;
                </button>
              </li>
            );
          }
          return (
            <li key={pageNumber}>
              <button
                className={`focus:shadow-outline h-10 rounded-md border border-gray-200 ${
                  currentPage === pageNumber
                    ? "bg-primary-P300 text-white"
                    : "bg-white text-gray-400 hover:bg-primary-P100"
                } px-5 text-sm transition-colors duration-150`}
                onClick={() => onPageChange(pageNumber)}
                disabled={currentPage === pageNumber}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
        <li>
          <button
            className="focus:shadow-outline h-10 rounded-md rounded-l-lg border border-gray-200 px-5 text-gray-500 transition-colors duration-150 hover:bg-primary-P400 hover:text-white"
            onClick={onPrevious}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
