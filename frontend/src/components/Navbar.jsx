import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";

import avatarImg from "../assets/avatar.png"
import { useState } from "react";
import { useSelector } from "react-redux";


const navigation = [
    {name: "Dashboard", href:"/user-dashboard"},
    {name: "Orders", href:"/orders"},
    {name: "Cart Page", href:"/cart"},
    {name: "Check Out", href:"/checkout"},
]

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems);
   
    const CurrentUser = false;

    const token = localStorage.getItem('token');
  
    return (
      <header className="max-w-screen-2xl mx-auto px-4 py-6 sticky top-0 bg-white/95 backdrop-blur-md z-50 shadow-md transition-all duration-300">
        <nav className="flex justify-between items-center">
          {/* left side */}
          <div className="flex items-center md:gap-16 gap-6">
            <Link to="/" className="transform hover:scale-110 transition duration-300">
              <HiMiniBars3CenterLeft className="size-6 text-gray-800 hover:text-primary transition-colors duration-300" />
            </Link>

            {/* search input */}
            <div className="relative sm:w-72 w-40 group transition-all duration-300">
              <IoSearchOutline className="absolute left-3 top-2.5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search here"
                className="bg-gray-100 w-full py-2 md:px-10 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 hover:bg-gray-200 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>

          {/* right side */}
          <div className="flex items-center gap-6 relative">
            <div>
              {CurrentUser ? (
                <>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="relative transition-transform duration-300 hover:scale-110"
                  >
                    <img
                      src={avatarImg}
                      alt="User Avatar"
                      className={`size-8 rounded-full shadow-md transition-all duration-300 ${
                        CurrentUser ? "border-2 border-primary ring-2 ring-primary/30" : ""
                      }`}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-12 right-0 bg-white shadow-lg p-4 rounded-lg w-52 z-10 border border-gray-100 animate-fade-in">
                      <ul>
                        {navigation.map((item) => (
                          <li
                            key={item.name}
                            onClick={() => setIsDropdownOpen(false)}
                            className="py-2"
                          >
                            <Link
                              to={item.href}
                              className="block text-gray-700 hover:text-primary transform hover:translate-x-1 transition-all duration-300 ease-in-out"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login" className="transition-transform duration-300 hover:scale-110 inline-block">
                  <HiOutlineUser className="size-6 text-gray-700 hover:text-primary transition-colors duration-300" />
                </Link>
              )}
            </div>

            <button className="hidden sm:block relative transition-transform duration-300 hover:scale-110">
              <HiOutlineHeart className="size-6 text-gray-700 hover:text-red-500 transition-colors duration-300" />
            </button>

            <Link
              to="/cart"
              className="bg-primary hover:bg-primary/90 py-2 px-4 sm:px-6 flex items-center rounded-lg relative transform transition-all duration-300 hover:scale-105 shadow-md hover:shadow-primary/30"
            >
              <HiOutlineShoppingCart className="text-white text-lg" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white py-1 px-2 text-xs font-bold rounded-full animate-bounce">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;
