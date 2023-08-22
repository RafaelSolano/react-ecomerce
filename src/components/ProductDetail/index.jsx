import { HiXMark } from 'react-icons/hi2';

import './styles.css';
import { ShoppingCartContex } from '../../context';
import { useContext } from 'react';

const ProductDetail = () => {
  const {
    isProductDetailopen,
    
    closeProductDetail,
    productToShow: { title, image, description, price },
  } = useContext(ShoppingCartContex);

  return (
    <aside
      className={`${isProductDetailopen ? 'flex' : 'hidden'}
      product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white p-5 overflow-x-scroll`}>
      <div className=' flex justify-between items-center '>
        <h2 className=' font-medium text-xl'>Detail</h2>
        <HiXMark
          onClick={() => closeProductDetail()}
          className='cursor-pointer h-6 w-6 hover:text-slate-600 fixed right-10'
        />
      </div>

      <div>
        <figure>
          <img className=' w-full h-full rounded-lg ' src={image} alt={title} />
        </figure>
        <p className='py-4'>
          <p className='font-semibold text-lg mb-2'> Precio: ${price}</p>
          <h3 className='font-semibold mb-2'>{title} </h3>
          <p className='font-light text-md'>{description}</p>
        </p>
      </div>
    </aside>
  );
};

export default ProductDetail;
