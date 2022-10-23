import React, { useState, useEffect } from "react"
import { useOutletContext, useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const ProfilePage = () => {
    const [messages, setMessages] = useState([])
    const [personalPost, setPersonalPost] = useState([])
    const [peoplePost, setPeoplePost] = useOutletContext()
    const navigate = useNavigate()
    const [filteredArray, setFilteredArray] = useState([])

    useEffect(() => {
        if (personalPost.length) {

        
        const newArray = personalPost.filter((post) => {
            return post.active
        })
        setFilteredArray(newArray)
    }
    }, [personalPost])
    


    useEffect(() => {
        async function profileData (event) {
            
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                })
                const data = await response.json()
                console.log("this is the profile data: ", data.data)
                setMessages(data.data.messages)
                setPersonalPost(data.data.posts)
            } catch (error) {
                console.log(error)
            }
            
        }
        profileData()
    }, [])
    async function deleteButton(id) {
        console.log(id)
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${id}`, {
                method: "DELETE",
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            const data = await response.json()
            console.log(data)
            setPeoplePost(peoplePost.filter((post) => {
                return post._id != id 
            }))
            setPersonalPost(personalPost.filter((post) => {
                return post._id != id 
            }))
            navigate("/profile")
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div>
            <h3>Profile</h3>
            <div id="profile-container">
            {
                messages.length ? messages.map((message, idx) => {
                    return <div key={idx} id="my-message-container">
                        <p>Message: {message.content}</p>
                        </div>
                }) : <p>There are no messages!</p>
                
            },
            {
                filteredArray.length ? filteredArray.map((post, idx) => {
                    
                    return <div key={idx} id="my-post-container">
                        <p>Your Post: {post.title}</p>
                        <button onClick={(e) => {
                            e.preventDefault()
                            deleteButton(post._id)}} id="delete-button">Delete</button>
                            <Link to={`/editpost/${post._id}`}>Edit Post</Link>
                        </div>
                }) : <p>There are no posts!</p>
                
            }
            
            </div>
            <Link to="/createpost" id="create-new-post-link">Create New Post</Link>
        
        
            
        </div>
    )
}

export default ProfilePage