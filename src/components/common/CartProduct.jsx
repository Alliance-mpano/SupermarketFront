import React from 'react';
import "./Product.css"

const CartProduct = ({ name, type, price }) => {
  const addToCart = () => {
    // Logic for adding the product to the cart
  };

  return (
    <div className="product">
      <h4 className="product-name">{name}</h4>
      <p className="product-type">{type}</p>
      <p className="product-price">${price}</p>
      <div><label htmlFor="quantiy">Quantity</label> <input type="number" /></div>
      <p>Total: </p>
      <button className="add-to-cart-btn" onClick={addToCart}>
        Buy now
      </button>
    </div>
  );
};

export default CartProduct;
