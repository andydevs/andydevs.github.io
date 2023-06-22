import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'

const HeroContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
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

    @media screen and (max-aspect-ratio: 1/1) {
        justify-self: center;
        margin: 25% auto;
        align-items: center;
    }
`

const HeroTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 50pt;
    text-indent: -4pt;
    @media screen and (max-aspect-ratio: 1/1) {
        text-align: center;
    }
    @media screen and (max-width: 1400px) {
        font-size: 46pt;
    }
    @media screen and (max-width: 1080px) {
        font-size: 40pt;
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
        content: '>';
        font-weight: 500;
    }
`

export default function Hero() {
    const hero = useStaticQuery(graphql`
        query HeroImageQuery {
            mobile: file(relativePath: {eq: "images/fractal-mobile.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH,
                        placeholder: DOMINANT_COLOR,
                        quality: 100
                    )
                }
            }
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
    const responsiveImages = withArtDirection(getImage(hero.desktop), [
        {
            media: `(min-aspect-ratio: 1/1)`,
            image: getImage(hero.desktop)
        },
        {
            media: `(max-aspect-ratio: 1/1)`,
            image: getImage(hero.mobile)
        }
    ])

    return (
        <HeroContainer>
            <GatsbyImage 
                image={responsiveImages}
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
