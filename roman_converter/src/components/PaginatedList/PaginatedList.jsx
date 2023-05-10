import React, { useState } from "react";

const pageSize = 10;

function PaginatedList({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const currentPageData = data.slice(startIdx, endIdx);
  
  const totalPages = Math.ceil(data.length / pageSize);
  
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div style={{position: "relative",height:"300px"}}>
      <div>
      {currentPageData.map((item) => (
        <div>{item.timeStamp}: {item.convertedNr}</div>
        ))}
      <div style={{position: "absolute", bottom: 0}}>
        <button className="osg-button" style={{marginTop:"30px"}} onClick={goToPrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button className="osg-button" style={{marginTop:"30px"}} onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
        </div>
  );
}

export default PaginatedList;
