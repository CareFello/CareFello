
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Log from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Log />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
