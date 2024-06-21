"use client";
import React, { useState } from "react";

function Pagination({currentPage,setCurrentPage,totalPages}) {
 return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="flex gap-3 items-center -space-x-px h-8 text-sm">
          <li onClick={() => {currentPage >= 2 && currentPage <= 3 ? (setCurrentPage(currentPage-1)) : (null) } } className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-[#ECECEC] rounded-[8px]">
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </li>
          
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`${
                currentPage === index + 1
                  ? "bg-black text-[#FFFFFF]"
                  : "text-[#2E2A2A] bg-[#ECECEC]"
              } cursor-pointer flex items-center justify-center px-3 h-8 text-[14px] leading-[20px] rounded-[8px]`}
            >
              {index + 1}
            </li>
          ))}



          <li onClick={() => {currentPage >= 0 && currentPage <= 2  ? (setCurrentPage(currentPage+1)) : (null) } } className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-[#ECECEC] rounded-[8px]">
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;



