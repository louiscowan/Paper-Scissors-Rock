import React from 'react';
import { Routes, Route } from 'react-router-dom'

import PaperScissors from './PaperScissors';
import '../App.css';

function App() {
  return (
    <Routes>
        <Route path='/' element={<PaperScissors />}/>
    </Routes>
  );
}

export default App;
