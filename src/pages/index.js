import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import GlobalStyle from '../styling'
import Hero from '../sections/hero'
import About from '../sections/about'
import Projects from '../sections/projects'
import Work from '../sections/work'
import Footer from '../sections/footer'

const StyledMain = styled.main`
    margin: 0pt auto;
    padding-left: calc(12pt + env(safe-area-inset-left, 0px));
    padding-right: calc(12pt + env(safe-area-inset-right, 0pt));
    max-width: 1200px;
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
            <Helmet>
                <title>{site.siteMetadata.title}</title>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1.0,viewport-fit=cover"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black"
                />
                <meta name="theme" content="#000000" />
            </Helmet>
            <GlobalStyle />
            <Hero />
            <StyledMain>
                <About />
                <Projects />
                <Work />
            </StyledMain>
            <Footer />
        </div>
    )
}
