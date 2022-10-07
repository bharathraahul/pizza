import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Admin from './Pages/admin';
import ProductsPage from './Pages/ProductsPage';
import Cart from './Pages/Cart';
import Navigation from './Components/Navigation';

import { CartContext } from './CartContext';
import { getCart, storeCart } from './helpers';
import Login from './Pages/login';

const App = () => {

  const [ cart, setCart ] = useState({});
// Fetch cart from local storage
useEffect(() => {
  getCart().then(cart => {
    setCart(JSON.parse(cart));
  });
}, []);

useEffect(() => {
    storeCart(JSON.stringify(cart));
}, [cart]);


  return (
    <Router>
      < CartContext.Provider value={{ cart, setCart }} >
            <Navigation />
                <Routes>
                  <Route path="/" element={ <Home/> } />
                  <Route path="/products" exact element={ <ProductsPage/> } />
                  <Route path ="/login" exact element={<Login/>} />
                  <Route path="/cart" element={ <Cart/> } />
                  <Route path="/admin" element={ <Admin/> } />
          </Routes>
      </CartContext.Provider>
    </Router>
  )
}

export default App