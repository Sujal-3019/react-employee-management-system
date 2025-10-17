import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask=()=>{

    const { Employees } = useContext(AuthContext);

    return(
        <div id='alltask' className='p-3 bg-gray-900 mt-5 rounded font-semibold h-90'>
            <div className='bg-emerald-400 mb-2 py-3 px-3 rounded flex justify-between'>
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5> 
                <h5 className='text-lg font-medium w-1/5'>Completed Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed Task</h5>
            </div>
            <div id='scroll' className='h-[90%] overflow-auto'>
                {Employees.map((elem ,idx)=>{
                return <div key={idx} className='border-1 border-emerald-400 bg-transparent mb-2 py-3 px-3 rounded flex justify-between'>
                <h2 className='text-white w-1/5 text-lg font-medium'>{elem.firstName}</h2>
                <h3 className='text-yellow-300 w-1/5 text-lg font-medium'>{elem.taskCount.newTask}</h3>
                <h5 className='text-blue-400 w-1/5 text-lg font-medium'>{elem.taskCount.active}</h5>
                <h5 className='text-green-500 w-1/5 text-lg font-medium'>{elem.taskCount.completed}</h5> 
                <h5 className='text-red-500 w-1/5 text-lg font-medium'>{elem.taskCount.failed}</h5> 
            </div>
            })}
            </div>
        </div>
    )
}
export default AllTask