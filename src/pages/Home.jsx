import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default class Home extends React.Component {
  render() {
    const { categories, onInputChange, onClickCategory,
      renderProducts, verifyProductList, cartList } = this.props;
    return (
      <div>
        <Header cartList={ cartList } />
        <div className="home-container">
          <div className="home-container-input">
            <label htmlFor="input-text">
              <input
                onChange={ onInputChange }
                data-testid="query-input"
                type="text"
                id="input-text"
              />
            </label>
            <button
              className="home-container-input-button"
              type="button"
              data-testid="query-button"
              onClick={ renderProducts }
            >
              Pesquisar
            </button>
          </div>
          <div className="home-container-category-and-list">
            <div className="home-category">
              <h3
                data-testid="home-initial-message"
              >
                Categorias

              </h3>
              <section>
                {categories.map(({ id, name }) => (
                  <p key={ id }>
                    <label htmlFor={ id }>
                      { name }
                      <input
                        name="category"
                        key={ id }
                        id={ id }
                        value={ name }
                        type="radio"
                        onClick={ onClickCategory }
                        data-testid="category"
                      />
                    </label>
                  </p>
                ))}
              </section>
            </div>
            <div className="home-list">
              { verifyProductList() }
            </div>

          </div>
        </div>
      </div>

    );
  }
}

Home.propTypes = PropTypes.shape({
  categories: PropTypes.arrayOf,
  cartList: PropTypes.arrayOf,
  onInputChange: PropTypes.func,
  onClickCategory: PropTypes.func,
  renderProducts: PropTypes.func,
  verifyProductList: PropTypes.func,
}).isRequired;
