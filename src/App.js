import React from 'react';
import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Shop from './Component/Shop';
import Menu from './Component/Menu';
import Client from './Component/Client';
function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Shop/>
      <Menu/>
      <Client/>
    </div>
  );
}

export default App;
