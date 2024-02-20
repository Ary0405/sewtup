import React from 'react'
import './MainFoot.scss'

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

                <p className="MainFoot__sub2--links" onClick={() => { scrollToSection('home') }}>HOME</p>
                <p className="MainFoot__sub2--links" onClick={() => { scrollToSection('about') }}>ABOUT</p>
                <p className="MainFoot__sub2--links">CONTACT</p>
                <p className="MainFoot__sub2--links" onClick={() => { scrollToSection('team') }}>TEAM</p>
                <p className="MainFoot__sub2--links">TERMS & CONDITIONS</p>
                <p className="MainFoot__sub2--links">PRIVACY POLICY</p>
                <p className="MainFoot__sub2--links" onClick={handleLoginClick}>LOGIN</p>

            </div>
            {/* <div className="MainFoot__sub5">
            </div> */}
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