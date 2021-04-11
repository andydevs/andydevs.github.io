import React from "react"
import "./header.css"

export default function Header() {
    return (
        <header className='header'>
            <nav className='navbar'>
                <a href='#projects' className='nav-link'>Projects</a>
                <a href='#education' className='nav-link'>Education</a>
                <a href='#skills' className='nav-link'>Skills</a>
                <a href='#work-experience' className='nav-link'>Work</a>
                <a href='#contact' className='nav-link'>Contact</a>
            </nav>
            
            <div className='title'>
                <h1 className='title-upper'>Anshul Kharbanda</h1>
                <h2 className='title-lower'>Andydevs</h2>
            </div>
        </header>
    )
}