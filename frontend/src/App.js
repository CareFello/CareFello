
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Log from "./pages/Login";
import Home1 from "./components/Test";
import Login from "./components/Login";
import Reg from "./components/Register";
import Sel from "./pages/Select";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ManagerDashboard from './pages/ManagerDashboard';
import AddDoctor from './pages/AddDoctor';
import Caregiverlist from './pages/Caregiverlist';
import AddCaregiver from './pages/AddCaregiver';
import ViewRoomDetails from './pages/ViewRoomDetails'
import MealPlan from './pages/MealPlan';
import RoomPackage from './pages/RoomPackage';


import Caregiverprofile from './pages/caregiverprofile';
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
          <Route path="/list" element={<Caregiverlist/>}/>
          <Route path="/profile" element={<Caregiverprofile/>}/>
          <Route path="/md" element={<ManagerDashboard/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
