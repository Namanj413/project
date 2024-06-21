"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const LinkSection = () => {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(false);
  };
  const handleOpenDropdown = () => {
    setShowDropdown(true);
  };

  return (
    <>
      <div
        className="flex items-center lg:gap-12 gap-8 "
        onMouseLeave={handleDropdown}
      >
        <ul className="flex lg:space-x-25  space-x-8  text-sm font-medium  ">
          <li>
            <Link
              className={pathname === "/podcast" && "font-bold"}
              href="/podcast"
            >
              Podcast &nbsp; -
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/speaking" && "font-bold"}
              href="/speaking"
            >
              Speaking &nbsp; -
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/coaching" && "font-bold"}
              href="/coaching"
            >
              Coaching &nbsp; -
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/testimonials" && "font-bold"}
              href="/testimonials"
            >
              Testimonials &nbsp; -
            </Link>
          </li>
          <li className="flex gap-2">
            <Link
              className={pathname === "/about" && "font-bold"}
              href="/about"
              onMouseEnter={handleOpenDropdown}
            >
              About
            </Link>
            <div className="relative z-[999]">
              <div
                className="relative inline-block -mr-2  w-5 h-5"
                aria-hidden="true"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12l-5-5h10l-5 5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {showDropdown && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none  translate-x-1/2 transition-all duration-300 ease-in-out">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href="/bliss"
                      className={`${
                        pathname === "/about-1" && "font-bold"
                      } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                      role="menuitem"
                    >
                        ABOUT-1{" "}
                    </Link>                   
                    <Link
                      href="/pressandmedia"
                      className={`${
                        pathname === "/about-2" && "font-bold"
                      } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                      role="menuitem"
                    >
                      ABOUT-2{" "}
                    </Link>
                    {/* <Link
                      href="/podcast/episode"
                      className={`${
                        pathname === "/podcast/episode" && "font-bold"
                      }  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                      role="menuitem"
                    >
                      Episode
                    </Link> */}
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
     
      </div>
    </>
  );
};

export default LinkSection;
