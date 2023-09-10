import "./App.css";
import { Helmet } from "react-helmet";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Log from "./pages/Login";
import Home1 from "./components/Test";
import Login from "./components/Login";
import Reg from "./components/Register";
import Sel from "./pages/Select";


import Email from "./pages/Email";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ManagerDashboard from './pages/ManagerDashboard';
import AddDoctor from './pages/AddDoctor';
import Caregiverlist from './pages/Caregiverlist';
import AddCaregiver from './pages/AddCaregiver';
import ManagerDoctorView from './pages/ManagerDoctorView';

import ManagerRoomDetailsView from './pages/ManagerRoomDetailsView';


import ViewRoomDetails from './pages/ViewRoomDetails'
import MealPlan from './pages/MealPlan';
import RoomPackage from './pages/RoomPackage';
import GuardianRequest from './pages/GuardianRequest';
import SendRequest from './pages/SendRequest';
import Registration from './pages/Registration';
import AddElder from './pages/AddElder';
import Meal from './pages/Meal'
import RequestContinue from './pages/RequestContinue';


//Guardians' Pages

import GuardianDashboard from './pages/Guardian/GuardianDashboard';
import ElderProfile from './pages/Guardian/ElderProfile';
import EditElderProfile from './pages/Guardian/EditElderProfile';
import GuardianRoomPackages from './pages/Guardian/GuardianRoomPackages';
import GuardianSendRequest from './pages/Guardian/GuardianSendRequest';
import GuardianAddElder from './pages/Guardian/GuardianAddElder';
import GuardianComplain from './pages/Guardian/GuardianComplain';
import GuardianCaregiverRating from './pages/Guardian/GuardianCaregiverRating';
import GuardianPayments from "./pages/Guardian/GuardianPayments";
import EditGuardianProfile from "./pages/Guardian/EditGuardianProfile";
import GuardianProfilePage from "./pages/Guardian/GuardianProfilePage";
import ManagerGuardianProfile from "./pages/Manager/ManagerGuardianProfile"
import DoctorDashboard from './pages/DoctorDashboard'
import GuardianList from "./pages/GuardianList";


import Caregiverprofile from './pages/caregiverprofile'
import GuardianDetailsPage from "./components/GuardianDetailPage";




import Elderslist from './pages/Elderslist'

// import Caregiverprofile from './pages/caregiverprofile';


function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>CareFello</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Helmet application" />
      </Helmet>

      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Log />} />
          <Route path="/home" element={<Home1 />} />
          <Route path="/log" element={<Login />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/email" element={<Email />} />



          {/* <Route path="/profile" element={<Caregiverprofile />} /> */}


          {/* <Route path="/Caregiverprofile" element={<Caregiverprofile/>}/> */}


          <Route path="/sel" element={<Sel />} />
          <Route path="/Registration" element={<Registration />} />

          <Route path="/ManagerDashboard" element={<ManagerDashboard />} />
          <Route path="/ManagerGuardianProfile" element={<ManagerGuardianProfile />} />
          <Route path="/AddDoctor" element={<AddDoctor />} />
          <Route path="/AddCaregiver" element={<AddCaregiver />} />
          <Route path="/Caregiverlist" element={<Caregiverlist />} />
          <Route path="/ViewRoomDetails" element={<ViewRoomDetails />} />
          <Route path="/MealPlan" element={<MealPlan />} />
          <Route path="/RoomPackage" element={<RoomPackage />} />
          <Route path="/SendRequest" element={<SendRequest />} />
          <Route path="/AddElder" element={<AddElder />} />
          <Route path="/MealPlan/:id" element={<Meal />} />
          <Route path="/GuardianRequest" element={<GuardianRequest />} />
          <Route path="/GuardianList" element={<GuardianList />} />
          <Route path="/guardians/:guardianId" element={<GuardianDetailsPage />} />

          <Route path="/ManagerDoctorView" element={<ManagerDoctorView />} />
          <Route path="/ManagerRoomDetailsView" element={<ManagerRoomDetailsView />} />

          <Route path="/RequestContinue" element={<RequestContinue />} />


          <Route path="/GuardianDashboard/:guardianId" element={<GuardianDashboard />} />
          <Route path="/GuardianProfilePage" element={<GuardianProfilePage />} />
          <Route path="/EditGuardianProfile" element={<EditGuardianProfile />} />
          <Route path="/ElderProfile" element={<ElderProfile />} />
          <Route path="/EditElderProfile" element={<EditElderProfile />} />
          <Route
            path="/GuardianRoomPackages"
            element={<GuardianRoomPackages />}
          />
          <Route
            path="/GuardianSendRequest"
            element={<GuardianSendRequest />}
          />
          <Route path="/GuardianAddElder" element={<GuardianAddElder />} />

          <Route path="/GuardianPayments" element={<GuardianPayments />} />
          <Route path="/DoctorDashboard" element={<DoctorDashboard />} />


          <Route path="/GuardianComplain" element={<GuardianComplain />} />
          <Route path="/GuardianCaregiverRating" element={<GuardianCaregiverRating />} />





          <Route path="/Caregiverlist" element={<Caregiverlist />} />
          <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
          <Route path="/Elderslist" element={<Elderslist />} />
          {/* <Route path="" exact component={Caregiverlist} />
          <Route path="/Caregiverprofile" component={Caregiverprofile} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
