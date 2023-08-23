import { IoChevronBackSharp } from 'react-icons/io5';

import { useContext } from 'react'
import OrderCard from '../../components/OrderCard'
import Layout from '../../components/layout'
import { ShoppingCartContex } from '../../context'
import { Link, useParams } from 'react-router-dom';


const MyOrder = () => {
  const { order } = useContext(ShoppingCartContex)
  console.log(order.products);

  const params = useParams();
  const pathName = window.location.pathname


  return (
    <Layout>
      <div className='flex  items-center  w-32 justify-between'>
        <Link to='/my-orders'>
          <IoChevronBackSharp className=' h-6 w-6 text-xl cursor-pointer '/>
        </Link>

        <h1>MyOrder</h1>
      </div>
      
      <div className=' mt-6 mb-24'>
        {order?.slice((pathName ==='/my-orders/last')?-1:params.id)[0].products.map(product => (
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