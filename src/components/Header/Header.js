import React from 'react'
import "./Header.css"
import Logo from "./logo.png"
import {Link} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (

        <header className="header">

            <Link to="/" className="logo"> <img src={Logo} height="30" width="30"/> My college reviews</Link>

            <nav className="navbar">
                <HashLink to="/#home">home</HashLink>
                <HashLink to="/#about">About</HashLink>
                <HashLink to="/#contact">Contact</HashLink>

            </nav>
                <Link to="/rate" className="try">Rate a college</Link>

            <div id="menu-btn" className="fas fa-bars"></div>

        </header>
    )
}

export default Header
