"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
function MobileFooter() {
  const pathname = usePathname();
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
    { id: 1, title: "Podcast", url: "/podcast" },
    { id: 2, title: "Videos", url: "/videos" },
    { id: 3, title: "Press", url: "/pressandmedia" },
    { id: 4, title: "Media", url: "/pressandmedia" },
    { id: 5, title: "Investments", url: "/investments" },
    { id: 6, title: "Photography", url: "/photography" },
  ];
  const links2 = [
    { id: 1, title: "Podcast", url: "/podcast" },
    { id: 2, title: "Investments", url: "/investments" },
    { id: 3, title: "Photography", url: "/photography" },
    { id: 4, title: "Book Randall", url: "/bookrandall" },
  ];

  const links3 = [
    { id: 1, title: "Terms", url: "" },
    { id: 2, title: "Privacy", url: "" },
    { id: 3, title: "Cookies", url: "" },
  ];
  const socialIcons = [
    { id: 1, icon: "/linkedinlogo.svg", url: "" },
    { id: 2, icon: "/facebooklogo.svg", url: "" },
    { id: 3, icon: "/twitter.svg", url: "" },
    { id: 4, icon: "/instalogo.svg", url: "" },
  ];
  return (
    <>
      <div className="w-full  h-full bg-[#F5F7F9] flex justify-center">
        <div className="w-[90%] ">
          <div className="w-full h-fit pb-5 flex justify-center">
            <h3 className="text-base font-normal py-3 text-center ">
              &#169;{" "}
              <Link href={"https://namanjain.vercel.app/"}>Naman Jain</Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileFooter;
