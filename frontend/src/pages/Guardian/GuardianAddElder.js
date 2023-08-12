import React from 'react'
import { GuardianMenuItem } from '../../components/GuardianMenuItem'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { Box } from '@mui/material'

function GuardianAddElder() {
    return (
        <div>
            <Header />
            <Box height={120} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={GuardianMenuItem} />

            </Box>
        </div>
    )
}

export default GuardianAddElder
