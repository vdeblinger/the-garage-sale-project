import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import NavBar from "./NAVBAR";
import { Outlet } from "react-router-dom";

const Homepage = () => {

    const [randomPeoplesPosts, setRandomPeoplesPosts] = useState([])

    useEffect(() => {
        async function getPostsData () {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts")
                const data = await response.json()
                console.log(data)
                console.log(data.data.posts)
                setRandomPeoplesPosts(data.data.posts)
            } catch (error) {
                console.log(error)
            }
        }
        getPostsData()
    }, [])
    
    return (
        <div>
            <NavBar />
            {/* <h1>THE GARAGE SALE</h1> */}
            
            

            <Outlet context={[randomPeoplesPosts, setRandomPeoplesPosts]} />
        </div>
    )
}

export default Homepage