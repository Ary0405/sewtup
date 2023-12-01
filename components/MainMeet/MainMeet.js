import React from 'react';
import './MainMeet.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '@/components/MainMeetCard/MainMeetCard';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function MainMeet() {
    return (
        <div className="MainMeet">
            <div className="MainMeet__meet">
                <p className="MainMeet__meet--t1">MEET</p>
                <p className='MainMeet__meet--t2'>the</p>
                <p className='MainMeet__meet--t3'>TEAM</p>
            </div>

            <div className="MainMeet__team">
                <Carousel centerMode={true} responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={2000} itemClass="carousel-team" arrows={false}>
                <Card name="Naisha Srivastav" photo="/Images/LandingPage/naishaCrop.jpg" />
                <Card name="Navya Mittal" photo="/Images/LandingPage/navyaCrop.jpg" />
                <Card name="Mahika Kathuria" photo="/Images/LandingPage/mahikaCrop.jpg" />
                <Card name="Ira Chawla" photo="/Images/LandingPage/IraCropped.jpg" />
                <Card name="Devina Mehta" photo="/Images/LandingPage/devinaCrop.jpg" />
                <Card name="Ramneek K Panesar" photo="/Images/LandingPage/RamneekCrop.jpg" />
                <Card name="Mansa Dash" photo="/Images/LandingPage/MansaCrop.jpg" />

                </Carousel>
            </div>
        </div>
    )
}

export default MainMeet;