import React from "react"
import Header from "../sections/header"
import Projects from "../sections/projects"
import Education from "../sections/education"
import Skills from "../sections/skills"
import Work from "../sections/work"
import Footer from "../sections/footer"
import Alert from "../components/alert"
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby"
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
                    <Alert>
                        If you're looking for the old blog,
                        you can find it <a href="#">Here</a>
                    </Alert>
                    <Skills/>
                    <Projects/>
                    <Education/>
                    <Work/>
                </main>
                <Footer/>
            </div>
        </div>
    )
}