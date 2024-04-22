"use client";

import React, { useEffect, useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoMdReturnLeft } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import Image from "next/image";
import { LuMailOpen } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";

const Hero = () => {
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
    <div className="mt-10 m-4 w-[100%] h-[100vh]  overflow-scroll">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-4xl my-6">Collection “seeeek” </h1>
          <p className=" text-xl">You shared 2 assets with 4 recipients</p>
          <p className="text-gray-500 ">1 month ago via QuickSend</p>
        </div>
        <div className="flex gap-4 ">
          <p className="border p-4  rounded-lg">
            <LuEye />
          </p>
          <p className="border p-4  rounded-lg">
            <IoMdReturnLeft />
          </p>
          <p className="border p-4  rounded-lg">
            <MdDelete />
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="border   gap-2 p-10 rounded-lg w-[25%] my-10"
          >
            <p className="flex items-center justify-between">
              <p>50%</p>
              <p>
                <FaRegMessage size={20} />
              </p>
            </p>
            <p>email open rate</p>
          </div>
        ))}
      </div>

      <div className="flex gap-10">
        <p className="text-rose-500">Recipients - 08</p>
        <p>Sections - 05</p>
      </div>
      {loading
        ? "Loading..."
        : data?.products?.map((data) => {
            return (
              <div className="flex items-center my-6 justify-between">
                <div className="flex gap-5 ">
                  <Image
                    height={60}
                    width={40}
                    className="w-8 h-8 rounded-full mr-4"
                    src={data?.images[0]}
                    alt="Avatar of Jonathan Reinink"
                  />
                  <p> {data?.title}</p>
                  <p className="text-gray-500 ">{data?.category}</p>
                </div>
                <div className="flex gap-5">
                  <p className="text-lg"> {data?.price}</p>
                  <p className="text-rose-500">
                    <LuMailOpen size={30} />
                  </p>
                  <p>
                    <FaRegUser size={30} />
                  </p>
                  <p className="border-r-2 text-rose-500">
                    <CiShare2 size={30} />
                  </p>
                  <p>
                    <MdLocationOn size={30} />
                  </p>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Hero;
