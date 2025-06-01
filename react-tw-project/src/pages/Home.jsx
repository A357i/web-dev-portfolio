import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import Ecommerce from '../components/Ecommerce'
import axios from 'axios'

function Home() {
  const [products, setProducts] = useState()

  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products`)
    .then(response => setProducts(response.data.slice(0, 8)))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      <Slider />

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className='text-2xl font-bold text-blue-900 text-center mb-10'>Latest Products</h2>
            <div className="grid grid-cols-4 gap-6 mt-12 mb-24">
              {
                products && products.map(product => <Ecommerce {...product} key={product.id} />)
              }
            </div>
            <div className="flex justify-center">
              <button class="px-6 py-2 font-medium tracking-wide text-blue-800 capitalize transition-colors duration-300 transform border-2 border-blue-800 rounded-lg hover:bg-blue-50 hover:cursor-pointer focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  Explore &rarr;
              </button>
            </div>
        </div>
      </section>

    </>
  )
}

export default Home