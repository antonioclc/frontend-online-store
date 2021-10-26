import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ ShoppingCart } />
          <Route exact path="/productdetails/:id" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
