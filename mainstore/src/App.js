import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/ItemDetails/:id" element={<ItemDetailContainer />} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
