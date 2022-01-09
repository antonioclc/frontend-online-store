import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';

export default class Header extends React.Component {
  render() {
    const { cartList } = this.props;
    return (
      <div className="header-container">
        <Link to="/">
          <h1 className="header-title">
            FrontEnd Online Store
          </h1>
        </Link>

        <div className="header-cart-button">
          <CartButton cartList={ cartList } />
        </div>
      </div>
    );
  }
}
