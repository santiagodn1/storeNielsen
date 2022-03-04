import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CartProvider } from './Context';
import Cart from './components/Cart/Cart';



function App() {
  return (

    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ItemDetails/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>


  );
}

export default App;
