import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { LuChevronRightCircle } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { PiArrowLineLeftLight } from "react-icons/pi";
function SideBar() {
    return (
        <div className="w-[18%] bg-gray-50 flex flex-col">
            <div className="flex flex-col bg-white divide-y border-2 border-r">
                <div className="flex flex-col m-2 text-[#115e59] ">
                    <div className="flex flex-row bg-[#0e7490] p-3 rounded rounded-lg gap-3 text-gray-100 text-xl mt-8">
                        <FaFileLines className=" text-2xl " />
                        <p className="">Views</p>
                        <FaChevronUp className="ml-24 mt-1" />
                    </div>
                    <div className="flex flex-row  text-[#0e7490] p-3 rounded rounded-lg gap-3 text-center">
                    <FiCheckCircle className="text-3xl"/>
                        <p className="mt-1">All Tasks</p>
                        <p className="ml-20 mt-1">21</p>
                    </div>
                    <div className="flex flex-row text-black p-3 rounded rounded-lg gap-3 text-center">
                        <GoPerson className="text-3xl"/>
                        <p className="mt-1">My Tasks</p>
                        <p className="ml-20 mt-1">08</p>
                    </div>
                    <div className="flex flex-row text-black p-3 rounded rounded-lg gap-3 text-center">
                        <FiDownload className="text-3xl"/>
                       <p className="mt-1"> Available Tasks</p>
                       <p className="ml-9 mt-1">13</p>
                    </div>
                    <div className="flex flex-row text-black p-3 rounded rounded-lg gap-3 text-center">
                        <LuChevronRightCircle className="text-3xl"/>
                        <p className="mt-1">Active Workflows</p>
                        <p className="ml-6">06</p>
                        
                    </div>
                </div>
                <div className="flex flex-col m-3 gap-6 ">
                    <h1 className=" text-gray-300">Filters </h1>
                    <div className="flex flex-row">
                      <p>Task Type</p>
                      <FaChevronDown className="mt-1 ml-36"/>
                    </div>
                    <div className="flex flex-row">
                      <p>Task Due Date</p>
                      <FaChevronDown className="mt-1 ml-28"/>
                    </div>
                    <div className="flex flex-row">
                      <p>Task Assignment Date</p>
                      <FaChevronDown className="mt-1 ml-14 "/>
                    </div>
                </div>
                <div className=" text-black ">
                <PiArrowLineLeftLight className="text-3xl ml-52 mt-6 mb-7"/>
 
                </div>
            </div>
        </div>
    )
}

export default SideBar;