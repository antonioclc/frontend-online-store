import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="/cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            <AiOutlineShoppingCart />
          </button>
        </Link>
      </div>
    );
  }
}
