import React from 'react'
import { AiOutlineUser} from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
       <div className='flex mt-20 justify-center items-center gap-10 mb-14'>
       <div className='w-96 '>
          <img className='rounded-2xl' src="/contact.png" alt="" />
       </div>
       <div className=' flex flex-col  justify-center items-center ' >
         <div className='w-24 rounded-2xl text-xs text-blue-500 bg-blue-300 text-center'>Contact Us</div>
         <div>
          <h1 className='text-3xl font-bold'>Let's Get In Touch.</h1>
          <p className='text-xs text-gray-500'>Or just reach out manually to zs@gmail.com</p>
         </div>

         <form action="" className='flex flex-col'>
          <label htmlFor="" className='flex flex-col text-sm'>Full Name
             <div className='relative'>
               <input id="name" type="name" name="name"  placeholder='Enter your full name..' className='placeholder-gray-500 placeholder:text-xs placeholder-opacity-75 h-8 w-[400px] border
              border-gray-300 rounded-2xl px-6 py-1.5 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10
                focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500' />
                  
                 <button className='inset-y-0 left-2 absolute'> <AiOutlineUser size={15} />
                  </button> 
             </div>
          </label>
          
          <label htmlFor="" className='flex flex-col text-sm'> Email Address
             <div className='relative'>
              <input id="email" type="email" name="email" required autoComplete="email" placeholder='Enter your email address..' className='placeholder-gray-500 placeholder:text-xs placeholder-opacity-75 h-8 w-[400px] border
              border-gray-300 rounded-2xl px-6 py-1.5 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10
              focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500' />
              <button className='absolute inset-y-0 left-2'> <MdOutlineEmail size={15} /></button>
             </div>
          </label>
          <label htmlFor=" "className='flex flex-col text-sm'>
            Phone Number
            <input id="number" type="tel" name="phonr"  placeholder='' className='placeholder-gray-500 placeholder:text-xs placeholder-opacity-75 h-8 w-[400px] border
              border-gray-300 rounded-2xl px-4 py-1.5 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10
              focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500' />
          </label>

          <label htmlFor="" className='flex flex-col text-sm'>
            Message 
            <textarea name="" id="" placeholder='Enter your main text here..' className='w-[400px] h-[150px] border rounded-2xl px-4  
            py-1.5 border-gray-400 outline-1 -outline-offset-1  outline-white/10 focus:outline-indigo-500'></textarea>
          </label>
          <p className='text-sm'>
            <input type="checkbox" name="" id="" /> I hereby agree to Privacy Policy terms
          </p>
         </form>
         <div><button className='w-[400px] h-8 bg-blue-600 text-white text-xs rounded-2xl'>Submit Form</button></div>
       </div>
      
    </div>
     <div>
      <Footer/>
     </div>
    </div>
  )
}

export default Contact