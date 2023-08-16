import React from 'react'
import { ManagerMenuItem } from '../components/ManagerMenuItem'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Box } from '@mui/material'

function RequestContinue() {
    return (
        <div>
            <Header />
            <Box height={120} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={ManagerMenuItem} />

            </Box>
        </div>
    )
}

export default RequestContinue
