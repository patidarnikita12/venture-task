import React from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineGridView } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function TopNavSec() {
    return (
        <div className="flex flex-row w-full bg-white ">
            <div className="flex flex-row w-full">
                <div className="flex flex-row mt-3  gap-8 text-[#0e7490] w-[18%] rounded-sm border-y-2 border-r-2 border-gray">
                    <h1 className="text-3xl ml-3 mt-2">DoQssence </h1>
                    <FaPlus className="text-2xl mt-3" />
                </div>
                <div className="flex flex-row  mt-3 tex-black w-[80%] border-y-2 border-gray ">
                    <div className="flex flex-row mt-3 ">
                      <ul className="flex flex-row gap-4">
                        <li><MdOutlineGridView className="text-2xl"/></li>
                        <li>Home</li>
                        <li>My learnings</li>
                        <li>Consumers Library</li>
                        <li>Full Library</li>
                        <li><select><option>Document Management</option></select></li>
                        <li><select><option>Training</option></select></li>
                        <li><select><option>Reporting & Dashboard</option></select></li>
                        <li ><MdKeyboardDoubleArrowRight className="text-[#0e7490] text-lg"/></li>
                      </ul>
                    </div>
                    <div className="">
                    <div className="flex flex-row bg-[#0e7490] m-2 rounded  rounded-lg gap-3 text-gray-100 text-xl ">
                        <FaPlus className=" text-xl m-2" />
                        <p className="mt-1">Create record</p>
                        <FaChevronDown className="m-2" />
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopNavSec;