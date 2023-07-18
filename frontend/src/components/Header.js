import React from 'react'
import Logo from "../assets/logo.png";
import Name from "../assets/name.png"
import Profile from "../assets/profile.png"
                    

import '../styles/Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='empty'></div>
            <div className='name' ><h4>Achala Punsara</h4></div>
            <div className='profile' ></div>
        </div>
    )
}

export default Header


