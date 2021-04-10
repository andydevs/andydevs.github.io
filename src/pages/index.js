import React from "react"
import Header from "../components/header"
import Projects from "../components/projects"
import Education from "../components/education"
import Skills from "../components/skills"
import Work from "../components/work";
import Contact from "../components/contact"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import "./index.css"

export const query = graphql`
    query PageQuery {
        contentJson {
            projects {
                title,
                description,
                website,
                github
            }
        }
    }
`

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

                    <Projects projects={data.contentJson.projects}/>
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