import React from "react"
import "./header.css"

export default function Header() {
    return (
        <header className='header'>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <li className='nav-link'><a href='#projects'>Projects</a></li>
                    <li className='nav-link'><a href='#education'>Education</a></li>
                    <li className='nav-link'><a href='#skills'>Skills</a></li>
                    <li className='nav-link'><a href='#work-experience'>Work</a></li>
                    <li className='nav-link'><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
            
            <div className='title'>
                <h1 className='title-upper'>Anshul Kharbanda</h1>
                <h2 className='title-lower'>Andydevs</h2>
            </div>
        </header>
    )
}