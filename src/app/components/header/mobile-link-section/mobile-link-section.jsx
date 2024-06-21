"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const MobileLink = () => {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const closeSidebar = () => {
    setShowSidebar(false);
    setShowDropdown(false);
  };

  const handleOpenDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div>
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className="xl:hidden flex z-50 bg-[#FFFFFF] px-2 py-[17.5px] md:pr-3 md:py-[19.3px] lg:py-[19.3px] max-lg:border-transparent rounded max-lg:rounded-l-none"
      >
        {showSidebar ? (
          <Image
            src="/cross.svg"
            className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] lg:w-[71px] lg:h-[71px] z-50"
            width={100}
            height={100}
            alt="cross"
            unoptimized
          />
        ) : (
          <Image
            src="/menublack.svg"
            className="w-[45px] h-[45px]  md:w-[55px] md:h-[55px] lg:w-[55px] lg:h-[55px] z-50"
              width={100}
            height={100}
            alt="menu"
            unoptimized
          />
        )}
      </div>
      <div
        className={`h-full z-[99] flex flex-col justify-center items-center left-0 bg-[#F8F7F3] top-0 fixed ${
          showSidebar
            ? "  duration-300 w-[70%] transition-all ease-in"
            : "-translate-x-full transition-all ease-out duration-300"
        }`}
      >
        <Link href="/" onClick={closeSidebar}>
          <Image
            src="/next.svg"
            height={100}
            width={110}
            unoptimized
            className="mb-10"
            alt="logo"
          />
        </Link>
        <div className="flex flex-col items-center space-y-8  ">
          <ul className="flex flex-col space-y-8 text-center uppercase">
            <li>
              <Link
                onClick={closeSidebar}
                className={pathname === "/podcast" && "font-bold"}
                href="/podcast"
              >
                PODCAST{" "}
              </Link>
            </li>
            <li>
              <Link
                onClick={closeSidebar}
                className={pathname === "/speaking" && "font-bold"}
                href="/speaking"
              >
                SPEAKING{" "}
              </Link>
            </li>
           
            <li>
              <Link
                onClick={closeSidebar}
                className={pathname === "/coaching" && "font-bold"}
                href="/coaching"
              >
                COACHING{" "}
              </Link>
            </li>
             <li>
              <Link
                onClick={closeSidebar}
                className={pathname === "/testimonials" && "font-bold"}
                href="/testimonials"
              >
                TESTIMONIALS{" "}
              </Link>
            </li>
            <li className="flex gap-2 pl-[27px]">
              <Link
                className={pathname === "/about" && "font-bold"}
                href="/about"
              >
                ABOUT
              </Link>
              <div className="relative">
                <div
                  className="relative inline-block -mr-2  w-5 h-5"
                  aria-hidden="true"
                  onClick={handleOpenDropdown}
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
              </div>
            </li>
            {showDropdown && (
              <div className="">
                <ul className="flex flex-col space-y-8 text-center ">
                  {/* <li>
                    <Link
                      onClick={closeSidebar}
                      className={pathname === "/podcast/about" && "font-bold"}
                      href="/podcast/about"
                    >
                      ABOUT{" "}
                    </Link>
                  </li> */}
                  <li>
                  <Link
                    onClick={closeSidebar}
                    className={pathname === "/about-1" && "font-bold"}
                    href="/about-1"
                  >
                    ABOUT-1{" "}
                  </Link>
                </li>
                  
                  <li>
                    <Link
                      onClick={closeSidebar}
                      className={pathname === "/about-2" && "font-bold"}
                      href="/about-2"
                    >
                        ABOUT-2{" "}
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      onClick={closeSidebar}
                      className={pathname === "/podcast/episode" && "font-bold"}
                      href="/podcast/episode"
                    >
                      EPISODE{" "}
                    </Link>
                  </li> */}
                </ul>
              </div>
            )}
          </ul>
       
        </div>
      </div>
      <div
        className={` ${
          showSidebar &&
          " absolute w-full top-0 left-0 h-full brightness-75 duration-300 bg-white z-0"
        }`}
      ></div>
    </div>
  );
};

export default MobileLink;
