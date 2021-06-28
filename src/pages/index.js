import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components';
import GlobalStyle from '../styling';
import Message from '../components/message'
import Spacer from '../components/spacer'
import Hero from "../sections/hero"
import About from "../sections/about";
import Projects from "../sections/projects"
import Work from "../sections/work"
import Footer from "../sections/footer"

const StyledMain = styled.main`
    margin: 12pt;
`

const WidthLockContainer = styled.div`
    margin: 0pt auto;
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
            <Helmet title={site.siteMetadata.title}/>
            <GlobalStyle/>
            <Hero/>
            <WidthLockContainer>
                <StyledMain>
                    <Spacer/>
                    <About/>
                    <Spacer/>
                    <Projects/>
                    <Spacer/>
                    <Work/>
                    <Spacer/>
                </StyledMain>
            </WidthLockContainer>
            <Footer/>
            <Spacer/>
        </div>
    )
}
