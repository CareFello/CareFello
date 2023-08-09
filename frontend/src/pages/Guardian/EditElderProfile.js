import React from 'react'
import Sidebar from '../../components/Sidebar'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { CardActionArea } from '@mui/material';
import Header from '../../components/Header'

const EditElderProfile = () => {
    return (
      <div className='profile'>
        <Header />
        <Box height={80} />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
        </Box>
        </div>
    )
}
export default EditElderProfile
