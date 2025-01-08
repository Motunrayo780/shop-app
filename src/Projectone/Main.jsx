

import React, { useEffect, useState } from 'react';
import Nav from './Nav';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState('');
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const [cartItems, setCartItems] = useState([
    { id: 2, name: 'Product 2', quantity: 99, price: 50 },
    { id: 2, name: 'Product 3', quantity: 99, price: 20 },
    { id: 2, name: 'Product 4', quantity: 99, price: 80 },
  ]);

  // Toggle Sidebar Visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // Add item to cart and update cart count
  const ToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartCount(cartCount + 1);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Filter products by search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='relative p-4'>
      {/* Navbar with Cart Icon and Search */}
      <Nav search={search} setSearch={setSearch} cartCount={cartCount} toggleSidebar={toggleSidebar} />

      {/* Sidebar for Cart Items */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-500 text-white transition-transform transform ${
          isSidebarVisible ? 'translate-x-0' : 'translate-x-full'
        } w-full sm:w-[300px] md:w-[400px]`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 bg-gray-900">
          <h2 className="text-lg font-semibold">Cart</h2>
          <button onClick={toggleSidebar} className="text-white hover:text-gray-400">
            ✕
          </button>
        </div>

        {/* Sidebar Content: Cart Items */}
        <div className="p-4 space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="p-4 border-b border-gray-700">
                <p className="font-semi">{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price * item.quantity}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">Your cart is empty.</p>
          )}
        </div>
      </div>

      {/* Products Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="w-full h-[350px] bg-cyan-900  border-4 rounded-lg p-2 sm:w-[250px] lg:h-[400px]"
            >
              <p className="text-sd font-[30px]">{item.title}</p>
              <div className="h-3/6 object-cover rounded-lg flex justify-center">
                <img className="w-[150px] sm:w-[250px]" src={item.image} alt={item.title} />
              </div>
              <p className="text-balance">Price: ${item.price}</p>
              <p className="text-balance font-serif">Category: {item.category}</p>
              <div className="flex justify-center my-4">
                <button onClick={() => ToCart(item)} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Main;

