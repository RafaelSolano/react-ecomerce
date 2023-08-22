import { HiXMark } from 'react-icons/hi2';

const OrderCard = (props) => {

  const { id, title, image, price, handleDelete} = props;
  return (
    <div className='flex justify-between items-center my-4 '>
      <figure className='w-20 h-20 ' >
        <img className='w-full h-full rounded-lg object-contain' src={image} alt={title} />
        
      </figure  >
        <p className='text-sm font-light'>{title}</p>
    
      
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        <p>
          <HiXMark
            onClick={()=>handleDelete(id)}
            className='h-6 w-6 text-black cursor-pointer' />
        </p>
      </div>

    </div>
  )
}

export default OrderCard