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
import PaymentsIcon from '@mui/icons-material/Payments';

const data = localStorage.getItem('myData');

export const GuardianMenuItem = [
    {
        path: `/GuardianDashboard/${data}`,
        name: "Dashboard",
        icon: <FaTh />
    },
    {
        path: `/GuardianAddElder/${data}`,
        name: "Add Elder",
        icon: <AiOutlineUserAdd />,
    },
    {
        path: `/GuardianRoomPackages`,
        name: "Packages",
        icon: <TbListDetails />
    },
    {
        path: `/ViewMealPlan`,
        name: "Meal Plans",
        icon: <TbAlertSquareRounded />
    },
    {
        path: `/GuardianSendRequest/${data}`,
        name: " Send Request",
        icon: <FaUserNurse />
    },
    {
        path: `/GuardianComplain/${data}`,
        name: "Complaints",
        icon: <VscRequestChanges />
    },

]

