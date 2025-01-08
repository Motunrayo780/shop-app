

import React, { useState } from 'react';

const Nav = ({ search, setSearch, cartCount, toggleSidebar }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <a href="/">Shopping App</a>
      </div>

{/* Search Bar */}
<div className="hidden md:flex items-center">
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-[200px] md:w-[300px] h-10 rounded-lg px-4 border-0 text-black"
  />
</div>

{/* Search Bar for Mobile */}
<div className="md:hidden flex items-center w-full mt-4">
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full h-10 rounded-lg px-4 border-0 text-black"
  />
</div>


      {/* Desktop Navigation Links - Hidden on Mobile */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/shop" className="hover:text-gray-400">Shop</a>
        <a href="/categories" className="hover:text-gray-400">Categories</a>
        <a href="/sale" className="hover:text-gray-400">Sale</a>
        <a href="/about" className="hover:text-gray-400">About</a>
      </div>

      {/* Search Bar */}
      {/* <div className="w-full md:flex items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[200px] md:w-[300px] h-10 rounded-lg px-4 border-0 text-black"
        />
      </div> */}

      {/* Icons for Cart and Account */}
      <div className="flex items-center space-x-4">
        {/* Cart Icon with Badge */}
        <button className="relative" onClick={toggleSidebar}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5m1.6 8l1.5 6h8l1.5-6M7 13h10m-4 6h-2m0 0v1m0-1v1m0-1h2m0-6h-4"></path>
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartCount}
            </span>
          )}
        </button>

        {/* Account Icon */}
        <a href="/account">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196zM15 11h.01"
            ></path>
          </svg>
        </a>

        {/* Mobile Menu Button (Hamburger) - Only Visible on Mobile */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 md:hidden flex flex-col items-center pt-8">
          <button
            className="text-white absolute top-4 right-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="flex flex-col space-y-6 items-center mt-12">
            <a href="/" className="text-white text-lg hover:text-gray-400">Home</a>
            <a href="/shop" className="text-white text-lg hover:text-gray-400">Shop</a>
            <a href="/categories" className="text-white text-lg hover:text-gray-400">Categories</a>
            <a href="/sale" className="text-white text-lg hover:text-gray-400">Sale</a>
            <a href="/about" className="text-white text-lg hover:text-gray-400">About</a>
          </div>

          <div className="flex space-x-8 mt-8">
            {/* Cart Icon with Badge */}
            <button className="relative" onClick={toggleSidebar}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5m1.6 8l1.5 6h8l1.5-6M7 13h10m-4 6h-2m0 0v1m0-1v1m0-1h2m0-6h-4"></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Account Icon */}
            <a href="/account">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196zM15 11h.01"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
