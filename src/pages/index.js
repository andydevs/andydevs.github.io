import React from "react"
import Navbar from "../sections/navbar"
import Hero from "../sections/hero"
import Projects from "../sections/projects"
import Work from "../sections/work"
import Footer from "../sections/footer"
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
                    <Projects/>
                    <Work/>
                </main>
                <Footer/>
            </div>
        </div>
    )
}