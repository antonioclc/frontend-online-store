import React from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';

export default class ProductDetails extends React.Component {
  render() {
    const { location: { state:
      { title, thumbnail, price, id } }, addToCart, cartList } = this.props;
    return (
      <div data-testid="product">
        <CartButton cartList={ cartList } />
        <h3 data-testid="product-detail-name">
          { title }
        </h3>
        <img src={ thumbnail } alt={ title } />
        <h2>
          { price }
        </h2>
        <input
          id={ id }
          type="button"
          value="Adicionar item"
          data-testid="product-detail-add-to-cart"
          onClick={ addToCart }
        />
      </div>
    );
  }
}

ProductDetails.propTypes = PropTypes.shape({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
}).isRequired;
