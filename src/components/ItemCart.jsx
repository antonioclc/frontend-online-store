import React from 'react';
import PropTypes from 'prop-types';

export default class ItemCart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.changeQuantityIncrease = this.changeQuantityIncrease.bind(this);
    this.changeQuantityDecrease = this.changeQuantityDecrease.bind(this);
  }

  changeQuantityIncrease() {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  }

  changeQuantityDecrease() {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
  }

  render() {
    const { item } = this.props;
    const { quantity } = this.state;

    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">
          { item.title }
        </h3>
        <h4>{ item.id }</h4>
        <img src={ item.thumbnail } alt={ item.title } />
        <h2>
          R$
          {' '}
          { item.price }
        </h2>
        <button
          onClick={ this.changeQuantityDecrease }
          type="button"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          onClick={ this.changeQuantityIncrease }
          type="button"
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </div>
    );
  }
}

ItemCart.propTypes = PropTypes.shape({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
}).isRequired;
