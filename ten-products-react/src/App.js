import React from 'react';
import 'bulma/css/bulma.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import products from './productData'

function App() {
  return (
    <div className="App">
      <Header />
      <Main products={products} />
      <Footer />
    </div>
  );
}

export default App;
