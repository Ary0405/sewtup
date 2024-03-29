import React, { useEffect } from 'react'
import '@/styles/routes/auth/register.scss'
import { signup } from '@/operations/user.fetch'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { isPhone } from '@/utils/validator'


function register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirm] = useState("")
    const [phone, setPhone] = useState("")
    const [role, setRole] = useState("USER")
    const router = useRouter();

    const handleSignUp = async () => {
        if (name === '' || email === '' || password === '' || phone === '') {
            alert('Please fill in all the fields');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        if (!isPhone(phone)) {
            alert('Invalid Phone Number');
            return;
        }
        const data = {
            "name": name,
            "email": email,
            "password": password,
            "role": role,
            "phone": phone
        }
        try {
            const response = await signup(data);
            if (response.status === 200) {
                alert('Signed Up successfully');
                router.push('/auth/login');
            } else {
                alert('Internal Server Error');
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='Register'>
            <div className='Register__form'>
                <h1>Welcome</h1>
                <p>Sign up and get to access a world of<br /> convenience.</p>
                <div className='toggle'>
                    <label>Customer</label>
                    <label className="switch">
                        <input type="checkbox" onChange={(e) => setRole(e.target.checked ? "DESIGNER" : "USER")} />
                        <span className="slider round"></span>
                    </label>
                    <label>Designer</label>
                </div>
                <input type="text" placeholder="Name" style={{color: 'white', paddingLeft: '10px'}} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Email" style={{color: 'white', paddingLeft: '10px'}} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Phone Number" style={{color: 'white', paddingLeft: '10px'}} onChange={(e) => setPhone(e.target.value)} />
                <input type="password" placeholder="Password" style={{color: 'white', paddingLeft: '10px'}} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" style={{color: 'white', paddingLeft: '10px'}} onChange={(e) => setConfirm(e.target.value)} />
                <button onClick={handleSignUp}>Sign Up</button>
                <p>Already have an account? <a href="/auth/login">Login</a></p>
                <p>By signing up, you agree to our <a href="#"> <br />Terms of Use </a>and <a href="#">Privacy Policy</a></p>
            </div>
            <div className='Register__backimg'></div>'
        </div>
    )
}

export default register