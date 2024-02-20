import React from 'react'
import './Navbar.scss'
import { useRouter } from 'next/router'

function Navbar() {

  const router = useRouter()

  return (
    <div className='Navbar'>
        <div className='Navbar__logo large'>
            SEW'TUP.
        </div>
        <div className='Navbar__logo mobile'>
            S.
        </div>
        <div className='Navbar__links'>
            <p className='Navbar__links--link'>Home</p>
            <p className='Navbar__links--link'>About</p>
            <p className='Navbar__links--link'>Team</p>
            <p className='Navbar__links--link'>Terms & Conditions</p>
            <p className='Navbar__links--link'>Privacy Policy</p>
        </div>
        <div className='Navbar__buttons'>
            <p className='Navbar__buttons--button'
                onClick={() => router.push('/auth/login')}
            >Login</p>
            <p className='Navbar__buttons--button'
                onClick={() => router.push('/auth/register')}
            >Register</p>
        </div>
    </div>
  )
}

export default Navbar