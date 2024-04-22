"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoFilter } from "react-icons/io5";

const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(data);
  console.log(data.responce);

  const fetchData = async () => {
    try {
      const responce = await fetch("https://dummyjson.com/products");
      const result = await responce.json();
      setData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col border-r-4 border-gray-500 w-[60%] mt-2  h-[100dvh] overflow-scroll">
      <div className="mx-10">
        <div className="flex justify-between my-4  items-center ">
          <div className="">
            <h1 className="font-bold text-3xl">conversations</h1>
            <h3 className=" text-lg"> track user engagement</h3>
          </div>
          <div className="border p-4  rounded	">
            <IoFilter />
          </div>
        </div>
        <form className="max-w-md mx-auto">
          <label className="mb-2 text-sm font-medium sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by Conversation and Contacts...."
              required
            />
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
          </div>
        </form>
        <div className="flex gap-2 justify-evenly my-4">
          <p>Sort by :</p>
          <p className="text-rose-500"> Created Date</p>
          <p>Last Activity</p>
          <p>Time Spent</p>
        </div>
        <>
          {loading ? (
            "Loading..."
          ) : (
            <>
              {data.products.map((data, index) => {
                return (
                  <div className="max-w-sm w-full lg:max-w-full lg:flex overflow-scroll	">
                    <div className="  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                      <div className="flex items-center">
                        <Image
                          height={60}
                          width={40}
                          className="w-10 h-10 rounded-full mr-4"
                          src={data?.images[0]}
                          alt="Avatar of Jonathan Reinink"
                        />
                        <div className="text-sm">
                          <p
                            className={`text-gray-900 leading-none ${
                              index === 1 ? "text-rose-500" : ""
                            }`}
                          >
                            {data?.title}
                          </p>
                          <p className="text-gray-600 my-2">
                            {" "}
                            {data?.discountPercentage}{" "}
                          </p>
                          <p className="my-4 text-gray-300">
                            {" "}
                            {data?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Search;
