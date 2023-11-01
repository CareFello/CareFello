import "./App.css";
import { Helmet } from "react-helmet";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Log from "./pages/Login";
import Home1 from "./components/Test";
import Login from "./components/Login";
import Reg from "./components/Register";
import Sel from "./pages/Select";
import Sel1 from "./pages/Select1";

import Email from "./pages/Email";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManagerDashboard from "./pages/ManagerDashboard";
import AddDoctor from "./pages/AddDoctor";
import Caregiverlist from "./pages/Caregiverlist";
import AddCaregiver from "./pages/AddCaregiver";
import ManagerDoctorView from "./pages/ManagerDoctorView";
import ViewRoomDetails from "./pages/ViewRoomDetails";
import MealPlan from "./pages/MealPlan";
import RoomPackage from "./pages/RoomPackage";
import GuardianRequest from "./pages/GuardianRequest";
import SendRequest from "./pages/SendRequest";
import Registration from "./pages/Registration";
import AddElder from "./pages/AddElder";
import Meal from "./pages/Meal";
import RequestContinue from "./pages/RequestContinue";
import GuardianDashboard from "./pages/Guardian/GuardianDashboard";
import ElderProfile from "./pages/Guardian/ElderProfile";
import EditElderProfile from "./pages/Guardian/EditElderProfile";
import GuardianRoomPackages from "./pages/Guardian/GuardianRoomPackages";
import GuardianSendRequest from "./pages/Guardian/GuardianSendRequest";
import GuardianAddElder from "./pages/Guardian/GuardianAddElder";
import GuardianComplain from "./pages/Guardian/GuardianComplain";
import GuardianCaregiverRating from "./pages/Guardian/GuardianCaregiverRating";
import GuardianPayments from "./pages/Guardian/GuardianPayments";
import EditGuardianProfile from "./pages/Guardian/EditGuardianProfile";
import GuardianProfilePage from "./pages/Guardian/GuardianProfilePage";

import GuardianAddDailyTask from "./pages/Guardian/GuardianAddDailyTask";


import GuardianViewHealthTips from "./pages/Guardian/GuardianViewHealthTips";

import ManagerGuardianProfile from "./pages/ViewGuardianProfile";
import GuardianList from "./pages/GuardianList";
import ManagerRoomDetailsView from "./pages/ManagerRoomDetailsView";
import ViewEldersList from "./pages/ViewEldersList";
import Test1 from "./pages/Test1";
import Image from "./pages/Image";
import Image1 from "./pages/Image1";
import Image2 from "./pages/Image2";




import DonationRequest from "./pages/DonationRequest";


import ViewMealPlan from "./pages/viewMealPlan";
import ViewMeal from "./pages/viewMeal";



import GuardianDetailsPage from "./components/GuardianDetailPage";
import Caregiverprofile from "./pages/caregiverprofile";
import Elderslist from "./pages/Elderslist";
import ViewGuardianProfile from "./pages/ViewGuardianProfile";
import ViewComplaints from "./pages/ViewComplaints";


import ViewDonationRequests from "./pages/ViewDonationRequests";

import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorViewEldersList from "./pages/DoctorViewEldersList";

import DoctorViewHealthTips from "./pages/Doctor/DoctorViewHealthTips";

import DoctorUpdateAvailablity from "./pages/DoctorUpdateAvailablity";
import DoctorProfile from "./pages/DoctorProfile";



import DoctorViewHistory from "./pages/DoctorViewHistory";
// import Caregiverprofile from './pages/caregiverprofile';

import CaregiverViewReport from "./pages/CaregiverViewReport";
import CaregiverCalender from "./pages/CaregiverCalender";

// import CheckupEldersList from "./pages/CheckupEldersList";

// import CaregiverDashboard from "./pages/CaregiverDashboard";
import ViewAssignedRooms from "./pages/ViewAssignedElders";

import ElderDetails from "./pages/ElderDetails";

import ElderProfileCaregiverView from "./pages/ElderProfileCaregiverView";



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


          <Route path="/image" element={<Image />} />
          <Route path="/image1" element={<Image1 />} />
          <Route path="/image2" element={<Image2 />} />

          <Route path="/Test1" element={<Test1 />} />


          <Route path="/ViewMealPlan" element={<ViewMealPlan />} />
          <Route path="/ViewMeal/:id" element={<ViewMeal />} />
          <Route path="/Caregiverprofile" element={<Caregiverprofile />} />

          <Route path="/DonationRequest" element={<DonationRequest/>} />


          <Route path="/sel" element={<Sel />} />
          <Route path="/sel1" element={<Sel1 />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/ManagerDashboard" element={<ManagerDashboard />} />
          <Route path="/ViewGuardianProfile" element={<ViewGuardianProfile />} />
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
          <Route path="/ViewEldersList" element={<ViewEldersList />} />
          <Route path="/RequestContinue/:elderid" element={<RequestContinue />} />


          <Route path="/GuardianDashboard/:guardianId" element={<GuardianDashboard />} />
          <Route path="/GuardianProfilePage/:guardianId" element={<GuardianProfilePage />} />
          <Route path="/EditGuardianProfile" element={<EditGuardianProfile />} />
          <Route path="/GuardianAddDailyTask" element={<GuardianAddDailyTask />} />


          <Route path="//elder/:elderId" element={<ElderProfile />} />
          <Route path="/EditElderProfile" element={<EditElderProfile />} />

          <Route path="/GuardianRoomPackages" element={<GuardianRoomPackages />} />
          <Route path="/GuardianViewHealthTips" element={<GuardianViewHealthTips />} />


          <Route
            path="/GuardianSendRequest/:guardianId"
            element={<GuardianSendRequest />}
          />
          <Route path="/GuardianAddElder/:guardianId" element={<GuardianAddElder />} />

          <Route path="/GuardianPayments/:guardianId" element={<GuardianPayments />} />




          <Route path="/GuardianComplain/:guardianId" element={<GuardianComplain />} />

          <Route path="/GuardianPayments/:guardianId" element={<GuardianPayments />} />





          <Route path="/GuardianCaregiverRating" element={<GuardianCaregiverRating />} />
          <Route path="/Caregiverlist" element={<Caregiverlist />} />
          <Route path="/Elderslist" element={<Elderslist />} />


          <Route path="/ViewComplaints" element={<ViewComplaints />} />
          <Route path="/ViewDonationRequests" element={<ViewDonationRequests />} />

          <Route path="/DoctorDashboard/:doctorId" element={<DoctorDashboard />} />
          <Route path="/DoctorViewEldersList" element={<DoctorViewEldersList />} />
          <Route path="/DoctorUpdateAvailablity" element={<DoctorUpdateAvailablity />} />
          <Route path="/DoctorProfile" element={<DoctorProfile />} />


          <Route path="/DoctorViewHistory" element={<DoctorViewHistory/>} />
          <Route path="/CaregiverViewReport" element={<CaregiverViewReport />} />
          <Route path="/CaregiverCalender" element={<CaregiverCalender />} />

          <Route path="/DoctorViewHistory" element={<DoctorViewHistory />} />
          <Route path="/ViewAssignedElders" element={<ViewAssignedRooms />} />

          <Route path="/ElderDetails" element={<ElderDetails />} />



          <Route path="/DoctorViewHealthTips" element={<DoctorViewHealthTips />} />


          <Route path="/ElderprofileCaregiverView" element={<ElderProfileCaregiverView />} />




        </Routes>
      </Router>
    </div>
  );
}

export default App;
