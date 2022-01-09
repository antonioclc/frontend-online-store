import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    const { state: { title, thumbnail, price, id, shipping } } = this.props;
    return (
      <div
        data-testid="product"
        className="home-list-product-detail"
      >
        <img className="home-list-product-detail-image" src={ thumbnail } alt={ title } />
        <h3 className="home-list-product-detail-title">
          { title }
        </h3>
        <h4 className="home-list-product-detail-id">{ id }</h4>
        <div className="home-list-product-detail-price-free-shipping-container">
          <h2 className="home-list-product-detail-price">
            R$
            {' '}
            { price }
          </h2>
          {
            shipping.free_shipping && <p className="home-list-product-detail-free-shipping" data-testid="free-shipping">FRETE GRÁTIS</p>
          }
        </div>
      </div>
    );
  }
}

Card.propTypes = PropTypes.shape({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
}).isRequired;
