import React from 'react';
import CartProduct from '../../components/common/CartProduct';
import Product from '../../components/common/Product';
import Header from '../../components/common/Header';
import SideNav from '../../components/common/SideNav';

const Cart = () => {
  const productData = [
    { name: 'Product A', type: 'Type A', price: 9.99 },
    { name: 'Product B', type: 'Type B', price: 14.99 },
    { name: 'Product C', type: 'Type C', price: 24.99 },
    { name: 'Product D', type: 'Type D', price: 19.99 },
    { name: 'Product E', type: 'Type E', price: 29.99 },
  ];

  return (
    <div>
      
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px',}}>
      {productData.map((product, index) => (
        <CartProduct key={index} {...product} />
      ))}
      </div>
    </div>
  );
};

export default Cart;
