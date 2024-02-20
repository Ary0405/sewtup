import React, { useRef } from 'react'
import './Hero.scss'
const Hero = () => {
    return (
        <div className='Hero'>
            <div className='Hero__images'>
                {/* <img className='Hero__images--image1' src='/Images/hero/image1.png' /> */}
                {/* <img className='Hero__images--image2' src='/Images/hero/image2.png' /> */}
                {/* <img className='Hero__images--image3' src='/Images/hero/image3.png' /> */}
                {/* <img className='Hero__images--image4' src='/Images/hero/image4.png' /> */}
                {/* <img className='Hero__images--image5' src='/Images/hero/image5.png' /> */}
                {/* <img className='Hero__images--image6' src='/Images/hero/image6.png' /> */}
                <img className='Hero__images--image7' src='/Images/hero/image7.png' />
            </div>
            <div className='Hero__content'>
                <p className='Hero__content--text'>SEW'T UP</p>
                <p className='Hero__content--text2'>From Sketch to Stitch</p>
            </div>
        </div>
    )
}

export default Hero