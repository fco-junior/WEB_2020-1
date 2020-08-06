import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Arena1 from './components/questao1/Arena.jsx'
import Arena4 from './components/questao4/Arena.jsx'
import World from './components/questao3/World.jsx';
import Hero4 from './components/questao4/Hero';
import Enemy4 from './components/questao4/Enemy';
import { GOKU, VEGETA } from './constants';

//questao 1 e 2
/*
function App() {
  return (
    <div className="App">
      <Arena />
    </div>
  )
}
*/

// Questao 3
/*
function App() {
  return (
    <div className="App">
      <World>
        <Arena />
        <Arena />
        <Arena />
      </World>
    </div>
  )
}
*/

// Questao 4  e 5 
function App() {
  return (
    <div className='App'>
      <Arena4 arena='DragonBall Z'>
        <Hero4 name='Goku' img={GOKU} />
        <Enemy4 name='Vegeta' img={VEGETA} />
      </Arena4>
    </div>
  )
}

export default App;
