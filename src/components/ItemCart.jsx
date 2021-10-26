import React from 'react';
import PropTypes from 'prop-types';

export default class ItemCart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: '1',
    };
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity() {

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
          { item.price }
        </h2>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
      </div>
    );
  }
}

ItemCart.propTypes = PropTypes.shape({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
}).isRequired;
