"use client";

import React, { useState, useRef } from "react";
import { Document, Page } from "react-pdf";
import { GrNext, GrPreview } from "react-icons/gr";

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const divRef = useRef();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber((prevState) => prevState + 1);
    }
  };
  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevState) => prevState - 1);
    }
  };

  return (
    <>
      {/* <div ref={divRef}>
        <div>
          {pageNumber}/{numPages}
        </div>
        <div style={{ margin: "10px 0" }}>
          {pageNumber > 1 && (
            <button onClick={handlePrevPage}>
              <GrPreview />
            </button>
          )}
          {pageNumber < numPages && (
            <button onClick={handleNextPage}>
              <GrNext />
            </button>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Document file="ehizcv.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              width={divRef.current?.clientWidth * 0.95}
            ></Page>
          </Document>
        </div>
      </div> */}
      <div className="mt-30 h-screen">
        <iframe
          src="ehizcv.pdf"
          frameborder="0"
          className=" justify-center w-full h-screen"
        ></iframe>
      </div>
    </>
  );
};
export default PdfViewer;
