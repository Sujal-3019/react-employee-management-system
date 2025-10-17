import React, { use, useState } from 'react';

const Login =({handleLogin})=>{

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        // to make it empty again
        setEmail('')
        setPassword('')
    }
    return(
        <div className='flex w-screen h-screen items-center justify-center font-semibold'>
            <div className='border-2 border-black p-20  rounded-2xl bg-yellow-400'>
                <form 
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className='flex flex-col items-center justify-center'>
                    <input
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                     required 
                     className='border-2 text-center border-black rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-600' type='email' placeholder='Enter Your E-mail'/>
                    <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required 
                    className='border-2 text-center border-black rounded-full py-3 px-5 text-xl  text-white outline-none bg-transparent mt-3 placeholder:text-gray-600' type='password' placeholder='Enter Password'/>
                    <button className=' text-center bg-red-600 border-black border-2 w-30 rounded-full py-3 px-5 text-xl text-white outline-none mt-3 placeholder:text-white'>Log In</button>
                </form>
            </div>
        </div>
    )
}
export default Login