import React from 'react'
import { useRouter } from 'next/router'
import './Navbar.scss'

function Navbar() {

  function scrollToSection(sectionId) {
		const section = document.getElementById(sectionId);

		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.error(`Section with ID ${sectionId} not found.`);
		}
	}
  
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/auth/login');
  };

  const handleSignUpClick = () => {
    router.push('/auth/register');
  };

  return (
    <div className='Navbar'>
        <div className='Navbar__logo'>
            SEW'TUP.
        </div>
        <div className='Navbar__links'>
            <p className='Navbar__links--link' onClick={() => { scrollToSection('home') }}>Home</p>
            <p className='Navbar__links--link' onClick={() => { scrollToSection('about') }}>About</p>
            <p className='Navbar__links--link' onClick={() => { scrollToSection('team') }}>Team</p>
            <p className='Navbar__links--link'>Terms & Conditions</p>
            <p className='Navbar__links--link'>Privacy Policy</p>
        </div>
        <div className='Navbar__buttons'>
            <p className='Navbar__buttons--button' onClick={handleLoginClick}>Login</p>
            <p className='Navbar__buttons--button' onClick={handleSignUpClick}>Register</p>
        </div>
    </div> 
  )
}

export default Navbar