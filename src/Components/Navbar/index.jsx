import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
const Navbar = () => {
  const activeStyle = 'underline underline-offset-4 text-lg font-semibold text-red-400 bg-red-50 p-2 rounded-md'
  const context = useContext(ShoppingCartContext);
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light  '>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            La Calle
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick ={ () => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick ={ () => context.setSearchByCategory('clothes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Ropa
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick ={ () => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electrónica
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            onClick ={ () => context.setSearchByCategory('furnitures')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Muebles
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick ={ () => context.setSearchByCategory('toys')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Juguetes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick ={ () => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Otros
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          teff@platzi.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sing-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Sign In
          </NavLink>
        </li>
        <li onClick={(context.isCheckoutSideMenuOpen)?context.closeCheckoutSideMenu:context.openCheckoutSideMenu} className=' text-red-400 flex items-center cursor-pointer'>
          <ShoppingBagIcon className="h-6 w-6 text-black-500"/> 
          <div className=' text-lg'>{context.count}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar