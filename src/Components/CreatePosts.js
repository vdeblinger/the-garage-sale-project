import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useOutletContext } from "react-router-dom"

const CreateYourOwnPosts = () => {
    const [postTitle, setPostTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const navigate = useNavigate()
    const [ peoplePost, setPeoplePost] = useOutletContext()

    async function makeNewPost(event) {
        event.preventDefault()
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    post: {
                    title: postTitle,
                    description: description,
                    price: price
                    }
                })
                
            }) 
            const data = await response.json()
            console.log(data)
            setPeoplePost([...peoplePost, data.data.post])
            navigate("/posts")
        } catch (error) {
            console.log(error)
        }
    }
function updateTitle(event) {
    setPostTitle(event.target.value)
}
function updateDescription(event) {
    setDescription(event.target.value)
}
function updatePrice(event) {
    setPrice(event.target.value)
}


    
    
    return(
        <form onSubmit={makeNewPost} id="creat-new-post-container">
                <label>Title</label>
                <input type="text" value={postTitle} onChange={updateTitle}></input>
                <br />
                <label>Description</label>
                <input type="text" value={description} onChange={updateDescription}></input>
                <br />
                <label>Price</label>
                <input type="text" value={price} onChange={updatePrice}></input>
                <br />
                <button type="submit">POST</button>
        </form>
    )
}
export default CreateYourOwnPosts