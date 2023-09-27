import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPageCount } from "./helper";
import { roomContext } from "../../context/roomContext";

const CustomPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { pages } = useContext(roomContext);

  const handleChangePage = (page) => {
    searchParams.set("_page", page);
    setSearchParams(searchParams);
    setCurrentPage(page);
  };

  return (
    <div class="pagination">
      <button
        class="prev-button"
        disabled={currentPage === 1}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        Prev
      </button>
      <div class="page-numbers">
        {getPageCount(pages).map((item) => (
          <button
            key={item}
            className={`page-number ${currentPage === item && "active"}`}
            onClick={() => handleChangePage(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        class="next-button"
        disabled={currentPage === pages}
        onClick={() => handleChangePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default CustomPagination;
