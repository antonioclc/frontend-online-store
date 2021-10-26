import React from 'react';
import CartButton from '../components/CartButton';
import Card from '../components/Card';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      inputSearch: '',
      idCategories: '',
      productsList: [],
    };
    this.renderCategories = this.renderCategories.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickCategory = this.onClickCategory.bind(this);
    this.verifyProductList = this.verifyProductList.bind(this);
  }

  componentDidMount() {
    this.renderCategories();
  }

  onInputChange({ target }) {
    const targetValue = target.value;
    this.setState({
      inputSearch: targetValue,
    });
  }

  onClickCategory({ target }) {
    const targetId = target.id;
    console.log(targetId);
    this.setState({
      idCategories: targetId,
    });
  }

  verifyProductList() {
    const { productsList } = this.state;
    if (productsList.length > 0) {
      return (
        <div>
          {
            productsList.map((product) => (
              <Card
                key={ product.id }
                prod={ product }
              />
            ))
          }
        </div>
      );
    }
  }

  async renderProducts() {
    const { idCategories, inputSearch } = this.state;
    const products = await getProductsFromCategoryAndQuery(idCategories, inputSearch);
    this.setState({
      productsList: products.results,
    });
    console.log(products.results);
  }

  async renderCategories() {
    const categories = await getCategories();
    this.setState({
      categories: [...categories],
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <label htmlFor="input-text">
          <input
            onChange={ this.onInputChange }
            data-testid="query-input"
            type="text"
            id="input-text"
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.renderProducts }
        >
          Pesquisar
        </button>
        <h3
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </h3>

        <CartButton />

        <section>
          <ul>
            {categories.map(({ id, name }) => (
              <li key={ id }>
                <label htmlFor="category">
                  { name }
                  <input
                    name="category"
                    key={ id }
                    id={ id }
                    value={ name }
                    type="radio"
                    onClick={ this.onClickCategory }
                    data-testid="category"
                  />
                </label>
              </li>
            ))}
          </ul>
        </section>
        { this.verifyProductList() }
      </div>
    );
  }
}
