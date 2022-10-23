import React, { useState }  from "react"
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
async function loginRequest (event) {
    event.preventDefault()
    try{
        const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/login", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password
            }
        })
        }) 
        const data = await response.json()
        console.log("translated data: ", data)
            navigate("/profile")
        localStorage.setItem("token", data.data.token)
    } catch (error) {
        console.log(error)
    }
}
function enteredUsername(event) {
    setUsername(event.target.value)
}
function enteredPassword(event) {
    setPassword(event.target.value)
}

    return (
        <div>
        <form onSubmit={loginRequest} id="login-container">
            <label>Enter Username</label>
            <input type="text" value={username} onChange={enteredUsername}></input>
            <br />
            <label>Enter Password</label>
            <input type="text" value={password} onChange={enteredPassword}></input>
            <br />
            <button type="submit">Login</button>
        </form>
    </div>
    )
}

export default LoginForm