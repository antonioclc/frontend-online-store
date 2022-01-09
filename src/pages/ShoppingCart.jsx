import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ItemCart from '../components/ItemCart';
import Header from '../components/Header';

export default class ShoppingCart extends React.Component {
  render() {
    const { location: { state }, cartList } = this.props;
    const shoppingCartList = state;
    return (
      <div className="shopping-cart-container">
        <Header cartList={ cartList } />
        {
          shoppingCartList.length === 0
            ? (
              <h3
                className="shopping-cart-empty"
                data-testid="shopping-cart-empty-message"
              >
                Seu carrinho está vazio

              </h3>
            )
            : shoppingCartList.map((item) => (
              <ItemCart item={ item } key={ item.id } />
            ))
        }
        {
          shoppingCartList.length === 0 ? null : (
            <Link to={ { pathname: '/checkout', state: shoppingCartList } }>
              <button
                className="home-container-input-button"
                type="button"
                data-testid="checkout-products"
              >
                Finalizar
              </button>
            </Link>
          )
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = PropTypes.shape({
  location: PropTypes.objectOf,
  state: PropTypes.objectOf,
}).isRequired;
