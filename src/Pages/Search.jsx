import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import toast from 'react-hot-toast'

const Search = () => {
  const { addToCart } = useCart()
  const [params, setParams] = useSearchParams()
  const initialQ = params.get('q') || ''
  const [query, setQuery] = useState(initialQ)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [results, setResults] = useState([])

  const canSearch = useMemo(() => query.trim().length > 0, [query])

  const performSearch = async (q) => {
    if (!q) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`)
      if (!res.ok) throw new Error('Search failed')
      const data = await res.json()
      setResults(data.products || [])
    } catch (e) {
      setError('Could not load results')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (initialQ) performSearch(initialQ)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    setParams({ q: query })
    performSearch(query)
  }

  return (
    <section className='mt-20 container mx-auto px-4'>
      <h1 className='text-2xl font-bold mb-4'>Search Products</h1>
      <form onSubmit={onSubmit} className='flex gap-2'>
        <input
          value={query}
          onChange={(e)=> setQuery(e.target.value)}
          placeholder='Search for shoes...'
          className='w-full border rounded px-3 h-10'
        />
        <button disabled={!canSearch || loading} className='bg-blue-600 text-white px-4 rounded h-10'>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <div className='mt-4 text-red-600 text-sm'>{error}</div>}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
        {results.map((p) => (
          <div key={p.id} className='bg-white rounded-xl shadow overflow-hidden transform hover:scale-105 transition-transform duration-300'>
            <img src={p.thumbnail} alt={p.title} className='w-full h-48 object-cover p-4' />
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800 truncate'>{p.title}</h3>
              <div className='flex justify-between items-center mt-2'>
                <p className='text-gray-700 font-medium'>₦{p.price}</p>
                <button
                  className='px-3 py-1 rounded bg-blue-600 text-white active:scale-95'
                  onClick={() => { addToCart(p); toast.success('Added to cart') }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Search


