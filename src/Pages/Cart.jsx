import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Footer from '../components/Footer'

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totals } = useCart()

  const formatMoney = (value) => {
    const num = typeof value === 'number' ? value : Number(value || 0)
    return num.toFixed(2)
  }

  return (
    <section className='mt-20 container mx-auto px-4'>
      <h1 className='text-3xl font-bold mb-6'>Your Cart</h1>

      {items.length === 0 ? (
        <div className='text-gray-600'>Your cart is empty.</div>
      ) : (
        <div className='grid lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2 space-y-4'>
            {items.map((item) => (
              <div key={item.id} className='flex items-center gap-4 border rounded-xl p-4'>
                <img src={item.thumbnail} alt={item.title} className='w-20 h-20 object-cover rounded' />
                <div className='flex-1'>
                  <h3 className='font-semibold'>{item.title}</h3>
                  <p className='text-sm text-gray-500'>₦{formatMoney(item.price)}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <button className='px-2 py-1 border rounded' onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span className='w-8 text-center'>{item.quantity}</span>
                  <button className='px-2 py-1 border rounded' onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <div className='w-20 text-right font-semibold'>₦{formatMoney(item.price * item.quantity)}</div>
                <button className='ml-2 text-red-600' onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          <aside className='border rounded-xl p-4 h-fit'>
            <h2 className='text-xl font-bold mb-2'>Summary</h2>
            <div className='flex justify-between text-sm text-gray-700'>
              <span>Items</span>
              <span>{totals.count}</span>
            </div>
            <div className='flex justify-between text-lg font-semibold mt-2'>
              <span>Subtotal</span>
              <span>₦{formatMoney(totals.subtotal)}</span>
            </div>
            <Link to='/checkout' className='w-full mt-4 bg-blue-600 text-white py-2 rounded text-center block'>Checkout</Link>
            <button className='w-full mt-2 border py-2 rounded' onClick={clearCart}>Clear Cart</button>
          </aside>
        </div>
      )}

      <div className='mt-12'>
        <Footer />
      </div>
    </section>
  )
}

export default Cart


