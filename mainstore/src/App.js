import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import React from 'react';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer greetings="Bienvenido al nuestra tienda OnLine" />
      <ItemCount stock="5" initial="1" />
    </React.Fragment>
  );
}

export default App;
