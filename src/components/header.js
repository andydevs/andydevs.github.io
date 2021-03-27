import React from "react"

export default function Header() {
    return (
        <header>
            {/* Navigation */}
            <nav>
                <a>Projects</a>
                <a>Education</a>
                <a>Skills</a>
                <a>Work Experience</a>
                <a>Contact</a>
            </nav>
            
            <div>
                {/* These two things are kind of together */}
                <div>
                    <h1>Anshul Kharbanda</h1>
                    <h2>Andydevs</h2>
                </div>
                
                {/* Another subtitle */}
                <p>Hobbyist developer person</p>
            </div>
        </header>
    )
}