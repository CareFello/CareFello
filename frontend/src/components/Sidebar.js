import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useAppStore } from '../appStore';
import { useNavigate } from "react-router-dom"
import { FaTh } from 'react-icons/fa';
import { FaUserNurse } from 'react-icons/fa';
import {TbListDetails}from "react-icons/tb";
import{TbNurse}from "react-icons/tb";
import {GiMeal}from "react-icons/gi";
import {MdOutlineBedroomParent}from "react-icons/md";
import {MdOutlineFileOpen}from "react-icons/md";


import {AiOutlineUserAdd} from "react-icons/ai";
import {BiUserCheck} from "react-icons/bi";
import {VscRequestChanges} from "react-icons/vsc";
import {TbAlertSquareRounded} from "react-icons/tb";
import {MdOutlineElderlyWoman} from "react-icons/md";

import { NavLink } from 'react-router-dom';


import "../styles/Sidebar.css"



const drawerWidth = 220;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidebar() {
    const theme = useTheme();
    //const [open, setOpen] = React.useState(true);
    const updateOpen = useAppStore((state) => state.updateOpen);
    const open = useAppStore((state) => state.dopen);
    const navigate = useNavigate();


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

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box height={80} />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton >
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
               { menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className='icon'>{item.icon}</div>
                            { <div style={{display: open ? "block" : "none"}} className="link_text">{item.name}</div> }
                        </NavLink>
                    ))}

            </Drawer>

        </Box>
    );
}







