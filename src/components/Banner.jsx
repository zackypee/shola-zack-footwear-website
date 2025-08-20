import React, { useState, useEffect } from 'react';

function Banner() {
  const newArrival = [
    { url: "/shoe1.jpg" },
    { url: "/shoe2.jpg" },
    { url: "/shoe6.jpg" },
    { url: "/shoe4.jpg" }
  ];

  const [currentState, setCurrentState] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState(prev =>
        prev === newArrival.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className='w-screen'>
      <div
        style={{ backgroundImage: `url(${newArrival[currentState].url})` }}
        className='relative w-screen h-[500px] bg-cover bg-center mx-auto rounded transition-all duration-700'
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white z-10'>
          <h1 className='text-4xl font-bold mb-4'>New Arrivals</h1>
          <button className='px-6 py-3 bg-amber-500 text-black rounded-lg'>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
