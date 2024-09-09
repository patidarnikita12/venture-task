// components/DocumentHeader.js
import React from 'react';
import { FaRegStar } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
const DocumentHeader = () => {
  return (
    <div className="flex justify-between items-center  border-b bg-gray-50">
      <div className='flex flex-row text-[#0891b2]  ml-4 gap-4'>
        <div>
        <FaRegStar className="text-2xl" />
        </div>
      <div className="text-xl font-semibold ">SOP for Line Clearance (v0.1)</div>
      <div className="text-xl text-[#22c55e] ml-8 ">Due 26 Mar 2024</div>
      </div>
      <div className='flex flex-row gap-4 mr-4 text-[#0891b2]'>
        <FiEdit3 className='mt-3 text-3xl'/>
        <HiDotsHorizontal className='mt-3 text-3xl' />
      <button className="p-2 m-2 w-100 bg-[#0e7490] text-white rounded">Complete</button>

      </div>
    </div>
  );
};

export default DocumentHeader;
