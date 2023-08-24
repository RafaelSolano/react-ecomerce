import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { HiShoppingBag } from "react-icons/hi";
import { ShoppingCartContex } from '../../context';

// eslint-disable-next-line react/prop-types
const NavBar = () => {
  const activeStyle = 'underline underline-offset-4';

  const { count, searchBar, setSearchBar,openCheckoutSideMenu } = useContext(ShoppingCartContex)
  const handledClickMenu = () => {
    console.log('searchBar:', searchBar);
    setSearchBar('')

}
  

  return (
    <nav className='  flex flex-row justify-between py-2 px-4 font-light text-sm fixed z-10 bg-white w-full '>
      <ul className='flex items-center flex-row gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            onClick={()=>handledClickMenu()}
            to={'/'}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={()=>handledClickMenu()}
            
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/'}>
            All
          </NavLink>
        </li>
        <li>
        
          <NavLink
            onClick={()=>handledClickMenu()}
            
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/mens'}>
            Mens
          </NavLink>
         
        </li>
        <li>
          <NavLink
            onClick={()=>handledClickMenu()}
            
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/womens'}>
            Womens
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={()=>handledClickMenu()}
            
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/electronics'}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={()=>handledClickMenu()}
            
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/jewelery'}>
            Jewelery
          </NavLink>
        </li>
        
      </ul>

      <ul className='flex flex-row gap-3'>
        <li className='text-black/50'>
          <NavLink
            to={'/'}>
            rafael@googl.com
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={()=>handledClickMenu()}
            
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/my-orders'}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={()=>handledClickMenu()}
            
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/my-account'}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={()=>handledClickMenu()}
            
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/sign-in'}>
            signin
          </NavLink>
        </li>
        <li >
          <NavLink
            onClick={()=> openCheckoutSideMenu()}
            
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
            <div className='flex justify-center items-center '>
            <HiShoppingBag className='h-6 w-6' />
            <div className='font-semibold'>{count}</div>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
