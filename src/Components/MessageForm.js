import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const MessageForm = () => {
    const [newMessage, setNewMessage] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()

    async function createNewMessage(event) {
    event.preventDefault()
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${id}/messages`, {
                method: "POST",
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                message: {
                    content: newMessage
                }
                })
            })
            const data = await response.json()
            console.log("this is my message: ", data)
            navigate("/posts")
        }catch (error) {
            console.log(error)
        }
    }
    function updateNewMessage(event) {
        setNewMessage(event.target.value)
        console.log(updateNewMessage)
    }
    return (
        <form onSubmit={createNewMessage} id="message-container">
            <label id="message-form-text">Type Your Message Here:</label>
            <input type="text" value={newMessage} onChange={updateNewMessage} id="message-form"></input>
            <br />
            <button type="submit">POST</button>
        </form>
    )
}

export default MessageForm