import React from 'react';
import './MainMeet.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from '@/components/MainMeetCard/MainMeetCard';

function MainMeet() {
    return (
        <div className="MainMeet">
            <div className="MainMeet__meet">
                <p className="MainMeet__meet--t1">MEET</p>
                <p className='MainMeet__meet--t2'>the</p>
                <p className='MainMeet__meet--t3'>TEAM</p>
            </div>
            <div className="MainMeet__team">
                <Carousel autoPlay infiniteLoop>
                    <Card name="Name 1" photo="/path/to/photo1.jpg" />
                    <Card name="Name 2" photo="/path/to/photo2.jpg" />
                    <Card name="Name 3" photo="/path/to/photo3.jpg" />
                    <Card name="Name 4" photo="/path/to/photo4.jpg" />
                    <Card name="Name 5" photo="/path/to/photo5.jpg" />
                </Carousel>
            </div>
        </div>
    )
}

export default MainMeet;