
import { HiXMark } from 'react-icons/hi2';

import './styles.css';
import { ShoppingCartContex } from '../../context';
import { useContext } from 'react';

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuopen,
    closeCheckoutSideMenu,
    productToShow: { title, image, description, price },
  } = useContext(ShoppingCartContex);

  return (
    <aside
      className={`${
        isCheckoutSideMenuopen ? 'flex' : 'hidden'
      } product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white p-5 overflow-x-scroll`}>
      <div className=' flex justify-between items-center '>
        <h2 className=' font-medium text-xl'>My order</h2>
        <HiXMark
          onClick={() => closeCheckoutSideMenu()}
          className='cursor-pointer h-6 w-6 hover:text-slate-600 fixed right-10'
        />
      </div>


    </aside>
  );
};

export default CheckoutSideMenu;
