import React, { useState } from 'react';
import { IoMdCart } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { GiMorgueFeet } from "react-icons/gi";
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function SignUp(){

    const [showPassword, setShowPassword] = useState(false);
    
    return(
       <div className='bg-white '>
         <div className='flex mt-20 gap-20  rounded-3xl justify-center items-center'>
            <div className='w-96 hidden md:flex '><img className='rounded-3xl' src="/login.png" alt="" /></div>
            {/* login info */}
            <div className='flex flex-col'>
                <div className='flex items-center gap-4 justify-center'>
                    <div className='bg-blue-700 rounded-3xl h-10 w-10 content-center justify-center px-1.5'><GiMorgueFeet className='text-white' size={25} /></div>
                    <p className='font-bold text-2xl'>ZS </p>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold text-4xl mt-4'>Welcome Back</h1>
                    <p className='text-xs text-gray-400 mt-2'>Please login to your account</p>
                </div>
                <form action="" className='mt-4'>
                    <div className='flex flex-col gap-4  '>
                        <input id="name" type="text" name="text" required autoComplete="email" placeholder='Full Name' className='placeholder-gray-500 placeholder-opacity-75 h-12 w-[400px] bg-gray-200
                        rounded-sm px-3 py-1.5 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10
                        focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500' />
                       
                        <input id="email" type="email" name="email" required autoComplete="email" placeholder='Email address' className='placeholder-gray-500 placeholder-opacity-75 h-12 w-[400px] bg-gray-200
                        rounded-sm px-3 py-1.5 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10
                        focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500' />
                       <div className='relative '>
                          <input id="password" 
                          type={showPassword ? "text" : "password"} name="password" 
                         required autoComplete="current-password" placeholder='Password' className='placeholder-gray-500 placeholder-opacity-75 h-12 w-[400px] bg-gray-200
                         rounded-sm px-3 py-1.5 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10
                         focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500' />
                         <button type='button'
                             onClick={()=>setShowPassword(!showPassword)} className=' absolute inset-y-0 hover:text-gray-700 right-3 justify-self-end flex items-center '>
                             {showPassword ? < AiOutlineEye className='text-gray-400' size={20} /> : <AiOutlineEyeInvisible className='text-gray-400' size={20} />}
                            </button>
                       </div>
                         <div className='relative '>
                          <input id="password" 
                          type={showPassword ? "text" : "password"} name="password" 
                         required autoComplete="current-password" placeholder='Confirm Password' className='placeholder-gray-500 placeholder-opacity-75 h-12 w-[400px] bg-gray-200
                         rounded-sm px-3 py-1.5 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10
                         focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500' />
                         <button type='button'
                             onClick={()=>setShowPassword(!showPassword)} className=' absolute inset-y-0 hover:text-gray-700 right-3 justify-self-end flex items-center '>
                             {showPassword ? < AiOutlineEye className='text-gray-400' size={20} /> : <AiOutlineEyeInvisible className='text-gray-400' size={20} />}
                            </button>
                       </div>
                        <p className='text-xs font-medium text-end'>Forgot Password?</p>
                    </div>
                </form>
                <div className='mt-8'>
                    <button className='text-white font-bold  bg-blue-600 w-[400px] rounded-sm h-12'>Login</button>
                    <div className='flex items-center justify-center gap-1.5 mt-4'>
                        <hr className=' w-20 border-gray-300' />
                        <span className='text-xs text-gray-400'>Or Sign Up With</span>
                        <hr className=' w-20 border-gray-300' />
                    </div>
                    
                </div>
                <div className='flex gap-4 mt-8 justify-center items-center '>
                    <button className='border  border-gray-200 w-[190px] h-12 rounded-sm flex gap-2 items-center justify-center font-bold'><FcGoogle size={25} />Google</button>
                    <button className='border border-gray-200 w-[190px] h-12 rounded-sm flex gap-2 items-center justify-center font-bold'><SiFacebook size={25} className='text-blue-600'/>Facebook</button>
                </div>
                <div>
                    <p className='text-xs text-gray-400 text-center mt-4'>Already have an account? <span className='text-blue-600 underline'><NavLink to="/login">Sign Up</NavLink></span></p>
                </div>

            </div>
        </div>
       </div>

    )
}

export default SignUp;

