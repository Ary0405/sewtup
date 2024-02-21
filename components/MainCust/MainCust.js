import React from 'react'
import './MainCust.scss'

function MainCust() {
    return (
        <div className='MainCust'>
            <div className='MainCust__header'>
                <p className='MainCust_header--text1'>QUALITY CUSTOMIZATION IS OUR MOTTO</p>
                <p className='MainCust_header--text2'>Sew’t Up is a collaborative space for designers and customers for the creation of customized clothing. </p>\
            </div>

            <div className='MainCust_customdes'>
                <p className='MainCust_customdes--heading'>CUSTOMERS</p>
                <div className='MainCust_customdes--content'>
                    <div className='MainCust_customdes--content--text'>
                        <p>Through our website customers can place orders for clothes that they want. They can choose from a large number of quality designers to give life to their vision by getting their clothes made exactly the way they want them.</p>
                    </div>

                    <img className='MainCust_customdes--content--image' src='/Images/arrow.png' alt='customer' />
                </div>
            </div>
        
            <div className='MainCust_customdes'>
                <p className='MainCust_customdes--heading'>DESIGNERS</p>
                <div className='MainCust_customdes--content'>
                    <div className='MainCust_customdes--content--text'>
                        <p>We give fashion designers and even fashion designing students a platform to showcase their talent and grow their business. </p>
                    </div>
                    <img className='MainCust_customdes--content--image' src='/Images/arrow.png' alt='customer' />
                </div>
            </div>
            <div className='MainCust_trustimage'>
                <img className='MainCust_trustimage--image1' src='/Images/trust.png' alt='trust' />
            </div>
        </div>
    )
}

export default MainCust