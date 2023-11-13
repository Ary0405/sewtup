import { signup } from "@/operations/user.fetch"
import { useState } from "react"

export default function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("USER")
    const handleSignUp = async () => {
        if (name === '' || email === '' || password === '') {
            alert('Please fill in all the fields');
            return;
        }
        const data = {
            "name": name,
            "email": email,
            "password": password,
            "role": role,
        }
        try {
            const response = await signup(data);
            if (response.status === 200) {
                alert('Signed Up successfully');
                window.location.reload();
            } else {
                alert('Internal Server Error');
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <select onChange={(e) => setRole(e.target.value)} >
                <option value="USER" >CUSTOMER</option>
                <option value="DESIGNER">DESIGNER</option>
            </select>
            <button onClick={() => handleSignUp()} >Sign Up</button>
        </div>
    )
}