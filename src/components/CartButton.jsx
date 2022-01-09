import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import carrinho from '../images/carrinho.png';

export default class CartButton extends React.Component {
  render() {
    const { cartList } = this.props;
    return (
      <div>
        <Link to={ { pathname: '/cart', state: cartList } }>
          <div className="cart-button-container">
            <div>
              <img className="cart-button-img" src={ carrinho } />
            </div>
            <div>
              {
                cartList.length === 0 ? null : (<p className="cart-button-number" data-testid="shopping-cart-size">{ cartList.length }</p>)
              }
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

CartButton.propTypes = PropTypes.shape({
  cartList: PropTypes.arrayOf,
}).isRequired;
