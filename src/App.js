import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import AddNewProduct from './pages/AddNewProduct';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="cart" element={<Cart />} />
        <Route path="new" element={<AddNewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
