import React from 'react';

export default class Home extends React.Component {
  render() {
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
      </div>
    );
  }
}
