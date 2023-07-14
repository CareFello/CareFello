import React from 'react'
import '../styles/Footer.css';
import playstoreLogo from '../assets/playstoreLogo.png';
import AppstoreLogo from '../assets/AppstoreLogo.png';
import address from '../assets/location.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
import fb from '../assets/fbLogo.png';
import insta from '../assets/insterLogo.png';
import twitter from '../assets/twitterLogo.png';
import utube from '../assets/youtubeLogo.png';


function HomepageFooter() {
  return (
    <div className='footer'>
        <div className='left'>
            <div><img src={playstoreLogo} alt='logo' /></div>
            <div><img src={AppstoreLogo} alt='logo2' /></div>
        </div>
        <div className='middle'>
            <div className='address'>
                <img src={address} alt='location' />
                <p>No.23 , Garden Rd, Dehiwal</p>
            </div>
            <div className='address'>
                <img src={phone} alt='location' />
                <p>+ 94 117901360 / +94 773100912</p>
            </div>
            <div className='address'>
                <img src={mail} alt='location' />
                <p>info@Carefello.com</p>
            </div>
        </div>
        <div className='Right'>
            <div>
                <p>Follow Us :</p>
                <div className='social'>
                    <img src={fb}/>
                    <img src={insta}/>
                    <img src={utube}/>
                    <img src={twitter}/>
                </div>
                <p>CareFello © 2023. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default HomepageFooter