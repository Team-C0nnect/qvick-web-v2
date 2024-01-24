import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "src/Components/Login/Login";
import Main from "src/Components/Main/Main";
import Head from "src/Components/Head/Head";
import Side from "src/Components/SideBar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Head" element={<Head />} />
          <Route path="/Side" element={<Side />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
