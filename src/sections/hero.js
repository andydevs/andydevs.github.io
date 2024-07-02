import { graphql, useStaticQuery } from 'gatsby'
import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { starbound } from '../styling'
import Logo from '../../assets/graphics/logo.svg'

const HeroContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    margin: 0;
    display: grid;
`

const HeroTextContainer = styled.div`
    grid-area: 1/1;
    justify-self: right;
    align-self: end;
    margin-right: 5%;
    margin-bottom: 5%;

    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-aspect-ratio: 1/1) {
        flex-direction: column;
        justify-self: center;
        margin: 30% auto;
        align-items: center;
    }
`

const HeroLogo = styled(Logo)`

`

const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;

    @media screen and (max-aspect-ratio: 1/1) {
        justify-self: center;
        align-items: center;
        margin: auto 16pt;
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
    margin-left: -6pt;
    @media screen and (max-width: 1400px) {
        font-size: 20pt;
        margin-top: -6pt;
    }
    &:before {
        content: '';
    }
`

function HeroParticles() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            console.log(engine)
            await loadSlim(engine)
        })
        .then(() => setInit(true))
    }, [])

    const options = useMemo(() => ({
        fpsLimit: 60,
        detectRetina: true,
        pauseOnOutsideViewport: true,
        fullScreen: false,
        particles: {
            color: {
                value: [
                    starbound.lightBlue,
                    starbound.orange,
                    starbound.yellow,
                    starbound.white
                ],
            },
            links: {
                enable: true,
                opacity: 0.5,
                color: starbound.white,
                triangles: {
                    enable: true,
                    opacity: 0.01
                }
            },
            number: {
                value: 70,
                limit: 100,
                density: { enable: true }
            },
            move: {
                enable: true,
                speed: 1,
                random: true,
                gravity: { acceleration: 0.1 }
            },
            opacity: {
                value: { min: 0.2, max: 1.0 },
                animation: {
                    enable: true,
                    speed: 0.01
                }
            }
        }
    }), [])
    
    return <div style={{ gridArea: '1/1', zIndex: -1 }}>
        { init && <Particles style={{
            position: 'inherit !important'
            }} options={options}/> }
    </div>
}

export default function Hero() {
    return (
        <HeroContainer>
            <HeroParticles/>
            <HeroTextContainer 
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-easing="ease"
                data-sal-delay="200">
                <HeroLogo/>
                <HeroText>
                    <HeroTitle>Anshul Kharbanda</HeroTitle>
                    <HeroSubtitle>andydevs</HeroSubtitle>
                </HeroText>
            </HeroTextContainer>
        </HeroContainer>
    )
}
