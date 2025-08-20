import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  // AOS Animation Init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: false,
    });
  }, []);

  //  screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <footer className="bg-gray-900 text-white shadow-xl mx-4">
      {/* ... */}
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-6"> <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5"><span className="text-teal-400">Free</span> until you're ready to purchase</h1>
      {/*input area*/}  
      <div> <input type="text" placeholder="Enter your email" className="text-black sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 bg-white focus:outline-amber-50" /> <button className="bg-teal-400 hover:bg-teal-700 hover:text-3xl duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full">Subscribe</button> </div>
       </div> 

      {/* Footer Container */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">

        {/* Brand Info  */}
        <div>
          <h1 data-aos="zoom-in" className="text-2xl font-bold text-teal-200">ZS</h1>
          <p data-aos="zoom-in" data-aos-delay="200" className="mt-6">Your Premier destination for quality footwear.</p>
          <div data-aos="zoom-in" data-aos-delay="400" className="w-full flex items-center gap-4 mt-6">
            {/* Socials */}
            <div className="hover:bg-teal-700 rounded-full p-3 cursor-pointer"><FaFacebook className="fill-white size-6" /></div>
            <div className="hover:bg-teal-700 rounded-full p-3 cursor-pointer"><RiInstagramFill className="fill-white size-6" /></div>
            <div className="hover:bg-teal-700 rounded-full p-3 cursor-pointer"><FaTwitter className="fill-white size-6" /></div>
            <div className="hover:bg-teal-700 rounded-full p-3 cursor-pointer"><FaLinkedin className="fill-white size-6" /></div>
          </div>
        </div>

        {/* Quick Links */}
        <div data-aos="zoom-in"
            data-aos-delay="600">
          <h1  className="text-2xl font-bold text-teal-200 cursor-pointer flex justify-between items-center"
            onClick={() => isMobile && setShowQuickLinks(!showQuickLinks)}
          >
            Quick Links
            {isMobile && (
              <span className="text-teal-300 text-lg">
                {showQuickLinks ? "▲" : "▼"}
              </span>
            )}
          </h1>
          <ul className={`quick-links mt-6  overflow-hidden ${
              isMobile
                ? showQuickLinks
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                : "opacity-100 max-h-screen"
            }`}
          >
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Shipping Info</a></li>
            <li><a href="">Size Guide</a></li>
            <li><a href="">Returns</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div data-aos="zoom-in" data-aos-delay="800">
          <h1 className="text-2xl font-bold text-teal-200 cursor-pointer flex justify-between items-center"
            onClick={() => isMobile && setShowCategories(!showCategories)}
          > Categories
            {isMobile && (
              <span className="text-teal-300 text-lg">
                {showCategories ? "▲" : "▼"}
              </span>
            )}
          </h1>
          <ul  className={`categories mt-6 transition-all duration-300 ease-in-out overflow-hidden ${
              isMobile
                ? showCategories
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                : "opacity-100 max-h-screen"
            }`}
          >
            <li><a href="">Men's Shoe</a></li>
            <li><a href="">Women's Shoe</a></li>
            <li><a href="">Kid's Shoe</a></li>
            <li><a href="">Athletic</a></li>
            <li><a href="">Formal</a></li>
          </ul>
        </div>

        {/* Stay Updated  */}
        <div data-aos="zoom-in" data-aos-delay="1000">
          <h1 className="text-2xl font-bold text-teal-200">Stay Updated</h1>
          <p data-aos="zoom-in" data-aos-delay="200" className="mt-6">Subscribe to get special offers, free giveaways, and exclusive deals.</p>
          <input type="text" placeholder="Enter your email" className="text-black mt-5 sm:w-72 w-full py-2.5 rounded px-2 bg-white" />
          <button className="bg-teal-400 hover:bg-teal-800 mt-5 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white w-full sm:w-auto">Subscribe</button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-gray-600 border-t mx-5"></div>
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-6">
        <div><p className="text-[15px] leading-8 flex justify-center">Copyright 2025, ZackShola, All Rights Reserved.</p></div>
        <div className="flex justify-center mt-5 md:mt-0">
          <ul className="footer-policy flex gap-7">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookies Policy</a></li>
          </ul>
        </div>
        <div className="text-white p-3 rounded-full hover:text-teal-300 cursor-pointer flex justify-center">
          <Link to="root" spy={true} offset={-100} smooth={true}>
            <FaArrowUp className="size-6 hover:scale-125 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
