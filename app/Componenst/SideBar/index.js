import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiMobile4 } from "react-icons/ci";
import { FaLayerGroup } from "react-icons/fa";

import { MdOutlineMessage } from "react-icons/md";
import { GiSpeedometer } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa";
import { PiCirclesFourBold } from "react-icons/pi";

import { CgProfile } from "react-icons/cg";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-between border-r-4 border-gray-500 w-[5%] mt-2  h-[100dvh]">
      <div className="flex gap-10 flex-col items-center ">
        <CiSearch size={20} />
        <CiMobile4 size={20} />
        <FaLayerGroup size={20} />
        <MdOutlineMessage size={20} />
        <GiSpeedometer size={20} />
        <FaTelegramPlane size={20} />
      </div>
      <div className="flex gap-10 flex-col items-center ">
        <PiCirclesFourBold size={20} />
        <CgProfile size={20} />
      </div>
    </div>
  );
};

export default SideBar;
