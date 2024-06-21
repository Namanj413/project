"use client";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import TestimonialsTableCard from "./testimonialstablecard/testimonialstablecard";

import BreadCrump from "../../common/breadcrump/breadcrump";

function Testimonials() {
  const [filterDate, setFilterDate] = useState("");
  const [testimonialsCardVisible, setTestimonialsCardVisible] = useState(false);
  const [searchTestimonials, setSearchTestimonials] = useState("");

  return (
    <>
      {/* --------------MAIN CONTAINER--------------*/}
      <div className="w-full h-fit bg-[#F5F7F9] px-3 flex justify-center">
        {/* --------------MAIN CONTAINER CONTROLLER--------------*/}
        <div className="w-[98%] h-full  flex flex-col gap-9 md:gap-4 py-4">
          {/* --------------MAIN CONTAINER->SECTION 1 - BREADCRUMP--------------*/}
          <div className="w-full h-auto  flex">
            <div className="w-[50%] h-auto flex justify-start">
              <BreadCrump title={" "} url={" "} />
            </div>
          </div>

          {/* --------------MAIN CONTAINER->SECTION 2 - SEARCH AND FILTER --------------*/}
          <div className="w-full h-auto flex-col gap-4 md:gap-0 md:flex-row flex">
            <div className="w-[50%] h-auto">
              <div className="w-[320px] h-[40px]">
                <div className="relative lg:h-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block rounded-[8px] w-full h-full p-4 ps-10 text-sm text-[#858D9D] border-2 border-solid border-[#E0E2E7] "
                    placeholder="Type to search..."
                    required
                    value={searchTestimonials}
                    onChange={(e) => setSearchTestimonials(e.target.value)}
                  />
                </div>
              </div>{" "}
            </div>
            <div className="w-[50%] h-auto hidden justify-end">
              <div className="w-full h-auto justify-end flex gap-4">
                <div className="w-[143px] h-[40px]  font-semibold text-[14px] leading-[20px] bg-[#FFFFFF] py-[10px] px-[8px] text-[#667085] rounded-[8px] flex items-center justify-around border-2 border-solid border-[#E0E2E7]">
                  <input
                    type="date"
                    placeholder="Please select date"
                    onChange={(e) => setFilterDate(e.target.value)}
                    value={filterDate}
                    // ref={fileInputRef}
                    className="bg-transparent custom-date-input w-full h-full "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* --------------MAIN CONTAINER->SECTION 3rd - SEARCH AND FILTER --------------*/}
          <div className="w-full h-auto  flex">
            <TestimonialsTableCard
              searchTestimonials={searchTestimonials}
              setSearchTestimonials={setSearchTestimonials}
              filterDate={filterDate}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
