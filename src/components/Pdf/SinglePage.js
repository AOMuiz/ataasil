import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import CtaButton from "../CtaButton";

// const options = {
//   cMapUrl: "/cmaps/",
//   // workerSrc: "/pdf.worker.js"
// };

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <div className="max-h-screen overflow-auto">
      <Document
        file={pdf}
        // options={options}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale={1} className="mx-auto" />
      </Document>
      <div className="">
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <div className="flex w-full items-center gap-5">
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className=" bg-primary-P300"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
