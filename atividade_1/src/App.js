import React from 'react';
import './App.css';
import Questao1 from './components/Questao1';
import Questao2 from './components/Questao2';
import Questao3 from './components/Questao3';
import Questao4 from './components/Questao4';

function App() {
  return (
    <div className="App">
      <Questao4 nome='Francisco Costa Cassemiro Júnior'
                curso='Sistemas de Informação'
                cidade='Capistrano - CE'>
        <Questao2/>
      </Questao4>
    </div>
  )
}

export default App
