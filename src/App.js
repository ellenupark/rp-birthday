import './App.css';
import Presenter from './Presenter'
import Lock from './Lock'
import React, { useState } from 'react';

const App = () => {
  const [locked, setLocked] = useState(true)

  const handleSubmit = (code) => {
    code.toLowerCase().trim() === 'kiki' && setLocked(false)
  }

  return (
    <div className="App">
      {locked && (
        <Lock handleSubmit={handleSubmit} />
      )}
      {!locked && (
        <Presenter />
      )}
    </div>
  );
}

export default App;