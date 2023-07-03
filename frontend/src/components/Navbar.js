import React from 'react'
import Logo from '../assets/logo.png';
import Name from '../assets/name.png';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='left'></div>
            <img src={Logo} alt='logo' />
            <img src={Name} alt='name' />
            <div className='right'></div>
        </div>
    )
}

export default Navbar

