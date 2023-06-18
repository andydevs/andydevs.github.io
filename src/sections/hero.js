import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const HeroContainer = styled.div`
    margin: 0;
    display: grid;
`

const HeroText = styled.div`
    grid-area: 1/1;
    justify-self: right;
    align-self: end;
    margin-right: 5%;
    margin-bottom: 5%;

    display: flex;
    flex-direction: column;
    align-items: left;
`

const HeroTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 50pt;
    @media screen and (max-width: 1400px) {
        font-size: 46pt;
    }
    @media screen and (max-width: 1080px) {
        font-size: 40pt;
        margin-bottom: 10pt;
    }
    &:before {
        content: '';
    }
`

const HeroSubtitle = styled.h2`
    margin: 0;
    font-size: 30pt;
    font-weight: 300 !important;
    color: var(--faded);
    margin-top: -8pt;
    @media screen and (max-width: 1400px) {
        font-size: 20pt;
        margin-top: -6pt;
    }
    &:before {
        content: '';
    }
`

export default function Hero() {
    const hero = useStaticQuery(graphql`
        query HeroImageQuery {
            desktop: file(relativePath: {eq: "images/fractal-desktop.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH,
                        placeholder: DOMINANT_COLOR,
                        quality: 100
                    )
                }
            }
        }
    `)

    return (
        <HeroContainer>
            <GatsbyImage 
                image={hero.desktop.childImageSharp.gatsbyImageData}
                style={{ 
                    gridArea: '1/1',
                    zIndex: -1
                }}
            />
            <HeroText>
                <HeroTitle
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-easing="ease"
                    data-sal-delay="200">
                    Anshul Kharbanda
                </HeroTitle>
                <HeroSubtitle
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-easing="ease"
                    data-sal-delay="300">
                    andydevs
                </HeroSubtitle>
            </HeroText>
        </HeroContainer>
    )
}
