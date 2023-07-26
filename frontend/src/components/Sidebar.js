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
                <List className='sidebar-background'>
                    <ListItem className='list-item' disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/ManagerDashboard") }}>
                        <div className="sidebar-item"><ListItemButton 
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2,
                            }}
                        >
                            <ListItemIcon 
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 2 : 'auto',
                                    justifyContent: 'center',

                                }}
                            >
                                <FaTh/>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton></div>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/AddDoctor") }}>
                        <ListItemButton className="sidebar-item"
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 2 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <FaUserNurse/>
                            </ListItemIcon>
                            <ListItemText primary="Add Doctor" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/AddCaregiver") }}>
                        <ListItemButton className="sidebar-item"
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 2 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                               <TbNurse/>
                            </ListItemIcon>
                            <ListItemText primary="Add Caregiver" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem className='list-item' disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/ViewRoomDetails") }}>
                        <ListItemButton className="sidebar-item"
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 2 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <TbListDetails className='sidebar-item'/>
                            </ListItemIcon>
                            <ListItemText primary="Room Details" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/MealPlan") }}>
                        <ListItemButton className="sidebar-item"
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 2 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <GiMeal/>
                            </ListItemIcon>
                            <ListItemText primary="Meal Plans" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/RoomPackage") }}>
                        <ListItemButton className="sidebar-item"
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 2 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <MdOutlineBedroomParent/>
                            </ListItemIcon>
                            <ListItemText primary="Room Packages" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/GuardianRequest") }}>
                        <ListItemButton className="sidebar-item"
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 2 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <MdOutlineFileOpen />
                            </ListItemIcon>
                            <ListItemText primary="Guardians' Requests" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Drawer>

        </Box>
    );
}







