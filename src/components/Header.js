import { Link, NavLink } from 'react-router-dom';
import Logo from '../asset/logo.png';
import { useSelector } from 'react-redux';

export const Header = () => {

const products = useSelector(state => state.cartState.cartList); // Use the custom hook to access the cart context

const activeClass = "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";

const inactiveClass = "block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"

  return (
   <header>
  <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b-4">
    <div className="max-w-screen-xl mx-auto p-4">
      {/* Top section: Logo and Cart */}
      <div className="flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-12" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Redux-Shop</span>
        </Link>
        <div className="mt-4 md:mt-0">
          <p className="text-black dark:text-white">CartItems: {products.length}</p>
        </div>
      </div>

      {/* Bottom section: NavLinks */}
      <div className="flex justify-center mt-4">
        <ul className="flex flex-row flex-wrap justify-center gap-4">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inactiveClass)} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

  )
}
