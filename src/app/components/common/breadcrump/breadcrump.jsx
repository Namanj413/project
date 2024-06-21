import Link from "next/link";
import React from "react";

function BreadCrump({ title, url, subtitle }) {
  return (
    <>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-[#2E2A2A] text-[14px] leading-[20px] md:text-[14px] md:leading-[20px] lg:text-[14px] lg:leading-[20px] xl:text-[14px] xl:leading-[20px] font-medium  hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Home
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
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
              <Link href={url}>
                <span className="ms-1 capitalize text-[#667085] text-[14px] leading-[20px] md:text-[14px] md:leading-[20px] lg:text-[14px] lg:leading-[20px] xl:text-[14px] xl:leading-[20px] font-medium  md:ms-2 dark:text-[#FF6B00]">
                  {title}
                </span>
              </Link>
            </div>
          </li>
          {subtitle != " " && title != " " && (
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
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

                <span className="cursor-pointer ms-1 capitalize text-[#667085] text-[14px] leading-[20px] md:text-[14px] md:leading-[20px] lg:text-[14px] lg:leading-[20px] xl:text-[14px] xl:leading-[20px] font-medium  md:ms-2 dark:text-[#FF6B00]">
                  {subtitle}
                </span>
              </div>
            </li>
          )}
        </ol>
      </nav>
    </>
  );
}

export default BreadCrump;
