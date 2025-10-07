import React from 'react'
import Footer from '../components/Footer'


const About = () => {
  return (
    <section>
       <div className='aboutus mt-20 mx-4 lg:grid lg:grid-cols-2 gap-5'>
        <div className=''>
          <h3 className='underline decoration-2 decoration-blue-500'>Our Story</h3>
          <p className='text-sm font-bold'><strong>Z&S </strong>Your Vision Our Expertise Your Success Get Notice <span className='text-blue-400'>Lead Domain.</span></p>

          <img className='mb-5' src="/about-us-page.jpg" alt="" />
          </div>
          {/**aboutus-content 2 */}
          <div className='mt-11'>
            <div className='flex w-50 h-45 lg:w-70 lg:h-50 gap-9 mb-10 ' >
              <img className='rounded-t-xl sm:w-50 lg:w-70' src="/shoe1.jpg" alt="" />
            <img className='rounded-t-xl '  src="/shoe2.jpg" alt="" />
            </div>
            {/**about us text */}
            <div>
              <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eligendi velit reiciendis nostrum, optio iste libero quaerat assumenda voluptates est corrupti culpa facere aliquid, accusantium officiis placeat. In, sed est.</p>
{/**like start........................... */}
              <div className='like flex justify-between'>
                <div>
                <h3 className='font-bold text-2xl'>10K+</h3>
                <p>Qualities </p>
                </div>
                <div>
                <h3 className='font-bold text-2xl'>15K+</h3>
                <p>Satisfied </p>
                </div>
                <div>
                <h3 className='font-bold text-2xl'>19K+</h3>
                <p>Light-Weight </p>
                </div>
                <div>
                <h3 className='font-bold text-2xl'>50Y+</h3>
                <p>Lasting </p>
                </div>
                
              </div>
            </div>
            
          </div>
      {/**about us text edddddddddddddd */}
       </div>

      <div>
      <Footer/>
     </div>

    </section>

  )
}

export default About;