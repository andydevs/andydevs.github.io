import React from 'react'
import styled from 'styled-components'
import useAnimation from '../hooks/useAnimation';
import heroAnimation from '../assets/hero-animation';

const HeroDiv = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
`

const HeroContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
`

const Title = styled.h1`
    margin: 0;
    padding-bottom: 0;
    font-size: 44pt;
    color: var(--white);
    &:before { content:''; }
`

const Subtitle = styled.h2`
    margin: 0;
    font-size: 18pt;
    text-align: left;
    color: var(--white);
`

const WhiteA = styled.a`
    color: var(--white);
`

export default function Hero() {
    // Animation
    const animMountRef = useAnimation(heroAnimation);

    // Render
    return (
        <HeroDiv ref={animMountRef}>
            <HeroContainer>
                <Title>Anshul Kharbanda</Title>
                <Subtitle>Andydevs</Subtitle>
                <p>If you're looking for the 
                    old blog, you can find it 
                    <WhiteA href="https://andydevs.github.io/">Here</WhiteA></p>
            </HeroContainer>
        </HeroDiv>
    )
}