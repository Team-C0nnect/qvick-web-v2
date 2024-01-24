import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Head from './Components/Head/Head';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Head" element={<Head />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
