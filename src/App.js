import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
  );
}

export default App;
