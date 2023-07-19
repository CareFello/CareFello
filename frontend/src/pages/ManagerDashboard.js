import React, { useState } from 'react'
import "../styles/Dashboard.css";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


const ManagerDashboard = () => {


  return (
    <div className='container'>
      <Header />
      <Sidebar />
    </div>
  )
}

export default ManagerDashboard
