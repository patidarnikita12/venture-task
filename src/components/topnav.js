import React from "react";
import { SiOpslevel } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { LuBell } from "react-icons/lu";
import Image from "next/image";
function TopNav() {
    return (
        <div className="flex flex-row bg-white mt-2 w-full h-full">
            <div className="flex flex-row gap-72 items-center ">
                <div className="flex gap-2 w-1/3 ml-4">
                    <Image src='/image 1.png' width={100} height={100} alt="logo" className="h-auto w-auto"/>

                </div>
                <div className="flex flex-row text-center justify-center text-sm w-1/3 ml-36 m-2">
                    <div className="flex flex-row w-full">
                        <div className="item-center  ">
                            <select className="bg-[#e0f2fe] rounded-l-lg rounded p-2  w-[20% ]"><option>Record ID</option></select>
                        </div>
                        <div className="relative flex flex-row bg-[#e0f2fe] item-center rounded rounded-r-lg">
                            <CiSearch className="mt-2 ml-12 text-xl " />
                            <input className="bg-[#e0f2fe] m-1 ml-8" placeholder="Enter search value " />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-1/3 text-center justify-center ml-28 gap-8">
                    <div>
                        <LuBell className="text-2xl text-[#155e75] ml-3"/>
                    </div>
                    <div>
                        <Image src="/download.jpg" width={30} height={30} className="roundded rounded-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav;