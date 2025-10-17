import React from 'react';

const FailedTask=({data})=>{
    return(
        <div className='flex-shrink-0 h-full w-[300px] bg-red-500 rounded-xl p-3'>
                <div className='flex items-center justify-between'>
                    <h3 className='bg-red-300 rounded-xl px-3 py-1 text-white font-semibold border-1 border-black'>{data.category}</h3>
                    <h4 className='font-semibold text-sm text-white'>{data.date}</h4>
                </div>
                <div>
                    <h2 className='mt-5 font-semibold text-white text-2xl '>{data.title}</h2>
                    <p className='text-sm mt-2 font-medium text-white'>
                        {data.description}
                    </p>
                </div>
                <div className='mt-2'>
                    <button className='w-full bg-red-300 border-1 rounded-xl border-black font-medium'>Failed</button>
                </div>
        </div>
    )
}
export default FailedTask