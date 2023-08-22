import { HiXMark } from 'react-icons/hi2';

import './styles.css';
import { ShoppingCartContex } from '../../context';
import { useContext } from 'react';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
  const { cartProducts, isCheckoutSideMenuopen, closeCheckoutSideMenu } =
    useContext(ShoppingCartContex);

  return (
    <aside
      className={`${
        isCheckoutSideMenuopen ? 'flex' : 'hidden'
      } product-detail flex flex-col fixed right-0 border border-black rounded-lg  bg-white  overflow-x-scroll z-10 `}>
      <div className=' flex justify-between items-center fixed w-full bg-white rounded-lg p-2 '>
        <h2 className=' font-medium text-xl'>My order</h2>
        <HiXMark
          onClick={() => closeCheckoutSideMenu()}
          className='cursor-pointer h-6 w-6 hover:text-slate-600 fixed right-10'
        />
      </div>
      <div className='mt-10 p-4'>
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
