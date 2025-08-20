import React from 'react'

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4">
         <h2 className="text-3xl text-center font-bold mb-4 text-teal-500">About Us</h2>
        <div className='container py-2 mx-auto flex '>
            <div className='w-1/2 flex justify-center flex-col  px-16'>
            <p>Z&S footwear Lorem, ipsum.lorem5 Lorem ipsum dolor sit amet consectetur.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className='w-1/2 relative'>
            <img src="/public/shoe6.jpg" className='w-full relative z-10' alt="" />
            <div className='bg-teal-200 h-full w-full absolute top-6 -left-6'></div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs