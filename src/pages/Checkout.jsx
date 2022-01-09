import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default class Checkout extends React.Component {
  render() {
    const { location: { state }, cartList } = this.props;
    const prices = state.map((item) => item.price);
    const totalPrice = prices.reduce((acc, cur) => acc + cur);
    return (
      <div className="item-cart-container">
        <Header cartList={ cartList } />
        <div>
          {
            state.map((item) => (
              <div className="item-cart-product" key={ item.id }>
                <img
                  className="item-cart-product-image"
                  src={ item.thumbnail }
                  alt={ item.title }
                  width="50px"
                />
                <div className="item-cart-product-info">
                  <h3 className="item-cart-product-info-title">
                    { item.title }
                  </h3>
                  <h3 className="item-cart-product-info-price">
                    R$
                    {' '}
                    { item.price }
                  </h3>
                </div>
              </div>
            ))
          }
          <h2>{`Valor Total: R$${totalPrice.toFixed(2)}`}</h2>
          <form className="checkout-form-container">
            <div>
              <input
                type="text"
                data-testid="checkout-fullname"
                placeholder="Nome Completo"
                required="required"
              />
              <input
                type="email"
                data-testid="checkout-email"
                placeholder="Email"
                required="required"
              />
              <input
                type="text"
                data-testid="checkout-cpf"
                placeholder="CPF"
                required="required"
              />
            </div>
            <div>
              <input
                type="text"
                data-testid="checkout-phone"
                placeholder="Telefone"
                required="required"
              />
              <input
                type="text"
                data-testid="checkout-cep"
                placeholder="CEP"
                required="required"
              />
              <input
                type="text"
                data-testid="checkout-address"
                placeholder="Endereço"
                required="required"
              />
            </div>
            <button className="home-container-input-button" type="submit">Comprar</button>
          </form>
        </div>

      </div>
    );
  }
}

Checkout.propTypes = PropTypes.shape({
  title: PropTypes.string,
  price: PropTypes.string,
}).isRequired;
