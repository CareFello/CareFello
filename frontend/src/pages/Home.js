import React from 'react'
import Slide1 from '../assets/slide1.png';
import Cornish from '../assets/cornish.png';
import '../styles/Home.css';


function Home() {
    return (
        <div>
            <div className='slider'>
                <img src={Slide1} alt='slide1' />
            </div>
            <div className='container'>
                <img src={Cornish} alt='cornish' />
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
            <div>

            </div>
        </div>
    )
}

export default Home
