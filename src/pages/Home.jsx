import React from 'react';
import { getCategories } from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.renderCategories = this.renderCategories.bind(this);
  }

  componentDidMount() {
    this.renderCategories();
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
            type="text"
            id="input-text"
          />
        </label>
        <h3
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </h3>
        <section>
          <ul>
            {categories.map(({ id, name }) => (
              <li
                data-testid="category"
                key={ id }
              >
                { name }

              </li>))}
          </ul>
        </section>
      </div>
    );
  }
}
