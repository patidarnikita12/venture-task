// components/Tabs.js
import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { MdOutlineMinimize} from "react-icons/md";
import { FaArrowsAlt } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { MdOutlineInsertDriveFile } from "react-icons/md";
const Tabs = () => {
    const tabs = ['General', 'Applicability', 'Training', 'Status Dates', 'Periodic Review', 'Change information'];
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className=" mt-4 bg-gray-100 ">
            <div className='bg-white'>
                <div className="flex space-x-4 w-1/7 ">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`py-2 px-4 ${activeTab === index ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="mt-4">
                    {activeTab === 0 && (
                        <div className='flex h-screen bg-gray-50 ml-2'>
                        <div className='flex flex-col border-r mt-2'>
                            <div className=' text-end '>
                                <FaEdit className='text-end ml-96' />
                            </div>
                            <div className='flex flex-col '>
                                <div className='flex text-center ml-20 mt-8 gap-6'>
                                    <p className="text-lg font-semibold">Name:</p>
                                    <p>Equipment Maintains-India</p>
                                </div>
                                <div className='flex text-center ml-24 mt-2 gap-6'>
                                    <p className="text-lg font-semibold">Type:</p>
                                    <p>Governance & Procedure</p>
                                </div>
                                <div className='flex text-center ml-16  gap-6'>
                                    <p className="text-lg font-semibold">SubType:</p>
                                    <p>Equipmener Maintains-India</p>
                                </div>
                                <div className='text-blue-600 ml-44'>Reclassify</div>
                                <div className='font-semibold'>
                                    Template Document:
                                </div>
                                <div className='flex text-center ml-8 mt-4 gap-6'>
                                    <p className="text-lg font-semibold">Document No:</p>
                                    <p>ECV - 01264</p>
                                </div>
                                <div className='flex text-center ml-2 mt-4 gap-6'>
                                    <p className="text-lg font-semibold">Lifecycle stage Id:</p>
                                    <p>State_Stage-000016</p>
                                </div>
                                <div className='flex text-center ml-8 mt-4 gap-6'>
                                    <p className="text-lg font-semibold">Lifecycle stage:</p>
                                    <p>Approval</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col text-center mt-2'>
                            <div className='flex border-b gap-56'>
                                <div className='ml-4 text-bold flex flex-row gap-6'>
                                <TiLocationOutline className='font-bold' />
                                <IoSearch className='font-bold' />
                                </div>
                                <div className='flex gap-2'>
                                  <FaAngleDown className='mt-1'/>
                                  <div className='flex gap-2'>
                                    <div className='border border-2 w-8 h-6 text-center'>1</div>
                                    <p>of 2</p>
                                  </div>
                                  <FaAngleDown className='mt-1'/>
                                </div>
                                <div className='flex text-end gap-2'>
                                  <MdRefresh className='mt-1 font-bold'/>    
                                <MdOutlineMinimize/>
                                <FiPlus className='mt-1'/>
                                <FaArrowsAlt className='mt-1'/>
                                <BiSolidDownArrow className='mt-1'/>
                                <MdOutlineInsertDriveFile className='mt-1'/>
                                <BiSolidDownArrow className='mt-1'/>
                                   </div>
                            </div>
                            <div className='items-center mt-96 justify-center font-bold'>
                               Word File Rendering
                            </div>
                        </div>
                        </div>
                    )}
                    {activeTab === 1 && <p>Applicability Information</p>}
                    {activeTab === 2 && <p>Training Information</p>}
                    {activeTab === 3 && <p>Status Dates</p>}
                    {activeTab === 4 && <p>Periodic Review</p>}
                    {activeTab === 5 && <p>Change Information</p>}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
