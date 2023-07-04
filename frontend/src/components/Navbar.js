import React from 'react'
import Logo from '../assets/logo.png';
import Name from '../assets/name.png';
import Call from '../assets/call.png';
import Email from '../assets/email.png';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='left'>
                <img src={Logo} alt='logo' />
                <img src={Name} alt='name' />
            </div>

            <div className='right'>
                <img src={Call} alt='call' />
                <h4>+94 11790360/ +94 773111912</h4>
                <img src={Email} alt='email' />
                <h4>info@Carefello.com</h4>
            </div>
        </div>
    )
}

export default Navbar

