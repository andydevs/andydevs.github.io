import React from "react"
import Navbar from "../sections/navbar"
import Hero from "../sections/hero"
import Projects from "../sections/projects"
import Education from "../sections/education"
import Work from "../sections/work"
import Footer from "../sections/footer"
import Alert from "../components/alert"
import { Helmet } from "react-helmet"
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
                <Navbar/>
                <main>
                    <Hero/>
                    <Alert>
                        If you're looking for the old blog,
                        you can find it <a href="https://andydevs.github.io/">Here</a>
                    </Alert>
                    <Projects/>
                    <Education/>
                    <Work/>
                </main>
                <Footer/>
            </div>
        </div>
    )
}