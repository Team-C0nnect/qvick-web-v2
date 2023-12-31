import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // REACT ROUTE 사용
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Head from './Components/head/head';

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
