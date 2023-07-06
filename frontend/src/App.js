
import './App.css';
import Navbar from './components/Navbar';
import Link from './components/Link';
import Home from "./pages/Home";
import Log from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Link />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/Login" exact component={Log} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
