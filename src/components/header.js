import React from "react"
import "./header.css"

export default function Header() {
    return (
        <header className='header'>
            <nav className='navbar'>
                <a>Projects</a>
                <a>Education</a>
                <a>Skills</a>
                <a>Work</a>
                <a>Contact</a>
            </nav>
            
            <div className='title'>
                <h1 className='title-upper'>Anshul Kharbanda</h1>
                <h2 className='title-lower'>@andydevs</h2>
            </div>
        </header>
    )
}