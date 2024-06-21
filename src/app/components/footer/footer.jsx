"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileFooter from "./mobilefooter/mobilefooter";
import { usePathname } from "next/navigation";
function Footer() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = () => {
    if (!email) {
      setError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
    } else {
      // Proceed with your submit logic
    }

    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const links1 = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Meet Randall", url: "/bookrandall" },
    { id: 3, title: "Speaking", url: "/speaking" },
    { id: 4, title: "Testimonials", url: "/testimonials" },
    { id: 5, title: "Investments", url: "/investments" },
    { id: 6, title: "Photography", url: "/photography" },
  ];
  const links2 = [
    { id: 1, title: "Videos", url: "/videos" },
    { id: 2, title: "Podcast", url: "/podcast" },
    { id: 3, title: "Book Randall", url: "/bookrandall" },
  ];

  const links3 = [
    { id: 1, title: "Terms", url: "" },
    { id: 2, title: "Privacy", url: "" },
    { id: 3, title: "Cookies", url: "" },
  ];
  const socialIcons = [
    {
      id: 1,
      blackicon: "/icon/linikedinblack1.svg",
      colorIcon: "/icon/linikedincolor.svg",
      url: "https://www.linkedin.com/in/randallkaplan",
    },
    {
      id: 2,
      blackicon: "/icon/facebookblack1.svg",
      colorIcon: "/icon/facebookcolor.svg",
      url: "https://www.facebook.com/randallk",
    },
    {
      id: 3,
      blackicon: "/icon/twitterblack.svg",
      colorIcon: "/icon/twitterblack.svg",
      url: "https://twitter.com/randallkaplan1",
    },
    {
      id: 4,
      blackicon: "/icon/instablack1.svg",
      colorIcon: "/icon/instacolor.svg",
      url: "https://www.instagram.com/randallkaplan/",
    },
  ];
  return (
    <>
      <div className="ml-0  h-fit pb-5 md:px-0 flex justify-end bg-[#F5F7F9] ">
        {/* ------------------------MAIN CONTAINER FOR LARGE DEVICES------------------------- */}
        <div className="hidden lg:flex h-[258px] xl:h-[375px] w-[98%] xxl:w-[100%] flex-col max-md:mx-0 max-lg:mx-5 bg-[#F5F7F9]  justify-center items-center  ">
          <div className="w-[85%] lg:w-[98%] xl:w-[99%] xxl:w-[99%]  h-[192px] xl:h-[350px] flex flex-col gap-2 xl:justify-evenly">
            <div className="h-fit xl:h-fit w-full flex justify-between border-b-2 border-solid border-[#CBCBCB] pb-2 xl:pb-4">
              <div className="w-full h-fit pb-5 flex justify-center">
                <h3 className="text-base font-normal py-3 text-center ">
                  &#169;{" "}
                  <Link href={"https://namanjain.vercel.app/"}>Naman Jain</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------MAIN CONTAINER MOBILE & TABLETS------------------------- */}
        <div className="flex lg:hidden h-[95%] w-[99%] flex-col max-md:mx-0 max-lg:mx-5  bg-[#F5F7F9] justify-center items-center pt-8 pl-2">
          <MobileFooter />
        </div>
      </div>
    </>
  );
}

export default Footer;
