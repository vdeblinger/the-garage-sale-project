import React, { useState, useEffect } from "react"
import { useNavigate, useOutletContext, useParams, Link } from "react-router-dom"



const DetailsAboutPosts = () => {
    const [moreDetailedPost, setMoreDetailedPosts] = useState({})
    const navigate = useNavigate()
    const [peoplePost, setPeoplePost] = useOutletContext()
    useEffect(() => {
        for (let i = 0; i < postsOutletContext[0].length; i++) {
            if(postsOutletContext[0][i]._id == id) {
                setMoreDetailedPosts(postsOutletContext[0][i])
                break
            } 
        } 
    }, [])



    
    const postsOutletContext = useOutletContext()
    const { id } = useParams()
    // const moreDetailedPost = postsOutletContext[0][id]
    console.log(postsOutletContext)


    return (
        <div id="more-details">
            {
                moreDetailedPost.description ?
                <p id="description">{moreDetailedPost.description}</p> :
                <p>No description to view.</p>
            },
            {
                moreDetailedPost.price ?
                <p id="description">{moreDetailedPost.price}</p> :
                <p>No description to view.</p>
            },
            {
                moreDetailedPost.location ?
                <p id="description">{moreDetailedPost.location}</p> :
                <p>No description to view.</p>
            },
            {
                moreDetailedPost.active ?
                <p id="description">{moreDetailedPost.active}</p> :
                <p>No description to view.</p>
            },
            {
                moreDetailedPost.title ?
                <p id="description">{moreDetailedPost.title}</p> :
                <p>No description to view.</p>
            }
            
            <Link to={`/messageform/${id}`} id="message-link">Message</Link>
        </div>
    )
}

export default DetailsAboutPosts