import React from 'react'
import styled from 'styled-components'
import useHexHeroAnimation from '../hooks/useHexHeroAnimation';
import heroAnimation from '../assets/hero-animation';

const HeroDiv = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
`

const HeroContainer = styled.div`
    position: absolute;
    bottom: 0%;
    right: 0%;
    background-color: #333;
    margin: 16pt;
    padding: 16pt;
    display: inline-block;
`

const Title = styled.h1`
    margin: 0;
    padding-bottom: 0;
    font-size: 44pt;
    font-style: bold;
    color: var(--white);
    &:before { content:''; }
`

const Subtitle = styled.h2`
    margin: 0;
    font-size: 18pt;
    text-align: left;
    color: var(--white);
`

export default function Hero() {
    // Animation
    const animMountRef = useHexHeroAnimation(100, 0.01, 0.95);

    // Render
    return (
        <HeroDiv ref={animMountRef}>
            <HeroContainer>
                <Title>Anshul Kharbanda</Title>
                <Subtitle>Andydevs</Subtitle>
            </HeroContainer>
        </HeroDiv>
    )
}