import { Link } from 'react-router-dom';

const OrdersCard = (props) => {
  const { id, totalPrice, totalProducts, date } = props;

  return (
    <div className='flex justify-between items-center mb-3 border border-black w-96 h-14'>
      <Link to={`/my-ordersc/${id}`} >
        <p className='flex flex-col'>
          <span>{date}</span>
          <span>Total Products: { totalProducts }</span>
          <span>Total Price: { totalPrice }</span>
        </p>
    
      </Link>
      
    </div>
  )
}

export default OrdersCard