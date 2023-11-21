import { useState } from "react"
import { login } from "@/operations/user.fetch"
import { useRouter } from "next/router"

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = async () => {
        if (email === '' || password === '') {
            alert('Please fill all fields')
            return;
        }

        const data = {
            email,
            password
        }

        const response = await login(data)

        if (response.status === 200) {
            alert('Login successful')
            router.push('/')
        } else {
            alert(response.message)
        }


    }

    return (
        <>
            <div>Login</div>
            <div>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}

export default Login