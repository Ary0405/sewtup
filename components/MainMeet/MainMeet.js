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
                        <Card name="Mansa Dash" photo="/Images/LandingPage/MansaCrop.webp" />
                        <Card name="Naisha Srivastav" photo="/Images/LandingPage/naishaCrop.webp" />
                        <Card name="Mahika Kathuria" photo="/Images/LandingPage/mahikaCrop.webp" />
                        <Card name="Devina Mehta" photo="/Images/LandingPage/devinaCrop.webp" />
                        <Card name="Ira Chawla" photo="/Images/LandingPage/IraCropped.webp" />
                        <Card name="Navya Mittal" photo="/Images/LandingPage/navyaCrop.webp" />
                        <Card name="Ramneek Panesar" photo="/Images/LandingPage/RamneekCrop.webp" />
                        <Card name="Mansa Dash" photo="/Images/LandingPage/MansaCrop.webp" />
                        <Card name="Naisha Srivastav" photo="/Images/LandingPage/naishaCrop.webp" />
                        <Card name="Mahika Kathuria" photo="/Images/LandingPage/mahikaCrop.webp" />
                        <Card name="Devina Mehta" photo="/Images/LandingPage/devinaCrop.webp" />
                        <Card name="Ira Chawla" photo="/Images/LandingPage/IraCropped.webp" />
                        <Card name="Navya Mittal" photo="/Images/LandingPage/navyaCrop.webp" />
                        <Card name="Ramneek Panesar" photo="/Images/LandingPage/RamneekCrop.webp" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMeet;