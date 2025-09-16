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

  // Screen size detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <footer className="bg-gray-800 text-white shadow-xl mx-4">
      {/* Newsletter Section (Moved up for better flow, full-width and responsive) */}
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-5 py-2 bg-[#ffffff19]">
        <h1 className="lg:text-3xl text-2xl md:mb-0 mb-2 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-blue-700">Free</span> until you're ready to purchase
        </h1>
        {/* Input area - Responsive: stacks on mobile/tablet, inline on desktop */}
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter your email"
            className="text-black w-full sm:w-72 sm:mr-5 mr-0 py-2.5 rounded px-2 bg-white focus:outline-amber-50"
          />
          <button className="bg-blue-500 hover:bg-blue-600 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Container - Responsive grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:px-8 px-5 py-2 md:py-4 gap-4 md:gap-8">

        {/* Brand Info */}
        <div className="md:col-span-1">
          <h1 data-aos="zoom-in" className="text-[20px] lg:text-2xl font-bold text-blue-700">
            ZS
          </h1>
          <p data-aos="zoom-in" data-aos-delay="200" className="mt-2 text-sm md:text-base">
            Your Premier destination for quality footwear.
          </p>
          <div data-aos="zoom-in" data-aos-delay="400" className="w-full flex items-center gap-4 mt-2">
            {/* Socials - Responsive sizing */}
            <div className="hover:bg-blue-500 rounded-full p-3 cursor-pointer transition-colors">
              <FaFacebook className="fill-white size-5 md:size-6" />
            </div>
            <div className="hover:bg-blue-500 rounded-full p-3 cursor-pointer transition-colors">
              <RiInstagramFill className="fill-white size-5 md:size-6" />
            </div>
            <div className="hover:bg-blue-500 rounded-full p-3 cursor-pointer transition-colors">
              <FaTwitter className="fill-white size-5 md:size-6" />
            </div>
            <div className="hover:bg-blue-500 rounded-full p-3 cursor-pointer transition-colors">
              <FaLinkedin className="fill-white size-5 md:size-6" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div data-aos="zoom-in" data-aos-delay="600" className="md:col-span-1">
          <h1
            className="text-[20px] lg:text-2xl font-bold text-blue-700 cursor-pointer flex gap-5 items-center"
            onClick={() => isMobile && setShowQuickLinks(!showQuickLinks)}
          >
            Quick Links
            {isMobile && (
              <span className="text-blue-500 text-lg">{showQuickLinks ? "▲" : "▼"}</span>
            )}
          </h1>
          <ul
            className={`quick-links mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
              isMobile
                ? showQuickLinks
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                : "opacity-100 max-h-screen"
            }`}
          >
            <li className="mt-1">
              <Link to="about" smooth={true} duration={500} className="hover:text-blue-400 text-sm md:text-base">
                About Us
              </Link>
            </li>
            <li className="mt-1">
              <Link to="contact" smooth={true} duration={500} className="hover:text-blue-400 text-sm md:text-base">
                Contact Us
              </Link>
            </li>
            <li className="mt-1">
              <Link to="shipping" smooth={true} duration={500} className="hover:text-blue-400 text-sm md:text-base">
                Shipping Info
              </Link>
            </li>
            <li className="mt-1">
              <Link to="returns" smooth={true} duration={500} className="hover:text-blue-400 text-sm md:text-base">
                Returns
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div data-aos="zoom-in" data-aos-delay="800" className="md:col-span-1">
          <h1
            className="text-[20px] lg:text-2xl font-bold text-blue-700 cursor-pointer flex gap-5 items-center"
            onClick={() => isMobile && setShowCategories(!showCategories)}
          >
            Categories
            {isMobile && (
              <span className="text-blue-500 text-lg">{showCategories ? "▲" : "▼"}</span>
            )}
          </h1>
          <ul
            className={`categories mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
              isMobile
                ? showCategories
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                : "opacity-100 max-h-screen"
            }`}
          >
            <li className="mt-1">
              <Link to="mens" smooth={true} duration={500} className="hover:text-blue-400 text-sm md:text-base">
                Men's Shoe
              </Link>
            </li>
            <li className="mt-1">
              <Link to="womens" smooth={true} duration={500} className="hover:text-blue-400 text-sm md:text-base">
                Women's Shoe
              </Link>
            </li>
            <li className="mt-1">
              <Link to="kids" smooth={true} duration={500} className="hover:text-blue-400 text-sm md:text-base">
                Kid's Shoe
              </Link>
            </li>
            <li className="mt-1">
              <Link to="athletic" smooth={true} duration={500} className="hover:text-blue-400 text-sm md:text-base">
                Athletic
              </Link>
            </li>
          </ul>
        </div>

        {/* Stay Updated - Now spans full width on mobile/tablet via grid span */}
        <div data-aos="zoom-in" data-aos-delay="1000" className="md:col-span-1">
          <h1 className="text-[20px] lg:text-2xl font-bold text-blue-700">Stay Updated</h1>
          <p data-aos="zoom-in" data-aos-delay="200" className="mt-2 text-sm md:text-base">
            Subscribe to get special offers.
          </p>
          <div className="sm:flex-row items-center gap-2 mt-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-black w-full sm:w-72 py-2.5 rounded px-2 bg-white focus:outline-amber-50"
            />
            <button className="bg-blue-500 hover:bg-blue-600 mt-2 sm:mt-0 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Responsive alignment */}
      <div className="border-gray-600 border-t mx-5"></div>
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-2">
        <div className="text-center md:text-left ">
          <p className="text-[15px] leading-8">Copyright 2025, ZackShola, All Rights Reserved.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-2 md:mt-0 gap-4 sm:gap-0">
         
          <div className="text-white flex items-center p-3 rounded-full hover:text-blue-600 cursor-pointer ml-4">
            <Link to="root" spy={true} offset={-100} smooth={true}>
              <FaArrowUp className="size-5 md:size-6 hover:scale-125 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;