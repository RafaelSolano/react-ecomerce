import { HiXMark } from 'react-icons/hi2';


import './styles.css';
import { ShoppingCartContex } from '../../context';
import { useContext } from 'react';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
  const { cartProducts, setCartProducts, isCheckoutSideMenuopen, closeCheckoutSideMenu } =
    useContext(ShoppingCartContex);
  
  const handleDelete = (id) => {
    const filterproducts = cartProducts.filter(product => product.id != id)
    setCartProducts(filterproducts)
    
  }
  return (
    <aside
      className={`${
        isCheckoutSideMenuopen ? 'flex' : 'hidden'
      } product-detail flex flex-col fixed right-0 border border-black rounded-lg  bg-white  z-10 overflow-y-scroll`}>
      <div className=' flex justify-between items-center fixed w-full bg-white rounded-lg p-2 '>
        <h2 className=' font-medium text-xl'>My order</h2>
        <HiXMark
          onClick={() => closeCheckoutSideMenu()}
          className='cursor-pointer h-6 w-6 hover:text-slate-600 fixed right-10'
        />
      </div>
      <div className='mt-10 p-4 '>
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
