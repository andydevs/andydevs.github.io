import React from "react"
import Hero from "../sections/hero"
import About from "../sections/about";
import Projects from "../sections/projects"
import Work from "../sections/work"
import Footer from "../sections/footer"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --black: #333333;
        --less-black: #404040;
        --blue: #00aaff;
        --dark-blue: #0088cc;
        --white: white;
    }

    * {
        font-family: Arial, sans-serif;
        font-weight: 100;
    }
    body {
        margin: 0;
        background-color: var(--black);
        color: white;
    }
    a::before {
        content: '>';
        margin-right: 2pt;
    }
    a.icon-link::before {
        content: '';
        margin-right: 0;
    }
    a {
        color: var(--blue);
        text-decoration: none;
        margin-left: 2pt;
        margin-right: 2pt;
    }

    h1 {
        color: var(--blue);
        font-size: 24pt;
        padding-bottom: 6pt;
    }
    h1:before,h2:before {
        content: '>';
        margin-right: 4pt;
    }

    ul {
        padding-left: 24pt;
    }

    ul > li {
        margin: 8pt 0pt;
    }
`

const StyledMain = styled.main`
    margin: 12pt 10%;
    @media screen and (max-width: 1200px) {
        margin: 12pt;
    }
`

const Message = styled.p`
    margin: 16pt 0pt;
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