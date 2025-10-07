import React, { useEffect } from "react";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";
import { GiMorgueFeet } from "react-icons/gi";




function NavSection(){
    const[barOpen,setBarOpen] = useState(false)
    const location = useLocation()

    // Close sidebar on route change
    useEffect(()=>{
        setBarOpen(false)
    },[location.pathname])

    const navLinks = [
        {label:"Home",link: "/" },
        {label:"About",link: "/about" },
        {label:"Contact",link: "/contact"},
        {label:"Collections",link: "/collections"},
        {label:"Login",link: "/login"},
    ];
    const mdLinks =[
        {label: "Home", link: "/"},
        {label: "About", link: "/about"},
        {label: "Contact Us", link: "/contact"},
    ]


    return(
      <nav className="w-screen fixed bg-gray-100 h-14 shadow-xl content-center top-0 left-0 z-50">
        <div className="flex justify-between md:justify-around mx-4 ">
            {/* Logo */}
                <div className="flex justify-center items-center gap-2">     
                <a href="" className="text-2xl">ZS</a>
                <div className='bg-blue-700 rounded-3xl h-10 w-10 content-center justify-center px-1.5'><GiMorgueFeet className='text-white' size={25} /></div>
                </div>


            {/* md:links */}
             <div className="hidden md:flex gap-5 bg-white rounded-xl w-sm h-8 justify-center items-center ">
                 <div className="gap-5 flex no-underline text-black">
                    {mdLinks.map((k,i)=> (
                    <NavLink
                        key={i} 
                         to={k.link}
                         className = {({isActive}) =>
                         isActive ? "text-blue-500 font-bold" : "text-black"
                         } 
                     >
                           {k.label}
                    </NavLink>
                 ))}
                 </div>
                 
                
                 {/* drop down */}
                 <button className="hidden md:flex group relative cursor-pointer ">Categories
                     <div className="absolute top-full items-left right-0 rounded-lg p-3 shadow-md bg-white group-hover:scale-y-100
                          scale-y-0 group-focus:scale-y-100 transition-transform origin-top duration-200 ease-out flex flex-col" >
                          <NavLink to='/men' className="active hover:bg-gray-100 hover:w-14 hover:rounded">Men</NavLink>
                          <NavLink to='/women' className="active hover:bg-gray-100 hover:w-14 hover:rounded">Women</NavLink>
                          <NavLink to='/kids' className="active hover:bg-gray-100 hover:w-14 hover:rounded">Kids</NavLink>
                    </div>
                 </button>  
              </div>


           

            {/* Menubar */}
            <div className="flex gap-2 mt-1.5">
                 <NavLink to="/search" className="hidden md:flex">
                   <IoSearchOutline size={20} className="font-bold bg-white w-8 rounded-2xl" />
                 </NavLink>
                 
                <button className="hidden md:flex group relative cursor-pointer "><CiUser size={20} className="font-bold bg-white w-8 rounded-2xl hidden md:flex" /> 
                 <div className="absolute top-full w-24 items-center right-0 rounded-lg p-4 shadow-md bg-white group-hover:scale-y-100
                    scale-y-0 group-focus:scale-y-100 transition-transform origin-top duration-200 ease-out flex flex-col" > 
                    <NavLink to="/login" className="active hover:bg-gray-100  hover:rounded hover:w-auto">Log In</NavLink>
                    <NavLink to="/signup" className="active hover:bg-gray-100 hover:w-24">Sign Up</NavLink>
                 </div>

                </button>
                <NavLink to="/cart" aria-label="View cart" className="hidden md:flex">
                  <HiOutlineShoppingBag size={20} className="bg-white w-8 rounded-2xl" />
                </NavLink>
                 <div>< IoMdMenu onClick={()=> setBarOpen(true)} size={30} className="cursor-pointer md:hidden"/></div>   
            </div>


            {/* Side bar */}
           
          <div onClick={()=> setBarOpen(false)} className={`h-screen w-screen fixed bg-black/50 top-0 right-0 md:hidden flex transition-all duration-300 ease-in
             ${barOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>

             <section onClick={(e)=> e.stopPropagation()} className={`flex h-screen w-screen text-black font-bold bg-white  flex-col transform transition-transform duration-300 ease-in-out justify-between ${
                barOpen ? "translate-x-0": "translate-x-full"}`}>
             {/* side bar content */}
               <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center justify-between content-center  h-14  shadow-md">
                     <div className="content-center mx-4">
                        <LiaTimesSolid onClick={()=> setBarOpen(false)} size={30} className="  cursor-pointer" />
                     </div>
                     <div className="flex content-center gap-6 mr-4">
                         <NavLink to="/search" onClick={()=> setBarOpen(false)}>
                           <IoSearchOutline size={30} className="font-bold" />
                         </NavLink>
                         <HiOutlineShoppingBag size={30} className="font-bold" />
                      </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-2">
                   <div className="flex flex-col gap-3 mt-2">
                    {navLinks.map((l,i)=> (
                        <NavLink
                        key={i}
                        to={l.link}
                        onClick={()=> setBarOpen(false)}
                        className="h-14 shadow-sm px-4 text-lg font-bold content-center" >
                            {l.label}
                        </NavLink>
                    ))
                    }
                     
                   </div>
                  </div>   
             </div>
             <div className="mb-14 flex flex-col items-center">
                <NavLink onClick={()=> setBarOpen(false)} to="/signup" className="w-sm h-12 text-center font-bold border mx-4  content-center">Sign Up</NavLink>
                <NavLink onClick={()=> setBarOpen(false)} to="/login" className="w-sm h-12 text-center text-white bg-black mt-4 mx-4 content-center">Log In</NavLink>
             </div>
             </section>
            </div>
        </div>
        
     </nav>
    )
}
 












export default NavSection;