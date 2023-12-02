import React from 'react'
import './MainFoot.scss'

function MainFoot() {
    return (
        <div className='MainFoot'>
            <div className="MainFoot__sub1" style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                LET'S COLLABORATE
            </div>
            <div className="MainFoot__sub3"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                ©2023 Sew't Up
            </div>
            <div className="MainFoot__sub2">

                <p>HOME</p>
                <p>ABOUT</p>
                <p>CONTACT</p>
                <p>TEAM</p>
                <p>TERMS & CONDITIONS</p>
                <p>PRIVACY POLICY</p>
                <p>LOGIN</p>

            </div>
            <div className="MainFoot__sub5">
            </div>
            <div className="MainFoot__sub6">
                Design by WannabeEngineers
            </div>
            <div className="MainFoot__sub4">
                <div className='MainFoot__sub4--sub1'>
                    IF YOU'VE GOT A STORY THAT  NEEDS TO BE<br /> TOLD, PLEASE GET IN TOUCH!
                </div>
                <div className='MainFoot__sub4--sub2'>
                    WE CAN'T WAIT TO HEAR FROM YOU
                </div>
                <div className='MainFoot__sub4--sub3'>
                    <u>
                        COPY EMAIL ADDRESS
                    </u>
                </div>
            </div>
        </div>
    )
}

export default MainFoot