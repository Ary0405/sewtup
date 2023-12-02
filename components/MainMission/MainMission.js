import React from 'react'
import './MainMission.scss'

function MainMission() {
    return (
        <div>
            <div className='MainMission'>
                <div className='MainMission__sub1'>
                    <div className='MainMission__sub1--sub1'>
                        <h1>OUR MISSION -</h1>
                        <p>&nbsp; Empowering </p>
                        <p>Expression Through Customization</p>
                    </div>
                    <div className='MainMission__sub1--sub2'>
                        <img src='/down.svg' alt='down' />
                    </div>
                    <div className='MainMission__sub1--sub3'>
                        Our mission is simple but powerful: to empower individuals to express themselves authentically through their clothing. We understand that style is a deeply personal form of self-expression, and everyone deserves to wear something as unique as they are. Sew't Up is the canvas where your style story unfolds.
                        <br />
                        <br />
                        <hr />
                    </div>
                </div>
                <div className='MainMission__sub2'>
                    <div className='MainMission__sub2--sub1' style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}>
                        <h1>What Sets Us Apart - &nbsp;</h1>
                        <p>Connecting </p>
                        <p>Designers with Style Seekers</p>
                    </div>
                    <div className='MainMission__sub2--sub2'>
                        <img src='/top_right.svg' alt='down' />
                    </div>
                    <div className='MainMission__sub2--hr'>
                        <br/>
                        <hr />
                    </div>
                </div>
                <div className='MainMission__sub3'>
                    <div className='MainMission__sub3--sub1' style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}>
                        <h1>Key Features - &nbsp;</h1>
                        <p>Tailored Experiences </p>
                        <p>for Designers and Customers</p>
                    </div>
                    <div className='MainMission__sub3--sub2'>
                        <img src='/down.svg' alt='down' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainMission