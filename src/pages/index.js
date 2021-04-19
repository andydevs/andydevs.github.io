import React from "react"
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
            <main id='app-root'>
                <Hero/>
                <Projects/>
                <Work/>
                <Footer/>
            </main>
        </div>
    )
}