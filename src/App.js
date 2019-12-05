import React from 'react';
import './App.css';
import HomeBreeds from './components/HomeBreeds.js';
import BreedPics from './components/BreedPics.js';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Pics of Doggos</h1>
      <p>Click on a breed!</p>
      <div className='container'>
        <Route exact path="/" component={HomeBreeds} />
        <Route path="/dogs/:breed" component={BreedPics} />
      </div>
    </div>
  );
}

export default App;
