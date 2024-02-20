import React from 'react'
import './MainFoot.scss'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

function MainFoot() {

    const handleLoginClick = () => {
        router.push('/auth/login');
    };

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Section with ID ${sectionId} not found.`);
        }
    }

    return (
        <div className='MainFoot'>
            <div className="MainFoot__sub1" style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <p className='MainFoot--text'>GET STARTED !</p>
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

                <p className="MainFoot__sub2--link1" onClick={() => { scrollToSection('home') }}>HOME</p>
                <p className="MainFoot__sub2--links" onClick={() => { scrollToSection('about') }}>ABOUT</p>
                <p className="MainFoot__sub2--links">CONTACT</p>
                <p className="MainFoot__sub2--links" onClick={() => { scrollToSection('team') }}>TEAM</p>
                <p className="MainFoot__sub2--links">TERMS & CONDITIONS</p>
                <p className="MainFoot__sub2--links">PRIVACY POLICY</p>
                <p className="MainFoot__sub2--links" onClick={handleLoginClick}>LOGIN</p>

            </div>
            {/* <div className="MainFoot__sub5">
            </div> */}
            {/* <div className="MainFoot__sub6">
                Design by WannabeEngineers
            </div> */}
            <div className="MainFoot__sub7">
                <div className="MainFoot__sub7--sub4">
                    <div className='MainFoot__sub7--sub4--sub1'>
                        IF YOU'VE GOT A STORY THAT  NEEDS TO BE<br /> TOLD, PLEASE GET IN TOUCH!
                    </div>
                    <div className='MainFoot__sub7--sub4--sub2'>
                        WE CAN'T WAIT TO HEAR FROM YOU
                    </div>
                    <Link href="mailto:sewwtup@gmail.com">
                        <div className='MainFoot__sub7--sub4--sub3'>
                            <u>
                                COPY EMAIL ADDRESS
                            </u>
                        </div>
                    </Link>
                </div>
                <div className="MainFoot__sub7--sub8">
                    <p className="MainFoot__sub7--sub8--text">GET IN TOUCH WITH US!</p>
                    <div className="MainFoot__sub7--sub8--sub9">
                        <Link href="https://www.instagram.com/sew.t_up/">
                            <div className="MainFoot__sub7--sub8--sub9--icon">
                                <FaInstagram />
                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com/company/sewt-up/about/">
                            <div className="MainFoot__sub7--sub8--sub9--icon">
                                <FaLinkedin />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFoot