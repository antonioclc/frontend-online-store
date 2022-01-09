import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import Header from '../components/Header';

export default class ProductDetails extends React.Component {
  render() {
    const thirdExample = {
      size: 40,
      count: 5,
      isHalf: false,
      value: 1,
      color: '#b4b4b4',
      activeColor: '#dada27',
    };
    const { location: { state:
      { title, thumbnail, price, id, shipping } }, addToCart, cartList } = this.props;
    return (
      <div data-testid="product" className="PD-page-container">
        <Header cartList={ cartList } />
        <div className="PD-page-product-detail">
          <h3
            data-testid="product-detail-name"
            className="PD-page-title"
          >
            { title }
          </h3>
          <img className="PD-page-image" src={ thumbnail } alt={ title } />
          <h2 className="PD-page-price">
            R$
            {' '}
            { price }
          </h2>
          { shipping.free_shipping
            && (
              <p
                className="PD-page-free-shipping"
                data-testid="free-shipping"
              >
                Frete Grátis

              </p>
            )}
          <input
            className="home-container-input-button"
            id={ id }
            type="button"
            value="Adicionar item"
            data-testid="product-detail-add-to-cart"
            onClick={ addToCart }
          />
        </div>
        <form className="PD-page-form">
          <h3 className="PD-page-form-evaluate">Avalie este produto</h3>
          <label htmlFor="email">
            <p>Email</p>
            <input type="email" />
          </label>
          {/* React Stars utilizada, me baseando no link (https://www.npmjs.com/package/react-rating-stars-component) */}
          <ReactStars { ...thirdExample } />
          <textarea
            data-testid="product-detail-evaluation"
            id=""
            cols="70"
            rows="5"
            placeholder="Descreva aqui sua avaliação..."
          />
          <button className="home-container-input-button" type="button">Avaliar</button>
        </form>
      </div>
    );
  }
}

ProductDetails.propTypes = PropTypes.shape({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
}).isRequired;
