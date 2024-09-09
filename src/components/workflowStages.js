// components/WorkflowStages.js
import React from 'react';

const WorkflowStages = () => {
  
  return (
    <div className="flex items-center justify-start space-x-4 p-3 bg-white text-white">
     <div className='bg-green-400 text-center rounded-s-3xl  rounded-e-xl rounded-b- w-1/5'>
       <button className='  text-center rounded-s-3xl '>Draft</button>
     </div>
     <div className='bg-green-400 text-center rounded-3xl w-1/5'>
       <button className='  text-center rounded-s-3xl'>Review</button>
     </div>
     <div className='bg-[#0e7490] text-center rounded-3xl w-1/5'>
       <button className='  text-center rounded-s-3xl'>Approval</button>
     </div>
     <div className='bg-[#d6d3d1] text-center rounded-3xl w-1/5'>
       <button className='  text-center rounded-s-3xl'>Training</button>
     </div>
     <div className='bg-[#d6d3d1] text-center rounded-e-3xl w-1/5'>
       <button className='  text-center rounded-s-3xl'>Released</button>
     </div>
     
    </div>
  );
};

export default WorkflowStages;
