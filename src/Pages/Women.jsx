// src/components/MenShoes.jsx
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const Women = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const [justAddedId, setJustAddedId] = useState(null);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category/womens-shoes');
        if (!response.ok) {
          throw new Error('Failed to fetch men\'s shoes');
        }
        const data = await response.json();
        setShoes(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchShoes();
  }, []);

  if (loading) {
    return <div className="text-center text-lg mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">Error: {error}</div>;
  }

  return (
    <div className='mx-auto mt-12 p-4'>
        <h2 className="text-3xl text-blue-700 text-center font-bold mb-4 animate-fade-in mt-5">Women's wear</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {shoes.length > 0 ? (
          shoes.map((shoe) => (
            <div key={shoe.id} className="bg-white rounded-xl shadow-lg shadow-blue-400/50 overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img  src={shoe.thumbnail}  alt={shoe.title} className="w-full h-48 object-cover p-4" 
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{shoe.title}</h3>
                {/**buy button */}
                <div className='flex justify-between font-bold'>
                 <p className="text-gray-600 mt-1">&#8358;{shoe.price} </p>
                 <button
                   className={`px-3 py-1 rounded text-white cursor-pointer active:scale-95 transition ${justAddedId===shoe.id ? 'bg-green-600' : 'bg-blue-600'}`}
                   disabled={justAddedId===shoe.id}
                   onClick={() => {
                     addToCart(shoe);
                     toast.success('Added to cart');
                     setJustAddedId(shoe.id);
                     setTimeout(() => setJustAddedId(null), 1000);
                   }}
                 >
                   {justAddedId===shoe.id ? 'Added!' : 'Add'}
                 </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-8 col-span-full">No men's shoes found.</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Women;