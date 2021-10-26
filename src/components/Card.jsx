import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    const { prod } = this.props;
    return (
      <div data-testid="product">
        <h3>
          { prod.title }
        </h3>
        <img src={ prod.thumbnail } alt={ prod.title } />
        <h2>
          {prod.price}
        </h2>
      </div>
    );
  }
}

Card.propTypes = PropTypes.shape({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
}).isRequired;
