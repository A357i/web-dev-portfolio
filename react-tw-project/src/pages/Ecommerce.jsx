import { useLocalStorage } from '@uidotdev/usehooks'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Ecommerce() {
  const { id } = useParams()
  const [product, setProduct] = useState()
  const [qty, setQty] = useState(1)
  const [cart, setCart] = useLocalStorage('cart', [])

  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then(response => setProduct(response.data))
    .catch(error => alert(error))
  }, [id])

  const handleAddToCart = event => {
    event.preventDefault()

    if (cart.length > 0 ){
      const productIsInCart = cart.filter(item => item.id == product.id).length > 0
      if(productIsInCart) {
        setCart([...cart.map(item => {
          if (item.id == product.id) {
            return {...item, qty: item.qty + qty}
          } else {
            return item
          }
        })])
      } else {
        setCart([...cart, {...product, qty: qty}])
      }
    } else {
      setCart([{...product, qty: qty}])
    }

    alert(`${product.title} was added to cart`)
    setQty(1)
  }

  return (
    <section className="my-12">
      <div className="container mx-auto">
        {
          product && <div className='grid grid-cols-2 gap-6'>
              <img src={product.image != null ? product.image : `https://i.sstatic.net/y9DpT.jpg`} className='h-[420px] w-[450px]' alt="" />
              <div className="">
                <h1 className='text-3xl font-bold'>{product.title}</h1>
                <p className="my-10">{product.description}</p>
                <p className="my-10">
                  ⭐{product.rating.rate}
                </p>
                <p className="text-2xl font-bold text-blue-800">
                  ${product.price}
                </p>
                <form onSubmit={handleAddToCart} className='w-[400px] flex gap-2 items-center mt-12'>
                      <input id="qty" name='qty' value={qty} onChange={e => setQty(parseInt(e.target.value))} type="number" className="block  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 w-[220px] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  <button type='submit' className="mt-2 px-8 py-2 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add to cart</button>
                </form>
              </div>
            </div>
        }
      </div>
    </section>
  )
}

export default Ecommerce