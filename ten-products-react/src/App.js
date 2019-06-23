import React from 'react';
import 'bulma/css/bulma.css'
import Header from './components/Header';
import Main from './components/Main';
import products from './productData'
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <Main products={products} />
    </div>
  );
}

export default App;
