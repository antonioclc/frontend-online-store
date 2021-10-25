import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="input-text">
          <input
            data-testid="query-input"
            type="text"
            id="input-text"
          />
        </label>
        <button type="button" data-testid="query-button">Pesquisar</button>
        <h3
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </h3>
      </div>
    );
  }
}
