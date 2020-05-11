import React from 'react';
import Noisemaker from '../Noisemaker/Noisemaker'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Play Do Re Mi</h1>
        <p>Click on the keys to know the notes to play!</p>
      </header>
      <main>
        <Noisemaker/>
      </main>
    </div>
  );
}

export default App;
