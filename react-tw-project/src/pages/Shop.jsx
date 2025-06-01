import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import Card from '../components/Card'
import axios from 'axios'
import { Link } from 'react-router'

function Shop() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)



  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products`)
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  }, [page])

    const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
    )
    const itemsPerPage = 8
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentProducts = filteredProducts.slice(startIndex, endIndex)
    const handlePrev = () => {
      setPage(prev => Math.max(prev - 1, 1))
    }
    const handleNext = () => {
      setPage(prev => Math.min(prev + 1, totalPages))
    }

  return (
    
    <section className="py-12">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <div className='flex items-center gap-4'>
            <input id="search" value={search} type="search" class="w-[380px] block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Search Trendify" onChange={event => {setSearch(event.target.value); setPage(1)}} />
            <Link to="/shop" reloadDocument className='underline' >Clear search</Link>
          </div>
          <div className='flex items-center gap-4' >
            <button onClick={handlePrev} disabled={page === 1} className='px-2 py-1 border border-gray-100 rounded-md hover:border-gray-300 hover:cursor-pointer'>&larr;</button>
            <span>{page}</span>
            <button onClick={handleNext} disabled={page === totalPages} className='px-2 py-1 border border-gray-100 rounded-md hover:border-gray-300 hover:cursor-pointer'>&rarr;</button>
          </div>
        </div>
          <div className="grid grid-cols-3 gap-6 mt-12 mb-24 ">
            {currentProducts.map(product => (
            <Card {...product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop