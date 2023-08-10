import React, { useState } from "react";
import { Document, Page } from "react-pdf";

// const options = {
//   cMapUrl: "/cmaps/",
//   // workerSrc: "/pdf.worker.js"
// };

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <div className="all-page-container relative">
      <p className="absolute z-10 rounded-l-md bg-slate-800 p-3 text-primary-P200">
        Total Pages <span className="font-bold">{numPages}</span>
      </p>
      <Document
        file={pdf}
        // options={options}
        scale={1}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}
