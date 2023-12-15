import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation" className="grid place-content-center">
      <ul className="inline-flex">
        <li>
          <button className="focus:shadow-outline h-10 rounded-r-lg bg-primary-P300 px-5  text-white transition-colors duration-150 hover:bg-primary-P400">
            Next
          </button>
        </li>
        <li>
          <button className="focus:shadow-outline h-10 px-5 text-sm text-black transition-colors duration-150">
            1
          </button>
        </li>
        <li>
          <button className="focus:shadow-outline h-10 bg-white px-5 text-sm text-gray-400 transition-colors duration-150 hover:bg-primary-P100">
            2
          </button>
        </li>
        <li>
          <button className="focus:shadow-outline h-10 bg-white px-5 text-sm text-gray-400 transition-colors duration-150 hover:bg-primary-P100">
            3
          </button>
        </li>
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
