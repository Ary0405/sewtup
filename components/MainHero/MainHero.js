import React from 'react'
import './MainHero.scss'

function MainHero() {
    return (
        <div className="MainHero">
            <div className="MainHero__header" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p className='MainHero__header--text'>WELCOME TO SEW'T UP</p>
            </div>
            <div className="MainHero__content" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p className='MainHero__content--text'>Sew't Up is a website for both fashion designers and customers</p>
                <p className='MainHero__content--text'>With us you can get your clothes made your way .</p>
            </div>
        </div>
    )
}

export default MainHero