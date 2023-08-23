
import { useContext } from 'react'
import OrdersCard from '../../components/OrdersCards'
import Layout from '../../components/layout'
import { ShoppingCartContex } from '../../context'

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContex)
  console.log(order);
 
  return (
    <Layout>
      <div className='flex  items-center  w - 8'>
        <h1>My Orders</h1>
      </div>
      {
        order.map((order, index) => (
          <OrdersCard
            key={order.products.id}
            date={'12/034/44'}
            id={index}
            totalPrice={order.totalPrice }
            totalProducts={order.totalProducts}
          />

  
        ))
      }
    </Layout>
  )
}

export default MyOrders