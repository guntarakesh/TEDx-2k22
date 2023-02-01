import React from 'react'
import "./Navbar.css"
import logo from "./tedxnitdgp.png"

export default function Navbar() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
        hamburger.classList.toggle("toggle");
    });
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="hamburger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Speakers</a></li>
                    <li><a href="/">Sponsors</a></li>
                    <li><button className="login-button" href="/">Merchandise</button></li>
                    <li><a href="/">Members</a></li>
                    <li><a href="/">Gallery</a></li>
                    <li><button className="login-button" href="/">Register</button></li>
                </ul>
            </nav>

        </div>
    )
}
