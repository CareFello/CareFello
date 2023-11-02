import React from 'react'
import { FaTh } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiUserCheck } from 'react-icons/bi';
import { TbListDetails } from 'react-icons/tb';
import { VscRequestChanges } from 'react-icons/vsc';
import { TbAlertSquareRounded } from 'react-icons/tb';
import { MdOutlineElderlyWoman } from 'react-icons/md';
import { TbNurse } from 'react-icons/tb';
import { FaUserNurse } from 'react-icons/fa';
import * as Icon from "react-icons/md";

export const DoctorMenuItem = [
    {
        path: "/DoctorDashboard",
        name: "Dashboard",
        icon: <FaTh />
    },
    {
        path: "/",
        name: "Profile",
        icon: <AiOutlineUserAdd />,
        
    },
    {
        path: "",
        name: "Recent History",
        icon: <Icon.MdHistory />
    },
    {
        path: "/DoctorViewHealthTips",
        name: "Add Health Tips",
        icon: <Icon.MdPostAdd />
    },
    // {
    //     path: "/GuardianRequest",
    //     name: "Guardian Request",
    //     icon: <VscRequestChanges />
    // },
    // {
    //     path: "/MealPlan",
    //     name: "Meal Plan",
    //     icon: <TbAlertSquareRounded />
    // },
    // {
    //     path: "/AddElder",
    //     name: "View Elders",
    //     icon: <MdOutlineElderlyWoman />
    // },
    // {
    //     path: "/Caregiverlist",
    //     name: "View Caregivers",
    //     icon: <TbNurse />
    // },
    // {
    //     path: "/SendRequest",
    //     name: "View Doctors",
    //     icon: <FaUserNurse />
    // },
    // {
    //     path: "/ViewRoomDetails",
    //     name: "View Doctors",
    //     icon: <FaUserNurse />
    // },
]

