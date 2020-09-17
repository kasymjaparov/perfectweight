import React from 'react';
import './App.css';
import Header from './components/Header/index'
import BrokW from './components/BrokW/index'
import Lorenz from './components/Lorenz/index'

function App() {
  return (
    <div className="app">
      <div className="app-container">
      <Header/>
      <BrokW/>
      <Lorenz/>
      </div>
    </div>
  );
}

export default App;
