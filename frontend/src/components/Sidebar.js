import React, {useState} from 'react';
import '../styles/Sidebar.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaUserNurse
}from "react-icons/fa";

import {
    AiOutlineUserAdd
}from "react-icons/ai";

import {
    BiUserCheck
}from "react-icons/bi";

import {
    TbListDetails,
    TbAlertSquareRounded,
    TbNurse
}from "react-icons/tb";

import{
    VscRequestChanges
}from "react-icons/vsc";

import{
    MdOutlineElderlyWoman
}from "react-icons/md";


import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Name from '../assets/name.png';


const Sidebar = ({children}) => {
    const[isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon:<FaTh/>
        },
        {
            path: "/",
            name: "Create Account",
            icon:<AiOutlineUserAdd/>,
            subItems: [
                { path: "/", name: "For Doctor" },
                { path: "/", name: "For Caregiver" }
              ]
        },
        {
            path: "/",
            name: "Assign Caregiver",
            icon:<BiUserCheck/>
        },
        {
            path: "/",
            name: "Room Details",
            icon:<TbListDetails/>
        },
        {
            path: "/",
            name: "Guardian Request",
            icon:<VscRequestChanges/>
        },
        {
            path: "/",
            name: "Complaints",
            icon:<TbAlertSquareRounded/>
        },
        {
            path: "/",
            name: "View Elders",
            icon:<MdOutlineElderlyWoman/>
        },
        {
            path: "/",
            name: "View Caregivers",
            icon:<TbNurse/>
        },
        {
            path: "/",
            name: "View Doctors",
            icon:<FaUserNurse/>
        },
    ]
    return(
        <div className="container">
            <div style={{width: isOpen ? "200px" : "50px"}} className='sidebar'>
                <div className='top_selection'>
                    {/* <div className='logo'><h1 style={{display: isOpen ? "block" : "none"}} className="logo"></h1></div> */}
                    <div style={{marginLeft: isOpen ? "170px" : "0px"}} className='bars'>
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            {/* <main>{children}</main> */}
        </div>
    );
};

export default Sidebar;


