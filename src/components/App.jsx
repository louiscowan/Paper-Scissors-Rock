import React from 'react';
import { Routes, Route } from 'react-router-dom'

import WatchUpload from './WatchUpload';
import '../App.css';

function App() {
  return (
    <Routes>
        <Route path='/' element={<WatchUpload />}/>
    </Routes>
  );
}

export default App;
