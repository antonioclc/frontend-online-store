import React from 'react';

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}
