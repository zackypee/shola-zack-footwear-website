import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { GiMorgueFeet } from "react-icons/gi";
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

function LoginPage(){

    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false);

    // Handle Google Login
    const handleGoogleLogin = () => {
        toast.loading('Redirecting to Google...', { duration: 2000 })
        // For demo purposes, try to login with mock Google user
        setTimeout(() => {
            try {
                const mockGoogleUser = {
                    email: 'user@gmail.com',
                    password: 'google_auth_' + Date.now()
                }
                login(mockGoogleUser)
                toast.success('Logged in with Google!')
                setTimeout(() => navigate('/'), 1500)
            } catch (err) {
                toast.error('Google login failed: ' + err.message)
            }
        }, 2000)
    }

    // Handle Facebook Login
    const handleFacebookLogin = () => {
        toast.loading('Redirecting to Facebook...', { duration: 2000 })
        // For demo purposes, try to login with mock Facebook user
        setTimeout(() => {
            try {
                const mockFacebookUser = {
                    email: 'user@facebook.com',
                    password: 'facebook_auth_' + Date.now()
                }
                login(mockFacebookUser)
                toast.success('Logged in with Facebook!')
                setTimeout(() => navigate('/'), 1500)
            } catch (err) {
                toast.error('Facebook login failed: ' + err.message)
            }
        }, 2000)
    }
    
    return(
       <div className='bg-white min-h-screen'>
         <div className='flex flex-col md:flex-row mt-20 gap-8 md:gap-20 rounded-3xl justify-center items-center px-4'>
            <div className='w-80 md:w-96 hidden md:flex'><img className='rounded-3xl' src="/login.png" alt="" /></div>
            {/* login info */}
            <div className='flex flex-col'>
                <div className='flex items-center gap-4 justify-center'>
                    <div className='bg-blue-700 rounded-3xl h-10 w-10 content-center justify-center px-1.5'><GiMorgueFeet className='text-white' size={25} /></div>
                    <p className='font-bold text-2xl'>ZS </p>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold text-4xl mt-4'>Welcome Back</h1>
                    <p className='text-sm text-gray-400 mt-2'>Please login to your account</p>
                </div>
                <form onSubmit={async (e)=>{
                    e.preventDefault();
                    if (!form.email.trim()) { toast.error('Please enter your email'); return; }
                    if (!form.password.trim()) { toast.error('Please enter your password'); return; }
                    
                    setLoading(true);
                    try { 
                        console.log('Attempting to login:', { email: form.email });
                        login(form); 
                        console.log('Login successful');
                        toast.success('Logged in successfully!'); 
                        setTimeout(() => navigate('/'), 1500);
                    }
                    catch (err) { 
                        console.error('Login error:', err);
                        toast.error(err.message || 'Invalid email or password'); 
                    }
                    finally { setLoading(false); }
                }} className='mt-4'>
                    <div className='flex flex-col gap-4  '>
                        <input id="email" value={form.email} onChange={(e)=> setForm({...form, email: e.target.value})} type="email" name="email" required autoComplete="email" placeholder='Email address' className='placeholder-gray-500 placeholder-opacity-75 h-12 w-full max-w-[400px] bg-gray-200
                        rounded-sm px-3 py-1.5 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10
                        focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500' />
                       <div className='relative '>
                          <input id="password" value={form.password} onChange={(e)=> setForm({...form, password: e.target.value})}
                          type={showPassword ? "text" : "password"} name="password" 
                         required autoComplete="current-password" placeholder='Password' className='placeholder-gray-500 placeholder-opacity-75 h-12 w-full max-w-[400px] bg-gray-200
                         rounded-sm px-3 py-1.5 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10
                         focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500' />
                         <button type='button'
                             onClick={()=>setShowPassword(!showPassword)} className=' absolute inset-y-0 hover:text-gray-700 right-3 justify-self-end flex items-center '>
                             {showPassword ? < AiOutlineEye className='text-gray-400' size={20} /> : <AiOutlineEyeInvisible className='text-gray-400' size={20} />}
                            </button>
                       </div>
                        <p className='text-xs font-medium text-end'>Forgot Password?</p>
                    </div>
                    <div className='mt-8'>
                        <button type="submit" disabled={loading} className={`text-white font-bold w-full max-w-[400px] rounded-sm h-12 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
                <div className='flex items-center justify-center gap-1.5 mt-4'>
                    <hr className=' w-20 border-gray-300' />
                    <span className='text-xs text-gray-400'>Or Login With</span>
                    <hr className=' w-20 border-gray-300' />
                </div>
                
                <div className='flex gap-4 mt-8 justify-center items-center '>
                    <button 
                        onClick={handleGoogleLogin}
                        className='border border-gray-200 w-[190px] h-12 rounded-sm flex gap-2 items-center justify-center font-bold hover:bg-gray-50 transition-colors'
                    >
                        <FcGoogle size={25} />Google
                    </button>
                    <button 
                        onClick={handleFacebookLogin}
                        className='border border-gray-200 w-[190px] h-12 rounded-sm flex gap-2 items-center justify-center font-bold hover:bg-gray-50 transition-colors'
                    >
                        <SiFacebook size={25} className='text-blue-600'/>Facebook
                    </button>
                </div>
                <div>
                    <p className='text-xs text-gray-400 text-center mt-4'>Don't have an account? <span className='text-blue-600 underline'><NavLink to="/signup">Signup</NavLink></span></p>
                </div>

            </div>
        </div>
       </div>
    )
}

export default LoginPage;