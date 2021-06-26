import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components';
import GlobalStyle from '../styling';
import Hero from "../sections/hero"
import About from "../sections/about";
import Projects from "../sections/projects"
import Work from "../sections/work"
import Footer from "../sections/footer"

const StyledMain = styled.main`
    margin: 12pt 10%;
    @media screen and (max-width: 1200px) {
        margin: 12pt;
    }
`

const Message = styled.p`
    margin: 8pt 0pt;
    background-color: var(--dark-blue);
    padding: 8pt;
    display: inline-block;

    /* Panel-like */
    border-radius: 4pt;
    -webkit-box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);
    -moz-box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);
    box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);

    a {
        color: white;
    }
`

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
            <GlobalStyle/>
            <Hero/>
            <StyledMain>
                <Message>
                    If you're looking for the old blog, you can find it 
                    <a href="https://andydevs.github.io/">Here</a>
                </Message>
                <About/>
                <Projects/>
                <Work/>
            </StyledMain>
            <Footer/>
        </div>
    )
}