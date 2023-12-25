import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // REACT ROUTE 사용
import Login from './Components/Login/Login';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
