import React from 'react'
import Logo from '../assets/logo.png';
import Name from '../assets/name.png';
import { BiPhoneCall} from 'react-icons/bi';
import { AiOutlineMail} from 'react-icons/ai';
import '../styles/Navbar.css';
import { NavLink } from "react-router-dom";


function Navbar() {
    
    return (
        <div>
            <div className='navbar'>
                <div className='left'>
                    <img src={Logo} alt='logo' />
                    <div className='name'><i>CareFello</i></div>
                </div>

                <div className='right'>
                    <BiPhoneCall size={18} color="#05445E" />
                    <div className='phone'>+94 11790360/ +94 773111912</div>
                    <AiOutlineMail size={20} color="#05445E" />
                    <div className='mail'>
                        info@Carefello.com
                    </div>
                </div>
            </div>
            <div className='link'>
                <div className='left'></div>
                <div className='right'>
                    <NavLink to="/" exact activeClassName="active"> Home </NavLink>
                    <NavLink to="/" activeClassName="inactive"> About Us </NavLink>
                    <NavLink to="/" activeClassName="inactive"> Our Services </NavLink>
                    <NavLink to="/" activeClassName="inactive"> Contact Us </NavLink>
                    <NavLink to="/Managerdashboard" activeClassName="inactive"> Manager </NavLink>
                    <NavLink to="/Login" activeClassName="inactive"> Login </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar

