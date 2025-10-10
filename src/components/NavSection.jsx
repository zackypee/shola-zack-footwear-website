import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiMorgueFeet } from "react-icons/gi";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import toast from 'react-hot-toast';




function NavSection(){
    const[barOpen,setBarOpen] = useState(false)
    const[searchOpen,setSearchOpen] = useState(false)
    const[searchQuery,setSearchQuery] = useState('')
    const[searchResults,setSearchResults] = useState([])
    const[searchLoading,setSearchLoading] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const { totals } = useCart()
    const { currentUser, logout } = useAuth()

    // Close sidebar on route change
    useEffect(()=>{
        setBarOpen(false)
    },[location.pathname])

    // Close search when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchOpen && !event.target.closest('.search-container')) {
                setSearchOpen(false)
                setSearchQuery('')
                setSearchResults([])
            }
        }

        if (searchOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [searchOpen])

    // Handle search functionality - inline search without navigation
    const handleSearch = async (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            setSearchLoading(true)
            try {
                const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery.trim())}`)
                const data = await response.json()
                setSearchResults(data.products || [])
                toast.success(`Found ${data.products?.length || 0} results for "${searchQuery.trim()}"`)
            } catch (error) {
                toast.error('Search failed')
                setSearchResults([])
            } finally {
                setSearchLoading(false)
            }
        }
    }

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
        if (!searchOpen) {
            // Focus on search input when opening
            setTimeout(() => {
                const searchInput = document.getElementById('navbar-search')
                if (searchInput) searchInput.focus()
            }, 100)
        }
    }

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


           

            {/* Search Bar - Desktop */}
            {searchOpen && (
              <div className="search-container hidden md:flex absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40">
                <form onSubmit={handleSearch} className="w-full flex items-center px-4 py-3">
                  <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                    <IoSearchOutline size={18} className="text-gray-400" />
                    <input
                      id="navbar-search"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for shoes..."
                      className="flex-1 text-sm border-none outline-none bg-transparent placeholder-gray-500"
                    />
                  </div>
                  <div className="flex gap-2 ml-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSearchOpen(false)
                        setSearchQuery('')
                      }}
                      className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={searchLoading}
                      className={`px-4 py-1 text-sm text-white rounded ${searchLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                    >
                      {searchLoading ? 'Searching...' : 'Search'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Search Results - Desktop */}
            {searchOpen && searchResults.length > 0 && (
              <div className="search-container hidden md:flex absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40 mt-0">
                <div className="w-full max-h-96 overflow-y-auto">
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Search Results ({searchResults.length})</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {searchResults.slice(0, 5).map((product) => (
                        <div key={product.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                          <img src={product.thumbnail} alt={product.title} className="w-12 h-12 object-cover rounded" />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900">{product.title}</h4>
                            <p className="text-xs text-gray-500">${product.price}</p>
                          </div>
                        </div>
                      ))}
                      {searchResults.length > 5 && (
                        <div className="text-center py-2">
                          <button 
                            onClick={() => navigate(`/search?q=${encodeURIComponent(searchQuery)}`)}
                            className="text-sm text-blue-600 hover:text-blue-800"
                          >
                            View all {searchResults.length} results →
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Menubar */}
            <div className="flex gap-2 mt-1.5">
                 <button onClick={toggleSearch} className="search-container hidden md:flex group">
                   <IoSearchOutline size={20} className={`font-bold bg-white w-8 rounded-2xl transition-transform duration-200 ${searchOpen ? 'scale-110 text-blue-600' : 'hover:scale-105'}`} />
                 </button>
                 
               <button className="hidden md:flex group relative cursor-pointer ">
                 <CiUser size={20} className="font-bold bg-white w-8 rounded-2xl hidden md:flex" /> 
                 <div className="absolute top-full min-w-32 items-center right-0 rounded-lg p-4 shadow-md bg-white group-hover:scale-y-100
                    scale-y-0 group-focus:scale-y-100 transition-transform origin-top duration-200 ease-out flex flex-col text-sm" > 
                   {currentUser ? (
                     <>
                       <div className="mb-2 text-gray-700">Hi, {currentUser.name.split(' ')[0]}</div>
                       <button onClick={()=>{ logout(); toast.success('Logged out') }} className="text-red-600 hover:bg-gray-100 w-full text-left px-2 py-1 rounded">Logout</button>
                     </>
                   ) : (
                     <>
                       <NavLink to="/login" className="active hover:bg-gray-100  hover:rounded hover:w-auto w-full text-left px-2 py-1 rounded">Log In</NavLink>
                       <NavLink to="/signup" className="active hover:bg-gray-100 hover:w-24 w-full text-left px-2 py-1 rounded">Sign Up</NavLink>
                     </>
                   )}
                 </div>
               </button>
                <NavLink to="/cart" aria-label="View cart" className="hidden md:flex relative">
                  <HiOutlineShoppingBag size={20} className="bg-white w-8 rounded-2xl" />
                  {totals.count > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-red-600 text-white text-[10px] leading-4 text-center">
                      {totals.count}
                    </span>
                  )}
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
                         <button onClick={()=> { setSearchOpen(!searchOpen); setBarOpen(false) }} className="search-container">
                           <IoSearchOutline size={30} className={`font-bold transition-transform duration-200 ${searchOpen ? 'scale-110 text-blue-600' : 'hover:scale-105'}`} />
                         </button>
                         <div className="relative">
                           <NavLink to="/cart" onClick={()=> setBarOpen(false)}>
                             <HiOutlineShoppingBag size={30} className="font-bold" />
                           </NavLink>
                           {totals.count > 0 && (
                             <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-red-600 text-white text-[10px] leading-4 text-center">
                               {totals.count}
                             </span>
                           )}
                         </div>
                      </div>
                  </div>
                  
                  {/* Mobile Search Bar */}
                  {searchOpen && (
                    <div className="search-container md:hidden px-4 py-3 border-t border-gray-200">
                      <form onSubmit={handleSearch} className="flex items-center gap-2">
                        <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                          <IoSearchOutline size={18} className="text-gray-400" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for shoes..."
                            className="flex-1 bg-transparent border-none outline-none text-sm placeholder-gray-500"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setSearchOpen(false)
                            setSearchQuery('')
                          }}
                          className="px-3 py-2 text-gray-500 text-sm hover:bg-gray-100 rounded"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={searchLoading}
                          className={`px-3 py-2 text-white rounded text-sm ${searchLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                        >
                          {searchLoading ? 'Searching...' : 'Search'}
                        </button>
                      </form>
                    </div>
                  )}

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
                    {currentUser ? (
                      <button onClick={()=> { logout(); setBarOpen(false); toast.success('Logged out') }} className="h-14 shadow-sm px-4 text-lg font-bold text-left">Logout</button>
                    ) : (
                      <>
                        <NavLink onClick={()=> setBarOpen(false)} to="/login" className="h-14 shadow-sm px-4 text-lg font-bold content-center">Log In</NavLink>
                        <NavLink onClick={()=> setBarOpen(false)} to="/signup" className="h-14 shadow-sm px-4 text-lg font-bold content-center">Sign Up</NavLink>
                      </>
                    )}
                   </div>
                  </div>   
             </div>
             <div className="mb-14 flex flex-col items-center"></div>
             </section>
            </div>
        </div>
        
     </nav>
    )
}
 












export default NavSection;
