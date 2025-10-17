import React from 'react';

const NewTask=({data, onAction})=>{
    return(
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-300 rounded-xl p-3'>
                <div className='flex items-center justify-between'>
                    <h3 className='bg-red-500 rounded-xl px-3 py-1 text-white font-semibold'>{data.category}</h3>
                    <h4 className='font-semibold text-sm text-white'>{data.date}</h4>
                </div>
                <div>
                    <h2 className='mt-5 font-semibold text-white text-2xl'>{data.title}</h2>
                    <p className='text-sm mt-2 font-medium text-white'>
                        {data.description}
                    </p>
                </div>
                <div className='mt-4'>
                    <button
                        className='bg-yellow-400 rounded-xl border-1 border-black text-sm py-1 px-2 font-semibold'
                        onClick={() => onAction && onAction('accept')}
                    >
                        Accept Task
                    </button>
                </div>
        </div>
    )
}
export default NewTask