import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./sections/home/HomePage.js"

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
