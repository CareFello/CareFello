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

export const GuardianMenuItem = [
    {
        path: "/GuardianDashboard",
        name: "Dashboard",
        icon: <FaTh />
    },
    {
        path: "/GuardianAddElder",
        name: "Add Elder",
        icon: <AiOutlineUserAdd />,
    },
    {
        path: "/GuardianSendRequest",
        name: " Send Request",
        icon: <FaUserNurse />
    },
    {
        path: "/GuardianRoomPackages",
        name: "Packages",
        icon: <TbListDetails />
    },
    {
        path: "/GuardianPayments",
        name: "Payments",
        icon: <PaymentsIcon />
    },
    {
        path: "/GuardianComplain",
        name: "Complaints",
        icon: <VscRequestChanges />
    },
   
]
