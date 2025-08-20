import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";




function NavSection(){
    const[barOpen,setBarOpen] = useState(false)

    const navLinks = [
        {label:"Home",link: "#" },
        {label:"About",link: "#" },
        {label:"Contact",link: "#"},
        {label:"Collections",link: "#"},
        {label:"Login",link: "#"},
    ];
    const mdLinks =[
        {label: "Home", link: "/"},
        {label: "About", link: "/Men"},
        {label: "Contact Us", link: "#"},
    ]


    return(
      <nav className="w-screen fixed bg-gray-100 h-14 shadow-xl content-center top-0 left-0 z-50">
        <div className="flex justify-between md:justify-around mx-4 ">
            {/* Logo */}
            <div><a href="">ZS</a></div>


            {/* md:links */}
             <div className="hidden md:flex gap-5 bg-white rounded-xl w-sm h-8 justify-center items-center ">
                 <div className="gap-5 flex no-underline text-black">
                    {mdLinks.map((k,i)=> (
                    <a className="" key={i} href="{k.link}">{k.label}</a>
                 ))}
                 </div>
                 
                
                 {/* drop down */}
                  <button className="hidden md:flex group relative cursor-pointer ">Categories
                      <div className="absolute top-full items-center right-0 rounded-lg p-3 shadow-md bg-white group-hover:scale-y-0
                           scale-y-0 group-focus:scale-y-100 transition-transform origin-top duration-200 ease-out flex flex-col" >
                           <a className="active hover:bg-gray-100">Men</a>
                           <a className="active hover:bg-gray-100">Women</a>
                           <a className="active hover:bg-gray-100">Kids</a>
                     </div>
                  </button>  
              </div>


           

            {/* Menubar */}
            <div className="flex gap-2 mt-1.5">
                <div><IoSearchOutline size={20} className="font-bold bg-white w-8 rounded-2xl hidden md:flex " /></div>
                <div><CiUser size={20} className="font-bold bg-white w-8 rounded-2xl hidden md:flex" /></div>
                <div><HiOutlineShoppingBag size={20} className="bg-white w-8 rounded-2xl hidden md:flex" /></div>
                <div>< IoMdMenu onClick={()=> setBarOpen(true)} size={30} className="cursor-pointer md:hidden"/></div>   
            </div>


            {/* Side bar */}
           
          <div className={`h-screen w-screen fixed bg-black/50 top-0 right-0 md:hidden flex transition-all duration-300 ease-in
             ${barOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>

             <section className={`flex h-screen w-screen text-black font-bold bg-white  flex-col transform transition-transform duration-300 ease-in-out justify-between ${
                barOpen ? "translate-x-0": "translate-x-full"}`}>
             {/* side bar content */}
               <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center justify-between content-center  h-14  shadow-md">
                     <div className="content-center mx-4">
                         < LiaTimesSolid onClick={()=> setBarOpen(false)} size={30} className="  cursor-pointer" />
                     </div>
                     <div className="flex content-center gap-6 mr-4">
                         <IoSearchOutline size={30} className="font-bold" />
                         <HiOutlineShoppingBag size={30} className="font-bold" />
                      </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-2">
                   <div>
                      <div className="h-14 shadow-sm px-4 text-lg font-bold content-center"><a href="">Home</a></div>
                      <div className="h-14 shadow-sm px-4 border-t-0 text-lg font-bold content-center"><a href="">Shop</a></div>
                      <div className="h-14 shadow-sm px-4 border-t-0 text-lg font-bold content-center"><a href="">Contact</a></div>
                      <div className="h-14 shadow-sm px-4 border-t-0 text-lg font-bold content-center"><a href="">About</a></div>
                   </div>
                  </div>   
             </div>
             <div className="mb-14">
                 <button className="w-sm h-12 text-center font-bold border mx-4">Sign Up</button>
                 <button className="w-sm h-12 text-center text-white bg-black mt-4 mx-4">Log In</button>
             </div>
             </section>
            </div>
        </div>
        
     </nav>
    )
}
 












export default NavSection;