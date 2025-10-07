import React, { useEffect, useMemo, useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'

const Checkout = () => {
  const { items, totals, clearCart } = useCart()
  const navigate = useNavigate()
  const { currentUser } = useAuth()

  useEffect(() => {
    if (!currentUser) {
      toast.error('Please log in to checkout')
      navigate('/login')
    }
  }, [currentUser, navigate])

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    payment: 'card',
  })

  const formatMoney = (v) => (typeof v === 'number' ? v : Number(v || 0)).toFixed(2)

  const shipping = useMemo(() => (items.length ? 1500 : 0), [items.length])
  const grandTotal = useMemo(() => totals.subtotal + shipping, [totals.subtotal, shipping])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!items.length) {
      toast.error('Your cart is empty')
      return
    }
    if (!form.name || !form.email || !form.address) {
      toast.error('Please complete required fields')
      return
    }
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: form,
          items,
          totals,
        })
      })
      if (!res.ok) throw new Error('Failed to place order')
      toast.success('Order placed!')
      clearCart()
      navigate('/')
    } catch (err) {
      toast.error('Could not place order')
    }
  }

  return (
    <section className='mt-20 container mx-auto px-4'>
      <h1 className='text-3xl font-bold mb-6'>Checkout</h1>

      <div className='grid lg:grid-cols-3 gap-6'>
        {/* Form */}
        <form onSubmit={handleSubmit} className='lg:col-span-2 space-y-4'>
          <div className='grid sm:grid-cols-2 gap-4'>
            <div>
              <label className='text-sm'>Full Name</label>
              <input name='name' value={form.name} onChange={handleChange} required className='mt-1 w-full border rounded px-3 h-10' />
            </div>
            <div>
              <label className='text-sm'>Email</label>
              <input type='email' name='email' value={form.email} onChange={handleChange} required className='mt-1 w-full border rounded px-3 h-10' />
            </div>
            <div>
              <label className='text-sm'>Phone</label>
              <input name='phone' value={form.phone} onChange={handleChange} className='mt-1 w-full border rounded px-3 h-10' />
            </div>
            <div>
              <label className='text-sm'>City</label>
              <input name='city' value={form.city} onChange={handleChange} className='mt-1 w-full border rounded px-3 h-10' />
            </div>
          </div>
          <div>
            <label className='text-sm'>Address</label>
            <input name='address' value={form.address} onChange={handleChange} required className='mt-1 w-full border rounded px-3 h-10' />
          </div>
          <div className='grid sm:grid-cols-2 gap-4'>
            <div>
              <label className='text-sm'>Country</label>
              <input name='country' value={form.country} onChange={handleChange} className='mt-1 w-full border rounded px-3 h-10' />
            </div>
            <div>
              <label className='text-sm'>Payment Method</label>
              <select name='payment' value={form.payment} onChange={handleChange} className='mt-1 w-full border rounded px-3 h-10'>
                <option value='card'>Card</option>
                <option value='transfer'>Bank Transfer</option>
                <option value='cod'>Cash on Delivery</option>
              </select>
            </div>
          </div>

          <div className='flex gap-3'>
            <button type='submit' className='bg-blue-600 text-white px-5 py-2 rounded'>Place Order</button>
            <Link to='/cart' className='border px-5 py-2 rounded'>Back to Cart</Link>
          </div>
        </form>

        {/* Summary */}
        <aside className='border rounded-xl p-4 h-fit'>
          <h2 className='text-xl font-bold mb-2'>Order Summary</h2>
          <div className='space-y-2 max-h-64 overflow-auto pr-2'>
            {items.map((it) => (
              <div key={it.id} className='flex justify-between text-sm text-gray-700'>
                <span className='truncate'>{it.title} × {it.quantity}</span>
                <span>₦{formatMoney(it.price * it.quantity)}</span>
              </div>
            ))}
          </div>
          <div className='mt-3 flex justify-between text-sm text-gray-700'>
            <span>Subtotal</span>
            <span>₦{formatMoney(totals.subtotal)}</span>
          </div>
          <div className='flex justify-between text-sm text-gray-700'>
            <span>Shipping</span>
            <span>₦{formatMoney(shipping)}</span>
          </div>
          <div className='flex justify-between text-lg font-semibold mt-2'>
            <span>Total</span>
            <span>₦{formatMoney(grandTotal)}</span>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Checkout


