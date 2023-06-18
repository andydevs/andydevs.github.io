import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const HeroWindow = styled.div`
    margin: 0; 
    overflow: hidden;
    position: relative;
`

const HeroImage = styled.img`
    z-index: -1;
    margin: 0;
    padding: 0;

    // Responsive width
    width: auto;
    height: 100%;
    @media screen and (max-aspect-ratio: 1/1) {
        width: 100%;
        height: auto;
    }
`

const HeroTextContainer = styled.div`
    position: absolute;
    bottom: 12%;
    right: 2%;

    padding: 0pt 16pt;
    display: flex;    
    flex-direction: column;
    align-items: left;

    @media screen and (max-width: 1080px) {
        right: 0%;
        left: 0%;
        bottom: 12%;
        padding: 0pt 16pt;
        align-items: center;
        text-align: center;
    }
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
    return (
        <HeroWindow>
            <HeroTextContainer>
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
            </HeroTextContainer>
        </HeroWindow>
    )
}
