import React, { useEffect } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import { useNavigate } from 'react-router'

function Cart() {
  const [cart, setCart] = useLocalStorage('cart', [])
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false)
  const [loggedInUser, setLoggedInUser] = useLocalStorage('loggedInUser', {})
  const [orders, setOrders] = useLocalStorage('orders', [])

  const navigate = useNavigate()

  useEffect(() => {
    setCart([...cart.filter(item => Object.keys(item).length !== 0)])
  }, [])

  useEffect(() => {
    setCart([...cart.filter(item => Object.keys(item).length !== 0)])
  }, [cart])

  const handleQtyDec = event => {
    const product_id = event.target.getAttribute('product-id')

    setCart([...cart.map(item => {
      if(item.id == product_id) {
        if(item.qty > 1) {
          return {...item, qty: item.qty - 1}
        } else {
          return {}
        }
      } else {
        return {...item}
      }
    })])
  }

  const handleQtyInc = event => {
    const product_id = event.target.getAttribute('product-id')

    setCart([...cart.map(item => {
      if(item.id == product_id) {
        return {...item, qty: item.qty+1}
      } else {
        return {...item}
      }
    })])
  }

  const handleCheckout = event => {
    event.preventDefault()
    const data = event.target.elements 
    
    const order = {
      customer: loggedInUser,
      delivery_address: data.adress.value,
      delivery_date: data.date.value,
      delivery_time: data.time.value,
      items: cart
    }

    if(orders.length > 0) {
      setOrders([...orders , order])
    } else {
      setOrders([order])
    }
    setCart([])
    alert('Order was completed successfully')
    navigate('/dashboard')
  }
  
  return (
    <section className="py-12">
      <div className="container mx-auto">
        {
          cart.length > 0 ? <table className='w-full'>
            <tbody>
              {
                cart.map(item => <tr key={item.id}>
                                  <td className='border border-gray-200 px-4 py-2'>{item.title}</td>
                                  <td className='border border-gray-200 px-4 py-2'>{item?.price}</td>
                                  <td className='border border-gray-200 px-4 py-2 flex gap-3 items-center'>
                                    <button onClick={handleQtyDec} product-id={item.id} className='border border-gray-300 text-gray-600 rounded-md px-2'>-</button>
                                    <p>{item.qty} pcs</p>
                                    <button onClick={handleQtyInc} product-id={item.id} className='border border-gray-300 text-gray-600 rounded-md px-2'>+</button>
                                    </td>
                                  <td className='border text-right border-gray-200 px-4 py-2'>${(item.qty * item.price).toFixed(2)}</td>
                </tr>)
              }
              <tr>
                <td colSpan={3}></td>
                <td className='border text-right border-gray-200 px-4 py-2 text-2xl font-semibold'>
                  ${cart.reduce((sum, item) => sum + (item.qty * item.price), 0.00).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table> : <p>Cart is empty!</p>
        }
        {
          (cart.length > 0 && isLoggedIn) && <form method='POST' onSubmit={handleCheckout} className='w-1/2 mt-12'>

        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div className='col-span-2'>
                <label className="text-gray-700 dark:text-gray-200" for="adress">Adress</label>
                <textarea id="adress" name='adress' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" for="date">Date</label>
                <input id="date" type="date" name='date' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" for="time">Time</label>
                <input id="time" type="time" name='time' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Checkout</button>
        </div>

          </form>
        }
      </div>
    </section>
  )
}

export default Cart