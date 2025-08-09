import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";


function NavSection(){
    const[barOpen,setBarOpen] = useState(false)
    const toggleMenu = ()=> {
        setBarOpen(!barOpen);
    };

    return(
       <nav className="w-screen h-10 shadow-xl content-center top-0 left-0">
        <div className="flex justify-between md:justify-around items-center ">
            <div>ZS</div>
            <div className="hidden md:flex">
                <ul className="flex gap-10">
                    <a href=""><li>Home</li></a>
                    <a href=""><li>Shop</li></a>
                    <a href=""><li>Men</li></a>
                    <a href=""><li>Women</li></a>
                    <a href=""><li>Kids</li></a>
                </ul>
            </div>
            <div className="gap-10 hidden md:flex">
                <div className=""> <CiSearch size={30} /> </div>
                <div><GiShoppingCart size={30} /></div>
            </div>
            {barOpen &&(
                <div onClick={toggleMenu}><LiaTimesSolid /></div>
            )}
            {!barOpen &&(
               <div className="flex gap-5 md:hidden">
                <div><GiShoppingCart size={30}/></div>
                 <div onClick={toggleMenu}><IoMdMenu size={30}/></div>
               </div>

            )}
        </div> 
       </nav>
    )
}













export default NavSection;