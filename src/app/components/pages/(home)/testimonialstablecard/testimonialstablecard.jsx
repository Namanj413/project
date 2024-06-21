"use client";
import React, { useState, useEffect, useMemo } from "react";

import Image from "next/image";
import Link from "next/link";
// import { useSession } from "next-auth/react";
import axios from "axios";
import Pagination from "@/app/components/common/pagination/pagination";
import Toast from "@/app/components/common/toast/toast";

function TestimonialsTableCard({
  searchTestimonials,
  setSearchTestimonials,
  filterDate,
}) {
  // const { data: session, status } = useSession();

  const [testimonialsData, setTestimonialsData] = useState([]);
  const [sucess, setSucess] = useState(false);
  const [fail, setFail] = useState(false);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;
  const tempdata = [
    {
      id: 1,
      name: "John Doe",
      dob: "1990-01-01",
      phone: "123-456-7890",
      address: "123 Main Street",
      state: "CA",
    },
    {
      id: 2,
      name: "Jane Smith",
      dob: "1985-05-15",
      phone: "456-789-0123",
      address: "456 Oak Avenue",
      state: "NY",
    },
    {
      id: 3,
      name: "David Lee",
      dob: "1978-10-20",
      phone: "789-012-3456",
      address: "789 Pine Lane",
      state: "TX",
    },
    {
      id: 4,
      name: "Emily Brown",
      dob: "1995-03-08",
      phone: "012-345-6789",
      address: "012 Maple Drive",
      state: "FL",
    },
    {
      id: 5,
      name: "Michael Wilson",
      dob: "1982-12-25",
      phone: "345-678-9012",
      address: "345 Willow Street",
      state: "IL",
    },
    {
      id: 6,
      name: "Sarah Jones",
      dob: "1992-07-12",
      phone: "901-234-5678",
      address: "901 Elm Street",
      state: "PA",
    },
    {
      id: 7,
      name: "Christopher Garcia",
      dob: "1988-02-28",
      phone: "234-567-8901",
      address: "234 Pine Avenue",
      state: "OH",
    },
    {
      id: 8,
      name: "Jessica Davis",
      dob: "1997-09-18",
      phone: "567-890-1234",
      address: "567 Oak Lane",
      state: "MI",
    },
    {
      id: 9,
      name: "Matthew Rodriguez",
      dob: "1981-06-05",
      phone: "890-123-4567",
      address: "890 Maple Drive",
      state: "NJ",
    },
    {
      id: 10,
      name: "Ashley Williams",
      dob: "1994-11-22",
      phone: "123-456-7890",
      address: "123 Willow Street",
      state: "GA",
    },
    {
      id: 11,
      name: "Daniel Brown",
      dob: "1986-04-10",
      phone: "456-789-0123",
      address: "456 Elm Street",
      state: "AZ",
    },
    {
      id: 12,
      name: "Elizabeth Garcia",
      dob: "1999-08-26",
      phone: "789-012-3456",
      address: "789 Pine Avenue",
      state: "WA",
    },
    {
      id: 13,
      name: "Ryan Miller",
      dob: "1983-01-15",
      phone: "012-345-6789",
      address: "012 Oak Lane",
      state: "CO",
    },
    {
      id: 14,
      name: "Stephanie Davis",
      dob: "1996-05-20",
      phone: "345-678-9012",
      address: "345 Maple Drive",
      state: "MN",
    },
    {
      id: 15,
      name: "James Wilson",
      dob: "1980-10-08",
      phone: "901-234-5678",
      address: "901 Willow Street",
      state: "NC",
    },
    {
      id: 16,
      name: "Jennifer Rodriguez",
      dob: "1993-03-25",
      phone: "234-567-8901",
      address: "234 Elm Street",
      state: "SC",
    },
    {
      id: 17,
      name: "Kevin Garcia",
      dob: "1985-08-12",
      phone: "567-890-1234",
      address: "567 Pine Avenue",
      state: "VA",
    },
    {
      id: 18,
      name: "Amanda Miller",
      dob: "1998-02-01",
      phone: "890-123-4567",
      address: "890 Oak Lane",
      state: "OR",
    },
    {
      id: 19,
      name: "Joseph Davis",
      dob: "1982-07-07",
      phone: "123-456-7890",
      address: "123 Maple Drive",
      state: "KY",
    },
    {
      id: 20,
      name: "Brittany Williams",
      dob: "1995-12-16",
      phone: "456-789-0123",
      address: "456 Willow Street",
      state: "LA",
    },
    {
      id: 21,
      name: "Justin Brown",
      dob: "1987-05-03",
      phone: "789-012-3456",
      address: "789 Elm Street",
      state: "IN",
    },
    {
      id: 22,
      name: "Melissa Garcia",
      dob: "2000-09-09",
      phone: "012-345-6789",
      address: "012 Pine Avenue",
      state: "WI",
    },
    {
      id: 23,
      name: "Eric Miller",
      dob: "1984-03-18",
      phone: "345-678-9012",
      address: "345 Oak Lane",
      state: "AL",
    },
    {
      id: 24,
      name: "Tiffany Davis",
      dob: "1997-06-23",
      phone: "901-234-5678",
      address: "901 Maple Drive",
      state: "MA",
    },
    {
      id: 25,
      name: "Robert Wilson",
      dob: "1981-11-11",
      phone: "234-567-8901",
      address: "234 Willow Street",
      state: "CT",
    },
    {
      id: 26,
      name: "Lauren Rodriguez",
      dob: "1994-04-05",
      phone: "567-890-1234",
      address: "567 Elm Street",
      state: "MD",
    },
    {
      id: 27,
      name: "Brian Garcia",
      dob: "1986-09-13",
      phone: "890-123-4567",
      address: "890 Pine Avenue",
      state: "MO",
    },
    {
      id: 28,
      name: "Rachel Miller",
      dob: "1999-02-27",
      phone: "123-456-7890",
      address: "123 Oak Lane",
      state: "OK",
    },
    {
      id: 29,
      name: "Rachel Miller",
      dob: "1999-02-27",
      phone: "123-456-7890",
      address: "123 Oak Lane",
      state: "OK",
    },
    {
      id: 30,
      name: "Rachel Miller",
      dob: "1999-02-27",
      phone: "123-456-7890",
      address: "123 Oak Lane",
      state: "OK",
    },
    {
      id: 31,
      name: "John Doe",
      dob: "1990-01-01",
      phone: "123-456-7890",
      address: "123 Main Street",
      state: "CA",
    },
    {
      id: 32,
      name: "Jane Smith",
      dob: "1985-05-15",
      phone: "456-789-0123",
      address: "456 Oak Avenue",
      state: "NY",
    },
    {
      id: 33,
      name: "David Lee",
      dob: "1978-10-20",
      phone: "789-012-3456",
      address: "789 Pine Lane",
      state: "TX",
    },
    {
      id: 34,
      name: "Emily Brown",
      dob: "1995-03-08",
      phone: "012-345-6789",
      address: "012 Maple Drive",
      state: "FL",
    },
    {
      id: 35,
      name: "Michael Wilson",
      dob: "1982-12-25",
      phone: "345-678-9012",
      address: "345 Willow Street",
      state: "IL",
    },
    {
      id: 36,
      name: "Sarah Jones",
      dob: "1992-07-12",
      phone: "901-234-5678",
      address: "901 Elm Street",
      state: "PA",
    },
    {
      id: 37,
      name: "Christopher Garcia",
      dob: "1988-02-28",
      phone: "234-567-8901",
      address: "234 Pine Avenue",
      state: "OH",
    },
    {
      id: 38,
      name: "Jessica Davis",
      dob: "1997-09-18",
      phone: "567-890-1234",
      address: "567 Oak Lane",
      state: "MI",
    },
    {
      id: 39,
      name: "Matthew Rodriguez",
      dob: "1981-06-05",
      phone: "890-123-4567",
      address: "890 Maple Drive",
      state: "NJ",
    },
    {
      id: 40,
      name: "Ashley Williams",
      dob: "1994-11-22",
      phone: "123-456-7890",
      address: "123 Willow Street",
      state: "GA",
    },
    {
      id: 41,
      name: "Daniel Brown",
      dob: "1986-04-10",
      phone: "456-789-0123",
      address: "456 Elm Street",
      state: "AZ",
    },
    {
      id: 42,
      name: "Elizabeth Garcia",
      dob: "1999-08-26",
      phone: "789-012-3456",
      address: "789 Pine Avenue",
      state: "WA",
    },
    {
      id: 43,
      name: "Ryan Miller",
      dob: "1983-01-15",
      phone: "012-345-6789",
      address: "012 Oak Lane",
      state: "CO",
    },
    {
      id: 44,
      name: "Stephanie Davis",
      dob: "1996-05-20",
      phone: "345-678-9012",
      address: "345 Maple Drive",
      state: "MN",
    },
    {
      id: 45,
      name: "James Wilson",
      dob: "1980-10-08",
      phone: "901-234-5678",
      address: "901 Willow Street",
      state: "NC",
    },
    {
      id: 46,
      name: "Jennifer Rodriguez",
      dob: "1993-03-25",
      phone: "234-567-8901",
      address: "234 Elm Street",
      state: "SC",
    },
    {
      id: 47,
      name: "Kevin Garcia",
      dob: "1985-08-12",
      phone: "567-890-1234",
      address: "567 Pine Avenue",
      state: "VA",
    },
    {
      id: 48,
      name: "Amanda Miller",
      dob: "1998-02-01",
      phone: "890-123-4567",
      address: "890 Oak Lane",
      state: "OR",
    },
    {
      id: 49,
      name: "Joseph Davis",
      dob: "1982-07-07",
      phone: "123-456-7890",
      address: "123 Maple Drive",
      state: "KY",
    },
    {
      id: 50,
      name: "Brittany Williams",
      dob: "1995-12-16",
      phone: "456-789-0123",
      address: "456 Willow Street",
      state: "LA",
    },
    {
      id: 51,
      name: "Justin Brown",
      dob: "1987-05-03",
      phone: "789-012-3456",
      address: "789 Elm Street",
      state: "IN",
    },
    {
      id: 52,
      name: "Melissa Garcia",
      dob: "2000-09-09",
      phone: "012-345-6789",
      address: "012 Pine Avenue",
      state: "WI",
    },
    {
      id: 53,
      name: "Eric Miller",
      dob: "1984-03-18",
      phone: "345-678-9012",
      address: "345 Oak Lane",
      state: "AL",
    },
    {
      id: 54,
      name: "Tiffany Davis",
      dob: "1997-06-23",
      phone: "901-234-5678",
      address: "901 Maple Drive",
      state: "MA",
    },
    {
      id: 55,
      name: "Robert Wilson",
      dob: "1981-11-11",
      phone: "234-567-8901",
      address: "234 Willow Street",
      state: "CT",
    },
    {
      id: 56,
      name: "Lauren Rodriguez",
      dob: "1994-04-05",
      phone: "567-890-1234",
      address: "567 Elm Street",
      state: "MD",
    },
    {
      id: 57,
      name: "Brian Garcia",
      dob: "1986-09-13",
      phone: "890-123-4567",
      address: "890 Pine Avenue",
      state: "MO",
    },
    {
      id: 58,
      name: "Rachel Miller",
      dob: "1999-02-27",
      phone: "123-456-7890",
      address: "123 Oak Lane",
      state: "OK",
    },
  ];
  const totalPages = Math.ceil(tempdata.length / itemsPerPage); // Calculate total number of pagination pages

  // ------------------------- FEATCH DATA---------------------------
  async function featchData() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, tempdata.length);

    setTestimonialsData(tempdata.slice(startIndex, endIndex));
  }

  // -----------------------------FILTER FROM DATE------------------------------
  async function filterSearch() {
    // Filter the podcastData array based on the searchTestimonials value
    const filterData = testimonialsData.filter((item) =>
      item.name.toLowerCase().includes(searchTestimonials.toLowerCase())
    );
    setTestimonialsData(filterData);
  }

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, tempdata.length);
    setTestimonialsData(tempdata.slice(startIndex, endIndex));
  }, []);

  useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, tempdata.length);

    setTestimonialsData(tempdata.slice(startIndex, endIndex));
  }, [currentPage]);

  useEffect(() => {
    if (searchTestimonials.length > 0) {
      filterSearch();
    } else {
      featchData();
    }
  }, [searchTestimonials, setSearchTestimonials]);

  useMemo(() => {
    if (filterDate.length > 0) {
      filterDataByDate(token, filterDate);
    } else {
      featchData();
    }
  }, [filterDate]);
  return (
    <>
      <div className="w-full h-auto relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          {/* ----------------TABLE HEADINGS----------------- */}
          <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                Sr&nbsp;No.
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-[14px] leading-[20px] text-[#202224] "
              >
                Name
              </th>

              <th scope="col" className="px-6 py-3">
                DOB
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                State
              </th>
            </tr>
          </thead>
          <tbody>
            {/* ----------------TABLE ROWS----------------- */}
            {testimonialsData &&
              testimonialsData.map((item, index) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4 text-center">{item.id}</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.dob}
                  </td>
                  <td className="px-6 py-4"> {item.phone}</td>
                  <td className="px-6 py-4"> {item.address}</td>
                  <td className="px-6 py-4"> {item.state}</td>
                </tr>
              ))}

            {/* ---------IF THERE ARE NO DATA IN PODCAST------------ */}
            {testimonialsData && testimonialsData.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No data found...
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* ----------------PAGINATION SECTION---------------- */}
        <div className="w-full h-auto flex justify-between items-center bg-white">
          <div className="w-[50%] h-auto flex justify-start pl-4">
            <div className="w-full md:w-fit h-auto">
              <h6 className="font-semibold text-[14px] leading-[20px] text-[#667085]">
                Showing{" "}
                {testimonialsData.length > 0
                  ? `${testimonialsData[0].id}-${
                      testimonialsData[testimonialsData.length - 1].id
                    }`
                  : "0"}{" "}
                from {tempdata.length}
              </h6>
            </div>
          </div>
          <div className="w-[45%] h-auto flex justify-end">
            <div className="w-full md:w-fit py-3 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            </div>
          </div>
        </div>
        <Toast
          sucess={sucess}
          setSucess={setSucess}
          fail={fail}
          setFail={setFail}
          message={message}
        />
      </div>
    </>
  );
}

export default TestimonialsTableCard;
