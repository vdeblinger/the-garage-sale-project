import React, { useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";

const PeoplesPosts = () => {
    

    const postsOutletContext = useOutletContext()
    return (
        <div>
            <h3>Posts</h3>
            {
                postsOutletContext[0].map((information,idx) => {
                    return <div key={idx} id="individual-posts">
                        <p>{information.title}</p> 
                        <p>User: {information.author.username}</p>
                        {/* <p>{information.location}</p> 
                        
                        <p>{information.active}</p> */}
                        <Link to={`/posts/${information._id}`} id="more-details-link">View More Details</Link>
                        
                        
                    </div>
                })
            }
        </div>
    )
}

export default PeoplesPosts