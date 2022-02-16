import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer greetings="Bienvenido al nuestra tienda OnLine" />
    </React.Fragment>
  );
}

export default App;
