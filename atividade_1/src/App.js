import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Questao1 from './components/Questao1/Questao1';
import Questao2 from './components/Questao2/Questao2';
import Questao3 from './components/Questao3/Questao3';
import Questao4 from './components/Questao4/Questao4';

function App() {
  return (
    <div className="App">
      <div className="card" Style="width: 30rem;">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
            Questão 5
            </h5>
          </div>
          <div className="card-body">
            <Questao4 nome='Francisco Costa Cassemiro Júnior' curso='Sistemas de Informação' cidade='Capistrano - CE'>
              <Questao2/>
            </Questao4>
          </div>              
      </div>
    </div>
  )
}

export default App
