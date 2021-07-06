import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import useHexHeroAnimation from '../hooks/useHexHeroAnimation'

const HeroDiv = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
`

const HeroContainer = styled.div`
    position: absolute;
    display: block;
    bottom: 50%;
    left: 50%;
    width: 100%;
    max-width: 1200px;
    text-align: right;
    transform: translate(-50%, 50%);
`

const HeroHeader = styled.header`
    display: inline-block;
    margin: 12pt;
    text-align: left;
`

const Title = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 800;
    font-size: 47pt;
    @media screen and (min-width: 1200px) {
        font-size: 90pt;
    }
    color: var(--white);
    &:before {
        content: '';
    }
`

const Subtitle = styled.h2`
    margin: 0;
    font-size: 18pt;
    text-indent: 8pt;
    @media screen and (min-width: 1200px) {
        font-size: 36pt;
    }
    font-weight: 500;
    color: var(--white);
`

export default function Hero() {
    // Gatsby Query
    const {
        site: {
            siteMetadata: { name, title }
        }
    } = useStaticQuery(graphql`
        query HeroQuery {
            site {
                siteMetadata {
                    name {
                        first
                        last
                    }
                    title
                }
            }
        }
    `)

    // Animation
    const animMountRef = useHexHeroAnimation({
        radius: 100,
        spacing: 0.01,
        period: 30
    })

    // Render
    return (
        <HeroDiv ref={animMountRef}>
            <HeroContainer>
                <HeroHeader
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-easing="ease">
                    <Title>{name.first}</Title>
                    <Title>{name.last}</Title>
                    <Subtitle>{title}</Subtitle>
                </HeroHeader>
            </HeroContainer>
        </HeroDiv>
    )
}
