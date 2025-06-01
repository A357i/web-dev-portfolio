import React, {useEffect, useState} from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import { useNavigate } from 'react-router'

function Emails() {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false)
  const [loggedInUser, setLoggedInUser] = useLocalStorage('loggedInUser', {})
  const [orders, setOrders] = useLocalStorage('orders', [])
  const [myOrders, setMyOrders] = useState([])
  const [orderyBy ,setSortBy] = useState()

  const navigate = useNavigate

  useEffect(() => {
    if(!isLoggedIn) navigate('/login')
  
      if(loggedInUser.email === 'admin@admin.com') {
        setMyOrders(orders)
      } else {
        setMyOrders(orders.filter(order => order.customer.email == loggedInUser.email))
      }
  
    }, [])

    const handleSort = event => {
        const order = event.target.value

          switch (order) {
              case 'date_asc':
                  orders.sort((a, b) => new Date(a.delivery_date) - new Date(b.delivery_date))
                  setMyOrders(orders)
                  break
              case 'date_desc':
                  orders.sort((a, b) => new Date(b.delivery_date) - new Date(a.delivery_date))
                  setMyOrders(orders)
                  break
          }
      }

  return (
    <section className="my-12">
      <div className="container mx-auto">
        {
          myOrders.length > 0 && <select onChange={handleSort} className='border border-gray-300 px-3 py-1 mb-10'>
            <option value="">Sort by</option>
            <option value="date_asc">Date &uarr;</option>
            <option value="date_desc">Date &darr;</option>
          </select>
        }
        {
          myOrders.length > 0 ? <table className='w-full'>
            <tbody>
              {
                myOrders.map((order, index) => <tr key={index}>
                                  <td className='border border-gray-200 px-4 py-2'>
                                    {order.customer?.fullname}
                                    <br />
                                    {order.customer?.email}
                                    {
                                      Object.keys(order.customer).length === 0 && 'Guest checkout'
                                    }
                                  </td>
                                  <td className='border border-gray-200 px-4 py-2'>
                                    {order.delivery_address}
                                  </td>
                                  <td className='border border-gray-200 px-4 py-2'>
                                    Date: {order.delivery_date}
                                    <br />
                                    Time: {order.delivery_time}
                                  </td>
                                  <td className='border border-gray-200 px-4 py-2'>
                                  {
                                    order.items.length > 0 ? <table className='w-full'>
                                      <tbody>
                                        {
                                          order.items.map(item => <tr key={item.id}>
                                                            <td className='border border-gray-200 px-4 py-2'>{item.title}</td>
                                                            <td className='border border-gray-200 px-4 py-2'>{item?.price}</td>
                                                            <td className='border border-gray-200 px-4 py-2 flex gap-3 items-center'>
                                                            {item.qty} pcs</td>
                                                            <td className='border text-right border-gray-200 px-4 py-2'>${(item.qty * item.price).toFixed(2)}</td>
                                          </tr>)
                                        }
                                        <tr>
                                          <td colSpan={3}></td>
                                          <td className='border text-right border-gray-200 px-4 py-2 text-md font-semibold'>
                                            ${order.items.reduce((sum, item) => sum + (item.qty * item.price), 0.00).toFixed(2)}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table> : <p>0 items!</p>
                                  }
                                  </td>
                                  
                </tr>)
              }
            </tbody>
          </table> : <p>0 orders</p>
        }
      </div>
    </section>
  )
}

export default Emails