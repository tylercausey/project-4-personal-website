import React from "react"
import { Link } from "react-router-dom"

const Header = () => { return (
    <header>
        <div id="header-box">
            <div id="button-box">
                <Link className="button-anchors" to='/'><span> HOME </span></Link>
                <Link className="button-anchors" to='/about-me'><span> ABOUT </span></Link>
                <Link className="button-anchors" to='/portfolio'><span> PORTFOLIO </span></Link>  
            </div>
        </div>
    </header>
)}

export default Header
