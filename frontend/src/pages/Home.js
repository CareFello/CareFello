import React, { useState } from 'react'
import Background from '../assets/background.png';
import healthcare from '../assets/healthcare.png';
// GiHealthNormal
import accomadation from '../assets/accomadation.png';
import Relax from '../assets/relax.png';
import Elders from '../assets/elders.png';
import About from '../assets/about.png';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CountUp, { useCountUp } from 'react-countup';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Footer from '../components/HomepageFooter';
// import Gallery from '../components/Gallery';
import ContactUs from '../components/ContactUs';
import Location from '../assets/location_logo.png'
import Phone from '../assets/phone_logo.png'
import Mail from '../assets/mail_logo.png'

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
        <div className='home'>
            < div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: 700 }}>
            <Navbar />

            <div className='slider'>

            </div>
            <div className='container'>
                <div className='quote-box'>
                    <div className='quote'>
                        <p>
                            "Caring about others, running the risk of feeling, and leaving an impact on people, brings happiness."</p>  
                            <br></br>
                            – Harold Kushner
                            
                    </div>
                </div>
            </div>
            <div className='grid'>
                <div className='box'>
                    <img src={healthcare} alt='healthcare' />
                    <div className='topic'>Health Care</div>
                    <p>Caregiver Protection &<br></br>
                        Individual Attention<br></br>
                        Doctors’ Visit<br></br>
                        On Call Doctor<br></br>
                        Healthy Foods</p>
                </div>
                <div className='box'>
                    <img src={accomadation} alt='accomadation' />
                    <div className='topic'>Accomodation</div>
                    <p>Both Single & Shared<br></br>
                        Rooms<br></br>
                        Attached Bathroom<br></br>
                        Room TV<br></br>
                        Room Services</p>
                </div>
                <div className='box'>
                    <img src={Relax} alt='relax' />
                    <div className='topic'>Relax Environment</div>
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
                        CareFello, Elder Care System  is determined to create a nurturing environment that enhances the quality of life for elderly 
                        individuals with intellectual and developmental disabilities by providing community-based personalized residential support services.
                         We are committed in making a difference in the lives of individuals we serve through our trained and dedicated staff. 
                         We strongly believe everyone have a God given potential and can do better with the right structure, right personnel, 
                         and the right resources to thrive. Our Mission is guided by our Core Values: Opportunity, independence, Caring, 
                         Respect, Faith, Quality and Trust.
                        </p>
                    </div>
                    <div className='image'>
                        <img src={About} alt='about' />
                    </div>
                </div>
            </div>
            <br></br>
            {/* <div style={{ backgroundImage: `url(${Elders})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: 500 }}> */}

            <div className='countup'>
                <div className='card01'>
                    <Card sx={{ maxWidth: 500 }}>
                    <CardContent>
                        <h4><CountUp end={1000} enableScrollSpy /> + <br></br>Satisfied Users</h4>
                    </CardContent>
                    </Card>
                </div>
                <div className='card02'>
                    <Card>
                    <CardContent>
                        <h4><CountUp end={50} enableScrollSpy /> + <br></br>working Staff</h4>
                    </CardContent>
                    </Card>
                </div>
                <div className='card03'>
                    <Card>
                    <CardContent>
                        <h4><CountUp end={15} enableScrollSpy /> + <br></br>Years of Experience</h4>
                    </CardContent>
                    </Card>
                </div>
            </div>

                {/* <div className='countup'>
                    <h4><CountUp end={1000} enableScrollSpy /> + <br></br>Satisfied Users</h4>
                    <h4><CountUp end={50} enableScrollSpy /> + <br></br>working Staff</h4>
                    <h4><CountUp end={15} enableScrollSpy /> + <br></br>Years of Experience</h4>
                </div> */}
            {/* </div> */}
            {/* <div className='gallery'> */}
            {/* <Gallery/> */}
                {/* <h2>Gallery</h2>
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
                </div> */}
            {/* </div> */}
            <div className='contactus'>
                <h2>Contact Us</h2>
                <ContactUs />
            </div>
            <div className='contact'>
                <div className='location'>
                    <img src={Location} alt='location' />
                    <h6>No.23 , Garden Rd, Dehiwala</h6>
                </div>
                <div className='phone'>
                    <img src={Phone} alt='phone' />
                    <div className='phone_no'>
                    <h6>+ 94 117901360</h6>
                    <h6>+ 94 117901360</h6>
                    </div>
                </div>
                <div className='mail'>
                    <img src={Mail} alt='mail' />
                    <h6>info@Carefello.com</h6>
                </div>
            </div>
            <Footer />
            </div>
        </div >
        
        
    )
}

export default Home
