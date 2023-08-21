import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className='  flex flex-row justify-between py-2 px-4 font-light text-sm   '>
      <ul className='flex items-center flex-row gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to={'/'}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/'}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/Clothes'}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/electronics'}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/furnitures'}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/toys'}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/others'}>
            Others
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
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/my-orders'}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/my-account'}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/sign-in'}>
            signin
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={'/my-order'}>
            🛒0
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
