import React from "react"
import Header from "../sections/header"
import Projects from "../sections/projects"
import Education from "../sections/education"
import Skills from "../sections/skills"
import Work from "../sections/work";
import Contact from "../sections/contact"
import Footer from "../sections/footer"
import "./index.css"

export default function Home({ data }) {
    return (
        <div>
            <div id='app-root'>
                <Header/>
                <main>
                    {/* Blog redirect notice */}
                    <p>
                        If you're looking for the old blog,
                        you can find it <a href="#">Here</a>
                    </p>
                    <Projects/>
                    <Education/>
                    <Skills/>
                    <Work/>
                    <Contact/>
                </main>
                <Footer/>
            </div>
        </div>
    )
}