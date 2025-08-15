import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";


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
        {label: "Home", link: "#"},
        {label: "About", link: "#"},
        {label: "Contact Us", link: "#"},
    ]


    return(
       <nav className="w-screen fixed bg-white h-10 shadow-xl content-center top-0 left-0 z-50">
        <div className="flex justify-between md:justify-around px-4 ">
            {/* Logo */}
            <div><a href="">ZS</a></div>


            {/* md:links */}
            <div className="hidden md:flex gap-5">
                {mdLinks.map((k,i)=> (
                    <a key={i} href="{k.link}">{k.label}</a>
                ))}
            </div>


            {/* drop down */}
            <button className="hidden md:flex group relative cursor-pointer ">Categories
                <div className="absolute top-full right-0 rounded-lg p-3 shadow-md bg-white group-hover:scale-y-0
                scale-y-0 group-focus:scale-y-100 transition-transform origin-top duration-200 ease-out flex flex-col" >
                    <a className="active hover:bg-gray-100">Men</a>
                    <a className="active hover:bg-gray-100">Women</a>
                    <a className="active hover:bg-gray-100">Kids</a>

                </div>
            </button>

            {/* Menubar */}
            <div className="flex gap-2">
                <div><GiShoppingCart size={30} /></div>
                <div>< IoMdMenu onClick={()=> setBarOpen(true)} size={30} className="cursor-pointer md:hidden"/></div>   
            </div>


            {/* Side bar */}
           
          <div className={`h-screen w-screen fixed bg-black/50 top-0 right-0 md:hidden flex transition-all duration-300 ease-in
             ${barOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>

             <section className={`h-screen w-screen text-black font-bold bg-white text-center flex-col ml-auto transform transition-transform duration-300 ease-in-out ${
                barOpen ? "translate-x-0": "translate-x-full"}`}>
            
               <div className="flex flex-col gap-3  mt-10">
                  <div>
                    < LiaTimesSolid onClick={()=> setBarOpen(false)} size={30} className=" justify-end ml-24 mt-2 cursor-pointer" />
                  </div>
                  <div className="flex flex-col gap-3 mt-2">
                    {navLinks.map( (d,i)=>(
                  <a key={i} href="{d.link}" className="">{d.label}</a>
                   ) )}
                  </div>
             </div>

             </section>
            </div>
        </div>
        
       </nav>
    )
}
 












export default NavSection;