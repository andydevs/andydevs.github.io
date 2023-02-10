import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/graphics/logo-banner.svg'
import fracDsk from '../assets/images/fractal-desktop.png'
import fracMob from '../assets/images/fractal-mobile.png'

const HeroBackground = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

const HeroImage = styled.img`
    position: absolute;
    z-index: -1;
`

const HeroHeaderContainer = styled.div`
    position: absolute;
    bottom: 2%;
    right: 2%;
    text-align: left;
    padding: 0pt 16pt;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;

    @media screen and (max-width: 800px) {
        right: 50%;
        transform: translateX(50%);
        flex-direction: column;
        align-items: center;
    }
`

const HeroLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    @media screen and (max-width: 1400px) {
        height: 100px;
        width: 100px;
    }
    @media screen and (max-width: 800px) {
        height: 150px;
        width: 150px;
    }
`

const HeroText = styled.div`
    @media screen and (max-width: 800px) {
        text-align: center;
    }
`

const HeroTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 50pt;
    margin-bottom: -8pt;
    @media screen and (max-width: 1400px) {
        font-size: 46pt;
        margin-bottom: -6pt;
    }
    @media screen and (max-width: 800px) {
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

export default function Hero({ animDisabled }) {
    return (
        <HeroBackground>
            <HeroImage src={fracDsk}/>
            <HeroHeaderContainer>
                <HeroLogoContainer>
                    <Logo
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-easing="ease"
                        data-sal-delay="100"/>
                </HeroLogoContainer>
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
            </HeroHeaderContainer>
        </HeroBackground>
    )
}
