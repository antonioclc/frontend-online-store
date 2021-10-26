import React from 'react';
import PropTypes from 'prop-types';
import ItemCart from '../components/ItemCart';

export default class ShoppingCart extends React.Component {
  render() {
    const { location: { state } } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
        {
          state.map((item) => (
            <ItemCart item={ item } key={ item.id } />
          ))
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = PropTypes.shape({
  location: PropTypes.objectOf,
  state: PropTypes.objectOf,
}).isRequired;
