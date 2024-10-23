
// import React from 'react';

// const NavBar = ({ search, setSearch }) => {
//   return (
//     <nav className="bg-slate-800 text-white">
//       <div className="container mx-auto flex items-center justify-between p-4">
        
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <a href="/">Shop App</a>
//         </div>

//         {/* Navigation Links - Hidden on mobile, shown on medium and larger screens */}
//         <div className="hidden md:flex space-x-6">
//           <a href="/" className="hover:text-gray-400">Home</a>
//           <a href="/shop" className="hover:text-gray-400">Shop</a>
//           <a href="/categories" className="hover:text-gray-400">Categories</a>
//           <a href="/sale" className="hover:text-gray-400">Sale</a>
//           <a href="/about" className="hover:text-gray-400">About</a>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-grow mx-4 md:mx-10">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full md:w-[300px] h-10 rounded-lg px-4 border-0 text-black"
//           />
//         </div>

//         {/* Icons: Cart, User Account - Visible always */}
//         <div className="flex space-x-6 items-center">
//           <a href="/cart" className="relative">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5m1.6 8l1.5 6h8l1.5-6M7 13h10m-4 6h-2m0 0v1m0-1v1m0-1h2m0-6h-4"></path>
//             </svg>
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
//           </a>
//           <a href="/account">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196zM15 11h.01"></path>
//             </svg>
//           </a>
//         </div>

//         {/* Hamburger Menu - Only visible on mobile */}
//         <div className="md:hidden">
//           <button>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>

//       </div>

//       {/* Mobile Menu - Only visible on mobile (toggle based on state) */}
//       <div className="md:hidden flex flex-col items-center space-y-4 p-4">
//         <a href="/" className="hover:text-gray-400">Home</a>
//         <a href="/shop" className="hover:text-gray-400">Shop</a>
//         <a href="/categories" className="hover:text-gray-400">Categories</a>
//         <a href="/sale" className="hover:text-gray-400">Sale</a>
//         <a href="/about" className="hover:text-gray-400">About</a>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;


import React, { useState } from 'react';

const NavBar = ({ search, setSearch }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        <div className="text-2xl font-bold">
          <a href="/">Shop App</a>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/shop" className="hover:text-gray-400">Shop</a>
          <a href="/categories" className="hover:text-gray-400">Categories</a>
          <a href="/sale" className="hover:text-gray-400">Sale</a>
          <a href="/about" className="hover:text-gray-400">About</a>
        </div>

        <div className="flex-grow mx-4 md:mx-10">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[300px] h-10 rounded-lg px-4 border-0 text-black"
          />
        </div>

        <div className="flex space-x-6 items-center">
          <a href="/cart" className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5m1.6 8l1.5 6h8l1.5-6M7 13h10m-4 6h-2m0 0v1m0-1v1m0-1h2m0-6h-4"></path>
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
          </a>
          <a href="/account">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196zM15 11h.01"></path>
            </svg>
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 p-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/shop" className="hover:text-gray-400">Shop</a>
          <a href="/categories" className="hover:text-gray-400">Categories</a>
          <a href="/sale" className="hover:text-gray-400">Sale</a>
          <a href="/about" className="hover:text-gray-400">About</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
