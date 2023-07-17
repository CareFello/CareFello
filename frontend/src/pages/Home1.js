import React from 'react'
import Background from '../assets/background.png';
import Health from '../assets/health_icon.png';
import Room from '../assets/room.png';
import Relax from '../assets/relax.png';
import About from '../assets/about.png';
import '../styles/Home.css';
import Navbar from '../components/Navbar';


function Home() {
    return (

        < div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: 700 }}>
            <Navbar />
            <div className='slider'>

            </div>
            <div className='container'>
                <div className='quote-box'>
                    <div className='quote'>
                        <p>
                            “Offering care means being a companion, not a superior.<br></br>
                            It doesn’t matter whether the person we are caring for is<br></br>
                            experiencing cancer, the flu, dementia, or grief.<br></br>
                            -Cornish</p>
                    </div>
                </div>
            </div>
            <div className='grid'>
                <div className='box'>
                    <img src={Health} />
                    <h4>Health Care</h4>
                    <p>Caregiver Protection &<br></br>
                        Individual Attention<br></br>
                        Doctors’ Visit<br></br>
                        On Call Doctor<br></br>
                        Healthy Foods</p>
                </div>
                <div className='box'>
                    <img src={Room} />
                    <h4>Accomodation</h4>
                    <p>Both Single & Shared<br></br>
                        Rooms<br></br>
                        Attached Bathroom<br></br>
                        Room TV<br></br>
                        Room Services</p>
                </div>
                <div className='box'>
                    <img src={Relax} />
                    <h4>Relax Environment</h4>
                    <p>
                        Large Garden Area &<br></br>
                        Sitting Rooms<br></br>
                        Separate Balcony<br></br>
                        Friendly Staff
                    </p>
                </div>
            </div>
            <div className='About'>
                <h2>About Us</h2>
                <div className='Aboutus'>
                    <div className='text'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultriciesem.

                            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, at vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                        </p>
                    </div>
                    <div className='image'>
                        <img src={About} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
