import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // REACT ROUTE 사용
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
