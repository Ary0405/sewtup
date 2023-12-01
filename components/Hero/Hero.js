import React, {useRef} from 'react'
import './Hero.scss'
const Hero = () => {
    return (
        <div className='Hero'>
            <div className='Hero__images'>
                <img className='Hero__images--image1' src='/Images/hero/image1.png' />
                <img className='Hero__images--image2' src='/Images/hero/image2.png' />
                <img className='Hero__images--image3' src='/Images/hero/image3.png' />
                <img className='Hero__images--image4' src='/Images/hero/image4.png' />
                <img className='Hero__images--image5' src='/Images/hero/image5.png' />
                <img className='Hero__images--image6' src='/Images/hero/image6.png' />
            </div>
            <div className='Hero__content'>
                <p className='Hero__content--text'><span>CUSTOMIZED</span><br />CLOTHING <span>FOR YOUR</span><br /><span>UNIQUE</span> IDENTITY</p>
                <p className='Hero__content--text2'>Don't change to fit the fashion, change the fashion to fit you</p>
                <div className='Hero__content--buttons'>
                    <div className='Hero__content--buttons__button'>
                        <p className='Hero__content--buttons__button--text'>Get Customized Style</p>
                        <img src='/Images/hero/side_arrow.png' />
                    </div>
                    <div className='Hero__content--buttons__button'>
                        <p className='Hero__content--buttons__button--text'>Showcase Your Creativity</p>
                        <img src='/Images/hero/side_arrow.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero