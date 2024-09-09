import TopNav from "@/components/topnav";
import TopNavSec from "@/components/topnav2";
import React from "react";
import { GoClock } from "react-icons/go";
import { FaFileLines } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { LuChevronRightCircle } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { PiArrowLineLeftLight } from "react-icons/pi";
import { SlDrawer } from "react-icons/sl";
import DocumentHeader from "@/components/documentHeader";
import Tabs from "@/components/tabs";
import WorkflowStages from "@/components/workflowStages";
function FullLibrary() {
    return (
        <div className="flex flex-col bg-[#d1fae5]">
            <div className="flex flex-col ">
                <div>
                    <TopNav />
                </div>
                <div>
                    <TopNavSec />
                </div>
            </div>
            <div className="flex flex-row">

                <div className=" w-[18%]  bg-gray-50 flex flex-col">
                    <div className="flex flex-col bg-white divide-y ">
                        <div className="flex flex-col m-2 text-[#115e59] ">
                            <div className="flex flex-row bg-[#0e7490] p-3 rounded rounded-lg gap-3 text-gray-100 text-xl mt-8">
                                <FaFileLines className=" text-2xl " />
                                <p className="">Views</p>
                                <FaChevronUp className="ml-24 mt-1" />
                            </div>
                            <div className="flex flex-row  text-[#0e7490] p-3 rounded rounded-lg gap-3 text-center">
                                <FaFileLines className="text-2xl" />
                                <p className="mt-1">All Full Library </p>
                            </div>
                            <div className="flex flex-row text-black p-3 rounded rounded-lg gap-3 text-center">
                                <GoPerson className="text-2xl" />
                                <p className="mt-1">My Full Library</p>
                            </div>
                            <div className="flex flex-row text-black p-3 rounded rounded-lg gap-3 text-center">
                                <GoClock className="text-2xl" />
                                <p className=""> Recent Full Library</p>
                            </div>
                            <div className="flex flex-row text-black p-3 rounded rounded-lg gap-3 text-center">
                                <FaRegStar className="text-2xl" />
                                <p className="mt-1">Favorite</p>
                            </div>
                            <div className="flex flex-row text-black p-3 rounded rounded-lg gap-3 text-center">
                                <SlDrawer className="text-2xl" />
                                <p >Document Inbox</p>
                                <p className="ml-6">0</p>

                            </div>
                        </div>
                        <div className="flex flex-col m-3 gap-6 ">
                            <h1 className=" text-gray-300">Filters </h1>
                            <div className="flex flex-row">
                                <p>Document Type</p>
                                <FaChevronDown className="mt-1 ml-24" />
                            </div>
                            <div className="flex flex-row">
                                <p>Status</p>
                                <FaChevronDown className="mt-1 ml-40" />
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-col">
                                    <p>Owning Internal Site/ </p>
                                    <p>Division `{'>'}` Owning Plant</p>
                                </div>
                                <FaChevronDown className="mt-1 ml-6 " />
                            </div>
                            <div className="flex flex-row">
                                <p>Owning Department</p>
                                <FaChevronDown className="mt-1 ml-16 " />
                            </div>
                            <div className="flex flex-row">
                                <p>Impacted Department</p>
                                <FaChevronDown className="mt-1 ml-14 " />
                            </div>

                            <div className="flex flex-row">
                                <p>Country</p>
                                <FaChevronDown className="mt-1 ml-36 " />
                            </div>
                            <div className="flex flex-row">
                                <p>Training Impact</p>
                                <FaChevronDown className="mt-1 ml-24" />
                            </div>
                            <div className="flex flex-row">
                                <p>Scops</p>
                                <FaChevronDown className="mt-1 ml-40 " />
                            </div>

                        </div>
                        <div className=" text-black ">
                            <PiArrowLineLeftLight className="text-3xl ml-52 mt-6 mb-7" />

                        </div>
                    </div>
                </div>
                <div className="min-h-screen flex flex-col w-[82%] ml-30">
                    <div className="flex flex-col">
                    <DocumentHeader />
                    <WorkflowStages />
                    </div>
                   
                    <div className="flex flex-col bg-white">
                        <div className="  p-4">
                            <Tabs />
                        </div>
                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FullLibrary;