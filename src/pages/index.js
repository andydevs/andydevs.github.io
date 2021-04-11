import React from "react"
import Header from "../sections/header"
import Projects from "../sections/projects"
import Education from "../sections/education"
import Skills from "../sections/skills"
import Work from "../sections/work";
import Contact from "../sections/contact"
import Footer from "../sections/footer"
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import "./index.css"

export default function Home() {
    const { site } = useStaticQuery(graphql`
        query SiteWideQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div>
            <Helmet title={site.siteMetadata.title}/>
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