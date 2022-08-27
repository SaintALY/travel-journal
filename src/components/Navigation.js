import React from "react"
import "./Navigation.css"
import globe from "../images/globe.png"

function Navbar() {
    return (
        <header>
            <img src={globe} alt="" className="navbar--globe" />
            <span className="navbar--text">my travel journal</span>
        </header>
    )
}

export default Navbar;
