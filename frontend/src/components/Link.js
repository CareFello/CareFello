import React from 'react'
import '../styles/link.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Link() {
    return (
        <div className='link'>
            <div className='right'>
                <a href='#'>Home</a>
                <a href='#'>About Us</a>
                <a href='#'>Our Services</a>
                <a href='#'>Gallery</a>
                <a href='#'>Contact Us</a>
                <a href='#'>LogIn</a>
            </div>
        </div>
    )
}

export default Link
