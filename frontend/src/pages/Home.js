import React, { useState } from 'react'
import Background from '../assets/background.png';
import Health from '../assets/health_icon.png';
import Room from '../assets/room.png';
import Relax from '../assets/relax.png';
import Elders from '../assets/elders.png';
import About from '../assets/about.png';
import '../styles/Home.css';
import Navbar from '../components/Navbar';



import CountUp, { useCountUp } from 'react-countup';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Footer from '../components/HomepageFooter';

const images = [Background, Background, Background, Background, Background, Background, Background, Background, Background]




function Home() {
    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });
    const [data, setData] = useState({ img: '', i: 0 })
    const viewImage = (img, i) => {
        setData({ img, i })
    };
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
                    <img src={Health} alt='health care' />
                    <h4>Health Care</h4>
                    <p>Caregiver Protection &<br></br>
                        Individual Attention<br></br>
                        Doctors’ Visit<br></br>
                        On Call Doctor<br></br>
                        Healthy Foods</p>
                </div>
                <div className='box'>
                    <img src={Room} alt='room' />
                    <h4>Accomodation</h4>
                    <p>Both Single & Shared<br></br>
                        Rooms<br></br>
                        Attached Bathroom<br></br>
                        Room TV<br></br>
                        Room Services</p>
                </div>
                <div className='box'>
                    <img src={Relax} alt='relax' />
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
                        <img src={About} alt='about' />
                    </div>
                </div>
            </div>
            <br></br>
            <div style={{ backgroundImage: `url(${Elders})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: 500 }}>

                <div className='countup'>
                    <h4><CountUp end={1000} enableScrollSpy /> + <br></br>Satisfied Users</h4>
                    <h4><CountUp end={50} enableScrollSpy /> + <br></br>working Staff</h4>
                    <h4><CountUp end={15} enableScrollSpy /> + <br></br>Years of Experience</h4>
                </div>
            </div>
            <div className='gallery'>
                <h2>Gallery</h2>
                {
                    data.img &&
                    <div style={{
                        width: '100%',
                        height: '100vh',
                        background: 'black',
                        position: 'fixed',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                    }}>
                        <img src={data.img} />
                    </div>
                }
                <div style={{ padding: '50px 100px' }}>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    >
                        <Masonry gutter="18px">
                            {images.map((images, i) => (
                                <img
                                    key={i}
                                    src={images}
                                    style={{ width: "100%", display: "block", cursor: 'pointer' }}
                                    alt=""
                                    onClick={() => viewImage(images, i)}
                                />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>

            
        </div>

            <div className='contactus'>

            </div>
            <Footer />
        </div >

    )
}

export default Home
