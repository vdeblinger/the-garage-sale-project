import React, { useState } from "react"
import { useOutletContext, useNavigate, useParams } from "react-router-dom"

const EditMyPost = () => {
    const [newTitle, setNewTitle] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newPrice, setNewPrice] = useState("")
    const navigate = useNavigate()
    const [personalPost, setPersonalPost] = useState([])
    const [randomPeoplesPosts, setRandomPeoplesPosts] = useOutletContext()
    const { id } = useParams()

    async function editPostCreated(event) {
        event.preventDefault()
        try {
            const response = await fetch(`http://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${id}`, {
                method: "PATCH",
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                post: {
                    title: newTitle,
                    description: newDescription,
                    price: newPrice
                    
                }
            })
        })
        const editedPost = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts")
        const updatedTranslation = await editedPost.json()
        console.log(updatedTranslation)
        setPersonalPost(updatedTranslation.data.posts)
        setRandomPeoplesPosts(updatedTranslation.data.posts)
        console.log(personalPost)
        navigate("/profile")

        }catch (error) {
            console.log(error)
        }
    }
    
    function editedTitle(event) {
        setNewTitle(event.target.value)
    }
    function editedDescription(event) {
        setNewDescription(event.target.value)
    }
    function editedPrice(event) {
        setNewPrice(event.target.value)
    }

    return(
        <div>
            <form onSubmit={editPostCreated} id="edit-form">
                <label>Edit Tile:</label>
                <input type="text" value={newTitle} onChange={editedTitle}></input>
                <br />
                <label>Edit Description</label>
                <input type="text" value={newDescription} onChange={editedDescription}></input>
                <br />
                <label>Edit Price:</label>
                <input type="text" value={newPrice} onChange={editedPrice}></input>
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
export default EditMyPost