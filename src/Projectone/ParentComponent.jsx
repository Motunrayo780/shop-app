// import React, { useState } from 'react';
// import Side from './Side';

// const ParentComponent = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Product 1', quantity: 2, price: 10 },
//     { id: 2, name: 'Product 2', quantity: 1, price: 20 },
//   ]);

//   return (
//     <div>
//       {/* Other components */}
//       <Side cartItems={cartItems} />
//     </div>
//   );
// };

// export default ParentComponent;

import React, { useState } from 'react';
// import Nav from './Nav';
import Side from './Side';

const Main = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Product 1', quantity: 2, price: 10 },
//     { id: 2, name: 'Product 2', quantity: 1, price: 20 },
//   ]);
//   const [isSidebarVisible, setSidebarVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

  return (
    <div>
      {/* Navbar with Cart Icon */}
      {/* <Nav cartCount={cartItems.length} toggleSidebar={toggleSidebar} /> */}

      {/* Sidebar Component */}
      
      {/* <Side 
        cartItems={cartItems} 
        isSidebarVisible={isSidebarVisible} 
        toggleSidebar={toggleSidebar} 
      /> */}
    </div>
  );
};

export default Main;
