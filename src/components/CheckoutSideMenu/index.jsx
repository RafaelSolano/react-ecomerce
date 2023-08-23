import { HiXMark } from 'react-icons/hi2';


import './styles.css';
import { ShoppingCartContex } from '../../context';
import { useContext } from 'react';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';
import {  NavLink } from 'react-router-dom';

const CheckoutSideMenu = () => {
  
  const { cartProducts, setCartProducts, isCheckoutSideMenuopen, closeCheckoutSideMenu,setOrder,order } =
    useContext(ShoppingCartContex);
  
  const handleDelete = (id) => {
    const filterproducts = cartProducts.filter(product => product.id != id)
    setCartProducts(filterproducts)
    
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date,
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }
    setOrder([...order, orderToAdd])
    setCartProducts([])
    closeCheckoutSideMenu()
  }
  return (
    <aside
      className={`${
        isCheckoutSideMenuopen ? 'flex' : 'hidden'
      } product-detail flex flex-col fixed right-0 border border-black rounded-lg  bg-white  z-10 `}>
      <div className=' flex justify-between items-center fixed w-full bg-white rounded-lg p-2 '>
        <h2 className=' font-medium text-xl'>My order</h2>
        <HiXMark
          onClick={() => closeCheckoutSideMenu()}
          className='cursor-pointer h-6 w-6 hover:text-slate-600 fixed right-10'
        />
      </div>
      <div className=' mt-6 mb-24 p-4 overflow-y-scroll'>
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
      <footer className='w-96  fixed bottom-0 p-4 bg-white ' >

        <p className=' flex justify-between pr-8'>
          <span className='font-light text-2xl '>Total: </span>
          <span className='font-bold text-2xl'>${totalPrice(cartProducts).toFixed(2)}</span></p>
        <NavLink to='/my-orders/last'>
        <button
          onClick={() => { handleCheckout() }}
          className=' w-80 text-xl font-semibold rounded-lg bg-black text-white p-2 hover:bg-gray-900 '>
          Checkout
        </button>
      </NavLink>
      </footer>
    </aside>
  );
};

export default CheckoutSideMenu;
