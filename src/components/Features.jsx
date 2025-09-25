import React from 'react'

const Features = () => {
  
  return (
     <section className="container mx-auto p-4 mt-8 mb-12">
      <h2 className="text-3xl text-blue-700 text-center font-bold mb-4 animate-fade-in">Featured Footwear</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-transform duration-400 ">
        {/* Featured Footwear Items */}
        <div className="bg-white rounded shadow-md p-4 hover:scale-110">
          <img src="/public/shoe5.jpg" alt="Footwear" className="w-full h-64 object-cover mb-4 " />
          <h3 className="text-lg font-bold mb-2">Footwear Name</h3>
          <p className="text-gray-600">Footwear Description</p>
        </div>
        <div className="bg-white rounded shadow-md p-4 hover:scale-110">
          <img src="/public/shoe1.jpg" alt="Footwear" className="w-full h-64 object-cover mb-4 " />
          <h3 className="text-lg font-bold mb-2">Footwear Name</h3>
          <p className="text-gray-600">Footwear Description</p>
        </div>
        <div className="bg-white rounded shadow-md p-4 hover:scale-110">
          <img src="/public/shoe6.jpg" alt="Footwear" className="w-full h-64 object-cover mb-4 " />
          <h3 className="text-lg font-bold mb-2">Footwear Name</h3>
          <p className="text-gray-600">Footwear Description</p>
        </div>
           </div>
    </section>

  )
}
export default Features