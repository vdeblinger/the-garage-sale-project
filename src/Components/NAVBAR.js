import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav id="nav-bar">
            <a id="title-website">THE GARAGE SALE</a>
            <Link to="/" id="navbar-home">HOME</Link>

            <Link to="/posts" id="navbar-posts">POSTS</Link>

            <Link to="/register" id="navbar-register">REGISTER</Link>

            <Link to="/login" id="navbar-login">LOGIN</Link>

            <Link to="/profile" id="navbar-profile">PROFILE</Link>
            
        </nav>
    )
}

export default NavBar