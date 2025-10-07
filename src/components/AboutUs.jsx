import React from 'react'

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-6 mb-12">
         <h2 className="text-3xl text-center font-bold mb-4 text-blue-700">About Us</h2>
        <div className='py-2 mx-auto flex flex-col md:flex-row gap-6 md:gap-8'>
            <div className='md:w-1/2 w-full flex justify-center flex-col px-0 md:px-10'>
            <p className='text-gray-700'>Z&S footwear Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Add pricing elite.</p>
            </div>
            <div className='md:w-1/2 w-full relative'>
            <img src="/shoe6.jpg" className='w-full relative z-10 rounded-2xl' alt="About Z&S" />
            <div className='hidden md:block bg-blue-400/60 h-full w-full absolute top-6 -left-6 rounded-2xl'></div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs