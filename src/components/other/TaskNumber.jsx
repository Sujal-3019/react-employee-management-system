import React from 'react';

const TaskNumber=({data})=>{
    return(
        <div className='flex justify-between gap-5 screen'>
            
            <div className='mt-5 p-10 h-50 w-[40%] bg-yellow-400 text-white rounded-2xl py-7 px-9'>
                <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
                <h3 className='text-3xl font-semibold'>New Task</h3>
            </div>
            <div className='mt-5 p-10 h-50 w-[40%] bg-blue-400 text-white rounded-2xl py-7 px-9'>
                <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
                <h3 className='text-3xl font-semibold'>Active Task</h3>
            </div>
            <div className='mt-5 p-10 h-50 w-[40%] bg-green-400 text-white rounded-2xl py-7 px-9'>
                <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
                <h3 className='text-3xl font-semibold'>Completed Task</h3>
            </div>
            <div className='mt-5 p-10 h-50 w-[40%] bg-red-400 text-white rounded-2xl py-7 px-9'>
                <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
                <h3 className='text-3xl font-semibold'>Failed Task</h3>
            </div>
        </div>
    )
}
export default TaskNumber
