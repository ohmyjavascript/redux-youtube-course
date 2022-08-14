import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;