import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { GiMorgueFeet } from "react-icons/gi";
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

function SignUp(){

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const [loading, setLoading] = useState(false);
    const onChange = (e) => setForm({ ...form, [e.target.id]: e.target.value })

    // Handle Google Signup
    const handleGoogleSignup = () => {
        toast.loading('Redirecting to Google...', { duration: 2000 })
        // For demo purposes, create a mock Google user
        setTimeout(() => {
            try {
                const mockGoogleUser = {
                    name: 'Google User',
                    email: 'user@gmail.com',
                    password: 'google_auth_' + Date.now()
                }
                register(mockGoogleUser)
                toast.success('Signed up with Google!')
                setTimeout(() => navigate('/'), 1500)
            } catch (err) {
                toast.error('Google signup failed: ' + err.message)
            }
        }, 2000)
    }

    // Handle Facebook Signup
    const handleFacebookSignup = () => {
        toast.loading('Redirecting to Facebook...', { duration: 2000 })
        // For demo purposes, create a mock Facebook user
        setTimeout(() => {
            try {
                const mockFacebookUser = {
                    name: 'Facebook User',
                    email: 'user@facebook.com',
                    password: 'facebook_auth_' + Date.now()
                }
                register(mockFacebookUser)
                toast.success('Signed up with Facebook!')
                setTimeout(() => navigate('/'), 1500)
            } catch (err) {
                toast.error('Facebook signup failed: ' + err.message)
            }
        }, 2000)
    }
    
    return(
       <div className='bg-white '>
         <div className='flex mt-20 gap-20  rounded-3xl justify-center items-center'>
            <div className='w-96 hidden md:flex '><img className='rounded-3xl' src="/login.png" alt="" /></div>
            {/* login info */}
            <div className='flex flex-col'>
                <div className='flex items-center gap-4 justify-center'>
                    <div className='bg-blue-700 rounded-3xl h-10 w-10 content-center justify-center px-1.5'><GiMorgueFeet className='text-white' size={25} /></div>
                    <p className='font-bold text-2xl'>ZS </p>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold text-4xl mt-4'>Create Account</h1>
                    <p className='text-sm text-gray-400 mt-2'>Sign up to get started</p>
                </div>
                <form onSubmit={async (e)=>{
                    e.preventDefault();
                    if (form.password !== form.confirmPassword) { toast.error('Passwords do not match'); return; }
                    if (form.password.length < 6) { toast.error('Password must be at least 6 characters'); return; }
                    if (!form.email.includes('@')) { toast.error('Please enter a valid email'); return; }
                    if (!form.name.trim()) { toast.error('Please enter your name'); return; }
                    
                    setLoading(true);
                    try { 
                        console.log('Attempting to register:', { name: form.name, email: form.email });
                        register({ name: form.name, email: form.email, password: form.password }); 
                        console.log('Registration successful');
                        toast.success('Account created successfully!'); 
                        setTimeout(() => navigate('/'), 1500);
                    }
                    catch (err) { 
                        console.error('Registration error:', err);
                        toast.error(err.message || 'Could not sign up'); 
                    }
                    finally { setLoading(false); }
                }} className='mt-4'>
                    <div className='flex flex-col gap-4  '>
                        <input id="name" value={form.name} onChange={onChange} type="text" name="name" required autoComplete="name" placeholder='Full Name' className='placeholder-gray-500 placeholder-opacity-75 h-12 w-[400px] bg-gray-200
                        rounded-sm px-3 py-1.5 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10
                        focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500' />
                       
                        <input id="email" value={form.email} onChange={onChange} type="email" name="email" required autoComplete="email" placeholder='Email address' className='placeholder-gray-500 placeholder-opacity-75 h-12 w-[400px] bg-gray-200
                        rounded-sm px-3 py-1.5 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10
                        focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500' />
                         <div className='relative '>
                          <input id="password" value={form.password} onChange={onChange}
                          type={showPassword ? "text" : "password"} name="password" 
                         required autoComplete="current-password" placeholder='Password' className='placeholder-gray-500 placeholder-opacity-75 h-12 w-[400px] bg-gray-200
                         rounded-sm px-3 py-1.5 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10
                         focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500' />
                         <button type='button'
                             onClick={()=>setShowPassword(!showPassword)} className=' absolute inset-y-0 hover:text-gray-700 right-3 justify-self-end flex items-center '>
                             {showPassword ? < AiOutlineEye className='text-gray-400' size={20} /> : <AiOutlineEyeInvisible className='text-gray-400' size={20} />}
                            </button>
                       </div>
                         <div className='relative '>
                          <input id="confirmPassword" value={form.confirmPassword} onChange={onChange}
                          type={showConfirmPassword ? "text" : "password"} name="confirmPassword" 
                          required autoComplete="new-password" placeholder='Confirm Password' className='placeholder-gray-500 placeholder-opacity-75 h-12 w-[400px] bg-gray-200
                          rounded-sm px-3 py-1.5 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10
                          focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500' />
                          <button type='button'
                              onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className=' absolute inset-y-0 hover:text-gray-700 right-3 justify-self-end flex items-center '>
                              {showConfirmPassword ? < AiOutlineEye className='text-gray-400' size={20} /> : <AiOutlineEyeInvisible className='text-gray-400' size={20} />}
                             </button>
                        </div>
                        <p className='text-xs font-medium text-end'>Forgot Password?</p>
                    </div>
                    <div className='mt-8'>
                        <button type="submit" disabled={loading} className={`text-white font-bold w-[400px] rounded-sm h-12 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </button>
                    </div>
                </form>
                    <div className='flex items-center justify-center gap-1.5 mt-4'>
                        <hr className=' w-20 border-gray-300' />
                        <span className='text-xs text-gray-400'>Or Sign Up With</span>
                        <hr className=' w-20 border-gray-300' />
                    </div>
                    
                </div>
                <div className='flex gap-4 mt-8 justify-center items-center '>
                    <button 
                        onClick={handleGoogleSignup}
                        className='border border-gray-200 w-[190px] h-12 rounded-sm flex gap-2 items-center justify-center font-bold hover:bg-gray-50 transition-colors'
                    >
                        <FcGoogle size={25} />Google
                    </button>
                    <button 
                        onClick={handleFacebookSignup}
                        className='border border-gray-200 w-[190px] h-12 rounded-sm flex gap-2 items-center justify-center font-bold hover:bg-gray-50 transition-colors'
                    >
                        <SiFacebook size={25} className='text-blue-600'/>Facebook
                    </button>
                </div>
                <div>
                    <p className='text-xs text-gray-400 text-center mt-4'>Already have an account? <span className='text-blue-600 underline'><NavLink to="/login">Login</NavLink></span></p>
                </div>

            </div>
        </div>
    )
}

export default SignUp;

