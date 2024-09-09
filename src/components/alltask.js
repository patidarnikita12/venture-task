import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { MdDoNotDisturbOn } from "react-icons/md";
function AllTasks() {
    return (
        <div className="w-[80%] ml-4 ">
            <div className="flex flex-col">
                <div>
                    <h1 className="text-3xl text-[#0e7490] mt-2">All Tasks</h1>
                </div>
                <div className="bg-white rounded   mt-4 ">
                <table class="table-auto min-w-full text-left text-sm font-normal text-surface dark:text-white ">
                <thead class=" font-medium ">
                    <tr>
                        <th scope="col" class="px-6 py-4">Tasks</th>
                        <th scope="col" class="px-6 py-4">Record Id</th>
                        <th scope="col" class="px-6 py-4">Due Date</th>
                        <th scope="col" class="px-6 py-4">Assigned to</th>
                        <th scope="col" class="px-6 py-4">Status</th>
                        <th scope="col" class="px-6 py-4">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td class="whitespace-nowrap px-6 py-4 flex flex-row gap-2"><FiCheckCircle className="text-xl text-green-300"/>Change Execution & Release...</td>
                        <td class="whitespace-nowrap px-6 py-4">QS-000424</td>
                        <td class="whitespace-nowrap px-6 py-4">20 mar 2024</td>
                        <td class="whitespace-nowrap px-6 py-4">You</td>
                        <td class="whitespace-nowrap px-6 py-4">Closed</td>
                        <td class="whitespace-nowrap px-6 py-4"><FiEdit2/></td>
                    </tr>
                    <tr >
                        <td class="whitespace-nowrap px-6 py-4 flex flex-row gap-2"><FiCheckCircle className="text-xl text-green-300"/>Change Execution & Release...</td>
                        <td class="whitespace-nowrap px-6 py-4">QS-000428</td>
                        <td class="whitespace-nowrap px-6 py-4">20 mar 2024</td>
                        <td class="whitespace-nowrap px-6 py-4">You</td>
                        <td class="whitespace-nowrap px-6 py-4">Closed</td>
                        <td class="whitespace-nowrap px-6 py-4"><FiEdit2/></td>
                    </tr>
                    <tr >
                        <td class="whitespace-nowrap px-6 py-4 flex flex-row gap-2"><MdDoNotDisturbOn className="text-xl text-red-400"/>Review & Approval the User...</td>
                        <td class="whitespace-nowrap px-6 py-4">QS-000452</td>
                        <td class="whitespace-nowrap px-6 py-4">20 mar 2024</td>
                        <td class="whitespace-nowrap px-6 py-4">You</td>
                        <td class="whitespace-nowrap px-6 py-4">Active</td>
                        <td class="whitespace-nowrap px-6 py-4"><FiEdit2/></td>
                    </tr>
                </tbody>
            </table>
                </div>
            </div>

        </div>
    )
}

export default AllTasks;