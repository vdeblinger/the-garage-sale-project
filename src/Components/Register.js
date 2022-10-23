import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    async function formSubmitted (event) {
        event.preventDefault();
        try{
            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
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
            localStorage.setItem("token", data.data.token)
            navigate("/profile")
        } catch (error) {
            console.log(error)
        }
    }

    function updateUsername(event) {
        setUsername(event.target.value)
    }
    function updatePassword(event) {
        setPassword(event.target.value)
    }


    return (
        <div>
            <form onSubmit={formSubmitted} id="register-conatiner">
                <label>Enter New Username</label>
                <input type="text" value={username} onChange={updateUsername}></input>
                <br />
                <label>Enter New Password</label>
                <input type="text" value={password} onChange={updatePassword}></input>
                <br />
                <button type="submit">Register for New Account</button>
            </form>
        </div>
    )
}

export default RegisterForm