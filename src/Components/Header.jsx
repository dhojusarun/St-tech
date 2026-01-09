import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Homeimage/Logo.png";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useAuth0 } from "@auth0/auth0-react";
import { useCartWishlist } from "../context/CartWishlistContext";

function Header() {
  const { user, logout, isAuthenticated } = useAuth0();
  const { cart, wishlist } = useCartWishlist();

  return (
    <header className="flex justify-between items-center bg-[#edc057] px-5 py-2 text-black font-medium">
      
      {/* Logo */}
      <div className="flex items-center gap-2 italic text-[20px]">
        <img src={Logo} alt="Logo" className="w-10" />
        <h1>S.T. Tech</h1>
      </div>

      {/* Navbar */}
      <nav className="flex items-center gap-8">
        <NavLink to="/" className="font-medium hover:border-b-3 hover:border-[#003372]">
          Home
        </NavLink>
        <NavLink to="/dashboard" className="font-medium hover:border-b-3 hover:border-[#003372]">
          Dashboard
        </NavLink>
        <NavLink to="/courses" className="font-medium hover:border-b-3 hover:border-[#003372]">
          Courses
        </NavLink>
        <NavLink to="/instructors" className="font-medium hover:border-b-3 hover:border-[#003372]">
          Instructors
        </NavLink>
        <NavLink to="/about" className="font-medium hover:border-b-3 hover:border-[#003372]">
          About us
        </NavLink>

        <div className="flex items-center font-medium hover:border-b-3 hover:border-[#003372]">
          <select className="ml-1 bg-transparent border-none outline-none">
            <option>More</option>
          </select>
        </div>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        
        {/* Search */}
        <div className="flex items-center bg-white rounded-full px-2 py-1 shadow-sm shadow-black">
          <input
            type="text"
            placeholder="Search for anything"
            className="border-none outline-none text-sm px-4 h-8 rounded-full"
          />
          <FaSearch className="text-[#7A7A7A] size-5" />
        </div>

        <NavLink to="/cart" className="relative">
          <FaCartShopping className="text-[#003372] size-6" />
          <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        </NavLink>

        <NavLink to="/dashboard/wishlist" className="relative">
          <FaRegHeart className="text-[#003372] size-6" />
          <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {wishlist.length}
          </span>
        </NavLink>

        {/* Profile Image */}
        <NavLink
          to="/profile"
          className="relative group border bg-orange-100 w-10 h-10 rounded-full border-red-600 flex items-center justify-center"
        >
          <div className="w-10 h-10">
            {isAuthenticated && user ? (
              <img
                className="rounded-full w-full h-full object-cover"
                src={user.picture}
                alt={user.name}
              />
            ) : (
              <img
                className="rounded-full w-full h-full object-cover"
                src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png"
                alt="default_user"
              />
            )}
          </div>

          {/* Dropdown */}
          <div className="absolute right-[-50px] top-12 w-28 z-[51] hidden group-hover:block p-4 rounded-2xl bg-gray-400 text-center">
            {isAuthenticated && user ? (
              <>
                <NavLink
                  className="block hover:underline hover:text-red-600 mb-2"
                  to="/profile"
                >
                  Profile
                </NavLink>
                <button
                  onClick={() =>
                    logout({ logoutParams: { returnTo: window.location.origin } })
                  }
                  className="block hover:underline hover:text-red-600 cursor-pointer"
                >
                  LogOut
                </button>
              </>
            ) : (
              <>
                <NavLink
                  className="block hover:underline hover:text-red-600 mb-2"
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="block hover:underline hover:text-red-600"
                  to="/register"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        </NavLink>

        <TbWorld className="text-white size-6" />
      </div>
    </header>
  );
}

export default Header;
