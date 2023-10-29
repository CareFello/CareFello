import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import dayjs from 'dayjs';
import { DoctorMenuItem } from '../components/DoctorMenuItem'

function DoctorViewHistory() {
    const [expanded, setExpanded] = useState(Array(2).fill(false)); // Array of booleans for each card

    const handleExpand = (index) => {
        const updatedExpanded = [...expanded];
        updatedExpanded[index] = true;
        setExpanded(updatedExpanded);
    };

    const handleCollapse = (index) => {
        const updatedExpanded = [...expanded];
        updatedExpanded[index] = false;
        setExpanded(updatedExpanded);
    };

    const cards = [
        {
            title: 'Today',
            date: dayjs().format('DD/MM/YYYY'),
            elders: [
                {
                    name: 'Harishchandra Jeyaweera',
                    nic: '451012339V',
                    details: '50mg petphormin per day',
                },
                {
                    name: 'Sulochana Aloka',
                    nic: '754122235V',
                    details: 'Selexit 100mg Antibiotic for 3 times per day',
                },
                {
                    name: 'Periyasamy Sivakumar',
                    nic: '775822698V',
                    details: 'Vitamin C for 2 times per day',
                },
            ],
        },
        {
            title: 'Yesterday',
            date: dayjs().subtract(1, 'day').format('DD/MM/YYYY'),
            elders: [
                {
                    name: 'Some Elder',
                    nic: '123456789X',
                    details: 'Some medication',
                },
                {
                    name: 'Another Elder',
                    nic: '987654321Y',
                    details: 'Another medication',
                },
            ],
        },
    ];

    return (
        <div className='dashboard'>
            <Header />
            <Box height={80} />

            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={DoctorMenuItem} />
                <Box sx={{ width: '100%', height: '100%', p: 2 }}>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            item
                            xs={12}
                            sx={{
                                backgroundColor: '#ffffff',
                                width: '75%',
                                height: '10%',
                                marginBottom: '20px',
                                p: 3,
                                alignItems: 'center',
                                boxShadow: 1,
                                mx: 'auto',
                            }}
                        >
                            <CardActionArea
                                onMouseEnter={() => handleExpand(index)}
                                onMouseLeave={() => handleCollapse(index)}
                            >
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="h6" color="textSecondary">
                                            {card.title}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                            {card.date}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary" style={{ opacity: 0.5 }}>
                                            {card.elders.length} Elders
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                            {expanded[index] && (
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Elder Name</TableCell>
                                                <TableCell>NIC No</TableCell>
                                                <TableCell>Updated Medical Details</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {card.elders.map((elder, i) => (
                                                <TableRow key={i}>
                                                    <TableCell>{elder.name}</TableCell>
                                                    <TableCell>{elder.nic}</TableCell>
                                                    <TableCell>{elder.details}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}
                        </Card>
                    ))}
                </Box>
            </Box>
        </div>
    );
}

export default DoctorViewHistory;
