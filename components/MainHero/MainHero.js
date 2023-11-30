import React from 'react'
import './MainHero.scss'

function MainHero() {
    return (
        <div className="MainHero">
            <div className="MainHero__sub1">
                <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <p className="MainHero--cone">WELCOME </p>&nbsp;
                    <p className="MainHero--ctwo">TO </p>
                </span>
            </div>
            <div className="MainHero__sub2">
                <p className="MainHero--cthree" >SEW'T UP &mdash; </p>
            </div>
            <div className="MainHero__sub3">
                <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <p className="MainHero--ctwo">WHERE </p>&nbsp;
                    <p className="MainHero--cone">YOUR</p>
                </span>
            </div>
            <div className="MainHero__sub4">
                At Sew't Up, we believe in the power of fashion to express individuality and <i>
                    uniqueness</i> . Our platform is not just about clothing; it's a celebration of personal style, creativity, and the artistry of design. We've created a vibrant and dynamic space where <b><i>designers and customers come together </i></b> to redefine the world of custom fashion.
            </div>
            <div className="MainHero__sub5">
                <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <p className="MainHero--cone">STYLE </p>&nbsp;
                    <p className="MainHero--cthree">TAKES </p>
                </span>
            </div>
            <div className="MainHero__sub6">
                <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <p className="MainHero--ctwo">CENTER </p>&nbsp;
                    <p className="MainHero--cthree">STAGE! </p>
                </span>
            </div>
        </div>
    )
}

export default MainHero