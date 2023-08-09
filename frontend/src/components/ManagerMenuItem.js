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

export const ManagerMenuItem = [
    {
        path: "/ManagerDashboard",
        name: "Dashboard",
        icon: <FaTh />
    },
    {
        path: "/AddDoctor",
        name: "Add Doctor",
        icon: <AiOutlineUserAdd />,
        subItems: [
            { path: "/", name: "For Doctor" },
            { path: "/", name: "For Caregiver" }
        ]
    },
    {
        path: "/AddCaregiver",
        name: "Add Caregiver",
        icon: <BiUserCheck />
    },
    {
        path: "/RoomPackage",
        name: "Packages",
        icon: <TbListDetails />
    },
    {
        path: "/GuardianRequest",
        name: "Guardian Request",
        icon: <VscRequestChanges />
    },
    {
        path: "/MealPlan",
        name: "Meal Plan",
        icon: <TbAlertSquareRounded />
    },
    {
        path: "/",
        name: "View Elders",
        icon: <MdOutlineElderlyWoman />
    },
    {
        path: "/Caregiverlist",
        name: "View Caregivers",
        icon: <TbNurse />
    },
    {
        path: "/SendRequest",
        name: "View Doctors",
        icon: <FaUserNurse />
    },
]

