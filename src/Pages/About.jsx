import React from 'react'
import Footer from '../components/Footer'


const About = () => {
  return (
    <section className='mt-20'>
      {/* Hero */}
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-8 items-center'>
          <div>
            <h1 className='text-3xl md:text-4xl font-bold'>About Z&S Footwear</h1>
            <p className='mt-3 text-gray-600'>
              Your vision, our expertise. We design durable, lightweight and stylish footwear
              so you can look great and feel even better every day.
            </p>
            <div className='mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4'>
              <div className='rounded-xl border p-4 text-center'>
                <h3 className='text-2xl font-bold'>10K+</h3>
                <p className='text-xs text-gray-500'>Pairs Crafted</p>
              </div>
              <div className='rounded-xl border p-4 text-center'>
                <h3 className='text-2xl font-bold'>15K+</h3>
                <p className='text-xs text-gray-500'>Happy Customers</p>
              </div>
              <div className='rounded-xl border p-4 text-center'>
                <h3 className='text-2xl font-bold'>19K+</h3>
                <p className='text-xs text-gray-500'>Lightweight Steps</p>
              </div>
              <div className='rounded-xl border p-4 text-center'>
                <h3 className='text-2xl font-bold'>50Y+</h3>
                <p className='text-xs text-gray-500'>Combined Experience</p>
              </div>
            </div>
          </div>

          <div className='relative'>
            <div className='absolute -inset-4 md:-inset-6 rounded-3xl bg-blue-200/40'></div>
            <img className='relative rounded-3xl w-full shadow-md' src="/about-us-page.jpg" alt="Workers crafting premium footwear" />
          </div>
        </div>

        {/* Story */}
        <div className='mt-14 grid lg:grid-cols-2 gap-8 items-start'>
          <div>
            <h2 className='text-xl font-bold underline decoration-2 decoration-blue-500'>Our Story</h2>
            <p className='mt-3 text-gray-700'>
              Started with a simple idea: make high-quality shoes that last. Today, Z&S blends
              modern design with reliable materials to deliver footwear that keeps up with
              your lifestyle.
            </p>
            <p className='mt-3 text-gray-700'>
              From everyday sneakers to performance-ready silhouettes, our collection is built
              around comfort, durability, and timeless style.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <img className='rounded-xl w-full h-full object-cover' src="/shoe1.jpg" alt="Men's sneaker in blue" />
            <img className='rounded-xl w-full h-full object-cover' src="/shoe2.jpg" alt="Women's sneaker in white" />
          </div>
        </div>
      </div>

      <div className='mt-12'>
        <Footer/>
      </div>
    </section>

  )
}

export default About;