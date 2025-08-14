import React from 'react'

const Trending = () => {
  return (

    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-teal-500">Trending Footwear</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow-md p-4">
          <img src="/public/shoe2.jpg" alt="Sneaker" className="w-full h-64 object-cover mb-4" />
          <h3 className="text-lg font-bold mb-2">High-Top Sneakers</h3>
          <p className="text-gray-600">Add a youthful and urban edge to your outfit with our high-top sneakers.</p>
        </div>
        {/* More footwear items */}
        <div className="bg-white rounded shadow-md p-4">
          <img src="/public/shoe4.jpg" alt="Sneaker" className="w-full h-64 object-cover mb-4" />
          <h3 className="text-lg font-bold mb-2">High-Top Sneakers</h3>
          <p className="text-gray-600">Add a youthful and urban edge to your outfit with our high-top sneakers.</p>
        </div>
          {/* More footwear items */}
        <div className="bg-white rounded shadow-md p-4">
          <img src="/public/shoe6.jpg" alt="Sneaker" className="w-full h-64 object-cover mb-4" />
          <h3 className="text-lg font-bold mb-2">High-Top Sneakers</h3>
          <p className="text-gray-600">Add a youthful and urban edge to your outfit with our high-top sneakers.</p>
        </div>
        
      </div>
    </div>

  )
}

export default Trending