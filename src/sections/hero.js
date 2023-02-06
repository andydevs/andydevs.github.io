import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/graphics/logo-banner.svg'

const HeroBackground = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

const HeroContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    text-align: left;
    padding: 0pt 16pt;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 800px) {
        right: 50%;
        transform: translate(50%, -50%);
        flex-direction: column;
        align-items: center;
    }
`

const HeroLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
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
    font-size: 80pt;
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
    font-size: 40pt;
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
        <HeroBackground>
            <HeroContainer>
                <HeroLogoContainer>
                    <Logo
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-easing="ease"
                        data-sal-delay="100"
                    />
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
            </HeroContainer>
        </HeroBackground>
    )
}
