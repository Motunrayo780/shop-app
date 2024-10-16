
import React, { useState, useEffect } from 'react';
import Nav from './Nav';  // Import the Nav component

const Main = () => {
  const [products, setProducts] = useState([]);  // Store fetched products
  const [cart, setCart] = useState([]);          // Store cart items
  const [search, setSearch] = useState('');      // Store the search input

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Filter the products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // Function to handle adding items to the cart
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
    <div>
      {/* Pass search and setSearch to the Nav component */}
      <Nav search={search} setSearch={setSearch} />

      <div className='grid grid-cols-4 justify-between items-center gap-4'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className='w-[250px] h-[350px] bg-slate-400 border-4 rounded-lg translate-x-2'>
              <p className='font-size: 1rem;'>{item.title}</p>

              <div className='h-3/6 object-cover rounded-lg flex'>
                <img className='w-[250px]' src={item.image} alt={item.title} />
              </div>

              <p className='text-balance'>Price: ${item.price}</p>
              <p className='text-balance font-serif'>Category: {item.category}</p>

              <button
                onClick={() => addToCart(item)}
                className='w-[200px] h-[40px] bg-slate-200 rounded-lg ml-5 mt-4'>
                ADD TO CART
              </button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Optional: Display the cart items */}
      <div className='cart p-4'>
        <h2>Cart</h2>
        {cart.length > 0 ? (
          cart.map((cartItem) => (
            <div key={cartItem.id} className='cart-item'>
              <p>{cartItem.title}</p>
              <p>Quantity: {cartItem.quantity}</p>
              <p>Price: ${cartItem.price * cartItem.quantity}</p>
            </div>
          ))
        ) : (
          <p>The cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Main;

