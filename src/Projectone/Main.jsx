
import React, {useEffect, useState } from 'react';
import Nav from './Nav'

const Main = () => {
  const [products, setProducts] = useState([]);  
  const [cart, setCart] = useState([]);          
  const [search, setSearch] = useState('');     
  const [isSidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  return (
    <div className='p-4 relative'>
      <Nav search={search} setSearch={setSearch} />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 w-[250px] h-full bg-gray-800 text-white transition-transform transform ${
          isSidebarVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
        onMouseEnter={() => setSidebarVisible(true)}
        onMouseLeave={() => setSidebarVisible(false)}
      >
        <h2 className='p-4 text-lg font-semibold'>Cart</h2>
        {cart.length > 0 ? (
          cart.map((cartItem) => (
            <div key={cartItem.id} className='p-4'>
              <p>{cartItem.title}</p>
              <p>Quantity: {cartItem.quantity}</p>
              <p>Price: ${cartItem.price * cartItem.quantity}</p>
            </div>
          ))
        ) : (
          <p className='p-4'>The cart is empty.</p>
        )}
      </div>

      {/* Button to hover */}
      <button
        className='w-[100px] h-[40px] bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 absolute top-8 right-8'
        onMouseEnter={() => setSidebarVisible(true)}
        onMouseLeave={() => setSidebarVisible(false)}
      >
        View Cart
      </button>

      {/* Products Display */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className='w-full h-[350px] bg-slate-400 border-4 rounded-lg p-2 sm:w-[250px] lg:h-[400px]'
            >
              <p className='font-size: 1rem;'>{item.title}</p>

              <div className='h-3/6 object-cover rounded-lg flex justify-center'>
                <img className='w-[150px] sm:w-[250px]' src={item.image} alt={item.title} />
              </div>

              <p className='text-balance'>Price: ${item.price}</p>
              <p className='text-balance font-serif'>Category: {item.category}</p>

              <button
                onClick={() => addToCart(item)}
                className='w-full sm:w-[200px] h-[40px] bg-slate-200 rounded-lg mt-4 hover:bg-gray-900 transition-colors duration-300'
              >
                ADD TO CART
              </button>
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
