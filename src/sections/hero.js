import React from 'react'
import styled from 'styled-components'

const HeroDiv = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`

const HeroContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 10%;
    @media screen and (max-width: 700px) {
        right: 0%;
    }
    transform: translateY(-50%);
    text-align: left;
    padding: 0pt 16pt;
`

const HeroTitle = styled.h1`
    margin: 0;
    padding: 0;

    font-size: 80pt;
    @media screen and (max-width: 1400px) {
        font-size: 40pt;
    }
`

const HeroSubtitle = styled.h2`
    margin: 0;

    font-size: 40pt;
    @media screen and (max-width: 1400px) {
        font-size: 20pt;
    }

    &:before {
        content: '';
    }
`

export default function Hero() {
    return (
        <HeroDiv>
            <HeroContainer>
                <HeroTitle>Anshul Kharbanda</HeroTitle>
                <HeroSubtitle>Andydevs</HeroSubtitle>
            </HeroContainer>
        </HeroDiv>
    )
}
