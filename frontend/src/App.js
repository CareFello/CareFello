
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home1";
import Log from "./pages/Login";
import Home1 from "./components/Home";
import Login from "./components/Login";
import Reg from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Log />} />
          <Route path="/home" element={<Home1 />} />
          <Route path="/log" element={<Login />} />
          <Route path="/reg" element={<Reg />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
