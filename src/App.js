import React, { useState } from "react";
import data from './exampletextstimuli.js';
import './App.css';

function App() {

  const [ text, setText ] = useState(Math.floor(Math.random() * (data.length+1)));
  const [ prog, setProg ] = useState(0);
  const max_prog = 7;

  function handleNext() {
    setProg(prev => prev+1);
  }

  function handleNextText() {
    setProg(0);
    setText(Math.floor(Math.random() * (data.length+1)));
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p className="text-stim">{data[text][prog]}</p>

        {(prog<max_prog) && <button onClick={handleNext}>Next</button>}

        {(prog==max_prog) && <button onClick={handleNextText}>Next text</button>}
        
      </header>
    </div>
  );
}

export default App;
