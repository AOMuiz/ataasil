import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { toast } from "react-toastify";
import { useResizeDetector } from "react-resize-detector";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { cn } from "../../utils/helpers";
import Icon from "../Icon";

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [renderedScale, setRenderedScale] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  const isLoading = renderedScale !== scale;
  const { width, ref } = useResizeDetector();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setCurrPage(1);
  }

  function changePage(offset) {
    setCurrPage((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <div className="all-page-container relative flex-1">
      <div className="sticky top-0 z-10 flex h-10 w-full items-center justify-between border-b border-zinc-200 bg-white px-2 py-[30px] shadow-sm">
        <div className="rounded-md border border-gray-300 px-2">
          <p>
            Page {currPage || (numPages ? 1 : "--")} / {numPages || "--"}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <button
            type="button"
            disabled={currPage <= 1}
            onClick={previousPage}
            className="flex items-center gap-2 bg-primary-P300"
          >
            Previous
            <Icon id="chevron-down" />
          </button>
          <button
            className="flex items-center gap-2"
            type="button"
            disabled={currPage >= numPages}
            onClick={nextPage}
          >
            Next
            <Icon id="chevron-up" />
          </button>
        </div>
      </div>
      <div ref={ref} className="max-h-[calc(100vh-10rem)]">
        <Document
          file={pdf}
          // options={options}
          loading={
            <div
              class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          }
          scale={1}
          onLoadError={() => {
            toast.error("Error loading PDF - Please try again later");
          }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {isLoading && renderedScale
            ? Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1} ${el}`}
                  pageNumber={index + 1}
                  width={width ? width : 1}
                />
              ))
            : null}

          <Page
            className={cn(isLoading ? "hidden" : "")}
            width={width ? width : 1}
            pageNumber={currPage}
            scale={scale}
            rotate={rotation}
            key={"@" + scale}
            loading={
              <div className="flex justify-center">
                <div
                  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            }
            onRenderSuccess={() => setRenderedScale(scale)}
          />
        </Document>
      </div>
    </div>
  );
}
