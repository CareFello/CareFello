import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import { GuardianMenuItem } from '../../components/GuardianMenuItem'

import '../../styles/Guardian/EditElderProfile.css';
const EditElderProfile = () => {
    return (
      <div className='profile'>
        <Header />
        <Box height={80} />
        <Box sx={{ display: 'flex' }}>
        <Sidebar menuItems={GuardianMenuItem} />
        {/* add more */}
        </Box>
        </div>
    )
}
export default EditElderProfile
