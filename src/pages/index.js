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

                    {/* The projects are in a list */}
                    <div>

                        <div>
                            <h3>Andy's Notebook</h3>
                            <p>
                                Image
                            </p>
                            <p>
                                Ongoing project where I demo
                                and experiement with different
                                programming and data science
                                things in Jupyter Notebook
                            </p>
                            <p>
                                <a href="https://github.com/andydevs/andys-notebook">GitHub</a>
                                <a href="https://andydevs.github.io/andys-notebook">Website</a>
                            </p>
                        </div>

                        <div>
                            <h3>Blocky's Adventure in Blockworld</h3>
                            <p>
                                Image
                            </p>
                            <p>
                                My first videogame... it's not anything
                                to write home about. It serves as a testbench
                                for learning about different elements of game
                                design
                            </p>
                            <p>
                                <a href="https://github.com/andydevs/blockys-adventure-in-blockworld">GitHub</a>
                                <a href="https://github.com/andydevs/blockys-adventure-in-blockworld/releases">Releases</a>
                            </p>
                        </div>

                    </div>

                </section>

                {/* Education */}
                <section>
                    <h2>Education</h2>
                    <div>
                        <p>Drexel University</p>
                        <p>Bachelor's in Computer Engineering</p>
                        <p>Graduated June 2020</p>
                        <p>GPA: 3.20</p>
                    </div>
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

                    {/* Work list */}
                    <div>
                        {/* Work unit */}
                        <div>
                            {/* Title subtitle group */}
                            <div>
                                <h3>Raytheon</h3>
                                <h4>Software Engineer</h4>
                                <h4>2020 - present</h4>
                            </div>
                            <ul>
                                <li>Did some awesome stuff</li>
                                <li>Work in a group of people</li>
                            </ul>
                        </div>

                        <div>
                            <div>
                                <h3>Mathworks</h3>
                                <h4>Live Editor Intern</h4>
                                <h4>2018</h4>
                            </div>
                            <ul>
                                <li>Stuff</li>
                            </ul>
                        </div>
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