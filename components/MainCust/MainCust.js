import React from 'react'
import './MainCust.scss'

function MainCust() {
    return (
        <div className='MainCust'>
            <div className='MainCust__box' style={{
                color: '#F7E0C8',
                gridArea: '2 / 2 / 6 / 12',
            }}>
                <div className='MainCust__box--main'>
                    <h1>CUSTOMERS</h1>
                </div>
                <div className='MainCust__box--sub'>
                    <p>Design your dream look with our intuitive order placement system.</p>
                    <hr/>
                    <p>Interact with designers through bidding and select the best fit for your style.</p>
                    <hr/>
                    <p>Collaborate with designers to ensure your vision is perfectly captured.</p>
                </div>

            </div>
            <div className='MainCust__box' style={{
                gridArea: '7 / 2 / 11 / 12',
                color: '#C0F7FF',
            }}>
                <div className='MainCust__box--main'>
                    <h1>DESIGNERS</h1>
                </div>
                <div className='MainCust__box--sub'>
                    <p>Showcase your designs with a personalized portfolio.</p>
                    <hr/>
                    <p>Seamlessly manage orders from creation to delivery.</p>
                    <hr/>
                    <p>Connect with customers, discuss designs, and build relationships.</p>
                </div>
            </div>
        </div>
    )
}

export default MainCust