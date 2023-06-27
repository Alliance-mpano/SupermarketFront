import React from 'react';
import "./Product.css"

const Product = ({ name, type, price }) => {
  const addToCart = () => {
    // Logic for adding the product to the cart
  };

  return (
    <div className="product">
      <h4 className="product-name">{name}</h4>
      <p className="product-type">{type}</p>
      <p className="product-price">${price}</p>
      <button className="add-to-cart-btn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
