import React from 'react';
import './MainMeet.scss';
import Card from '@/components/Card/Card';

function MainMeet() {
    return (
        <div className="MainMeet">
            <div className="MainMeet__meet">
                <p className="MainMeet__meet--t1">MEET</p>
                <p className='MainMeet__meet--t2'>the</p>
                <p className='MainMeet__meet--t3'>TEAM</p>
            </div>

            <div className="MainMeet__team">
                <div className="SportsSlider">
                    <div className="SportsSlider__track">
                        <Card name="Mansa Dash" photo="/Images/LandingPage/MansaCrop.jpg" />
                        <Card name="Naisha Srivastav" photo="/Images/LandingPage/naishaCrop.jpg" />
                        <Card name="Mahika Kathuria" photo="/Images/LandingPage/mahikaCrop.jpg" />
                        <Card name="Devina Mehta" photo="/Images/LandingPage/devinaCrop.jpg" />
                        <Card name="Ira Chawla" photo="/Images/LandingPage/IraCropped.jpg" />
                        <Card name="Navya Mittal" photo="/Images/LandingPage/navyaCrop.jpg" />
                        <Card name="Ramneek K Panesar" photo="/Images/LandingPage/RamneekCrop.jpg" />
                        <Card name="Mansa Dash" photo="/Images/LandingPage/MansaCrop.jpg" />
                        <Card name="Naisha Srivastav" photo="/Images/LandingPage/naishaCrop.jpg" />
                        <Card name="Mahika Kathuria" photo="/Images/LandingPage/mahikaCrop.jpg" />
                        <Card name="Devina Mehta" photo="/Images/LandingPage/devinaCrop.jpg" />
                        <Card name="Ira Chawla" photo="/Images/LandingPage/IraCropped.jpg" />
                        <Card name="Navya Mittal" photo="/Images/LandingPage/navyaCrop.jpg" />
                        <Card name="Ramneek K Panesar" photo="/Images/LandingPage/RamneekCrop.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMeet;