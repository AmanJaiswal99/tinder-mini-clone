import React from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import SwipeButtons from './components/SwipeButtons'
import './App.css';

function App() {
  return (
    <div className="app">
    <Header/>
    <Cards/>
    <SwipeButtons/>
    </div>
  );
}

export default App;
