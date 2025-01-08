
// import React from 'react';

// const Side = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   return (
//     <div className="relative">
//       {/* Toggle Button */}
//       <button
//         className="w-[100px] h-[40px] bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
//         onClick={toggleSidebar}
//       >
//         Toggle Sidebar
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-gray-800 text-white transition-transform transform ${
//           isSidebarVisible ? 'translate-x-0' : 'translate-x-full'
//         } 
//         sm:w-[250px] w-full`}  {/* Full width on mobile, 250px on larger screens */}
//       >
//         <h2 className="p-4 text-lg font-semibold">Sidebar Content</h2>
//         <p className="">This is the sidebar content.</p>
        
//         {/* Close Button */}
//         <button
//           className="w-full bg-red-500 text-white py-2 mt-4 hover:bg-red-600"
//           onClick={toggleSidebar}
//         >
//           Close Sidebar
//         </button>
//       </div>
//     </div>
//   );
// };

// // export default Side;


// import React, { useState } from 'react';

// const Side = ({ items }) => {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   return (
//     <div className="relative">
//       {/* Badge Icon (Button to open sidebar) */}
//       <button
//         className="relative bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700 transition-colors duration-300"
//         onClick={toggleSidebar}
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5m1.6 8l1.5 6h8l1.5-6M7 13h10m-4 6h-2m0 0v1m0-1v1m0-1h2m0-6h-4"
//           />
//         </svg>

//         {/* Badge displaying the number of items */}
//         {items.length > 0 && (
//           <span className="absolute -top-2 right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//             {items.length}
//           </span>
//         )}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-gray-800 text-white transition-transform transform ${
//           isSidebarVisible ? 'translate-x-0' : 'translate-x-full'
//         } sm:w-[250px] w-full`} 
//       >
//         <h2 className="p-4 text-lg font-semibold">Items in Cart</h2>
        
//         {/* Items List */}
//         <div className="p-4">
//           {items.length > 0 ? (
//             items.map((item, index) => (
//               <div key={index} className="bg-gray-700 p-2 rounded-lg mb-2">
//                 <p className="font-semibold">{item.name}</p>
//                 <p className="text-sm">{item.description}</p>
//                 <p className="text-sm">{item.price}</p>
//                 <p className="text-sm">{item.category}</p>
//                 <p className="text-sm">{item.total}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-400">No items in the cart</p>
//           )}
//         </div>
        
//         {/* Close Button */}
//         <button
//           className="w-full bg-red-500 text-white py-2 mt-4 hover:bg-red-600"
//           onClick={toggleSidebar}
//         >
//           Close Sidebar
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Side;


// import React, { useState } from 'react';

// const Side = ({ cartItems }) => {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   return (
//     <div className="relative">
//       {/* Cart Badge Icon */}
//       <button
//         className="relative"
//         onClick={toggleSidebar}
//       >
//         {/* SVG icon for cart */}
//         <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5m1.6 8l1.5 6h8l1.5-6M7 13h10m-4 6h-2m0 0v1m0-1v1m0-1h2m0-6h-4"></path>
//         </svg>

//         {/* Cart Count Badge */}
//         {cartItems.length > 0 && (
//           <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//             {cartItems.length}
//           </span>
//         )}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-gray-800 text-white transition-transform transform ${
//           isSidebarVisible ? 'translate-x-0' : 'translate-x-full'
//         } 
//         w-full sm:w-[300px] lg:w-[400px]`}  // Full width on mobile, smaller width on larger screens
//       >
//         {/* Sidebar Header */}
//         <div className="flex justify-between items-center p-4 bg-gray-900">
//           <h2 className="text-lg font-semibold">Cart Items</h2>
//           {/* Close Button */}
//           <button onClick={toggleSidebar} className="text-white hover:text-gray-400">
//             ✕
//           </button>
//         </div>

//         {/* Sidebar Content */}
//         <div className="p-4 space-y-4">
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div key={item.id} className="p-4 border-b border-gray-700">
//                 <p className="font-semibold">{item.name}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Price: ${item.price * item.quantity}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-400">Your cart is empty.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Side;


import React from 'react';

const Side = ({ cartItems, isSidebarVisible, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-gray-800 text-white transition-transform transform ${
        isSidebarVisible ? 'translate-x-0' : 'translate-x-full'
      } 
      w-full sm:w-[300px] lg:w-[400px]`}  // Full width on mobile, narrower on larger screens
    >
      {/* Sidebar Header */}
      <div className="flex justify-between items-center p-4 bg-gray-900">
        <h2 className="text-lg font-semibold">Cart Items</h2>
        {/* Close Button */}
        <button onClick={toggleSidebar} className="text-white hover:text-gray-400">
          ✕
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="p-4 space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="p-4 border-b border-gray-700">
              <p className="font-semibold">{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Side;
