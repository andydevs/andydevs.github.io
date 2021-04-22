import React from 'react'
import styled from 'styled-components'

const HeroDiv = styled.div`
    height: 100vh;
    margin: 0pt 8pt;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    place-items: center;
`

const HeroContainer = styled.div`
    margin: auto;
    display: inline-block;
`

const Title = styled.h1`
    margin: 0;
    padding-bottom: 0;
    font-size: 44pt;
    color: var(--blue);
    &:before { content:''; }
`

const Subtitle = styled.h2`
    margin: 0;
    font-size: 18pt;
    text-align: left;
    color: #ccc;
`

export default function Hero() {
    // Render
    return (
        <HeroDiv>
            <HeroContainer>
                <Title>Anshul Kharbanda</Title>
                <Subtitle>Andydevs</Subtitle>
                <p>If you're looking for the 
                    old blog, you can find it 
                    <a href="https://andydevs.github.io/">Here</a></p>
            </HeroContainer>
        </HeroDiv>
    )
}