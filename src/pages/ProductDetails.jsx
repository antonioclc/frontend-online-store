import React from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends React.Component {
  render() {
    const { location: { state: { title, thumbnail, price } } } = this.props;
    return (
      <div data-testid="product">
        <h3 data-testid="product-detail-name">
          { title }
        </h3>
        <img src={ thumbnail } alt={ title } />
        <h2>
          { price }
        </h2>
      </div>
    );
  }
}

ProductDetails.propTypes = PropTypes.shape({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
}).isRequired;
