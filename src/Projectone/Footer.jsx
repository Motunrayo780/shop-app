

import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='bg-slate-500 w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-start text-white py-8 px-6'>
        

        <div className='w-full md:w-[300px] text-gray-300'>
          <h3 className='text-lg font-semibold mb-4'>About Us</h3>
          <p className='mb-2'>
            Learn more about our mission to provide the best products and services for you.
          </p>
          <ul className="space-y-1">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Sustainability</li>
            <li>Affiliate Program</li>
          </ul>
        </div>


        <div className='w-full md:w-[300px] text-gray-300'>
          <h3 className='text-lg font-semibold mb-4'>Customer Service</h3>
          <p className='mb-2'>
            We're here to assist you with any inquiries or issues you may have with your orders.
          </p>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns & Refunds</li>
            <li>FAQs</li>
          </ul>
        </div>


        <div className='w-full md:w-[300px] text-gray-300'>
          <h3 className='text-lg font-semibold mb-4'>Shop With Us</h3>
          <p className='mb-2'>
            Discover the latest arrivals, special offers, and our best-selling products.
          </p>
          <ul className="space-y-1">
            <li>Best Sellers</li>
            <li>New Arrivals</li>
            <li>Gift Cards</li>
            <li>Discounts & Offers</li>
            <li>Find a Store</li>
          </ul>
        </div>
        
      </div>


      <div className='bg-gray-900 w-full text-center py-4 text-gray-400'>
        <p>&copy; 2024 LYBAKAM SHOPPING APP. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
