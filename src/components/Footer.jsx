import React, {useEffect} from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri"
import { FaTwitter, FaLinkedin, FaArrowUp } from "react-icons/fa"
import AOS from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
  useEffect(() => {
      AOS.init({
        duration: 800,
        delay:200,
        once: false, })
    }, []); 

 return(
    <footer className="bg-gray-900 text-white shadow-xl ">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4  bg-[#ffffff19] py-6">
            <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5"><span className="text-teal-400">Free</span> until you're ready to purchase</h1>
            <div>
                {/**/}
                <input type="text" placeholder="Enter your email" className="text-yellow-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 bg-white focus:outline-amber-50" />
                <button className="bg-teal-400 hover:big-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full">Subscribe</button>
                </div>
        </div>

    {/*footer container*/}
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
     {/*footer section */}
    <div>
        <h1 data-aos="zoom-in" className="text-2xl font-bold text-teal-200">ZS</h1>
        <p data-aos="zoom-in" data-aos-delay="200" className="mt-6">Your Premier destination for quality footwear. Step into comfort and style with our curated collection.</p>
        <div data-aos="zoom-in" data-aos-delay="400" className="w-full flex items-center gap-4 mt-6 ">
        <div className=" hover:bg-teal-700 rounded-full p-3 cursor-pointer">
        <FaFacebook className="fill-white size-6"/>
      </div>
       <div className=" hover:bg-teal-700 rounded-full p-3 cursor-pointer">
        <RiInstagramFill className="fill-white size-6"/>
      </div>
       <div className="hover:bg-teal-700 rounded-full p-3 cursor-pointer">
        <FaTwitter className="fill-white size-6"/>
      </div>
       <div className="hover:bg-teal-700 rounded-full p-3 cursor-pointer">
        <FaLinkedin className="fill-white size-6"/>
      </div> </div>
        </div>

        {/*footer quick-links */}
    <div> <h1 data-aos="zoom-in" className="text-2xl font-bold text-teal-200">Quick Links</h1>
    <ul className="mt-6">
        <li><a href="">About Us</a></li>
        <li><a href="">Contact Us</a></li>
        <li><a href="">Shipping Info</a></li>
        <li><a href="">Size Guide</a></li>
        <li><a href="">Returns</a></li>
        </ul></div>

                {/*footer category */}

    <div><h1 data-aos="zoom-in" data-aos-delay="600" className="text-2xl font-bold text-teal-200">Categories</h1>
     <ul className="mt-6">
        <li><a href="">Men's Shoe</a></li>
        <li><a href="">Women's Shoe</a></li>
        <li><a href="">Kid's Shoe</a></li>
        <li><a href="">Athletic</a></li>
        <li><a href="">Formal</a></li>
        </ul>
    </div>

     {/*footer category */}
    <div>4</div>
      
    </div>    
    </footer>

)
 }
 export default Footer;