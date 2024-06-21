"use client";
import React, { useState, useEffect } from "react";
import LinkSection from "./Link-section/linkSection";
import Image from "next/image";
import MobileLink from "./mobile-link-section/mobile-link-section";
import Link from "next/link";

const Header = () => {
  const isSmallScreen = true;
  const [hoveredItem, setHoveredItem] = useState(null);

  const [isVisibleSection, setIsVisibleSection] = useState(false);

  useEffect(() => {
    const Animatenow = () => {
      const section = document.getElementById("sa");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.7) {
          setIsVisibleSection(true);
        }
      }
    };

    Animatenow();
  }, []);
  return (
    <>
      <div className="ml-0 h-fit w-full max-w-screen-xxl mx-auto fixed  flex justify-end z-[999] bg-[#FFFFFF] ">
        {/* ------------------------MAIN  CONTAINER FOR LARGE DEVICES------------------------- */}
        <div className="flex h-fit w-full flex-col max-md:mx-0 max-lg:mx-5 bg-[#FFFFFF]   ">
          {/* <div className="flex mx-auto max-w-screen-4xl  justify-center items-center px-3 lg:px-0 z-[999] fixed top-0 left-0 w-full border-b-2  "> */}
          <div className="w-full bg-[#FFFFFF] flex justify-center  items-center">
            <div className="flex w-[85%] lg:w-[72%] xl:w-[97%] xxl:w-[98%] justify-between p-4 bg-[#FFFFFF] max-lg:rounded-r-none max-lg:border-transparent rounded ">
              <div className="w-fit ">
                <Link href="/">
                  <Image
                    unoptimized
                    src="/next.svg"
                    className="w-[90px] h-[40px] md:h-[50px] md:w-[102px] lg:w-[102px]"
                    height={100}
                    width={110}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="xl:flex hidden ">
                <LinkSection />
              </div>
              {isSmallScreen ? null : (
                <div>
                  <MobileLink />
                </div>
              )}
            </div>
            {isSmallScreen && (
              <div className="w-[15%] lg:w-[18%] h-auto flex xl:hidden justify-end">
                <MobileLink />
              </div>
            )}
          </div>

          <div
            className={` ${
              isVisibleSection ? "image-animation " : " "
            } w-full h-fit image-animation4sec border-b-2  border-solid border-[#0000001A] `}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Header;
