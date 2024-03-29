import React, { useRef } from 'react'
import './Hero.scss'
const Hero = () => {
    return (
        <div className='Hero'>
            <div className='Hero__images'>
                <div className='Hero__images--wrapper'>
                    <img className='Hero__images--image7' src='/Images/hero/homeImage.webp' />
                    <img className='Hero__images--image8' src='/Images/hero/newImage.webp' />
                </div>
            </div>
        </div>
    )
}

export default Hero