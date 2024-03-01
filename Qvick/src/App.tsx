import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "src/Components/Login/Login";
import Main from "src/Components/Main/Main";
import Head from "src/Components/Head/Head/Head";
import Side from "src/Components/SideBar/Sidebar";
import HeadLogo from "src/Components/Head/Logo/Logo";
import HeadName from "src/Components/Head/Name/Name";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Head" element={<Head />} />
          <Route path="/Side" element={<Side />} />
          <Route path="/HeadLogo" element={<HeadLogo />} />
          <Route path="/HeadName" element={<HeadName />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
