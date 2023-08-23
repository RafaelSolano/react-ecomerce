import { useContext } from 'react'
import OrderCard from '../../components/OrderCard'
import Layout from '../../components/layout'
import { ShoppingCartContex } from '../../context'

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContex)
  console.log(order.products);
  return (
    <Layout>
      <div>MyOrder</div>
      
      <div className=' mt-6 mb-24'>
        {order?.slice(-1)[0].products.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  )
}

export default MyOrder