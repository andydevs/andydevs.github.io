import React from "react"

export default function Home() {
    return (
        <div>
            {/* Page header (and navigation) */}
            <header>
                {/* Navigation */}
                <nav>
                    <a>Projects</a>
                    <a>Education</a>
                    <a>Skills</a>
                    <a>Work Experience</a>
                    <a>Contact</a>
                </nav>
                
                {/* These two things are kind of together */}
                <div>
                    <h1>Anshul Kharbanda</h1>
                    <h2>Andydevs</h2>
                </div>
                
                <p>Hobbyist developer person</p>

            </header>

            {/* Main content */}
            <main>
                {/* Blog redirect notice */}
                <p>
                    If you're looking for the old blog,
                    you can find it <a href="#">Here</a>
                </p>

                {/* Projects */}
                <section>
                    <h2>Projects</h2>

                    {/* An example project */}
                    <div>
                        <h3>Conduit</h3>
                        <p>
                            (Some image or something)
                        </p>
                        <p>
                            Ongoing research initiative to study
                            temporal closed loop phenomenon known
                            as conduits. Uses quantum computing
                            and 4D simulation technology
                        </p>
                        <p>
                            <a href="#">GitHub</a> 
                            <a href="#">Website</a> 
                            <a href="#">Releases</a>
                        </p>
                    </div>

                </section>

                {/* Education */}
                <section>
                    <h2>Education</h2>
                    <p>Drexel, baby</p>
                </section>

                {/* Skills */}
                <section>
                    <h2>Skills</h2>
                    
                    <table>
                        <tbody>
                            <tr>
                                <td>Programming Languages</td>
                                <td>
                                    <ul>
                                        <li>Python</li>
                                        <li>C++</li>
                                        <li>Javascript</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                </section>

                {/* Work experience */}
                <section>
                    <h2>Work Experience</h2>

                    {/* Work unit */}
                    <div>
                        {/* Title subtitle group */}
                        <div>
                            <h3>Raytheon</h3>
                            <h4>2020 - present</h4>
                        </div>
                        <ul>
                            <li>Did some awesome stuff</li>
                            <li>Work in a group of people</li>
                        </ul>
                    </div>

                </section>

                {/* Contact info */}
                <section>
                    <p>Email</p>
                    <p>Socials</p>
                    <p>Resume</p>
                </section>
            </main>

            {/* Footer */}
            <footer>
                <p>Copystrike &copy; Pewdiepie 2018</p>
                <p>Light and Dark Theme</p>
            </footer>
        </div>
    )
}