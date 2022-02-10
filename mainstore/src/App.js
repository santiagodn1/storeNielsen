import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ListaProductos/ListaProductos';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer />
    </React.Fragment>
  );
}

export default App;
