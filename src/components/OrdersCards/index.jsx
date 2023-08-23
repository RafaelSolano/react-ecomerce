import { HiCalendarDays,HiOutlineShoppingBag, HiChevronRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const OrdersCard = (props) => {
  const { id, totalPrice, totalProducts, date } = props;

  return (
    <Link to={`/my-orders/${id}`}>
      <div className=' hover:text-gray-600 flex justify-between items-center rounded-lg p-4 mb-3 border border-black w-80 '>
        <p className='flex flex-col'>
          
          <p className='flex items-center gap-0'>
            <HiCalendarDays className='w-6 h-6'/>
            <span>{date}</span>
          </p>
          <p className='flex items-center gap-0'>
          <HiOutlineShoppingBag className='w-6 h-6'/>

          <span>{totalProducts} articles</span>
          </p>
        </p>
        <p className='flex gap-1 items-center'>
          <span className='text-xl font-bold'>${totalPrice}</span>
          <HiChevronRight className='w-8 h-8' />
        </p>
      </div>
    </Link>
  );
};

export default OrdersCard;
